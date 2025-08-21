module.exports = {
  testEnvironment: 'node',
  preset: null,
  transform: {},
  testMatch: ['**/*.test.js'],
  moduleFileExtensions: ['js'],
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/*.config.js'
  ]
};
