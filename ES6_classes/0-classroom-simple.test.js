import ClassRoom from './0-classroom.js';

// Simple test runner that doesn't require Jest
function runTests() {
  console.log('Running ClassRoom tests...\n');
  
  let testCount = 0;
  let passedTests = 0;
  
  function test(description, testFn) {
    testCount++;
    try {
      testFn();
      console.log(`✓ Test ${testCount}: ${description}`);
      passedTests++;
    } catch (error) {
      console.log(`✗ Test ${testCount}: ${description}`);
      console.log(`  Error: ${error.message}`);
    }
  }
  
  function expect(actual) {
    return {
      toBe(expected) {
        if (actual !== expected) {
          throw new Error(`Expected ${expected}, but got ${actual}`);
        }
      }
    };
  }
  
  // Test 1: should create a ClassRoom instance with maxStudentsSize
  test('should create a ClassRoom instance with maxStudentsSize', () => {
    const classroom = new ClassRoom(10);
    expect(classroom._maxStudentsSize).toBe(10);
  });
  
  // Test 2: should handle different maxStudentsSize values  
  test('should handle different maxStudentsSize values', () => {
    const classroom1 = new ClassRoom(20);
    const classroom2 = new ClassRoom(5);
    
    expect(classroom1._maxStudentsSize).toBe(20);
    expect(classroom2._maxStudentsSize).toBe(5);
  });
  
  // Test 3: should handle zero maxStudentsSize
  test('should handle zero maxStudentsSize', () => {
    const classroom = new ClassRoom(0);
    expect(classroom._maxStudentsSize).toBe(0);
  });
  
  // Test 4: should handle large maxStudentsSize
  test('should handle large maxStudentsSize', () => {
    const classroom = new ClassRoom(100);
    expect(classroom._maxStudentsSize).toBe(100);
  });
  
  console.log(`\nResults: ${passedTests}/${testCount} tests passed`);
  
  if (passedTests === testCount) {
    console.log('✅ All tests passed!');
  } else {
    console.log('❌ Some tests failed.');
    process.exit(1);
  }
}

runTests();
