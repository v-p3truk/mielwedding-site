import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { portfolioItemsEN } from '@/data/portfolio-en'

export const metadata = {
  title: 'Our Portfolio — Miel Wedding',
  description: 'Real weddings organized by Miel Wedding in Georgia. Love stories of our clients.',
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg text-dark-light">
              Every wedding is a unique story. Here are some of them.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItemsEN.map((item) => (
              <Link
                key={item.slug}
                href={`/our-portfolio/${item.slug}`}
                className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-64 relative">
                  <Image
                    src={item.image}
                    alt={item.couple}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{item.couple}</h3>
                  <p className="text-gold text-sm mb-2">{item.location} • {item.date}</p>
                  <p className="text-dark-light text-sm">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want the Same?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Let us create your unforgettable love story
          </p>
          <Link href="/contacts" className="btn-secondary inline-flex items-center gap-2">
            Start Planning
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
