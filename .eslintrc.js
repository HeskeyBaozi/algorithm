module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  rules: {
    // your rules
    'no-console': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/consistent-type-definitions': 'off',
  },
};
