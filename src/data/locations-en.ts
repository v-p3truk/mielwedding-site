export interface VenueEN {
  slug: string
  name: string
  region: string
  description: string
  features: string[]
  price?: string
  image: string
}

export interface RegionEN {
  slug: string
  title: string
  description: string
  image: string
  venues: VenueEN[]
}

export const regionsEN: RegionEN[] = [
  {
    slug: 'tbilisi',
    title: 'Wedding in Tbilisi',
    description: 'The capital of Georgia offers a unique blend of history, culture, and modernity. The Old Town, Narikala Fortress, sulfur baths — the perfect backdrop for your wedding.',
    image: '/images/locations/tbilisi.jpg',
    venues: []
  },
  {
    slug: 'around-tbilisi',
    title: 'Wedding around Tbilisi',
    description: 'The picturesque surroundings of the capital — Kojori, Mtskheta, Natakhtari — offer stunning views and a peaceful atmosphere.',
    image: '/images/locations/tbilisi-area.jpg',
    venues: [
      {
        slug: 'kojori',
        name: 'Kojori',
        region: 'around-tbilisi',
        description: 'Mountain resort with panoramic views of Tbilisi',
        features: ['Panoramic views', 'Mountain air', 'Restaurants with terraces'],
        price: 'from $1,885',
        image: '/images/locations/kojori.jpg'
      },
      {
        slug: 'mtskheta',
        name: 'Mtskheta',
        region: 'around-tbilisi',
        description: 'Ancient capital of Georgia, UNESCO World Heritage Site',
        features: ['Svetitskhoveli Cathedral', 'Jvari Monastery', 'Historic atmosphere'],
        price: 'from $2,100',
        image: '/images/locations/mtskheta.jpg'
      },
      {
        slug: 'natakhtari',
        name: 'Natakhtari',
        region: 'around-tbilisi',
        description: 'Picturesque suburb with vineyards',
        features: ['Vineyards', 'Rural atmosphere', 'Close to the city'],
        price: 'from $1,950',
        image: '/images/locations/natakhtari.jpg'
      }
    ]
  },
  {
    slug: 'kakheti',
    title: 'Wedding in Kakheti',
    description: 'Georgia\'s wine region — the perfect place for a romantic wedding among vineyards and ancient monasteries.',
    image: '/images/locations/kakheti.jpg',
    venues: [
      {
        slug: 'lopota',
        name: 'Lopota',
        region: 'kakheti',
        description: 'Luxury resort with lake and mountains',
        features: ['Lake', 'Mountains', 'Luxury hotel', 'Spa'],
        price: 'from $3,200',
        image: '/images/locations/lopota.jpg'
      },
      {
        slug: 'kvareli',
        name: 'Kvareli',
        region: 'kakheti',
        description: 'Winemaking center with historic castles',
        features: ['Wineries', 'Castles', 'Wine tastings'],
        price: 'from $2,400',
        image: '/images/locations/kvareli.jpg'
      },
      {
        slug: 'vazisubani',
        name: 'Vazisubani',
        region: 'kakheti',
        description: 'Authentic Georgian village',
        features: ['Traditional architecture', 'Vineyards', 'Hospitality'],
        price: 'from $2,100',
        image: '/images/locations/vazisubani.jpg'
      },
      {
        slug: 'mosmieri',
        name: 'Mosmieri',
        region: 'kakheti',
        description: 'Secluded place among the hills',
        features: ['Seclusion', 'Nature', 'Panoramic views'],
        price: 'from $2,300',
        image: '/images/locations/mosmieri.jpg'
      },
      {
        slug: 'artwine',
        name: 'Artwine',
        region: 'kakheti',
        description: 'Historic complex with winery',
        features: ['Historic estate', 'Own winery', 'Restaurant'],
        price: 'from $2,800',
        image: '/images/locations/artvaini.jpg'
      }
    ]
  },
  {
    slug: 'gudauri-and-kazbegi',
    title: 'Wedding in Gudauri and Kazbegi',
    description: 'Mountain landscapes of the Caucasus, view of Mount Kazbek, Gergeti Church — for those who dream of a wedding in the mountains.',
    image: '/images/locations/kazbegi.jpg',
    venues: []
  }
]

export const regionsSlugsEN = ['tbilisi', 'around-tbilisi', 'kakheti', 'gudauri-and-kazbegi']
export const venuesSlugsEN = ['kojori', 'mtskheta', 'natakhtari', 'lopota', 'kvareli', 'vazisubani', 'mosmieri', 'artwine']

export function getRegionEN(slug: string): RegionEN | undefined {
  return regionsEN.find(r => r.slug === slug)
}

export function getVenueEN(regionSlug: string, venueSlug: string): VenueEN | undefined {
  const region = getRegionEN(regionSlug)
  return region?.venues.find(v => v.slug === venueSlug)
}

export function getAllVenuesEN(): { region: string; venue: string }[] {
  const venues: { region: string; venue: string }[] = []
  regionsEN.forEach(region => {
    region.venues.forEach(venue => {
      venues.push({ region: region.slug, venue: venue.slug })
    })
  })
  return venues
}
