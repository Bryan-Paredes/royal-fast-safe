// Prueba específica para el problema de redirección en contact
const defaultLocale = "en";
const locales = ["en", "es"];

function isValidLocale(locale) {
  return locales.includes(locale);
}

function getLocaleFromURL(pathname) {
  const segments = pathname.split("/");
  const locale = segments[1];

  if (isValidLocale(locale)) {
    return locale;
  }

  return defaultLocale;
}

function getLocaleURL(pathname, locale) {
  const currentLocale = getLocaleFromURL(pathname);

  // Si el idioma actual es el mismo que queremos, no hacer nada
  if (currentLocale === locale) {
    return pathname;
  }

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

// Casos específicos para contact
console.log("Pruebas específicas para contact (CORREGIDO):");
console.log("Desde /es/contact -> en:", getLocaleURL("/es/contact", "en"));
console.log("Desde /en/contact -> es:", getLocaleURL("/en/contact", "es"));
console.log("Desde /contact -> es:", getLocaleURL("/contact", "es"));
console.log("Desde /contact -> en:", getLocaleURL("/contact", "en"));

// Verificar el comportamiento actual
console.log("\nComportamiento actual (CORREGIDO):");
console.log(
  "Si estoy en /es/contact y cambio a EN:",
  getLocaleURL("/es/contact", "en")
);
console.log(
  "Si estoy en /en/contact y cambio a ES:",
  getLocaleURL("/en/contact", "es")
);
console.log(
  "Si estoy en /es/contact y cambio a ES:",
  getLocaleURL("/es/contact", "es")
);
console.log(
  "Si estoy en /en/contact y cambio a EN:",
  getLocaleURL("/en/contact", "en")
);
