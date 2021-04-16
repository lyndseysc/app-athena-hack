const tsconfigPath = require('./utils/tsconfig-path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-base',
    'airbnb/hooks',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'unicorn'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {},
    },
  },
  rules: {
    // react
    'react/boolean-prop-naming': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-handler-names': 2,
    'react/jsx-no-useless-fragment': 2,
    // No longer needed with the new JSX transform.
    'react/react-in-jsx-scope': 0,
    // filename
    'unicorn/filename-case': [
      2,
      {
        case: 'kebabCase',
      },
    ],
    // imports
    'import/no-extraneous-dependencies': [2, {}],
    'import/prefer-default-export': 0,
    'import/order': [
      1,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/jsx-filename-extension': 0,
        'react/jsx-props-no-spreading': 0,
        'react/prop-types': 0,
        'react/require-default-props': 0,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:import/typescript'],
      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            mjs: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          node: {},
          ts: {
            directory: tsconfigPath,
          },
        },
      },
    },

    {
      files: ['*.ts', '*.tsx'],
      plugins: ['eslint-plugin-tsdoc'],
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: tsconfigPath,
      },
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 0,
        // We need to use the TS version of this rule.
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': 2,
        // Enables TSDoc linting.
        'tsdoc/syntax': 1,
      },
    },
  ],
};
