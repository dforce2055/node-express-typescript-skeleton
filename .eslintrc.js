module.exports = {
  root: true,

  env: {
    node: true,
  },

  "parser": "@typescript-eslint/parser",
  "extends": [
    "prettier"
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "node": true
  },
  "rules": {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'quotes': ['warn', 'single', {
      'allowTemplateLiterals': true
    }],
    curly: ['error', 'multi'],
    indent: ['warn', 2],
    'array-callback-return': ['off', {
      allowImplicit: true
    }],
    'no-return-assign': ['off'],
    'no-unused-expressions': ['off', {
      allowShortCircuit: true,
      allowTernary: true
    }],
    'no-sequences': ['off'],
    'import/no-named-as-default': ['off'],
    semi: 'off',
    '@typescript-eslint/semi': 'off'
  }
}