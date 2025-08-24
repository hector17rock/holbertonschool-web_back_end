module.exports = {
  testEnvironment: 'node',
  
  // Transform configuration
  transform: {
    '^.+\.js$': 'babel-jest',
  },
  
  // Module configuration
  moduleFileExtensions: ['js', 'json'],
  
  // Test configuration
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js'
  ],
  
  // Coverage configuration
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!jest.config.js',
    '!babel.config.js'
  ],
  
  // Ignore patterns
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/'
  ],
  
  // Transform ignore patterns
  transformIgnorePatterns: [
    'node_modules/(?!(.*\.mjs$))'
  ],
  
  // Clear mocks between tests
  clearMocks: true,
  
  // Verbose output
  verbose: true,
  
  // Error handling
  bail: false,
  
  // Timeout
  testTimeout: 10000
};
