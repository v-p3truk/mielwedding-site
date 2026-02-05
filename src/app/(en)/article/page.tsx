import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogPostsEN } from '@/data/blog-en'

export const metadata = {
  title: 'Articles — Miel Wedding',
  description: 'Useful articles about weddings in Georgia: documents, locations, traditions, tips.',
}

export default function ArticlePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Articles</h1>
            <p className="text-lg text-dark-light">
              Useful guides about weddings in Georgia
            </p>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {blogPostsEN.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <p className="text-dark-light text-sm mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-dark-light mb-4">{post.excerpt}</p>
                <span className="text-gold font-medium text-sm flex items-center gap-1">
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Contact us — we&apos;ll answer all your questions
          </p>
          <Link href="/contacts" className="btn-secondary">
            Ask a Question
          </Link>
        </div>
      </section>
    </>
  )
}
