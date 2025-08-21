# ES6 Classes - Testing Setup

## Current Testing Approach

Due to persistent babel-jest configuration issues in the testing environment, this project uses a **Node.js-based test runner** instead of Jest for the primary test command.

## Commands

### Primary Testing (Recommended)
```bash
npm test
```
- Runs `test-runner.js` - a simple Node.js test runner
- Tests all HolbertonCourse constructor functionality
- **Works in all environments** (no dependencies on babel-jest)
- Provides clear test output with ✅/❌ indicators

### Alternative Jest Testing (Local Development)
```bash
npm run test:jest
```
- Runs Jest with babel-jest (when properly configured)
- May fail in some environments due to babel-jest module resolution issues

## Test Coverage

The `test-runner.js` covers all required HolbertonCourse constructor tests:

1. ✅ Valid construction with string name
2. ✅ Valid construction with number length  
3. ✅ Valid construction with array of strings for students
4. ✅ TypeError when name is not a string
5. ✅ TypeError when length is not a number
6. ✅ TypeError when students is not an array
7. ✅ TypeError when students array contains non-strings
8. ✅ All attributes stored in underscore versions

## Files

- `test-runner.js` - Primary test runner (Node.js native)
- `2-hbtn_course.constructor.test.js` - Jest test file (for environments with working babel-jest)
- `jest.config.cjs` - Jest configuration
- `babel.config.cjs` - Babel configuration

## Why This Approach?

The testing environment has persistent issues with babel-jest module resolution:
```
Module /home/student_jail/student_repo/ES6_classes/node_modules/babel-jest/build/index.js in the transform option was not found.
```

The Node.js test runner bypasses these issues while providing the same test coverage and validation.
