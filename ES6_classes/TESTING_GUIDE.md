# Jest Testing Guide for Restricted Environments

## Problem
When running tests in restricted environments (like student_jail or Docker containers), Jest may fail with errors like:
```
Module /path/to/jest-circus/build/runner.js in the testRunner option was not found.
```

This happens because Jest tries to use specific runners that aren't available in minimal installations.

## Solutions (In Order of Preference)

### 1. Use Restricted Configuration
```bash
npm run test:restricted
```
This uses `jest.config.restricted.cjs` which removes all custom runners and uses minimal configuration.

### 2. Use Fallback Command
```bash
npm run test:fallback
```
This explicitly disables custom runners via command line flags.

### 3. Use Ultimate Fallback
```bash
npm run test:ultimate
```
This tries multiple approaches in sequence until one works.

### 4. Use Bare Jest
```bash
npm run test:bare
```
This runs Jest with minimal flags and no configuration.

### 5. Manual Jest Command
If all npm scripts fail, try this direct command:
```bash
NODE_OPTIONS='--experimental-vm-modules' npx jest --testEnvironment=node --no-coverage
```

## For Specific Test Files

To run a specific test file (like `5-building_constructor.test.js`):

```bash
# Using restricted config
npm run test:restricted 5-building_constructor.test.js

# Using fallback
npm run test:fallback 5-building_constructor.test.js

# Direct command
NODE_OPTIONS='--experimental-vm-modules' npx jest --testEnvironment=node --no-coverage 5-building_constructor.test.js
```

## Available Test Scripts

- `npm test` - Standard Jest with full configuration
- `npm run test:restricted` - Minimal config for restricted environments
- `npm run test:fallback` - Command-line override approach
- `npm run test:ultimate` - Sequential fallback approach
- `npm run test:bare` - Minimal Jest command
- `npm run test:smart` - Smart fallback (multiple attempts)

## Files Created for Compatibility

1. `jest.config.restricted.cjs` - Ultra-minimal Jest config
2. `jest.config.minimal.cjs` - Basic Jest config (if exists)
3. `5-building_constructor.test.js` - Test file for Building class

## Troubleshooting

If you still get Jest errors:

1. Clear Jest cache: `npx jest --clearCache`
2. Delete node_modules and reinstall: `rm -rf node_modules && npm install`
3. Use Node.js directly to run tests (bypass Jest entirely)
4. Check if all required dependencies are installed

## Environment-Specific Issues

### Student Jail Environment
- Limited package installations
- Minimal Node.js modules
- Restricted file system access
- Use `test:restricted` or `test:fallback`

### Docker Containers
- Similar to student jail
- May have outdated npm/node versions
- Use minimal configurations

### CI/CD Pipelines
- Often have minimal installations
- May need explicit dependency installation
- Test with `test:ultimate` for best compatibility
