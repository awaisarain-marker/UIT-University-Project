'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Edit, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase-client'

interface FacultyMember {
  id: string
  full_name: string
  email: string
  specialization: string | null
  years_experience: number | null
  image_url: string | null
}

interface FacultyTableProps {
  initialFaculty: FacultyMember[]
}

export default function FacultyTable({ initialFaculty }: FacultyTableProps) {
  const router = useRouter()
  const supabase = createClient()
  const [faculty, setFaculty] = useState(initialFaculty)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete ${name}?`)) {
      return
    }

    setDeletingId(id)
    console.log('Deleting faculty member:', id)

    const { error } = await supabase
      .from('instructors')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('✗ Error deleting faculty member:', error)
      alert('Error deleting faculty member: ' + error.message)
      setDeletingId(null)
    } else {
      console.log('✓ Faculty member deleted successfully!')
      setFaculty(faculty.filter(m => m.id !== id))
      setDeletingId(null)
      router.refresh()
    }
  }

  return (
    <div className="bg-white rounded-lg border overflow-x-auto">
      <table className="w-full min-w-[640px]">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Specialization</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Experience</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {faculty?.map((member) => (
            <tr key={member.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  {member.image_url ? (
                    <img 
                      src={member.image_url} 
                      alt={member.full_name}
                      className="w-10 h-10 rounded-full object-cover"
                      onError={(e) => {
                        console.error('Image failed to load:', member.image_url)
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-600">
                        {member.full_name.split(' ').map((n: string) => n[0]).join('')}
                      </span>
                    </div>
                  )}
                  <div className="font-medium text-gray-900">{member.full_name}</div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">{member.email}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{member.specialization || 'N/A'}</td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {member.years_experience ? `${member.years_experience} years` : 'N/A'}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-2">
                  <Link href={`/admin/faculty/${member.id}/edit`}>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-red-600 hover:text-red-700"
                    onClick={() => handleDelete(member.id, member.full_name)}
                    disabled={deletingId === member.id}
                  >
                    {deletingId === member.id ? (
                      <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!faculty || faculty.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No faculty members found. Add your first faculty member!
        </div>
      )}
    </div>
  )
}
