// Minimal Jest configuration for maximum compatibility
module.exports = {
  testEnvironment: 'node',
  preset: undefined,
  testRunner: undefined,
  transform: {
    '^.+\\.js$': require.resolve('babel-jest')
  },
  moduleFileExtensions: ['js'],
  testMatch: ['**/*.test.js'],
  verbose: false,
  silent: false
};
