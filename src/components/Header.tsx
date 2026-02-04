'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
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

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+995505053424"
              className="flex items-center gap-2 text-dark hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">+995 505 05 34 24</span>
            </a>
            <Link
              href="/kontakty"
              className="btn-primary"
            >
              Связаться
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
                href="/kontakty"
                className="btn-primary text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Связаться
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
