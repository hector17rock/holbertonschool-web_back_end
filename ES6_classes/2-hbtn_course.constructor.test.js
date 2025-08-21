import HolbertonCourse from './2-hbtn_course.js';

describe('HolbertonCourse Constructor', () => {
  test('should create instance with valid string name', () => {
    const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    expect(course.name).toBe('ES6');
    expect(course._name).toBe('ES6');
  });

  test('should create instance with valid number length', () => {
    const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    expect(course.length).toBe(1);
    expect(course._length).toBe(1);
  });

  test('should create instance with valid array of strings for students', () => {
    const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    expect(course.students).toEqual(['Bob', 'Jane']);
    expect(course._students).toEqual(['Bob', 'Jane']);
  });

  test('should throw TypeError when name is not a string', () => {
    expect(() => {
      new HolbertonCourse(123, 1, ['Bob', 'Jane']);
    }).toThrow(TypeError);
    expect(() => {
      new HolbertonCourse(123, 1, ['Bob', 'Jane']);
    }).toThrow('Name must be a string');
  });

  test('should throw TypeError when length is not a number', () => {
    expect(() => {
      new HolbertonCourse('ES6', '1', ['Bob', 'Jane']);
    }).toThrow(TypeError);
    expect(() => {
      new HolbertonCourse('ES6', '1', ['Bob', 'Jane']);
    }).toThrow('Length must be a number');
  });

  test('should throw TypeError when students is not an array', () => {
    expect(() => {
      new HolbertonCourse('ES6', 1, 'Bob');
    }).toThrow(TypeError);
    expect(() => {
      new HolbertonCourse('ES6', 1, 'Bob');
    }).toThrow('Students must be an array');
  });

  test('should throw TypeError when students array contains non-strings', () => {
    expect(() => {
      new HolbertonCourse('ES6', 1, ['Bob', 123, 'Jane']);
    }).toThrow(TypeError);
    expect(() => {
      new HolbertonCourse('ES6', 1, ['Bob', 123, 'Jane']);
    }).toThrow('Students must be an array of strings');
  });

  test('should store all attributes in underscore versions', () => {
    const course = new HolbertonCourse('JavaScript Basics', 3, ['Alice', 'Bob', 'Charlie']);
    expect(course._name).toBe('JavaScript Basics');
    expect(course._length).toBe(3);
    expect(course._students).toEqual(['Alice', 'Bob', 'Charlie']);
  });
});
