export default {
  testEnvironment: 'node',
  transform: {
    '^.+\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js'],
  testMatch: ['**/*.test.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(.*\.mjs$))',
  ],
};
