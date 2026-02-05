import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { blogPostsEN } from '@/data/blog-en'

export const metadata = {
  title: 'Blog — Miel Wedding',
  description: 'Useful articles about weddings in Georgia: documents, locations, traditions, tips.',
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-dark-light">
              Useful articles about weddings in Georgia: documents, locations, traditions
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPostsEN.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow block"
              >
                <div className="h-48 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-dark-light text-sm mb-2">{post.date}</p>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-gold transition-colors">{post.title}</h3>
                  <p className="text-dark-light text-sm mb-4">{post.excerpt}</p>
                  <span className="text-gold font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more
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
