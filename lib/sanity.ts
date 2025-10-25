import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  apiVersion: '2024-01-01',
})

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries for different content types
export const queries = {
  // Get all courses
  courses: `*[_type == "course"] | order(_createdAt desc) {
    _id,
    title,
    description,
    duration,
    level,
    price,
    image,
    slug,
    _createdAt
  }`,

  // Get all testimonials
  testimonials: `*[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    quote,
    studentName,
    program,
    rating,
    image,
    _createdAt
  }`,

  // Get all blog posts
  blogPosts: `*[_type == "blogPost"] | order(_createdAt desc) {
    _id,
    title,
    excerpt,
    content,
    category,
    image,
    slug,
    publishedAt,
    _createdAt
  }`,

  // Get all events
  events: `*[_type == "event"] | order(eventDate asc) {
    _id,
    title,
    description,
    eventDate,
    location,
    image,
    slug,
    _createdAt
  }`,

  // Get banner/hero content
  heroContent: `*[_type == "heroContent"][0] {
    _id,
    title,
    subtitle,
    images[] {
      asset->{
        _id,
        url
      }
    }
  }`,

  // Get faculty/instructors
  faculty: `*[_type == "faculty"] | order(_createdAt desc) {
    _id,
    name,
    position,
    department,
    bio,
    image,
    email,
    _createdAt
  }`
}

// Fetch functions
export async function getCourses() {
  try {
    return await client.fetch(queries.courses)
  } catch (error) {
    console.error('Error fetching courses:', error)
    return []
  }
}

export async function getTestimonials() {
  try {
    return await client.fetch(queries.testimonials)
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getBlogPosts() {
  try {
    return await client.fetch(queries.blogPosts)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getEvents() {
  try {
    return await client.fetch(queries.events)
  } catch (error) {
    console.error('Error fetching events:', error)
    return []
  }
}

export async function getHeroContent() {
  try {
    return await client.fetch(queries.heroContent)
  } catch (error) {
    console.error('Error fetching hero content:', error)
    return null
  }
}

export async function getFaculty() {
  try {
    return await client.fetch(queries.faculty)
  } catch (error) {
    console.error('Error fetching faculty:', error)
    return []
  }
}