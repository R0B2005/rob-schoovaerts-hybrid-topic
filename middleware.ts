import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['nl', 'en', 'de'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'nl'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(nl|en|de)/:path*']
}; 