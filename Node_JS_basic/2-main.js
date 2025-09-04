// 2-main.js
const countStudents = require('./2-read_file');

const database = process.argv[2]; // take the database file as argument

countStudents(database);
