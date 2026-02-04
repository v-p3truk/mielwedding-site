import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react'

const navigation = [
  { name: 'О компании', href: '/o-nas' },
  { name: 'Услуги и цены', href: '/uslugi-i-czeny' },
  { name: 'Локации', href: '/lokaczii' },
  { name: 'Портфолио', href: '/portfolio' },
  { name: 'Блог', href: '/blog' },
  { name: 'Отзывы', href: '/otzyvy' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Контакты', href: '/kontakty' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-xl font-bold mb-4">Miel Wedding</h3>
            <p className="text-gray-300 text-sm">
              Организация свадеб и церемоний в Грузии. Официальная регистрация брака за 1 день.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
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
            <h4 className="font-semibold mb-4">Информация</h4>
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
            <h4 className="font-semibold mb-4">Контакты</h4>
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
                  <span>проспект Шота Руставели 2, Тбилиси, 0108</span>
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
          <p>&copy; {new Date().getFullYear()} Miel Wedding. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
