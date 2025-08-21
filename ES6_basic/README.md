# ES6 Basic - Holberton School Web Backend

A comprehensive collection of ES6 (ECMAScript 2015) exercises and implementations demonstrating modern JavaScript features and best practices.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Tasks Overview](#tasks-overview)
- [Code Quality & Linting](#code-quality--linting)
- [Testing](#testing)
- [Contributing](#contributing)

## 🎯 Project Overview

This project contains 13 JavaScript exercises that demonstrate essential ES6 features including:

- **Variable Declarations**: `const`, `let` vs `var`
- **Arrow Functions**: Modern function syntax
- **Template Literals**: String interpolation
- **Default Parameters**: Function parameter defaults
- **Rest/Spread Operators**: Modern array/object handling
- **Destructuring**: Object and array destructuring
- **Enhanced Object Properties**: Shorthand and computed properties
- **Block Scoping**: Understanding scope with `let` and `const`
- **Iterator Protocol**: Modern looping constructs

## 🛠 Technologies Used

- **JavaScript ES6+**: Modern ECMAScript features
- **Node.js v20.19.4**: JavaScript runtime
- **ESLint v9.33.0**: Code linting and style enforcement
- **Jest v30.0.5**: Testing framework
- **Babel**: ES6+ transpilation
- **npm**: Package management

## 📁 Project Structure

```
ES6_basic/
├── 📄 Configuration Files
│   ├── package.json           # Project configuration and dependencies
│   ├── eslint.config.js       # ESLint configuration
│   ├── babel.config.js        # Babel transpilation settings
│   └── jest.config.js         # Jest testing configuration
│
├── 🎯 Main Implementation Files
│   ├── 0-constants.js         # const vs let usage
│   ├── 1-block-scoped.js      # Block scoping demonstration
│   ├── 2-arrow.js             # Arrow functions
│   ├── 3-default-parameter.js # Default function parameters
│   ├── 4-rest-parameter.js    # Rest parameters
│   ├── 5-spread-operator.js   # Spread operator
│   ├── 6-string-interpolation.js # Template literals
│   ├── 7-getBudgetObject.js   # Object property shorthand
│   ├── 8-getBudgetCurrentYear.js # Computed property names
│   ├── 9-getFullBudget.js     # Object methods
│   ├── 10-loops.js            # ES6 loops and iterators
│   ├── 11-createEmployeesObject.js # Dynamic object creation
│   └── 12-createReportObject.js # Complex objects with methods
│
├── 🧪 Test Files
│   ├── 0-main.js              # Test file for task 0
│   ├── 1-main.js              # Test file for task 1
│   ├── 2-main.js              # Test file for task 2
│   ├── 3-main.js              # Test file for task 3
│   ├── 4-main.js              # Test file for task 4
│   ├── 5-main.js              # Test file for task 5
│   ├── 6-main.js              # Test file for task 6
│   ├── 7-main.js              # Test file for task 7
│   ├── 8-main.js              # Test file for task 8
│   ├── 9-main.js              # Test file for task 9
│   ├── 10-main.js             # Test file for task 10
│   ├── 11-main.js             # Test file for task 11
│   └── 12-main.js             # Test file for task 12
│
└── 📦 Dependencies
    └── node_modules/          # Installed packages
```

## 🚀 Installation & Setup

### Prerequisites

- Node.js v20+ 
- npm v10+

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd ES6_basic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npm run dev 0-main.js
   # Should output: "I prefer const when I can. But sometimes let is okay"
   ```

## 💻 Usage

### Running Individual Tasks

Execute any task using the dev script:

```bash
# Run a specific task
npm run dev 0-main.js
npm run dev 3-main.js
npm run dev 10-main.js

# Or directly with Node.js
node 0-main.js
node 3-main.js
```

### Available Scripts

```bash
# Development - Run any JavaScript file
npm run dev <filename>

# Linting - Check code quality
npm run lint

# Testing - Run Jest tests
npm test
```

## 📚 Tasks Overview

### Task 0: Constants (`0-constants.js`)
**Concept**: `const` vs `let` declarations
```javascript path=null start=null
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += ' is okay';
  return combination;
}
```
**Output**: `"I prefer const when I can. But sometimes let is okay"`

### Task 1: Block Scoped (`1-block-scoped.js`)
**Concept**: Block scoping with `let` and `const`
```javascript path=null start=null
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
```
**Output**: `[false, true]` (demonstrates block scoping)

### Task 2: Arrow Functions (`2-arrow.js`)
**Concept**: Arrow function syntax and `this` binding
```javascript path=null start=null
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
```
**Output**: `['SOMA', 'Union Square', 'Noe Valley']`

### Task 3: Default Parameters (`3-default-parameter.js`)
**Concept**: Function default parameters
```javascript path=null start=null
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
```
**Outputs**: 
- `getSumOfHoods(34)` → `142`
- `getSumOfHoods(34, 3)` → `56`
- `getSumOfHoods(34, 3, 4)` → `41`

### Task 4: Rest Parameters (`4-rest-parameter.js`)
**Concept**: Rest parameter syntax
```javascript path=null start=null
export default function returnHowManyArguments(...args) {
  return args.length;
}
```
**Output**: Returns count of arguments passed

### Task 5: Spread Operator (`5-spread-operator.js`)
**Concept**: Spread operator for arrays
```javascript path=null start=null
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
```
**Output**: Concatenated array with spread elements

### Task 6: String Interpolation (`6-string-interpolation.js`)
**Concept**: Template literals and string interpolation
```javascript path=null start=null
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion', 
    capita: '$178,479',
  };

  return `As of ${year}, it was the seventh-highest income county...`;
}
```
**Output**: Formatted string with interpolated values

### Task 7: Object Property Shorthand (`7-getBudgetObject.js`)
**Concept**: ES6 object property shorthand
```javascript path=null start=null
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };
  return budget;
}
```
**Output**: Object with shorthand properties

### Task 8: Computed Property Names (`8-getBudgetCurrentYear.js`)
**Concept**: Dynamic object property names
```javascript path=null start=null
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const currentYear = getCurrentYear();
  const budget = {
    [`income-${currentYear}`]: income,
    [`gdp-${currentYear}`]: gdp,
    [`capita-${currentYear}`]: capita,
  };
  return budget;
}
```
**Output**: Object with computed property names

### Task 9: Object Methods (`9-getFullBudget.js`)
**Concept**: ES6 object method definitions
```javascript path=null start=null
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };
  return fullBudget;
}
```
**Output**: Object with methods and spread operator

### Task 10: ES6 Loops (`10-loops.js`)
**Concept**: Modern iteration with `for...of`
```javascript path=null start=null
export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const value of array) {
    result.push(`${appendString}${value}`);
  }
  return result;
}
```
**Output**: `['correctly-appended', 'correctly-fixed', 'correctly-displayed']`

### Task 11: Dynamic Objects (`11-createEmployeesObject.js`)
**Concept**: Dynamic object creation
```javascript path=null start=null
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
```
**Output**: Object with dynamic key-value pairs

### Task 12: Complex Objects (`12-createReportObject.js`)
**Concept**: Complex object composition with spread and methods
```javascript path=null start=null
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(allEmployees) {
      return Object.keys(allEmployees).length;
    },
  };
}
```
**Output**: Complex object with nested data and methods

## 🔍 Code Quality & Linting

### ESLint Configuration

The project uses ESLint v9 with comprehensive rules for:

- **ES6+ Compliance**: Enforces modern JavaScript standards
- **Code Style**: 2-space indentation, proper semicolons
- **Best Practices**: No `var`, prefer `const`, no undefined variables

```bash
# Run linting on all files
npm run lint

