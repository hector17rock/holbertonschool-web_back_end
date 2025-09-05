const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((content) => {
      const lines = content.split('\n').filter((line) => line.trim() !== '');

      if (lines.length === 0) {
        throw new Error('Cannot load the database');
      }

      // Remove header line
      lines.shift();

      // Parse student data
      const students = [];
      const fields = {};

      lines.forEach((line) => {
        const parts = line.split(',');
        if (parts.length >= 4) {
          const firstname = parts[0];
          const field = parts[3];

          students.push({ firstname, field });

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      // Log results
      console.log(`Number of students: ${students.length}`);

      Object.keys(fields).forEach((field) => {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      });
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
