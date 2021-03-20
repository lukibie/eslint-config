module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-useless-constructor': 2,
        '@typescript-eslint/no-unused-vars': 2,
        'no-useless-constructor': 0,
        'no-unused-vars': 0,
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
    },
  ],
}
