/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "it"],
  showDefaultLocale: false,
  namespaces: ["home", "policy", "cookie", "404"],
  defaultNamespace: "home",
  routing: {
    prefixDefaultLocale: false,
  },
  i18nextServer: {
    debug: false,
  },
  i18nextClient: {
    debug: false,
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  },
};