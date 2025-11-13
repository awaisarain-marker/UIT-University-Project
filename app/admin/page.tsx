import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createServerSupabaseClient } from '@/lib/supabase-server'
import { BookOpen, Users, FileText, TrendingUp, TrendingDown, Calendar, UserCog } from 'lucide-react'

// Helper function to calculate percentage change
function calculateChange(current: number, previous: number): { change: string; trend: 'up' | 'down' } {
  if (previous === 0) {
    return { change: current > 0 ? '+100%' : '0%', trend: current > 0 ? 'up' : 'down' }
  }
  const percentChange = ((current - previous) / previous) * 100
  const sign = percentChange >= 0 ? '+' : ''
  return {
    change: `${sign}${percentChange.toFixed(1)}%`,
    trend: percentChange >= 0 ? 'up' : 'down'
  }
}

export default async function AdminDashboard() {
  const supabase = await createServerSupabaseClient()
  
  // Fetch current counts
  const { data: courses } = await supabase.from('courses').select('*', { count: 'exact' })
  const { data: instructors } = await supabase.from('instructors').select('*', { count: 'exact' })
  const { data: events } = await supabase.from('events').select('*', { count: 'exact' })
  const { data: blogPosts } = await supabase.from('blog_posts').select('*', { count: 'exact' })
  
  // Get stats from 30 days ago for comparison
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
  const { data: previousStats } = await supabase
    .from('dashboard_stats')
    .select('*')
    .lte('stat_date', thirtyDaysAgo.toISOString().split('T')[0])
    .order('stat_date', { ascending: false })
    .limit(1)
    .single()

  // Calculate changes
  const coursesChange = calculateChange(courses?.length || 0, previousStats?.courses_count || 0)
  const instructorsChange = calculateChange(instructors?.length || 0, previousStats?.instructors_count || 0)
  const eventsChange = calculateChange(events?.length || 0, previousStats?.events_count || 0)
  const blogPostsChange = calculateChange(blogPosts?.length || 0, previousStats?.blog_posts_count || 0)

  const stats = [
    {
      title: 'Total Courses',
      value: courses?.length || 0,
      change: coursesChange.change,
      trend: coursesChange.trend,
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Faculty Members',
      value: instructors?.length || 0,
      change: instructorsChange.change,
      trend: instructorsChange.trend,
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Events',
      value: events?.length || 0,
      change: eventsChange.change,
      trend: eventsChange.trend,
      icon: Calendar,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Blog Posts',
      value: blogPosts?.length || 0,
      change: blogPostsChange.change,
      trend: blogPostsChange.trend,
      icon: FileText,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ]

  return (
    <div className="p-8">
      {/* Welcome Banner */}
      <div className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome to UIT Admin Dashboard</h1>
        <p className="text-blue-100">Manage your university with comprehensive suite of professional tools and resources.</p>
        <div className="flex gap-3 mt-6">
          <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Explore Features
          </button>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-400 transition-colors">
            Take a Tour
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="flex items-center gap-1 mt-2">
                  <TrendIcon className={`w-4 h-4 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                  <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500">from last month</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Entries Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Courses</CardTitle>
            <a href="/admin/courses" className="text-sm text-blue-600 hover:underline">View All</a>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {courses?.slice(0, 5).map((course) => (
                <div key={course.id} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{course.title}</p>
                    <p className="text-xs text-gray-500">{course.category} • ${course.price}</p>
                  </div>
                </div>
              ))}
              {(!courses || courses.length === 0) && (
                <p className="text-sm text-gray-500 text-center py-4">No courses yet</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Faculty</CardTitle>
            <a href="/admin/faculty" className="text-sm text-purple-600 hover:underline">View All</a>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {instructors?.slice(0, 5).map((instructor) => (
                <div key={instructor.id} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{instructor.full_name}</p>
                    <p className="text-xs text-gray-500">{instructor.specialization || 'No specialization'}</p>
                  </div>
                </div>
              ))}
              {(!instructors || instructors.length === 0) && (
                <p className="text-sm text-gray-500 text-center py-4">No faculty yet</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* More Recent Entries */}
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Events</CardTitle>
            <a href="/admin/events" className="text-sm text-green-600 hover:underline">View All</a>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {events?.slice(0, 5).map((event) => (
                <div key={event.id} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{event.title}</p>
                    <p className="text-xs text-gray-500">{new Date(event.event_date).toLocaleDateString()} • {event.location}</p>
                  </div>
                </div>
              ))}
              {(!events || events.length === 0) && (
                <p className="text-sm text-gray-500 text-center py-4">No events yet</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Blog Posts</CardTitle>
            <a href="/admin/blog" className="text-sm text-orange-600 hover:underline">View All</a>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {blogPosts?.slice(0, 5).map((post) => (
                <div key={post.id} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{post.title}</p>
                    <p className="text-xs text-gray-500">{post.category} • {post.is_published ? 'Published' : 'Draft'}</p>
                  </div>
                </div>
              ))}
              {(!blogPosts || blogPosts.length === 0) && (
                <p className="text-sm text-gray-500 text-center py-4">No blog posts yet</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <a href="/admin/users/new" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-left">
              <UserCog className="w-5 h-5 text-indigo-600 mb-2" />
              <p className="text-sm font-medium">Add User</p>
            </a>
            <a href="/admin/courses/new" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-left">
              <BookOpen className="w-5 h-5 text-blue-600 mb-2" />
              <p className="text-sm font-medium">Add Course</p>
            </a>
            <a href="/admin/faculty/new" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-left">
              <Users className="w-5 h-5 text-purple-600 mb-2" />
              <p className="text-sm font-medium">Add Faculty</p>
            </a>
            <a href="/admin/events/new" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-left">
              <Calendar className="w-5 h-5 text-green-600 mb-2" />
              <p className="text-sm font-medium">Add Event</p>
            </a>
            <a href="/admin/blog/new" className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-left">
              <FileText className="w-5 h-5 text-orange-600 mb-2" />
              <p className="text-sm font-medium">Write Post</p>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
