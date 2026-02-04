module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:react/recommended', 'prettier'],
  ignorePatterns: ['dist'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
  rules: { 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], 'prettier/prettier': 'error', 'react/react-in-jsx-scope': 'off' },
};
