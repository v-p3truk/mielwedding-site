import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { portfolioItems } from '@/data/portfolio'

export const metadata = {
  title: 'Портфолио — Miel Wedding',
  description: 'Реальные свадьбы, организованные Miel Wedding в Грузии. Истории любви наших клиентов.',
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Портфолио</h1>
            <p className="text-lg text-dark-light">
              Каждая свадьба — это уникальная история. Вот некоторые из них.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <Link
                key={item.id}
                href={`/ru/portfolio/${item.slugs.ru}`}
                className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-64 relative">
                  <Image
                    src={item.image}
                    alt={item.couple.ru}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{item.couple.ru}</h3>
                  <p className="text-gold text-sm mb-2">{item.location.ru} • {item.date}</p>
                  <p className="text-dark-light text-sm">{item.description.ru}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Хотите так же?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Давайте создадим вашу незабываемую историю любви
          </p>
          <Link href="/kontakty" className="btn-secondary inline-flex items-center gap-2">
            Начать планирование
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
