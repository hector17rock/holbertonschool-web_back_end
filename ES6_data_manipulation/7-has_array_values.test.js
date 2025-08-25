import hasValuesFromArray from './7-has_array_values.js';

test('hasValuesFromArray returns true when all elements exist in set', () => {
  const set = new Set([1, 2, 3, 4, 5]);
  
  expect(hasValuesFromArray(set, [1])).toBe(true);
  expect(hasValuesFromArray(set, [1, 2])).toBe(true);
  expect(hasValuesFromArray(set, [1, 2, 3, 4, 5])).toBe(true);
  expect(hasValuesFromArray(set, [3, 1, 5])).toBe(true); // Order doesn't matter
});

test('hasValuesFromArray returns false when some elements do not exist in set', () => {
  const set = new Set([1, 2, 3, 4, 5]);
  
  expect(hasValuesFromArray(set, [10])).toBe(false);
  expect(hasValuesFromArray(set, [1, 10])).toBe(false);
  expect(hasValuesFromArray(set, [6, 7, 8])).toBe(false);
  expect(hasValuesFromArray(set, [1, 2, 6])).toBe(false);
});

test('hasValuesFromArray returns true for empty array', () => {
  const set = new Set([1, 2, 3, 4, 5]);
  
  expect(hasValuesFromArray(set, [])).toBe(true); // All elements (none) exist in set
});

test('hasValuesFromArray works with empty set', () => {
  const set = new Set();
  
  expect(hasValuesFromArray(set, [])).toBe(true); // Empty array with empty set
  expect(hasValuesFromArray(set, [1])).toBe(false); // Any element with empty set
});

test('hasValuesFromArray works with string sets', () => {
  const set = new Set(['apple', 'banana', 'orange']);
  
  expect(hasValuesFromArray(set, ['apple'])).toBe(true);
  expect(hasValuesFromArray(set, ['apple', 'banana'])).toBe(true);
  expect(hasValuesFromArray(set, ['grape'])).toBe(false);
  expect(hasValuesFromArray(set, ['apple', 'grape'])).toBe(false);
});

test('hasValuesFromArray works with mixed data types', () => {
  const set = new Set([1, '1', true, null, undefined]);
  
  expect(hasValuesFromArray(set, [1])).toBe(true);
  expect(hasValuesFromArray(set, ['1'])).toBe(true);
  expect(hasValuesFromArray(set, [1, '1'])).toBe(true);
  expect(hasValuesFromArray(set, [true, null])).toBe(true);
  expect(hasValuesFromArray(set, [1, 2])).toBe(false); // 2 doesn't exist
  expect(hasValuesFromArray(set, [1, '2'])).toBe(false); // '2' doesn't exist
});

test('hasValuesFromArray handles duplicates in array correctly', () => {
  const set = new Set([1, 2, 3]);
  
  expect(hasValuesFromArray(set, [1, 1, 1])).toBe(true); // Multiple 1s, but 1 exists in set
  expect(hasValuesFromArray(set, [1, 2, 1, 3])).toBe(true); // All exist even with duplicates
  expect(hasValuesFromArray(set, [1, 4, 1])).toBe(false); // 4 doesn't exist
});

test('hasValuesFromArray works with object references', () => {
  const obj1 = { id: 1 };
  const obj2 = { id: 2 };
  const obj3 = { id: 1 }; // Different object with same content
  
  const set = new Set([obj1, obj2]);
  
  expect(hasValuesFromArray(set, [obj1])).toBe(true);
  expect(hasValuesFromArray(set, [obj1, obj2])).toBe(true);
  expect(hasValuesFromArray(set, [obj3])).toBe(false); // Different reference
  expect(hasValuesFromArray(set, [obj1, obj3])).toBe(false);
});

test('hasValuesFromArray handles special values correctly', () => {
  const set = new Set([0, false, '', null, undefined, NaN]);
  
  expect(hasValuesFromArray(set, [0])).toBe(true);
  expect(hasValuesFromArray(set, [false])).toBe(true);
  expect(hasValuesFromArray(set, [''])).toBe(true);
  expect(hasValuesFromArray(set, [null])).toBe(true);
  expect(hasValuesFromArray(set, [undefined])).toBe(true);
  expect(hasValuesFromArray(set, [NaN])).toBe(true);
  expect(hasValuesFromArray(set, [0, false, ''])).toBe(true);
});

test('hasValuesFromArray returns boolean type', () => {
  const set = new Set([1, 2, 3]);
  
  const result1 = hasValuesFromArray(set, [1]);
  const result2 = hasValuesFromArray(set, [4]);
  
  expect(typeof result1).toBe('boolean');
  expect(typeof result2).toBe('boolean');
  expect(result1).toBe(true);
  expect(result2).toBe(false);
});
