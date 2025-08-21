import initializeRooms from './1-make_classrooms.js';
import ClassRoom from './0-classroom.js';

describe('initializeRooms', () => {
  test('should return an array of 3 ClassRoom objects', () => {
    const rooms = initializeRooms();
    expect(rooms).toHaveLength(3);
    expect(rooms[0]).toBeInstanceOf(ClassRoom);
    expect(rooms[1]).toBeInstanceOf(ClassRoom);
    expect(rooms[2]).toBeInstanceOf(ClassRoom);
  });

  test('should have correct student sizes', () => {
    const rooms = initializeRooms();
    expect(rooms[0]._maxStudentsSize).toBe(19);
    expect(rooms[1]._maxStudentsSize).toBe(20);
    expect(rooms[2]._maxStudentsSize).toBe(34);
  });

  test('should return different instances each time', () => {
    const rooms1 = initializeRooms();
    const rooms2 = initializeRooms();
    expect(rooms1[0]).not.toBe(rooms2[0]);
    expect(rooms1[1]).not.toBe(rooms2[1]);
    expect(rooms1[2]).not.toBe(rooms2[2]);
  });
});
