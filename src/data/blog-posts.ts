import type { Locale } from '@/lib/i18n'

export interface BlogPost {
  id: string
  slugs: { en: string; ru: string }
  title: { en: string; ru: string }
  excerpt: { en: string; ru: string }
  content: { en: string; ru: string }
  date: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'documents',
    slugs: {
      en: 'what-documents-are-needed-to-register-a-marriage-in-georgia',
      ru: 'kakie-dokumenty-nuzhny-dlya-registraczii-braka-v-gruzii'
    },
    title: {
      en: 'What Documents Are Needed to Register a Marriage in Georgia',
      ru: 'Какие документы нужны для регистрации брака в Грузии'
    },
    excerpt: {
      en: 'Complete guide to documents required for marriage registration in Georgia for foreigners.',
      ru: 'Полный список документов и требования для регистрации брака в Грузии.'
    },
    content: {
      en: 'For marriage registration in Georgia you will need: valid passports of both spouses, birth certificates with apostille and notarized translation into Georgian. If either of you was previously married, you will need a divorce certificate or death certificate of the previous spouse, also with apostille.',
      ru: 'Для регистрации брака в Грузии вам понадобятся: действующие загранпаспорта обоих супругов, свидетельства о рождении с апостилем и нотариально заверенным переводом на грузинский язык. Если кто-то из вас был ранее в браке, потребуется свидетельство о разводе или смерти предыдущего супруга также с апостилем.'
    },
    date: '2024-01-15',
    image: '/images/blog/documents.jpeg'
  },
  {
    id: 'certificate-one-day',
    slugs: {
      en: 'how-to-get-a-marriage-certificate-in-one-day',
      ru: 'kak-poluchit-svidetelstvo-o-zaklyuchenii-braka-za-1-den'
    },
    title: {
      en: 'How to Get a Marriage Certificate in One Day',
      ru: 'Как получить свидетельство о заключении брака за 1 день'
    },
    excerpt: {
      en: 'Step-by-step guide to fast marriage registration in Georgia.',
      ru: 'Пошаговая инструкция по быстрой регистрации брака в Грузии.'
    },
    content: {
      en: 'Georgia offers one of the fastest marriage registration processes in the world. With proper document preparation, you can receive your official marriage certificate on the same day. Our team handles all organizational matters so you can focus on celebrating.',
      ru: 'Грузия предлагает одну из самых быстрых процедур регистрации брака в мире. При правильной подготовке документов вы можете получить официальное свидетельство о браке в тот же день. Наша команда берёт на себя все организационные вопросы, чтобы вы могли сосредоточиться на праздновании.'
    },
    date: '2024-01-10',
    image: '/images/blog/certificate.jpeg'
  },
  {
    id: 'nikah',
    slugs: {
      en: 'nikah-the-marriage-ceremony-in-islam',
      ru: 'nikah-obryad-brakosochetaniya-v-islame'
    },
    title: {
      en: 'Nikah: The Marriage Ceremony in Islam',
      ru: 'Никах: обряд бракосочетания в исламе'
    },
    excerpt: {
      en: 'Everything about conducting Nikah in Georgia: traditions and organization.',
      ru: 'Всё о проведении никаха в Грузии: традиции и организация.'
    },
    content: {
      en: 'Nikah is a sacred Islamic marriage ceremony. In Georgia, we can help you organize an authentic Nikah ceremony with an experienced imam. We handle all aspects from finding the right imam to traditional decorations and arrangements.',
      ru: 'Никах — это священная исламская брачная церемония. В Грузии мы можем помочь вам организовать аутентичную церемонию никаха с опытным имамом. Мы занимаемся всеми аспектами — от поиска подходящего имама до традиционного оформления.'
    },
    date: '2024-01-05',
    image: '/images/blog/nikah.jpeg'
  },
  {
    id: 'best-venues',
    slugs: {
      en: 'the-best-wedding-ceremony-venues-in-georgia',
      ru: 'luchshie-mesta-dlya-svadebnoj-czeremonii-v-gruzii'
    },
    title: {
      en: 'The Best Wedding Ceremony Venues in Georgia',
      ru: 'Лучшие места для свадебной церемонии в Грузии'
    },
    excerpt: {
      en: 'Top locations for an unforgettable wedding in Georgia.',
      ru: 'Топ локаций для незабываемой свадьбы в Грузии.'
    },
    content: {
      en: 'Georgia offers incredible diversity of wedding venues: from the historic streets of Tbilisi to mountain peaks of Kazbegi, from Kakheti vineyards to ancient monasteries. Each location creates a unique atmosphere for your special day.',
      ru: 'Грузия предлагает невероятное разнообразие мест для свадьбы: от исторических улиц Тбилиси до горных вершин Казбеги, от виноградников Кахетии до древних монастырей. Каждая локация создаёт уникальную атмосферу для вашего особенного дня.'
    },
    date: '2023-12-28',
    image: '/images/blog/venues.jpeg'
  },
  {
    id: 'venchanie',
    slugs: {
      en: 'orthodox-wedding-ceremony-in-georgia',
      ru: 'venchanie-v-gruzii'
    },
    title: {
      en: 'Orthodox Wedding Ceremony in Georgia',
      ru: 'Венчание в Грузии'
    },
    excerpt: {
      en: 'How to organize an Orthodox wedding ceremony in Georgian churches.',
      ru: 'Как организовать православное венчание в грузинских храмах.'
    },
    content: {
      en: 'Georgian Orthodox churches offer stunning historic settings for wedding ceremonies. We help coordinate with churches, handle requirements, and ensure your ceremony is conducted according to Orthodox traditions in beautiful ancient temples.',
      ru: 'Грузинские православные храмы предлагают потрясающие исторические декорации для венчания. Мы помогаем с согласованием с церковью, оформлением требований и обеспечиваем проведение церемонии согласно православным традициям в прекрасных древних храмах.'
    },
    date: '2023-12-20',
    image: '/images/blog/venchanie.webp'
  },
  {
    id: 'best-time',
    slugs: {
      en: 'best-time-for-weddings-in-georgia',
      ru: 'luchshee-vremya-dlya-svadeb-v-gruzii'
    },
    title: {
      en: 'Best Time for Weddings in Georgia',
      ru: 'Лучшее время для свадеб в Грузии'
    },
    excerpt: {
      en: 'When to plan your wedding: weather, season, and prices.',
      ru: 'Когда лучше планировать свадьбу: погода, сезон, цены.'
    },
    content: {
      en: 'The best seasons for weddings in Georgia are spring (April-June) and autumn (September-October). Weather is pleasant, landscapes are beautiful, and venues are available. Summer can be hot, while winter offers unique snowy mountain ceremonies.',
      ru: 'Лучшие сезоны для свадеб в Грузии — весна (апрель-июнь) и осень (сентябрь-октябрь). Погода приятная, пейзажи красивые, площадки доступны. Лето может быть жарким, а зима предлагает уникальные заснеженные горные церемонии.'
    },
    date: '2023-12-15',
    image: '/images/blog/seasons.jpg'
  },
  {
    id: 'wedding-styles',
    slugs: {
      en: 'wedding-styles',
      ru: 'svadebnye-stili'
    },
    title: {
      en: 'Wedding Styles: Which One to Choose?',
      ru: 'Свадебные стили: какой выбрать?'
    },
    excerpt: {
      en: 'Overview of popular wedding styles and how to choose yours.',
      ru: 'Обзор популярных свадебных стилей и как выбрать свой.'
    },
    content: {
      en: 'From classic elegance to bohemian romance, rustic charm to modern minimalism — Georgia can accommodate any wedding style. The diverse landscapes and venues allow for endless creative possibilities to match your vision.',
      ru: 'От классической элегантности до богемного романтизма, от деревенского шарма до современного минимализма — Грузия может принять свадьбу в любом стиле. Разнообразие пейзажей и площадок позволяет реализовать любые творческие идеи.'
    },
    date: '2023-12-10',
    image: '/images/blog/styles.jpeg'
  },
  {
    id: 'wedding-in-georgia',
    slugs: {
      en: 'wedding-in-georgia',
      ru: 'svadba-v-gruzii'
    },
    title: {
      en: 'Wedding in Georgia: Complete Guide',
      ru: 'Свадьба в Грузии: полный гид'
    },
    excerpt: {
      en: 'Everything you need to know about planning a wedding in Georgia.',
      ru: 'Всё, что нужно знать о планировании свадьбы в Грузии.'
    },
    content: {
      en: 'Georgia has become one of the most popular destinations for international weddings. Easy marriage registration, stunning locations, delicious cuisine, warm hospitality — all at affordable prices. Our guide covers everything from documents to venues.',
      ru: 'Грузия стала одним из самых популярных направлений для международных свадеб. Простая регистрация брака, потрясающие локации, вкусная кухня, тёплое гостеприимство — всё по доступным ценам. Наш гид охватывает всё от документов до площадок.'
    },
    date: '2023-12-05',
    image: '/images/blog/georgia.png'
  }
]

export function getBlogPost(slug: string, locale: Locale): BlogPost | undefined {
  return blogPosts.find(p => p.slugs[locale] === slug)
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slugs.en === slug || p.slugs.ru === slug)
}

export function getAllBlogSlugs(locale: Locale): string[] {
  return blogPosts.map(p => p.slugs[locale])
}
