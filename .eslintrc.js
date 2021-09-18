module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    camelcase: 0,
    semi: 0,
    indent: 0,
    'space-before-function-paren': 0,
    'space-before-blocks': 0,
    quotes: 0,
    'object-curly-spacing': 0,
    eqeqeq: 0,
    'eol-last': 0,
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'spaced-comment': 0,
    'no-empty': 0
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
