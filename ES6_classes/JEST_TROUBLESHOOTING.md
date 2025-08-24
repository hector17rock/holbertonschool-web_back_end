# Jest Configuration Troubleshooting Guide

## Problem: jest-circus/build/runner.js not found

This error occurs when Jest cannot find the test runner module. Here are the solutions:

### Primary Configuration (jest.config.js)
The main configuration is in `jest.config.js` with comprehensive settings.

### Fallback Configurations

If the primary config fails, try these alternatives:

#### 1. Use minimal configuration:
```bash
npx jest --config jest.config.minimal.js
```

#### 2. Use JSON configuration:
```bash
npx jest --config .jestrc.json
```

#### 3. Use inline configuration:
```bash
npx jest --testEnvironment=node --transform='{"^.+\\.js$": "babel-jest"}'
```

#### 4. Use default Jest (no config):
```bash
npx jest --no-config
```

### Installation Commands

If babel-jest is missing:
```bash
npm install --save-dev babel-jest --legacy-peer-deps
```

If Jest is missing:
```bash
npm install --save-dev jest@30.0.5
```

### Package.json Scripts

Current scripts:
- `npm test` - Run all tests
- `npm run dev` - Run with Babel
- `npm run lint` - Run ESLint

### Configuration Files Present

1. `jest.config.js` - Main configuration (comprehensive)
2. `.jestrc.json` - JSON fallback configuration
3. `jest.config.minimal.js` - Minimal configuration for troubleshooting
4. `babel.config.js` - Babel transformation settings

All configurations are designed to work with ES6 modules and Babel transformation.
