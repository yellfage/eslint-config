/* eslint-disable import/no-commonjs */

module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es2020: true,
  },
  rules: {
    /**
     * Possible Errors
     *
     * These rules relate to possible syntax or logic errors in JavaScript code
     */

    // https://eslint.org/docs/rules/for-direction
    'for-direction': ['error'],

    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['error', { allowImplicit: false }],

    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': ['error'],

    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': ['error'],

    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': ['error'],

    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': ['error', 'always'],

    // https://eslint.org/docs/rules/no-console
    'no-console': ['warn', { allow: ['warn', 'error'] }],

    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': ['error', { checkLoops: true }],

    // https://eslint.org/docs/rules/no-control-regex
    'no-control-regex': ['error'],

    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': ['error'],

    // https://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': ['error'],

    // https://eslint.org/docs/rules/no-dupe-else-if
    'no-dupe-else-if': ['error'],

    // https://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': ['error'],

    // https://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': ['error'],

    // https://eslint.org/docs/rules/no-empty
    'no-empty': ['error', { allowEmptyCatch: false }],

    // https://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': ['error'],

    // https://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': ['error'],

    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],

    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': [
      'error',
      'all',
      {
        conditionalAssign: true,
        returnAssign: false,
        nestedBinaryExpressions: false,
        // delegated to eslint-plugin-react
        ignoreJSX: 'all',
        enforceForArrowConditionals: false,
        enforceForSequenceExpressions: true,
        enforceForNewInMemberExpressions: true,
        enforceForFunctionPrototypeMethods: true,
      },
    ],

    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': ['error'],

    // https://eslint.org/docs/rules/no-func-assign
    'no-func-assign': ['error'],

    // https://eslint.org/docs/rules/no-import-assign
    'no-import-assign': ['error'],

    // https://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': ['error', 'both'],

    // https://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': ['error', { allowConstructorFlags: [] }],

    // https://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],

    // https://eslint.org/docs/rules/no-loss-of-precision
    'no-loss-of-precision': ['error'],

    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': ['error'],

    // https://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': ['error'],

    // https://eslint.org/docs/rules/no-promise-executor-return
    'no-promise-executor-return': ['error'],

    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': ['error'],

    // https://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': ['error'],

    // https://eslint.org/docs/rules/no-setter-return
    'no-setter-return': ['error'],

    // https://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': ['error'],

    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': ['error'],

    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': ['error'],

    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': ['error'],

    // https://eslint.org/docs/rules/no-unreachable-loop
    'no-unreachable-loop': ['error', { ignore: [] }],

    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': ['error'],

    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],

    // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': [
      'error',
      { disallowArithmeticOperators: true },
    ],

    // https://eslint.org/docs/rules/no-useless-backreference
    'no-useless-backreference': ['error'],

    // https://eslint.org/docs/rules/require-atomic-updates
    'require-atomic-updates': ['error'],

    // https://eslint.org/docs/rules/use-isnan
    'use-isnan': [
      'error',
      {
        enforceForSwitchCase: false,
        enforceForIndexOf: false,
      },
    ],

    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': ['error', { requireStringLiterals: true }],

    /**
     * Best Practices
     *
     * These rules relate to better ways of doing things
     * to help you avoid problems
     */

    // https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: false,
        enforceForClassMembers: false,
      },
    ],

    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': [
      'error',
      {
        allowImplicit: false,
        checkForEach: false,
      },
    ],

    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': ['error'],

    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': ['off', { exceptMethods: [] }],

    // https://eslint.org/docs/rules/complexity
    'complexity': ['off', { max: 10 }],

    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],

    // https://eslint.org/docs/rules/curly
    'curly': ['error', 'all'],

    // https://eslint.org/docs/rules/default-case
    'default-case': ['error', { commentPattern: '' }],

    // https://eslint.org/docs/rules/default-case-last
    'default-case-last': ['error'],

    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': ['error'],

    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': [
      'error',
      {
        allowKeywords: true,
        allowPattern: '^[a-z]+(_[a-z]+)+$',
      },
    ],

    // https://eslint.org/docs/rules/eqeqeq
    'eqeqeq': ['error', 'always', { null: 'ignore' }],

    // https://eslint.org/docs/rules/grouped-accessor-pairs
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],

    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': ['error'],

    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': ['error', 1],

    // https://eslint.org/docs/rules/no-alert
    'no-alert': ['error'],

    // https://eslint.org/docs/rules/no-caller
    'no-caller': ['error'],

    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': ['error'],

    // https://eslint.org/docs/rules/no-constructor-return
    'no-constructor-return': ['error'],

    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': ['error'],

    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['error', { allowElseIf: false }],

    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': ['error', { allow: ['arrowFunctions'] }],

    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': ['error'],

    // https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': ['off'],

    // https://eslint.org/docs/rules/no-eval
    'no-eval': ['error', { allowIndirect: false }],

    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': ['error', { exceptions: [] }],

    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': ['error'],

    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': ['error'],

    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': ['error', { commentPattern: '' }],

    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': ['error'],

    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['error', { exceptions: [] }],

    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': [
      'error',
      {
        boolean: false,
        number: true,
        string: true,
        disallowTemplateShorthand: false,
        allow: [],
      },
    ],

    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': ['off', { lexicalBindings: false }],

    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': ['error'],

    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': ['error', { capIsConstructor: true }],

    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': ['error'],

    // https://eslint.org/docs/rules/no-labels
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],

    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': ['error'],

    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': ['error'],

    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],

    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
        exceptions: {},
      },
    ],

    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': ['error'],

    // https://eslint.org/docs/rules/no-new
    'no-new': ['error'],

    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': ['error'],

    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': ['error'],

    // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
    'no-nonoctal-decimal-escape': ['error'],

    // https://eslint.org/docs/rules/no-octal
    'no-octal': ['error'],

    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': ['error'],

    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': [
      'error',
      {
        props: false,
        // ignorePropertyModificationsFor: [],
        // ignorePropertyModificationsForRegex: [],
      },
    ],

    // https://eslint.org/docs/rules/no-proto
    'no-proto': ['error'],

    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': ['error', { builtinGlobals: true }],

    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],

    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ['error', 'always'],

    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': ['error'],

    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': ['error'],

    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': ['error', { props: true }],

    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': ['error'],

    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': ['error', { allowInParentheses: false }],

    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': ['error'],

    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': ['off'],

    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
        enforceForJSX: true,
      },
    ],

    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': ['error'],

    // https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': ['error'],

    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': ['error'],

    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': ['error'],

    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': ['error'],

    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': ['error'],

    // https://eslint.org/docs/rules/no-void
    'no-void': ['error', { allowAsStatement: false }],

    // https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': [
      'warn',
      {
        terms: ['todo', 'fixme'],
        location: 'start',
      },
    ],

    // https://eslint.org/docs/rules/no-with
    'no-with': ['error'],

    // https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': ['off'],

    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: false }],

    // https://eslint.org/docs/rules/prefer-regex-literals
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

    // https://eslint.org/docs/rules/radix
    'radix': ['error', 'always'],

    // https://eslint.org/docs/rules/require-await
    'require-await': ['error'],

    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': ['off'],

    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': ['error'],

    // https://eslint.org/docs/rules/wrap-iife
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],

    // https://eslint.org/docs/rules/yoda
    'yoda': [
      'error',
      'never',
      {
        exceptRange: false,
        onlyEquality: false,
      },
    ],

    /**
     * Strict Mode
     *
     * These rules relate to strict mode directives
     */

    // https://eslint.org/docs/rules/strict
    'strict': ['error', 'never'],

    /**
     * Variables
     *
     * These rules relate to variable declarations
     */

    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': [
      'error',
      'always',
      /* { ignoreForLoopInit: false } */
    ],

    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': ['error'],

    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': ['error'],

    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': ['error'].concat(
      require('confusing-browser-globals'),
    ),

    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': [
      'error',
      {
        builtinGlobals: false,
        hoist: 'functions',
        allow: [],
      },
    ],

    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': ['error'],

    // https://eslint.org/docs/rules/no-undef
    'no-undef': ['error', { typeof: true }],

    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': ['error'],

    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': ['error'],

    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '',
        args: 'all',
        argsIgnorePattern: '',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '',
        ignoreRestSiblings: false,
      },
    ],

    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
      },
    ],

    /**
     * Stylistic Issues
     *
     * These rules relate to style guidelines,
     * and are therefore quite subjective
     */

    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': ['error', { multiline: true }],

    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': [
      'error',
      'never',
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],

    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': ['off', 'consistent'],

    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // https://eslint.org/docs/rules/brace-style
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],

    // https://eslint.org/docs/rules/camelcase
    'camelcase': [
      'error',
      {
        properties: 'always',
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false,
        allow: [],
      },
    ],

    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': [
      'off',
      {
        ignorePattern: '',
        ignoreInlineComments: false,
        ignoreConsecutiveComments: false,
      },
    ],

    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', 'always-multiline'],

    // https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // https://eslint.org/docs/rules/comma-style
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],

    // https://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': [
      'error',
      'never',
      { enforceForClassMembers: true },
    ],

    // https://eslint.org/docs/rules/consistent-this
    'consistent-this': ['off'],

    // https://eslint.org/docs/rules/eol-last
    'eol-last': ['error', 'always'],

    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': [
      'error',
      'always',
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: true,
      },
    ],

    // https://eslint.org/docs/rules/func-names
    'func-names': ['error', 'as-needed', { generators: 'as-needed' }],

    // https://eslint.org/docs/rules/func-style
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

    // https://eslint.org/docs/rules/function-call-argument-newline
    'function-call-argument-newline': ['error', 'consistent'],

    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': ['error', 'consistent'],

    // https://eslint.org/docs/rules/id-denylist
    'id-denylist': ['off'],

    // https://eslint.org/docs/rules/id-length
    'id-length': [
      'error',
      {
        min: 1,
        max: Infinity,
        properties: 'always',
        exceptions: [],
        exceptionPatterns: [],
      },
    ],

    // https://eslint.org/docs/rules/id-match
    'id-match': [
      'off',
      '',
      { properties: true, onlyDeclarations: true, ignoreDestructuring: false },
    ],

    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['error', 'beside'],

    // https://eslint.org/docs/rules/indent
    'indent': [
      'error',
      2,
      {
        ignoredNodes: [],
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: false,
        ignoreComments: false,
      },
    ],

    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['off', 'prefer-double'],

    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],

    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {},
      },
    ],

    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': [
      'error',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultIgnorePatterns: false,
      },
    ],

    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],

    // https://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: false,
        afterBlockComment: false,
        beforeLineComment: false,
        afterLineComment: false,
        allowBlockStart: false,
        allowBlockEnd: false,
        allowClassStart: false,
        allowClassEnd: false,
        allowObjectStart: false,
        allowObjectEnd: false,
        allowArrayStart: false,
        allowArrayEnd: false,
        applyDefaultIgnorePatterns: false,
        ignorePattern: '',
      },
    ],

    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false },
    ],

    // https://eslint.org/docs/rules/max-depth
    'max-depth': ['error', { max: 4 }],

    // https://eslint.org/docs/rules/max-len
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignorePattern: '',
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],

    // https://eslint.org/docs/rules/max-lines
    'max-lines': [
      'off',
      { max: 300, skipBlankLines: true, skipComments: true },
    ],

    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': [
      'off',
      {
        max: 30,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: false,
      },
    ],

    // https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': ['error', { max: 3 }],

    // https://eslint.org/docs/rules/max-params
    'max-params': ['off', { max: 5 }],

    // https://eslint.org/docs/rules/max-statements
    // Restricted by max-lines-per-function
    'max-statements': ['off', { max: 7, ignoreTopLevelFunctions: false }],

    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': ['error', { max: 1 }],

    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': ['off', 'starred-block'],

    // https://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': ['off', 'never'],

    // https://eslint.org/docs/rules/new-cap
    'new-cap': [
      'error',
      {
        newIsCap: false,
        capIsNew: true,
        newIsCapExceptions: [],
        newIsCapExceptionPattern: '',
        capIsNewExceptions: [],
        capIsNewExceptionPattern: '',
        properties: false,
      },
    ],

    // https://eslint.org/docs/rules/new-parens
    'new-parens': ['error', 'always'],

    // https://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': ['error'],

    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': [
      'error',
      {
        int32Hint: false,
        allow: [],
      },
    ],

    // https://eslint.org/docs/rules/no-continue
    'no-continue': ['off'],

    // https://eslint.org/docs/rules/no-inline-comments
    // Restrics by line-comment-position
    'no-inline-comments': ['off', { ignorePattern: '' }],

    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': ['error'],

    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],

    // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': ['error'],

    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': ['error', { ignoreNonDeclaration: false }],

    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],

    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': ['off'],

    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': ['error'],

    // https://eslint.org/docs/rules/no-new-object
    'no-new-object': ['error'],

    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': ['off'],

    // https://eslint.org/docs/rules/no-tabs
    'no-tabs': ['error', { allowIndentationTabs: false }],

    // https://eslint.org/docs/rules/no-ternary
    'no-ternary': ['off'],

    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],

    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': [
      'error',
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        allowAfterThisConstructor: false,
        enforceInMethodNames: true,
        allowFunctionParams: false,
      },
    ],

    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': ['error'],

    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          multiline: true,
          consistent: true,
        },
      },
    ],

    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],

    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],

    // https://eslint.org/docs/rules/one-var
    'one-var': ['error', 'never'],

    // https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['error', 'always'],

    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],

    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['error', 'after', { overrides: { '=': 'none' } }],

    // https://eslint.org/docs/rules/padded-blocks
    'padded-blocks': ['error', 'never', { allowSingleLineBlocks: false }],

    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['*'],
        next: ['import', 'block-like'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'throw', 'continue'],
      },
      {
        blankLine: 'always',
        prev: ['import', 'block-like', 'case', 'default'],
        next: '*',
      },
    ],

    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': ['error'],

    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': ['error'],

    // https://eslint.org/docs/rules/quote-props
    'quote-props': [
      'error',
      'consistent-as-needed',
      { keywords: false, unnecessary: true, numbers: true },
    ],

    // https://eslint.org/docs/rules/quotes
    'quotes': [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],

    // https://eslint.org/docs/rules/semi
    'semi': ['error', 'never'],

    // https://eslint.org/docs/rules/semi-spacing
    'semi-spacing': ['error', { before: false, after: true }],

    // https://eslint.org/docs/rules/semi-style
    'semi-style': ['error', 'last'],

    // https://eslint.org/docs/rules/sort-keys
    'sort-keys': [
      'off',
      'asc',
      { caseSensitive: false, minKeys: 2, natural: false },
    ],

    // https://eslint.org/docs/rules/sort-vars
    'sort-vars': ['off', { ignoreCase: true }],

    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': ['error', 'always'],

    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // https://eslint.org/docs/rules/space-in-parens
    'space-in-parens': ['error', 'never', { exceptions: [] }],

    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': ['error', { int32Hint: false }],

    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': [
      'error',
      { words: true, nonwords: false, overrides: {} },
    ],

    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'],
          balanced: true,
        },
      },
    ],

    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': ['error', 'never'],

    // https://eslint.org/docs/rules/wrap-regex
    'wrap-regex': ['off'],

    /**
     * ECMAScript 6
     *
     * These rules relate to ES6, also known as ES2015
     */

    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always', { requireForBlockBody: true }],

    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ['error', { before: true, after: true }],

    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': ['error'],

    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': ['error', { before: false, after: true }],

    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': ['error'],

    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],

    // https://eslint.org/docs/rules/no-const-assign
    'no-const-assign': ['error'],

    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': ['error'],

    // https://eslint.org/docs/rules/no-duplicate-imports
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'no-duplicate-imports': ['off', { includeExports: false }],

    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': ['error'],

    // https://eslint.org/docs/rules/no-restricted-exports
    'no-restricted-exports': ['off', { restrictedNamedExports: [] }],

    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': ['off'],

    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': ['error'],

    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': ['error', { enforceForClassMembers: true }],

    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': ['error'],

    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': [
      'error',
      {
        ignoreImport: false,
        ignoreExport: false,
        ignoreDestructuring: false,
      },
    ],

    // https://eslint.org/docs/rules/no-var
    'no-var': ['error'],

    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
        ignoreConstructors: false,
        avoidExplicitReturnArrows: true,
      },
    ],

    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],

    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],

    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: true,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      { enforceForRenamedProperties: false },
    ],

    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': ['error'],

    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': ['error'],

    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': ['error'],

    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': ['error'],

    // https://eslint.org/docs/rules/require-yield
    'require-yield': ['error'],

    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/sort-imports
    // Replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'sort-imports': ['off'],

    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': ['error'],

    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': ['error', 'after'],
  },
}
