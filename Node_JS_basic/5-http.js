const http = require('http');
const fs = require('fs');
const url = require('url');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        resolve('Number of students: 0');
        return;
      }

      // Remove header line and filter empty lines
      const students = lines.slice(1).filter((line) => line.trim() !== '');

      let output = `Number of students: ${students.length}\n`;

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

      // Build output string for each field
      Object.keys(fields).forEach((field) => {
        const studentList = fields[field].join(', ');
        output += `Number of students in ${field}: ${fields[field].length}. List: ${studentList}\n`;
      });

      resolve(output.trim());
    });
  });
}

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    const databasePath = process.argv[2];

    if (!databasePath) {
      res.statusCode = 500;
      res.end('This is the list of our students\nCannot load the database');
      return;
    }

    try {
      const studentsData = await countStudents(databasePath);
      res.end(`This is the list of our students\n${studentsData}`);
    } catch (error) {
      res.end(`This is the list of our students\n${error.message}`);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
