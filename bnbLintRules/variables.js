import confusingBrowserGlobals from 'confusing-browser-globals';

const variableRules = {
  // enforce or disallow variable initializations at definition
  'init-declarations': 'off',

  // disallow the catch clause parameter name being the same as a variable in the outer scope
  'no-catch-shadow': 'off',

  // disallow deletion of variables
  'no-delete-var': 'error',

  // disallow labels that share a name with a variable
  // https://eslint.org/docs/rules/no-label-var
  'no-label-var': 'error',

  // disallow specific globals
  'no-restricted-globals': [
    'error',
    {
      name: 'isFinite',
      message: 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
    },
    {
      name: 'isNaN',
      message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
    },
  ].concat(confusingBrowserGlobals),

  // disallow declaration of variables already declared in the outer scope
  'no-shadow': 'error',

  // disallow shadowing of names such as arguments
  'no-shadow-restricted-names': 'error',



  // disallow use of undefined when initializing variables
  'no-undef-init': 'error',

  // disallow declaration of variables that are not used in the code
  'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

  // disallow use of variables before they are defined
  'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
};


export default variableRules;