import { getLocaleFromURL } from './config';
import { en } from './en';
import { es } from './es';

export const translations = {
    en,
    es,
};

export type TranslationKey = keyof typeof en;

export function getTranslation(locale: string) {
    return translations[locale as keyof typeof translations] || translations.en;
}

export function getTranslationFromURL(pathname: string) {
    const locale = getLocaleFromURL(pathname);
    return getTranslation(locale);
}

// Función para obtener las rutas como array para hacer .map
export function getRoutes(locale: string) {
    const t = getTranslation(locale);
    return [
        { title: t.nav.home, href: `/${locale}/#home` },
        { title: t.nav.services, href: `/${locale}/#services` },
        { title: t.nav.experience, href: `/${locale}/#experience` },
    ];
}

// Función para obtener los datos de estados
export function getStatesData(locale: string) {
    const t = getTranslation(locale);
    return t.states;
} 