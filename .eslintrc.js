module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: '',
  overrides: [
    {
      env: {
        node: true,
        jest: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
  },
};
