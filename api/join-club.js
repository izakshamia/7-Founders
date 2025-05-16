const { google } = require('googleapis');

// Initialize the Google Sheets API
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
// New spreadsheet ID - you'll need to create this spreadsheet and share it with the service account
const SPREADSHEET_ID = '1iQ97qEdsGjxgVjSu-RrQrXBMPbFRwhK5BBSsTjKVFRY';
const SHEET_NAME = 'Responses'; // Changed sheet name to be more descriptive

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      message: 'Method not allowed' 
    });
  }

  try {
    const { name, phone, email } = req.body;

    // Validate required fields
    if (!name || !phone || !email) {
      console.error('Missing required fields:', { name, phone, email });
      return res.status(400).json({ 
        success: false,
        message: 'Missing required fields',
        details: { name: !name, phone: !phone, email: !email }
      });
    }

    const timestamp = new Date().toISOString();
    const values = [[timestamp, name, phone, email]];

    try {
      // First, verify we can access the spreadsheet
      const spreadsheet = await sheets.spreadsheets.get({
        spreadsheetId: SPREADSHEET_ID,
      });

      // Check if the sheet exists, if not create it
      const sheetExists = spreadsheet.data.sheets?.some(
        sheet => sheet.properties?.title === SHEET_NAME
      );

      if (!sheetExists) {
        // Create the sheet if it doesn't exist
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId: SPREADSHEET_ID,
          requestBody: {
            requests: [
              {
                addSheet: {
                  properties: {
                    title: SHEET_NAME,
                  },
                },
              },
            ],
          },
        });

        // Add headers
        await sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: `${SHEET_NAME}!A1:D1`,
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [['Timestamp', 'Name', 'Phone', 'Email']],
          },
        });
      }

      // Append the data
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A:D`,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values,
        },
      });

      console.log('Spreadsheet update response:', {
        status: response.status,
        statusText: response.statusText,
        data: response.data
      });

      return res.status(200).json({ 
        success: true,
        message: 'Registration successful',
        details: response.data
      });
    } catch (sheetsError) {
      console.error('Google Sheets API error:', {
        message: sheetsError.message,
        code: sheetsError.code,
        status: sheetsError.status,
        response: sheetsError.response?.data
      });

      // Check if it's a permission error
      if (sheetsError.code === 403) {
        return res.status(500).json({
          success: false,
          message: 'Permission denied. Please check spreadsheet access.',
          error: {
            message: sheetsError.message,
            code: sheetsError.code
          }
        });
      }

      return res.status(500).json({ 
        success: false,
        message: 'Failed to access spreadsheet',
        error: {
          message: sheetsError.message,
          code: sheetsError.code,
          details: sheetsError.response?.data
        }
      });
    }
  } catch (error) {
    console.error('General error:', {
      message: error.message,
      code: error.code,
      stack: error.stack
    });

    return res.status(500).json({ 
      success: false,
      message: 'Failed to process registration',
      error: {
        message: error.message,
        code: error.code
      }
    });
  }
} 