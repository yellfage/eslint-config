/* eslint-disable import/no-commonjs */

module.exports = {
  plugins: ['import'],
  settings: {
    // https://github.com/import-js/eslint-plugin-import#resolvers
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.jsx', '.json'],
      },
    },

    // https://github.com/import-js/eslint-plugin-import#importextensions
    'import/extensions': ['.js', '.mjs', '.jsx'],

    // https://github.com/import-js/eslint-plugin-import#importignore
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },
  rules: {
    /**
     * Static analysis
     */

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
    'import/no-unresolved': [
      'error',
      { commonjs: false, amd: false, caseSensitive: true /* ignore: [] */ },
    ],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
    'import/named': ['error'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
    'import/default': ['error'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
    'import/namespace': ['error', { allowComputed: false }],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md
    'import/no-restricted-paths': ['off', { zones: [] }],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
    'import/no-absolute-path': [
      'error',
      { esmodule: true, commonjs: true, amd: false },
    ],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': ['error'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md
    'import/no-internal-modules': ['off', { allow: [] }],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': ['error'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
    'import/no-self-import': ['error'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
    'import/no-cycle': ['error', { maxDepth: Infinity, ignoreExternal: false }],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': [
      'error',
      { noUselessIndex: true, commonjs: false },
    ],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md
    'import/no-relative-parent-imports': ['off'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
    'import/no-relative-packages': ['error'],

    /**
     * Helpful warnings
     */

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
    'import/export': ['error'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
    'import/no-named-as-default': ['error'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': ['error'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
    'import/no-deprecated': ['warn'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: true,
        bundledDependencies: true,
      },
    ],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': ['error'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
    'import/no-unused-modules': [
      'off',
      { missingExports: false, unusedExports: true },
    ],

    /**
     * Module systems
     */

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md
    'import/unambiguous': ['off'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md
    'import/no-commonjs': [
      'error',
      {
        allowRequire: false,
        allowConditionalRequire: false,
        allowPrimitiveModules: false,
      },
    ],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md
    'import/no-amd': ['error'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': ['off', { allow: [] }],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
    'import/no-import-module-exports': ['error', { exceptions: [] }],

    /**
     * Style guide
     */

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
    'import/first': ['error'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
    'import/exports-last': ['error'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
    'import/no-duplicates': ['error', { considerQueryString: false }],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md
    'import/no-namespace': ['error', { ignore: [] }],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
      },
    ],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
    'import/order': [
      'error',
      {
        'pathGroups': [
          {
            pattern: '#*',
            group: 'internal',
          },
          {
            pattern: '#*/**/*',
            group: 'internal',
          },
          {
            pattern: '~*',
            group: 'internal',
          },
          {
            pattern: '~*/**/*',
            group: 'internal',
          },
        ],
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'unknown',
        ],
        'newlines-between': 'ignore',
        'pathGroupsExcludedImportTypes': [],
        'alphabetize': { order: 'asc', caseInsensitive: true },
        'warnOnUnassignedImports': false,
      },
    ],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
    'import/newline-after-import': ['error', { count: 1 }],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
    'import/prefer-default-export': ['off'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md
    'import/max-dependencies': ['off', { max: 20, ignoreTypeImports: true }],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md
    'import/no-unassigned-import': ['off', { allow: [] }],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
    'import/no-named-default': ['error'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
    'import/no-default-export': ['error'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md
    'import/no-named-export': ['off'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': [
      'off',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md
    'import/group-exports': ['off'],

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md
    'import/dynamic-import-chunkname': ['off'],
  },
}
