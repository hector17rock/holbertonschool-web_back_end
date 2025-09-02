// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8'); // must be inside the function
  } catch (err) {
    throw new Error('Cannot load the database'); // exact message
  }

  const lines = data
    .split('\n')
    .filter((line) => line.trim() !== ''); // ignore empty lines

  if (lines.length === 0) {
    console.log('Number of students: 0');
    return;
  }

  const header = lines.shift().split(',');
  const firstNameIdx = header.indexOf('firstname');
  const fieldIdx = header.indexOf('field');

  const groups = {};
  for (const line of lines) {
    const cols = line.split(',');
    const first = cols[firstNameIdx];
    const field = cols[fieldIdx];
    if (!groups[field]) groups[field] = [];
    groups[field].push(first);
  }

  console.log(`Number of students: ${lines.length}`);
  for (const field of Object.keys(groups).sort()) {
    console.log(
      `Number of students in ${field}: ${groups[field].length}. List: ${groups[field].join(', ')}`
    );
  }
}

module.exports = countStudents;

