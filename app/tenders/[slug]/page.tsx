import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Download, FileText, FileSpreadsheet } from 'lucide-react'
import PageBanner from '@/components/ui/page-banner'
import TendersSidebar from '@/components/tenders/tenders-sidebar'

// Tender data
const tenders = {
  'auditorium-renovation': {
    title: 'Renovation of UIT University Auditorium',
    status: 'OPEN',
    description: 'Complete renovation and modernization of the main university auditorium including seating, acoustics, lighting, and stage equipment.',
    deadline: 'December 31, 2025',
    documents: [
      { name: 'Request for Proposal (RFP)', type: 'PDF', size: '2.4 MB' },
      { name: 'Bill of Quantities (BoQ)', type: 'Excel', size: '856 KB' },
      { name: 'Technical Specifications', type: 'PDF', size: '1.8 MB' },
      { name: 'Site Plan', type: 'PDF', size: '3.2 MB' }
    ]
  },
  'computer-supply-pcl4': {
    title: 'Supply of Computer Equipment (PC CL-4)',
    status: 'OPEN',
    description: 'Supply and installation of computer equipment for PC Lab CL-4 including desktop computers, monitors, networking equipment, and accessories.',
    deadline: 'January 15, 2026',
    documents: [
      { name: 'Request for Proposal (RFP)', type: 'PDF', size: '1.9 MB' },
      { name: 'Technical Specifications', type: 'PDF', size: '1.2 MB' },
      { name: 'Bill of Quantities (BoQ)', type: 'Excel', size: '645 KB' }
    ]
  },
  'cafeteria-construction': {
    title: 'Construction / Renovation of Cafeteria',
    status: 'OPEN',
    description: 'Construction and renovation of university cafeteria facilities including kitchen equipment, dining area, and service counters.',
    deadline: 'February 28, 2026',
    documents: [
      { name: 'Request for Proposal (RFP)', type: 'PDF', size: '2.8 MB' },
      { name: 'Architectural Drawings', type: 'PDF', size: '4.5 MB' },
      { name: 'Bill of Quantities (BoQ)', type: 'Excel', size: '1.1 MB' },
      { name: 'Health & Safety Requirements', type: 'PDF', size: '890 KB' }
    ]
  },
  'computer-supply-closed': {
    title: 'Supply of Computer Equipment',
    status: 'CLOSED',
    description: 'Supply of computer equipment for various departments. This tender has been awarded.',
    deadline: 'Closed on October 15, 2025',
    documents: [
      { name: 'Original RFP Document', type: 'PDF', size: '1.7 MB' },
      { name: 'Award Notice', type: 'PDF', size: '456 KB' }
    ]
  },
  'hp-disposal': {
    title: 'Disposal of HP Desktop PC',
    status: 'CLOSED',
    description: 'Disposal of obsolete HP desktop computers and related equipment. This tender has been completed.',
    deadline: 'Closed on September 30, 2025',
    documents: [
      { name: 'Disposal Notice', type: 'PDF', size: '678 KB' },
      { name: 'Equipment List', type: 'Excel', size: '234 KB' }
    ]
  },
  'cafeteria-services-closed': {
    title: 'Cafeteria / Canteen Services',
    status: 'CLOSED',
    description: 'Outsourcing of cafeteria and canteen services. This tender has been awarded.',
    deadline: 'Closed on August 20, 2025',
    documents: [
      { name: 'Service Agreement', type: 'PDF', size: '1.5 MB' },
      { name: 'Award Notice', type: 'PDF', size: '512 KB' }
    ]
  },
  'solar-disposal': {
    title: 'Disposal of Solar System',
    status: 'CLOSED',
    description: 'Disposal of old solar panel system and related equipment. This tender has been completed.',
    deadline: 'Closed on July 10, 2025',
    documents: [
      { name: 'Disposal Notice', type: 'PDF', size: '789 KB' },
      { name: 'Equipment Specifications', type: 'PDF', size: '1.2 MB' }
    ]
  }
}

export function generateStaticParams() {
  return Object.keys(tenders).map((slug) => ({
    slug: slug
  }))
}

export default async function TenderDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tender = tenders[slug as keyof typeof tenders]

  if (!tender) {
    notFound()
  }

  const getFileIcon = (type: string) => {
    if (type === 'Excel') return <FileSpreadsheet className="w-5 h-5" />
    return <FileText className="w-5 h-5" />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title={tender.title}
        subtitle={tender.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Tenders', href: '/tenders' },
          { label: tender.title }
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
            {/* Back Button */}
            <Link
          href="/tenders"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Tenders
        </Link>

        {/* Tender Info Card */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Tender Information</h2>
            <span
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                tender.status === 'OPEN'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {tender.status}
            </span>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-semibold mr-2">Deadline:</span>
              <span>{tender.deadline}</span>
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Tender Documents
          </h2>
          <p className="text-gray-600 mb-6">
            Please find the official Request for Proposal (RFP) document, scope of work, 
            and submission deadlines related to the {tender.title} below. All required 
            documents are available for download.
          </p>

          <div className="space-y-3">
            {tender.documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-blue-600">
                    {getFileIcon(doc.type)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{doc.name}</p>
                    <p className="text-sm text-gray-500">
                      {doc.type} • {doc.size}
                    </p>
                  </div>
                </div>
                <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8 rounded-r-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Need Help?
          </h3>
          <p className="text-blue-800">
            For queries regarding this tender, please contact the Procurement Office at{' '}
            <a href="mailto:procurement@uit.edu" className="underline hover:text-blue-600">
              procurement@uit.edu
            </a>
          </p>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}
