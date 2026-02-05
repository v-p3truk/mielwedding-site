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
        <Image
          src="/images/hero/hero-v2.jpeg"
          alt="Свадьба в Грузии"
          fill
          className="object-cover"
          priority
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
              <Link href="/ru/kontakty" className="btn-primary inline-flex items-center justify-center gap-2">
                Связаться с нами
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/ru/uslugi-i-czeny" className="bg-white text-dark px-6 py-3 rounded-md font-medium hover:bg-cream transition-colors inline-flex items-center justify-center gap-2">
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
                key={service.id}
                href={`/ru/uslugi-i-czeny/${service.slugs.ru}`}
                className="group bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 relative">
                  <Image
                    src={service.image}
                    alt={service.title.ru}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
                    {service.title.ru}
                  </h3>
                  <p className="text-dark-light text-sm mb-3">{service.description.ru}</p>
                  <p className="text-gold font-semibold">{service.price}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/ru/uslugi-i-czeny" className="btn-outline inline-flex items-center gap-2">
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
                key={region.id}
                href={`/ru/lokaczii/${region.slugs.ru}`}
                className="group relative h-64 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/30 transition-colors z-10" />
                <Image
                  src={region.image}
                  alt={region.title.ru}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{region.title.ru}</h3>
                    <p className="text-sm opacity-90">{region.venues.length > 0 ? `${region.venues.length} площадок` : 'Подробнее'}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/ru/lokaczii" className="btn-outline inline-flex items-center gap-2">
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
            <Link href="/ru/kontakty" className="btn-secondary">
              Связаться с нами
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
