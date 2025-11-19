import Link from 'next/link'
import { ArrowLeft, Download, Eye, FileText, AlertCircle, ExternalLink } from 'lucide-react'
import PageBanner from '@/components/ui/page-banner'
import TendersSidebar from '@/components/tenders/tenders-sidebar'

export default function HPDisposalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Disposal of HP Desktop PC"
        subtitle="Tender for disposal of obsolete HP desktop computers and related equipment"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Tenders', href: '/tenders' },
          { label: 'HP Desktop Disposal' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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

            {/* Status Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700">
                CLOSED - Tender Completed
              </span>
            </div>

            {/* Closed Notice */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                    This Tender is Closed
                  </h3>
                  <p className="text-yellow-800">
                    This tender was closed on September 30, 2025. The disposal process has been 
                    completed. The information below is provided for reference and historical 
                    record purposes only.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Disposal of HP Desktop PC
              </h1>
              <h2 className="text-xl font-semibold text-gray-800 mb-8">
                Tender for Disposal of Obsolete Computer Equipment
              </h2>

              {/* Introduction */}
              <section className="mb-8">
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    UIT University invited bids for the disposal of obsolete HP desktop computers 
                    and related equipment. This tender was part of the university's asset management 
                    and technology refresh initiative to responsibly dispose of outdated IT equipment 
                    in accordance with environmental and data security regulations.
                  </p>
                  <p>
                    The disposal included desktop computers, monitors, and associated peripherals 
                    that had reached the end of their operational lifecycle and were no longer 
                    suitable for academic or administrative use.
                  </p>
                </div>
              </section>

              {/* Equipment Details */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Equipment Details</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Equipment Type:</strong> HP Desktop Computers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Condition:</strong> Obsolete / End of Life</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Disposal Method:</strong> As per environmental regulations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Data Security:</strong> All storage devices sanitized before disposal</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Disposal Requirements */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Disposal Requirements</h3>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <p className="text-blue-800 mb-3">
                    Bidders were required to comply with the following:
                  </p>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li>• Valid business registration and licenses for e-waste disposal</li>
                    <li>• Compliance with environmental protection regulations</li>
                    <li>• Proper documentation and certification of disposal process</li>
                    <li>• Data destruction certificates for all storage devices</li>
                    <li>• Transportation and handling as per safety standards</li>
                  </ul>
                </div>
              </section>

              {/* Environmental Compliance */}
              <section className="mb-8">
                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h3 className="text-lg font-bold text-green-900 mb-3">
                    Environmental Responsibility
                  </h3>
                  <p className="text-green-800">
                    UIT University is committed to environmentally responsible disposal of electronic 
                    waste. All equipment was disposed of in accordance with local environmental 
                    regulations and international e-waste management standards to minimize 
                    environmental impact.
                  </p>
                </div>
              </section>
            </div>

            {/* Tender Document Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tender Document (Archive)
              </h2>
              <p className="text-gray-600 mb-6">
                The original tender document is provided for reference and archival purposes only. 
                This tender is now closed and no longer accepting bids.
              </p>

              {/* Document Card */}
              <div className="border-2 border-gray-200 rounded-lg p-6 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <FileText className="w-12 h-12 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      UIT University Desktop Computer Bid Document
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Complete tender document with equipment list, terms and conditions, and bidding instructions
                    </p>
                    <div className="text-sm text-gray-500 mb-4">
                      <span className="font-medium">File Type:</span> PDF • 
                      <span className="ml-2"><span className="font-medium">Source:</span> UIT University Official Website</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://uitu.edu.pk/wp-content/uploads/2024/05/UIT-University-desktop-computer-bidv3.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  View PDF Document
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="https://uitu.edu.pk/wp-content/uploads/2024/05/UIT-University-desktop-computer-bidv3.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </a>
              </div>

              {/* External Link Notice */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 flex items-start">
                  <ExternalLink className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    This document is hosted on the official UIT University website. 
                    Clicking the buttons above will open the document in a new tab.
                  </span>
                </p>
              </div>
            </div>

            {/* Timeline (Historical) */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tender Timeline (Historical)</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Tender Published</span>
                  <span className="text-gray-900">May 2024</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Site Inspection</span>
                  <span className="text-gray-900">As per schedule</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Bid Submission Deadline</span>
                  <span className="text-gray-900">September 15, 2025</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-gray-700">Tender Closed</span>
                  <span className="text-gray-900">September 30, 2025</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Need More Information?
              </h3>
              <p className="text-blue-800 mb-3">
                For queries regarding closed tenders or future disposal opportunities, please contact:
              </p>
              <div className="space-y-1 text-blue-800">
                <p>
                  <span className="font-medium">Email:</span>{' '}
                  <a href="mailto:procurement@uit.edu" className="underline hover:text-blue-600">
                    procurement@uit.edu
                  </a>
                </p>
                <p>
                  <span className="font-medium">Phone:</span> +92 (21) 1234-5678
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
