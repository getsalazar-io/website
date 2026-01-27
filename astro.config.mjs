// @ts-ignore
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
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "vue"],
          },
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
  // Añadir esto para desarrollo
  trailingSlash: "ignore",
});