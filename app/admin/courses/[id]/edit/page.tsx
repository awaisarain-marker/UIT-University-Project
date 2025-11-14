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
import SemesterCoursesManager from '@/components/admin/SemesterCoursesManager'
import PEOsPLOsManager from '@/components/admin/PEOsPLOsManager'
import EligibilityManager from '@/components/admin/EligibilityManager'

type TabType = 'overview' | 'courses' | 'peos-plos' | 'eligibility'

interface Course {
  id: string
  course_code: string
  course_title: string
  credit_hours_theory: number
  credit_hours_lab: number
  credit_hours_total: number
}

interface Semester {
  semester_number: number
  courses: Course[]
}

interface PEOItem {
  id: string
  text: string
}

interface PLOItem {
  id: string
  text: string
}

interface PEOsPLOsData {
  peo_heading: string
  peo_description: string
  peos: PEOItem[]
  plo_heading: string
  plo_description: string
  plos: PLOItem[]
  mapping_image_url: string
}

interface TestCriteriaItem {
  id: string
  text: string
}

interface AcademicRequirement {
  id: string
  text: string
}

interface EligibilityData {
  test_criteria_heading: string
  test_criteria_description: string
  test_criteria_items: TestCriteriaItem[]
  academic_requirements_heading: string
  academic_requirements: AcademicRequirement[]
}

