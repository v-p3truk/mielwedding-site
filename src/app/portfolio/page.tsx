import Link from 'next/link'
import { Heart, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Портфолио — Miel Wedding',
  description: 'Реальные свадьбы, организованные Miel Wedding в Грузии. Истории любви наших клиентов.',
}

const portfolioItems = [
  {
    slug: 'rafael-rima',
    couple: 'Рафаэль и Рима',
    location: 'Тбилиси',
    date: 'Сентябрь 2024',
    description: 'Элегантная свадьба в историческом центре Тбилиси',
  },
  {
    slug: 'lekso-tamuna',
    couple: 'Лексо и Тамуна',
    location: 'Кахетия',
    date: 'Август 2024',
    description: 'Романтическая церемония среди виноградников',
  },
  {
    slug: 'fridon-sofiya',
    couple: 'Фридон и София',
    location: 'Казбеги',
    date: 'Июль 2024',
    description: 'Горная свадьба с видом на Казбек',
  },
  {
    slug: 'dima-tanya',
    couple: 'Дима и Таня',
    location: 'Мцхета',
    date: 'Июнь 2024',
    description: 'Венчание в древнем храме Светицховели',
  },
  {
    slug: 'aleksej-elena',
    couple: 'Алексей и Елена',
    location: 'Лопота',
    date: 'Май 2024',
    description: 'Luxury свадьба на берегу озера',
  },
  {
    slug: 'sergej-kristina',
    couple: 'Сергей и Кристина',
    location: 'Тбилиси',
    date: 'Апрель 2024',
    description: 'Камерная церемония для двоих',
  },
]

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
              <div
                key={item.slug}
                className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-64 bg-cream relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-dark/20" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{item.couple}</h3>
                  <p className="text-gold text-sm mb-2">{item.location} • {item.date}</p>
                  <p className="text-dark-light text-sm">{item.description}</p>
                </div>
              </div>
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
