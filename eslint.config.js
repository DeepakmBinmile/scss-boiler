import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import goodPractices from "./bnbLintRules/goodPractices.js";
import errorsRules from "./bnbLintRules/errors.js";
import es6Rules from "./bnbLintRules/es6.js";
import nodeRules from "./bnbLintRules/node.js";
import strictRules from "./bnbLintRules/strict.js";
import variableRules from "./bnbLintRules/variables.js";
// import importRules from "./bnbLintRules/imports.js";


export default [
  {
    ignores: ['eslint.config.js', '.eslintrc.cjs'],
  },
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      'no-tabs': 'off',
      'linebreak-style': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
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
      'quotes': ['error', 'single'],
      'max-lines': ['warn', { 'max': 100 }],
      'semi': ['warn', 'always'],
      'no-trailing-spaces': 'error',
      'import/order': [
        'error',
        {
          'groups': [['builtin', 'external', 'internal', 'parent', 'sibling', 'index']],
          'newlines-between': 'never', // Prevent extra spaces between import groups
          'alphabetize': { order: 'asc', caseInsensitive: true },
        },
      ],
      "react/jsx-tag-spacing": [
      "error",
      {
        "beforeSelfClosing": "never",
        "closingSlash": "never",
        "afterOpening": "never",
        "beforeClosing": "never"
      }
    ],
    "react/jsx-curly-spacing": ["error", { "when": "never", "children": true }],
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
      // 'react/jsx-newline': 'error',
      // airbnb best-practices
      ...goodPractices,
      ...errorsRules,
      ...es6Rules,
      ...errorsRules,
      ...nodeRules,
      ...strictRules,
      // ...styleRules,
      ...variableRules,
      // resolve this 
      // ...importRules,
    },
  },
  {settings: {
    react: {
      pragma: 'React',
      version: '18.2.0',
    },
  },}
];
