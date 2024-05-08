/** @type {import('stylelint').Config} */
const config = {
  extends: "stylelint-config-html",
  plugins: ["stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
    "font-family-no-missing-generic-family-keyword": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "selector-pseudo-element-colon-notation": "double",
  },
};

export default config;
