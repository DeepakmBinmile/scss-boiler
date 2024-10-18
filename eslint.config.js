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
import importRules from "./bnbLintRules/imports.js";


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
