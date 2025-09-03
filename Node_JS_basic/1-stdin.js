// 1-stdin.js

// Print welcome message immediately
console.log('Welcome to Holberton School, what is your name?');

// Use raw stdin to be compatible with both ESM and CJS environments
process.stdin.setEncoding('utf8');

let printed = false;
let buffer = '';

process.stdin.on('data', (chunk) => {
  if (printed) return;
  buffer += chunk;
  const idx = buffer.indexOf('\n');
  if (idx !== -1) {
    const line = buffer.slice(0, idx).replace(/\r$/, '');
    console.log(`Your name is: ${line}`);
    printed = true;
    console.log('This important software is now closing');
    // Stop reading further input
    process.stdin.pause();
  }
});

