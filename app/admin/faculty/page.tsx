import { createServerSupabaseClient } from '@/lib/supabase-server'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import FacultyTable from '@/components/admin/FacultyTable'

export default async function FacultyPage() {
  const supabase = await createServerSupabaseClient()
  const { data: faculty } = await supabase
    .from('instructors')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Faculty Management</h1>
          <p className="text-sm text-gray-500">Manage all faculty members</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/admin/faculty/categories">
            <Button variant="outline" size="sm" className="gap-2">
              Categories
            </Button>
          </Link>
          <Link href="/admin/faculty/new">
            <Button size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Faculty</span>
              <span className="sm:hidden">Add</span>
            </Button>
          </Link>
        </div>
      </div>

      <FacultyTable initialFaculty={faculty || []} />
    </div>
  )
}
