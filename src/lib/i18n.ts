export type Locale = 'en' | 'ru'

export const locales: Locale[] = ['en', 'ru']
export const defaultLocale: Locale = 'en'

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'en') return path
  return `/ru${path === '/' ? '' : path}`
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'ru' : 'en'
}

export function getAlternatePath(path: string, currentLocale: Locale): string {
  const alternateLocale = getAlternateLocale(currentLocale)

  if (currentLocale === 'ru') {
    // Remove /ru prefix for English
    const enPath = path.replace(/^\/ru/, '') || '/'
    return enPath
  } else {
    // Add /ru prefix for Russian
    return `/ru${path === '/' ? '' : path}`
  }
}

// Route mappings for pages with different slugs per locale
export const routeMappings = {
  // Main pages
  '/about-us': '/ru/o-nas',
  '/services-and-prices': '/ru/uslugi-i-czeny',
  '/locations': '/ru/lokaczii',
  '/our-portfolio': '/ru/portfolio',
  '/reviews': '/ru/otzyvy',
  '/frequently-asked-questions': '/ru/faq',
  '/contacts': '/ru/kontakty',
  '/blog': '/ru/blog',
} as const

export function getLocalizedRoute(enPath: string, locale: Locale): string {
  if (locale === 'en') return enPath
  return routeMappings[enPath as keyof typeof routeMappings] || `/ru${enPath}`
}
