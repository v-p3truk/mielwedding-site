import type { Locale } from '@/lib/i18n'

export interface Service {
  id: string
  slugs: { en: string; ru: string }
  title: { en: string; ru: string }
  price: { en: string; ru: string }
  description: { en: string; ru: string }
  features: { en: string[]; ru: string[] }
  image: string
}

export const services: Service[] = [
  {
    id: 'apostille',
    slugs: { en: 'apostille', ru: 'apostil' },
    title: { en: 'Apostille', ru: 'Апостиль' },
    price: { en: 'from $330', ru: 'От 330$' },
    description: {
      en: 'Document legalization for international marriage recognition',
      ru: 'Легализация документов для международного признания брака'
    },
    features: {
      en: ['Apostille on marriage certificate', 'Document translation', 'Notarization', 'Procedure consultation'],
      ru: ['Оформление апостиля на свидетельство о браке', 'Перевод документов', 'Нотариальное заверение', 'Консультация по процедуре']
    },
    image: '/images/services/apostille.png'
  },
  {
    id: 'legalization',
    slugs: { en: 'legalization', ru: 'legalizacziya' },
    title: { en: 'Legalization', ru: 'Легализация' },
    price: { en: 'from $495', ru: 'От 495$' },
    description: {
      en: 'Complete marriage document legalization',
      ru: 'Полная легализация документов о браке'
    },
    features: {
      en: ['Legalization at Georgia MFA', 'Consular legalization', 'Document preparation', 'Process support'],
      ru: ['Легализация в МИД Грузии', 'Консульская легализация', 'Подготовка документов', 'Сопровождение процесса']
    },
    image: '/images/services/legalization.png'
  },
  {
    id: 'outdoor-ceremony',
    slugs: { en: 'outdoor-wedding-ceremony', ru: 'vyezdnaya-czeremoniya' },
    title: { en: 'Outdoor Wedding Ceremony', ru: 'Выездная церемония' },
    price: { en: 'upon request', ru: 'по запросу' },
    description: {
      en: 'Romantic ceremony in picturesque locations of Georgia',
      ru: 'Романтическая церемония в живописных местах Грузии'
    },
    features: {
      en: ['Location selection', 'Decor and design', 'Event coordination', 'Photo and video'],
      ru: ['Выбор локации', 'Декор и оформление', 'Координация мероприятия', 'Фото и видеосъёмка']
    },
    image: '/images/services/outdoor-ceremony.jpg'
  },
  {
    id: 'church-wedding',
    slugs: { en: 'wedding-ceremony-in-church', ru: 'venchanie' },
    title: { en: 'Church Wedding Ceremony', ru: 'Венчание' },
    price: { en: 'from $210', ru: 'От 210$' },
    description: {
      en: 'Traditional wedding ceremony in Georgian churches',
      ru: 'Традиционное венчание в грузинских храмах'
    },
    features: {
      en: ['Church selection', 'Church coordination', 'Ceremony organization', 'Document assistance'],
      ru: ['Подбор храма', 'Согласование с церковью', 'Организация церемонии', 'Помощь с документами']
    },
    image: '/images/services/church-wedding.webp'
  },
  {
    id: 'nikah',
    slugs: { en: 'nikah', ru: 'islam-nikah' },
    title: { en: 'Nikah', ru: 'Никах' },
    price: { en: 'from $150', ru: 'От 150$' },
    description: {
      en: 'Organization of Muslim wedding ceremony',
      ru: 'Организация мусульманской свадебной церемонии'
    },
    features: {
      en: ['Imam search', 'Ceremony organization', 'Traditional decoration', 'Ritual consultation'],
      ru: ['Поиск имама', 'Организация церемонии', 'Традиционное оформление', 'Консультация по обряду']
    },
    image: '/images/services/nikah.jpg'
  },
  {
    id: 'proposal',
    slugs: { en: 'proposal', ru: 'predlozhenie' },
    title: { en: 'Marriage Proposal', ru: 'Предложение' },
    price: { en: 'from $300', ru: 'От 300$' },
    description: {
      en: 'Organization of romantic marriage proposal',
      ru: 'Организация романтического предложения руки и сердца'
    },
    features: {
      en: ['Location selection', 'Decor and flowers', 'Photographer', 'Surprise coordination'],
      ru: ['Выбор локации', 'Декор и цветы', 'Фотограф', 'Сюрприз-координация']
    },
    image: '/images/services/proposal.png'
  },
  {
    id: 'bachelor-party',
    slugs: { en: 'bachelorette-bachelor-party', ru: 'devichnik-malchishnik' },
    title: { en: 'Bachelorette / Bachelor Party', ru: 'Девичник / Мальчишник' },
    price: { en: 'from $250', ru: 'От 250$' },
    description: {
      en: 'Organization of pre-wedding celebration',
      ru: 'Организация прощания с холостой жизнью'
    },
    features: {
      en: ['Program planning', 'Venue booking', 'Entertainment and activities', 'Transfer'],
      ru: ['Планирование программы', 'Бронирование локаций', 'Развлечения и активности', 'Трансфер']
    },
    image: '/images/services/bachelor-party.jpg'
  },
  {
    id: 'makeup',
    slugs: { en: 'bridal-makeup-and-hair-in-tbilisi', ru: 'svadebnyj-makiyazh-i-prichyoska-v-tbilisi' },
    title: { en: 'Bridal Makeup & Hair', ru: 'Свадебный макияж и причёска' },
    price: { en: 'from $200', ru: 'От 200$' },
    description: {
      en: 'Professional bridal makeup and hairstyling in Tbilisi',
      ru: 'Профессиональный свадебный макияж и укладка в Тбилиси'
    },
    features: {
      en: ['Professional makeup artist', 'Hairstylist', 'Trial session', 'Touch-ups during event'],
      ru: ['Профессиональный визажист', 'Стилист по волосам', 'Пробный образ', 'Коррекция в течение дня']
    },
    image: '/images/services/makeup.jpg'
  },
  {
    id: 'photoshoot',
    slugs: { en: 'wedding-photoshoot-in-tbilisi', ru: 'svadebnaya-fotosessiya-v-tbilisi' },
    title: { en: 'Wedding Photoshoot', ru: 'Свадебная фотосессия' },
    price: { en: 'from $400', ru: 'От 400$' },
    description: {
      en: 'Professional wedding photography in Tbilisi',
      ru: 'Профессиональная свадебная фотосъёмка в Тбилиси'
    },
    features: {
      en: ['Professional photographer', '4-6 hours coverage', 'Edited photos', 'Online gallery'],
      ru: ['Профессиональный фотограф', '4-6 часов съёмки', 'Обработанные фото', 'Онлайн-галерея']
    },
    image: '/images/services/photoshoot.webp'
  },
  {
    id: 'videography',
    slugs: { en: 'wedding-videography-in-tbilisi', ru: 'svadebnaya-videosyomka-v-tbilisi' },
    title: { en: 'Wedding Videography', ru: 'Свадебная видеосъёмка' },
    price: { en: 'from $600', ru: 'От 600$' },
    description: {
      en: 'Professional wedding videography in Tbilisi',
      ru: 'Профессиональная свадебная видеосъёмка в Тбилиси'
    },
    features: {
      en: ['Professional videographer', 'Full day coverage', 'Edited highlight video', 'Full ceremony video'],
      ru: ['Профессиональный видеограф', 'Съёмка полного дня', 'Смонтированный клип', 'Полное видео церемонии']
    },
    image: '/images/services/videography.jpg'
  },
  {
    id: 'israelis',
    slugs: { en: 'wedding-in-georgia-for-israelis', ru: 'svadba-v-gruzii-dlya-izrailtyan' },
    title: { en: 'Wedding for Israeli Couples', ru: 'Свадьба для израильтян' },
    price: { en: 'from $800', ru: 'От 800$' },
    description: {
      en: 'Special wedding packages for Israeli couples',
      ru: 'Специальные свадебные пакеты для пар из Израиля'
    },
    features: {
      en: ['Hebrew-speaking coordinator', 'Kosher options available', 'Israeli document requirements', 'Direct flights support'],
      ru: ['Координатор с ивритом', 'Кошерные опции', 'Израильские требования к документам', 'Помощь с перелётами']
    },
    image: '/images/services/israelis.png'
  }
]

export function getService(slug: string, locale: Locale): Service | undefined {
  return services.find(s => s.slugs[locale] === slug)
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slugs.en === slug || s.slugs.ru === slug)
}

export function getAllServiceSlugs(locale: Locale): string[] {
  return services.map(s => s.slugs[locale])
}
