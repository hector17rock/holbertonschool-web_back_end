import updateUniqueItems from './10-update_uniq_items.js';
import groceriesList from './9-groceries_list.js';

test('updateUniqueItems updates items with quantity 1 to 100', () => {
  const map = groceriesList();
  const result = updateUniqueItems(map);
  
  expect(result.get('Pasta')).toBe(100);
  expect(result.get('Rice')).toBe(100);
  expect(result.get('Apples')).toBe(10); // Unchanged
  expect(result.get('Tomatoes')).toBe(10); // Unchanged
  expect(result.get('Banana')).toBe(5); // Unchanged
});

test('updateUniqueItems returns the same Map instance', () => {
  const map = groceriesList();
  const result = updateUniqueItems(map);
  
  expect(result).toBe(map); // Same reference
});

test('updateUniqueItems modifies the original Map', () => {
  const map = groceriesList();
  
  // Check original values
  expect(map.get('Pasta')).toBe(1);
  expect(map.get('Rice')).toBe(1);
  
  updateUniqueItems(map);
  
  // Check modified values
  expect(map.get('Pasta')).toBe(100);
  expect(map.get('Rice')).toBe(100);
});

test('updateUniqueItems throws error for non-Map argument', () => {
  expect(() => {
    updateUniqueItems({});
  }).toThrow('Cannot process');
  
  expect(() => {
    updateUniqueItems([]);
  }).toThrow('Cannot process');
  
  expect(() => {
    updateUniqueItems('not a map');
  }).toThrow('Cannot process');
  
  expect(() => {
    updateUniqueItems(null);
  }).toThrow('Cannot process');
  
  expect(() => {
    updateUniqueItems(undefined);
  }).toThrow('Cannot process');
  
  expect(() => {
    updateUniqueItems(123);
  }).toThrow('Cannot process');
});

test('updateUniqueItems works with custom Map', () => {
  const customMap = new Map();
  customMap.set('item1', 1);
  customMap.set('item2', 2);
  customMap.set('item3', 1);
  customMap.set('item4', 5);
  
  updateUniqueItems(customMap);
  
  expect(customMap.get('item1')).toBe(100);
  expect(customMap.get('item2')).toBe(2); // Unchanged
  expect(customMap.get('item3')).toBe(100);
  expect(customMap.get('item4')).toBe(5); // Unchanged
});

test('updateUniqueItems works with empty Map', () => {
  const emptyMap = new Map();
  
  expect(() => {
    updateUniqueItems(emptyMap);
  }).not.toThrow();
  
  expect(emptyMap.size).toBe(0);
});

test('updateUniqueItems works with Map having no items with quantity 1', () => {
  const map = new Map();
  map.set('item1', 2);
  map.set('item2', 5);
  map.set('item3', 10);
  
  updateUniqueItems(map);
  
  expect(map.get('item1')).toBe(2);
  expect(map.get('item2')).toBe(5);
  expect(map.get('item3')).toBe(10);
});

test('updateUniqueItems works with Map having all items with quantity 1', () => {
  const map = new Map();
  map.set('item1', 1);
  map.set('item2', 1);
  map.set('item3', 1);
  
  updateUniqueItems(map);
  
  expect(map.get('item1')).toBe(100);
  expect(map.get('item2')).toBe(100);
  expect(map.get('item3')).toBe(100);
});

test('updateUniqueItems handles different data types as keys', () => {
  const map = new Map();
  map.set('string', 1);
  map.set(123, 1);
  map.set(true, 1);
  
  updateUniqueItems(map);
  
  expect(map.get('string')).toBe(100);
  expect(map.get(123)).toBe(100);
  expect(map.get(true)).toBe(100);
});

test('updateUniqueItems maintains Map size', () => {
  const map = groceriesList();
  const originalSize = map.size;
  
  updateUniqueItems(map);
  
  expect(map.size).toBe(originalSize);
});

test('updateUniqueItems handles multiple calls correctly', () => {
  const map = new Map();
  map.set('item1', 1);
  map.set('item2', 2);
  
  // First call
  updateUniqueItems(map);
  expect(map.get('item1')).toBe(100);
  expect(map.get('item2')).toBe(2);
  
  // Second call - item1 should not change (100 !== 1)
  updateUniqueItems(map);
  expect(map.get('item1')).toBe(100);
  expect(map.get('item2')).toBe(2);
});

test('updateUniqueItems works with Set as a Map argument alternative', () => {
  const set = new Set([1, 2, 3]);
  
  expect(() => {
    updateUniqueItems(set);
  }).toThrow('Cannot process');
});

test('updateUniqueItems error has correct message', () => {
  try {
    updateUniqueItems({});
  } catch (error) {
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe('Cannot process');
  }
});
