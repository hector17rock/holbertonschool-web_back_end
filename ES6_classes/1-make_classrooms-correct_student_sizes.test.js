import initializeRooms from './1-make_classrooms.js';

describe('initializeRooms', () => {
  test('should return an array of 3 ClassRoom objects', () => {
    const rooms = initializeRooms();
    expect(rooms).toHaveLength(3);
  });

  test('should create ClassRoom objects with correct student sizes', () => {
    const rooms = initializeRooms();
    
    expect(rooms[0]._maxStudentsSize).toBe(19);
    expect(rooms[1]._maxStudentsSize).toBe(20);
    expect(rooms[2]._maxStudentsSize).toBe(34);
  });

  test('should return ClassRoom instances', () => {
    const rooms = initializeRooms();
    
    rooms.forEach(room => {
      expect(room.constructor.name).toBe('ClassRoom');
      expect(room).toHaveProperty('_maxStudentsSize');
    });
  });
});
