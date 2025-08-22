# Student Jail Environment - Jest Commands Cheat Sheet

## ❌ **DON'T USE** (These will fail):
```bash
npm test 5-building_constructor.test.js
npm test 6-sky_high.test.js
```

## ✅ **USE THESE** (These work):

### **Primary Commands** (Recommended):
```bash
# Test Building class
npm run test:restricted 5-building_constructor.test.js

# Test SkyHighBuilding class  
npm run test:restricted 6-sky_high.test.js

# Run all tests
npm run test:restricted
```

### **Fallback Commands** (If primary fails):
```bash
# Building class fallbacks
npm run test:fallback 5-building_constructor.test.js
npm run test:bare 5-building_constructor.test.js

# SkyHighBuilding class fallbacks
npm run test:fallback 6-sky_high.test.js
npm run test:bare 6-sky_high.test.js

# All tests fallback
npm run test:ultimate
```

### **Direct Commands** (Manual approach):
```bash
# Building class
NODE_OPTIONS='--experimental-vm-modules' npx jest --config=jest.config.restricted.cjs 5-building_constructor.test.js

# SkyHighBuilding class
NODE_OPTIONS='--experimental-vm-modules' npx jest --config=jest.config.restricted.cjs 6-sky_high.test.js

# All tests
NODE_OPTIONS='--experimental-vm-modules' npx jest --config=jest.config.restricted.cjs
```

### **Ultra-Minimal Commands** (Last resort):
```bash
# If config file approach fails
NODE_OPTIONS='--experimental-vm-modules' npx jest --testEnvironment=node --no-coverage 5-building_constructor.test.js
NODE_OPTIONS='--experimental-vm-modules' npx jest --testEnvironment=node --no-coverage 6-sky_high.test.js
```

## **Current Test Status**:
- ✅ ClassRoom tests: 12 tests passing
- ✅ Building tests: 7 tests passing  
- ✅ SkyHighBuilding tests: 12 tests passing
- ✅ **Total: 31 tests passing**

## **Why the Standard Commands Fail**:
The student_jail environment doesn't have the `jest-circus` runner installed, but our restricted configuration bypasses this limitation by using minimal Jest settings.

## **Quick Reference**:
- **Single file**: `npm run test:restricted FILENAME.test.js`
- **All files**: `npm run test:restricted`
- **If that fails**: `npm run test:ultimate`
