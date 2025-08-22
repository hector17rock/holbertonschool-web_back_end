#!/usr/bin/env node

// Direct Jest runner that bypasses all configuration issues
// This script directly invokes Jest with minimal configuration

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get test file from command line arguments
const testFile = process.argv[2] || '';

// Jest path
const jestPath = join(__dirname, 'node_modules', 'jest', 'bin', 'jest.js');

// Jest arguments with minimal configuration
const jestArgs = [
  jestPath,
  '--testEnvironment=node',
  '--no-coverage',
  '--no-cache',
  '--verbose',
  testFile
].filter(Boolean);

// Environment variables
const env = {
  ...process.env,
  NODE_OPTIONS: '--experimental-vm-modules'
};

// Spawn Jest process
const jest = spawn('node', jestArgs, {
  env,
  stdio: 'inherit'
});

jest.on('close', (code) => {
  process.exit(code);
});
