import Airport from './7-airport.js';

describe('Airport', () => {
  describe('constructor', () => {
    it('should create an Airport instance with name and code', () => {
      const airport = new Airport('San Francisco Airport', 'SFO');
      expect(airport).toBeInstanceOf(Airport);
      expect(airport._name).toBe('San Francisco Airport');
      expect(airport._code).toBe('SFO');
    });

    it('should handle empty string values', () => {
      const airport = new Airport('', '');
      expect(airport._name).toBe('');
      expect(airport._code).toBe('');
    });

    it('should handle different airport examples', () => {
      const jfk = new Airport('John F. Kennedy International Airport', 'JFK');
      const lax = new Airport('Los Angeles International Airport', 'LAX');
      
      expect(jfk._name).toBe('John F. Kennedy International Airport');
      expect(jfk._code).toBe('JFK');
      expect(lax._name).toBe('Los Angeles International Airport');
      expect(lax._code).toBe('LAX');
    });
  });

  describe('getters', () => {
    let airport;

    beforeEach(() => {
      airport = new Airport('San Francisco Airport', 'SFO');
    });

    it('should have working name getter', () => {
      expect(airport.name).toBe('San Francisco Airport');
    });

    it('should have working code getter', () => {
      expect(airport.code).toBe('SFO');
    });

    it('should return consistent values from getters', () => {
      expect(airport.name).toBe(airport._name);
      expect(airport.code).toBe(airport._code);
    });
  });

  describe('toString method and toStringTag functionality', () => {
    it('should return correct string format with airport code', () => {
      const airport = new Airport('San Francisco Airport', 'SFO');
      expect(airport.toString()).toBe('[object SFO]');
    });

    it('should work with different airport codes', () => {
      const jfk = new Airport('John F. Kennedy International Airport', 'JFK');
      const lax = new Airport('Los Angeles International Airport', 'LAX');
      const ord = new Airport('Chicago O\'Hare International Airport', 'ORD');
      
      expect(jfk.toString()).toBe('[object JFK]');
      expect(lax.toString()).toBe('[object LAX]');
      expect(ord.toString()).toBe('[object ORD]');
    });

    it('should handle empty code', () => {
      const airport = new Airport('Test Airport', '');
      expect(airport.toString()).toBe('[object ]');
    });

    it('should override default toString behavior', () => {
      const airport = new Airport('San Francisco Airport', 'SFO');
      // Default Object.prototype.toString would return '[object Object]'
      // Our custom toString returns '[object SFO]'
      expect(airport.toString()).not.toBe('[object Object]');
      expect(airport.toString()).toBe('[object SFO]');
    });

    it('should work when called implicitly', () => {
      const airport = new Airport('San Francisco Airport', 'SFO');
      // When airport is coerced to string, toString() is called
      expect(String(airport)).toBe('[object SFO]');
      expect(`${airport}`).toBe('[object SFO]');
    });

    it('should work with console output format', () => {
      const airport = new Airport('San Francisco Airport', 'SFO');
      // This simulates how the airport would appear in console output
      const consoleOutput = airport.toString();
      expect(consoleOutput).toBe('[object SFO]');
    });
  });

  describe('class properties and behavior', () => {
    it('should maintain property independence between instances', () => {
      const sfo = new Airport('San Francisco Airport', 'SFO');
      const jfk = new Airport('John F. Kennedy International Airport', 'JFK');
      
      expect(sfo._name).toBe('San Francisco Airport');
      expect(sfo._code).toBe('SFO');
      expect(jfk._name).toBe('John F. Kennedy International Airport');
      expect(jfk._code).toBe('JFK');
      
      // Verify they don't interfere with each other
      expect(sfo.toString()).toBe('[object SFO]');
      expect(jfk.toString()).toBe('[object JFK]');
    });

    it('should be a proper class constructor', () => {
      expect(typeof Airport).toBe('function');
      expect(Airport.prototype.constructor).toBe(Airport);
    });

    it('should have the expected methods', () => {
      const airport = new Airport('Test Airport', 'TEST');
      expect(typeof airport.toString).toBe('function');
      expect(typeof airport.name).toBe('string'); // getter returns value
      expect(typeof airport.code).toBe('string'); // getter returns value
    });
  });

  describe('edge cases', () => {
    it('should handle numeric codes as strings', () => {
      const airport = new Airport('Test Airport', '123');
      expect(airport.toString()).toBe('[object 123]');
    });

    it('should handle special characters in codes', () => {
      const airport = new Airport('Test Airport', 'AB-C');
      expect(airport.toString()).toBe('[object AB-C]');
    });

    it('should handle long airport names', () => {
      const longName = 'Very Long Airport Name That Contains Many Words And Characters';
      const airport = new Airport(longName, 'LONG');
      expect(airport.name).toBe(longName);
      expect(airport.toString()).toBe('[object LONG]');
    });
  });
});
