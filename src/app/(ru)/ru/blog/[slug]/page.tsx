import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blog-posts'

function getBlogPost(slug: string) {
  return blogPosts.find(p => p.slugs.ru === slug)
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slugs.ru,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Статья не найдена — Miel Wedding',
    }
  }

  return {
    title: `${post.title.ru} — Miel Wedding`,
    description: post.excerpt.ru,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const otherPosts = blogPosts.filter((p) => p.slugs.ru !== slug)

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-4 bg-cream-light">
        <div className="container mx-auto px-4">
          <Link
            href="/ru/blog"
            className="inline-flex items-center gap-2 text-dark-light hover:text-dark transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад к блогу
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-dark-light mb-4">
              <Calendar className="h-5 w-5" />
              {post.date}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title.ru}</h1>
            <p className="text-lg text-dark-light">{post.excerpt.ru}</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-dark-light whitespace-pre-line">
              {post.content.ru}
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {otherPosts.length > 0 && (
        <section className="py-16 bg-cream-light">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Другие статьи</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {otherPosts.slice(0, 3).map((p) => (
                <Link
                  key={p.id}
                  href={`/ru/blog/${p.slugs.ru}`}
                  className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <p className="text-dark-light text-sm mb-2">{p.date}</p>
                  <h3 className="font-semibold mb-2 line-clamp-2">{p.title.ru}</h3>
                  <span className="text-gold font-medium text-sm flex items-center gap-1">
                    Читать далее
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать планирование?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Свяжитесь с нами для бесплатной консультации по организации свадьбы в Грузии
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ru/kontakty" className="btn-secondary">
              Связаться с нами
            </Link>
            <a
              href="https://wa.me/995505053424"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white hover:text-dark"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
