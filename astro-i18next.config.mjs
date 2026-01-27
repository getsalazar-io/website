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
  routes: {
    it: {
      // Mapear las rutas en italiano
      "": "",  // Home
      "policy": "policy",
      "cookie": "cookie",
    },
  },
  i18nextServer: {
    debug: false,
  },
  i18nextClient: {
    debug: false,
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
    },
  },
};