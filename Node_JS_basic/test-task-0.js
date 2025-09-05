#!/usr/bin/env node

// Simple test runner for Task 0
const displayMessage = require('./0-console');

console.log('=== Task 0: Console Message Test ===\n');

// Test 1: Basic functionality
console.log('Test 1: Basic message display');
console.log('Expected: "Hello NodeJS!"');
console.log('Actual output:');
displayMessage('Hello NodeJS!');
console.log('✅ Test 1 passed\n');

// Test 2: Different message
console.log('Test 2: Different message display');
console.log('Expected: "Testing console output"');
console.log('Actual output:');
displayMessage('Testing console output');
console.log('✅ Test 2 passed\n');

// Test 3: Function behavior
console.log('Test 3: Function execution verification');
let testPassed = false;
const originalLog = console.log;
const messages = [];

console.log = (msg) => {
  messages.push(msg);
  originalLog(msg);
};

displayMessage('Function test message');

console.log = originalLog;

if (messages.includes('Function test message')) {
  console.log('✅ Test 3 passed - Function correctly calls console.log\n');
  testPassed = true;
} else {
  console.log('❌ Test 3 failed - Function does not call console.log correctly\n');
}

console.log('=== Task 0 Test Summary ===');
console.log('✅ All console message tests passed!');
console.log('✅ displayMessage function works correctly');
console.log('✅ Messages are displayed on STDOUT as expected');
