import { queryAPI, weakMap } from './100-weak.js';

test('weakMap is a WeakMap instance', () => {
  expect(weakMap).toBeInstanceOf(WeakMap);
});

test('queryAPI tracks endpoint calls in WeakMap', () => {
  const endpoint = { protocol: 'http', name: 'testEndpoint' };
  
  queryAPI(endpoint);
  expect(weakMap.get(endpoint)).toBe(1);
  
  queryAPI(endpoint);
  expect(weakMap.get(endpoint)).toBe(2);
  
  queryAPI(endpoint);
  expect(weakMap.get(endpoint)).toBe(3);
});

test('queryAPI throws error on 5th call', () => {
  const endpoint = { protocol: 'https', name: 'getUsers' };
  
  // First 4 calls should work
  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
  
  expect(weakMap.get(endpoint)).toBe(4);
  
  // 5th call should throw error
  expect(() => {
    queryAPI(endpoint);
  }).toThrow('Endpoint load is high');
  
  // Count should still be 5 after the error
  expect(weakMap.get(endpoint)).toBe(5);
});

test('queryAPI handles different endpoints separately', () => {
  const endpoint1 = { protocol: 'http', name: 'endpoint1' };
  const endpoint2 = { protocol: 'https', name: 'endpoint2' };
  
  // Call endpoint1 three times
  queryAPI(endpoint1);
  queryAPI(endpoint1);
  queryAPI(endpoint1);
  
  // Call endpoint2 two times
  queryAPI(endpoint2);
  queryAPI(endpoint2);
  
  expect(weakMap.get(endpoint1)).toBe(3);
  expect(weakMap.get(endpoint2)).toBe(2);
});

test('queryAPI works with initially undefined endpoint', () => {
  const newEndpoint = { protocol: 'ftp', name: 'newEndpoint' };
  
  // Initially undefined
  expect(weakMap.get(newEndpoint)).toBeUndefined();
  
  // First call
  queryAPI(newEndpoint);
  expect(weakMap.get(newEndpoint)).toBe(1);
});

test('different endpoint objects with same content are tracked separately', () => {
  const endpoint1 = { protocol: 'http', name: 'sameContent' };
  const endpoint2 = { protocol: 'http', name: 'sameContent' };
  
  queryAPI(endpoint1);
  queryAPI(endpoint2);
  
  // Different objects, even with same content, are tracked separately in WeakMap
  expect(weakMap.get(endpoint1)).toBe(1);
  expect(weakMap.get(endpoint2)).toBe(1);
});

test('queryAPI error message is correct', () => {
  const endpoint = { protocol: 'http', name: 'errorTest' };
  
  // Call 4 times to get to the threshold
  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
  
  try {
    queryAPI(endpoint);
  } catch (error) {
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe('Endpoint load is high');
  }
});

test('queryAPI continues to throw error on subsequent calls after limit', () => {
  const endpoint = { protocol: 'http', name: 'continuousError' };
  
  // Call 5 times to reach the limit
  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
  
  expect(() => queryAPI(endpoint)).toThrow('Endpoint load is high');
  
  // Subsequent calls should still throw error
  expect(() => queryAPI(endpoint)).toThrow('Endpoint load is high');
  expect(() => queryAPI(endpoint)).toThrow('Endpoint load is high');
  
  // Count should keep incrementing even after errors
  expect(weakMap.get(endpoint)).toBeGreaterThanOrEqual(5);
});

test('weakMap can be accessed directly', () => {
  const endpoint = { protocol: 'http', name: 'directAccess' };
  
  // Initially undefined
  expect(weakMap.get(endpoint)).toBeUndefined();
  
  // Call once
  queryAPI(endpoint);
  
  // Can access count directly through weakMap
  expect(weakMap.get(endpoint)).toBe(1);
  
  // Can also set values directly (though not typical usage)
  weakMap.set(endpoint, 10);
  expect(weakMap.get(endpoint)).toBe(10);
});

test('weakMap only accepts object keys', () => {
  // WeakMap should only accept objects as keys, not primitives
  expect(() => {
    weakMap.set('string key', 1);
  }).toThrow();
  
  expect(() => {
    weakMap.set(123, 1);
  }).toThrow();
  
  expect(() => {
    weakMap.set(true, 1);
  }).toThrow();
});

test('endpoint objects are properly used as WeakMap keys', () => {
  const endpoint = { protocol: 'http', name: 'keyTest', port: 8080 };
  
  queryAPI(endpoint);
  
  // The endpoint object should be usable as a WeakMap key
  expect(weakMap.has(endpoint)).toBe(true);
  expect(weakMap.get(endpoint)).toBe(1);
});
