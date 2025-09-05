import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(request, response) {
    const databasePath = process.argv.length > 2 ? process.argv[2] : '';

    try {
      const fields = await readDatabase(databasePath);
      let output = 'This is the list of our students\n';

      // Sort fields alphabetically (case insensitive)
      const sortedFields = Object.keys(fields).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      sortedFields.forEach((field) => {
        const studentList = fields[field].join(', ');
        output += `Number of students in ${field}: ${fields[field].length}. List: ${studentList}\n`;
      });

      response.status(200).send(output.trim());
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const databasePath = process.argv.length > 2 ? process.argv[2] : '';

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(databasePath);
      
      if (fields[major]) {
        const studentList = fields[major].join(', ');
        response.status(200).send(`List: ${studentList}`);
      } else {
        response.status(200).send('List: ');
      }
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
