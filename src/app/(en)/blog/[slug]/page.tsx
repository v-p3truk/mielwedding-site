import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react'
import { blogPostsEN, blogSlugsEN, getBlogPostEN } from '@/data/blog-en'

export async function generateStaticParams() {
  return blogSlugsEN.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostEN(slug)

  if (!post) {
    return {
      title: 'Article Not Found — Miel Wedding',
    }
  }

  return {
    title: `${post.title} — Miel Wedding`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostEN(slug)

  if (!post) {
    notFound()
  }

  const otherPosts = blogPostsEN.filter((p) => p.slug !== slug)

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-4 bg-cream-light">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-dark-light hover:text-dark transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg text-dark-light">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-dark-light">
              Georgia has become one of the most popular wedding destinations for international couples. With its stunning landscapes, rich culture, and straightforward marriage process, it&apos;s no wonder more and more people choose to say &quot;I do&quot; here.
            </p>
            <p className="text-dark-light mt-4">
              In this article, we&apos;ll cover everything you need to know about getting married in Georgia, from documents to the best venues.
            </p>
            <h2 className="text-xl font-bold mt-8 mb-4">Why Choose Georgia?</h2>
            <ul className="list-disc pl-6 text-dark-light space-y-2">
              <li>Fast and simple marriage registration (just 1 day!)</li>
              <li>No residency requirements for foreigners</li>
              <li>Marriages are internationally recognized</li>
              <li>Beautiful and diverse locations</li>
              <li>Affordable compared to other destinations</li>
            </ul>
            <h2 className="text-xl font-bold mt-8 mb-4">The Process</h2>
            <p className="text-dark-light">
              Getting married in Georgia is straightforward. You&apos;ll need your passports, and depending on your country, potentially translated documents with apostille. Our team handles all the paperwork so you can focus on enjoying your special day.
            </p>
            <p className="text-dark-light mt-4">
              Contact us to learn more about how we can help make your wedding in Georgia perfect.
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {otherPosts.length > 0 && (
        <section className="py-16 bg-cream-light">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {otherPosts.slice(0, 3).map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <p className="text-dark-light text-sm mb-2">{p.date}</p>
                  <h3 className="font-semibold mb-2 line-clamp-2">{p.title}</h3>
                  <span className="text-gold font-medium text-sm flex items-center gap-1">
                    Read more
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
          <h2 className="text-3xl font-bold mb-4">Ready to Start Planning?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Contact us for a free consultation about your wedding in Georgia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacts" className="btn-secondary">
              Contact Us
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
