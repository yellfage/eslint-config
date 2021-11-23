/* eslint-disable import/no-commonjs */

module.exports = {
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    /**
     * Main
     */

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': ['off', {}],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    'react/button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: false,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
    'react/default-props-match-prop-types': [
      'error',
      { allowRequiredDefaults: false },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': [
      'error',
      'always',
      { ignoreClassFields: false },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': ['off', { ignoreTranspilerName: false }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    'react/forbid-component-props': ['off', { forbid: [] }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
    'react/forbid-dom-props': ['off', { forbid: [] }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
    'react/forbid-elements': ['off', { forbid: [] }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    'react/forbid-foreign-prop-types': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any', 'array', 'object'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
    'react/no-adjacent-inline-elements': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    'react/no-children-prop': ['error', { allowFunctions: false }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    'react/no-did-mount-set-state': ['error', 'disallow-in-func'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': ['error', 'disallow-in-func'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    'react/no-find-dom-node': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    'react/no-is-mounted': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': ['error', { ignoreStateless: false }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/no-render-return-value': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
    'react/no-set-state': ['off'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-string-refs': ['error', { noTemplateLiterals: true }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    'react/no-typos': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': ['error', { forbid: [] }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': ['error', { ignore: [] }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
    'react/no-unsafe': ['error', { checkAliases: true }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
    'react/no-unstable-nested-components': ['error', { allowAsProps: false }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': [
      'error',
      { ignore: [], customValidators: [], skipShapeProps: true },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
    'react/no-unused-state': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    'react/no-will-update-set-state': ['error', 'disallow-in-func'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    'react/prefer-es6-class': ['error', 'always'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
    'react/prefer-exact-props': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
    'react/prefer-read-only-props': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': [
      'error',
      { ignorePureComponents: false },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': [
      'error',
      { ignore: [], customValidators: [], skipUndeclared: false },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': ['off'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': [
      'error',
      { forbidDefaultForRequired: true, ignoreFunctionalComponents: false },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
    'react/require-optimization': ['off', { allowDecorators: [] }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    'react/require-render-return': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'instance-variables',
          'getters',
          'setters',
          'constructor',
          'static-methods',
          'lifecycle-methods-group',
          'instance-methods',
          'everything-else',
          '/^handle.+$/',
          '/^on.+$/',
          'rendering-group',
        ],
        groups: {
          'lifecycle-methods-group': [
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
          'rendering-group': ['/^render.+$/', 'render'],
        },
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
    'react/sort-prop-types': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        requiredFirst: true,
        sortShapeProp: true,
        noSortAlphabetically: true,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
    'react/state-in-constructor': ['error', 'never'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
    'react/static-property-placement': [
      'error',
      'static public field',
      {
        childContextTypes: 'static public field',
        contextTypes: 'static public field',
        contextType: 'static public field',
        defaultProps: 'static public field',
        displayName: 'static public field',
        propTypes: 'static public field',
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': ['error', { allow: [] }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    'react/void-dom-elements-no-children': ['error'],

    /**
     * JSX-specific
     */

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-boolean-value': ['error', 'always'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
    'react/jsx-child-element-spacing': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-closing-bracket-location': [
      'error',
      {
        nonEmpty: 'line-aligned',
        selfClosing: 'line-aligned',
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
    'react/jsx-closing-tag-location': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent',
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never',
        attributes: { when: 'never' },
        children: { when: 'never' },
        objectLiterals: { when: 'never' },
        allowMultiline: true,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    'react/jsx-equals-spacing': ['error', 'never'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    'react/jsx-fragments': ['error', 'syntax'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-handler-names': [
      'off',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': [
      'error',
      2,
      { checkAttributes: true, indentLogicalExpressions: true },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': [
      'error',
      { indentMode: 2, ignoreTernaryOperator: true },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': [
      'error',
      { checkFragmentShorthand: false, checkKeyMustBeforeSpread: true },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
    'react/jsx-max-depth': ['off', { max: 0 }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'always' }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
    'react/jsx-newline': ['error', { prevent: false }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': [
      'error',
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowFunctions: false,
        allowBind: false,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
    'react/jsx-no-constructed-context-values': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    'react/jsx-no-literals': [
      'off',
      {
        noStrings: false,
        allowedStrings: [],
        ignoreProps: true,
        noAttributeStrings: false,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
    'react/jsx-no-script-url': ['error', []],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': [
      'error',
      {
        allowReferrer: false,
        enforceDynamicLinks: 'always',
        warnOnSpreadAttributes: true,
        links: true,
        forms: true,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': [
      'error',
      {
        allowGlobals: true,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: false }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-one-expression-per-line': ['off', { allow: 'literal' }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: false,
        allowNamespace: false,
        allowLeadingUnderscore: false,
        ignore: [],
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
    'react/jsx-props-no-multi-spaces': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'enforce',
        exceptions: [],
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
    'react/jsx-sort-default-props': ['off', { ignoreCase: true }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: true,
        noSortAlphabetically: true,
        reservedFirst: ['ref', 'key', 'children'],
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
    // Deprecated in favor of https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
    'react/jsx-space-before-closing': ['off'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': ['off'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': ['error'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
  },
}
