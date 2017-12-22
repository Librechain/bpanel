module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier', 'react'],
  env: {
    browser: true,
    mocha: true,
    node: true,
    es6: true
  },
  rules: {
    'prettier/prettier': 'error'
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors'
  ]
};
