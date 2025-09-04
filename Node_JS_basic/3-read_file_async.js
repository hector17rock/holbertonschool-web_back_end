// 3-read_file_async.js
import fs from 'fs';

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .split('\n')
        .filter((line) => line.trim() !== ''); // ignore empty lines

      if (lines.length === 0) {
        console.log('Number of students: 0');
        resolve();
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
          `Number of students in ${field}: ${groups[field].length}. List: ${groups[field].join(', ')}`,
        );
      }

      resolve();
    });
  });
}

export default countStudents;
