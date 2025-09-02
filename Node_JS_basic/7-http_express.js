// 7-http_express.js
const express = require('express');
const fs = require('fs');

const DB_PATH = process.argv[2];

function buildStudentsReport(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .split('\n')
        .filter((line) => line.trim() !== '');

      if (lines.length === 0) {
        resolve(['Number of students: 0']);
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

      const output = [`Number of students: ${lines.length}`];
      for (const field of Object.keys(groups).sort()) {
        output.push(
          `Number of students in ${field}: ${groups[field].length}. List: ${groups[field].join(', ')}`
        );
      }

      resolve(output);
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.type('text').send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.type('text');
  const prefix = 'This is the list of our students';

  if (!DB_PATH) {
    res.send(`${prefix}\nCannot load the database`);
    return;
  }

  buildStudentsReport(DB_PATH)
    .then((lines) => {
      res.send(`${prefix}\n${lines.join('\n')}`);
    })
    .catch((err) => {
      res.send(`${prefix}\n${err.message}`);
    });
});

app.listen(1245);

module.exports = app;

