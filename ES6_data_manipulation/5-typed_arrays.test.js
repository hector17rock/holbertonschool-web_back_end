import createInt8TypedArray from './5-typed_arrays.js';

test('createInt8TypedArray creates correct DataView', () => {
  const result = createInt8TypedArray(10, 2, 89);
  
  expect(result).toBeInstanceOf(DataView);
  expect(result.byteLength).toBe(10);
  expect(result.byteOffset).toBe(0);
  expect(result.buffer.byteLength).toBe(10);
});

test('createInt8TypedArray sets value at correct position', () => {
  const result = createInt8TypedArray(10, 2, 89);
  
  // Check that the value is correctly set at position 2
  expect(result.getInt8(2)).toBe(89);
  
  // Check that other positions are zero (default)
  expect(result.getInt8(0)).toBe(0);
  expect(result.getInt8(1)).toBe(0);
  expect(result.getInt8(3)).toBe(0);
  expect(result.getInt8(9)).toBe(0);
});

test('createInt8TypedArray works with different positions and values', () => {
  const result1 = createInt8TypedArray(5, 0, 42);
  expect(result1.getInt8(0)).toBe(42);
  expect(result1.byteLength).toBe(5);
  
  const result2 = createInt8TypedArray(8, 7, -50);
  expect(result2.getInt8(7)).toBe(-50);
  expect(result2.byteLength).toBe(8);
});

test('createInt8TypedArray handles negative values correctly', () => {
  const result = createInt8TypedArray(5, 2, -128);
  expect(result.getInt8(2)).toBe(-128);
});

test('createInt8TypedArray handles maximum positive Int8 value', () => {
  const result = createInt8TypedArray(5, 2, 127);
  expect(result.getInt8(2)).toBe(127);
});

test('createInt8TypedArray throws error for position outside range - negative', () => {
  expect(() => {
    createInt8TypedArray(10, -1, 89);
  }).toThrow('Position outside range');
});

test('createInt8TypedArray throws error for position outside range - too large', () => {
  expect(() => {
    createInt8TypedArray(10, 10, 89);
  }).toThrow('Position outside range');
  
  expect(() => {
    createInt8TypedArray(5, 5, 42);
  }).toThrow('Position outside range');
});

test('createInt8TypedArray works with edge positions', () => {
  // First position (0)
  const result1 = createInt8TypedArray(10, 0, 100);
  expect(result1.getInt8(0)).toBe(100);
  
  // Last position (length - 1)
  const result2 = createInt8TypedArray(10, 9, -100);
  expect(result2.getInt8(9)).toBe(-100);
});

test('createInt8TypedArray works with minimum buffer size', () => {
  const result = createInt8TypedArray(1, 0, 77);
  expect(result.byteLength).toBe(1);
  expect(result.getInt8(0)).toBe(77);
});

test('createInt8TypedArray handles value overflow correctly', () => {
  // Int8 range is -128 to 127, values outside this range will wrap
  const result1 = createInt8TypedArray(5, 2, 200); // Should wrap to -56
  const expected1 = 200 - 256; // -56
  expect(result1.getInt8(2)).toBe(expected1);
  
  const result2 = createInt8TypedArray(5, 2, -200); // Should wrap to 56
  const expected2 = -200 + 256; // 56
  expect(result2.getInt8(2)).toBe(expected2);
});
