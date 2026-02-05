import type { Locale } from '@/lib/i18n'

export interface Venue {
  id: string
  slugs: { en: string; ru: string }
  name: { en: string; ru: string }
  description: { en: string; ru: string }
  features: { en: string[]; ru: string[] }
  price?: string
  image: string
}

export interface Region {
  id: string
  slugs: { en: string; ru: string }
  title: { en: string; ru: string }
  description: { en: string; ru: string }
  image: string
  venues: Venue[]
}

export const regions: Region[] = [
  {
    id: 'tbilisi',
    slugs: { en: 'tbilisi', ru: 'svadba-v-tbilisi' },
    title: { en: 'Wedding in Tbilisi', ru: 'Свадьба в Тбилиси' },
    description: {
      en: 'The capital of Georgia offers a unique combination of history, culture and modernity. The Old Town, Narikala Fortress, sulfur baths — the perfect backdrop for your wedding.',
      ru: 'Столица Грузии предлагает уникальное сочетание истории, культуры и современности. Старый город, крепость Нарикала, серные бани — идеальный фон для вашей свадьбы.'
    },
    image: '/images/locations/tbilisi.jpeg',
    venues: []
  },
  {
    id: 'around-tbilisi',
    slugs: { en: 'around-tbilisi', ru: 'svadba-v-okrestnostyah-tbilisi' },
    title: { en: 'Wedding Around Tbilisi', ru: 'Свадьба в окрестностях Тбилиси' },
    description: {
      en: 'The picturesque surroundings of the capital — Kojori, Mtskheta, Natakhtari — offer stunning views and a peaceful atmosphere.',
      ru: 'Живописные окрестности столицы — Коджори, Мцхета, Натахтари — предлагают потрясающие виды и спокойную атмосферу.'
    },
    image: '/images/locations/around-tbilisi.jpg',
    venues: [
      {
        id: 'kojori',
        slugs: { en: 'kojori', ru: 'kodzhori' },
        name: { en: 'Kojori', ru: 'Коджори' },
        description: {
          en: 'Mountain resort with panoramic views of Tbilisi',
          ru: 'Горный курорт с панорамными видами на Тбилиси'
        },
        features: {
          en: ['Panoramic views', 'Mountain air', 'Terrace restaurants'],
          ru: ['Панорамные виды', 'Горный воздух', 'Рестораны с террасами']
        },
        price: '$1,885',
        image: '/images/locations/kojori.jpg'
      },
      {
        id: 'mtskheta',
        slugs: { en: 'mtskheta', ru: 'mczheta' },
        name: { en: 'Mtskheta', ru: 'Мцхета' },
        description: {
          en: 'Ancient capital of Georgia, UNESCO World Heritage Site',
          ru: 'Древняя столица Грузии, объект UNESCO'
        },
        features: {
          en: ['Svetitskhoveli Cathedral', 'Jvari Monastery', 'Historical atmosphere'],
          ru: ['Храм Светицховели', 'Монастырь Джвари', 'Историческая атмосфера']
        },
        price: '$2,100',
        image: '/images/locations/mtskheta.jpg'
      },
      {
        id: 'natakhtari',
        slugs: { en: 'natakhtari', ru: 'natahtari' },
        name: { en: 'Natakhtari', ru: 'Натахтари' },
        description: {
          en: 'Picturesque suburb with vineyards',
          ru: 'Живописный пригород с виноградниками'
        },
        features: {
          en: ['Vineyards', 'Rural atmosphere', 'Close to city'],
          ru: ['Виноградники', 'Сельская атмосфера', 'Близость к городу']
        },
        price: '$1,950',
        image: '/images/locations/natakhtari.jpg'
      }
    ]
  },
  {
    id: 'kakheti',
    slugs: { en: 'kakheti', ru: 'svadba-v-kahetii' },
    title: { en: 'Wedding in Kakheti', ru: 'Свадьба в Кахетии' },
    description: {
      en: 'Georgia\'s wine region — the ideal place for a romantic wedding among vineyards and ancient monasteries.',
      ru: 'Винный регион Грузии — идеальное место для романтической свадьбы среди виноградников и древних монастырей.'
    },
    image: '/images/locations/kakheti.jpeg',
    venues: [
      {
        id: 'lopota',
        slugs: { en: 'lopota', ru: 'lopota' },
        name: { en: 'Lopota', ru: 'Лопота' },
        description: {
          en: 'Luxury resort with lake and mountains',
          ru: 'Luxury курорт с озером и горами'
        },
        features: {
          en: ['Lake', 'Mountains', 'Luxury hotel', 'Spa'],
          ru: ['Озеро', 'Горы', 'Luxury отель', 'Спа']
        },
        price: '$3,200',
        image: '/images/locations/lopota.jpg'
      },
      {
        id: 'kvareli',
        slugs: { en: 'kvareli', ru: 'kvareli' },
        name: { en: 'Kvareli', ru: 'Кварели' },
        description: {
          en: 'Winemaking center with historic castles',
          ru: 'Центр виноделия с историческими замками'
        },
        features: {
          en: ['Wineries', 'Castles', 'Wine tastings'],
          ru: ['Винодельни', 'Замки', 'Дегустации']
        },
        price: '$2,400',
        image: '/images/locations/kvareli.jpg'
      },
      {
        id: 'vazisubani',
        slugs: { en: 'vazisubani', ru: 'vazisubani' },
        name: { en: 'Vazisubani', ru: 'Вазисубани' },
        description: {
          en: 'Authentic Georgian village',
          ru: 'Аутентичная грузинская деревня'
        },
        features: {
          en: ['Traditional architecture', 'Vineyards', 'Hospitality'],
          ru: ['Традиционная архитектура', 'Виноградники', 'Гостеприимство']
        },
        price: '$2,100',
        image: '/images/locations/vazisubani.jpg'
      },
      {
        id: 'mosmieri',
        slugs: { en: 'mosmieri', ru: 'mosmieri' },
        name: { en: 'Mosmieri', ru: 'Мосмиери' },
        description: {
          en: 'Secluded location among the hills',
          ru: 'Уединённое место среди холмов'
        },
        features: {
          en: ['Seclusion', 'Nature', 'Panoramic views'],
          ru: ['Уединение', 'Природа', 'Панорамные виды']
        },
        price: '$2,300',
        image: '/images/locations/mosmieri.jpg'
      },
      {
        id: 'artwine',
        slugs: { en: 'artwine', ru: 'artvajn' },
        name: { en: 'Artwine', ru: 'Артваин' },
        description: {
          en: 'Historic complex with winery',
          ru: 'Исторический комплекс с винодельней'
        },
        features: {
          en: ['Historic estate', 'Own winery', 'Restaurant'],
          ru: ['Историческая усадьба', 'Собственная винодельня', 'Ресторан']
        },
        price: '$2,800',
        image: '/images/locations/artwine.jpg'
      }
    ]
  },
  {
    id: 'gudauri-kazbegi',
    slugs: { en: 'gudauri-and-kazbegi', ru: 'svadba-v-gudauri-kazbegi' },
    title: { en: 'Wedding in Gudauri & Kazbegi', ru: 'Свадьба в Гудаури и Казбеги' },
    description: {
      en: 'Caucasus mountain landscapes, views of Kazbek, Gergeti church — for those who dream of a mountain wedding.',
      ru: 'Горные пейзажи Кавказа, вид на Казбек, церковь Гергети — для тех, кто мечтает о свадьбе в горах.'
    },
    image: '/images/locations/gudauri-kazbegi.jpeg',
    venues: []
  }
]

export function getRegion(slug: string, locale: Locale): Region | undefined {
  return regions.find(r => r.slugs[locale] === slug)
}

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find(r => r.slugs.en === slug || r.slugs.ru === slug)
}

export function getVenue(regionSlug: string, venueSlug: string, locale: Locale): Venue | undefined {
  const region = getRegion(regionSlug, locale)
  return region?.venues.find(v => v.slugs[locale] === venueSlug)
}

export function getVenueBySlug(regionSlug: string, venueSlug: string): Venue | undefined {
  const region = getRegionBySlug(regionSlug)
  return region?.venues.find(v => v.slugs.en === venueSlug || v.slugs.ru === venueSlug)
}

export function getAllRegionSlugs(locale: Locale): string[] {
  return regions.map(r => r.slugs[locale])
}

export function getAllVenueSlugs(locale: Locale): { region: string; venue: string }[] {
  const slugs: { region: string; venue: string }[] = []
  regions.forEach(region => {
    region.venues.forEach(venue => {
      slugs.push({
        region: region.slugs[locale],
        venue: venue.slugs[locale]
      })
    })
  })
  return slugs
}
