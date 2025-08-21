export default {
  testEnvironment: 'node',
  transform: {
    '^.+\.js$': ['babel-jest', { configFile: './babel.config.cjs' }],
  },
  moduleFileExtensions: ['js'],
  testMatch: ['**/*.test.js'],
};
