import Link from 'next/link'
import { ArrowLeft, Download, Eye, FileText, FileSpreadsheet } from 'lucide-react'
import PageBanner from '@/components/ui/page-banner'
import TendersSidebar from '@/components/tenders/tenders-sidebar'

export default function CafeteriaConstructionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Construction / Renovation of Cafeteria"
        subtitle="Request for Proposal for construction and renovation of university cafeteria facilities"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Tenders', href: '/tenders' },
          { label: 'Cafeteria Construction' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
                Document for Construction / Renovation of Cafeteria
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-8">
                <p>
                  UIT University invites qualified contractors to submit proposals for the construction 
                  and renovation of the university cafeteria facilities. This project aims to create a 
                  modern, hygienic, and student-friendly dining environment that meets contemporary 
                  standards for food service operations.
                </p>
                <p>
                  The scope includes comprehensive renovation of existing cafeteria spaces, installation 
                  of modern kitchen equipment, dining area improvements, and service counter upgrades. 
                  The project will enhance the overall dining experience for students, faculty, and staff 
                  while ensuring compliance with health and safety regulations.
                </p>
              </div>

              {/* Key Information */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Project Overview</h3>
                <div className="space-y-2 text-blue-800">
                  <div className="flex items-start">
                    <span className="font-semibold min-w-[140px]">Project Type:</span>
                    <span>Construction & Renovation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold min-w-[140px]">Location:</span>
                    <span>UIT University Campus</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold min-w-[140px]">Submission Deadline:</span>
                    <span>February 28, 2026</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold min-w-[140px]">Project Duration:</span>
                    <span>6-8 Months (Estimated)</span>
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
                    <span>Structural renovation and repair of existing cafeteria building</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Installation of modern commercial kitchen equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Renovation of dining area with new furniture and fixtures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Upgrade of electrical, plumbing, and HVAC systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Installation of service counters and food display units</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Flooring, wall finishing, and interior decoration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Fire safety and emergency exit systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Waste management and drainage systems</span>
                  </li>
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <h3 className="text-lg font-bold text-yellow-900 mb-3">Contractor Requirements</h3>
                <p className="text-yellow-800 mb-3">
                  Interested contractors must meet the following criteria:
                </p>
                <ul className="space-y-2 text-yellow-800 text-sm">
                  <li>• Valid contractor license and registration certificates</li>
                  <li>• Proven experience in institutional construction/renovation projects</li>
                  <li>• Compliance with health and safety regulations</li>
                  <li>• Financial capacity and bank guarantees</li>
                  <li>• Technical expertise in commercial kitchen installations</li>
                  <li>• Quality assurance and warranty provisions</li>
                </ul>
              </div>

              {/* Compliance */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-lg font-bold text-red-900 mb-3">Health & Safety Compliance</h3>
                <p className="text-red-800 text-sm">
                  All construction work must comply with local building codes, health department 
                  regulations, and food safety standards. Contractors must ensure proper safety 
                  measures during construction and obtain all necessary permits and approvals.
                </p>
              </div>
            </div>

            {/* Tender Documents Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tender Documents
              </h2>
              <p className="text-gray-600 mb-6">
                Download the complete tender documentation including technical specifications, 
                architectural drawings, financial proposal forms, and bill of quantities.
              </p>

              {/* Document 1: Main Tender Document */}
              <div className="border-2 border-gray-200 rounded-lg p-6 mb-4">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    <FileText className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Main Tender Document
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Complete RFP with technical specifications, terms & conditions, and project requirements
                    </p>
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">File Type:</span> PDF • 
                      <span className="ml-2"><span className="font-medium">Size:</span> 4.2 MB</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    <Eye className="w-4 h-4 mr-2" />
                    View PDF
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </button>
                </div>
              </div>

              {/* Document 2: Financial Proposal & BOQ */}
              <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    <FileSpreadsheet className="w-12 h-12 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Financial Proposal & Bill of Quantities (BOQ)
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Detailed BOQ template and financial proposal forms for cost estimation
                    </p>
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">File Type:</span> Excel (XLSX) • 
                      <span className="ml-2"><span className="font-medium">Size:</span> 1.8 MB</span>
                    </div>
                  </div>
                </div>
                <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                  <Download className="w-4 h-4 mr-2" />
                  Download Financial Proposal & BOQ
                </button>
              </div>
            </div>

            {/* Important Dates */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Dates</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">RFP Issue Date</span>
                  <span className="text-gray-900">November 25, 2025</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Site Visit</span>
                  <span className="text-gray-900">December 10, 2025</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Pre-Bid Meeting</span>
                  <span className="text-gray-900">December 15, 2025</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Last Date for Queries</span>
                  <span className="text-gray-900">January 31, 2026</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-gray-700">Submission Deadline</span>
                  <span className="text-red-600 font-semibold">February 28, 2026</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
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
