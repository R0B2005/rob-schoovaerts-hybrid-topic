import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';
import NextLink from 'next/link';

export default async function Home({params: {locale}}: {params: {locale: string}}) {
  // Enable static rendering
  setRequestLocale(locale);
  
  const t = await getTranslations();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          {t('title')}
        </h1>
        <p className="text-gray-600 text-center mb-8">
          {t('description')}
        </p>
        
        <div className="flex flex-col space-y-2">
          {['nl', 'en', 'de'].map((loc) => (
            <NextLink
              key={loc}
              href={`/${loc}`}
              className="w-full py-2 px-4 text-center rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              {t(`languages.${loc}`)}
            </NextLink>
          ))}
        </div>
      </div>
    </main>
  );
} 