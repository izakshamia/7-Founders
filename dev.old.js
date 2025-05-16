import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set Node.js options for OpenSSL
process.env.NODE_OPTIONS = '--openssl-legacy-provider';

// Function to start a process
function startProcess(command, args, env = {}) {
  return spawn(command, args, {
    stdio: 'inherit',
    env: {
      ...process.env,
      ...env,
      NODE_OPTIONS: '--openssl-legacy-provider'
    }
  });
}

// Start the Express server
const server = startProcess('node', ['server.js'], {
  PORT: '3000'
});

// Start the Vite dev server
const vite = startProcess('yarn', ['dev']);

// Handle process termination
function cleanup() {
  console.log('\nShutting down servers...');
  server.kill();
  vite.kill();
  process.exit(0);
}

// Handle various termination signals
process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
process.on('exit', cleanup);

// Handle errors
server.on('error', (error) => {
  console.error('Failed to start Express server:', error);
  cleanup();
});

vite.on('error', (error) => {
  console.error('Failed to start Vite server:', error);
  cleanup();
});

// Handle process exit
process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  cleanup();
});

console.log('Development servers started. Press Ctrl+C to stop.'); 