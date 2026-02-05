import type { Locale } from '@/lib/i18n'

export interface FAQItem {
  id: string
  question: { en: string; ru: string }
  answer: { en: string; ru: string }
}

export const faqItems: FAQItem[] = [
  {
    id: 'documents',
    question: {
      en: 'What documents are needed for marriage registration in Georgia?',
      ru: 'Какие документы нужны для регистрации брака в Грузии?'
    },
    answer: {
      en: 'For marriage registration in Georgia you will need: valid passports of both spouses, birth certificates with apostille and notarized translation into Georgian. If either of you was previously married, you will need a divorce certificate or death certificate of the previous spouse, also with apostille.',
      ru: 'Для регистрации брака в Грузии вам понадобятся: действующие загранпаспорта обоих супругов, свидетельства о рождении с апостилем и нотариально заверенным переводом на грузинский язык. Если кто-то из вас был ранее в браке, потребуется свидетельство о разводе или смерти предыдущего супруга также с апостилем.'
    }
  },
  {
    id: 'time',
    question: {
      en: 'How long does marriage registration take?',
      ru: 'Сколько времени занимает регистрация брака?'
    },
    answer: {
      en: 'Official marriage registration in Georgia can be completed in 1 day. We handle all organizational matters so you can focus on celebrating.',
      ru: 'Официальная регистрация брака в Грузии может быть проведена за 1 день. Мы берём на себя все организационные вопросы, чтобы вы могли сосредоточиться на праздновании.'
    }
  },
  {
    id: 'recognition',
    question: {
      en: 'Is a Georgian marriage recognized in other countries?',
      ru: 'Признаётся ли грузинский брак в других странах?'
    },
    answer: {
      en: 'Yes, a marriage registered in Georgia is recognized in most countries of the world. After registration, we will help you obtain an apostille on your marriage certificate for its legalization in your country.',
      ru: 'Да, брак, зарегистрированный в Грузии, признаётся в большинстве стран мира. После регистрации мы поможем вам получить апостиль на свидетельство о браке для его легализации в вашей стране.'
    }
  },
  {
    id: 'locations',
    question: {
      en: 'What locations do you offer for the ceremony?',
      ru: 'Какие локации вы предлагаете для церемонии?'
    },
    answer: {
      en: 'We organize ceremonies in Tbilisi, surroundings of the capital (Kojori, Mtskheta, Natakhtari), wine region Kakheti (Lopota, Kvareli, Vazisubani) and mountain Kazbegi. Each location is unique and creates an unforgettable atmosphere.',
      ru: 'Мы организуем церемонии в Тбилиси, окрестностях столицы (Коджори, Мцхета, Натахтари), винном регионе Кахетия (Лопота, Кварели, Вазисубани) и горном Казбеги. Каждая локация уникальна и создаёт неповторимую атмосферу.'
    }
  },
  {
    id: 'church',
    question: {
      en: 'Is it possible to have a church wedding in Georgia?',
      ru: 'Можно ли провести венчание в Грузии?'
    },
    answer: {
      en: 'Yes, we organize Orthodox wedding ceremonies in historic churches of Georgia. Nikah (Muslim ceremony) is also possible. We will help with church selection and coordination of all details.',
      ru: 'Да, мы организуем православное венчание в исторических храмах Грузии. Также возможно проведение никаха (мусульманской церемонии). Мы поможем с выбором храма и согласованием всех деталей.'
    }
  },
  {
    id: 'pricing',
    question: {
      en: 'What is included in the service cost?',
      ru: 'Что входит в стоимость услуг?'
    },
    answer: {
      en: 'The basic package includes: organization of official registration, coordinator on wedding day, assistance with documents. Additionally, you can order: outdoor ceremony, decor, photo/video, transfer, banquet. The final cost depends on selected services and location.',
      ru: 'Базовый пакет включает: организацию официальной регистрации, координатора на день свадьбы, помощь с документами. Дополнительно можно заказать: выездную церемонию, декор, фото/видео, трансфер, банкет. Итоговая стоимость зависит от выбранных услуг и локации.'
    }
  },
  {
    id: 'booking',
    question: {
      en: 'How far in advance should I book?',
      ru: 'За сколько времени нужно бронировать дату?'
    },
    answer: {
      en: 'We recommend booking 2-3 months before the planned date, especially in high season (May-October). But we also work with urgent requests and can organize a wedding in 1-2 weeks.',
      ru: 'Рекомендуем обращаться за 2-3 месяца до планируемой даты, особенно в высокий сезон (май-октябрь). Но мы также работаем со срочными запросами и можем организовать свадьбу за 1-2 недели.'
    }
  },
  {
    id: 'visa',
    question: {
      en: 'Do you help with visa and flights?',
      ru: 'Помогаете ли вы с визой и перелётом?'
    },
    answer: {
      en: 'Georgia provides visa-free entry for citizens of many countries (including Russia, Ukraine, EU countries) for up to 1 year. We can help with flight recommendations and airport transfer.',
      ru: 'Грузия предоставляет безвизовый въезд гражданам многих стран (включая Россию, Украину, страны ЕС) сроком до 1 года. Мы можем помочь с рекомендациями по перелётам и трансферу из аэропорта.'
    }
  }
]

export function getFAQItems(locale: Locale): { question: string; answer: string }[] {
  return faqItems.map(item => ({
    question: item.question[locale],
    answer: item.answer[locale]
  }))
}
