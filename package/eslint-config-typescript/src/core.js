/* eslint-disable import/no-commonjs */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

const {
  rules: coreJavaScriptConfigRules,
} = require('@yellfage/eslint-config/src/core')

const {
  rules: importJavaScriptConfigRules,
} = require('@yellfage/eslint-config/src/import')

module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
    '@typescript-eslint/adjacent-overload-signatures': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
        readonly: 'array',
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
    '@typescript-eslint/await-thenable': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': true,
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        'minimumDescriptionLength': 0,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
    '@typescript-eslint/ban-tslint-comment': ['off'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {},
        extendDefaults: true,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
    '@typescript-eslint/consistent-type-definitions': ['off', 'interface'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', disallowTypeAnnotations: true },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    // Overridden for only .ts, .tsx files
    '@typescript-eslint/explicit-function-return-type': ['off'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
    // Overridden for only .ts, .tsx files
    '@typescript-eslint/explicit-member-accessibility': ['off'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
    // Overridden for only .ts, .tsx files
    '@typescript-eslint/explicit-module-boundary-types': ['off'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        overrides: {},
        multilineDetection: 'brackets',
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: {
          memberTypes: [
            // Index signature
            'signature',

            // Fields
            'public-static-field',
            'protected-static-field',
            'private-static-field',

            'public-decorated-field',
            'protected-decorated-field',
            'private-decorated-field',

            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',

            'public-abstract-field',
            'protected-abstract-field',
            'private-abstract-field',

            'public-field',
            'protected-field',
            'private-field',

            'static-field',
            'instance-field',
            'abstract-field',

            'decorated-field',

            'field',

            // Constructors
            'public-constructor',
            'protected-constructor',
            'private-constructor',

            'constructor',

            // Methods
            'public-static-method',
            'protected-static-method',
            'private-static-method',

            'public-decorated-method',
            'protected-decorated-method',
            'private-decorated-method',

            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',

            'public-abstract-method',
            'protected-abstract-method',
            'private-abstract-method',

            'public-method',
            'protected-method',
            'private-method',

            'static-method',
            'instance-method',
            'abstract-method',

            'decorated-method',

            'method',
          ],
        },
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
    '@typescript-eslint/method-signature-style': ['off', 'method'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    'camelcase': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['default'],
        format: ['camelCase'],
      },
      {
        selector: ['variable'],
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: ['typeProperty'],
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: ['variable'],
        format: ['PascalCase'],
        types: ['boolean'],
        prefix: ['is', 'was', 'should', 'has', 'can', 'did', 'will'],
      },
      {
        selector: ['typeLike', 'enumMember'],
        format: ['PascalCase'],
      },
      {
        selector: ['interface'],
        format: null,
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      { selector: ['typeParameter'], format: null, prefix: ['T'] },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
    '@typescript-eslint/no-base-to-string': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
    '@typescript-eslint/no-confusing-non-null-assertion': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: false,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
    '@typescript-eslint/no-dynamic-delete': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
    '@typescript-eslint/no-empty-interface': [
      'warn',
      { allowSingleExtends: true },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        fixToUnknown: false,
        ignoreRestArgs: false,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
    '@typescript-eslint/no-extraneous-class': [
      'error',
      {
        allowConstructorOnly: false,
        allowEmpty: false,
        allowStaticOnly: false,
        allowWithDecorator: false,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        ignoreVoid: false,
        ignoreIIFE: true,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
    '@typescript-eslint/no-for-in-array': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
    '@typescript-eslint/no-implicit-any-catch': [
      'error',
      { allowExplicitAny: false },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: false,
        ignoreProperties: false,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
    '@typescript-eslint/no-invalid-void-type': [
      'error',
      {
        allowInGenericTypeArguments: true,
        allowAsThisParameter: false,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
    '@typescript-eslint/no-misused-new': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksConditionals: true, checksVoidReturn: false },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
    '@typescript-eslint/no-namespace': [
      'error',
      { allowDeclarations: false, allowDefinitionFiles: false },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
    '@typescript-eslint/no-non-null-assertion': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
    '@typescript-eslint/no-parameter-properties': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md
    // Prevent double check
    'import/no-commonjs': [
      importJavaScriptConfigRules['import/no-commonjs'][0],
      {
        ...importJavaScriptConfigRules['import/no-commonjs'][1],
        allowRequire: true,
        allowConditionalRequire: true,
      },
    ],
    '@typescript-eslint/no-require-imports': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
    '@typescript-eslint/no-this-alias': [
      'error',
      { allowDestructuring: false },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
    '@typescript-eslint/no-type-alias': [
      'error',
      {
        allowAliases: 'always',
        allowCallbacks: 'always',
        allowConditionalTypes: 'always',
        allowConstructors: 'always',
        allowLiterals: 'always',
        allowMappedTypes: 'always',
        allowTupleTypes: 'always',
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
      'error',
      {
        allowComparingNullableBooleansToTrue: true,
        allowComparingNullableBooleansToFalse: true,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
    '@typescript-eslint/no-unnecessary-condition': [
      'error',
      {
        // Restricted by https://eslint.org/docs/rules/no-constant-condition
        allowConstantLoopConditions: true,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
    '@typescript-eslint/no-unnecessary-qualifier': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
    '@typescript-eslint/no-unnecessary-type-arguments': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
    '@typescript-eslint/no-unnecessary-type-assertion': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md
    '@typescript-eslint/no-unnecessary-type-constraint': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-argument.md
    '@typescript-eslint/no-unsafe-argument': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
    '@typescript-eslint/no-unsafe-assignment': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
    '@typescript-eslint/no-unsafe-call': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
    '@typescript-eslint/no-unsafe-member-access': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
    '@typescript-eslint/no-unsafe-return': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
    // Forbidden by https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
    '@typescript-eslint/no-var-requires': ['off'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md
    // Forbidden by https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
    '@typescript-eslint/non-nullable-type-assertion-style': ['off'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
    '@typescript-eslint/prefer-as-const': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
    '@typescript-eslint/prefer-enum-initializers': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
    '@typescript-eslint/prefer-for-of': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
    '@typescript-eslint/prefer-function-type': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
    '@typescript-eslint/prefer-includes': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
    '@typescript-eslint/prefer-literal-enum-member': [
      'error',
      { allowBitwiseExpressions: false },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
    '@typescript-eslint/prefer-namespace-keyword': ['off'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
    '@typescript-eslint/prefer-optional-chain': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
    '@typescript-eslint/prefer-readonly': [
      'error',
      { onlyInlineLambdas: false },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
    // Restricted by https://eslint.org/docs/rules/no-param-reassign
    '@typescript-eslint/prefer-readonly-parameter-types': ['off'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
    '@typescript-eslint/prefer-reduce-type-parameter': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
    '@typescript-eslint/prefer-regexp-exec': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-return-this-type.md
    '@typescript-eslint/prefer-return-this-type': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
    '@typescript-eslint/prefer-string-starts-ends-with': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
    '@typescript-eslint/prefer-ts-expect-error': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
    '@typescript-eslint/promise-function-async': [
      'off',
      {
        allowAny: true,
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
        allowedPromiseNames: [],
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      { ignoreStringArrays: false },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      { checkCompoundAssignments: true },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
        allowBoolean: true,
        allowAny: false,
        allowNullish: false,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md
    '@typescript-eslint/sort-type-union-intersection-members': [
      'off',
      {
        checkIntersections: true,
        checkUnions: true,
        groupOrder: [
          'named',
          'object',
          'tuple',
          'keyword',
          'operator',
          'literal',
          'function',
          'import',
          'conditional',
          'intersection',
          'union',
          'nullish',
        ],
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: true,
        allowNumber: true,
        allowNullableObject: true,
        allowNullableBoolean: true,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
    '@typescript-eslint/switch-exhaustiveness-check': ['error'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
    '@typescript-eslint/triple-slash-reference': [
      'error',
      { path: 'never', types: 'never', lib: 'never' },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      { before: false, after: true },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
    '@typescript-eslint/typedef': ['off'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
    '@typescript-eslint/unified-signatures': ['error'],

    /**
     * Extension Rules
     */

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    'brace-style': 'off',
    '@typescript-eslint/brace-style': coreJavaScriptConfigRules['brace-style'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle':
      coreJavaScriptConfigRules['comma-dangle'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing':
      coreJavaScriptConfigRules['comma-spacing'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last':
      coreJavaScriptConfigRules['default-param-last'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': [
      coreJavaScriptConfigRules['dot-notation'][0],
      {
        ...coreJavaScriptConfigRules['dot-notation'][1],
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
        allowIndexSignaturePropertyAccess: false,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing':
      coreJavaScriptConfigRules['func-call-spacing'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    'indent': 'off',
    '@typescript-eslint/indent': coreJavaScriptConfigRules.indent,

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations':
      coreJavaScriptConfigRules['init-declarations'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing':
      coreJavaScriptConfigRules['keyword-spacing'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      coreJavaScriptConfigRules['lines-between-class-members'][0],
      coreJavaScriptConfigRules['lines-between-class-members'][1],
      {
        ...coreJavaScriptConfigRules['lines-between-class-members'][2],
        exceptAfterOverload: true,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor':
      coreJavaScriptConfigRules['no-array-constructor'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members':
      coreJavaScriptConfigRules['no-dupe-class-members'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    '@typescript-eslint/no-duplicate-imports': ['off'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      coreJavaScriptConfigRules['no-empty-function'][0],
      {
        ...coreJavaScriptConfigRules['no-empty-function'][1],
        allow: [
          ...coreJavaScriptConfigRules['no-empty-function'][1].allow,
          'private-constructors',
          'protected-constructors',
          'decoratedFunctions',
        ],
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens':
      coreJavaScriptConfigRules['no-extra-parens'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi':
      coreJavaScriptConfigRules['no-extra-semi'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
    'no-implied-eval': 'off',
    // Already covered by the rule
    'no-new-func': 'off',
    '@typescript-eslint/no-implied-eval':
      coreJavaScriptConfigRules['no-implied-eval'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this':
      coreJavaScriptConfigRules['no-invalid-this'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func':
      coreJavaScriptConfigRules['no-loop-func'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision':
      coreJavaScriptConfigRules['no-loss-of-precision'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': [
      coreJavaScriptConfigRules['no-magic-numbers'][0],
      {
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': [
      coreJavaScriptConfigRules['no-redeclare'][0],
      {
        ...coreJavaScriptConfigRules['no-redeclare'][1],
        ignoreDeclarationMerge: true,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [
      coreJavaScriptConfigRules['no-shadow'][0],
      {
        ...coreJavaScriptConfigRules['no-shadow'][1],
        ignoreTypeValueShadow: false,
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal':
      coreJavaScriptConfigRules['no-throw-literal'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions':
      coreJavaScriptConfigRules['no-unused-expressions'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars':
      coreJavaScriptConfigRules['no-unused-vars'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      coreJavaScriptConfigRules['no-use-before-define'][0],
      {
        ...coreJavaScriptConfigRules['no-use-before-define'][1],
        enums: true,
        typedefs: false,
        ignoreTypeReferences: false,
      },
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor':
      coreJavaScriptConfigRules['no-useless-constructor'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/object-curly-spacing.md
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing':
      coreJavaScriptConfigRules['object-curly-spacing'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    'quotes': 'off',
    '@typescript-eslint/quotes': coreJavaScriptConfigRules.quotes,

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
    'require-await': 'off',
    '@typescript-eslint/require-await':
      coreJavaScriptConfigRules['require-await'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
    'no-return-await': 'off',
    '@typescript-eslint/return-await': [
      coreJavaScriptConfigRules['no-return-await'][0],
      'in-try-catch',
    ],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    'semi': 'off',
    '@typescript-eslint/semi': coreJavaScriptConfigRules.semi,

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren':
      coreJavaScriptConfigRules['space-before-function-paren'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops':
      coreJavaScriptConfigRules['space-infix-ops'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // ts(2335) & ts(2377)
        'constructor-super': 'off',

        // ts(2378)
        'getter-return': 'off',

        // ts(2588)
        'no-const-assign': 'off',

        // ts(2300)
        'no-dupe-args': 'off',

        // ts(2393) & ts(2300)
        'no-dupe-class-members': 'off',

        // ts(1117)
        'no-dupe-keys': 'off',

        // ts(2539)
        'no-func-assign': 'off',

        // ts(2539) & ts(2540)
        'no-import-assign': 'off',

        // ts(2588)
        'no-new-symbol': 'off',

        // ts(2349)
        'no-obj-calls': 'off',

        // ts(2451)
        'no-redeclare': 'off',

        // ts(2408)
        'no-setter-return': 'off',

        // ts(2376)
        'no-this-before-super': 'off',

        // ts(2304)
        'no-undef': 'off',

        // ts(7027)
        'no-unreachable': 'off',

        // ts(2365) & ts(2360) & ts(2358)
        'no-unsafe-negation': 'off',

        // ts(2367)
        'valid-typeof': 'off',

        // ts(2322)
        'consistent-return': 'off',

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
            allowDirectConstAssertionInArrowFunctions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: false,
          },
        ],

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          { accessibility: 'explicit' },
        ],

        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
        '@typescript-eslint/explicit-module-boundary-types': [
          'error',
          {
            allowArgumentsExplicitlyTypedAsAny: false,
            allowDirectConstAssertionInArrowFunctions: true,
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
      },
    },
  ],
}
