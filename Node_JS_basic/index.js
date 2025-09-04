import { countStudents } from './2-read_file.js';

const path = './database.csv';

try {
  const students = countStudents(path);
  console.log(students);
} catch (err) {
  console.error(err.message);
}
