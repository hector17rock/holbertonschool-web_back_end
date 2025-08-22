# Quick Fix for Jest in Student Jail Environment

## The Problem
```
Module /home/student_jail/student_repo/ES6_classes/node_modules/jest-circus/build/runner.js in the testRunner option was not found.
```

## The Solution

Instead of:
```bash
npm test 5-building_constructor.test.js
```

Use this command:
```bash
npm run test:restricted 5-building_constructor.test.js
```

Or this direct command:
```bash
NODE_OPTIONS='--experimental-vm-modules' npx jest --config=jest.config.restricted.cjs 5-building_constructor.test.js
```

## Why This Works

The `jest.config.restricted.cjs` file removes all the problematic Jest runners and uses minimal configuration that works in restricted environments.

## Alternative Commands

If the above doesn't work, try these in order:

1. `npm run test:fallback 5-building_constructor.test.js`
2. `npm run test:bare 5-building_constructor.test.js`
3. `NODE_OPTIONS='--experimental-vm-modules' npx jest --testEnvironment=node --no-coverage 5-building_constructor.test.js`

## Files Included

- `jest.config.restricted.cjs` - Ultra-minimal Jest configuration
- `5-building_constructor.test.js` - The actual test file
- `TESTING_GUIDE.md` - Complete troubleshooting guide
