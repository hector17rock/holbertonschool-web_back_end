import getStudentIdsSum from './3-get_ids_sum.js';
import getListStudents from './0-get_list_students.js';

test('getStudentIdsSum returns correct sum for default students', () => {
  const students = getListStudents();
  const sum = getStudentIdsSum(students);
  
  // Expected sum: 1 + 2 + 5 = 8
  expect(sum).toBe(8);
});

test('getStudentIdsSum returns 0 for empty array', () => {
  const emptyStudents = [];
  const sum = getStudentIdsSum(emptyStudents);
  
  expect(sum).toBe(0);
});

test('getStudentIdsSum works with single student', () => {
  const singleStudent = [{ id: 10, firstName: 'Test', location: 'Test City' }];
  const sum = getStudentIdsSum(singleStudent);
  
  expect(sum).toBe(10);
});

test('getStudentIdsSum works with custom student array', () => {
  const customStudents = [
    { id: 10, firstName: 'Alice', location: 'New York' },
    { id: 20, firstName: 'Bob', location: 'Boston' },
    { id: 30, firstName: 'Charlie', location: 'Chicago' }
  ];
  const sum = getStudentIdsSum(customStudents);
  
  // Expected sum: 10 + 20 + 30 = 60
  expect(sum).toBe(60);
});

test('getStudentIdsSum returns a number', () => {
  const students = getListStudents();
  const sum = getStudentIdsSum(students);
  
  expect(typeof sum).toBe('number');
});

test('getStudentIdsSum handles zero IDs correctly', () => {
  const studentsWithZero = [
    { id: 0, firstName: 'Zero', location: 'Zero City' },
    { id: 5, firstName: 'Five', location: 'Five City' }
  ];
  const sum = getStudentIdsSum(studentsWithZero);
  
  // Expected sum: 0 + 5 = 5
  expect(sum).toBe(5);
});

test('getStudentIdsSum handles negative IDs correctly', () => {
  const studentsWithNegative = [
    { id: -1, firstName: 'Negative', location: 'Negative City' },
    { id: 10, firstName: 'Positive', location: 'Positive City' }
  ];
  const sum = getStudentIdsSum(studentsWithNegative);
  
  // Expected sum: -1 + 10 = 9
  expect(sum).toBe(9);
});
