import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data
      .split('\n')
      .filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      resolve({});
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

    resolve(groups);
  });
});

export default readDatabase;
