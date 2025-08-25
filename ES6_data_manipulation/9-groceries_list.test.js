import groceriesList from './9-groceries_list.js';

test('groceriesList returns a Map instance', () => {
  const result = groceriesList();
  
  expect(result).toBeInstanceOf(Map);
});

test('groceriesList returns Map with correct size', () => {
  const result = groceriesList();
  
  expect(result.size).toBe(5);
});

test('groceriesList contains all required items with correct quantities', () => {
  const result = groceriesList();
  
  expect(result.get('Apples')).toBe(10);
  expect(result.get('Tomatoes')).toBe(10);
  expect(result.get('Pasta')).toBe(1);
  expect(result.get('Rice')).toBe(1);
  expect(result.get('Banana')).toBe(5);
});

test('groceriesList has all required keys', () => {
  const result = groceriesList();
  
  expect(result.has('Apples')).toBe(true);
  expect(result.has('Tomatoes')).toBe(true);
  expect(result.has('Pasta')).toBe(true);
  expect(result.has('Rice')).toBe(true);
  expect(result.has('Banana')).toBe(true);
});

test('groceriesList does not contain unexpected items', () => {
  const result = groceriesList();
  
  expect(result.has('Bread')).toBe(false);
  expect(result.has('Milk')).toBe(false);
  expect(result.has('Eggs')).toBe(false);
});

test('groceriesList Map entries are correct', () => {
  const result = groceriesList();
  const entries = [...result.entries()];
  
  const expectedEntries = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5]
  ];
  
  expect(entries).toEqual(expectedEntries);
});

test('groceriesList Map keys are correct', () => {
  const result = groceriesList();
  const keys = [...result.keys()];
  
  const expectedKeys = ['Apples', 'Tomatoes', 'Pasta', 'Rice', 'Banana'];
  
  expect(keys).toEqual(expectedKeys);
});

test('groceriesList Map values are correct', () => {
  const result = groceriesList();
  const values = [...result.values()];
  
  const expectedValues = [10, 10, 1, 1, 5];
  
  expect(values).toEqual(expectedValues);
});

test('groceriesList returns new Map instance each time', () => {
  const result1 = groceriesList();
  const result2 = groceriesList();
  
  expect(result1).not.toBe(result2); // Different references
  expect(result1).toEqual(result2);  // Same content
});

test('groceriesList Map can be iterated', () => {
  const result = groceriesList();
  const items = [];
  
  for (const [name, quantity] of result) {
    items.push({ name, quantity });
  }
  
  expect(items).toEqual([
    { name: 'Apples', quantity: 10 },
    { name: 'Tomatoes', quantity: 10 },
    { name: 'Pasta', quantity: 1 },
    { name: 'Rice', quantity: 1 },
    { name: 'Banana', quantity: 5 }
  ]);
});

test('groceriesList Map preserves insertion order', () => {
  const result = groceriesList();
  const keys = [...result.keys()];
  
  // Check that the order matches the expected insertion order
  expect(keys[0]).toBe('Apples');
  expect(keys[1]).toBe('Tomatoes');
  expect(keys[2]).toBe('Pasta');
  expect(keys[3]).toBe('Rice');
  expect(keys[4]).toBe('Banana');
});

test('groceriesList Map values are numbers', () => {
  const result = groceriesList();
  
  for (const value of result.values()) {
    expect(typeof value).toBe('number');
    expect(value).toBeGreaterThan(0);
  }
});

test('groceriesList Map keys are strings', () => {
  const result = groceriesList();
  
  for (const key of result.keys()) {
    expect(typeof key).toBe('string');
    expect(key.length).toBeGreaterThan(0);
  }
});
