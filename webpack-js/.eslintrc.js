module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'max-len': ['error', { code: 125 }],
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'no-underscore-dangle': 'off',
  },
};
