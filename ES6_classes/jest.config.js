export default {
  testEnvironment: 'node',
  transform: {
    '^.+\.js$': ['babel-jest', {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
    }]
  },
  moduleFileExtensions: ['js'],
  testMatch: ['**/*.test.js']
};
