import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Check, Heart } from 'lucide-react'
import { services, getService, getAllServiceSlugs } from '@/data/services'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllServiceSlugs('ru').map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const service = getService(slug, 'ru')

  if (!service) {
    return { title: 'Услуга не найдена' }
  }

  return {
    title: `${service.title.ru} — Miel Wedding`,
    description: service.description.ru,
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = getService(slug, 'ru')

  if (!service) {
    notFound()
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cream-light py-4">
        <div className="container mx-auto px-4">
          <Link
            href="/uslugi-i-czeny"
            className="text-dark-light hover:text-dark transition-colors flex items-center gap-2 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Все услуги
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title.ru}</h1>
            <p className="text-lg text-dark-light mb-4">{service.description.ru}</p>
            <p className="text-2xl font-bold text-gold">{service.price}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Что входит в услугу</h2>
              <ul className="space-y-4">
                {service.features.ru.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Placeholder */}
            <div className="h-80 lg:h-auto bg-cream rounded-lg flex items-center justify-center">
              <Heart className="h-16 w-16 text-dark/20" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Заказать услугу</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Свяжитесь с нами, чтобы обсудить детали и получить точный расчёт стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakty" className="btn-secondary">
              Оставить заявку
            </Link>
            <a
              href="https://wa.me/995505053424"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white hover:text-dark"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
