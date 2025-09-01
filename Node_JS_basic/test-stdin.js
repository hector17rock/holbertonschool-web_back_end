const { spawn } = require('child_process');

function runTest1() {
  console.log('--- Test 1: Interactive (no input piped) ---');
  const interactive = spawn('node', ['1-stdin.js'], { stdio: ['pipe', 'inherit', 'inherit'] });
  
  // Simulate typing "Bob" after a delay
  setTimeout(() => {
    interactive.stdin.write('Bob\n');
    interactive.stdin.end();
  }, 500);
  
  interactive.on('close', () => {
    runTest2();
  });
}

function runTest2() {
  console.log('\n--- Test 2: Piped input ---');
  const piped = spawn('node', ['1-stdin.js']);
  
  piped.stdin.write('John\n');
  piped.stdin.end();
  
  piped.stdout.on('data', (data) => {
    process.stdout.write(data);
  });
  
  piped.on('close', () => {
    console.log('\n--- End of Test 2 ---');
  });
}

// Start with test 1
runTest1();

