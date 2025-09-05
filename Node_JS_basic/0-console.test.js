const { expect } = require('chai');
const sinon = require('sinon');
const displayMessage = require('./0-console');

describe('0-console.js', () => {
  it('should call console.log with the provided message', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    const message = 'Hello NodeJS!';
    
    displayMessage(message);
    
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith(message)).to.be.true;
    
    consoleLogSpy.restore();
  });
  
  it('should work with different messages', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    const message = 'Test message';
    
    displayMessage(message);
    
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith(message)).to.be.true;
    
    consoleLogSpy.restore();
  });
});
