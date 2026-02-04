import Link from 'next/link'
import { Star, Quote } from 'lucide-react'

export const metadata = {
  title: 'Отзывы — Miel Wedding',
  description: 'Отзывы клиентов о свадебном агентстве Miel Wedding в Грузии.',
}

const reviews = [
  {
    couple: 'Рафаэль и Рима',
    location: 'Тбилиси',
    date: 'Сентябрь 2024',
    text: 'Miel Wedding сделали нашу свадьбу незабываемой. Всё было организовано идеально — от документов до последнего лепестка роз. Команда работала слаженно, учитывала все наши пожелания. Спасибо за волшебный день!',
    rating: 5,
  },
  {
    couple: 'Дмитрий и Анна',
    location: 'Кахетия',
    date: 'Август 2024',
    text: 'Мы мечтали о свадьбе среди виноградников — и Miel Wedding воплотили эту мечту. Всё было продумано до мелочей. Отдельное спасибо за помощь с документами — процесс прошёл гладко.',
    rating: 5,
  },
  {
    couple: 'Александр и Мария',
    location: 'Казбеги',
    date: 'Июль 2024',
    text: 'Горная свадьба с видом на Казбек — это было невероятно! Команда справилась со всеми организационными сложностями. Фотографии получились потрясающие благодаря правильно выбранной локации.',
    rating: 5,
  },
  {
    couple: 'Иван и Светлана',
    location: 'Мцхета',
    date: 'Июнь 2024',
    text: 'Венчание в Светицховели — это было что-то особенное. Miel Wedding помогли с организацией церковной церемонии и всех формальностей. Очень благодарны за профессионализм!',
    rating: 5,
  },
  {
    couple: 'Максим и Екатерина',
    location: 'Тбилиси',
    date: 'Май 2024',
    text: 'Выбрали Miel Wedding по рекомендации друзей и не пожалели. Камерная свадьба для двоих получилась именно такой, как мы хотели. Спасибо за внимание к деталям!',
    rating: 5,
  },
  {
    couple: 'Артём и Ольга',
    location: 'Лопота',
    date: 'Апрель 2024',
    text: 'Свадьба в Лопоте превзошла все ожидания. Luxury уровень организации при разумных ценах. Координатор была на связи 24/7. Рекомендуем всем!',
    rating: 5,
  },
]

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Отзывы</h1>
            <p className="text-lg text-dark-light">
              Что говорят о нас наши клиенты
            </p>
            <div className="flex justify-center gap-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-dark-light mt-2">5.0 на основе {reviews.length} отзывов</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="h-8 w-8 text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{review.couple}</h3>
                    <p className="text-dark-light text-sm">{review.location} • {review.date}</p>
                  </div>
                </div>
                <p className="text-dark-light mb-4">{review.text}</p>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к нашим счастливым парам</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Давайте создадим вашу незабываемую историю любви
          </p>
          <Link href="/kontakty" className="btn-secondary">
            Начать планирование
          </Link>
        </div>
      </section>
    </>
  )
}
