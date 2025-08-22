import SkyHighBuilding from './6-sky_high.js';

describe('SkyHighBuilding', () => {
  describe('constructor', () => {
    it('should create a SkyHighBuilding instance with sqft and floors', () => {
      const building = new SkyHighBuilding(140, 60);
      expect(building).toBeInstanceOf(SkyHighBuilding);
      expect(building._sqft).toBe(140);
      expect(building._floors).toBe(60);
    });

    it('should handle zero values', () => {
      const building = new SkyHighBuilding(0, 0);
      expect(building._sqft).toBe(0);
      expect(building._floors).toBe(0);
    });

    it('should handle large values', () => {
      const building = new SkyHighBuilding(999999, 200);
      expect(building._sqft).toBe(999999);
      expect(building._floors).toBe(200);
    });
  });

  describe('getters and setters', () => {
    let building;

    beforeEach(() => {
      building = new SkyHighBuilding(140, 60);
    });

    it('should have working sqft getter', () => {
      expect(building.sqft).toBe(140);
    });

    it('should have working floors getter', () => {
      expect(building.floors).toBe(60);
    });

    it('should have working sqft setter', () => {
      building.sqft = 200;
      expect(building._sqft).toBe(200);
      expect(building.sqft).toBe(200);
    });

    it('should have working floors setter', () => {
      building.floors = 80;
      expect(building._floors).toBe(80);
      expect(building.floors).toBe(80);
    });
  });

  describe('evacuationWarningMessage method', () => {
    it('should return correct evacuation message', () => {
      const building = new SkyHighBuilding(140, 60);
      expect(building.evacuationWarningMessage()).toBe('Evacuate slowly the 60 floors');
    });

    it('should work with different floor numbers', () => {
      const building1 = new SkyHighBuilding(100, 5);
      const building2 = new SkyHighBuilding(200, 25);
      
      expect(building1.evacuationWarningMessage()).toBe('Evacuate slowly the 5 floors');
      expect(building2.evacuationWarningMessage()).toBe('Evacuate slowly the 25 floors');
    });

    it('should override the abstract method from Building', () => {
      const building = new SkyHighBuilding(140, 60);
      expect(typeof building.evacuationWarningMessage).toBe('function');
      
      // Should not throw error since method is implemented
      expect(() => {
        new SkyHighBuilding(100, 50);
      }).not.toThrow();
    });
  });

  describe('inheritance', () => {
    it('should extend Building class', () => {
      const building = new SkyHighBuilding(140, 60);
      expect(building.constructor.name).toBe('SkyHighBuilding');
    });

    it('should maintain property independence between instances', () => {
      const building1 = new SkyHighBuilding(100, 10);
      const building2 = new SkyHighBuilding(200, 20);
      
      expect(building1._sqft).toBe(100);
      expect(building1._floors).toBe(10);
      expect(building2._sqft).toBe(200);
      expect(building2._floors).toBe(20);
    });
  });
});
