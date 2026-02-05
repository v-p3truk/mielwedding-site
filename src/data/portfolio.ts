import type { Locale } from '@/lib/i18n'

export interface PortfolioItem {
  id: string
  slugs: { en: string; ru: string }
  couple: { en: string; ru: string }
  location: { en: string; ru: string }
  date: string
  description: { en: string; ru: string }
  image: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'dima-tanya',
    slugs: { en: 'dima-tanya', ru: 'dima-tanya' },
    couple: { en: 'Dima & Tanya', ru: 'Дима и Таня' },
    location: { en: 'Mtskheta', ru: 'Мцхета' },
    date: '2024-06',
    description: {
      en: 'Orthodox wedding ceremony at the ancient Svetitskhoveli Cathedral',
      ru: 'Венчание в древнем храме Светицховели'
    },
    image: '/images/portfolio/dima-tanya.jpg'
  },
  {
    id: 'alex-nastya',
    slugs: { en: 'alex-nastya', ru: 'aleksej-elena' },
    couple: { en: 'Alex & Nastya', ru: 'Алексей и Елена' },
    location: { en: 'Lopota', ru: 'Лопота' },
    date: '2024-05',
    description: {
      en: 'Luxury wedding by the lake with mountain views',
      ru: 'Luxury свадьба на берегу озера'
    },
    image: '/images/portfolio/alex-nastya.jpg'
  },
  {
    id: 'sergey-kristina',
    slugs: { en: 'sergey-kristina', ru: 'sergej-kristina' },
    couple: { en: 'Sergey & Kristina', ru: 'Сергей и Кристина' },
    location: { en: 'Tbilisi', ru: 'Тбилиси' },
    date: '2024-04',
    description: {
      en: 'Intimate ceremony for two in the heart of Tbilisi',
      ru: 'Камерная церемония для двоих'
    },
    image: '/images/portfolio/sergey-kristina.jpg'
  },
  {
    id: 'lekso-tamuna',
    slugs: { en: 'lekso-tamuna', ru: 'lekso-tamuna' },
    couple: { en: 'Lekso & Tamuna', ru: 'Лексо и Тамуна' },
    location: { en: 'Kakheti', ru: 'Кахетия' },
    date: '2024-08',
    description: {
      en: 'Romantic ceremony among the vineyards',
      ru: 'Романтическая церемония среди виноградников'
    },
    image: '/images/portfolio/lekso-tamuna.jpg'
  },
  {
    id: 'bogdan-eva',
    slugs: { en: 'bogdan-eva', ru: 'bogdan-eva' },
    couple: { en: 'Bogdan & Eva', ru: 'Богдан и Ева' },
    location: { en: 'Kazbegi', ru: 'Казбеги' },
    date: '2024-07',
    description: {
      en: 'Mountain wedding with views of Mount Kazbek',
      ru: 'Горная свадьба с видом на Казбек'
    },
    image: '/images/portfolio/bogdan-eva.jpeg'
  },
  {
    id: 'archi-liza',
    slugs: { en: 'archi-liza', ru: 'archi-liza' },
    couple: { en: 'Archi & Liza', ru: 'Арчи и Лиза' },
    location: { en: 'Tbilisi', ru: 'Тбилиси' },
    date: '2024-09',
    description: {
      en: 'Elegant wedding in historic Tbilisi',
      ru: 'Элегантная свадьба в историческом центре Тбилиси'
    },
    image: '/images/portfolio/archi-liza.jpg'
  }
]

export function getPortfolioItem(slug: string, locale: Locale): PortfolioItem | undefined {
  return portfolioItems.find(p => p.slugs[locale] === slug)
}

export function getPortfolioItemBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find(p => p.slugs.en === slug || p.slugs.ru === slug)
}

export function getAllPortfolioSlugs(locale: Locale): string[] {
  return portfolioItems.map(p => p.slugs[locale])
}
