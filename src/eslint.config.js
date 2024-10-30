import globals from 'globals'
import eslint from '@eslint/js'
import unusedImports from 'eslint-plugin-unused-imports'
import jsdoc from 'eslint-plugin-jsdoc'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import pluginPromise from 'eslint-plugin-promise'
import tseslint from 'typescript-eslint'
import * as regexpPlugin from 'eslint-plugin-regexp'
import pluginVue from 'eslint-plugin-vue'
import eslintPluginJsonc from 'eslint-plugin-jsonc'
import eslintPluginYml from 'eslint-plugin-yml'
import markdown from 'eslint-plugin-markdown'
import html from 'eslint-plugin-html'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: { ...globals.browser, ...globals.es2024, ...globals.node },
    },
  },
  // eslint基础规则
  eslint.configs.recommended,

  // unused-imports
  { plugins: { 'unused-imports': unusedImports } },

  // jsdoc
  jsdoc.configs['flat/recommended'],

  // unicorn
  eslintPluginUnicorn.configs['flat/recommended'],

  // promise
  pluginPromise.configs['flat/recommended'],

  // typescript
  ...tseslint.configs.recommended,

  //regexp
  regexpPlugin.configs['flat/recommended'],

  // vue
  ...pluginVue.configs['flat/recommended'],

  // json
  ...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],

  // yml
  ...eslintPluginYml.configs['flat/recommended'],

  // markdown
  ...markdown.configs.recommended,

  // html
  { files: ['**/*.html'], plugins: { html } },

  // prettier
  eslintPluginPrettierRecommended,

  // package.json
  {
    files: ['**/package.json'],
    rules: {
      'jsonc/sort-array-values': [
        'error',
        {
          order: { type: 'asc' },
          pathPattern: '^files$',
        },
      ],
      'jsonc/sort-keys': [
        'error',
        {
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
            'contributors',
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
          pathPattern: '^$',
        },
        {
          order: { type: 'asc' },
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$',
        },
        {
          order: { type: 'asc' },
          pathPattern: '^(?:resolutions|overrides|pnpm.overrides)$',
        },
        {
          order: ['types', 'import', 'require', 'default'],
          pathPattern: '^exports.*$',
        },
        {
          order: [
            // client hooks only
            'pre-commit',
            'prepare-commit-msg',
            'commit-msg',
            'post-commit',
            'pre-rebase',
            'post-rewrite',
            'post-checkout',
            'post-merge',
            'pre-push',
            'pre-auto-gc',
          ],
          pathPattern: '^(?:gitHooks|husky|simple-git-hooks)$',
        },
      ],
    },
  },

  // tsconfig.json
  {
    files: ['**/tsconfig.json', '**/tsconfig.*.json'],
    name: 'antfu/sort/tsconfig-json',
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          order: ['extends', 'compilerOptions', 'references', 'files', 'include', 'exclude'],
          pathPattern: '^$',
        },
        {
          order: [
            /* Projects */
            'incremental',
            'composite',
            'tsBuildInfoFile',
            'disableSourceOfProjectReferenceRedirect',
            'disableSolutionSearching',
            'disableReferencedProjectLoad',
            /* Language and Environment */
            'target',
            'jsx',
            'jsxFactory',
            'jsxFragmentFactory',
            'jsxImportSource',
            'lib',
            'moduleDetection',
            'noLib',
            'reactNamespace',
            'useDefineForClassFields',
            'emitDecoratorMetadata',
            'experimentalDecorators',
            /* Modules */
            'baseUrl',
            'rootDir',
            'rootDirs',
            'customConditions',
            'module',
            'moduleResolution',
            'moduleSuffixes',
            'noResolve',
            'paths',
            'resolveJsonModule',
            'resolvePackageJsonExports',
            'resolvePackageJsonImports',
            'typeRoots',
            'types',
            'allowArbitraryExtensions',
            'allowImportingTsExtensions',
            'allowUmdGlobalAccess',
            /* JavaScript Support */
            'allowJs',
            'checkJs',
            'maxNodeModuleJsDepth',
            /* Type Checking */
            'strict',
            'strictBindCallApply',
            'strictFunctionTypes',
            'strictNullChecks',
            'strictPropertyInitialization',
            'allowUnreachableCode',
            'allowUnusedLabels',
            'alwaysStrict',
            'exactOptionalPropertyTypes',
            'noFallthroughCasesInSwitch',
            'noImplicitAny',
            'noImplicitOverride',
            'noImplicitReturns',
            'noImplicitThis',
            'noPropertyAccessFromIndexSignature',
            'noUncheckedIndexedAccess',
            'noUnusedLocals',
            'noUnusedParameters',
            'useUnknownInCatchVariables',
            /* Emit */
            'declaration',
            'declarationDir',
            'declarationMap',
            'downlevelIteration',
            'emitBOM',
            'emitDeclarationOnly',
            'importHelpers',
            'importsNotUsedAsValues',
            'inlineSourceMap',
            'inlineSources',
            'mapRoot',
            'newLine',
            'noEmit',
            'noEmitHelpers',
            'noEmitOnError',
            'outDir',
            'outFile',
            'preserveConstEnums',
            'preserveValueImports',
            'removeComments',
            'sourceMap',
            'sourceRoot',
            'stripInternal',
            /* Interop Constraints */
            'allowSyntheticDefaultImports',
            'esModuleInterop',
            'forceConsistentCasingInFileNames',
            'isolatedDeclarations',
            'isolatedModules',
            'preserveSymlinks',
            'verbatimModuleSyntax',
            /* Completeness */
            'skipDefaultLibCheck',
            'skipLibCheck',
          ],
          pathPattern: '^compilerOptions$',
        },
      ],
    },
  },

  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  },

  // ignores
  {
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/package-lock.json',
      '**/yarn.lock',
      '**/pnpm-lock.yaml',
      '**/bun.lockb',

      '**/output',
      '**/coverage',
      '**/temp',
      '**/.temp',
      '**/tmp',
      '**/.tmp',
      '**/.history',
      '**/.vitepress/cache',
      '**/.nuxt',
      '**/.next',
      '**/.svelte-kit',
      '**/.vercel',
      '**/.changeset',
      '**/.idea',
      '**/.cache',
      '**/.output',
      '**/.vite-inspect',
      '**/.yarn',
      '**/vite.config.*.timestamp-*',

      '**/CHANGELOG*.md',
      '**/*.min.*',
      '**/LICENSE*',
      '**/__snapshots__',
      '**/auto-import?(s).d.ts',
      '**/components.d.ts',
    ],
  },
)
