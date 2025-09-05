const countStudents = require('./3-read_file_async');

countStudents("database_with_empty_lines.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");
