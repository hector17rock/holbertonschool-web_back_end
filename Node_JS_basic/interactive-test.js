const { spawn } = require('child_process');

console.log('Testing interactive mode (Bob + Enter, no Ctrl+D):\n');

const child = spawn('node', ['1-stdin.js'], {
  stdio: ['pipe', 'pipe', 'pipe']
});

let output = '';
child.stdout.on('data', (data) => {
  output += data.toString();
  process.stdout.write(data);
});

// Simulate typing "Bob" and pressing Enter (but NOT Ctrl+D)
setTimeout(() => {
  child.stdin.write('Bob\n');
  // Don't call child.stdin.end() - this simulates interactive mode
  // where user just pressed Enter but didn't signal EOF
  
  setTimeout(() => {
    // Kill after showing that no closing message appears
    console.log('\n(Waiting... no closing message because stdin is still open)');
    child.kill();
  }, 1000);
}, 100);

child.on('close', () => {
  console.log('\n✅ Interactive test result:', 
    output.includes('Welcome to') && 
    output.includes('Your name is: Bob') && 
    !output.includes('closing') ? 'PASS' : 'FAIL');
});
