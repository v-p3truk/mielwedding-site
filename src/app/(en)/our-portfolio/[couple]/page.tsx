import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Heart, MapPin, Calendar, ArrowLeft } from 'lucide-react'
import { portfolioItemsEN, portfolioSlugsEN, getPortfolioItemEN } from '@/data/portfolio-en'

export async function generateStaticParams() {
  return portfolioSlugsEN.map((couple) => ({
    couple,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ couple: string }> }) {
  const { couple } = await params
  const item = getPortfolioItemEN(couple)

  if (!item) {
    return {
      title: 'Wedding Not Found — Miel Wedding',
    }
  }

  return {
    title: `${item.couple} Wedding — Miel Wedding`,
    description: `${item.couple} wedding in ${item.location}. ${item.description}`,
  }
}

export default async function PortfolioItemPage({ params }: { params: Promise<{ couple: string }> }) {
  const { couple } = await params
  const item = getPortfolioItemEN(couple)

  if (!item) {
    notFound()
  }

  const otherWeddings = portfolioItemsEN.filter((p) => p.slug !== couple)

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-4 bg-cream-light">
        <div className="container mx-auto px-4">
          <Link
            href="/our-portfolio"
            className="inline-flex items-center gap-2 text-dark-light hover:text-dark transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-12 w-12 text-gold mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{item.couple}</h1>
            <div className="flex items-center justify-center gap-6 text-dark-light">
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {item.location}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {item.date}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.couple}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Their Story</h2>
            <p className="text-dark-light text-center">
              {item.description}. This beautiful couple chose Georgia for their special day, and we were honored to help make their dream wedding a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Other Weddings */}
      {otherWeddings.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">More Love Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {otherWeddings.slice(0, 3).map((wedding) => (
                <Link
                  key={wedding.slug}
                  href={`/our-portfolio/${wedding.slug}`}
                  className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-40 relative">
                    <Image
                      src={wedding.image}
                      alt={wedding.couple}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{wedding.couple}</h3>
                    <p className="text-gold text-sm">{wedding.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Create Your Own Story</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Let us help you plan the wedding of your dreams in Georgia
          </p>
          <Link href="/contacts" className="btn-secondary">
            Start Planning
          </Link>
        </div>
      </section>
    </>
  )
}
