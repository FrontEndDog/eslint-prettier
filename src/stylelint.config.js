module.exports = {
  root: true,
  extends: ['stylelint-config-standard-scss', 'stylelint-config-html', 'stylelint-config-recess-order'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind', 'layer', 'apply', 'config'] }], //兼容tailwindcss
  },
}
