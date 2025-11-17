import { createServerSupabaseClient } from '@/lib/supabase-server'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Mail, Phone, Award } from 'lucide-react'

interface PageProps {
  params: Promise<{ slug: string }>
}

interface TabItem {
  id: string
  text: string
  type?: 'point' | 'heading' | 'description' | 'image'
  order?: number
  imageUrl?: string
}

interface TabData {
  heading: string
  description: string
  items: TabItem[]
}

// Helper function to render flexible content blocks
function renderTabContent(data: TabData, badgeColor: string) {
  // Check if using new flexible format
  const hasFlexibleFormat = data.items.length > 0 && (data.items[0] as any).type

  if (hasFlexibleFormat) {
    // New format: render blocks in order
    const blocks = [...data.items].sort((a, b) => (a.order || 0) - (b.order || 0))
    let pointCounter = 0

    return blocks.map((block) => {
      if (block.type === 'heading') {
        return (
          <h3 key={block.id} className="text-xl font-bold text-gray-900 mt-6 mb-3">
            {block.text}
          </h3>
        )
      } else if (block.type === 'description') {
        return (
          <p key={block.id} className="text-gray-700 leading-relaxed mb-4">
            {block.text}
          </p>
        )
      } else if (block.type === 'image') {
        return (
          <div key={block.id} className="my-6">
            {block.imageUrl && (
              <img 
                src={block.imageUrl} 
                alt={block.text || 'Content image'} 
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            )}
            {block.text && (
              <p className="text-sm text-gray-600 italic mt-2 text-center">
                {block.text}
              </p>
            )}
          </div>
        )
      } else {
        // point
        pointCounter++
        return (
          <div key={block.id} className="flex gap-3 items-start mb-3">
            <span className={`flex-shrink-0 w-8 h-8 ${badgeColor} text-white rounded-full flex items-center justify-center font-semibold text-sm`}>
              {pointCounter}
            </span>
            <span className="flex-1 text-gray-700 pt-1">{block.text}</span>
          </div>
        )
      }
    })
  } else {
    // Old format: render heading, description, then points
    return (
      <>
        {data.heading && (
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {data.heading}
          </h2>
        )}
        {data.description && (
          <p className="text-gray-700 leading-relaxed mb-6">
            {data.description}
          </p>
        )}
        {data.items.length > 0 && (
          <ul className="space-y-3">
            {data.items.map((item, index) => (
              <li key={item.id} className="flex gap-3 items-start">
                <span className={`flex-shrink-0 w-8 h-8 ${badgeColor} text-white rounded-full flex items-center justify-center font-semibold text-sm`}>
                  {index + 1}
                </span>
                <span className="flex-1 text-gray-700 pt-1">{item.text}</span>
              </li>
            ))}
          </ul>
        )}
      </>
    )
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const supabase = await createServerSupabaseClient()
  
  const { data: faculty } = await supabase
    .from('instructors')
    .select('full_name, bio, specialization')
    .eq('slug', resolvedParams.slug)
    .single()

  if (!faculty) {
    return {
      title: 'Faculty Member Not Found',
    }
  }

  return {
    title: `${faculty.full_name} - Faculty Profile`,
    description: faculty.bio || `${faculty.full_name}, ${faculty.specialization} at UIT University`,
  }
}

export default async function FacultyProfilePage({ params }: PageProps) {
  const resolvedParams = await params
  const supabase = await createServerSupabaseClient()
  
  const { data: faculty, error } = await supabase
    .from('instructors')
    .select('*')
    .eq('slug', resolvedParams.slug)
    .single()

  if (error || !faculty) {
    notFound()
  }

  const overviewData: TabData = faculty.overview_data || { heading: 'Overview', description: '', items: [] }
  const membershipData: TabData = faculty.membership_data || { heading: 'Membership and Affiliation', description: '', items: [] }
  const researchData: TabData = faculty.research_data || { heading: 'Research Interests', description: '', items: [] }
  const coursesTaughtData: TabData = faculty.courses_taught_data || { heading: 'Courses Taught', description: '', items: [] }
  const publicationsData: TabData = faculty.publications_data || { heading: 'Publications and Conferences', description: '', items: [] }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Faculty Photo */}
            <div className="flex-shrink-0">
              {faculty.image_url ? (
                <img
                  src={faculty.image_url}
                  alt={faculty.full_name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gray-200"
                />
              ) : (
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">
                    {faculty.full_name?.charAt(0) || 'F'}
                  </span>
                </div>
              )}
            </div>

            {/* Faculty Info */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {faculty.full_name}
              </h1>
              
              {faculty.specialization && (
                <div className="flex items-center gap-2 text-lg text-gray-600 mb-3">
                  <Award className="w-5 h-5" />
                  <span>{faculty.specialization}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 text-gray-600 mb-4">
                {faculty.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${faculty.email}`} className="hover:text-blue-600">
                      {faculty.email}
                    </a>
                  </div>
                )}
                {faculty.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <a href={`tel:${faculty.phone}`} className="hover:text-blue-600">
                      {faculty.phone}
                    </a>
                  </div>
                )}
              </div>

              {faculty.bio && (
                <p className="text-gray-700 leading-relaxed">
                  {faculty.bio}
                </p>
              )}

              {faculty.years_experience && (
                <div className="mt-4 inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-lg">
                  <span className="font-semibold">{faculty.years_experience}</span> years of experience
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Tab Navigation */}
          <div className="border-b">
            <nav className="flex overflow-x-auto">
              <a href="#overview" className="px-6 py-4 text-sm font-medium text-gray-900 border-b-2 border-blue-600 whitespace-nowrap">
                Overview
              </a>
              <a href="#membership" className="px-6 py-4 text-sm font-medium text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300 whitespace-nowrap">
                Membership
              </a>
              <a href="#research" className="px-6 py-4 text-sm font-medium text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300 whitespace-nowrap">
                Research
              </a>
              <a href="#courses" className="px-6 py-4 text-sm font-medium text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300 whitespace-nowrap">
                Courses
              </a>
              <a href="#publications" className="px-6 py-4 text-sm font-medium text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300 whitespace-nowrap">
                Publications
              </a>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-8 space-y-12">
            {/* Overview Tab */}
            <section id="overview">
              {renderTabContent(overviewData, 'bg-blue-600')}
            </section>

            {/* Membership Tab */}
            <section id="membership">
              {renderTabContent(membershipData, 'bg-green-600')}
            </section>

            {/* Research Tab */}
            <section id="research">
              {renderTabContent(researchData, 'bg-purple-600')}
            </section>

            {/* Courses Tab */}
            <section id="courses">
              {renderTabContent(coursesTaughtData, 'bg-orange-600')}
            </section>

            {/* Publications Tab */}
            <section id="publications">
              {renderTabContent(publicationsData, 'bg-red-600')}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static params for all faculty members
export async function generateStaticParams() {
  const supabase = await createServerSupabaseClient()
  
  const { data: faculty } = await supabase
    .from('instructors')
    .select('slug')
    .not('slug', 'is', null)

  return faculty?.map((member) => ({
    slug: member.slug,
  })) || []
}
