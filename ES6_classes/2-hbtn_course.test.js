import HolbertonCourse from './2-hbtn_course.js';

describe('HolbertonCourse', () => {
  test('should create a course with valid parameters', () => {
    const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    expect(course.name).toBe('ES6');
    expect(course.length).toBe(1);
    expect(course.students).toEqual(['Bob', 'Jane']);
  });

  test('should store attributes in underscore versions', () => {
    const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    expect(course._name).toBe('ES6');
    expect(course._length).toBe(1);
    expect(course._students).toEqual(['Bob', 'Jane']);
  });

  test('should allow setting valid name', () => {
    const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    course.name = 'Python 101';
    expect(course.name).toBe('Python 101');
    expect(course._name).toBe('Python 101');
  });

  test('should throw TypeError when setting invalid name', () => {
    const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    expect(() => {
      course.name = 12;
    }).toThrow(TypeError);
    expect(() => {
      course.name = 12;
    }).toThrow('Name must be a string');
  });

  test('should throw TypeError when creating course with invalid name', () => {
    expect(() => {
      new HolbertonCourse(12, 1, ['Bob', 'Jane']);
    }).toThrow(TypeError);
    expect(() => {
      new HolbertonCourse(12, 1, ['Bob', 'Jane']);
    }).toThrow('Name must be a string');
  });

  test('should throw TypeError when creating course with invalid length', () => {
    expect(() => {
      new HolbertonCourse('ES6', '1', ['Bob', 'Jane']);
    }).toThrow(TypeError);
    expect(() => {
      new HolbertonCourse('ES6', '1', ['Bob', 'Jane']);
    }).toThrow('Length must be a number');
  });

  test('should throw TypeError when setting invalid length', () => {
    const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    expect(() => {
      course.length = '2';
    }).toThrow(TypeError);
    expect(() => {
      course.length = '2';
    }).toThrow('Length must be a number');
  });

  test('should throw TypeError when creating course with invalid students', () => {
    expect(() => {
      new HolbertonCourse('ES6', 1, 'Bob');
    }).toThrow(TypeError);
    expect(() => {
      new HolbertonCourse('ES6', 1, ['Bob', 123]);
    }).toThrow(TypeError);
    expect(() => {
      new HolbertonCourse('ES6', 1, ['Bob', 123]);
    }).toThrow('Students must be an array of strings');
  });

  test('should throw TypeError when setting invalid students', () => {
    const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    expect(() => {
      course.students = 'Bob';
    }).toThrow(TypeError);
    expect(() => {
      course.students = ['Bob', 123];
    }).toThrow(TypeError);
  });
});
