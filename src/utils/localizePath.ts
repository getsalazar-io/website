/**
 * Genera una ruta localizada basada en el idioma actual
 * @param path - La ruta base (ej: "/policy", "/cookie")
 * @param currentLocale - El idioma actual ("en" o "it")
 * @returns La ruta localizada (ej: "/policy" o "/it/policy")
 */
export function localizePath(path: string, currentLocale: string = 'en'): string {
  // Limpiar la ruta
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Si es inglés (idioma por defecto), devolver sin prefijo
  if (currentLocale === 'en') {
    return cleanPath;
  }
  
  // Para otros idiomas, añadir el prefijo
  return `/${currentLocale}${cleanPath}`;
}