import { isPackageExists } from 'local-pkg'
const tailwind = isPackageExists('tailwindcss')

export default {
  printWidth: 120,
  singleQuote: true,
  semi: false,
  endOfLine: 'auto',
  plugins: tailwind ? ['prettier-plugin-tailwindcss'] : [],
}
