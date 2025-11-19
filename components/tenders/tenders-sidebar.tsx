'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileText, ChevronRight } from 'lucide-react'

const openTenders = [
  {
    title: 'Renovation of UIT University Auditorium',
    slug: 'auditorium-renovation'
  },
  {
    title: 'Supply of Computer Equipment (PC CL-4)',
    slug: 'computer-supply-pcl4'
  },
  {
    title: 'Construction / Renovation of Cafeteria',
    slug: 'cafeteria-construction'
  }
]

const closedTenders = [
  {
    title: 'Supply of Computer Equipment',
    slug: 'computer-supply-closed'
  },
  {
    title: 'Disposal of HP Desktop PC',
    slug: 'hp-disposal'
  },
  {
    title: 'Cafeteria / Canteen Services',
    slug: 'cafeteria-services-closed'
  },
  {
    title: 'Disposal of Solar System',
    slug: 'solar-system-disposal'
  }
]

export default function TendersSidebar() {
  const pathname = usePathname()

  const isActive = (slug: string) => {
    return pathname === `/tenders/${slug}`
  }

  return (
    <aside className="bg-white rounded-lg shadow-md p-6 sticky top-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <FileText className="w-5 h-5 mr-2 text-blue-600" />
          Tenders Navigation
        </h3>
      </div>

      {/* Open Tenders Section */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-3 px-3">
          Open Tenders
        </h4>
        <nav className="space-y-1">
          {openTenders.map((tender) => (
            <Link
              key={tender.slug}
              href={`/tenders/${tender.slug}`}
              className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive(tender.slug)
                  ? 'bg-green-50 text-green-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex-1">{tender.title}</span>
                {isActive(tender.slug) && (
                  <ChevronRight className="w-4 h-4 text-green-600" />
                )}
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Closed Tenders Section */}
      <div>
        <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3 px-3">
          Closed Tenders
        </h4>
        <nav className="space-y-1">
          {closedTenders.map((tender) => (
            <Link
              key={tender.slug}
              href={`/tenders/${tender.slug}`}
              className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive(tender.slug)
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex-1">{tender.title}</span>
                {isActive(tender.slug) && (
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                )}
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Back to All Tenders */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <Link
          href="/tenders"
          className="block px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-center font-medium"
        >
          View All Tenders
        </Link>
      </div>
    </aside>
  )
}
