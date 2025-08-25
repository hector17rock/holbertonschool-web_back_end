import updateStudentGradeByCity from './4-update_grade_by_city.js';
import getListStudents from './0-get_list_students.js';

test('updateStudentGradeByCity returns San Francisco students with grades', () => {
  const students = getListStudents();
  const grades = [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }];
  const result = updateStudentGradeByCity(students, 'San Francisco', grades);
  
  expect(result).toHaveLength(2);
  expect(result).toEqual([
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
      grade: 86
    },
    {
      id: 5,
      firstName: 'Serena',
      location: 'San Francisco',
      grade: 97
    }
  ]);
});

test('updateStudentGradeByCity returns N/A for missing grades', () => {
  const students = getListStudents();
  const grades = [{ studentId: 5, grade: 97 }]; // Only Serena has a grade
  const result = updateStudentGradeByCity(students, 'San Francisco', grades);
  
  expect(result).toHaveLength(2);
  expect(result).toEqual([
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
      grade: 'N/A'
    },
    {
      id: 5,
      firstName: 'Serena',
      location: 'San Francisco',
      grade: 97
    }
  ]);
});

test('updateStudentGradeByCity returns Columbia students with grades', () => {
  const students = getListStudents();
  const grades = [{ studentId: 2, grade: 88 }];
  const result = updateStudentGradeByCity(students, 'Columbia', grades);
  
  expect(result).toHaveLength(1);
  expect(result).toEqual([
    {
      id: 2,
      firstName: 'James',
      location: 'Columbia',
      grade: 88
    }
  ]);
});

test('updateStudentGradeByCity returns empty array for non-existent city', () => {
  const students = getListStudents();
  const grades = [{ studentId: 1, grade: 90 }];
  const result = updateStudentGradeByCity(students, 'New York', grades);
  
  expect(result).toEqual([]);
});

test('updateStudentGradeByCity works with empty grades array', () => {
  const students = getListStudents();
  const grades = [];
  const result = updateStudentGradeByCity(students, 'San Francisco', grades);
  
  expect(result).toHaveLength(2);
  result.forEach(student => {
    expect(student.grade).toBe('N/A');
  });
});

test('updateStudentGradeByCity preserves original student properties', () => {
  const students = getListStudents();
  const grades = [{ studentId: 1, grade: 95 }];
  const result = updateStudentGradeByCity(students, 'San Francisco', grades);
  
  result.forEach(student => {
    expect(student).toHaveProperty('id');
    expect(student).toHaveProperty('firstName');
    expect(student).toHaveProperty('location');
    expect(student).toHaveProperty('grade');
  });
});

test('updateStudentGradeByCity does not modify original students array', () => {
  const students = getListStudents();
  const originalStudents = JSON.parse(JSON.stringify(students)); // Deep copy
  const grades = [{ studentId: 1, grade: 95 }];
  
  updateStudentGradeByCity(students, 'San Francisco', grades);
  
  // Original array should be unchanged
  expect(students).toEqual(originalStudents);
});

test('updateStudentGradeByCity handles non-matching student IDs in grades', () => {
  const students = getListStudents();
  const grades = [{ studentId: 999, grade: 100 }]; // Non-existent student ID
  const result = updateStudentGradeByCity(students, 'San Francisco', grades);
  
  expect(result).toHaveLength(2);
  result.forEach(student => {
    expect(student.grade).toBe('N/A');
  });
});
