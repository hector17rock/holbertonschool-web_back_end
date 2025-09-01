const { spawn } = require('child_process');

console.log('=== Holberton Checker Simulation ===\n');

// Test 1: Interactive mode (manual typing simulation)
console.log('Test 1: Interactive mode');
console.log('bob@dylan:~$ node 1-stdin.js');

const test1 = spawn('node', ['1-stdin.js'], {
  stdio: ['pipe', 'pipe', 'pipe']
});

let test1Output = '';
test1.stdout.on('data', (data) => {
  test1Output += data.toString();
  process.stdout.write(data);
});

// Simulate user typing "Bob" and pressing Enter
setTimeout(() => {
  test1.stdin.write('Bob\n');
  // Note: In interactive mode, user would press Ctrl+D to end
  // For testing, we'll just end the stdin
  test1.stdin.end();
}, 100);

test1.on('close', (code) => {
  console.log('bob@dylan:~$\n');
  
  // Test 2: Piped input mode
  console.log('Test 2: Piped input mode');
  console.log('bob@dylan:~$ echo "John" | node 1-stdin.js');
  
  const test2 = spawn('node', ['1-stdin.js'], {
    stdio: ['pipe', 'pipe', 'pipe']
  });
  
  let test2Output = '';
  test2.stdout.on('data', (data) => {
    test2Output += data.toString();
    process.stdout.write(data);
  });
  
  // Simulate piped input
  test2.stdin.write('John\n');
  test2.stdin.end();
  
  test2.on('close', (code) => {
    console.log('bob@dylan:~$\n');
    
    // Validate results
    console.log('=== Test Results ===');
    console.log('Test 1 (Interactive):', test1Output.includes('Welcome to') && test1Output.includes('Your name is: Bob') ? '✅ PASS' : '❌ FAIL');
    console.log('Test 2 (Piped):', test2Output.includes('Welcome to') && test2Output.includes('Your name is: John') && test2Output.includes('This important software is now closing') ? '✅ PASS' : '❌ FAIL');
  });
});
