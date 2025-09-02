// 1-stdin.js

console.log("Welcome to Holberton School, what is your name?");

let inputData = "";

// Read input
process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
  inputData += chunk;
});

// When input ends, process the data
process.stdin.on('end', () => {
  const name = inputData.trim(); // Remove newline
  if (name) {
    console.log(`Your name is: ${name}`);
  }
  console.log("This important software is now closing");
});
