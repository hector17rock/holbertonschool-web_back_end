// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // remove header
    const header = lines.shift().split(',');
    const fieldIndex = header.indexOf('field');

    const students = {};
    lines.forEach((line) => {
      const row = line.split(',');
      const firstname = row[0];
      const field = row[fieldIndex];

      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
    });

    console.log(`Number of students: ${lines.length}`);
    for (const [field, list] of Object.entries(students)) {
      console.log(
        `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

