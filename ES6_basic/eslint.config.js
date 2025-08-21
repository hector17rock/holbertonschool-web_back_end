export default [
  {
    files: ['**/*.js'],
    ignores: ['**/node_modules/**', '**/*.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly'
      }
    },
    rules: {
      // ES6+ rules
      'no-var': 'error',
      'prefer-const': 'error',
      
      // Code style rules
      'indent': ['error', 2],
      'semi': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      
      // Variable and function rules
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-redeclare': 'error',
      
      // Best practices
      'no-console': 'off',
      'no-debugger': 'error',
      'curly': 'error',
      'eqeqeq': 'error',
      'no-eval': 'error'
    }
  }
];
