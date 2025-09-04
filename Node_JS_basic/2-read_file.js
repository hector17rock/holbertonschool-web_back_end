import fs from 'fs';

export function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const content = fs.readFileSync(path, 'utf-8').trim();
  const lines = content.split('\n');
  const header = lines.shift().split(',');
  
  const fields = {};
  lines.forEach((line) => {
    const values = line.split(',');
    const field = values[header.length - 1]; // last column
    if (!fields[field]) fields[field] = [];
    fields[field].push(values[0]); // first column (name)
  });

  console.log(`Number of students: ${lines.length}`);
  for (const field in fields) {
    console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
  }

  return fields;
}

