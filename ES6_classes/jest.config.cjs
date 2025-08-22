/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  
  // Use babel-jest for transforms to handle ES modules
  transform: {
    '^.+\.(js|jsx)$': 'babel-jest'
  },
  
  // Ensure we can find test files
  testMatch: ['**/*.(test|spec).js'],
  
  // Ignore node_modules transforms
  transformIgnorePatterns: ['/node_modules/']
};
