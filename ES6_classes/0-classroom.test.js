import ClassRoom from './0-classroom.js';

describe('ClassRoom', () => {
  test('should create a classroom with maxStudentsSize', () => {
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10);
  });

  test('should handle different maxStudentsSize values', () => {
    const room1 = new ClassRoom(25);
    const room2 = new ClassRoom(50);
    
    expect(room1._maxStudentsSize).toBe(25);
    expect(room2._maxStudentsSize).toBe(50);
  });
});
