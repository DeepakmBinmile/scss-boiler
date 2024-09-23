const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-tabs': 'off',
    'linebreak-style': 'off',
    'react/react-in-jsx-scope': 'off',
    quotes: 'off',
    semi: 'off',
    camelcase: 'off',
    'no-invalid-this': 'off',
    'object-curly-spacing': 'off',
    'no-unused-expressions': 'off',
    'no-non-null-assertion': 'off',
    'valid-typeof': 'off',
    'default-param-last': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/no-unescaped-entities': 'off',
    'import/no-duplicates': 'off',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] },
    },
  ],
  settings: {
    react: {
      pragma: 'React',
      version: '18.2.0',
    },
  },
};
