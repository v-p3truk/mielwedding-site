import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart, FileCheck, MapPin, Star } from 'lucide-react'
import { services } from '@/data/services'
import { regions } from '@/data/locations'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-dark/70 to-dark/40 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Свадьба в Грузии — ваша история любви
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Официальная регистрация брака за 1 день. Организация церемоний в самых живописных местах Грузии.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakty" className="btn-primary inline-flex items-center justify-center gap-2">
                Связаться с нами
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/uslugi-i-czeny" className="btn-outline border-white text-white hover:bg-white hover:text-dark inline-flex items-center justify-center gap-2">
                Узнать цены
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Регистрация за 1 день</h3>
              <p className="text-dark-light">
                Официальное свидетельство о браке с апостилем, признаваемое во всём мире
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Уникальные локации</h3>
              <p className="text-dark-light">
                Горы, виноградники, древние храмы — выберите идеальное место для вашей церемонии
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Полное сопровождение</h3>
              <p className="text-dark-light">
                От документов до банкета — мы берём на себя все заботы
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Наши услуги</h2>
            <p className="text-dark-light max-w-2xl mx-auto">
              Мы предлагаем полный спектр услуг для организации вашей идеальной свадьбы в Грузии
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/uslugi-i-czeny/${service.slug}`}
                className="group bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-cream relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-dark/20" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dark-light text-sm mb-3">{service.description}</p>
                  <p className="text-gold font-semibold">{service.price}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/uslugi-i-czeny" className="btn-outline inline-flex items-center gap-2">
              Все услуги
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Локации для свадьбы</h2>
            <p className="text-dark-light max-w-2xl mx-auto">
              Грузия предлагает невероятное разнообразие мест для проведения свадебной церемонии
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((region) => (
              <Link
                key={region.slug}
                href={`/lokaczii/${region.slug}`}
                className="group relative h-64 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/30 transition-colors z-10" />
                <div className="absolute inset-0 bg-cream" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{region.title}</h3>
                    <p className="text-sm opacity-90">{region.venues.length > 0 ? `${region.venues.length} площадок` : 'Подробнее'}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/lokaczii" className="btn-outline inline-flex items-center gap-2">
              Все локации
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-dark mb-6 italic">
              &ldquo;Miel Wedding сделали нашу свадьбу незабываемой. Всё было организовано идеально — от документов до последнего лепестка роз. Спасибо за волшебный день!&rdquo;
            </blockquote>
            <p className="text-dark-light font-medium">— Рафаэль и Рима, Тбилиси 2024</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы начать планирование?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, чтобы обсудить детали вашей свадьбы. Мы ответим на все вопросы и поможем выбрать идеальную программу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakty" className="btn-secondary">
              Связаться с нами
            </Link>
            <a
              href="https://wa.me/995505053424"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white hover:text-dark"
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
