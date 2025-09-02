const { spawn } = require("child_process");

process.stdout.write("Welcome to Holberton School, what is your name? \n");
process.stdin.on("data", (input) => {
  const name = input.toString().trim();
  process.stdout.write(`Your name is: ${name} \n`);
  //const child = spawn("echo", ["This important software is now closing"]);
  //child.stdout.pipe(process.stdout);
  //child.on("close", () => {
//    process.exit(0);
//  });
});

process.on("exit", () => {
  console.log("This important software is now closing");
});

