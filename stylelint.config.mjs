/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "custom-property-pattern": "^[a-z][a-zA-Z0-9]+$",
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
  },
};
