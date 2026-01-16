// @ts-check
import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import compress from "astro-compress";

export default defineConfig({
  experimental: {
    svg: true,
  },
  build: {
    inlineStylesheets: "never",
    assets: "_astro",
  },
  compressHTML: true,
  vite: {
    build: {
      minify: "terser",
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
  integrations: [
    astroI18next(),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      Image: false,
    }),
  ],
});
