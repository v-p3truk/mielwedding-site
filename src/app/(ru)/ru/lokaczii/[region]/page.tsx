import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { regions, getAllRegionSlugs, getRegion } from '@/data/locations'

interface PageProps {
  params: Promise<{ region: string }>
}

export async function generateStaticParams() {
  return getAllRegionSlugs('ru').map((slug) => ({
    region: slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { region: regionSlug } = await params
  const region = getRegion(regionSlug, 'ru')

  if (!region) {
    return { title: 'Локация не найдена' }
  }

  return {
    title: `${region.title.ru} — Miel Wedding`,
    description: region.description.ru,
  }
}

export default async function RegionPage({ params }: PageProps) {
  const { region: regionSlug } = await params
  const region = getRegion(regionSlug, 'ru')

  if (!region) {
    notFound()
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cream-light py-4">
        <div className="container mx-auto px-4">
          <Link
            href="/lokaczii"
            className="text-dark-light hover:text-dark transition-colors flex items-center gap-2 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Все локации
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{region.title.ru}</h1>
            <p className="text-lg text-dark-light">{region.description.ru}</p>
          </div>
        </div>
      </section>

      {/* Venues */}
      {region.venues.length > 0 ? (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Площадки в этом регионе</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {region.venues.map((venue) => (
                <Link
                  key={venue.id}
                  href={`/lokaczii/${region.slugs.ru}/${venue.slugs.ru}`}
                  className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 relative">
                    <Image
                      src={venue.image}
                      alt={venue.name.ru}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
                      {venue.name.ru}
                    </h3>
                    <p className="text-dark-light text-sm mb-3">{venue.description.ru}</p>
                    {venue.price && (
                      <p className="text-gold font-semibold">{venue.price}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-dark-light mb-6">
                Мы организуем свадьбы в разных локациях этого региона.
                Свяжитесь с нами для подбора идеального места.
              </p>
              <Link href="/kontakty" className="btn-primary inline-flex items-center gap-2">
                Получить консультацию
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Хотите провести свадьбу здесь?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Свяжитесь с нами для бронирования и обсуждения деталей
          </p>
          <Link href="/kontakty" className="btn-secondary">
            Связаться с нами
          </Link>
        </div>
      </section>
    </>
  )
}
