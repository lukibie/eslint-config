module.exports = {
  extends: '@lukaszbieniek/eslint-config/lib/base',
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-useless-constructor': 'off',
        'no-unused-vars': 'off',
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
