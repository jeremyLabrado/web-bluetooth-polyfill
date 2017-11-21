module.exports = {
    "extends": ["eslint:recommended"],
    "parserOptions": { "ecmaVersion": 2017 },
    "env": { "es6": true },
    "globals": {
        "chrome": false,
        "console": false,
        "STANDARD_GATT_SERVICES": true,
        "STANDARD_GATT_CHARACTERISTICS": true,
    },
    "rules": {
        "indent": ["error", 4],
        'array-bracket-spacing': [2, 'never'],
        'block-spacing': [2, 'never'],
        'brace-style': 2,
        'camelcase': [2, { properties: 'never' }],
        'comma-dangle': [2, 'always-multiline'],
        'comma-spacing': 2,
        'comma-style': 2,
        'computed-property-spacing': 2,
        'consistent-this': 2,
        'eol-last': 2,
        'func-call-spacing': 2,
        'key-spacing': 2,
        'keyword-spacing': 2,
        'max-depth': [2, 6],
        'max-len': [2, {
            'code': 120,
            'ignoreUrls': true,
            'ignoreTemplateLiterals': true,
        }],
        'max-nested-callbacks': [2, 4],
        'max-params': [2, 10],
        'new-cap': 2,
        'no-array-constructor': 2,
        'no-multiple-empty-lines': [2, { max: 2 }],
        'no-new-object': 2,
        'no-tabs': 2,
        'no-trailing-spaces': 2,
        'object-curly-spacing': [2, 'always'],
        'one-var': [2, {
            var: 'never',
            let: 'never',
            const: 'never',
        }],
        'padded-blocks': [2, 'never'],
        'quote-props': [2, 'consistent'],
        'quotes': [2, 'single', { allowTemplateLiterals: true }],
        'semi': 2,
        'semi-spacing': 2,
        'space-before-blocks': 2,
        'space-before-function-paren': [2, {
            asyncArrow: 'always',
            anonymous: 'always',
            named: 'never',
        }],
        'spaced-comment': [2, 'always'],
        'switch-colon-spacing': 2,
    }
};