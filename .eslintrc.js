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
    "padded-blocks": ["error", {"classes": "always", "blocks": "never" }],
    "react/jsx-curly-spacing": [2, "always"],
    "jsx-quotes": [2, "prefer-single"],
  }
};