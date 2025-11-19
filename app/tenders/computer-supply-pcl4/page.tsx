import Link from 'next/link'
import { ArrowLeft, Download, Eye, FileText } from 'lucide-react'
import PageBanner from '@/components/ui/page-banner'
import TendersSidebar from '@/components/tenders/tenders-sidebar'

export default function ComputerSupplyPCL4Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Supply of Computer Equipment (PC CL-4)"
        subtitle="Request for Proposal for supply and installation of computer equipment for PC Lab CL-4"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Tenders', href: '/tenders' },
          { label: 'Computer Equipment PC CL-4' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
                OPEN - Accepting Proposals
              </span>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                REQUEST FOR PROPOSAL
              </h1>
              <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                Supply of Computer Equipment - PC CL4
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-8">
                <p>
                  UIT University invites qualified vendors to submit proposals for the supply and 
                  installation of computer equipment for PC Lab CL-4. This procurement aims to upgrade 
                  the existing computer laboratory infrastructure to support modern educational requirements 
                  and enhance the learning experience for students.
                </p>
                <p>
                  The selected vendor will be responsible for providing high-quality computer equipment, 
                  including desktop computers, monitors, networking equipment, and necessary accessories, 
                  along with installation and configuration services.
                </p>
              </div>

              {/* Key Information */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Key Information</h3>
                <div className="space-y-2 text-blue-800">
                  <div className="flex items-start">
                    <span className="font-semibold min-w-[140px]">Tender Type:</span>
                    <span>Supply & Installation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold min-w-[140px]">Location:</span>
                    <span>PC Lab CL-4, UIT University</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold min-w-[140px]">Submission Deadline:</span>
                    <span>January 15, 2026</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold min-w-[140px]">Contact:</span>
                    <span>Procurement Office</span>
                  </div>
                </div>
              </div>

              {/* Scope of Work */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scope of Work</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Supply of desktop computers with specified technical requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Supply of monitors and display equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Networking equipment including switches and cables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Installation and configuration of all equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Testing and commissioning of the complete setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Warranty and after-sales support as per specifications</span>
                  </li>
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <h3 className="text-lg font-bold text-yellow-900 mb-3">Vendor Requirements</h3>
                <p className="text-yellow-800 mb-3">
                  Interested vendors must meet the following criteria:
                </p>
                <ul className="space-y-2 text-yellow-800 text-sm">
                  <li>• Valid business registration and tax compliance certificates</li>
                  <li>• Proven track record in supplying computer equipment to educational institutions</li>
                  <li>• Authorization certificates from original equipment manufacturers (OEMs)</li>
                  <li>• Technical support and warranty service capabilities</li>
                  <li>• Financial capacity to undertake the project</li>
                </ul>
              </div>
            </div>

            {/* RFP Document Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                RFP Document
              </h2>
              <p className="text-gray-600 mb-6">
                Download the complete Request for Proposal document containing detailed technical 
                specifications, terms and conditions, evaluation criteria, and submission guidelines.
              </p>

              {/* Document Card */}
              <div className="border-2 border-gray-200 rounded-lg p-6 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <FileText className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      RFP - Supply of Computer Equipment PC CL4
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Complete tender document with technical specifications and requirements
                    </p>
                    <div className="text-sm text-gray-500 mb-4">
                      <span className="font-medium">File Type:</span> PDF • 
                      <span className="ml-2"><span className="font-medium">Size:</span> 2.8 MB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  <Eye className="w-5 h-5 mr-2" />
                  View PDF
                </button>
                <button className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </button>
              </div>
            </div>

            {/* Important Dates */}
            <div className="bg-white rounded-lg shadow-md p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Dates</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">RFP Issue Date</span>
                  <span className="text-gray-900">November 20, 2025</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Pre-Bid Meeting</span>
                  <span className="text-gray-900">December 5, 2025</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Last Date for Queries</span>
                  <span className="text-gray-900">December 20, 2025</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-gray-700">Submission Deadline</span>
                  <span className="text-red-600 font-semibold">January 15, 2026</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Need More Information?
              </h3>
              <p className="text-blue-800 mb-3">
                For queries regarding this tender, please contact the Procurement Office:
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
                <p>
                  <span className="font-medium">Office Hours:</span> Monday - Friday, 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