export default function EditCoursePage() {
  const router = useRouter()
  const params = useParams()
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [loadingData, setLoadingData] = useState(true)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const [semesters, setSemesters] = useState<Semester[]>([])
  const [peosPlosData, setPeosPlosData] = useState<PEOsPLOsData>({
    peo_heading: '',
    peo_description: '',
    peos: [],
    plo_heading: '',
    plo_description: '',
    plos: [],
    mapping_image_url: ''
  })
  const [eligibilityData, setEligibilityData] = useState<EligibilityData>({
    test_criteria_heading: '',
    test_criteria_description: '',
    test_criteria_items: [],
    academic_requirements_heading: '',
    academic_requirements: []
  })
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    level: 'beginner',
    price: '',
    category: '',
    image_url: '',
    max_students: '',
    start_date: '',
    end_date: '',
    is_active: true,
    // Overview tab - Program Overview
    program_overview_heading: '',
    program_overview_paragraph: '',
    // Overview tab - Degree Requirements
    duration_years: '',
    number_of_semesters: '',
    courses_per_semester: '',
    total_credit_hours: '',
    total_number_of_courses: '',
    // Courses tab
    course_content: '',
  })

  useEffect(() => {
    loadCourse()
  }, [])

  const loadCourse = async () => {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error) {
      console.error('✗ Error loading course:', error)
      router.push('/admin/courses')
    } else if (data) {
      setFormData({
        title: data.title || '',
        description: data.description || '',
        duration: data.duration || '',
        level: data.level || 'beginner',
        price: data.price?.toString() || '',
        category: data.category || '',
        image_url: data.image_url || '',
        max_students: data.max_students?.toString() || '',
        start_date: data.start_date || '',
        end_date: data.end_date || '',
        is_active: data.is_active ?? true,
        program_overview_heading: data.program_overview_heading || '',
        program_overview_paragraph: data.program_overview_paragraph || '',
        duration_years: data.duration_years?.toString() || '',
        number_of_semesters: data.number_of_semesters?.toString() || '',
        courses_per_semester: data.courses_per_semester || '',
        total_credit_hours: data.total_credit_hours?.toString() || '',
        total_number_of_courses: data.total_number_of_courses || '',
        course_content: data.course_content || '',
      })

      // Load PEOs and PLOs data
      setPeosPlosData({
        peo_heading: data.peo_heading || '',
        peo_description: data.peo_description || '',
        peos: data.peos || [],
        plo_heading: data.plo_heading || '',
        plo_description: data.plo_description || '',
        plos: data.plos || [],
        mapping_image_url: data.mapping_image_url || ''
      })

      // Load Eligibility data
      setEligibilityData({
        test_criteria_heading: data.test_criteria_heading || '',
        test_criteria_description: data.test_criteria_description || '',
        test_criteria_items: data.test_criteria_items || [],
        academic_requirements_heading: data.academic_requirements_heading || '',
        academic_requirements: data.academic_requirements || []
      })
    }

    // Load semester courses
    const { data: semesterData, error: semesterError } = await supabase
      .from('semester_courses')
      .select('*')
      .eq('course_id', params.id)
      .order('semester_number', { ascending: true })
      .order('display_order', { ascending: true })

    if (!semesterError && semesterData) {
      // Group courses by semester
      const groupedSemesters: { [key: number]: Course[] } = {}
      
      semesterData.forEach((course: any) => {
        if (!groupedSemesters[course.semester_number]) {
          groupedSemesters[course.semester_number] = []
        }
        groupedSemesters[course.semester_number].push({
          id: course.id,
          course_code: course.course_code || '',
          course_title: course.course_title || '',
          credit_hours_theory: course.credit_hours_theory || 0,
          credit_hours_lab: course.credit_hours_lab || 0,
          credit_hours_total: course.credit_hours_total || 0
        })
      })

      // Convert to array format
      const semestersArray: Semester[] = Object.keys(groupedSemesters)
        .map(key => ({
          semester_number: parseInt(key),
          courses: groupedSemesters[parseInt(key)]
        }))
        .sort((a, b) => a.semester_number - b.semester_number)

      setSemesters(semestersArray)
    }

    setLoadingData(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')
    setErrorMessage('')

    console.log('Updating course:', formData)

    // Update the course
    const { error: courseError } = await supabase
      .from('courses')
      .update({
        ...formData,
        price: parseFloat(formData.price) || 0,
        max_students: formData.max_students ? parseInt(formData.max_students) : null,
        // PEOs and PLOs data
        peo_heading: peosPlosData.peo_heading,
        peo_description: peosPlosData.peo_description,
        peos: peosPlosData.peos,
        plo_heading: peosPlosData.plo_heading,
        plo_description: peosPlosData.plo_description,
        plos: peosPlosData.plos,
        mapping_image_url: peosPlosData.mapping_image_url,
        // Eligibility data
        test_criteria_heading: eligibilityData.test_criteria_heading,
        test_criteria_description: eligibilityData.test_criteria_description,
        test_criteria_items: eligibilityData.test_criteria_items,
        academic_requirements_heading: eligibilityData.academic_requirements_heading,
        academic_requirements: eligibilityData.academic_requirements,
      })
      .eq('id', params.id)

    if (courseError) {
      console.error('✗ Error updating course:', courseError)
      setStatus('error')
      setErrorMessage(courseError.message)
      setLoading(false)
      return
    }

    // Delete existing semester courses
    const { error: deleteError } = await supabase
      .from('semester_courses')
      .delete()
      .eq('course_id', params.id)

    if (deleteError) {
      console.error('✗ Error deleting old semester courses:', deleteError)
    }

    // Insert new semester courses if any
    if (semesters.length > 0) {
      const semesterCoursesData = semesters.flatMap(semester =>
        semester.courses.map((course, index) => ({
          course_id: params.id,
          semester_number: semester.semester_number,
          course_code: course.course_code,
          course_title: course.course_title,
          credit_hours_theory: course.credit_hours_theory,
          credit_hours_lab: course.credit_hours_lab,
          credit_hours_total: course.credit_hours_total,
          display_order: index
        }))
      )

      const { error: semesterError } = await supabase
        .from('semester_courses')
        .insert(semesterCoursesData)

      if (semesterError) {
        console.error('✗ Error updating semester courses:', semesterError)
        setStatus('error')
        setErrorMessage('Course updated but semester courses failed: ' + semesterError.message)
        setLoading(false)
        return
      }
    }

    console.log('✓ Course updated successfully!')
    setStatus('success')
    setLoading(false)
    setTimeout(() => {
      router.push('/admin/courses')
      router.refresh()
    }, 2000)
  }

  if (loadingData) {
    return (
      <div className="p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <Link href="/admin/courses" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Courses
      </Link>

      <Card>
        <CardHeader>
          <CardTitle>Edit Course</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Overview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('courses')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'courses'
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Courses
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('peos-plos')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'peos-plos'
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              PEO&apos;s and PLO&apos;s
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('eligibility')}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === 'eligibility'
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Eligibility
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Program Overview Section */}
                <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
                  <h3 className="text-lg font-semibold text-gray-900">Program Overview</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="program_overview_heading">Heading</Label>
                    <Input
                      id="program_overview_heading"
                      placeholder="e.g., Program Overview"
                      value={formData.program_overview_heading}
                      onChange={(e) => setFormData({ ...formData, program_overview_heading: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="program_overview_paragraph">Description</Label>
                    <textarea
                      id="program_overview_paragraph"
                      className="w-full min-h-[120px] px-3 py-2 border rounded-md"
                      placeholder="Enter program overview description..."
                      value={formData.program_overview_paragraph}
                      onChange={(e) => setFormData({ ...formData, program_overview_paragraph: e.target.value })}
                    />
                  </div>
                </div>

                {/* Degree Requirements Section */}
                <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
                  <h3 className="text-lg font-semibold text-gray-900">Degree Requirements</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="duration_years">Duration of Program (In Years)</Label>
                      <Input
                        id="duration_years"
                        type="number"
                        placeholder="e.g., 4"
                        value={formData.duration_years}
                        onChange={(e) => setFormData({ ...formData, duration_years: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="number_of_semesters">Number of Semesters</Label>
                      <Input
                        id="number_of_semesters"
                        type="number"
                        placeholder="e.g., 8"
                        value={formData.number_of_semesters}
                        onChange={(e) => setFormData({ ...formData, number_of_semesters: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="courses_per_semester">Number of Courses per Semester</Label>
                      <Input
                        id="courses_per_semester"
                        placeholder="e.g., 5-6"
                        value={formData.courses_per_semester}
                        onChange={(e) => setFormData({ ...formData, courses_per_semester: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="total_credit_hours">Total Credit Hours</Label>
                      <Input
                        id="total_credit_hours"
                        type="number"
                        placeholder="e.g., 140"
                        value={formData.total_credit_hours}
                        onChange={(e) => setFormData({ ...formData, total_credit_hours: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="total_number_of_courses">Total Number of Courses</Label>
                      <Input
                        id="total_number_of_courses"
                        placeholder="e.g., 45 (Including Final Year Project)"
                        value={formData.total_number_of_courses}
                        onChange={(e) => setFormData({ ...formData, total_number_of_courses: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* Basic Course Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Course Title *</Label>
                      <Input
                        id="title"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <select
                        id="category"
                        required
                        className="w-full px-3 py-2 border rounded-md"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      >
                        <option value="">Select a category</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Business">Business</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <textarea
                      id="description"
                      className="w-full min-h-[100px] px-3 py-2 border rounded-md"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="level">Level</Label>
                      <select
                        id="level"
                        className="w-full px-3 py-2 border rounded-md"
                        value={formData.level}
                        onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="bachelor">Bachelor</option>
                        <option value="master">Master</option>
                        <option value="phd">PhD</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="price">Price ($)</Label>
                      <Input
                        id="price"
                        type="number"
                        step="0.01"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="max_students">Max Students</Label>
                      <Input
                        id="max_students"
                        type="number"
                        value={formData.max_students}
                        onChange={(e) => setFormData({ ...formData, max_students: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="start_date">Start Date</Label>
                      <Input
                        id="start_date"
                        type="date"
                        value={formData.start_date}
                        onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="end_date">End Date</Label>
                      <Input
                        id="end_date"
                        type="date"
                        value={formData.end_date}
                        onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                      />
                    </div>
                  </div>

                  <ImageUpload
                    label="Course Image"
                    value={formData.image_url}
                    onChange={(url) => setFormData({ ...formData, image_url: url })}
                    folder="courses"
                  />

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="is_active"
                      checked={formData.is_active}
                      onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <Label htmlFor="is_active">Active</Label>
                  </div>
                </div>
              </div>
            )}

            {/* Courses Tab */}
            {activeTab === 'courses' && (
              <div className="space-y-6">
                <SemesterCoursesManager
                  semesters={semesters}
                  onChange={setSemesters}
                />
              </div>
            )}

            {/* PEOs and PLOs Tab */}
            {activeTab === 'peos-plos' && (
              <div className="space-y-6">
                <PEOsPLOsManager
                  data={peosPlosData}
                  onChange={setPeosPlosData}
                />
              </div>
            )}

            {/* Eligibility Tab */}
            {activeTab === 'eligibility' && (
              <div className="space-y-6">
                <EligibilityManager
                  data={eligibilityData}
                  onChange={setEligibilityData}
                />
              </div>
            )}

            {status === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800 font-medium">✓ Course updated successfully!</p>
              </div>
            )}

            {status === 'error' && (
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
                  'Update Course'
                )}
              </Button>
              <Link href="/admin/courses">
                <Button type="button" variant="outline">Cancel</Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
