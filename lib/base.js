module.exports = {
  extends: [
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'prettier',
    'prettier/standard',
    'prettier/unicorn',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
  },
  plugins: ['import', 'node', 'promise', 'unicorn'],
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  rules: {
    'prettier/prettier': 0,
    'unicorn/prevent-abbreviations': 0,
  },
}
