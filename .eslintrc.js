module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'flowtype'
  ],
  rules: {
    "semi": ["error", "never"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'import/no-extraneous-dependencies': 0,
    "no-unused-vars": [2, { "vars": "all", "args": "after-used" }],
    "react/state-in-constructor": 0,
    "react/jsx-props-no-spreading": 0,
    "no-case-declarations": 0,
    "import/no-cycle": 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  }
};
