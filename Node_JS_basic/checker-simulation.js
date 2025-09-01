const { spawn } = require('child_process');

console.log('🧪 Holberton Checker Simulation\n');

// Test 1: Interactive mode (just Enter, no Ctrl+D)
console.log('Test 1: Interactive mode (type Bob + Enter, no Ctrl+D)');
console.log('$ node 1-stdin.js');

const interactive = spawn('node', ['1-stdin.js'], {
  stdio: ['pipe', 'pipe', 'pipe']
});

let interactiveOutput = '';
interactive.stdout.on('data', (data) => {
  interactiveOutput += data.toString();
  process.stdout.write(data);
});

// Simulate typing "Bob" and pressing Enter (but NOT Ctrl+D)
setTimeout(() => {
  interactive.stdin.write('Bob\n');
  // DON'T end stdin - this simulates just pressing Enter without Ctrl+D
  
  // Wait a bit, then kill the process to simulate what happens
  setTimeout(() => {
    interactive.kill('SIGTERM');
  }, 500);
}, 100);

interactive.on('close', () => {
  console.log('(Process ended - no closing message expected)\n');
  
  // Test 2: Piped input mode
  console.log('Test 2: Piped input mode');
  console.log('$ echo "John" | node 1-stdin.js');
  
  const piped = spawn('node', ['1-stdin.js'], {
    stdio: ['pipe', 'pipe', 'pipe']
  });
  
  let pipedOutput = '';
  piped.stdout.on('data', (data) => {
    pipedOutput += data.toString();
    process.stdout.write(data);
  });
  
  // Simulate piped input (stdin automatically ends)
  piped.stdin.write('John\n');
  piped.stdin.end(); // This triggers the 'end' event
  
  piped.on('close', () => {
    console.log('\n✅ Validation Results:');
    console.log('Interactive test:', interactiveOutput.includes('Welcome to') && interactiveOutput.includes('Your name is: Bob') && !interactiveOutput.includes('closing') ? '✅ PASS' : '❌ FAIL');
    console.log('Piped test:', pipedOutput.includes('Welcome to') && pipedOutput.includes('Your name is: John') && pipedOutput.includes('closing') ? '✅ PASS' : '❌ FAIL');
  });
});
