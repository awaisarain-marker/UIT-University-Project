import Link from 'next/link'
import { ArrowLeft, Download, Eye, FileText, AlertCircle, ExternalLink } from 'lucide-react'
import PageBanner from '@/components/ui/page-banner'
import TendersSidebar from '@/components/tenders/tenders-sidebar'

export default function CafeteriaServicesClosedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Cafeteria / Canteen Services"
        subtitle="Tender for outsourcing of university cafeteria and canteen services"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Tenders', href: '/tenders' },
          { label: 'Cafeteria Services' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
                CLOSED - Contract Awarded
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
                    This tender was closed on August 20, 2025. The evaluation process has been 
                    completed and the contract has been awarded to the selected service provider. 
                    The information below is provided for reference and historical record purposes only.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Cafeteria / Canteen Services
              </h1>
              <h2 className="text-xl font-semibold text-gray-800 mb-8">
                Tender for Outsourcing of University Cafeteria Services
              </h2>

              {/* Introduction */}
              <section className="mb-8">
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    UIT University invited proposals from qualified and experienced service providers 
                    for the outsourcing of cafeteria and canteen services. This tender aimed to provide 
                    high-quality, hygienic, and affordable food services to students, faculty, and staff 
                    members of the university.
                  </p>
                  <p>
                    The selected service provider was required to operate and manage the university 
                    cafeteria in accordance with health and safety standards, providing a diverse menu 
                    of nutritious meals at reasonable prices while maintaining excellent service quality.
                  </p>
                </div>
              </section>

              {/* Service Requirements */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Requirements</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Operation and management of university cafeteria facilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Provision of breakfast, lunch, snacks, and beverages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Maintenance of hygiene and food safety standards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Competitive and affordable pricing for students</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Qualified and trained staff for food preparation and service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Compliance with all applicable health and safety regulations</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Vendor Requirements */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Vendor Requirements</h3>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <p className="text-blue-800 mb-3">
                    Interested vendors were required to meet the following criteria:
                  </p>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li>• Valid business registration and food service licenses</li>
                    <li>• Proven experience in institutional food service operations</li>
                    <li>• Health department certifications and clearances</li>
                    <li>• Financial capacity and bank guarantees</li>
                    <li>• Quality assurance and food safety management systems</li>
                    <li>• References from similar institutional clients</li>
                  </ul>
                </div>
              </section>

              {/* Contract Terms */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contract Terms</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Contract Duration</h4>
                    <p className="text-green-800 text-sm">
                      Initial period with option for renewal based on performance
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Service Hours</h4>
                    <p className="text-green-800 text-sm">
                      As per university operational schedule
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Quality Standards</h4>
                    <p className="text-green-800 text-sm">
                      Regular inspections and quality audits
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Payment Terms</h4>
                    <p className="text-green-800 text-sm">
                      As specified in the tender document
                    </p>
                  </div>
                </div>
              </section>

              {/* Health & Safety */}
              <section className="mb-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-6">
                  <h3 className="text-lg font-bold text-red-900 mb-3">
                    Health & Safety Compliance
                  </h3>
                  <p className="text-red-800">
                    All food service operations were required to comply with local health department 
                    regulations, food safety standards, and hygiene protocols. Regular inspections 
                    and audits were conducted to ensure compliance and maintain service quality.
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
                This tender is now closed and the contract has been awarded.
              </p>

              {/* Document Card */}
              <div className="border-2 border-gray-200 rounded-lg p-6 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <FileText className="w-12 h-12 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      UITU Cafeteria Service Tender Document
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Complete tender document with service requirements, terms and conditions, and evaluation criteria
                    </p>
                    <div className="text-sm text-gray-500 mb-4">
                      <span className="font-medium">File Type:</span> PDF • 
                      <span className="ml-2"><span className="font-medium">Published:</span> February 2024</span> • 
                      <span className="ml-2"><span className="font-medium">Source:</span> UIT University Official Website</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://uitu.edu.pk/wp-content/uploads/2024/02/Tender-Document-UITU-Cafetaria-Service.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  View PDF Document
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="https://uitu.edu.pk/wp-content/uploads/2024/02/Tender-Document-UITU-Cafetaria-Service.pdf"
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
                  <span className="text-gray-900">February 2024</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Pre-Bid Meeting</span>
                  <span className="text-gray-900">As per schedule</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Proposal Submission Deadline</span>
                  <span className="text-gray-900">August 5, 2025</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-gray-700">Contract Awarded</span>
                  <span className="text-gray-900">August 20, 2025</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Need More Information?
              </h3>
              <p className="text-blue-800 mb-3">
                For queries regarding closed tenders or future service opportunities, please contact:
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
