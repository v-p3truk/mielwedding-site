export interface Venue {
  slug: string
  name: string
  region: string
  description: string
  features: string[]
  price?: string
  image: string
}

export interface Region {
  slug: string
  title: string
  description: string
  image: string
  venues: Venue[]
}

export const regions: Region[] = [
  {
    slug: 'svadba-v-tbilisi',
    title: 'Свадьба в Тбилиси',
    description: 'Столица Грузии предлагает уникальное сочетание истории, культуры и современности. Старый город, крепость Нарикала, серные бани — идеальный фон для вашей свадьбы.',
    image: '/images/locations/tbilisi.jpg',
    venues: []
  },
  {
    slug: 'svadba-v-okrestnostyah-tbilisi',
    title: 'Свадьба в окрестностях Тбилиси',
    description: 'Живописные окрестности столицы — Коджори, Мцхета, Натахтари — предлагают потрясающие виды и спокойную атмосферу.',
    image: '/images/locations/tbilisi-area.jpg',
    venues: [
      {
        slug: 'kodzhori',
        name: 'Коджори',
        region: 'svadba-v-okrestnostyah-tbilisi',
        description: 'Горный курорт с панорамными видами на Тбилиси',
        features: ['Панорамные виды', 'Горный воздух', 'Рестораны с террасами'],
        price: 'от $1,885',
        image: '/images/locations/kojori.jpg'
      },
      {
        slug: 'mczheta',
        name: 'Мцхета',
        region: 'svadba-v-okrestnostyah-tbilisi',
        description: 'Древняя столица Грузии, объект UNESCO',
        features: ['Храм Светицховели', 'Монастырь Джвари', 'Историческая атмосфера'],
        price: 'от $2,100',
        image: '/images/locations/mtskheta.jpg'
      },
      {
        slug: 'natahtari',
        name: 'Натахтари',
        region: 'svadba-v-okrestnostyah-tbilisi',
        description: 'Живописный пригород с виноградниками',
        features: ['Виноградники', 'Сельская атмосфера', 'Близость к городу'],
        price: 'от $1,950',
        image: '/images/locations/natakhtari.jpg'
      }
    ]
  },
  {
    slug: 'svadba-v-kahetii',
    title: 'Свадьба в Кахетии',
    description: 'Винный регион Грузии — идеальное место для романтической свадьбы среди виноградников и древних монастырей.',
    image: '/images/locations/kakheti.jpg',
    venues: [
      {
        slug: 'lopota',
        name: 'Лопота',
        region: 'svadba-v-kahetii',
        description: 'Luxury курорт с озером и горами',
        features: ['Озеро', 'Горы', 'Luxury отель', 'Спа'],
        price: 'от $3,200',
        image: '/images/locations/lopota.jpg'
      },
      {
        slug: 'kvareli',
        name: 'Кварели',
        region: 'svadba-v-kahetii',
        description: 'Центр виноделия с историческими замками',
        features: ['Винодельни', 'Замки', 'Дегустации'],
        price: 'от $2,400',
        image: '/images/locations/kvareli.jpg'
      },
      {
        slug: 'vazisubani',
        name: 'Вазисубани',
        region: 'svadba-v-kahetii',
        description: 'Аутентичная грузинская деревня',
        features: ['Традиционная архитектура', 'Виноградники', 'Гостеприимство'],
        price: 'от $2,100',
        image: '/images/locations/vazisubani.jpg'
      },
      {
        slug: 'mosmieri',
        name: 'Мосмиери',
        region: 'svadba-v-kahetii',
        description: 'Уединённое место среди холмов',
        features: ['Уединение', 'Природа', 'Панорамные виды'],
        price: 'от $2,300',
        image: '/images/locations/mosmieri.jpg'
      },
      {
        slug: 'artvajn',
        name: 'Артваин',
        region: 'svadba-v-kahetii',
        description: 'Исторический комплекс с винодельней',
        features: ['Историческая усадьба', 'Собственная винодельня', 'Ресторан'],
        price: 'от $2,800',
        image: '/images/locations/artvaini.jpg'
      }
    ]
  },
  {
    slug: 'svadba-v-gudauri-kazbegi',
    title: 'Свадьба в Гудаури и Казбеги',
    description: 'Горные пейзажи Кавказа, вид на Казбек, церковь Гергети — для тех, кто мечтает о свадьбе в горах.',
    image: '/images/locations/kazbegi.jpg',
    venues: []
  }
]

export function getRegion(slug: string): Region | undefined {
  return regions.find(r => r.slug === slug)
}

export function getVenue(regionSlug: string, venueSlug: string): Venue | undefined {
  const region = getRegion(regionSlug)
  return region?.venues.find(v => v.slug === venueSlug)
}
