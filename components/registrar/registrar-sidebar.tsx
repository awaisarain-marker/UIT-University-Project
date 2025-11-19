'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Calendar, ChevronRight } from 'lucide-react'

const academicCalendars = [
  {
    year: '2025',
    calendars: [
      { title: 'Fall 2025', slug: 'fall-2025' },
      { title: 'Summer 2025', slug: 'summer-2025' },
      { title: 'Spring 2025', slug: 'spring-2025' }
    ]
  },
  {
    year: '2024',
    calendars: [
      { title: 'Fall 2024', slug: 'fall-2024' },
      { title: 'Spring 2024', slug: 'spring-2024' }
    ]
  },
  {
    year: '2023',
    calendars: [
      { title: 'Fall 2023', slug: 'fall-2023' },
      { title: 'Spring 2023', slug: 'spring-2023' }
    ]
  },
  {
    year: '2022',
    calendars: [
      { title: 'Fall 2022', slug: 'fall-2022' },
      { title: 'Spring 2022', slug: 'spring-2022' }
    ]
  }
]

export default function RegistrarSidebar() {
  const pathname = usePathname()

  const isActive = (slug: string) => {
    return pathname === `/registrar/academic-calendar/${slug}`
  }

  return (
    <aside className="bg-white rounded-lg shadow-md p-6 sticky top-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-blue-600" />
          Academic Calendars
        </h3>
      </div>

      {/* Academic Calendars by Year */}
      {academicCalendars.map((yearGroup) => (
        <div key={yearGroup.year} className="mb-6">
          <h4 className="text-sm font-semibold text-blue-700 uppercase tracking-wider mb-3 px-3">
            {yearGroup.year}
          </h4>
          <nav className="space-y-1">
            {yearGroup.calendars.map((calendar) => (
              <Link
                key={calendar.slug}
                href={`/registrar/academic-calendar/${calendar.slug}`}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive(calendar.slug)
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex-1">{calendar.title}</span>
                  {isActive(calendar.slug) && (
                    <ChevronRight className="w-4 h-4 text-blue-600" />
                  )}
                </div>
              </Link>
            ))}
          </nav>
        </div>
      ))}

      {/* Back to Registrar */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <Link
          href="/registrar"
          className="block px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-center font-medium"
        >
          Back to Registrar Office
        </Link>
      </div>
    </aside>
  )
}
