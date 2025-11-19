import Link from 'next/link'
import PageBanner from '@/components/ui/page-banner'
import TendersSidebar from '@/components/tenders/tenders-sidebar'

export default function TendersPage() {
  const openTenders = [
    {
      title: 'Renovation of UIT University Auditorium',
      slug: 'auditorium-renovation',
      status: 'OPEN'
    },
    {
      title: 'Supply of Computer Equipment (PC CL-4)',
      slug: 'computer-supply-pcl4',
      status: 'OPEN'
    },
    {
      title: 'Construction / Renovation of Cafeteria',
      slug: 'cafeteria-construction',
      status: 'OPEN'
    }
  ]

  const closedTenders = [
    {
      title: 'Supply of Computer Equipment',
      slug: 'computer-supply-closed',
      status: 'CLOSED'
    },
    {
      title: 'Disposal of HP Desktop PC',
      slug: 'hp-disposal',
      status: 'CLOSED'
    },
    {
      title: 'Cafeteria / Canteen Services',
      slug: 'cafeteria-services-closed',
      status: 'CLOSED'
    },
    {
      title: 'Disposal of Solar System',
      slug: 'solar-system-disposal',
      status: 'CLOSED'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Official Tenders and Bids"
        subtitle="View current and past tender opportunities at UIT University"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Tenders' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <TendersSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Open Tenders Section */}
            <section className="mb-16">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h2 className="text-2xl font-bold text-green-900 mb-2">
              Open Tenders
            </h2>
            <p className="text-green-700">
              Active tenders currently accepting bids
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200">
              {openTenders.map((tender) => (
                <Link
                  key={tender.slug}
                  href={`/tenders/${tender.slug}`}
                  className="block hover:bg-gray-50 transition-colors"
                >
                  <div className="px-6 py-5 flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                        {tender.title}
                      </h3>
                    </div>
                    <div className="ml-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        {tender.status}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Closed Tenders Section */}
        <section>
          <div className="bg-gray-100 border-l-4 border-gray-500 p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Closed Tenders
            </h2>
            <p className="text-gray-700">
              Historical record of completed tenders
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200">
              {closedTenders.map((tender) => (
                <Link
                  key={tender.slug}
                  href={`/tenders/${tender.slug}`}
                  className="block hover:bg-gray-50 transition-colors"
                >
                  <div className="px-6 py-5 flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                        {tender.title}
                      </h3>
                    </div>
                    <div className="ml-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-700">
                        {tender.status}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
          </div>
        </div>
      </div>
    </div>
  )
}
