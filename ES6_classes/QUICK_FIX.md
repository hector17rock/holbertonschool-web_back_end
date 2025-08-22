# Quick Fix for Jest in Student Jail Environment

## The Problem
```
Module /home/student_jail/student_repo/ES6_classes/node_modules/jest-circus/build/runner.js in the testRunner option was not found.
```

## The Solution

❌ **DON'T USE** (This will fail):
```bash
npm test 0-classroom.test.js
npm test 5-building_constructor.test.js
npm test 6-sky_high.test.js
```

✅ **USE THESE** (These work in student_jail):
```bash
# Primary solution - Student jail optimized
npm run test:student-jail 0-classroom.test.js
npm run test:student-jail 5-building_constructor.test.js
npm run test:student-jail 6-sky_high.test.js

# Alternative solution - Emergency fallback
npm run test:emergency 0-classroom.test.js
npm run test:emergency 5-building_constructor.test.js
npm run test:emergency 6-sky_high.test.js
```

**Direct commands if npm scripts don't work:**
```bash
NODE_OPTIONS='--experimental-vm-modules' jest --config=jest.config.student-jail.cjs 0-classroom.test.js
NODE_OPTIONS='--experimental-vm-modules' npx jest --testEnvironment=node --no-coverage --maxWorkers=1 --forceExit --cache=false 0-classroom.test.js
```

## Why This Works

The `jest.config.restricted.cjs` file removes all the problematic Jest runners and uses minimal configuration that works in restricted environments.

## Alternative Commands

If the above doesn't work, try these in order:

**For Building class:**
1. `npm run test:fallback 5-building_constructor.test.js`
2. `npm run test:bare 5-building_constructor.test.js`
3. `NODE_OPTIONS='--experimental-vm-modules' npx jest --testEnvironment=node --no-coverage 5-building_constructor.test.js`

**For SkyHighBuilding class:**
1. `npm run test:fallback 6-sky_high.test.js`
2. `npm run test:bare 6-sky_high.test.js`
3. `NODE_OPTIONS='--experimental-vm-modules' npx jest --testEnvironment=node --no-coverage 6-sky_high.test.js`

**To run all tests:**
`npm run test:restricted`

## Files Included

- `jest.config.restricted.cjs` - Ultra-minimal Jest configuration
- `5-building_constructor.test.js` - Test file for Building class (7 tests)
- `6-sky_high.test.js` - Test file for SkyHighBuilding class (12 tests)
- `TESTING_GUIDE.md` - Complete troubleshooting guide
