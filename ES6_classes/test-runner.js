#!/usr/bin/env node

import HolbertonCourse from './2-hbtn_course.js';

// Simple test assertions
function assert(condition, message) {
  if (!condition) {
    throw new Error(`Test failed: ${message}`);
  }
}

function assertEquals(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`Test failed: ${message}. Expected: ${expected}, Got: ${actual}`);
  }
}

function assertThrows(fn, expectedErrorMessage, testMessage) {
  try {
    fn();
    throw new Error(`Test failed: ${testMessage}. Expected error but none was thrown.`);
  } catch (error) {
    if (!error.message.includes(expectedErrorMessage)) {
      throw new Error(`Test failed: ${testMessage}. Expected error "${expectedErrorMessage}" but got "${error.message}"`);
    }
  }
}

// Tests
console.log('Running HolbertonCourse Constructor Tests...\n');

try {
  // Test 1: Valid construction
  console.log('✓ Test 1: Valid construction');
  const course1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
  assertEquals(course1.name, 'ES6', 'Name should be ES6');
  assertEquals(course1.length, 1, 'Length should be 1');
  assertEquals(course1.students.length, 2, 'Students array should have 2 elements');
  
  // Test 2: Underscore storage
  console.log('✓ Test 2: Underscore storage');
  assertEquals(course1._name, 'ES6', 'Name should be stored in _name');
  assertEquals(course1._length, 1, 'Length should be stored in _length');
  assertEquals(course1._students.length, 2, 'Students should be stored in _students');
  
  // Test 3: Invalid name type
  console.log('✓ Test 3: Invalid name type');
  assertThrows(
    () => new HolbertonCourse(123, 1, ['Bob']),
    'Name must be a string',
    'Should throw TypeError for non-string name'
  );
  
  // Test 4: Invalid length type
  console.log('✓ Test 4: Invalid length type');
  assertThrows(
    () => new HolbertonCourse('ES6', '1', ['Bob']),
    'Length must be a number',
    'Should throw TypeError for non-number length'
  );
  
  // Test 5: Invalid students type
  console.log('✓ Test 5: Invalid students type');
  assertThrows(
    () => new HolbertonCourse('ES6', 1, 'Bob'),
    'Students must be an array',
    'Should throw TypeError for non-array students'
  );
  
  // Test 6: Invalid students content
  console.log('✓ Test 6: Invalid students content');
  assertThrows(
    () => new HolbertonCourse('ES6', 1, ['Bob', 123]),
    'Students must be an array of strings',
    'Should throw TypeError for array with non-strings'
  );
  
  console.log('\n✅ All tests passed!');
  
} catch (error) {
  console.error('❌ Test failed:', error.message);
  process.exit(1);
}
