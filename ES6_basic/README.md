# ES6 Basic

This project is designed to be run on Ubuntu 20.04 LTS with Node.js 20.x.x and npm 9.x.x.

Requirements
- All files end with a new line
- All code uses the .js extension
- All functions are exported
- Testing: Jest
- Linting: ESLint (project-specific rules)

Setup
1. Install dependencies
   npm install

2. Run linter
   npm run lint

3. Run tests
   npm test

4. Run the example
   npm run dev

Notes
- Babel is configured via babel.config.js with @babel/preset-env targeting current Node.
- ESLint config is in .eslintrc.js using eslint:recommended; project rules may update this.
