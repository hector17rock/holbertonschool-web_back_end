const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter(line => line.trim() !== '');
  if (lines.length === 0) {
    console.log('Number of students: 0');
    return;
  }

  // Skip header
  const headers = lines[0].split(',');
  const fieldIndex = headers.indexOf('field');
  const firstNameIndex = headers.indexOf('firstname');

  const studentsByField = {};

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const values = line.split(',');
    if (values.length < headers.length) continue;

    const field = values[fieldIndex].trim();
    const firstName = values[firstNameIndex].trim();

    if (!studentsByField[field]) {
      studentsByField[field] = [];
    }
    studentsByField[field].push(firstName);
  }

  const totalStudents = Object.values(studentsByField).reduce((acc, arr) => acc + arr.length, 0);
  console.log(`Number of students: ${totalStudents}`);

  for (const [field, names] of Object.entries(studentsByField)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;

