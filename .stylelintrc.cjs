/** @type {import('stylelint').Config} */
module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order", "stylelint-config-html/astro"],
  rules: {
    "block-no-empty": null,
    "no-descending-specificity": null,
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "custom-property-pattern": null,
    "scss/load-no-partial-leading-underscore": null,
  },
  overrides: [
    // {
    // files: ["*.astro"],
    // customSyntax: "postcss-html",
    // },
  ],
};
