import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react'

const navigationRu = [
  { name: 'О компании', href: '/ru/o-nas' },
  { name: 'Услуги и цены', href: '/ru/uslugi-i-czeny' },
  { name: 'Локации', href: '/ru/lokaczii' },
  { name: 'Портфолио', href: '/ru/portfolio' },
  { name: 'Блог', href: '/ru/blog' },
  { name: 'Отзывы', href: '/ru/otzyvy' },
  { name: 'FAQ', href: '/ru/faq' },
  { name: 'Контакты', href: '/ru/kontakty' },
]

const navigationEn = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Services & Prices', href: '/services-and-prices' },
  { name: 'Locations', href: '/locations' },
  { name: 'Portfolio', href: '/our-portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'FAQ', href: '/frequently-asked-questions' },
  { name: 'Contacts', href: '/contacts' },
]

const contentRu = {
  description: 'Организация свадеб и церемоний в Грузии. Официальная регистрация брака за 1 день.',
  navigation: 'Навигация',
  information: 'Информация',
  contacts: 'Контакты',
  address: 'проспект Шота Руставели 2, Тбилиси, 0108',
  copyright: 'Все права защищены.',
}

const contentEn = {
  description: 'Wedding organization and ceremonies in Georgia. Official marriage registration in 1 day.',
  navigation: 'Navigation',
  information: 'Information',
  contacts: 'Contacts',
  address: '2 Shota Rustaveli Ave, Tbilisi, 0108',
  copyright: 'All rights reserved.',
}

interface FooterProps {
  locale?: 'ru' | 'en'
}

export default function Footer({ locale = 'ru' }: FooterProps) {
  const navigation = locale === 'en' ? navigationEn : navigationRu
  const content = locale === 'en' ? contentEn : contentRu
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-xl font-bold mb-4">Miel Wedding</h3>
            <p className="text-gray-300 text-sm">
              {content.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{content.navigation}</h4>
            <ul className="space-y-2">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold mb-4">{content.information}</h4>
            <ul className="space-y-2">
              {navigation.slice(4).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4">{content.contacts}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+995505053424"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  +995 505 05 34 24
                </a>
              </li>
              <li>
                <a
                  href="mailto:weddingmiel@gmail.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  weddingmiel@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-300 text-sm">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{content.address}</span>
                </div>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/mielwedding.georgia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/995505053424"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Miel Wedding. {content.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
