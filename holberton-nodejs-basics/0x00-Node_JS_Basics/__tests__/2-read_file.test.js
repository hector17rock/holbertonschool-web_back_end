const countStudents = require('../2-read_file');

describe('countStudents', () => {
  test('should read and count students from CSV file', () => {
    // Mock console.log to capture output
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    
    expect(() => {
      countStudents('./database.csv');
    }).not.toThrow();
    
    // Restore console.log
    consoleSpy.mockRestore();
  });

  test('should throw error when file does not exist', () => {
    expect(() => {
      countStudents('./nonexistent.csv');
    }).toThrow('Cannot load the database');
  });
});
