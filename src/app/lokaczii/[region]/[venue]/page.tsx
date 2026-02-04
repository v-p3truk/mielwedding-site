import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Check, MapPin } from 'lucide-react'
import { regions, getVenue } from '@/data/locations'

interface PageProps {
  params: Promise<{ region: string; venue: string }>
}

export async function generateStaticParams() {
  const params: { region: string; venue: string }[] = []

  regions.forEach((region) => {
    region.venues.forEach((venue) => {
      params.push({
        region: region.slug,
        venue: venue.slug,
      })
    })
  })

  return params
}

export async function generateMetadata({ params }: PageProps) {
  const { region: regionSlug, venue: venueSlug } = await params
  const venue = getVenue(regionSlug, venueSlug)

  if (!venue) {
    return { title: 'Площадка не найдена' }
  }

  return {
    title: `${venue.name} — Свадьба в Грузии — Miel Wedding`,
    description: venue.description,
  }
}

export default async function VenuePage({ params }: PageProps) {
  const { region: regionSlug, venue: venueSlug } = await params
  const region = regions.find((r) => r.slug === regionSlug)
  const venue = getVenue(regionSlug, venueSlug)

  if (!venue || !region) {
    notFound()
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cream-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/lokaczii"
              className="text-dark-light hover:text-dark transition-colors"
            >
              Локации
            </Link>
            <span className="text-dark-light">/</span>
            <Link
              href={`/lokaczii/${region.slug}`}
              className="text-dark-light hover:text-dark transition-colors"
            >
              {region.title}
            </Link>
            <span className="text-dark-light">/</span>
            <span className="text-dark">{venue.name}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{venue.name}</h1>
            <p className="text-lg text-dark-light mb-4">{venue.description}</p>
            {venue.price && (
              <p className="text-2xl font-bold text-gold">{venue.price}</p>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Особенности</h2>
              <ul className="space-y-4">
                {venue.features.map((feature, index) => (
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
              <MapPin className="h-16 w-16 text-dark/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Other venues */}
      {region.venues.length > 1 && (
        <section className="py-16 bg-cream-light">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Другие площадки в регионе</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {region.venues
                .filter((v) => v.slug !== venue.slug)
                .slice(0, 3)
                .map((v) => (
                  <Link
                    key={v.slug}
                    href={`/lokaczii/${region.slug}/${v.slug}`}
                    className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-semibold mb-2">{v.name}</h3>
                    <p className="text-dark-light text-sm">{v.description}</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Забронировать {venue.name}</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Свяжитесь с нами для бронирования даты и обсуждения деталей
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
