# Jest Testing - Quick Reference

## 🚀 Recommended Commands

### For Unknown/Problematic Environments
```bash
npm run test:smart your-test-file.js
```
**Tries all approaches automatically until one works**

### For Restricted Environments (student_jail, etc.)
```bash
npm run test:bare your-test-file.js
```
**Direct command-line approach, bypasses all config files**

### For Maximum Compatibility (Nuclear Option)
```bash
node run-jest-direct.js your-test-file.js
```
**Direct Jest invocation script, bypasses ALL configuration**

### For Development
```bash
npm test your-test-file.js
```
**Standard approach with package.json configuration**

## 🔧 All Available Commands

| Command | Description | Best For |
|---------|-------------|----------|
| `npm test` | Default package.json config | Normal development |
| `npm run test:minimal` | External minimal config | Config conflicts |
| `npm run test:bare` | Direct command-line | Restricted environments |
| `npm run test:force` | With cache clearing | Cache issues |
| `npm run test:smart` | Automatic fallback | Unknown environments |
| `npm run test:auto` | Basic fallback | Simple fallback needs |

## 🏥 Troubleshooting

### Error: "Module jest-circus/build/runner.js not found"
**Try in order:**
1. `npm run test:bare your-test.js`
2. `npm run test:force your-test.js`
3. `npm run test:smart your-test.js`

### Error: "Multiple configurations found"
**Remove conflicting files or use:**
```bash
npm run test:bare your-test.js
```

### Error: Test timeouts or hanging
**Use force option:**
```bash
npm run test:force your-test.js
```

## ⚡ Quick Fix
**If nothing else works:**
```bash
NODE_OPTIONS='--experimental-vm-modules' npx jest --testEnvironment=node your-test-file.js
```
