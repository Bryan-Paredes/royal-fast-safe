// Prueba de la función getLocaleURL
const defaultLocale = "en";
const locales = ["en", "es"];

function isValidLocale(locale) {
  return locales.includes(locale);
}

function getLocaleURL(pathname, locale) {
  // Extraer la ruta base sin el prefijo del idioma
  const segments = pathname.split("/").filter((segment) => segment !== "");

  // Si el primer segmento es un idioma válido, lo removemos
  if (segments.length > 0 && isValidLocale(segments[0])) {
    segments.splice(0, 1);
  }

  const pathWithoutLocale =
    segments.length > 0 ? `/${segments.join("/")}` : "/";

  // Si queremos el idioma por defecto, no agregamos prefijo
  if (locale === defaultLocale) {
    return pathWithoutLocale;
  }

  // Si queremos otro idioma, agregamos el prefijo
  return `/${locale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
}

// Casos de prueba
console.log("Pruebas de getLocaleURL:");
console.log("Desde /es -> en:", getLocaleURL("/es", "en"));
console.log("Desde /es -> es:", getLocaleURL("/es", "es"));
console.log("Desde /en -> es:", getLocaleURL("/en", "es"));
console.log("Desde /en -> en:", getLocaleURL("/en", "en"));
console.log("Desde /es/contact -> en:", getLocaleURL("/es/contact", "en"));
console.log("Desde /en/contact -> es:", getLocaleURL("/en/contact", "es"));
console.log("Desde /contact -> es:", getLocaleURL("/contact", "es"));
console.log("Desde /contact -> en:", getLocaleURL("/contact", "en"));
