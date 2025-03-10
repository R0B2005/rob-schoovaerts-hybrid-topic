import {setRequestLocale} from 'next-intl/server';

const locales = ['nl', 'en', 'de'];
const defaultLocale = 'nl';

export default async function getRequestConfig({locale}: {locale: string}) {
  // Validate that the incoming locale is valid
  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }

  // Enable static rendering
  setRequestLocale(locale);
  
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
} 