const fs = require('fs');

function countStudents(path) {
  let content;
  try {
    content = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = content.split('\n').filter((line) => line.trim() !== '');

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
}

module.exports = countStudents;
