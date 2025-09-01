const process = require('process');

// Display welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Make stdin readable
process.stdin.setEncoding('utf8');

// Handle data input
process.stdin.on('data', (data) => {
  const name = data.trim();
  process.stdout.write(`Your name is: ${name}\n`);
});

// Handle end of input (when user presses Ctrl+D or when piped input ends)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
