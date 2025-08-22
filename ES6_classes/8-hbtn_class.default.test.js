import HolbertonClass from './8-hbtn_class.js';

describe('HolbertonClass', () => {
  describe('constructor', () => {
    it('should create a HolbertonClass instance with size and location', () => {
      const holberton = new HolbertonClass(12, 'Mezzanine');
      expect(holberton).toBeInstanceOf(HolbertonClass);
      expect(holberton._size).toBe(12);
      expect(holberton._location).toBe('Mezzanine');
    });

    it('should handle different size and location combinations', () => {
      const class1 = new HolbertonClass(50, 'San Francisco');
      const class2 = new HolbertonClass(100, 'New York');
      const class3 = new HolbertonClass(0, 'Remote');
      
      expect(class1._size).toBe(50);
      expect(class1._location).toBe('San Francisco');
      expect(class2._size).toBe(100);
      expect(class2._location).toBe('New York');
      expect(class3._size).toBe(0);
      expect(class3._location).toBe('Remote');
    });

    it('should handle string numbers as size', () => {
      const holberton = new HolbertonClass('25', 'Online');
      expect(holberton._size).toBe('25');
      expect(holberton._location).toBe('Online');
    });
  });

  describe('getters', () => {
    let holberton;

    beforeEach(() => {
      holberton = new HolbertonClass(12, 'Mezzanine');
    });

    it('should have working size getter', () => {
      expect(holberton.size).toBe(12);
    });

    it('should have working location getter', () => {
      expect(holberton.location).toBe('Mezzanine');
    });

    it('should return consistent values from getters', () => {
      expect(holberton.size).toBe(holberton._size);
      expect(holberton.location).toBe(holberton._location);
    });
  });

  describe('valueOf method - Number coercion', () => {
    it('should return size when cast to Number', () => {
      const holberton = new HolbertonClass(12, 'Mezzanine');
      expect(Number(holberton)).toBe(12);
      expect(holberton.valueOf()).toBe(12);
    });

    it('should work with different size values', () => {
      const class1 = new HolbertonClass(50, 'San Francisco');
      const class2 = new HolbertonClass(100, 'New York');
      const class3 = new HolbertonClass(0, 'Remote');
      
      expect(Number(class1)).toBe(50);
      expect(Number(class2)).toBe(100);
      expect(Number(class3)).toBe(0);
    });

    it('should work in mathematical operations', () => {
      const holberton = new HolbertonClass(12, 'Mezzanine');
      
      // Addition
      expect(holberton + 8).toBe(20);
      expect(5 + holberton).toBe(17);
      
      // Multiplication
      expect(holberton * 2).toBe(24);
      expect(3 * holberton).toBe(36);
      
      // Subtraction
      expect(holberton - 2).toBe(10);
      expect(20 - holberton).toBe(8);
    });

    it('should work with comparison operations', () => {
      const holberton = new HolbertonClass(12, 'Mezzanine');
      
      expect(holberton > 10).toBe(true);
      expect(holberton < 15).toBe(true);
      expect(holberton >= 12).toBe(true);
      expect(holberton <= 12).toBe(true);
      expect(holberton == 12).toBe(true);
    });
  });

  describe('toString method - String coercion', () => {
    it('should return location when cast to String', () => {
      const holberton = new HolbertonClass(12, 'Mezzanine');
      expect(String(holberton)).toBe('Mezzanine');
      expect(holberton.toString()).toBe('Mezzanine');
    });

    it('should work with different location values', () => {
      const class1 = new HolbertonClass(50, 'San Francisco');
      const class2 = new HolbertonClass(100, 'New York');
      const class3 = new HolbertonClass(25, 'Remote');
      
      expect(String(class1)).toBe('San Francisco');
      expect(String(class2)).toBe('New York');
      expect(String(class3)).toBe('Remote');
    });

    it('should work in string concatenation', () => {
      const holberton = new HolbertonClass(12, 'Mezzanine');
      
      // Note: + operator calls valueOf() first, so returns size
      expect('Location: ' + holberton).toBe('Location: 12');
      // Template literals call toString()
      expect(`The class is in ${holberton}`).toBe('The class is in Mezzanine');
      // + operator prioritizes valueOf()
      expect(holberton + ' floor').toBe('12 floor');
    });

    it('should work with template literals', () => {
      const holberton = new HolbertonClass(12, 'Mezzanine');
      expect(`Class location: ${holberton}`).toBe('Class location: Mezzanine');
    });
  });

  describe('type coercion behavior', () => {
    it('should coerce to number in numeric context', () => {
      const holberton = new HolbertonClass(12, 'Mezzanine');
      
      // Explicit coercion
      expect(Number(holberton)).toBe(12);
      expect(+holberton).toBe(12);
      
      // Implicit coercion in numeric operations
      expect(holberton * 1).toBe(12);
      expect(holberton / 1).toBe(12);
      expect(holberton % 10).toBe(2);
    });

    it('should coerce to string in string context', () => {
      const holberton = new HolbertonClass(12, 'Mezzanine');
      
      // Explicit coercion
      expect(String(holberton)).toBe('Mezzanine');
      // + operator with empty string calls valueOf() first
      expect('' + holberton).toBe('12');
      
      // Template literals call toString()
      expect(`${holberton}`).toBe('Mezzanine');
    });

    it('should handle mixed operations correctly', () => {
      const holberton = new HolbertonClass(12, 'Mezzanine');
      
      // When JavaScript uses + operator, it calls valueOf() first
      // So string concatenation gets the size, not location
      expect('Size: ' + holberton).toBe('Size: 12');
      
      // But numeric operations force numeric coercion
      expect(holberton - 0).toBe(12);
      expect(holberton * 1).toBe(12);
    });
  });

  describe('class properties and behavior', () => {
    it('should maintain property independence between instances', () => {
      const class1 = new HolbertonClass(12, 'Mezzanine');
      const class2 = new HolbertonClass(50, 'San Francisco');
      
      expect(class1._size).toBe(12);
      expect(class1._location).toBe('Mezzanine');
      expect(class2._size).toBe(50);
      expect(class2._location).toBe('San Francisco');
      
      // Verify coercion independence
      expect(Number(class1)).toBe(12);
      expect(String(class1)).toBe('Mezzanine');
      expect(Number(class2)).toBe(50);
      expect(String(class2)).toBe('San Francisco');
    });

    it('should be a proper class constructor', () => {
      expect(typeof HolbertonClass).toBe('function');
      expect(HolbertonClass.prototype.constructor).toBe(HolbertonClass);
    });

    it('should have the expected methods', () => {
      const holberton = new HolbertonClass(12, 'Mezzanine');
      expect(typeof holberton.valueOf).toBe('function');
      expect(typeof holberton.toString).toBe('function');
      expect(typeof holberton.size).toBe('number'); // getter returns value
      expect(typeof holberton.location).toBe('string'); // getter returns value
    });
  });

  describe('edge cases', () => {
    it('should handle zero size', () => {
      const holberton = new HolbertonClass(0, 'Remote');
      expect(Number(holberton)).toBe(0);
      expect(String(holberton)).toBe('Remote');
    });

    it('should handle empty location string', () => {
      const holberton = new HolbertonClass(25, '');
      expect(Number(holberton)).toBe(25);
      expect(String(holberton)).toBe('');
    });

    it('should handle negative size', () => {
      const holberton = new HolbertonClass(-5, 'Test');
      expect(Number(holberton)).toBe(-5);
      expect(String(holberton)).toBe('Test');
    });

    it('should handle numeric strings as size', () => {
      const holberton = new HolbertonClass('123', 'Online');
      expect(holberton.valueOf()).toBe('123');
      expect(Number(holberton)).toBe(123); // String '123' coerces to number 123
    });

    it('should handle special location strings', () => {
      const holberton = new HolbertonClass(10, 'Floor 2B');
      expect(String(holberton)).toBe('Floor 2B');
      expect(`Location: ${holberton}`).toBe('Location: Floor 2B');
    });
  });

  describe('real-world usage patterns', () => {
    it('should work as expected in practical scenarios', () => {
      const mezzanineClass = new HolbertonClass(12, 'Mezzanine');
      const sfClass = new HolbertonClass(60, 'San Francisco');
      
      // Size comparison
      expect(mezzanineClass < sfClass).toBe(true);
      expect(sfClass > mezzanineClass).toBe(true);
      
      // Location display
      expect(`Classes: ${mezzanineClass}, ${sfClass}`).toBe('Classes: Mezzanine, San Francisco');
      
      // Total size calculation
      const totalSize = mezzanineClass + sfClass;
      expect(totalSize).toBe(72);
    });

    it('should work in array operations', () => {
      const classes = [
        new HolbertonClass(12, 'Mezzanine'),
        new HolbertonClass(60, 'San Francisco'),
        new HolbertonClass(25, 'New York')
      ];
      
      // Sum all sizes
      const totalSize = classes.reduce((sum, cls) => sum + cls, 0);
      expect(totalSize).toBe(97);
      
      // Get all locations
      const locations = classes.map(cls => String(cls));
      expect(locations).toEqual(['Mezzanine', 'San Francisco', 'New York']);
    });
  });
});
