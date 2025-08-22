import HolbertonCourse from './2-hbtn_course.js';

console.log('=== Testing HolbertonCourse ===\n');

// Test 1: Valid course creation
console.log('1. Valid course creation:');
const course1 = new HolbertonCourse('JavaScript Fundamentals', 40, ['Alice', 'Bob', 'Charlie']);
console.log(`Name: ${course1.name}`);
console.log(`Length: ${course1.length}`);
console.log(`Students: ${course1.students}`);
console.log('');

// Test 2: Valid setters
console.log('2. Testing valid setters:');
course1.name = 'Advanced JavaScript';
course1.length = 60;
course1.students = ['Dave', 'Eve'];
console.log(course1);
console.log('');

// Test 3: Invalid name type
console.log('3. Testing invalid name (number):');
try {
  course1.name = 123;
} catch (err) {
  console.log(`Error caught: ${err.message}`);
}
console.log('');

// Test 4: Invalid length type
console.log('4. Testing invalid length (string):');
try {
  course1.length = '50';
} catch (err) {
  console.log(`Error caught: ${err.message}`);
}
console.log('');

// Test 5: Invalid students (not array)
console.log('5. Testing invalid students (not array):');
try {
  course1.students = 'John Doe';
} catch (err) {
  console.log(`Error caught: ${err.message}`);
}
console.log('');

// Test 6: Invalid students (array with non-strings)
console.log('6. Testing invalid students (array with numbers):');
try {
  course1.students = ['John', 123, 'Jane'];
} catch (err) {
  console.log(`Error caught: ${err.message}`);
}
console.log('');

// Test 7: Invalid creation - wrong length type
console.log('7. Testing invalid creation (length as string):');
try {
  const _course2 = new HolbertonCourse('Python', '30', ['Student1']);
} catch (err) {
  console.log(`Error caught: ${err.message}`);
}
console.log('');

// Test 8: Invalid creation - wrong students type
console.log('8. Testing invalid creation (students as string):');
try {
  const _course3 = new HolbertonCourse('React', 25, 'Student1, Student2');
} catch (err) {
  console.log(`Error caught: ${err.message}`);
}
console.log('');

console.log('=== All tests completed ===');
