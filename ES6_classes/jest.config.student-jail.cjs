module.exports = {
  testEnvironment: 'node',
  // Absolutely no transforms to avoid any module issues
  transform: {},
  // No custom transformIgnorePatterns
  transformIgnorePatterns: [],
  // Extended timeout for slower environments
  testTimeout: 20000,
  // Minimal output to avoid issues
  verbose: false,
  // No coverage collection
  collectCoverage: false,
  // Single worker to avoid process issues
  maxWorkers: 1,
  // Force exit to prevent hanging
  forceExit: true,
  // Don't detect open handles (can cause issues in restricted envs)
  detectOpenHandles: false,
  // Only ignore node_modules
  testPathIgnorePatterns: ['/node_modules/'],
  // No module path ignoring
  modulePathIgnorePatterns: [],
  // No setup files
  setupFilesAfterEnv: [],
  // Minimal cache
  cache: false,
  // No watch mode
  watchman: false,
};
