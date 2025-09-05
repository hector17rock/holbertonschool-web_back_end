const { expect } = require('chai');
const sinon = require('sinon');
const displayMessage = require('./0-console');

describe('Task 0: Console Message Display', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should display the correct message on STDOUT', () => {
    const testMessage = 'Hello NodeJS!';
    
    displayMessage(testMessage);
    
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith(testMessage)).to.be.true;
  });

  it('should execute console.log exactly once', () => {
    const testMessage = 'Test message for console';
    
    displayMessage(testMessage);
    
    expect(consoleLogSpy.callCount).to.equal(1);
  });

  it('should pass the exact message parameter to console.log', () => {
    const exactMessage = 'Exact message test';
    
    displayMessage(exactMessage);
    
    expect(consoleLogSpy.firstCall.args[0]).to.equal(exactMessage);
  });
});
