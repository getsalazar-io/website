// @ts-check
import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: true,
  },
  integrations: [astroI18next()],
});
