'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Globe } from 'lucide-react'
import { getAlternateRoute } from '@/lib/i18n'

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

interface HeaderProps {
  locale?: 'ru' | 'en'
}

export default function Header({ locale = 'ru' }: HeaderProps) {
  const navigation = locale === 'en' ? navigationEn : navigationRu
  const ctaText = locale === 'en' ? 'Contact Us' : 'Связаться'
  const contactHref = locale === 'en' ? '/contacts' : '/ru/kontakty'
  const homeHref = locale === 'en' ? '/' : '/ru'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const alternateLabel = locale === 'en' ? 'RU' : 'EN'
  const alternateHref = getAlternateRoute(pathname, locale)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={homeHref} className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="Miel Wedding"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-dark hover:text-gold transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Phone, Language Switch & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+995505053424"
              className="flex items-center gap-2 text-dark hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">+995 505 05 34 24</span>
            </a>
            <Link
              href={alternateHref}
              className="flex items-center gap-1.5 text-dark hover:text-gold transition-colors text-sm font-medium"
            >
              <Globe className="h-4 w-4" />
              {alternateLabel}
            </Link>
            <Link
              href={contactHref}
              className="btn-primary"
            >
              {ctaText}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-dark hover:text-gold transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+995505053424"
                className="flex items-center gap-2 text-dark hover:text-gold transition-colors mt-4 pt-4 border-t"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">+995 505 05 34 24</span>
              </a>
              <Link
                href={alternateHref}
                className="flex items-center gap-2 text-dark hover:text-gold transition-colors font-medium mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Globe className="h-5 w-5" />
                {alternateLabel}
              </Link>
              <Link
                href={contactHref}
                className="btn-primary text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {ctaText}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
