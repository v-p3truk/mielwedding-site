import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MapPin, ArrowLeft, ArrowRight } from 'lucide-react'
import { regionsEN, regionsSlugsEN, getRegionEN } from '@/data/locations-en'

export async function generateStaticParams() {
  return regionsSlugsEN.map((region) => ({
    region,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params
  const regionData = getRegionEN(region)

  if (!regionData) {
    return {
      title: 'Location Not Found — Miel Wedding',
    }
  }

  return {
    title: `${regionData.title} — Miel Wedding`,
    description: regionData.description,
  }
}

export default async function RegionPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params
  const regionData = getRegionEN(region)

  if (!regionData) {
    notFound()
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-4 bg-cream-light">
        <div className="container mx-auto px-4">
          <Link
            href="/locations/tbilisi"
            className="inline-flex items-center gap-2 text-dark-light hover:text-dark transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All Locations
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{regionData.title}</h1>
            <p className="text-lg text-dark-light">{regionData.description}</p>
          </div>
        </div>
      </section>

      {/* Venues */}
      {regionData.venues.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Venues in {regionData.title.replace('Wedding in ', '').replace('Wedding around ', '')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionData.venues.map((venue) => (
                <Link
                  key={venue.slug}
                  href={`/locations/${region}/${venue.slug}`}
                  className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 relative">
                    <Image
                      src={venue.image}
                      alt={venue.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{venue.name}</h3>
                    {venue.price && (
                      <p className="text-gold font-medium mb-2">{venue.price}</p>
                    )}
                    <p className="text-dark-light text-sm mb-4">{venue.description}</p>
                    <span className="text-gold font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      View details
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* If no venues, show info */}
      {regionData.venues.length === 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-dark-light mb-8">
                Contact us for venue recommendations in this area
              </p>
              <Link href="/contacts" className="btn-primary">
                Get Recommendations
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Other Regions */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Other Regions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionsEN
              .filter((r) => r.slug !== region)
              .map((r) => (
                <Link
                  key={r.slug}
                  href={`/locations/${r.slug}`}
                  className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
                >
                  <MapPin className="h-8 w-8 text-gold mx-auto mb-3" />
                  <h3 className="font-semibold">{r.title.replace('Wedding in ', '').replace('Wedding around ', '')}</h3>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Plan Your Wedding Here</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Let us help you organize your dream wedding in this beautiful location
          </p>
          <Link href="/contacts" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
