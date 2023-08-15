const { isPackageExists } = require('local-pkg')
const tailwind = isPackageExists('tailwindcss')

module.exports = {
  printWidth: 120,
  singleQuote: true,
  semi: false,
  endOfLine: 'auto',
  plugins: tailwind ? ['prettier-plugin-tailwindcss'] : [],
}
