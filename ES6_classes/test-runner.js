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

// Tests for HolbertonCourse Constructor
console.log('Running HolbertonCourse Constructor Tests...\n');

try {
  let testCount = 0;
  
  // Test 1: Valid construction with string name
  testCount++;
  console.log(`✓ Test ${testCount}: Valid construction with string name`);
  const course1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
  assertEquals(course1.name, 'ES6', 'Name should be ES6');
  assertEquals(course1._name, 'ES6', 'Name should be stored in _name');
  
  // Test 2: Valid construction with number length
  testCount++;
  console.log(`✓ Test ${testCount}: Valid construction with number length`);
  assertEquals(course1.length, 1, 'Length should be 1');
  assertEquals(course1._length, 1, 'Length should be stored in _length');
  
  // Test 3: Valid construction with array of strings for students
  testCount++;
  console.log(`✓ Test ${testCount}: Valid construction with array of strings for students`);
  assertEquals(course1.students.length, 2, 'Students array should have 2 elements');
  assertEquals(course1._students.length, 2, 'Students should be stored in _students');
  assertEquals(JSON.stringify(course1.students), JSON.stringify(['Bob', 'Jane']), 'Students should match');
  
  // Test 4: TypeError when name is not a string
  testCount++;
  console.log(`✓ Test ${testCount}: TypeError when name is not a string`);
  assertThrows(
    () => new HolbertonCourse(123, 1, ['Bob', 'Jane']),
    'Name must be a string',
    'Should throw TypeError for non-string name'
  );
  
  // Test 5: TypeError when length is not a number
  testCount++;
  console.log(`✓ Test ${testCount}: TypeError when length is not a number`);
  assertThrows(
    () => new HolbertonCourse('ES6', '1', ['Bob', 'Jane']),
    'Length must be a number',
    'Should throw TypeError for non-number length'
  );
  
  // Test 6: TypeError when students is not an array
  testCount++;
  console.log(`✓ Test ${testCount}: TypeError when students is not an array`);
  assertThrows(
    () => new HolbertonCourse('ES6', 1, 'Bob'),
    'Students must be an array',
    'Should throw TypeError for non-array students'
  );
  
  // Test 7: TypeError when students array contains non-strings
  testCount++;
  console.log(`✓ Test ${testCount}: TypeError when students array contains non-strings`);
  assertThrows(
    () => new HolbertonCourse('ES6', 1, ['Bob', 123, 'Jane']),
    'Students must be an array of strings',
    'Should throw TypeError for array with non-strings'
  );
  
  // Test 8: All attributes stored in underscore versions
  testCount++;
  console.log(`✓ Test ${testCount}: All attributes stored in underscore versions`);
  const course2 = new HolbertonCourse('JavaScript Basics', 3, ['Alice', 'Bob', 'Charlie']);
  assertEquals(course2._name, 'JavaScript Basics', 'Name should be stored in _name');
  assertEquals(course2._length, 3, 'Length should be stored in _length');
  assertEquals(course2._students.length, 3, 'Students should be stored in _students');
  
  console.log(`\n✅ All ${testCount} tests passed! HolbertonCourse constructor working correctly.`);
  
} catch (error) {
  console.error('❌ Test failed:', error.message);
  process.exit(1);
}
