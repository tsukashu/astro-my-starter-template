// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  arrowParens: "always",
  printWidth: 119,
  tabWidth: 2,
  proseWrap: "preserve",
  useTabs: false,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        singleQuote: true,
        parser: "astro",
      },
    },
  ],
};
