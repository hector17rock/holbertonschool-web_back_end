import Building from './5-building.js';

describe('Building', () => {
  describe('constructor', () => {
    it('should create a Building instance with sqft', () => {
      const building = new Building(100);
      expect(building).toBeInstanceOf(Building);
      expect(building._sqft).toBe(100);
    });

    it('should handle zero sqft', () => {
      const building = new Building(0);
      expect(building._sqft).toBe(0);
    });

    it('should handle large sqft values', () => {
      const building = new Building(999999);
      expect(building._sqft).toBe(999999);
    });
  });

  describe('abstract method enforcement', () => {
    it('should throw error when subclass does not override evacuationWarningMessage', () => {
      class TestBuilding extends Building {}
      
      expect(() => {
        new TestBuilding(100);
      }).toThrow('Class extending Building must override evacuationWarningMessage');
    });

    it('should not throw error when subclass properly overrides evacuationWarningMessage', () => {
      class ValidBuilding extends Building {
        evacuationWarningMessage() {
          return 'Emergency evacuation';
        }
      }
      
      expect(() => {
        new ValidBuilding(100);
      }).not.toThrow();
    });
  });

  describe('instance properties', () => {
    class ValidBuilding extends Building {
      evacuationWarningMessage() {
        return 'Test evacuation';
      }
    }

    it('should have _sqft property', () => {
      const building = new ValidBuilding(150);
      expect(building).toHaveProperty('_sqft');
      expect(building._sqft).toBe(150);
    });

    it('should maintain property independence between instances', () => {
      const building1 = new ValidBuilding(100);
      const building2 = new ValidBuilding(200);
      
      expect(building1._sqft).toBe(100);
      expect(building2._sqft).toBe(200);
    });
  });
});
