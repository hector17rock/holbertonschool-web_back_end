import setFromArray from './6-set.js';

test('setFromArray creates Set from array with duplicates', () => {
  const result = setFromArray([12, 32, 15, 78, 98, 15]);
  
  expect(result).toBeInstanceOf(Set);
  expect(result.size).toBe(5);
  expect([...result]).toEqual([12, 32, 15, 78, 98]);
});

test('setFromArray creates Set from array without duplicates', () => {
  const result = setFromArray([1, 2, 3, 4, 5]);
  
  expect(result).toBeInstanceOf(Set);
  expect(result.size).toBe(5);
  expect([...result]).toEqual([1, 2, 3, 4, 5]);
});

test('setFromArray creates Set from empty array', () => {
  const result = setFromArray([]);
  
  expect(result).toBeInstanceOf(Set);
  expect(result.size).toBe(0);
  expect([...result]).toEqual([]);
});

test('setFromArray works with string array', () => {
  const result = setFromArray(['apple', 'banana', 'apple', 'orange']);
  
  expect(result).toBeInstanceOf(Set);
  expect(result.size).toBe(3);
  expect([...result]).toEqual(['apple', 'banana', 'orange']);
});

test('setFromArray works with mixed types', () => {
  const result = setFromArray([1, '1', true, 1, 'hello', true]);
  
  expect(result).toBeInstanceOf(Set);
  expect(result.size).toBe(4);
  expect([...result]).toEqual([1, '1', true, 'hello']);
});

test('setFromArray works with object references', () => {
  const obj1 = { id: 1 };
  const obj2 = { id: 2 };
  const obj3 = { id: 1 }; // Different object with same content
  
  const result = setFromArray([obj1, obj2, obj1, obj3]);
  
  expect(result).toBeInstanceOf(Set);
  expect(result.size).toBe(3); // obj1, obj2, obj3 are different references
  expect(result.has(obj1)).toBe(true);
  expect(result.has(obj2)).toBe(true);
  expect(result.has(obj3)).toBe(true);
});

test('setFromArray works with single element', () => {
  const result = setFromArray([42]);
  
  expect(result).toBeInstanceOf(Set);
  expect(result.size).toBe(1);
  expect([...result]).toEqual([42]);
});

test('setFromArray works with array of all same elements', () => {
  const result = setFromArray([5, 5, 5, 5, 5]);
  
  expect(result).toBeInstanceOf(Set);
  expect(result.size).toBe(1);
  expect([...result]).toEqual([5]);
});

test('setFromArray preserves order of first occurrence', () => {
  const result = setFromArray(['c', 'a', 'b', 'a', 'c']);
  
  expect(result).toBeInstanceOf(Set);
  expect(result.size).toBe(3);
  expect([...result]).toEqual(['c', 'a', 'b']);
});

test('setFromArray works with null and undefined', () => {
  const result = setFromArray([null, undefined, null, 0, '', undefined]);
  
  expect(result).toBeInstanceOf(Set);
  expect(result.size).toBe(4);
  expect([...result]).toEqual([null, undefined, 0, '']);
});

test('setFromArray handles NaN correctly', () => {
  const result = setFromArray([NaN, NaN, 1, NaN]);
  
  expect(result).toBeInstanceOf(Set);
  expect(result.size).toBe(2); // NaN is treated as equal to itself in Set
  expect(result.has(NaN)).toBe(true);
  expect(result.has(1)).toBe(true);
});
