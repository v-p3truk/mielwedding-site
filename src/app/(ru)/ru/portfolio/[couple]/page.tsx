import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, MapPin, Calendar } from 'lucide-react'
import { portfolioItems } from '@/data/portfolio'

function getPortfolioItem(slug: string) {
  return portfolioItems.find((p) => p.slugs.ru === slug)
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    couple: item.slugs.ru,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ couple: string }> }) {
  const { couple } = await params
  const item = getPortfolioItem(couple)

  if (!item) {
    return { title: 'Не найдено — Miel Wedding' }
  }

  return {
    title: `${item.couple.ru} — Портфолио Miel Wedding`,
    description: item.description.ru,
  }
}

export default async function PortfolioItemPage({ params }: { params: Promise<{ couple: string }> }) {
  const { couple } = await params
  const item = getPortfolioItem(couple)

  if (!item) {
    notFound()
  }

  const otherItems = portfolioItems.filter((p) => p.slugs.ru !== couple)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cream-light py-4">
        <div className="container mx-auto px-4">
          <Link
            href="/ru/portfolio"
            className="text-dark-light hover:text-dark transition-colors flex items-center gap-2 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Все работы
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{item.couple.ru}</h1>
            <div className="flex flex-wrap gap-4 text-dark-light mb-4">
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {item.location.ru}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {item.date}
              </span>
            </div>
            <p className="text-lg text-dark-light">{item.description.ru}</p>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.couple.ru}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Other Works */}
      {otherItems.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Другие работы</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherItems.slice(0, 3).map((p) => (
                <Link
                  key={p.id}
                  href={`/ru/portfolio/${p.slugs.ru}`}
                  className="group"
                >
                  <div className="aspect-video relative rounded-lg mb-3 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.couple.ru}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-gold transition-colors">{p.couple.ru}</h3>
                  <p className="text-dark-light text-sm">{p.location.ru}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Хотите такую же свадьбу?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Свяжитесь с нами, и мы организуем незабываемую церемонию для вас
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ru/kontakty" className="btn-secondary">
              Связаться с нами
            </Link>
            <a
              href="https://wa.me/995505053424"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white hover:text-dark"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
