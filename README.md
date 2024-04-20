# astro-my-starter-template

```sh
npm create astro@latest --template tsukashu/astro-my-starter-template
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```tree
├───📁 .vscode/
│ ├───📄 extensions.json
│ └───📄 launch.json
├───📁 dist/
├───📁 node_modules/
├───📁 public/
│ └───📄 favicon.svg
├───📁 src/
│ ├───📁 pages/
│ │ └───📄 index.astro
│ └───📄 env.d.ts
├───📄 .eslintrc.cjs
├───📄 .gitignore
├───📄 .prettierrc.mjs
├───📄 .stylelintrc.cjs
├───📄 astro.config.mjs
├───📄 package-lock.json
├───📄 package.json
├───📄 README.md
└───📄 tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Me -> [tsukashu](https://github.com/tsukashu)(Github)

About Astro -> [official documentation](https://docs.astro.build) [Discord server](https://astro.build/chat).
