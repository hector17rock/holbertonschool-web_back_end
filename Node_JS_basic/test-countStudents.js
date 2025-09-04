const countStudents = require('./2-read_file');

// Test cases
test('no database file', () => {
  expect(() => countStudents('nope.csv')).toThrow('Cannot load the database');
});

console.log('Tests completed.');
