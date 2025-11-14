import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import CategoryManager from '@/components/admin/CategoryManager'

export default function ShortCourseCategoriesPage() {
  return (
    <div className="p-8">
      <Link href="/admin/courses/short-courses" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Short Courses
      </Link>

      <CategoryManager tableName="short_course_categories" title="Short Course Categories" />
    </div>
  )
}
