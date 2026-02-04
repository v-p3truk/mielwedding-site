import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { regions } from '@/data/locations'

export const metadata = {
  title: 'Локации для свадьбы — Miel Wedding',
  description: 'Локации для свадьбы в Грузии: Тбилиси, Кахетия, Гудаури, Казбеги. Выберите идеальное место для вашей церемонии.',
}

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Локации для свадьбы</h1>
            <p className="text-lg text-dark-light">
              Грузия предлагает невероятное разнообразие мест для проведения свадебной церемонии —
              от исторических храмов до горных вершин
            </p>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {regions.map((region) => (
              <div key={region.slug} className="border rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="h-64 lg:h-auto bg-cream relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="h-16 w-16 text-dark/20" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-4">{region.title}</h2>
                    <p className="text-dark-light mb-6">{region.description}</p>

                    {region.venues.length > 0 && (
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Площадки:</h3>
                        <ul className="grid grid-cols-2 gap-2">
                          {region.venues.map((venue) => (
                            <li key={venue.slug}>
                              <Link
                                href={`/lokaczii/${region.slug}/${venue.slug}`}
                                className="text-dark hover:text-gold transition-colors text-sm flex items-center gap-1"
                              >
                                <ArrowRight className="h-3 w-3" />
                                {venue.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Link
                      href={`/lokaczii/${region.slug}`}
                      className="btn-outline inline-flex items-center gap-2"
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

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Не можете выбрать?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Расскажите нам о ваших предпочтениях, и мы подберём идеальную локацию
          </p>
          <Link href="/kontakty" className="btn-secondary">
            Получить консультацию
          </Link>
        </div>
      </section>
    </>
  )
}
