/* eslint-disable import/no-commonjs */

const {
  rules: coreReactConfigRules,
} = require('@yellfage/eslint-config-react/src/core')

module.exports = {
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    'react/jsx-no-useless-fragment': [
      coreReactConfigRules['react/jsx-no-useless-fragment'][0],
      {
        ...coreReactConfigRules['react/jsx-no-useless-fragment'][1],
        allowExpressions: true,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [
      coreReactConfigRules['react/jsx-filename-extension'][0],
      {
        ...coreReactConfigRules['react/jsx-filename-extension'][1],
        extensions: [
          ...coreReactConfigRules['react/jsx-filename-extension'][1].extensions,
          '.tsx',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        'react/prop-types': 'off',
      },
    },
  ],
}
