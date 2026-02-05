import Link from 'next/link'
import Image from 'next/image'
import { Check, ArrowRight } from 'lucide-react'
import { services } from '@/data/services'

export const metadata = {
  title: 'Services and Prices — Miel Wedding',
  description: 'Wedding services and prices in Georgia. Marriage registration, ceremonies, apostille, and more.',
}

export default function ServicesAndPricesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Services and Prices</h1>
            <p className="text-lg text-dark-light">
              Everything you need for your perfect wedding in Georgia
            </p>
          </div>
        </div>
      </section>

      {/* Main Package */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gold/5 border-2 border-gold rounded-lg p-8 mb-12">
              <div className="text-center mb-6">
                <span className="inline-block bg-gold text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
                <h2 className="text-2xl font-bold mb-2">Wedding Package</h2>
                <p className="text-dark-light">Complete wedding organization in Georgia</p>
                <p className="text-3xl font-bold text-gold mt-4">from $1,885</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  'Official marriage registration',
                  'Wedding coordinator',
                  'Document preparation',
                  'Translation services',
                  'Venue selection assistance',
                  'Vendor recommendations',
                  'Day-of coordination',
                  'Photo session organization',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-gold flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link href="/contacts" className="btn-primary">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Individual Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/uslugi/${service.slugs.en}`}
                className="group bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow block"
              >
                <div className="h-48 relative">
                  <Image
                    src={service.image}
                    alt={service.title.en}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-gold transition-colors">{service.title.en}</h3>
                  <p className="text-gold font-medium mb-3">{service.price}</p>
                  <p className="text-dark-light text-sm mb-4">{service.description.en}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.en.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-dark-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="text-gold font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Transparent Pricing</h2>
            <p className="text-dark-light mb-8">
              Our prices are all-inclusive with no hidden fees. The final cost depends on your chosen services, location, and guest count. We&apos;ll provide a detailed quote after understanding your needs.
            </p>
            <Link href="/contacts" className="btn-primary">
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Wedding?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and personalized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacts" className="btn-secondary">
              Contact Us
            </Link>
            <a
              href="https://wa.me/995505053424"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-3 rounded-md font-medium hover:bg-[#20bd5a] transition-colors inline-flex items-center gap-2"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
