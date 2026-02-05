export interface ServiceEN {
  slug: string
  title: string
  price: string
  description: string
  features: string[]
  image: string
}

export const servicesEN: ServiceEN[] = [
  {
    slug: 'apostille',
    title: 'Apostille',
    price: 'from $350',
    description: 'Document legalization for international marriage recognition',
    features: [
      'Apostille on marriage certificate',
      'Document translation',
      'Notarization',
      'Procedure consultation'
    ],
    image: '/images/services/apostil.jpg'
  },
  {
    slug: 'bridal-makeup-and-hair-in-tbilisi',
    title: 'Bridal Makeup and Hair',
    price: 'from $200',
    description: 'Professional bridal beauty services in Tbilisi',
    features: [
      'Professional makeup artist',
      'Hairstyling',
      'Trial session',
      'Touch-ups during the day'
    ],
    image: '/images/services/makeup.jpg'
  },
  {
    slug: 'nikah',
    title: 'Nikah Ceremony',
    price: 'from $550',
    description: 'Traditional Muslim wedding ceremony organization',
    features: [
      'Imam arrangement',
      'Ceremony organization',
      'Traditional decoration',
      'Ritual consultation'
    ],
    image: '/images/services/nikah.jpg'
  },
  {
    slug: 'wedding-photoshoot-in-tbilisi',
    title: 'Wedding Photoshoot',
    price: 'from $400',
    description: 'Professional wedding photography in scenic Tbilisi locations',
    features: [
      'Professional photographer',
      'Multiple locations',
      'Photo editing',
      'Online gallery'
    ],
    image: '/images/services/photoshoot.jpg'
  }
]

export const servicesSlugsEN = [
  'apostille',
  'bridal-makeup-and-hair-in-tbilisi',
  'nikah',
  'wedding-photoshoot-in-tbilisi'
]

export function getServiceEN(slug: string): ServiceEN | undefined {
  return servicesEN.find(s => s.slug === slug)
}
