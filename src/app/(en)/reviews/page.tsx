import Link from 'next/link'
import { Star, Quote } from 'lucide-react'

export const metadata = {
  title: 'Reviews — Miel Wedding',
  description: 'Client reviews about Miel Wedding agency in Georgia.',
}

const reviews = [
  {
    couple: 'Rafael & Rima',
    location: 'Tbilisi',
    date: 'September 2024',
    text: 'Miel Wedding made our wedding unforgettable. Everything was organized perfectly — from documents to the last rose petal. The team worked seamlessly and considered all our wishes. Thank you for the magical day!',
    rating: 5,
  },
  {
    couple: 'Dmitry & Anna',
    location: 'Kakheti',
    date: 'August 2024',
    text: 'We dreamed of a wedding among vineyards — and Miel Wedding made this dream come true. Everything was thought out to the smallest detail. Special thanks for the help with documents — the process went smoothly.',
    rating: 5,
  },
  {
    couple: 'Alexander & Maria',
    location: 'Kazbegi',
    date: 'July 2024',
    text: 'A mountain wedding with a view of Kazbek — it was incredible! The team handled all the organizational challenges. The photos turned out amazing thanks to the perfectly chosen location.',
    rating: 5,
  },
  {
    couple: 'Ivan & Svetlana',
    location: 'Mtskheta',
    date: 'June 2024',
    text: 'The wedding ceremony at Svetitskhoveli was something special. Miel Wedding helped with organizing the church ceremony and all the formalities. Very grateful for the professionalism!',
    rating: 5,
  },
  {
    couple: 'Maxim & Ekaterina',
    location: 'Tbilisi',
    date: 'May 2024',
    text: 'We chose Miel Wedding on a friend\'s recommendation and didn\'t regret it. The intimate wedding for two turned out exactly as we wanted. Thank you for the attention to detail!',
    rating: 5,
  },
  {
    couple: 'Artem & Olga',
    location: 'Lopota',
    date: 'April 2024',
    text: 'The wedding at Lopota exceeded all expectations. Luxury level organization at reasonable prices. The coordinator was available 24/7. We recommend to everyone!',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Reviews</h1>
            <p className="text-lg text-dark-light">
              What our clients say about us
            </p>
            <div className="flex justify-center gap-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-dark-light mt-2">5.0 based on {reviews.length} reviews</p>
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
          <h2 className="text-3xl font-bold mb-4">Join Our Happy Couples</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Let us create your unforgettable love story
          </p>
          <Link href="/contacts" className="btn-secondary">
            Start Planning
          </Link>
        </div>
      </section>
    </>
  )
}
