// 5-http.js
const http = require('http');
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

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    res.statusCode = 200;
    const prefix = 'This is the list of our students';

    if (!DB_PATH) {
      // No database path provided => behave like cannot load
      res.end(`${prefix}\nCannot load the database`);
      return;
    }

    buildStudentsReport(DB_PATH)
      .then((lines) => {
        res.end(`${prefix}\n${lines.join('\n')}`);
      })
      .catch((err) => {
        res.end(`${prefix}\n${err.message}`);
      });
    return;
  }

  // Any other endpoint
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;

