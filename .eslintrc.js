module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "standard",
    "plugin:react/recommended",
  ],
  "plugins": [
    "babel",
    "react",
  ],
  "rules": {
    "react/jsx-curly-spacing": [2, "always"],
    "jsx-quotes": [2, "prefer-single"],
  }
};