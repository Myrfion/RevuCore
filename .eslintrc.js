// .eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows parsing of modern ECMAScript features
    sourceType: 'module', // Allows use of imports
    ecmaFeatures: {
      jsx: true, // Allows parsing of JSX
    },
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'next', // Uses the recommended rules from next/eslint-plugin-next
    'next/core-web-vitals', // Includes Core Web Vitals rules
    'eslint:recommended', // Uses the recommended rules from eslint
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:react/recommended', // Uses the recommended rules from eslint-plugin-react
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays Prettier errors as ESLint errors
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use Prettier rules from .prettierrc
    'react/react-in-jsx-scope': 'off', // Not needed with Next.js
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
};
