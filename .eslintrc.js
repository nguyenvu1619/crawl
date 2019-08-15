module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "comma-dangle": ["error", "never"],
    "linebreak-style": 0,
    "no-console": "off",
    "consistent-return": 0,
     "indent": ["error", 4],
    "no-underscore-dangle": 0,
    "array-callback-return": 0
  },
};
