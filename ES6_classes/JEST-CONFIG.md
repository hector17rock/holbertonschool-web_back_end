# Jest Configuration Guide

## Available Test Configurations

This project includes multiple Jest configurations and commands to ensure compatibility across different environments:

### 1. Package.json Configuration (Default)
**Used by:** `npm test`
- Ultra-minimal configuration embedded in package.json
- Only specifies Node.js environment
- Maximum compatibility across environments

### 2. Minimal External Configuration
**Used by:** `npm run test:minimal`
- External configuration file for specific cases
- Fallback option when package.json config conflicts

### 3. Bare Command-line Configuration
**Used by:** `npm run test:bare`
- Bypasses all configuration files entirely
- Specifies options directly via command line
- Most reliable for restricted environments

### 4. Force Configuration
**Used by:** `npm run test:force`
- Clears Jest cache and uses command-line options
- Last resort for environments with caching issues

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
**Recommended approaches in order:**
1. `npm run test:bare` - Direct command-line approach
2. `npm run test:force` - With cache clearing
3. `npm run test:smart` - Tries all approaches automatically
4. `npm run test:minimal` - External minimal config

### Development Environment
- Use `npm test` for normal testing
- Use `npm run test:smart` for automatic fallback handling

## Smart Testing Commands

### `npm run test:smart`
Automatically tries multiple approaches in order:
1. Default configuration
2. Minimal external configuration  
3. Bare command-line configuration
4. Force configuration with cache clearing

This is the most reliable command for unknown environments.

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
