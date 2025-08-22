import Car from './10-car.js';

describe('Car', () => {
  describe('constructor', () => {
    it('should create a Car instance with brand, motor, and color', () => {
      const car = new Car('Toyota', 'V6', 'Red');
      expect(car).toBeInstanceOf(Car);
      expect(car._brand).toBe('Toyota');
      expect(car._motor).toBe('V6');
      expect(car._color).toBe('Red');
    });

    it('should handle different brand, motor, and color combinations', () => {
      const car1 = new Car('Nissan', 'Turbo', 'Pink');
      const car2 = new Car('BMW', 'V8', 'Black');
      const car3 = new Car('Tesla', 'Electric', 'White');

      expect(car1._brand).toBe('Nissan');
      expect(car1._motor).toBe('Turbo');
      expect(car1._color).toBe('Pink');

      expect(car2._brand).toBe('BMW');
      expect(car2._motor).toBe('V8');
      expect(car2._color).toBe('Black');

      expect(car3._brand).toBe('Tesla');
      expect(car3._motor).toBe('Electric');
      expect(car3._color).toBe('White');
    });

    it('should handle undefined parameters', () => {
      const car = new Car(undefined, undefined, undefined);
      expect(car._brand).toBeUndefined();
      expect(car._motor).toBeUndefined();
      expect(car._color).toBeUndefined();
    });

    it('should handle empty string parameters', () => {
      const car = new Car('', '', '');
      expect(car._brand).toBe('');
      expect(car._motor).toBe('');
      expect(car._color).toBe('');
    });
  });

  describe('cloneCar method', () => {
    let originalCar;

    beforeEach(() => {
      originalCar = new Car('Nissan', 'Turbo', 'Pink');
    });

    it('should create a new Car instance', () => {
      const clonedCar = originalCar.cloneCar();
      expect(clonedCar).toBeInstanceOf(Car);
      expect(clonedCar).not.toBe(originalCar);
    });

    it('should create a clone with undefined attributes', () => {
      const clonedCar = originalCar.cloneCar();
      expect(clonedCar._brand).toBeUndefined();
      expect(clonedCar._motor).toBeUndefined();
      expect(clonedCar._color).toBeUndefined();
    });

    it('should maintain independence between original and clone', () => {
      const clonedCar = originalCar.cloneCar();
      
      // Original should maintain its values
      expect(originalCar._brand).toBe('Nissan');
      expect(originalCar._motor).toBe('Turbo');
      expect(originalCar._color).toBe('Pink');

      // Clone should have undefined values
      expect(clonedCar._brand).toBeUndefined();
      expect(clonedCar._motor).toBeUndefined();
      expect(clonedCar._color).toBeUndefined();
    });

    it('should return different instances', () => {
      const clonedCar = originalCar.cloneCar();
      expect(originalCar == clonedCar).toBe(false);
      expect(originalCar === clonedCar).toBe(false);
    });
  });

  describe('inheritance and Symbol.species behavior', () => {
    class TestCar extends Car {}
    class SportsCar extends Car {}

    it('should work with subclass inheritance', () => {
      const testCar = new TestCar('Nissan', 'Turbo', 'Pink');
      expect(testCar).toBeInstanceOf(TestCar);
      expect(testCar).toBeInstanceOf(Car);
    });

    it('should clone to the correct subclass type', () => {
      const testCar = new TestCar('Nissan', 'Turbo', 'Pink');
      const clonedCar = testCar.cloneCar();

      expect(clonedCar).toBeInstanceOf(TestCar);
      expect(clonedCar).toBeInstanceOf(Car);
      expect(testCar instanceof TestCar).toBe(true);
      expect(clonedCar instanceof TestCar).toBe(true);
    });

    it('should maintain subclass type through cloning', () => {
      const sportsCar = new SportsCar('Ferrari', 'V12', 'Red');
      const clonedSportsCar = sportsCar.cloneCar();

      expect(sportsCar).toBeInstanceOf(SportsCar);
      expect(clonedSportsCar).toBeInstanceOf(SportsCar);
      expect(sportsCar).toBeInstanceOf(Car);
      expect(clonedSportsCar).toBeInstanceOf(Car);
    });

    it('should work with multiple inheritance levels', () => {
      class SuperCar extends SportsCar {}
      
      const superCar = new SuperCar('Lamborghini', 'V10', 'Yellow');
      const clonedSuperCar = superCar.cloneCar();

      expect(superCar).toBeInstanceOf(SuperCar);
      expect(clonedSuperCar).toBeInstanceOf(SuperCar);
      expect(superCar).toBeInstanceOf(SportsCar);
      expect(clonedSuperCar).toBeInstanceOf(SportsCar);
      expect(superCar).toBeInstanceOf(Car);
      expect(clonedSuperCar).toBeInstanceOf(Car);
    });

    it('should handle Symbol.species when defined', () => {
      class CustomCar extends Car {
        static get [Symbol.species]() {
          return Car; // Return base Car instead of CustomCar
        }
      }

      const customCar = new CustomCar('Custom', 'Hybrid', 'Blue');
      const clonedCar = customCar.cloneCar();

      expect(customCar).toBeInstanceOf(CustomCar);
      expect(clonedCar).toBeInstanceOf(Car);
      expect(clonedCar).not.toBeInstanceOf(CustomCar);
    });
  });

  describe('real-world usage scenarios', () => {
    it('should work in the provided test scenario', () => {
      class TestCar extends Car {}

      const tc1 = new TestCar('Nissan', 'Turbo', 'Pink');
      const tc2 = tc1.cloneCar();

      // tc1 should have the original values
      expect(tc1._brand).toBe('Nissan');
      expect(tc1._motor).toBe('Turbo');
      expect(tc1._color).toBe('Pink');
      expect(tc1 instanceof TestCar).toBe(true);

      // tc2 should be a clone with undefined values but same class
      expect(tc2._brand).toBeUndefined();
      expect(tc2._motor).toBeUndefined();
      expect(tc2._color).toBeUndefined();
      expect(tc2 instanceof TestCar).toBe(true);

      // They should be different instances
      expect(tc1 == tc2).toBe(false);
    });

    it('should allow creating multiple clones', () => {
      const originalCar = new Car('Honda', 'I4', 'Silver');
      const clone1 = originalCar.cloneCar();
      const clone2 = originalCar.cloneCar();
      const clone3 = clone1.cloneCar();

      expect(clone1).toBeInstanceOf(Car);
      expect(clone2).toBeInstanceOf(Car);
      expect(clone3).toBeInstanceOf(Car);

      expect(clone1).not.toBe(clone2);
      expect(clone2).not.toBe(clone3);
      expect(clone1).not.toBe(clone3);

      // All clones should have undefined attributes
      [clone1, clone2, clone3].forEach(clone => {
        expect(clone._brand).toBeUndefined();
        expect(clone._motor).toBeUndefined();
        expect(clone._color).toBeUndefined();
      });
    });
  });

  describe('edge cases', () => {
    it('should handle cloning cars with null values', () => {
      const car = new Car(null, null, null);
      const clonedCar = car.cloneCar();

      expect(car._brand).toBeNull();
      expect(clonedCar._brand).toBeUndefined();
    });

    it('should handle cloning cars with numeric values', () => {
      const car = new Car(123, 456, 789);
      const clonedCar = car.cloneCar();

      expect(car._brand).toBe(123);
      expect(clonedCar._brand).toBeUndefined();
    });

    it('should handle cloning cars with object values', () => {
      const brandObj = { name: 'Toyota' };
      const car = new Car(brandObj, 'V6', 'Red');
      const clonedCar = car.cloneCar();

      expect(car._brand).toBe(brandObj);
      expect(clonedCar._brand).toBeUndefined();
    });
  });

  describe('class properties and methods', () => {
    it('should be a proper class constructor', () => {
      expect(typeof Car).toBe('function');
      expect(Car.prototype.constructor).toBe(Car);
    });

    it('should have cloneCar method', () => {
      const car = new Car('Test', 'Test', 'Test');
      expect(typeof car.cloneCar).toBe('function');
    });

    it('should maintain property independence between instances', () => {
      const car1 = new Car('Toyota', 'V6', 'Red');
      const car2 = new Car('Honda', 'I4', 'Blue');

      expect(car1._brand).toBe('Toyota');
      expect(car2._brand).toBe('Honda');

      const clone1 = car1.cloneCar();
      const clone2 = car2.cloneCar();

      expect(clone1._brand).toBeUndefined();
      expect(clone2._brand).toBeUndefined();
    });
  });
});
