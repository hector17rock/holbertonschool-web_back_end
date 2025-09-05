#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Get the test file from command line arguments
const testFile = process.argv[2];

if (!testFile) {
  console.error('Please provide a test file');
  process.exit(1);
}

// Run Mocha with the test file
const mochaPath = path.join(__dirname, 'node_modules', '.bin', 'mocha');
const args = ['--require', 'babel-register', '--exit', testFile];

const child = spawn(mochaPath, args, {
  stdio: 'inherit',
  cwd: __dirname
});

child.on('close', (code) => {
  process.exit(code);
});
