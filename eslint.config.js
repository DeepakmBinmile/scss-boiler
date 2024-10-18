import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {
    ignores: ['eslint.config.js', '.eslintrc.cjs'], // Add this line to ignore the ESLint config file
  },
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
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
    },
  },
  {settings: {
    react: {
      pragma: 'React',
      version: '18.2.0',
    },
  },}
];
