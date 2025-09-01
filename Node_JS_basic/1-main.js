const { spawn } = require('child_process');

// Test the 1-stdin.js program
const child = spawn('node', ['1-stdin.js']);

// Send test input
child.stdin.write('Test User\n');
child.stdin.end();

// Display output
child.stdout.on('data', (data) => {
  process.stdout.write(data);
});

child.stderr.on('data', (data) => {
  process.stderr.write(data);
});

