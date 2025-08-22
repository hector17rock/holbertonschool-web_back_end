/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: false,
  testTimeout: 30000,
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  // Remove explicit runner to let Jest auto-detect
  setupFilesAfterEnv: [],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testPathIgnorePatterns: ['/node_modules/'],
  watchPathIgnorePatterns: ['/node_modules/'],
  // Additional options for better environment compatibility
  detectOpenHandles: true,
  forceExit: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
};
