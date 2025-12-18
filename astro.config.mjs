// @ts-check
import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: true,
  },
  integrations: [astroI18next(), sitemap()],
});
