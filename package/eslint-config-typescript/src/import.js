/* eslint-disable import/no-commonjs */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

const {
  settings: importJavaScriptConfigSettings,
  rules: importJavaScriptConfigRules,
} = require('@yellfage/eslint-config/src/import')

const extensions = ['.ts', '.tsx']

module.exports = {
  settings: {
    // https://github.com/import-js/eslint-plugin-import#importparsers
    'import/parsers': {
      '@typescript-eslint/parser': extensions,
    },

    // https://github.com/import-js/eslint-plugin-import#resolvers
    'import/resolver': {
      node: {
        extensions: [
          ...importJavaScriptConfigSettings['import/resolver'].node.extensions,
          ...extensions,
        ],
      },
    },

    // https://github.com/import-js/eslint-plugin-import#importextensions
    'import/extensions': [
      ...importJavaScriptConfigSettings['import/extensions'],
      ...extensions,
    ],

    // https://github.com/import-js/eslint-plugin-import#importexternal-module-folders
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
  rules: {
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
    'import/no-unresolved': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
    'import/named': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    'import/extensions': [
      importJavaScriptConfigRules['import/extensions'][0],
      importJavaScriptConfigRules['import/extensions'][1],
      {
        ...importJavaScriptConfigRules['import/extensions'][2],
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
}
