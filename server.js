import express from 'express';
import { google } from 'googleapis';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

// Log environment variables (without sensitive data)
console.log('Environment check:', {
  NODE_ENV: process.env.NODE_ENV,
  GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL ? 'Set' : 'Not set',
  GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY ? 'Set' : 'Not set',
  SPREADSHEET_ID: process.env.SPREADSHEET_ID || '1iQ97qEdsGjxgVjSu-RrQrXBMPbFRwhK5BBSsTjKVFRY',
  SHEET_NAME: process.env.SHEET_NAME || 'web'
});

const app = express();
app.use(cors());
app.use(express.json());

// Function to format private key
const formatPrivateKey = (key) => {
  if (!key) return '';
  // Remove any escaped newlines and add actual newlines
  const formattedKey = key.replace(/\\n/g, '\n');
  // Ensure the key starts and ends correctly
  if (!formattedKey.startsWith('-----BEGIN PRIVATE KEY-----')) {
    return `-----BEGIN PRIVATE KEY-----\n${formattedKey}\n-----END PRIVATE KEY-----`;
  }
  return formattedKey;
};

// Initialize the Google Sheets API
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: formatPrivateKey(process.env.GOOGLE_PRIVATE_KEY),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = process.env.SPREADSHEET_ID || '1iQ97qEdsGjxgVjSu-RrQrXBMPbFRwhK5BBSsTjKVFRY';
const SHEET_NAME = process.env.SHEET_NAME || 'web';

app.post('/api/join-club', async (req, res) => {
  try {
    console.log('Received request:', {
      body: req.body,
      headers: req.headers
    });

    const { name, phone, email, submarineId } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !submarineId) {
      console.error('Missing required fields:', { name, phone, email, submarineId });
      return res.status(400).json({ 
        success: false,
        message: 'Missing required fields',
        details: { name: !name, phone: !phone, email: !email }
      });
    }

    const timestamp = new Date().toISOString();
    const values = [[timestamp, name, phone, email]];

    console.log('Attempting to access spreadsheet:', {
      spreadsheetId: SPREADSHEET_ID,
      sheetName: SHEET_NAME,
      values
    });

    // First, verify we can access the spreadsheet
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

    // Append the data
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:E`,
      valueInputOption: 'RAW',
      resource: {
        values: [[name, phone, email, submarineId]]
      },
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
  } catch (error) {
    console.error('Error processing registration:', {
      error,
      errorMessage: error.message,
      errorStack: error.stack,
      credentials: {
        clientEmail: process.env.GOOGLE_CLIENT_EMAIL ? 'Set' : 'Not set',
        privateKeyLength: process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.length : 0
      }
    });
    
    return res.status(500).json({ 
      success: false,
      message: 'Failed to process registration',
      error: {
        message: error.message,
        code: error.code,
        details: error.response?.data
      }
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Node version:', process.version);
  console.log('OpenSSL version:', process.versions.openssl);
}).on('error', (err) => {
  console.error('Failed to start server:', err);
}); 