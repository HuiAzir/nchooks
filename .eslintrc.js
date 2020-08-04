module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'typescript'
  ],
  rules: {
    'import/extensions': ['error', 'never'],
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
