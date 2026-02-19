import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ta', 'te', 'kn'],
  defaultLocale: 'en',
  localePrefix: 'always',
});
