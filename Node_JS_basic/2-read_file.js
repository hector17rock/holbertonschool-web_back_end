const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch {
    throw new Error('Cannot load the database');
  }

  // Split lines and filter out empty lines
  const lines = data
    .split('\n')
    .filter((line) => line.trim() !== '');

  if (lines.length === 0) {
    console.log('Number of students: 0');
    return;
  }

  // Remove header and get indices
  const header = lines.shift().split(',');
  const firstNameIdx = header.indexOf('firstname');
  const fieldIdx = header.indexOf('field');

  // Group students by field
  const groups = {};
  for (const line of lines) {
    const cols = line.split(',');
    const firstName = cols[firstNameIdx];
    const field = cols[fieldIdx];
    if (!groups[field]) groups[field] = [];
    groups[field].push(firstName);
  }

  // Output results
  console.log(`Number of students: ${lines.length}`);
  for (const field of Object.keys(groups)) {
    console.log(
      `Number of students in ${field}: ${groups[field].length}. List: ${groups[field].join(', ')}`
    );
  }
}

module.exports = countStudents;

