// 1-stdin.js

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let name = '';

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (line) => {
  name = line;
process.stdout.write(`Your name is: ${name}\r`);
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
});

