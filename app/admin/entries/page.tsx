import { createServerSupabaseClient } from '@/lib/supabase-server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Users, Calendar, FileText } from 'lucide-react'
import Link from 'next/link'

export default async function AllEntriesPage() {
  const supabase = await createServerSupabaseClient()
  
  // Fetch all data
  const { data: courses } = await supabase.from('courses').select('*').order('created_at', { ascending: false }).limit(10)
  const { data: faculty } = await supabase.from('instructors').select('*').order('created_at', { ascending: false }).limit(10)
  const { data: events } = await supabase.from('events').select('*').order('created_at', { ascending: false }).limit(10)
  const { data: blogPosts } = await supabase.from('blog_posts').select('*').order('created_at', { ascending: false }).limit(10)

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">All Form Entries</h1>
        <p className="text-gray-500">View all submitted data across all sections</p>
      </div>

      <div className="grid gap-6">
        {/* Courses Entries */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <CardTitle>Course Entries ({courses?.length || 0})</CardTitle>
            </div>
            <Link href="/admin/courses" className="text-sm text-blue-600 hover:underline">
              View All
            </Link>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Title</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Category</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Level</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Price</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Created</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {courses?.map((course) => (
                    <tr key={course.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium">{course.title}</td>
                      <td className="px-4 py-3 text-sm">{course.category}</td>
                      <td className="px-4 py-3 text-sm">{course.level}</td>
                      <td className="px-4 py-3 text-sm">${course.price}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {new Date(course.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {(!courses || courses.length === 0) && (
                <p className="text-center py-8 text-gray-500">No course entries yet</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Faculty Entries */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-50 rounded-lg">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <CardTitle>Faculty Entries ({faculty?.length || 0})</CardTitle>
            </div>
            <Link href="/admin/faculty" className="text-sm text-purple-600 hover:underline">
              View All
            </Link>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Name</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Email</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Specialization</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Experience</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Created</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {faculty?.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium">{member.full_name}</td>
                      <td className="px-4 py-3 text-sm">{member.email}</td>
                      <td className="px-4 py-3 text-sm">{member.specialization || 'N/A'}</td>
                      <td className="px-4 py-3 text-sm">{member.years_experience ? `${member.years_experience} years` : 'N/A'}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {new Date(member.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {(!faculty || faculty.length === 0) && (
                <p className="text-center py-8 text-gray-500">No faculty entries yet</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Events Entries */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-50 rounded-lg">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
              <CardTitle>Event Entries ({events?.length || 0})</CardTitle>
            </div>
            <Link href="/admin/events" className="text-sm text-green-600 hover:underline">
              View All
            </Link>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Title</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Date</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Location</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Status</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Created</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {events?.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium">{event.title}</td>
                      <td className="px-4 py-3 text-sm">{new Date(event.event_date).toLocaleDateString()}</td>
                      <td className="px-4 py-3 text-sm">{event.location}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 text-xs rounded-full ${event.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {event.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {new Date(event.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {(!events || events.length === 0) && (
                <p className="text-center py-8 text-gray-500">No event entries yet</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Blog Entries */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg">
                <FileText className="w-5 h-5 text-orange-600" />
              </div>
              <CardTitle>Blog Entries ({blogPosts?.length || 0})</CardTitle>
            </div>
            <Link href="/admin/blog" className="text-sm text-orange-600 hover:underline">
              View All
            </Link>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Title</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Category</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Status</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Created</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {blogPosts?.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium">{post.title}</td>
                      <td className="px-4 py-3 text-sm">{post.category}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 text-xs rounded-full ${post.is_published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {post.is_published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {new Date(post.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {(!blogPosts || blogPosts.length === 0) && (
                <p className="text-center py-8 text-gray-500">No blog entries yet</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
