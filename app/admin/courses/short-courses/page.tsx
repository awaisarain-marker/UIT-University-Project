import { createServerSupabaseClient } from '@/lib/supabase-server'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default async function ShortCoursesPage() {
  const supabase = await createServerSupabaseClient()
  
  // Fetch short courses (intermediate and advanced levels)
  const { data: courses } = await supabase
    .from('courses')
    .select('*')
    .in('level', ['intermediate', 'advanced'])
    .order('created_at', { ascending: false })

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <Link href="/admin/courses" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Courses
      </Link>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Short Courses</h1>
          <p className="text-sm text-gray-500">Manage short-term certification courses</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/admin/courses/short-courses/categories">
            <Button variant="outline" size="sm" className="gap-2">
              Categories
            </Button>
          </Link>
          <Link href="/admin/courses/new">
            <Button size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              Add Short Course
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg border overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Level</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {courses?.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {course.image_url ? (
                      <img 
                        src={course.image_url} 
                        alt={course.title}
                        className="w-12 h-12 rounded object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-xs font-semibold text-gray-600">
                          {course.title.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div>
                      <div className="font-medium text-gray-900">{course.title}</div>
                      <div className="text-sm text-gray-500">{course.duration}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{course.category}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                    {course.level}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{course.duration || 'N/A'}</td>
                <td className="px-6 py-4 text-sm text-gray-900">${course.price}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    course.is_active 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {course.is_active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <Link href={`/admin/courses/${course.id}/edit`}>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!courses || courses.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No short courses found. Add your first short course!
          </div>
        )}
      </div>

      {/* Info Box */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">About Short Courses</h3>
        <p className="text-sm text-blue-800">
          Short courses are certification programs with intermediate or advanced levels. 
          They typically have shorter durations and focus on specific skills or topics.
          To create a short course, add a new course and select "Intermediate" or "Advanced" as the level.
        </p>
      </div>
    </div>
  )
}
