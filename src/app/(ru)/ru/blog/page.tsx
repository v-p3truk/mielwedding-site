import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blog-posts'

export const metadata = {
  title: 'Блог — Miel Wedding',
  description: 'Полезные статьи о свадьбах в Грузии: документы, локации, традиции, советы.',
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Блог</h1>
            <p className="text-lg text-dark-light">
              Полезные статьи о свадьбах в Грузии: документы, локации, традиции
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/ru/blog/${post.slugs.ru}`}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 relative">
                  <Image
                    src={post.image}
                    alt={post.title.ru}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-dark-light text-sm mb-2">{post.date}</p>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title.ru}</h3>
                  <p className="text-dark-light text-sm mb-4">{post.excerpt.ru}</p>
                  <span className="text-gold font-medium text-sm flex items-center gap-1">
                    Читать далее
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Свяжитесь с нами — мы ответим на все ваши вопросы
          </p>
          <Link href="/kontakty" className="btn-secondary">
            Задать вопрос
          </Link>
        </div>
      </section>
    </>
  )
}