# Lint specific files
npx eslint 10-loops.js 10-main.js

# Auto-fix issues where possible
npx eslint --fix .
```

### Code Standards

- ✅ **2-space indentation**
- ✅ **Single quotes for strings** 
- ✅ **Semicolons required**
- ✅ **No trailing whitespace**
- ✅ **Files end with newline**
- ✅ **ES6+ features required**
- ✅ **No `var` declarations**

## 🧪 Testing

### Jest Configuration

The project is configured for Jest testing with Babel transpilation:

```bash
# Run all tests
npm test

# Run specific tests
npm test -- --testNamePattern="specific test"
```

### Test Structure

- Each task has a corresponding `*-main.js` test file
- Tests demonstrate the expected functionality
- All tests validate correct ES6 implementation

## 🔄 Development Workflow

1. **Write ES6 code** in the numbered files
2. **Test functionality** using the main files
3. **Lint code** to ensure quality standards
4. **Run tests** to verify correctness
5. **Check output** matches expected results

## 📈 Learning Objectives

By completing this project, you will understand:

- ✅ **Modern Variable Declarations**: `const` vs `let` vs `var`
- ✅ **Arrow Functions**: Syntax and `this` binding behavior
- ✅ **Template Literals**: String interpolation and multiline strings
- ✅ **Destructuring**: Object and array destructuring patterns
- ✅ **Default Parameters**: Function parameter defaults
- ✅ **Rest/Spread**: Modern array and object handling
- ✅ **Enhanced Objects**: Shorthand properties and methods
- ✅ **Block Scoping**: How `let` and `const` create block scope
- ✅ **Modern Loops**: `for...of` and iterators
- ✅ **Dynamic Objects**: Computed property names

## 🎓 Holberton School Compliance

This project is optimized for Holberton School's automated checkers:

- **Perfect ES6 syntax** implementation
- **Consistent code formatting** with ESLint
- **Proper file structure** and naming
- **Complete test coverage** with expected outputs
- **Zero linting errors** across all files

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is part of the Holberton School curriculum and is for educational purposes.

## 👥 Author

**Hector** - Holberton School Student

---

**Happy Coding! 🚀**

*This README covers all 13 ES6 tasks with detailed explanations, setup instructions, and comprehensive usage examples. Each task demonstrates a specific ES6 feature with practical implementations and expected outputs.*
