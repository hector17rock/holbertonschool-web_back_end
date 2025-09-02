const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = {};

    for (const line of lines.slice(1)) {
      const [firstname, , , field] = line.split(',');

      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
    }

    const totalStudents = Object.values(students).reduce((a, b) => a + b.length, 0);
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
