// 1-stdin.js
import readline from 'readline';

console.log("Welcome to Holberton School, what is your name?");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// Read one line of input
rl.on('line', (name) => {
  console.log(`Your name is: ${name}`);
  rl.close(); // Close after reading one line
});

rl.on('close', () => {
  console.log("This important software is now closing");
});
