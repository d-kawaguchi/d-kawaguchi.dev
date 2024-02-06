/** @type {import('stylelint').Config} */
export default {
  extends: "stylelint-config-html",
  plugins: ["stylelint-scss", "stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
    "font-family-no-missing-generic-family-keyword": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "selector-pseudo-element-colon-notation": "double",
  },
};
