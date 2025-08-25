import cleanSet from './8-clean_set.js';

test('cleanSet filters and cleans set values with startString', () => {
  const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
  const result = cleanSet(set, 'bon');
  
  expect(result).toBe('jovi-aparte-appetit');
});

test('cleanSet returns empty string for empty startString', () => {
  const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
  const result = cleanSet(set, '');
  
  expect(result).toBe('');
});

test('cleanSet returns empty string for undefined startString', () => {
  const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
  const result = cleanSet(set, undefined);
  
  expect(result).toBe('');
});

test('cleanSet returns empty string for null startString', () => {
  const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
  const result = cleanSet(set, null);
  
  expect(result).toBe('');
});

test('cleanSet returns empty string for non-string startString', () => {
  const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
  
  expect(cleanSet(set, 123)).toBe('');
  expect(cleanSet(set, true)).toBe('');
  expect(cleanSet(set, {})).toBe('');
});

test('cleanSet works with different prefix', () => {
  const set = new Set(['apple', 'application', 'apply', 'banana']);
  const result = cleanSet(set, 'app');
  
  expect(result).toBe('le-lication-ly');
});

test('cleanSet returns empty string when no matches found', () => {
  const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
  const result = cleanSet(set, 'xyz');
  
  expect(result).toBe('');
});

test('cleanSet works with single matching value', () => {
  const set = new Set(['hello', 'world', 'help']);
  const result = cleanSet(set, 'hel');
  
  expect(result).toBe('lo-p');
});

test('cleanSet works with empty set', () => {
  const set = new Set();
  const result = cleanSet(set, 'test');
  
  expect(result).toBe('');
});

test('cleanSet handles exact matches (prefix equals value)', () => {
  const set = new Set(['test', 'testing', 'tester']);
  const result = cleanSet(set, 'test');
  
  expect(result).toBe('-ing-er'); // 'test' becomes empty string after removing 'test'
});

test('cleanSet ignores non-string values in set', () => {
  const set = new Set(['prefix1', 123, 'prefix2', true, null, 'prefix3']);
  const result = cleanSet(set, 'prefix');
  
  expect(result).toBe('1-2-3');
});

test('cleanSet preserves order of set iteration', () => {
  const set = new Set(['bonc', 'bona', 'bonb']);
  const result = cleanSet(set, 'bon');
  
  expect(result).toBe('c-a-b'); // Order depends on Set iteration order
});

test('cleanSet handles case-sensitive matching', () => {
  const set = new Set(['Bonjour', 'bonjovi', 'BONUS']);
  const result = cleanSet(set, 'bon');
  
  expect(result).toBe('jovi'); // Only 'bonjovi' matches (case-sensitive)
});

test('cleanSet handles values with special characters', () => {
  const set = new Set(['pre-fix', 'pre_underscore', 'pre space', 'different']);
  const result = cleanSet(set, 'pre');
  
  expect(result).toBe('-fix-_underscore- space');
});

test('cleanSet returns string type', () => {
  const set = new Set(['test1', 'test2']);
  const result = cleanSet(set, 'test');
  
  expect(typeof result).toBe('string');
});

test('cleanSet handles long startString', () => {
  const set = new Set(['verylongprefix123', 'verylongprefix456', 'short']);
  const result = cleanSet(set, 'verylongprefix');
  
  expect(result).toBe('123-456');
});

test('cleanSet handles startString longer than some values', () => {
  const set = new Set(['ab', 'abc', 'abcdef']);
  const result = cleanSet(set, 'abc');
  
  expect(result).toBe('-def'); // 'ab' doesn't match, 'abc' becomes '', 'abcdef' becomes 'def'
});
