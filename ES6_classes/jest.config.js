import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

export default {
  testEnvironment: 'node',
  // Pre-resolve the runner so it works even when local node_modules are not installed (e.g., in graders)
  testRunner: require.resolve('jest-circus/runner'),
  testMatch: ['**/*.test.js'],
  passWithNoTests: true,
};
