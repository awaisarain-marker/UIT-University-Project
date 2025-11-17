'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createClient } from '@/lib/supabase-client'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import ImageUpload from '@/components/admin/ImageUpload'
import FacultyTabManager from '@/components/admin/FacultyTabManager'

type TabType = 'basic' | 'overview' | 'membership' | 'research' | 'courses' | 'publications'

interface TabItem {
  id: string
  text: string
}

interface TabData {
  heading: string
  description: string
  items: TabItem[]
}
export default function EditFacultyPage() {
  const router = useRouter()
  const params = useParams()
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [loadingData, setLoadingData] = useState(true)
  const [updateStatus, setUpdateStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [activeTab, setActiveTab] = useState<TabType>('basic')
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    bio: '',
    specialization: '',
    image_url: '',
    years_experience: '',
    slug: '',
  })

  // Tab data states
  const [overviewData, setOverviewData] = useState<TabData>({
    heading: 'Overview',
    description: '',
    items: []
  })

  const [membershipData, setMembershipData] = useState<TabData>({
    heading: 'Membership and Affiliation',
    description: '',
    items: []
  })

  const [researchData, setResearchData] = useState<TabData>({
    heading: 'Research Interests',
    description: '',
    items: []
  })

  const [coursesTaughtData, setCoursesTaughtData] = useState<TabData>({
    heading: 'Courses Taught',
    description: '',
    items: []
  })

  const [publicationsData, setPublicationsData] = useState<TabData>({
    heading: 'Publications and Conferences',
    description: '',
    items: []
  })

  useEffect(() => {
    loadFaculty()
  }, [])

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  const loadFaculty = async () => {
    const { data, error } = await supabase
      .from('instructors')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error) {
      console.error('✗ Error loading faculty member:', error)
      router.push('/admin/faculty')
    } else if (data) {
      setFormData({
        full_name: data.full_name || '',
        email: data.email || '',
        phone: data.phone || '',
        bio: data.bio || '',
        specialization: data.specialization || '',
        image_url: data.image_url || '',
        years_experience: data.years_experience?.toString() || '',
        slug: data.slug || generateSlug(data.full_name || ''),
      })

      // Load tab data
      setOverviewData(data.overview_data || { heading: 'Overview', description: '', items: [] })
      setMembershipData(data.membership_data || { heading: 'Membership and Affiliation', description: '', items: [] })
      setResearchData(data.research_data || { heading: 'Research Interests', description: '', items: [] })
      setCoursesTaughtData(data.courses_taught_data || { heading: 'Courses Taught', description: '', items: [] })
      setPublicationsData(data.publications_data || { heading: 'Publications and Conferences', description: '', items: [] })

      console.log('Loaded faculty data:', data)
    }
    setLoadingData(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setUpdateStatus('idle')
    setErrorMessage('')

    console.log('Submitting form data:', formData)

    const { error } = await supabase
      .from('instructors')
      .update({
        ...formData,
        years_experience: formData.years_experience ? parseInt(formData.years_experience) : null,
        // Save tab data
        overview_data: overviewData,
        membership_data: membershipData,
        research_data: researchData,
        courses_taught_data: coursesTaughtData,
        publications_data: publicationsData,
      })
      .eq('id', params.id)

    if (error) {
      console.error('✗ Error updating faculty member:', error)
      setUpdateStatus('error')
      setErrorMessage(error.message)
      setLoading(false)
    } else {
      console.log('✓ Faculty member updated successfully!')
      setUpdateStatus('success')
      setLoading(false)
      // Auto-redirect after 2 seconds
      setTimeout(() => {
        router.push('/admin/faculty')
        router.refresh()
      }, 2000)
    }
  }

  if (loadingData) {
    return (
      <div className="p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading faculty member...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <Link href="/admin/faculty" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Faculty
      </Link>

      <Card>
        <CardHeader>
          <CardTitle>Edit Faculty Member</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('basic')}
              className={`px-4 py-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'basic'
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Basic Info
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Overview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('membership')}
              className={`px-4 py-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'membership'
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Membership
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('research')}
              className={`px-4 py-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'research'
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Research
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('courses')}
              className={`px-4 py-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'courses'
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Courses
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('publications')}
              className={`px-4 py-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'publications'
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Publications
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info Tab */}
            {activeTab === 'basic' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="full_name">Full Name *</Label>
                    <Input
                      id="full_name"
                      required
                      value={formData.full_name}
                      onChange={(e) => {
                        const name = e.target.value
                        setFormData({ 
                          ...formData, 
                          full_name: name,
                          slug: generateSlug(name)
                        })
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialization">Specialization</Label>
                    <select
                      id="specialization"
                      className="w-full px-3 py-2 border rounded-md"
                      value={formData.specialization}
                      onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                    >
                      <option value="">Select specialization</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Business Administration">Business Administration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">URL Slug *</Label>
                  <Input
                    id="slug"
                    required
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="e.g., john-doe"
                  />
                  <p className="text-sm text-gray-500">
                    Profile will be accessible at: /faculty/{formData.slug || 'slug'}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <textarea
                    id="bio"
                    className="w-full min-h-[100px] px-3 py-2 border rounded-md"
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="years_experience">Years of Experience</Label>
                    <Input
                      id="years_experience"
                      type="number"
                      value={formData.years_experience}
                      onChange={(e) => setFormData({ ...formData, years_experience: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <ImageUpload
                    label="Faculty Photo"
                    value={formData.image_url}
                    onChange={(url) => {
                      console.log('Image URL changed to:', url)
                      setFormData({ ...formData, image_url: url })
                    }}
                    folder="faculty"
                  />
                  {formData.image_url && (
                    <div className="text-xs text-gray-600 p-2 bg-gray-50 rounded">
                      <strong>Current Image URL:</strong> {formData.image_url}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <FacultyTabManager
                title="Overview"
                data={overviewData}
                onChange={setOverviewData}
                itemLabel="Point"
                badgeColor="blue"
                placeholder="Enter a brief overview of the faculty member's background, education, and achievements..."
              />
            )}

            {/* Membership Tab */}
            {activeTab === 'membership' && (
              <FacultyTabManager
                title="Membership and Affiliation"
                data={membershipData}
                onChange={setMembershipData}
                itemLabel="Membership"
                badgeColor="green"
                placeholder="Enter information about professional memberships and affiliations..."
              />
            )}

            {/* Research Tab */}
            {activeTab === 'research' && (
              <FacultyTabManager
                title="Research Interests"
                data={researchData}
                onChange={setResearchData}
                itemLabel="Research Area"
                badgeColor="purple"
                placeholder="Enter information about research interests and focus areas..."
              />
            )}

            {/* Courses Tab */}
            {activeTab === 'courses' && (
              <FacultyTabManager
                title="Courses Taught"
                data={coursesTaughtData}
                onChange={setCoursesTaughtData}
                itemLabel="Course"
                badgeColor="orange"
                placeholder="Enter information about courses taught by this faculty member..."
              />
            )}

            {/* Publications Tab */}
            {activeTab === 'publications' && (
              <FacultyTabManager
                title="Publications and Conferences"
                data={publicationsData}
                onChange={setPublicationsData}
                itemLabel="Publication"
                badgeColor="red"
                placeholder="Enter information about publications, research papers, and conference presentations..."
              />
            )}

            {updateStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800 font-medium">✓ Faculty member updated successfully!</p>
              </div>
            )}

            {updateStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-800 font-medium">✗ Error: {errorMessage}</p>
              </div>
            )}

            <div className="flex gap-3">
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Updating...
                  </>
                ) : (
                  'Update Faculty Member'
                )}
              </Button>
              <Link href="/admin/faculty">
                <Button type="button" variant="outline">Cancel</Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
