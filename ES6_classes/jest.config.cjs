module.exports = {
  testEnvironment: 'node',
  preset: null,
  transform: {
    '^.+\.js$': 'babel-jest'
  },
  testMatch: ['**/*.test.js'],
  moduleFileExtensions: ['js'],
  extensionsToTreatAsEsm: ['.js'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  },
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/*.config.*',
    '!**/*-main.js',
    '!**/test-runner.js'
  ]
};
