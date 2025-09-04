import { strict as assert } from 'assert';
import { spawn } from 'child_process';

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
          assert(output.includes('Welcome to Holberton School, what is your name?'));
          assert(output.includes('Your name is: John'));
          assert(output.includes('This important software is now closing'));
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
          assert(output.includes('Your name is: Alice'));
          assert(output.includes('This important software is now closing'));
          done();
        }, 200);
      }, 100);
    });
  }));
});
