import getListStudentIds from './1-get_list_student_ids.js';
import getListStudents from './0-get_list_students.js';

test('getListStudentIds returns empty array for non-array input', () => {
  expect(getListStudentIds('hello')).toEqual([]);
  expect(getListStudentIds(123)).toEqual([]);
  expect(getListStudentIds(null)).toEqual([]);
  expect(getListStudentIds(undefined)).toEqual([]);
  expect(getListStudentIds({})).toEqual([]);
});

test('getListStudentIds returns empty array for empty array input', () => {
  expect(getListStudentIds([])).toEqual([]);
});

test('getListStudentIds returns correct IDs from student list', () => {
  const students = getListStudents();
  const expectedIds = [1, 2, 5];
  expect(getListStudentIds(students)).toEqual(expectedIds);
});

test('getListStudentIds uses map function correctly', () => {
  const customStudents = [
    { id: 10, firstName: 'Test1', location: 'Location1' },
    { id: 20, firstName: 'Test2', location: 'Location2' },
    { id: 30, firstName: 'Test3', location: 'Location3' }
  ];
  expect(getListStudentIds(customStudents)).toEqual([10, 20, 30]);
});

test('getListStudentIds returns array of numbers', () => {
  const students = getListStudents();
  const ids = getListStudentIds(students);
  expect(Array.isArray(ids)).toBe(true);
  ids.forEach(id => {
    expect(typeof id).toBe('number');
  });
});
