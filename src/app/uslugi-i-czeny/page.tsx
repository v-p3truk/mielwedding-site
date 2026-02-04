import Link from 'next/link'
import { Heart, ArrowRight, Check } from 'lucide-react'
import { services } from '@/data/services'

export const metadata = {
  title: 'Услуги и цены — Miel Wedding',
  description: 'Услуги свадебного агентства Miel Wedding в Грузии. Регистрация брака, выездная церемония, венчание, никах.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Услуги и цены</h1>
            <p className="text-lg text-dark-light">
              Мы предлагаем полный спектр услуг для организации вашей идеальной свадьбы в Грузии
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-cream relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-dark/20" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-dark-light text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-gold font-bold text-lg">{service.price}</span>
                    <Link
                      href={`/uslugi-i-czeny/${service.slug}`}
                      className="text-dark hover:text-gold transition-colors flex items-center gap-1 text-sm font-medium"
                    >
                      Подробнее
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Индивидуальный расчёт</h2>
            <p className="text-dark-light mb-6">
              Итоговая стоимость зависит от выбранных услуг, локации и количества гостей.
              Мы подготовим персональное предложение под ваши пожелания и бюджет.
            </p>
            <Link href="/kontakty" className="btn-primary inline-flex items-center gap-2">
              Получить расчёт
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Не нашли нужную услугу?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Свяжитесь с нами, и мы организуем именно то, что вам нужно
          </p>
          <a
            href="https://wa.me/995505053424"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Написать в WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
