export interface PortfolioItemEN {
  slug: string
  couple: string
  location: string
  date: string
  description: string
  image: string
}

export const portfolioItemsEN: PortfolioItemEN[] = [
  {
    slug: 'dima-tanya',
    couple: 'Dima & Tanya',
    location: 'Mtskheta',
    date: 'June 2024',
    description: 'Wedding ceremony at the ancient Svetitskhoveli Cathedral',
    image: '/images/portfolio/dima-tanya.jpg'
  },
  {
    slug: 'alex-nastya',
    couple: 'Alex & Nastya',
    location: 'Tbilisi',
    date: 'May 2024',
    description: 'Elegant wedding in the heart of Old Tbilisi',
    image: '/images/portfolio/alex-nastya.jpg'
  },
  {
    slug: 'sergey-kristina',
    couple: 'Sergey & Kristina',
    location: 'Tbilisi',
    date: 'April 2024',
    description: 'Intimate ceremony for two in the capital',
    image: '/images/portfolio/sergey-kristina.jpg'
  },
  {
    slug: 'lekso-tamuna',
    couple: 'Lekso & Tamuna',
    location: 'Kakheti',
    date: 'August 2024',
    description: 'Romantic ceremony among the vineyards',
    image: '/images/portfolio/lekso-tamuna.jpg'
  }
]

export const portfolioSlugsEN = ['dima-tanya', 'alex-nastya', 'sergey-kristina', 'lekso-tamuna']

export function getPortfolioItemEN(slug: string): PortfolioItemEN | undefined {
  return portfolioItemsEN.find(p => p.slug === slug)
}
