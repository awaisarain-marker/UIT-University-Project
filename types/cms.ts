// TypeScript types for CMS content

export interface Course {
  _id: string
  title: string
  description: string
  duration: string
  level: 'Undergraduate' | 'Graduate' | 'Short Course'
  price: string
  image: {
    asset: {
      _id: string
      url: string
    }
  }
  slug: {
    current: string
  }
  _createdAt: string
}

export interface Testimonial {
  _id: string
  quote: string
  studentName: string
  program: string
  rating: number
  image?: {
    asset: {
      _id: string
      url: string
    }
  }
  _createdAt: string
}

export interface BlogPost {
  _id: string
  title: string
  excerpt: string
  content: any[] // Rich text content
  category: string
  image: {
    asset: {
      _id: string
      url: string
    }
  }
  slug: {
    current: string
  }
  publishedAt: string
  _createdAt: string
}

export interface Event {
  _id: string
  title: string
  description: string
  eventDate: string
  location: string
  image: {
    asset: {
      _id: string
      url: string
    }
  }
  slug: {
    current: string
  }
  _createdAt: string
}

export interface HeroContent {
  _id: string
  title: string
  subtitle: string
  images: Array<{
    asset: {
      _id: string
      url: string
    }
  }>
}

export interface Faculty {
  _id: string
  name: string
  position: string
  department: string
  bio: string
  image: {
    asset: {
      _id: string
      url: string
    }
  }
  email: string
  _createdAt: string
}