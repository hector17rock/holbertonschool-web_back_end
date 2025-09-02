// 1-stdin.js

// Display the welcome message immediately
console.log('Welcome to Holberton School, what is your name?');

// Enable stdin to read input from the user
process.stdin.setEncoding('utf8');

// Listen for data input
process.stdin.on('data', (input) => {
  // Remove any trailing newline characters
  const name = input.trim();
  console.log(`Your name is: ${name}`);
});

// Listen for the end of input (Ctrl+D or piped input)
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
