import Link from 'next/link'
import { Heart, Award, Users, Clock } from 'lucide-react'

export const metadata = {
  title: 'About Us — Miel Wedding',
  description: 'Meet the Miel Wedding team. We create unforgettable weddings in Georgia since 2018.',
}

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-dark-light">
              Creating unforgettable love stories in Georgia
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg text-dark-light">
              <p className="mb-4">
                Miel Wedding was founded in 2018 with a simple mission: to help couples from around the world experience the magic of getting married in Georgia.
              </p>
              <p className="mb-4">
                What started as a small team passionate about weddings has grown into a full-service wedding agency, having organized over 200 weddings for international couples.
              </p>
              <p>
                We believe every love story deserves a beautiful beginning, and Georgia — with its stunning landscapes, rich culture, and simple marriage process — is the perfect place to start your journey together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-gold" />
              </div>
              <p className="text-3xl font-bold mb-1">200+</p>
              <p className="text-dark-light">Weddings</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-gold" />
              </div>
              <p className="text-3xl font-bold mb-1">6+</p>
              <p className="text-dark-light">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <p className="text-3xl font-bold mb-1">30+</p>
              <p className="text-dark-light">Countries</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-gold" />
              </div>
              <p className="text-3xl font-bold mb-1">5.0</p>
              <p className="text-dark-light">Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Miel Wedding</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Local Expertise</h3>
              <p className="text-dark-light">
                We know Georgia inside out — the best venues, vendors, and hidden gems.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Full Service</h3>
              <p className="text-dark-light">
                From documents to decorations, we handle everything so you can relax.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Personal Touch</h3>
              <p className="text-dark-light">
                Every wedding is unique. We tailor everything to your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Create Your Story</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Ready to start planning your dream wedding in Georgia?
          </p>
          <Link href="/contacts" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
