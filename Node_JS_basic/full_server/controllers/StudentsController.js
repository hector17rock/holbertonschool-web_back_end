import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(request, response) {
    const databasePath = process.argv[2];

    try {
      const students = await readDatabase(databasePath);
      const fields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      let output = 'This is the list of our students';
      for (const field of fields) {
        const list = students[field];
        output += `\nNumber of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
      }

      response.status(200).send(output);
    } catch {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const databasePath = process.argv[2];

    try {
      const students = await readDatabase(databasePath);
      const list = students[major] || [];
      response.status(200).send(`List: ${list.join(', ')}`);
    } catch {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
