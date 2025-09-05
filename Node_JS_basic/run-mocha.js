#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Get the test file from arguments
let testFile = process.argv[2];

// If no argument provided, check if it's being run via npm with arguments
if (!testFile && process.env.npm_config_argv) {
  try {
    const npmArgs = JSON.parse(process.env.npm_config_argv);
    if (npmArgs.original && npmArgs.original.length > 2) {
      testFile = npmArgs.original[2];
    }
  } catch (e) {
    // Ignore parsing errors
  }
}

// If still no test file, show usage
if (!testFile) {
  console.error('Usage: node run-mocha.js <test-file>');
  console.error('   or: npm test <test-file>');
  process.exit(1);
}

console.log(`Running test file: ${testFile}`);

// Build the mocha command
const mochaPath = path.join(__dirname, 'node_modules', 'mocha', 'bin', 'mocha');
const args = ['--require', 'babel-register', '--exit', testFile];

// Run mocha
const child = spawn('node', [mochaPath].concat(args), {
  stdio: 'inherit',
  cwd: __dirname
});

child.on('close', (code) => {
  process.exit(code);
});

child.on('error', (error) => {
  console.error('Error running mocha:', error);
  process.exit(1);
});
