import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length <= 1) {
          resolve({});
          return;
        }

        // Remove header line and filter empty lines
        const students = lines.slice(1).filter((line) => line.trim() !== '');

        // Group students by field
        const fields = {};

        students.forEach((line) => {
          const [firstname, lastname, age, field] = line.split(',');
          if (firstname && lastname && age && field) {
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstname);
          }
        });

        resolve(fields);
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

export default readDatabase;
