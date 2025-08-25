# ES6 Classes

A comprehensive project demonstrating ES6 class syntax, inheritance, polymorphism, and advanced JavaScript concepts. This project is part of the Holberton School curriculum for backend web development.

## 📋 Table of Contents

- [Overview](#overview)
- [Learning Objectives](#learning-objectives)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [File Descriptions](#file-descriptions)
- [Key Concepts Covered](#key-concepts-covered)
- [Testing](#testing)
- [Code Style](#code-style)
- [Examples](#examples)
- [Author](#author)

## 🎯 Overview

This project explores ES6 class syntax and object-oriented programming concepts in JavaScript. It covers fundamental topics such as class definition, inheritance, getters/setters, static methods, and advanced features like Symbol manipulation and method overriding.

## 📚 Learning Objectives

By the end of this project, you should be able to:

- Define a class using ES6 syntax
- Add methods to a class
- Use static methods in classes
- Extend a class from another (inheritance)
- Implement getters and setters
- Use metaprogramming with symbols
- Handle method overriding and polymorphism
- Understand class hoisting and proper instantiation

## 🛠 Technologies Used

- **JavaScript ES6+** - Core programming language
- **Node.js** - Runtime environment
- **Babel** - JavaScript transpiler for ES6+ compatibility
- **ESLint** - Code linting and style enforcement
- **Jest** - Testing framework

## 📁 Project Structure

```
ES6_classes/
├── 0-classroom.js              # Basic class definition
├── 1-make_classrooms.js        # Class instantiation and arrays
├── 2-hbtn_course.js           # Getters, setters, and validation
├── 3-currency.js              # Class methods and string formatting
├── 4-pricing.js               # Static methods and object composition
├── 5-building.js              # Abstract classes and method overriding
├── 6-sky_high.js              # Inheritance and super keyword
├── 7-airport.js               # Symbol manipulation and toString override
├── 8-hbtn_class.js            # valueOf and toString methods
├── 9-hoisting.js              # Class hoisting and exports
├── 10-car.js                  # Cloning and constructor reference
├── *-main.js                  # Test files for each module
├── babel.config.js            # Babel configuration
├── eslint.config.js           # ESLint configuration
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd ES6_classes
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Verify installation:**
   ```bash
   npm run lint
   npm test
   ```

## 🚀 Usage

### Running Individual Files

Execute any main file using Babel Node:

```bash
npm run dev 0-main.js
npm run dev 3-main.js
npm run dev 5-main.js
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests with linting
npm run full-test

# Run linting only
npm run check-lint
```

### Development Scripts

- `npm run lint` - Run ESLint on all files
- `npm run dev <file>` - Execute file with Babel Node
- `npm run test` - Run Jest test suite
- `npm run full-test` - Run linting + tests

## 📝 File Descriptions

### Core Class Files

| File | Description | Key Concepts |
|------|-------------|-------------|
| `0-classroom.js` | Basic class with constructor | Class definition, private properties |
| `1-make_classrooms.js` | Factory function for class instances | Object instantiation, arrays |
| `2-hbtn_course.js` | Class with validation and accessors | Getters/setters, type validation |
| `3-currency.js` | Simple class with display method | Instance methods, string interpolation |
| `4-pricing.js` | Class with static methods | Static methods, object composition |
| `5-building.js` | Abstract class pattern | Abstract methods, inheritance validation |
| `6-sky_high.js` | Inheritance implementation | Class extension, super keyword |
| `7-airport.js` | Symbol manipulation | toString override, Symbol.toStringTag |
| `8-hbtn_class.js` | Type coercion methods | valueOf(), toString() methods |
| `9-hoisting.js` | Multiple class definitions | Class hoisting, multiple exports |
| `10-car.js` | Dynamic object cloning | Constructor reference, dynamic instantiation |

### Configuration Files

- **`babel.config.js`** - Transpilation settings for ES6+ features
- **`eslint.config.js`** - Code style and quality rules
- **`package.json`** - Project metadata and dependencies

## 🔑 Key Concepts Covered

### 1. Basic Class Structure
```javascript
class ClassName {
  constructor(param) {
    this._property = param;
  }
  
  method() {
    return this._property;
  }
}
```

### 2. Getters and Setters
```javascript
get property() {
  return this._property;
}

set property(value) {
  if (typeof value !== 'string') {
    throw new TypeError('Property must be a string');
  }
  this._property = value;
}
```

### 3. Inheritance
```javascript
class ChildClass extends ParentClass {
  constructor(param1, param2) {
    super(param1);
    this._param2 = param2;
  }
}
```

### 4. Static Methods
```javascript
static staticMethod(param1, param2) {
  return param1 * param2;
}
```

### 5. Abstract Class Pattern
```javascript
if (this.constructor !== BaseClass && typeof this.requiredMethod !== 'function') {
  throw new Error('Subclass must implement requiredMethod');
}
```

## 🧪 Testing

The project includes comprehensive testing:

- **Unit Tests**: Jest test files for each module
- **Integration Tests**: Main files demonstrating functionality
- **Linting Tests**: ESLint validation for code quality

### Running Specific Tests

```bash
# Run tests for a specific file pattern
npx jest 0-classroom.test.js

# Run tests in watch mode
npx jest --watch

# Run tests with coverage
npx jest --coverage
```

## 📐 Code Style

The project follows strict ESLint rules:

- **Indentation**: 2 spaces
- **Quotes**: Single quotes for strings
- **Semicolons**: Required
- **No trailing spaces**
- **Prefer const/let over var**
- **Arrow function spacing**

### Key Style Rules
```javascript
// ✅ Good
const myClass = new MyClass('value');
const result = obj.method();

// ❌ Bad
var myClass = new MyClass("value")
const result = obj.method()
```

## 💡 Examples

### Creating and Using Classes

```javascript
// Import classes
import ClassRoom from './0-classroom.js';
import Currency from './3-currency.js';
import Pricing from './4-pricing.js';

// Create instances
const room = new ClassRoom(30);
const dollar = new Currency('$', 'Dollar');
const price = new Pricing(100, dollar);

// Use methods
console.log(price.displayFullPrice()); // "100 Dollar ($)"
console.log(Pricing.convertPrice(100, 1.2)); // 120
```

### Inheritance Example

```javascript
import Building from './5-building.js';
import SkyHighBuilding from './6-sky_high.js';

const building = new SkyHighBuilding(500, 10);
console.log(building.evacuationWarningMessage());
// "Evacuate slowly the 10 floors"
```

### Advanced Features

```javascript
import Airport from './7-airport.js';
import HolbertonClass from './8-hbtn_class.js';

const airport = new Airport('San Francisco Airport', 'SFO');
console.log(String(airport)); // "[object SFO]"

const hClass = new HolbertonClass(120, 'San Francisco');
console.log(Number(hClass)); // 120
console.log(String(hClass)); // "San Francisco"
```

## 🚦 Common Issues & Solutions

### 1. Module Import Errors
```bash
# Ensure you're using ES6 modules
"type": "module" // in package.json
```

### 2. Babel Transpilation Issues
```bash
# Run with Babel Node
npm run dev filename.js
```

### 3. ESLint Errors
```bash
# Fix auto-fixable issues
npx eslint --fix filename.js
```

## 📈 Performance Considerations

- **Constructor Validation**: Perform type checking in constructors
- **Method Binding**: Use arrow functions for event handlers
- **Memory Management**: Avoid circular references in object composition
- **Inheritance Depth**: Keep inheritance hierarchies shallow

## 🔮 Future Enhancements

- Add TypeScript definitions
- Implement more advanced design patterns
- Add comprehensive JSDoc documentation
- Create interactive examples
- Add performance benchmarks

## 👨‍💻 Author

**Hector**
- Holberton School Student
- Backend Web Development Specialization

## 📄 License

This project is part of the Holberton School curriculum and is intended for educational purposes.

---

*This README was generated as part of the ES6 Classes project to demonstrate comprehensive documentation practices and project understanding.*
