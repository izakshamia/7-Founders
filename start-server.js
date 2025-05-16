import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set Node.js options for OpenSSL
process.env.NODE_OPTIONS = '--openssl-legacy-provider';

// Start the server
const server = spawn('node', ['server.js'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_OPTIONS: '--openssl-legacy-provider'
  }
});

server.on('error', (error) => {
  console.error('Failed to start server:', error);
}); 