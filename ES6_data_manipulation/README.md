# ES6 Data Manipulation

A comprehensive project demonstrating advanced ES6 data manipulation techniques, functional programming concepts, and modern JavaScript data structures. This project is part of the Holberton School curriculum for backend web development.

## 📋 Table of Contents

- [🎯 Overview](#overview)
- [📚 Learning Objectives](#learning-objectives)
- [🛠 Technologies Used](#technologies-used)
- [📁 Project Structure](#project-structure)
- [⚙️ Installation & Setup](#installation--setup)
- [🚀 Usage](#usage)
- [📝 Task Descriptions](#task-descriptions)
- [🔑 Key Concepts](#key-concepts)
- [🗄️ Data Structures](#data-structures)
- [🔬 Array Methods](#array-methods)
- [🧪 Testing](#testing)
- [💡 Examples](#examples)
- [⚡ Performance Notes](#performance-notes)
- [🎯 Best Practices](#best-practices)
- [🔧 Development Workflow](#development-workflow)
- [🚀 Advanced Topics](#advanced-topics)
- [📊 Project Statistics](#project-statistics)
- [👨‍💻 Author](#author)
- [📄 License](#license)

## 🎯 Overview

This project explores ES6 data manipulation through practical implementations of array methods, advanced data structures, and functional programming patterns. It covers everything from basic array operations to complex data transformations using modern JavaScript features.

### Key Focus Areas:
- **Array Methods**: map, filter, reduce, forEach, every, find
- **Data Structures**: Set, Map, WeakMap, TypedArrays
- **Functional Programming**: Pure functions, immutability, method chaining
- **Data Transformation**: Complex data manipulation and filtering
- **Performance**: Efficient algorithms and memory management

## 📚 Learning Objectives

By completing this project, you will master:

- **Array Manipulation**: Transform and process arrays using ES6 methods
- **Functional Programming**: Write pure, predictable functions
- **Data Structures**: Understand when and how to use Set, Map, WeakMap
- **Type Safety**: Work with TypedArrays for binary data
- **Performance Optimization**: Choose appropriate data structures for specific use cases
- **Testing**: Write comprehensive unit tests for data manipulation functions
- **Modern JavaScript**: Use latest ES6+ features effectively

## 🛠 Technologies Used

- **JavaScript ES6+** - Core programming language with modern features
- **Node.js** - Runtime environment for JavaScript execution
- **Jest** - Testing framework for unit tests
- **Babel** - JavaScript transpiler for compatibility
- **ESLint** - Code linting and quality assurance

## 📁 Project Structure

```
ES6_data_manipulation/
├── Core Functions
│   ├── 0-get_list_students.js          # Basic array creation
│   ├── 1-get_list_student_ids.js       # Map implementation
│   ├── 2-get_students_by_loc.js        # Filter implementation
│   ├── 3-get_ids_sum.js                # Reduce implementation
│   └── 4-update_grade_by_city.js       # Filter + Map combination
├── Data Structures
│   ├── 5-typed_arrays.js               # TypedArrays and ArrayBuffer
│   ├── 6-set.js                        # Set creation and usage
│   ├── 7-has_array_values.js           # Set membership testing
│   ├── 8-clean_set.js                  # Set manipulation and filtering
│   ├── 9-groceries_list.js             # Map creation and usage
│   ├── 10-update_uniq_items.js         # Map manipulation
│   └── 100-weak.js                     # WeakMap for advanced use cases
├── Test Files
│   ├── *-main.js                       # Demo files for each function
│   └── *.test.js                       # Jest unit tests
├── Configuration
│   ├── package.json                    # Project dependencies and scripts
│   ├── babel.config.js                 # Babel transpiler configuration
│   └── eslint.config.js                # ESLint code quality rules
└── README.md                           # Project documentation
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14+ recommended)
- npm (comes with Node.js)

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd ES6_data_manipulation
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Verify installation:**
   ```bash
   npm test
   ```

## 🚀 Usage

### Running Individual Functions

Execute any main file to see the function in action:

```bash
# Basic array operations
npm run dev 0-main.js    # Create student list
npm run dev 1-main.js    # Extract IDs with map
npm run dev 2-main.js    # Filter by location
npm run dev 3-main.js    # Sum IDs with reduce

# Advanced data manipulation
npm run dev 4-main.js    # Complex filter + map
npm run dev 5-main.js    # TypedArrays
npm run dev 6-main.js    # Set operations
npm run dev 7-main.js    # Set membership
npm run dev 8-main.js    # Set filtering
npm run dev 9-main.js    # Map creation
npm run dev 10-main.js   # Map manipulation
npm run dev 100-main.js  # WeakMap usage
```

### Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test 0-get_list_students.test.js

# Run tests in watch mode
npm test -- --watch
```

## 📝 Task Descriptions

### Task 0: Basic List of Objects
**File**: `0-get_list_students.js`
- **Purpose**: Create and return an array of student objects
- **Concepts**: Object creation, array literals
- **Returns**: Array of student objects with id, firstName, location

### Task 1: More Mapping
**File**: `1-get_list_student_ids.js`
- **Purpose**: Extract IDs from student objects using map
- **Concepts**: Array.map(), type checking, error handling
- **Returns**: Array of student IDs or empty array

### Task 2: Filter
**File**: `2-get_students_by_loc.js`
- **Purpose**: Filter students by location
- **Concepts**: Array.filter(), string matching
- **Returns**: Array of students from specified city

### Task 3: Reduce
**File**: `3-get_ids_sum.js`
- **Purpose**: Calculate sum of student IDs
- **Concepts**: Array.reduce(), accumulator patterns
- **Returns**: Number representing sum of all IDs

### Task 4: Combine
**File**: `4-update_grade_by_city.js`
- **Purpose**: Filter by city and add grades using map
- **Concepts**: Method chaining, object spreading, conditional assignment
- **Returns**: Array of students with grades added

### Task 5: Typed Arrays
**File**: `5-typed_arrays.js`
- **Purpose**: Work with binary data using TypedArrays
- **Concepts**: ArrayBuffer, DataView, Int8Array, error handling
- **Returns**: DataView with Int8 value at specific position

### Task 6: Set Data Structure
**File**: `6-set.js`
- **Purpose**: Create Set from array (automatic deduplication)
- **Concepts**: Set constructor, duplicate removal
- **Returns**: Set containing unique array elements

### Task 7: More Set Data Structure
**File**: `7-has_array_values.js`
- **Purpose**: Check if all array elements exist in Set
- **Concepts**: Set.has(), Array.every(), boolean logic
- **Returns**: Boolean indicating if all elements are present

### Task 8: Clean Set
**File**: `8-clean_set.js`
- **Purpose**: Filter and clean Set values based on prefix
- **Concepts**: String manipulation, Set iteration, filtering
- **Returns**: String of filtered values joined by hyphens

### Task 9: Map Data Structure
**File**: `9-groceries_list.js`
- **Purpose**: Create Map with grocery items and quantities
- **Concepts**: Map creation, key-value pairs
- **Returns**: Map of grocery items with quantities

### Task 10: More Map Data Structure
**File**: `10-update_uniq_items.js`
- **Purpose**: Update Map items with quantity 1 to quantity 100
- **Concepts**: Map iteration, conditional updates, error handling
- **Returns**: Modified Map with updated quantities

### Task 11: Weak Map Data Structure (Advanced)
**File**: `100-weak.js`
- **Purpose**: Track API calls with rate limiting using WeakMap
- **Concepts**: WeakMap, garbage collection, rate limiting, object references
- **Returns**: Rate-limited API function with call tracking

## 🔑 Key Concepts

### Functional Programming

```javascript
// Pure Functions - Same input always produces same output
const getStudentIds = (students) => students.map(student => student.id);

// Method Chaining - Combine operations elegantly
const result = students
  .filter(student => student.location === 'San Francisco')
  .map(student => ({ ...student, grade: getGrade(student.id) }));

// Immutability - Don't modify original data
const newArray = [...originalArray].sort();
```

### Array Method Patterns

```javascript
// Transform: map - 1:1 transformation
array.map(item => transform(item))

// Filter: filter - select subset
array.filter(item => condition(item))

// Aggregate: reduce - combine into single value
array.reduce((acc, item) => acc + item.value, 0)

// Test: every/some - boolean operations
array.every(item => condition(item))
```

## 🗄️ Data Structures

### Set
```javascript
// Automatic deduplication
const uniqueItems = new Set([1, 2, 2, 3]); // {1, 2, 3}

// Fast membership testing O(1)
set.has(value); // true/false

// Iteration preserves insertion order
for (const item of set) { /* process */ }
```

### Map
```javascript
// Key-value pairs with any key type
const map = new Map();
map.set(objectKey, 'value');
map.set('string', 42);

// Better than objects for frequent additions/deletions
map.delete(key);
map.clear();
```

### WeakMap
```javascript
// Garbage collection friendly
const weakMap = new WeakMap();
weakMap.set(objectKey, data); // objectKey can be GC'd

// Private data storage
class Private {
  constructor() {
    privateData.set(this, { secret: 'hidden' });
  }
}
```

### TypedArrays
```javascript
// Binary data manipulation
const buffer = new ArrayBuffer(10);
const view = new DataView(buffer);
view.setInt8(0, 42); // Set byte at position 0
```

## 🔬 Array Methods

### Transformation Methods

| Method | Purpose | Returns | Example |
|--------|---------|---------|----------|
| `map()` | Transform each element | New array | `[1,2,3].map(x => x*2)` → `[2,4,6]` |
| `filter()` | Select elements | New array | `[1,2,3,4].filter(x => x%2)` → `[1,3]` |
| `reduce()` | Combine to single value | Any type | `[1,2,3].reduce((a,b) => a+b)` → `6` |

### Testing Methods

| Method | Purpose | Returns | Example |
|--------|---------|---------|----------|
| `every()` | All elements pass test | Boolean | `[2,4,6].every(x => x%2===0)` → `true` |
| `some()` | Any element passes test | Boolean | `[1,3,4].some(x => x%2===0)` → `true` |
| `find()` | First matching element | Element/undefined | `[1,2,3].find(x => x>1)` → `2` |

### Utility Methods

| Method | Purpose | Returns | Example |
|--------|---------|---------|----------|
| `forEach()` | Execute for each element | undefined | `[1,2,3].forEach(console.log)` |
| `includes()` | Element exists | Boolean | `[1,2,3].includes(2)` → `true` |
| `indexOf()` | Find element position | Number | `[1,2,3].indexOf(2)` → `1` |

## 🧪 Testing

The project includes comprehensive Jest tests covering:

- **Unit Tests**: Each function tested in isolation
- **Edge Cases**: Empty arrays, invalid inputs, boundary conditions
- **Error Handling**: Proper error throwing and catching
- **Type Checking**: Input validation and type safety
- **Integration**: Functions working together

### Test Structure
```javascript
// Example test pattern
test('function name does expected behavior', () => {
  const input = /* test data */;
  const result = functionUnderTest(input);
  expect(result).toEqual(expectedOutput);
});
```

### Running Specific Tests
```bash
# Test a specific file
npm test 1-get_list_student_ids.test.js

# Test with coverage
npm test -- --coverage

# Test in watch mode (re-run on changes)
npm test -- --watch
```

## 💡 Examples

### Basic Array Operations
```javascript
// Create student list
const students = getListStudents();
// Returns: [
//   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
//   { id: 2, firstName: 'James', location: 'Columbia' },
//   { id: 5, firstName: 'Serena', location: 'San Francisco' }
// ]

// Extract IDs
const ids = getListStudentIds(students);
// Returns: [1, 2, 5]

// Filter by location
const sfStudents = getStudentsByLocation(students, 'San Francisco');
// Returns: [Guillaume, Serena]

// Sum all IDs
const sum = getStudentIdsSum(students);
// Returns: 8
```

### Advanced Data Manipulation
```javascript
// Complex filtering and grading
const grades = [{ studentId: 1, grade: 86 }, { studentId: 5, grade: 97 }];
const gradedStudents = updateStudentGradeByCity(students, 'San Francisco', grades);
// Returns: [
//   { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 86 },
//   { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
// ]
```

### Data Structures
```javascript
// Set operations
const uniqueNumbers = setFromArray([1, 2, 2, 3, 1]);
// Returns: Set {1, 2, 3}

// Set membership testing
const allExist = hasValuesFromArray(new Set([1, 2, 3]), [1, 2]);
// Returns: true

// Map operations
const groceries = groceriesList();
// Returns: Map { 'Apples' => 10, 'Bananas' => 5, ... }
```

## ⚡ Performance Notes

### Time Complexity

| Operation | Array | Set | Map | WeakMap |
|-----------|-------|-----|-----|----------|
| Access/Search | O(n) | O(1) avg | O(1) avg | O(1) avg |
| Insert | O(1) | O(1) avg | O(1) avg | O(1) avg |
| Delete | O(n) | O(1) avg | O(1) avg | O(1) avg |
| Iteration | O(n) | O(n) | O(n) | Not possible |

### Memory Considerations

- **Arrays**: Indexed storage, good for sequential access
- **Sets**: Hash-based, excellent for uniqueness and membership tests
- **Maps**: Key-value hash storage, better than objects for frequent updates
- **WeakMaps**: Garbage collection friendly, ideal for private data

### Best Performance Practices

```javascript
// Good: Use appropriate data structure
const uniqueIds = new Set(ids); // O(1) lookup
if (uniqueIds.has(targetId)) { /* fast */ }

// Avoid: Linear search in array
if (ids.includes(targetId)) { /* O(n) lookup */ }

// Good: Chain operations efficiently
const result = data
  .filter(item => item.active)     // Reduce dataset first
  .map(item => transform(item));   // Then transform

// Avoid: Transform then filter (processes more data)
const result = data
  .map(item => transform(item))
  .filter(item => item.active);
```

## 🎯 Best Practices

### Code Style
```javascript
// Use descriptive names
const getActiveUsersByLocation = (users, location) => {
  return users.filter(user => user.active && user.location === location);
};

// Prefer const for immutable data
const students = getListStudents();

// Use arrow functions for callbacks
students.map(student => student.id);
```

### Error Handling
```javascript
// Validate inputs
function processStudents(students) {
  if (!Array.isArray(students)) {
    throw new Error('Expected array of students');
  }
  return students.filter(/* criteria */);
}

// Handle edge cases
const safeGetIds = (students = []) => {
  return students.map(student => student?.id).filter(Boolean);
};
```

### Functional Programming
```javascript
// Pure functions (no side effects)
const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + item.price, 0);
};

// Immutable updates
const updateStudent = (student, updates) => ({ ...student, ...updates });

// Composition over inheritance
const pipeline = (...functions) => (value) => {
  return functions.reduce((acc, fn) => fn(acc), value);
};
```

## 🔧 Development Workflow

### Testing Workflow
1. Write failing test
2. Implement minimum code to pass
3. Refactor for clarity and performance
4. Repeat

### Debugging Tips
```javascript
// Use console.table for array/object data
console.table(students);

// Debug chain operations
const result = students
  .filter(s => { console.log('Filtering:', s); return s.active; })
  .map(s => { console.log('Mapping:', s); return transform(s); });

// Use meaningful test descriptions
test('should return empty array when no students match location', () => {
  // test implementation
});
```

## 🚀 Advanced Topics

### Memory Management
```javascript
// WeakMap for automatic cleanup
const cache = new WeakMap();
function getData(obj) {
  if (cache.has(obj)) return cache.get(obj);
  const data = expensiveOperation(obj);
  cache.set(obj, data);
  return data;
}
// When obj is GC'd, cache entry is automatically removed
```

### Performance Optimization
```javascript
// Lazy evaluation with generators
function* filterMap(array, filterFn, mapFn) {
  for (const item of array) {
    if (filterFn(item)) {
      yield mapFn(item);
    }
  }
}

// Process only what you need
const results = [...filterMap(hugeArray, filter, transform)].slice(0, 10);
```

## 📊 Project Statistics

- **Total Functions**: 11 main functions + utilities
- **Test Coverage**: 116 tests across 12 test suites
- **Code Quality**: ESLint compliant
- **Performance**: Optimized algorithms and data structures
- **Documentation**: Comprehensive inline and external docs

## 👨‍💻 Author

**Héctor Soto**
- GitHub: [@hector17rock](https://github.com/hector17rock)
- Holberton School Student
- Backend Web Development Specialization
- Focus: JavaScript, Node.js, Data Structures, Algorithms

## 📄 License

This project is part of the Holberton School curriculum and is intended for educational purposes.

---

*This comprehensive README demonstrates mastery of ES6 data manipulation techniques, modern JavaScript features, and best practices in functional programming and data structure usage.*
