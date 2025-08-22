export default [
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',

        // Node.js globals
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',

        // Jest globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',
      },
    },
    rules: {
      // Basic error prevention
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'no-redeclare': 'error',
      'no-unreachable': 'error',

      // Code style rules - Indentation and spacing
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-trailing-spaces': 'error',
      'eol-last': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-before-function-paren': ['error', 'never'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-infix-ops': 'error',
      'space-unary-ops': ['error', { words: true, nonwords: false }],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
      'padded-blocks': ['error', 'never'],
      'space-before-blocks': 'error',
      'brace-style': ['error', '1tbs'],
      'comma-spacing': ['error', { before: false, after: true }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],

      // Best practices
      'no-console': 'off',
      'prefer-const': 'error',
      'no-var': 'error',
      camelcase: 'error',
      'new-cap': 'error',
      'no-underscore-dangle': 'off',
      'no-mixed-spaces-and-tabs': 'error',
      'no-irregular-whitespace': 'error',

      // ES6+ specific
      'arrow-spacing': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'template-curly-spacing': ['error', 'never'],
      'rest-spread-spacing': ['error', 'never'],

      // Class-specific rules (relevant for ES6 classes)
      'no-dupe-class-members': 'error',
      'no-useless-constructor': 'error',

      // Function and method formatting
      'space-in-parens': ['error', 'never'],
      'func-call-spacing': ['error', 'never'],
      'no-spaced-func': 'error',
    },
  },
];
