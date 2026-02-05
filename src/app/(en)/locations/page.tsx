import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { regions } from '@/data/locations'

export const metadata = {
  title: 'Wedding Locations in Georgia — Miel Wedding',
  description: 'Discover the best wedding venues in Georgia: Tbilisi, Kakheti wine region, mountain Kazbegi, and more.',
}

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Wedding Locations</h1>
            <p className="text-lg text-dark-light">
              Georgia offers an incredible variety of places for your wedding ceremony — from ancient temples to mountain peaks
            </p>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region) => (
              <Link
                key={region.id}
                href={`/locations/${region.slugs.en}`}
                className="group"
              >
                <div className="relative h-72 rounded-lg overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/30 transition-colors z-10" />
                  <Image
                    src={region.image}
                    alt={region.title.en}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-end p-6 z-20">
                    <div className="text-white">
                      <h2 className="text-2xl font-bold mb-2">{region.title.en}</h2>
                      {region.venues.length > 0 && (
                        <p className="text-sm opacity-90">{region.venues.length} venues</p>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-dark-light mb-2">{region.description.en}</p>
                <span className="text-gold font-medium flex items-center gap-1">
                  View locations
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Contact us for a free consultation — we&apos;ll help you find the perfect venue for your ceremony
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
