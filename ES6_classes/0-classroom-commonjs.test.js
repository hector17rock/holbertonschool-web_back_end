const ClassRoom = require('./0-classroom.js').default || require('./0-classroom.js');

describe('ClassRoom', () => {
  test('should create a ClassRoom instance with maxStudentsSize', () => {
    const classroom = new ClassRoom(10);
    expect(classroom._maxStudentsSize).toBe(10);
  });

  test('should handle different maxStudentsSize values', () => {
    const classroom1 = new ClassRoom(20);
    const classroom2 = new ClassRoom(5);
    
    expect(classroom1._maxStudentsSize).toBe(20);
    expect(classroom2._maxStudentsSize).toBe(5);
  });
  
  test('should handle zero maxStudentsSize', () => {
    const classroom = new ClassRoom(0);
    expect(classroom._maxStudentsSize).toBe(0);
  });
  
  test('should handle large maxStudentsSize', () => {
    const classroom = new ClassRoom(100);
    expect(classroom._maxStudentsSize).toBe(100);
  });
});
