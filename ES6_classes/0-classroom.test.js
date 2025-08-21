import ClassRoom from './0-classroom.js';

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
});
