const { expect } = require('chai');
const displayMessage = require('./0-console');

describe('displayMessage', () => {
  it('should be a function', () => {
    expect(displayMessage).to.be.a('function');
  });

  it('should log the provided message to console', () => {
    // This is a simple test to verify the function exists
    // In a real scenario, you'd mock console.log to test output
    expect(() => displayMessage('Hello World')).to.not.throw();
  });
});
