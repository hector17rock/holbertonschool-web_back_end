# ES6 Classes Testing Guide

## 🎯 Overview

This document provides multiple testing approaches for ES6 Classes tasks to ensure compatibility with different testing environments, including constrained environments that may have Jest configuration issues.

## 🚀 Available Testing Methods

### 1. **Primary Test Method (Recommended)**
```bash
npm test
```
**What it runs**: `0-classroom-simple.test.js` - A self-contained test runner that doesn't require Jest

**Advantages**:
- ✅ Works in any Node.js environment
- ✅ No external dependencies beyond Node.js
- ✅ Clear, readable output
- ✅ Proper exit codes for CI/CD

### 2. **Individual Task Testing**
```bash
node 0-main.js          # Test ClassRoom basic functionality
node 1-main.js          # Test initializeRooms function
node 2-main.js          # Test HolbertonCourse with validation
```

### 3. **Comprehensive Testing**
```bash
npm run test:comprehensive
```
**What it runs**: `test-runner.js` - Full test suite for HolbertonCourse

### 4. **Jest Testing (Advanced)**
```bash
npm run test:jest 0-classroom.test.js
```
**Note**: May require proper Jest configuration in constrained environments

## 🔧 Test Files Explained

### Simple Test Runner (`0-classroom-simple.test.js`)
- **Purpose**: Primary testing method for classroom functionality
- **Features**: 
  - Built-in assertion library
  - No external dependencies
  - Clear test descriptions
  - Proper error handling

### Jest Test File (`0-classroom.test.js`)
- **Purpose**: Traditional Jest testing approach
- **Features**:
  - Standard Jest syntax (`describe`, `test`, `expect`)
  - ES6 module imports
  - May require Babel transformation

### Comprehensive Test Runner (`test-runner.js`)
- **Purpose**: Full validation of HolbertonCourse class
- **Features**:
  - 8 comprehensive test cases
  - Type validation testing
  - Error message verification
  - Complete constructor testing

## 🐛 Troubleshooting Common Issues

### Issue: Jest Configuration Error
```
Module /home/student_jail/student_repo/ES6_classes/node_modules/jest-circus/build/runner.js in the testRunner option was not found.
```

**Solution**: Use the simple test runner instead of Jest:
```bash
npm test  # This runs the simple test runner
```

### Issue: ES6 Import Syntax Error in Jest
```
SyntaxError: Cannot use import statement outside a module
```

**Solutions**:
1. **Recommended**: Use simple test runner (`npm test`)
2. **Alternative**: Use CommonJS test file (`0-classroom-commonjs.test.js`)
3. **Advanced**: Configure Babel transformation properly

### Issue: Missing Dependencies
**Solution**: The simple test runner has no dependencies beyond Node.js

## 📊 Test Coverage

### ClassRoom Tests
- ✅ Basic instantiation with maxStudentsSize
- ✅ Different size values (20, 5, 0, 100)
- ✅ Property storage verification

### HolbertonCourse Tests  
- ✅ Valid constructor parameters
- ✅ Type validation (string name, number length, array students)
- ✅ TypeError throwing for invalid inputs
- ✅ Getter/setter functionality
- ✅ Private property storage (`_name`, `_length`, `_students`)

## 🎯 Automated Testing Integration

For CI/CD or automated checkers:

```bash
# Primary test command (most reliable)
npm test

# Exit codes:
# 0 = All tests passed
# 1 = Some tests failed
```

## 📝 Configuration Files

### Jest Configuration (`jest.config.cjs`)
```javascript
module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  extensionsToTreatAsEsm: ['.js'],
  // ... additional config
};
```

### Babel Configuration (`babel.config.cjs`)
```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: { node: 'current' }
    }]
  ]
};
```

## ✅ Verification Checklist

Before submitting:
- [ ] `npm test` passes (4/4 tests)
- [ ] `node 0-main.js` outputs `10`
- [ ] `node 1-main.js` shows array of ClassRoom instances
- [ ] `node 2-main.js` shows HolbertonCourse functionality with errors
- [ ] `npx eslint *.js` shows no errors (warnings OK)

## 🚀 Quick Start

1. **Run primary test**: `npm test`
2. **Check main functionality**: `node 0-main.js && node 1-main.js && node 2-main.js`
3. **Lint code**: `npx eslint *.js`

If all three steps pass, your code is ready for submission!

---

**Note**: This testing setup is designed to work in both local development environments and constrained testing environments like automated checkers or containers with limited dependencies.
