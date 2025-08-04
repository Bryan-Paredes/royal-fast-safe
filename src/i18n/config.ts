export const defaultLocale = 'en';
export const locales = ['en', 'es'] as const;
export type ValidLocale = typeof locales[number];

export const localeNames: Record<ValidLocale, string> = {
    en: 'English',
    es: 'Español',
};

export function isValidLocale(locale: string): locale is ValidLocale {
    return locales.includes(locale as ValidLocale);
}

export function getLocaleFromURL(pathname: string): ValidLocale {
    const segments = pathname.split('/');
    const locale = segments[1];

    if (isValidLocale(locale)) {
        return locale;
    }

    return defaultLocale;
}

export function getRelativeLocaleURL(pathname: string, locale: ValidLocale): string {
    const segments = pathname.split('/');
    const currentLocale = getLocaleFromURL(pathname);

    if (currentLocale === defaultLocale) {
        segments.splice(1, 0, locale);
    } else {
        segments[1] = locale;
    }

    return segments.join('/');
}

export function getLocaleURL(pathname: string, locale: ValidLocale): string {
    // Extraer la ruta base sin el prefijo del idioma
    const segments = pathname.split('/').filter(segment => segment !== '');

    // Si el primer segmento es un idioma válido, lo removemos
    if (segments.length > 0 && isValidLocale(segments[0])) {
        segments.splice(0, 1);
    }

    const pathWithoutLocale = segments.length > 0 ? `/${segments.join('/')}` : '';

    // Si es el idioma por defecto y estamos en la raíz, no agregar prefijo
    if (locale === defaultLocale && pathWithoutLocale === '') {
        return '/';
    }

    // Para otros idiomas o rutas específicas, agregar el prefijo
    return `/${locale}${pathWithoutLocale}`;
} 