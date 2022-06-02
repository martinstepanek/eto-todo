module.exports = {
  "extends": ["stylelint-config-standard", "stylelint-config-prettier"],
  "rules": {
    "selector-class-pattern": "(^([a-z][a-z0-9]*)(--?[a-z0-9]+)*$)|(^([a-z][a-z0-9]*)(__[a-z0-9]+)*$)",
  },
  "overrides": [
    {
      "files": ["**/*.{ts,tsx}"],
      "customSyntax": "@stylelint/postcss-css-in-js",
    }
  ],
};
