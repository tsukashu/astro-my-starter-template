import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  server: ({ command }) => ({ port: command === 'dev' ? 4321 : 1234 }),
  build: {
    inlineStylesheets: 'never',
    assets: 'images', // Astro built-in Image components do NOT respect rollupOptions so that it will be needed.
  },
  vite: {
    build: {
      rollupOptions: {
        // https://dev.classmethod.jp/articles/vite-11ty-practical/
        output: {
          assetFileNames: function (assetInfo) {
            // const cssRegex = new RegExp(".css$", "i");
            const cssRegex = /\.css$/i;
            // const imgRegex = new RegExp(".(gif|jpeg|jpg|png|svg|webp)$", "i");
            const imgRegex = /\.(gif|jpeg|jpg|png|svg|webp)$/i;
            if (cssRegex.test(assetInfo.name)) {
              return 'css/[name].min.[ext]';
            } else if (imgRegex.test(assetInfo.name)) {
              return 'images/[name].[ext]';
            } else {
              return 'assets/[name].[ext]';
            }
          },
        },
      },
    },
  },
});
