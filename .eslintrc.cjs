/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:astro/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "simple-import-sort"],

  env: {
    node: true,
    // browser: true,
    // es2020: true,
  },

  rules: {
    "simple-import-sort/imports": [
      "error",
      {
        groups: [["astro(.*)"], ["layout"], ["components"]],
      },
    ],
    "simple-import-sort/exports": "error",
  },

  // for astro
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // When use Japanese
        "no-irregular-whitespace": [
          "error",
          {
            skipJSXText: true, // <- for Astro component, like other JSX.
          },
        ],
      },
    },
    // ...
  ],
};
