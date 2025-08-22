# Jest Configuration Guide

## Available Test Configurations

This project includes multiple Jest configurations to ensure compatibility across different environments:

### 1. Default Configuration (`jest.config.cjs`)
**Used by:** `npm test`
- Comprehensive configuration with verbose output
- Auto-detects test runner for maximum compatibility 
- Includes environment-specific optimizations

### 2. Minimal Configuration (`jest.config.minimal.cjs`)
**Used by:** `npm run test:minimal`
- Bare minimum configuration for problematic environments
- Fallback option when default config fails
- Most likely to work in restrictive environments

## Troubleshooting

### "Module jest-circus/build/runner.js not found"

This error occurs in environments where Jest cannot find its test runner modules. Solutions:

1. **Use the minimal configuration:**
   ```bash
   npm run test:minimal your-test-file.js
   ```

2. **Install missing Jest packages:**
   ```bash
   npm install --save-dev jest-circus jest-runner
   ```

3. **Clear Jest cache:**
   ```bash
   npx jest --clearCache
   ```

### Multiple Configuration Files Error

If you see "Multiple configurations found", remove or rename conflicting files:
- Remove `jest` section from `package.json`
- Or use explicit config: `jest --config=jest.config.cjs`

## Environment-Specific Issues

### Student Jail / Restricted Environments
- Use `npm run test:minimal` for maximum compatibility
- The minimal config avoids complex runner specifications
- Works with basic Jest installations

### Development Environment
- Use `npm test` for full-featured testing
- Includes verbose output and debugging features

## Configuration Details

### Default Config Features:
- Node.js test environment
- Verbose output for debugging
- 30-second test timeout
- Auto-detection of test files
- Environment compatibility optimizations

### Minimal Config Features:
- Only specifies Node.js environment
- Lets Jest handle all other defaults
- Maximum compatibility with different Jest versions
