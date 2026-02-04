export interface Service {
  slug: string
  title: string
  price: string
  description: string
  features: string[]
  image: string
}

export const services: Service[] = [
  {
    slug: 'apostil',
    title: 'Апостиль',
    price: 'от 350$',
    description: 'Легализация документов для международного признания брака',
    features: [
      'Оформление апостиля на свидетельство о браке',
      'Перевод документов',
      'Нотариальное заверение',
      'Консультация по процедуре'
    ],
    image: '/images/services/apostil.jpg'
  },
  {
    slug: 'legalizacziya',
    title: 'Легализация',
    price: 'от 400$',
    description: 'Полная легализация документов о браке',
    features: [
      'Легализация в МИД Грузии',
      'Консульская легализация',
      'Подготовка документов',
      'Сопровождение процесса'
    ],
    image: '/images/services/legalization.jpg'
  },
  {
    slug: 'vyezdnaya-czeremoniya',
    title: 'Выездная церемония',
    price: 'от 500$',
    description: 'Романтическая церемония в живописных местах Грузии',
    features: [
      'Выбор локации',
      'Декор и оформление',
      'Координация мероприятия',
      'Фото и видеосъёмка'
    ],
    image: '/images/services/ceremony.jpg'
  },
  {
    slug: 'venchanie',
    title: 'Венчание',
    price: 'от 600$',
    description: 'Традиционное венчание в грузинских храмах',
    features: [
      'Подбор храма',
      'Согласование с церковью',
      'Организация церемонии',
      'Помощь с документами'
    ],
    image: '/images/services/venchanie.jpg'
  },
  {
    slug: 'nikah-2',
    title: 'Никах',
    price: 'от 550$',
    description: 'Организация мусульманской свадебной церемонии',
    features: [
      'Поиск имама',
      'Организация церемонии',
      'Традиционное оформление',
      'Консультация по обряду'
    ],
    image: '/images/services/nikah.jpg'
  },
  {
    slug: 'predlozhenie',
    title: 'Предложение',
    price: 'от 300$',
    description: 'Организация романтического предложения руки и сердца',
    features: [
      'Выбор локации',
      'Декор и цветы',
      'Фотограф',
      'Сюрприз-координация'
    ],
    image: '/images/services/proposal.jpg'
  },
  {
    slug: 'devichnik-malchishnik',
    title: 'Девичник / Мальчишник',
    price: 'от 250$',
    description: 'Организация прощания с холостой жизнью',
    features: [
      'Планирование программы',
      'Бронирование локаций',
      'Развлечения и активности',
      'Трансфер'
    ],
    image: '/images/services/party.jpg'
  }
]
