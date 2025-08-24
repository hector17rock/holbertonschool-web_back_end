import Car from './10-car.js';

describe('Car - Correct Definition Tests', () => {
  describe('Class definition validation', () => {
    it('should be defined as a proper class', () => {
      expect(typeof Car).toBe('function');
      expect(Car.prototype).toBeDefined();
      expect(Car.prototype.constructor).toBe(Car);
    });

    it('should be the default export', () => {
      expect(Car).toBeDefined();
      expect(Car.name).toBe('Car');
    });

    it('should create instances using new keyword', () => {
      const car = new Car('Toyota', 'V6', 'Red');
      expect(car).toBeInstanceOf(Car);
      expect(car.constructor).toBe(Car);
    });
  });

  describe('Constructor implementation validation', () => {
    it('should accept exactly 3 parameters', () => {
      expect(Car.length).toBe(3);
    });

    it('should store attributes in underscore-prefixed properties', () => {
      const car = new Car('Nissan', 'Turbo', 'Pink');
      
      expect(car).toHaveProperty('_brand', 'Nissan');
      expect(car).toHaveProperty('_motor', 'Turbo');
      expect(car).toHaveProperty('_color', 'Pink');
    });

    it('should not expose public properties without underscore', () => {
      const car = new Car('Honda', 'I4', 'Blue');
      
      expect(car.brand).toBeUndefined();
      expect(car.motor).toBeUndefined();
      expect(car.color).toBeUndefined();
    });

    it('should assign parameters in correct order', () => {
      const car = new Car('Brand', 'Motor', 'Color');
      
      expect(car._brand).toBe('Brand');
      expect(car._motor).toBe('Motor');
      expect(car._color).toBe('Color');
    });

    it('should handle all parameter types correctly', () => {
      const car1 = new Car(null, undefined, '');
      expect(car1._brand).toBeNull();
      expect(car1._motor).toBeUndefined();
      expect(car1._color).toBe('');

      const car2 = new Car(123, true, { test: 'value' });
      expect(car2._brand).toBe(123);
      expect(car2._motor).toBe(true);
      expect(car2._color).toEqual({ test: 'value' });
    });
  });

  describe('cloneCar method definition validation', () => {
    it('should have cloneCar method defined', () => {
      const car = new Car('Test', 'Test', 'Test');
      expect(typeof car.cloneCar).toBe('function');
    });

    it('should be defined on the prototype', () => {
      expect(typeof Car.prototype.cloneCar).toBe('function');
    });

    it('should accept no parameters', () => {
      expect(Car.prototype.cloneCar.length).toBe(0);
    });

    it('should return a new instance', () => {
      const car = new Car('Toyota', 'V6', 'Red');
      const clone = car.cloneCar();
      
      expect(clone).toBeInstanceOf(Car);
      expect(clone).not.toBe(car);
    });

    it('should use Symbol.species pattern correctly', () => {
      class TestCar extends Car {}
      
      const testCar = new TestCar('Nissan', 'Turbo', 'Pink');
      const clone = testCar.cloneCar();
      
      expect(clone).toBeInstanceOf(TestCar);
      expect(clone).toBeInstanceOf(Car);
    });
  });

  describe('Symbol.species implementation validation', () => {
    it('should use this.constructor when no Symbol.species defined', () => {
      class CustomCar extends Car {}
      
      const customCar = new CustomCar('Ford', 'V8', 'Black');
      const clone = customCar.cloneCar();
      
      expect(clone.constructor).toBe(CustomCar);
      expect(clone).toBeInstanceOf(CustomCar);
    });

    it('should respect Symbol.species when defined', () => {
      class SpeciesCar extends Car {
        static get [Symbol.species]() {
          return Car; // Return base Car instead of SpeciesCar
        }
      }
      
      const speciesCar = new SpeciesCar('BMW', 'V12', 'White');
      const clone = speciesCar.cloneCar();
      
      expect(clone.constructor).toBe(Car);
      expect(clone).toBeInstanceOf(Car);
      expect(clone).not.toBeInstanceOf(SpeciesCar);
    });

    it('should handle fallback when Symbol.species is null', () => {
      class NullSpeciesCar extends Car {
        static get [Symbol.species]() {
          return null;
        }
      }
      
      const nullSpeciesCar = new NullSpeciesCar('Audi', 'V10', 'Silver');
      const clone = nullSpeciesCar.cloneCar();
      
      expect(clone.constructor).toBe(NullSpeciesCar);
      expect(clone).toBeInstanceOf(NullSpeciesCar);
    });
  });

  describe('Cloned instance validation', () => {
    it('should create clone with undefined attributes', () => {
      const original = new Car('Original', 'Brand', 'Color');
      const clone = original.cloneCar();
      
      expect(clone._brand).toBeUndefined();
      expect(clone._motor).toBeUndefined();
      expect(clone._color).toBeUndefined();
    });

    it('should not share references between original and clone', () => {
      const original = new Car('Shared', 'Reference', 'Test');
      const clone = original.cloneCar();
      
      expect(original._brand).toBe('Shared');
      expect(clone._brand).toBeUndefined();
      
      // Verify they are completely independent
      expect(original).not.toBe(clone);
      expect(original === clone).toBe(false);
      expect(original == clone).toBe(false);
    });

    it('should allow cloning of clones', () => {
      const original = new Car('First', 'Second', 'Third');
      const clone1 = original.cloneCar();
      const clone2 = clone1.cloneCar();
      
      expect(clone1).toBeInstanceOf(Car);
      expect(clone2).toBeInstanceOf(Car);
      expect(clone1).not.toBe(clone2);
      expect(clone2._brand).toBeUndefined();
    });
  });

  describe('Inheritance behavior validation', () => {
    it('should work correctly with single inheritance', () => {
      class SingleCar extends Car {}
      
      const single = new SingleCar('Single', 'Test', 'Car');
      const clone = single.cloneCar();
      
      expect(single).toBeInstanceOf(SingleCar);
      expect(single).toBeInstanceOf(Car);
      expect(clone).toBeInstanceOf(SingleCar);
      expect(clone).toBeInstanceOf(Car);
    });

    it('should work correctly with multiple inheritance levels', () => {
      class SportsCar extends Car {}
      class SuperCar extends SportsCar {}
      
      const superCar = new SuperCar('Lamborghini', 'V12', 'Yellow');
      const clone = superCar.cloneCar();
      
      expect(superCar).toBeInstanceOf(SuperCar);
      expect(superCar).toBeInstanceOf(SportsCar);
      expect(superCar).toBeInstanceOf(Car);
      
      expect(clone).toBeInstanceOf(SuperCar);
      expect(clone).toBeInstanceOf(SportsCar);
      expect(clone).toBeInstanceOf(Car);
    });

    it('should maintain constructor property correctly', () => {
      class ConstructorCar extends Car {}
      
      const car = new ConstructorCar('Test', 'Constructor', 'Property');
      const clone = car.cloneCar();
      
      expect(car.constructor).toBe(ConstructorCar);
      expect(clone.constructor).toBe(ConstructorCar);
    });
  });

  describe('Method behavior validation', () => {
    it('should return different instances on each call', () => {
      const car = new Car('Same', 'Car', 'Instance');
      const clone1 = car.cloneCar();
      const clone2 = car.cloneCar();
      
      expect(clone1).not.toBe(clone2);
      expect(clone1 === clone2).toBe(false);
      expect(clone1 == clone2).toBe(false);
    });

    it('should work consistently across multiple calls', () => {
      const car = new Car('Consistent', 'Behavior', 'Test');
      
      for (let i = 0; i < 5; i++) {
        const clone = car.cloneCar();
        expect(clone).toBeInstanceOf(Car);
        expect(clone._brand).toBeUndefined();
        expect(clone._motor).toBeUndefined();
        expect(clone._color).toBeUndefined();
      }
    });

    it('should not affect the original instance', () => {
      const original = new Car('Unchanged', 'Original', 'Instance');
      const originalBrand = original._brand;
      const originalMotor = original._motor;
      const originalColor = original._color;
      
      const clone = original.cloneCar();
      
      // Original should remain unchanged
      expect(original._brand).toBe(originalBrand);
      expect(original._motor).toBe(originalMotor);
      expect(original._color).toBe(originalColor);
    });
  });

  describe('Edge case validation', () => {
    it('should handle cars created with no arguments', () => {
      const car = new Car();
      const clone = car.cloneCar();
      
      expect(car._brand).toBeUndefined();
      expect(clone._brand).toBeUndefined();
      expect(clone).toBeInstanceOf(Car);
    });

    it('should handle cars with complex object properties', () => {
      const complexBrand = { name: 'Tesla', country: 'USA' };
      const car = new Car(complexBrand, 'Electric', 'Red');
      const clone = car.cloneCar();
      
      expect(car._brand).toBe(complexBrand);
      expect(clone._brand).toBeUndefined();
    });

    it('should work with frozen objects', () => {
      const car = new Car('Frozen', 'Test', 'Car');
      Object.freeze(car);
      
      const clone = car.cloneCar();
      expect(clone).toBeInstanceOf(Car);
      expect(clone._brand).toBeUndefined();
    });

    it('should work with sealed objects', () => {
      const car = new Car('Sealed', 'Test', 'Car');
      Object.seal(car);
      
      const clone = car.cloneCar();
      expect(clone).toBeInstanceOf(Car);
      expect(clone._brand).toBeUndefined();
    });
  });

  describe('Specification compliance', () => {
    it('should match the exact behavior from the main file example', () => {
      class TestCar extends Car {}
      
      const tc1 = new TestCar('Nissan', 'Turbo', 'Pink');
      const tc2 = tc1.cloneCar();
      
      // Verify tc1 properties
      expect(tc1._brand).toBe('Nissan');
      expect(tc1._motor).toBe('Turbo');
      expect(tc1._color).toBe('Pink');
      expect(tc1 instanceof TestCar).toBe(true);
      
      // Verify tc2 properties
      expect(tc2._brand).toBeUndefined();
      expect(tc2._motor).toBeUndefined();
      expect(tc2._color).toBeUndefined();
      expect(tc2 instanceof TestCar).toBe(true);
      
      // Verify they are different instances
      expect(tc1 == tc2).toBe(false);
    });

    it('should maintain proper prototype chain', () => {
      class ExtendedCar extends Car {}
      
      const car = new ExtendedCar('Chain', 'Test', 'Car');
      const clone = car.cloneCar();
      
      expect(Object.getPrototypeOf(car)).toBe(ExtendedCar.prototype);
      expect(Object.getPrototypeOf(clone)).toBe(ExtendedCar.prototype);
      expect(Object.getPrototypeOf(ExtendedCar.prototype)).toBe(Car.prototype);
    });

    it('should implement the Symbol.species pattern as specified', () => {
      // Test the exact implementation pattern
      const car = new Car('Species', 'Pattern', 'Test');
      const Species = car.constructor[Symbol.species] || car.constructor;
      const manualClone = new Species();
      
      expect(manualClone).toBeInstanceOf(Car);
      expect(manualClone._brand).toBeUndefined();
      
      // Should be equivalent to cloneCar result
      const autoClone = car.cloneCar();
      expect(typeof manualClone).toBe(typeof autoClone);
      expect(manualClone.constructor).toBe(autoClone.constructor);
    });
  });
});
