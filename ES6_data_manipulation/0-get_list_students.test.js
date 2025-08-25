import getListStudents from './0-get_list_students.js';

test('getListStudents is implemented correctly', () => {
  expect(getListStudents()).toEqual([
    { firstName: 'Guillaume', id: 1, location: 'San Francisco' },
    { firstName: 'James', id: 2, location: 'Columbia' },
    { firstName: 'Serena', id: 5, location: 'San Francisco' }
  ]);
});

test('getListStudents returns an array', () => {
  expect(Array.isArray(getListStudents())).toBe(true);
});

test('getListStudents returns correct number of students', () => {
  expect(getListStudents()).toHaveLength(3);
});

test('each student has id, firstName, and location properties', () => {
  const students = getListStudents();
  students.forEach(student => {
    expect(student).toHaveProperty('id');
    expect(student).toHaveProperty('firstName');
    expect(student).toHaveProperty('location');
    expect(typeof student.id).toBe('number');
    expect(typeof student.firstName).toBe('string');
    expect(typeof student.location).toBe('string');
  });
});
