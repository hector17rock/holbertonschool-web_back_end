const countStudents = require('./2-read_file');

// Test cases
describe('countStudents', () => {
  it('no database file', () => {
    expect.assertions(1);
    expect(() => countStudents('nope.csv')).toThrow('Cannot load the database');
  });
});

console.log('Tests completed.');
