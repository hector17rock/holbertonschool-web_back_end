const countStudents = require('./2-read_file');

// Test cases
test('No database file', () => {
  expect(() => countStudents('nope.csv')).toThrow('Cannot load the database');
});

console.log('Tests completed.');
