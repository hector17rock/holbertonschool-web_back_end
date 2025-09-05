const { spawn } = require('child_process');
const { expect } = require('chai');

describe('1-stdin.js', () => {
  it('should display welcome message and handle input', () => new Promise((done) => {
    const child = spawn('node', ['1-stdin.js']);

    let output = '';
    child.stdout.on('data', (data) => {
      output += data.toString();
      // Automatically provide input after the prompt
      if (output.includes('Welcome to Holberton School, what is your name?')) {
        child.stdin.write('John\n');
        child.stdin.end();
      }
    });

    child.on('close', () => {
      global.setTimeout(() => {
        global.setTimeout(() => {
          expect(output).to.contain('Welcome to Holberton School, what is your name?');
          expect(output).to.contain('Your name is: John');
          expect(output).to.contain('This important software is now closing');
          done();
        }, 200);
      }, 100);
    });
  }));

  it('should work with piped input', () => new Promise((done) => {
    const child = spawn('bash', ['-c', 'echo "Alice" | node 1-stdin.js']);

    let output = '';
    child.stdout.on('data', (data) => {
      output += data.toString();
    });

    child.on('close', () => {
      global.setTimeout(() => {
        global.setTimeout(() => {
          expect(output).to.contain('Your name is: Alice');
          expect(output).to.contain('This important software is now closing');
          done();
        }, 200);
      }, 100);
    });
  }));
});
