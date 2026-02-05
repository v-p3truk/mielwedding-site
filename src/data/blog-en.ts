export interface BlogPostEN {
  slug: string
  title: string
  excerpt: string
  date: string
  content?: string
  image: string
}

export const blogPostsEN: BlogPostEN[] = [
  {
    slug: 'wedding-in-georgia',
    title: 'Wedding in Georgia: Complete Guide',
    excerpt: 'Everything you need to know about getting married in Georgia',
    date: 'January 20, 2024',
    image: '/images/blog/georgia.png'
  },
  {
    slug: 'how-to-get-a-marriage-certificate-in-one-day',
    title: 'How to Get a Marriage Certificate in One Day',
    excerpt: 'Step-by-step guide to fast marriage registration in Georgia',
    date: 'January 15, 2024',
    image: '/images/blog/certificate.jpeg'
  },
  {
    slug: 'nikah-the-marriage-ceremony-in-islam',
    title: 'Nikah: The Marriage Ceremony in Islam',
    excerpt: 'Everything about organizing a Nikah ceremony in Georgia',
    date: 'January 5, 2024',
    image: '/images/blog/nikah.jpeg'
  },
  {
    slug: 'best-places-for-a-wedding-ceremony-in-georgia',
    title: 'Best Places for a Wedding Ceremony in Georgia',
    excerpt: 'Top locations for an unforgettable wedding',
    date: 'December 28, 2023',
    image: '/images/blog/venues.jpeg'
  },
  {
    slug: 'what-documents-are-needed-to-register-a-marriage-in-georgia',
    title: 'What Documents Are Needed to Register a Marriage in Georgia',
    excerpt: 'Complete list of documents and requirements',
    date: 'December 20, 2023',
    image: '/images/blog/documents.jpeg'
  },
  {
    slug: 'best-time-for-weddings-in-georgia',
    title: 'Best Time for Weddings in Georgia',
    excerpt: 'When is the best time to plan a wedding: weather, season, prices',
    date: 'December 15, 2023',
    image: '/images/blog/seasons.jpg'
  },
  {
    slug: 'church-wedding-in-georgia',
    title: 'Church Wedding in Georgia',
    excerpt: 'How to organize an Orthodox wedding in Georgian churches',
    date: 'December 10, 2023',
    image: '/images/blog/venchanie.webp'
  }
]

export const blogSlugsEN = [
  'wedding-in-georgia',
  'how-to-get-a-marriage-certificate-in-one-day',
  'nikah-the-marriage-ceremony-in-islam',
  'best-places-for-a-wedding-ceremony-in-georgia',
  'what-documents-are-needed-to-register-a-marriage-in-georgia',
  'best-time-for-weddings-in-georgia',
  'church-wedding-in-georgia'
]

export function getBlogPostEN(slug: string): BlogPostEN | undefined {
  return blogPostsEN.find(p => p.slug === slug)
}
