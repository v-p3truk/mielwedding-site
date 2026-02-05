import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin, Check, ArrowLeft } from 'lucide-react'
import { getAllVenuesEN, getVenueEN, getRegionEN } from '@/data/locations-en'

export async function generateStaticParams() {
  return getAllVenuesEN()
}

export async function generateMetadata({ params }: { params: Promise<{ region: string; venue: string }> }) {
  const { region, venue } = await params
  const venueData = getVenueEN(region, venue)

  if (!venueData) {
    return {
      title: 'Venue Not Found — Miel Wedding',
    }
  }

  return {
    title: `Wedding in ${venueData.name} — Miel Wedding`,
    description: venueData.description,
  }
}

export default async function VenuePage({ params }: { params: Promise<{ region: string; venue: string }> }) {
  const { region, venue } = await params
  const venueData = getVenueEN(region, venue)
  const regionData = getRegionEN(region)

  if (!venueData || !regionData) {
    notFound()
  }

  const otherVenues = regionData.venues.filter((v) => v.slug !== venue)

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-4 bg-cream-light">
        <div className="container mx-auto px-4">
          <Link
            href={`/locations/${region}`}
            className="inline-flex items-center gap-2 text-dark-light hover:text-dark transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {regionData.title.replace('Wedding in ', '').replace('Wedding around ', '')}
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Wedding in {venueData.name}</h1>
            {venueData.price && (
              <p className="text-gold text-2xl font-semibold mb-4">{venueData.price}</p>
            )}
            <p className="text-lg text-dark-light">{venueData.description}</p>
          </div>
        </div>
      </section>

      {/* Image Placeholder */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto h-96 bg-cream rounded-lg flex items-center justify-center">
            <MapPin className="h-16 w-16 text-dark/20" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">What Makes {venueData.name} Special</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {venueData.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-gold" />
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Venues in Region */}
      {otherVenues.length > 0 && (
        <section className="py-16 bg-cream-light">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Other Venues Nearby</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {otherVenues.slice(0, 3).map((v) => (
                <Link
                  key={v.slug}
                  href={`/locations/${region}/${v.slug}`}
                  className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold mb-2">{v.name}</h3>
                  {v.price && (
                    <p className="text-gold font-medium mb-2">{v.price}</p>
                  )}
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
          <h2 className="text-3xl font-bold mb-4">Plan Your Wedding in {venueData.name}</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Contact us to discuss venue availability and get a personalized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacts" className="btn-secondary">
              Contact Us
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
