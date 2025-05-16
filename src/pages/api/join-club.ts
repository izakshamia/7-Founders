import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

// Initialize the Google Sheets API
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = '1iQ97qEdsGjxgVjSu-RrQrXBMPbFRwhK5BBSsTjKVFRY';
const SHEET_NAME = 'web';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Set JSON content type
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      message: 'Method not allowed' 
    });
  }

  try {
    // Log environment variables (without sensitive data)
    console.log('Environment check:', {
      hasClientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
      hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
      spreadsheetId: SPREADSHEET_ID,
      sheetName: SHEET_NAME
    });

    const { name, phone, email } = req.body;
    console.log('Received form data:', { name, phone, email });

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

    // Prepare the row data
    const values = [[timestamp, name, phone, email]];
    console.log('Prepared values for spreadsheet:', values);

    try {
      // First, verify we can access the spreadsheet and get sheet info
      const spreadsheet = await sheets.spreadsheets.get({
        spreadsheetId: SPREADSHEET_ID,
        ranges: [`${SHEET_NAME}!A:D`],
        includeGridData: false
      });
      
      console.log('Successfully accessed spreadsheet:', {
        title: spreadsheet.data.properties?.title,
        sheets: spreadsheet.data.sheets?.map(sheet => ({
          title: sheet.properties?.title,
          sheetId: sheet.properties?.sheetId
        }))
      });

      // Then append the data
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
    } catch (sheetsError: any) {
      console.error('Google Sheets API error:', {
        message: sheetsError.message,
        code: sheetsError.code,
        status: sheetsError.status,
        response: sheetsError.response?.data
      });

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
  } catch (error: any) {
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