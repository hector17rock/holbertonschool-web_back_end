module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
  ],
  rules: {
    'no-console': 'off',
    'no-var': 'error',
    'prefer-const': ['error', {
      destructuring: 'all',
    }],
    'eol-last': ['error', 'always'],
  },
};

