import getStudentsByLocation from './2-get_students_by_loc.js';
import getListStudents from './0-get_list_students.js';

test('getStudentsByLocation returns students in San Francisco', () => {
  const students = getListStudents();
  const sanFranciscoStudents = getStudentsByLocation(students, 'San Francisco');
  
  expect(sanFranciscoStudents).toHaveLength(2);
  expect(sanFranciscoStudents).toEqual([
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ]);
});

test('getStudentsByLocation returns students in Columbia', () => {
  const students = getListStudents();
  const columbiaStudents = getStudentsByLocation(students, 'Columbia');
  
  expect(columbiaStudents).toHaveLength(1);
  expect(columbiaStudents).toEqual([
    { id: 2, firstName: 'James', location: 'Columbia' }
  ]);
});

test('getStudentsByLocation returns empty array for non-existent city', () => {
  const students = getListStudents();
  const newYorkStudents = getStudentsByLocation(students, 'New York');
  
  expect(newYorkStudents).toEqual([]);
});

test('getStudentsByLocation is case sensitive', () => {
  const students = getListStudents();
  const lowerCaseStudents = getStudentsByLocation(students, 'san francisco');
  
  expect(lowerCaseStudents).toEqual([]);
});

test('getStudentsByLocation returns array', () => {
  const students = getListStudents();
  const result = getStudentsByLocation(students, 'San Francisco');
  
  expect(Array.isArray(result)).toBe(true);
});

test('getStudentsByLocation works with empty array', () => {
  const emptyStudents = [];
  const result = getStudentsByLocation(emptyStudents, 'San Francisco');
  
  expect(result).toEqual([]);
});

test('getStudentsByLocation preserves original student objects', () => {
  const students = getListStudents();
  const sanFranciscoStudents = getStudentsByLocation(students, 'San Francisco');
  
  sanFranciscoStudents.forEach(student => {
    expect(student).toHaveProperty('id');
    expect(student).toHaveProperty('firstName');
    expect(student).toHaveProperty('location');
    expect(student.location).toBe('San Francisco');
  });
});
