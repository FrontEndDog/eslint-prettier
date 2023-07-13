const { defineConfig } = require('eslint-define-config')
const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')
console.log('[eslint-config-fed]:是否使用typescript', TS)

const tailwind = isPackageExists('tailwindcss')
console.log('[eslint-config-fed]:是否使用tailwindcss', tailwind)

module.exports = defineConfig({
  env: {
    es6: true,
    browser: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },

  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },

  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'out',
    'coverage',
    'public',
    'temp',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    // ignore for in lint-staged
    '*.css',
    '*.png',
    '*.ico',
    '*.toml',
    '*.patch',
    '*.txt',
    '*.crt',
    '*.key',
    'Dockerfile',
    // force include
    '!.github',
    '!.vitepress',
    '!.vscode',
    // force exclude
    '.vitepress/cache',
  ],

  plugins: ['promise', 'html', 'unicorn', 'unused-imports', ...(TS ? ['@typescript-eslint'] : []), 'prettier'],

  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    ...(TS ? ['plugin:import/typescript'] : []),
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:markdown/recommended',
    'plugin:vue/vue3-recommended',
    ...(TS ? ['plugin:@typescript-eslint/recommended'] : []),
    'prettier',
  ],

  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      parser: '@typescript-eslint/parser',
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
      },
    },
    {
      files: ['*.js', '*.cjs', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'publisher',
              'name',
              'displayName',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'author',
              'license',
              'funding',
              'homepage',
              'repository',
              'bugs',
              'keywords',
              'categories',
              'sideEffects',
              'exports',
              'main',
              'module',
              'unpkg',
              'jsdelivr',
              'types',
              'typesVersions',
              'bin',
              'icon',
              'files',
              'engines',
              'activationEvents',
              'contributes',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'pnpm',
              'overrides',
              'resolutions',
              'husky',
              'simple-git-hooks',
              'lint-staged',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^exports.*$',
            order: ['types', 'require', 'import'],
          },
        ],
      },
    },
  ],

  rules: {
    'vue/multi-word-component-names': 'off', //取消vue组件必须命名为多个单词
    'import/no-unresolved': 'off', //允许使用export * from "./test"
    'vue/no-v-html': 'off', //允许使用v-html
  },
})
