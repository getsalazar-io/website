// @ts-check
import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import compress from "astro-compress";

export default defineConfig({
  experimental: {
    svg: true,
  },
  build: {
    inlineStylesheets: "never", // ✅ Nunca incluir CSS inline
    assets: "_astro", // Carpeta para assets compilados
  },
  compressHTML: true, // ✅ Minificar HTML
  vite: {
    build: {
      minify: "terser", // O 'esbuild' (más rápido)
      cssCodeSplit: true, // ✅ Dividir CSS en chunks
      rollupOptions: {
        output: {
          manualChunks: {
            // Separar vendor code
            vendor: ["react", "vue"], // Si usas estas librerías
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
      Image: false, // Ya lo manejas con el componente Image
    }),
  ],
});
