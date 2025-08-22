module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transformIgnorePatterns: [],
  testTimeout: 10000,
  verbose: true,
  collectCoverage: false,
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: [],
  // Ensure compatibility
  maxWorkers: 1,
  forceExit: true,
  detectOpenHandles: false,
};
