import Link from 'next/link'
import { FileText, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Блог — Miel Wedding',
  description: 'Полезные статьи о свадьбах в Грузии: документы, локации, традиции, советы.',
}

const blogPosts = [
  {
    slug: 'kak-poluchit-svidetelstvo-o-zaklyuchenii-braka-za-1-den',
    title: 'Как получить свидетельство о заключении брака за 1 день',
    excerpt: 'Пошаговая инструкция по быстрой регистрации брака в Грузии',
    date: '15 января 2024',
  },
  {
    slug: 'svadebnye-stili',
    title: 'Свадебные стили: какой выбрать?',
    excerpt: 'Обзор популярных свадебных стилей и как выбрать свой',
    date: '10 января 2024',
  },
  {
    slug: 'nikah-obryad-brakosochetaniya-v-islame',
    title: 'Никах: обряд бракосочетания в исламе',
    excerpt: 'Всё о проведении никаха в Грузии: традиции и организация',
    date: '5 января 2024',
  },
  {
    slug: 'luchshie-mesta-dlya-svadebnoj-czeremonii-v-gruzii',
    title: 'Лучшие места для свадебной церемонии в Грузии',
    excerpt: 'Топ локаций для незабываемой свадьбы',
    date: '28 декабря 2023',
  },
  {
    slug: 'kakie-dokumenty-nuzhny-dlya-registraczii-braka-v-gruzii',
    title: 'Какие документы нужны для регистрации брака в Грузии',
    excerpt: 'Полный список документов и требования',
    date: '20 декабря 2023',
  },
  {
    slug: 'luchshee-vremya-dlya-svadeb-v-gruzii',
    title: 'Лучшее время для свадеб в Грузии',
    excerpt: 'Когда лучше планировать свадьбу: погода, сезон, цены',
    date: '15 декабря 2023',
  },
  {
    slug: 'venchanie-v-gruzii',
    title: 'Венчание в Грузии',
    excerpt: 'Как организовать православное венчание в грузинских храмах',
    date: '10 декабря 2023',
  },
]

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
              <article
                key={post.slug}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-cream relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="h-12 w-12 text-dark/20" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-dark-light text-sm mb-2">{post.date}</p>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-dark-light text-sm mb-4">{post.excerpt}</p>
                  <span className="text-gold font-medium text-sm flex items-center gap-1">
                    Читать далее
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
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
