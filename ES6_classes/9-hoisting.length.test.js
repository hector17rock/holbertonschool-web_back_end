import { HolbertonClass, StudentHolberton, listOfStudents } from './9-hoisting.js';

describe('Hoisting Module', () => {
  describe('HolbertonClass', () => {
    it('should create a HolbertonClass instance with year and location', () => {
      const holbertonClass = new HolbertonClass(2020, 'San Francisco');
      expect(holbertonClass).toBeInstanceOf(HolbertonClass);
      expect(holbertonClass._year).toBe(2020);
      expect(holbertonClass._location).toBe('San Francisco');
    });

    it('should have working year getter', () => {
      const holbertonClass = new HolbertonClass(2019, 'New York');
      expect(holbertonClass.year).toBe(2019);
    });

    it('should have working location getter', () => {
      const holbertonClass = new HolbertonClass(2020, 'San Francisco');
      expect(holbertonClass.location).toBe('San Francisco');
    });

    it('should handle different year and location combinations', () => {
      const class2019 = new HolbertonClass(2019, 'San Francisco');
      const class2020 = new HolbertonClass(2020, 'New York');
      const class2021 = new HolbertonClass(2021, 'Remote');

      expect(class2019.year).toBe(2019);
      expect(class2019.location).toBe('San Francisco');
      expect(class2020.year).toBe(2020);
      expect(class2020.location).toBe('New York');
      expect(class2021.year).toBe(2021);
      expect(class2021.location).toBe('Remote');
    });
  });

  describe('StudentHolberton', () => {
    let holbertonClass;

    beforeEach(() => {
      holbertonClass = new HolbertonClass(2020, 'San Francisco');
    });

    it('should create a StudentHolberton instance with firstName, lastName, and holbertonClass', () => {
      const student = new StudentHolberton('Guillaume', 'Salva', holbertonClass);
      expect(student).toBeInstanceOf(StudentHolberton);
      expect(student._firstName).toBe('Guillaume');
      expect(student._lastName).toBe('Salva');
      expect(student._holbertonClass).toBe(holbertonClass);
    });

    it('should have working fullName getter', () => {
      const student = new StudentHolberton('John', 'Doe', holbertonClass);
      expect(student.fullName).toBe('John Doe');
    });

    it('should have working holbertonClass getter', () => {
      const student = new StudentHolberton('Alice', 'Smith', holbertonClass);
      expect(student.holbertonClass).toBe(holbertonClass);
      expect(student.holbertonClass.year).toBe(2020);
      expect(student.holbertonClass.location).toBe('San Francisco');
    });

    it('should have working fullStudentDescription getter', () => {
      const student = new StudentHolberton('Guillaume', 'Salva', holbertonClass);
      expect(student.fullStudentDescription).toBe('Guillaume Salva - 2020 - San Francisco');
    });

    it('should work with different class instances', () => {
      const class2019 = new HolbertonClass(2019, 'New York');
      const student1 = new StudentHolberton('Albert', 'Clinton', class2019);
      const student2 = new StudentHolberton('Donald', 'Bush', holbertonClass);

      expect(student1.fullStudentDescription).toBe('Albert Clinton - 2019 - New York');
      expect(student2.fullStudentDescription).toBe('Donald Bush - 2020 - San Francisco');
    });
  });

  describe('listOfStudents - Length and Content Validation', () => {
    it('should have correct length', () => {
      expect(listOfStudents).toBeDefined();
      expect(Array.isArray(listOfStudents)).toBe(true);
      expect(listOfStudents.length).toBe(5);
    });

    it('should contain all StudentHolberton instances', () => {
      listOfStudents.forEach(student => {
        expect(student).toBeInstanceOf(StudentHolberton);
      });
    });

    it('should contain the correct student names', () => {
      const expectedNames = [
        'Guillaume Salva',
        'John Doe', 
        'Albert Clinton',
        'Donald Bush',
        'Jason Sandler'
      ];

      const actualNames = listOfStudents.map(student => student.fullName);
      expect(actualNames).toEqual(expectedNames);
    });

    it('should have students with correct class assignments', () => {
      // Students 1 and 2 should be in 2020 class
      expect(listOfStudents[0].holbertonClass.year).toBe(2020);
      expect(listOfStudents[1].holbertonClass.year).toBe(2020);
      
      // Students 3, 4, and 5 should be in 2019 class  
      expect(listOfStudents[2].holbertonClass.year).toBe(2019);
      expect(listOfStudents[3].holbertonClass.year).toBe(2019);
      expect(listOfStudents[4].holbertonClass.year).toBe(2019);
    });

    it('should have all students in San Francisco location', () => {
      listOfStudents.forEach(student => {
        expect(student.holbertonClass.location).toBe('San Francisco');
      });
    });

    it('should have correct full student descriptions', () => {
      const expectedDescriptions = [
        'Guillaume Salva - 2020 - San Francisco',
        'John Doe - 2020 - San Francisco',
        'Albert Clinton - 2019 - San Francisco',
        'Donald Bush - 2019 - San Francisco',
        'Jason Sandler - 2019 - San Francisco'
      ];

      const actualDescriptions = listOfStudents.map(student => student.fullStudentDescription);
      expect(actualDescriptions).toEqual(expectedDescriptions);
    });

    it('should maintain independence between student instances', () => {
      const student1 = listOfStudents[0];
      const student2 = listOfStudents[1];

      expect(student1._firstName).toBe('Guillaume');
      expect(student2._firstName).toBe('John');
      expect(student1.fullName).toBe('Guillaume Salva');
      expect(student2.fullName).toBe('John Doe');
    });
  });

  describe('Class relationships and hoisting behavior', () => {
    it('should maintain proper class instance relationships', () => {
      // Check that students share class instances appropriately
      const class2020Students = listOfStudents.filter(s => s.holbertonClass.year === 2020);
      const class2019Students = listOfStudents.filter(s => s.holbertonClass.year === 2019);

      expect(class2020Students.length).toBe(2);
      expect(class2019Students.length).toBe(3);

      // Students in same year should share the same class instance
      expect(class2020Students[0].holbertonClass).toBe(class2020Students[1].holbertonClass);
      expect(class2019Students[0].holbertonClass).toBe(class2019Students[1].holbertonClass);
      expect(class2019Students[1].holbertonClass).toBe(class2019Students[2].holbertonClass);
    });

    it('should handle hoisted variables correctly', () => {
      // The listOfStudents should be available even though it's declared after class definitions
      // This tests that the hoisting is working correctly
      expect(listOfStudents).toBeDefined();
      expect(listOfStudents.length).toBeGreaterThan(0);
    });

    it('should export all required components', () => {
      // Test that all exports are available
      expect(HolbertonClass).toBeDefined();
      expect(typeof HolbertonClass).toBe('function');
      expect(StudentHolberton).toBeDefined();
      expect(typeof StudentHolberton).toBe('function');
      expect(listOfStudents).toBeDefined();
      expect(Array.isArray(listOfStudents)).toBe(true);
    });
  });

  describe('Array operations on listOfStudents', () => {
    it('should support array methods', () => {
      // Test that listOfStudents behaves as a proper array
      expect(listOfStudents.length).toBe(5);
      expect(listOfStudents[0]).toBeInstanceOf(StudentHolberton);
      expect(listOfStudents.slice(0, 2).length).toBe(2);
    });

    it('should allow filtering operations', () => {
      const students2020 = listOfStudents.filter(student => student.holbertonClass.year === 2020);
      const students2019 = listOfStudents.filter(student => student.holbertonClass.year === 2019);

      expect(students2020.length).toBe(2);
      expect(students2019.length).toBe(3);
    });

    it('should allow mapping operations', () => {
      const names = listOfStudents.map(student => student.fullName);
      const years = listOfStudents.map(student => student.holbertonClass.year);

      expect(names.length).toBe(5);
      expect(years.length).toBe(5);
      expect(names).toContain('Guillaume Salva');
      expect(years).toContain(2020);
      expect(years).toContain(2019);
    });

    it('should support reduce operations', () => {
      // Count students by year
      const yearCounts = listOfStudents.reduce((acc, student) => {
        const year = student.holbertonClass.year;
        acc[year] = (acc[year] || 0) + 1;
        return acc;
      }, {});

      expect(yearCounts[2019]).toBe(3);
      expect(yearCounts[2020]).toBe(2);
    });
  });

  describe('Edge cases and error handling', () => {
    it('should handle empty names gracefully', () => {
      const holbertonClass = new HolbertonClass(2020, 'San Francisco');
      const student = new StudentHolberton('', '', holbertonClass);
      
      expect(student.fullName).toBe(' ');
      expect(student.fullStudentDescription).toBe('  - 2020 - San Francisco');
    });

    it('should handle special characters in names', () => {
      const holbertonClass = new HolbertonClass(2020, 'San Francisco');
      const student = new StudentHolberton('Jean-Claude', 'Van Damme', holbertonClass);
      
      expect(student.fullName).toBe('Jean-Claude Van Damme');
      expect(student.fullStudentDescription).toBe('Jean-Claude Van Damme - 2020 - San Francisco');
    });

    it('should handle numeric years correctly', () => {
      const holbertonClass = new HolbertonClass(2025, 'Remote');
      const student = new StudentHolberton('Future', 'Student', holbertonClass);
      
      expect(student.holbertonClass.year).toBe(2025);
      expect(student.fullStudentDescription).toBe('Future Student - 2025 - Remote');
    });
  });
});
