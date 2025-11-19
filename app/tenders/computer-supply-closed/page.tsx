import Link from 'next/link'
import { ArrowLeft, Download, FileText, AlertCircle } from 'lucide-react'
import PageBanner from '@/components/ui/page-banner'
import TendersSidebar from '@/components/tenders/tenders-sidebar'

export default function ComputerSupplyClosedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Supply of Computer Equipment"
        subtitle="Request for Proposal for supply of Computer/IT equipment and Solid State Drives (SSD)"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Tenders', href: '/tenders' },
          { label: 'Computer Equipment Supply' }
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
                CLOSED - Tender Awarded
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
                    This tender was closed on November 24, 2023. The evaluation process has been 
                    completed and the contract has been awarded. The information below is provided 
                    for reference and historical record purposes only.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                REQUEST FOR PROPOSAL
              </h1>
              <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                Supply of Computer Equipment
              </h2>

              {/* About UIT University */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">About UIT University</h3>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    The UIT University (UITU) was established vide The UIT University Act, 2017 
                    [Sindh Act No. XXXIV of 2018] of Government of Sindh and published vide 
                    Notification in The Sindh Government Gazette on May 28, 2018.
                  </p>
                  <p>
                    The University after due charter inspections by HEC, granted NOC whereby UITU 
                    has been initially allowed to start undergraduate programs in four departments 
                    namely, Electrical Engineering, Management Sciences, Computer Science and Social Sciences.
                  </p>
                  <p>
                    The UIT University is managed by Usman Memorial Foundation (UMF).
                  </p>
                </div>
              </section>

              {/* Tender Purpose */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tender Purpose</h3>
                <p className="text-gray-700 mb-4">
                  The University invited "Request for Proposal" (RFP) from reputed GST/NTN registered 
                  firms / companies / suppliers from Karachi or any other city (subject to delivery and 
                  availability of support in Karachi) for the supply of Computer / IT equipment and 
                  Solid State Drives (SSD) on <strong>"For Karachi Basis"</strong>.
                </p>
                <p className="text-gray-700">
                  All taxes were applicable as per government rules.
                </p>
              </section>

              {/* Submission Process */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Submission Process</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    The proposals were required to be submitted in one envelope (single stage single 
                    envelope procedure) with the title <strong>"Technical Bid"</strong> and{' '}
                    <strong>"Financial Bid"</strong> as per Performa. All proposals were opened and 
                    evaluated by the Procurement Committee.
                  </p>
                  <p className="text-gray-700">
                    All proposals were required to be accompanied by earnest money @ 1% (in the form 
                    of cheque / PO in favor of UIT University) of total bid value quoted in the Financial Bid.
                  </p>
                </div>
              </section>

              {/* University Address */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">University Address</h3>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <p className="text-blue-900 font-medium mb-2">UIT University, Karachi</p>
                  <p className="text-blue-800">
                    ST-13, Block 7, Gulshan-e-Iqbal<br />
                    Abul Hasan Isphahani Road<br />
                    Karachi, Pakistan
                  </p>
                  <p className="text-blue-800 mt-3">
                    <strong>Website:</strong>{' '}
                    <a href="https://www.uitu.edu.pk" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                      www.uitu.edu.pk
                    </a>
                  </p>
                </div>
              </section>
            </div>

            {/* Timeline (Historical) */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tender Timeline (Historical)</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">RFP Available From</span>
                  <span className="text-gray-900">Monday, November 8, 2023</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Office Hours</span>
                  <span className="text-gray-900">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Submission Deadline</span>
                  <span className="text-gray-900">Thursday, November 23, 2023 at 5:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-gray-700">Opening Date</span>
                  <span className="text-gray-900">Friday, November 24, 2023 at 11:00 AM</span>
                </div>
              </div>
            </div>

            {/* Tender Documents Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tender Documents (Archive)
              </h2>
              <p className="text-gray-600 mb-6">
                The following documents are provided for reference and archival purposes only. 
                This tender is now closed and no longer accepting submissions.
              </p>

              {/* Document 1: RFP Advertisement */}
              <div className="border-2 border-gray-200 rounded-lg p-6 mb-4">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    <FileText className="w-10 h-10 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      RFP Advertisement
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Official tender advertisement and announcement
                    </p>
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">File Type:</span> PDF • 
                      <span className="ml-2"><span className="font-medium">Size:</span> 856 KB</span>
                    </div>
                  </div>
                </div>
                <button className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium">
                  <Download className="w-4 h-4 mr-2" />
                  Download RFP Advertisement
                </button>
              </div>

              {/* Document 2: Technical Bid */}
              <div className="border-2 border-gray-200 rounded-lg p-6 mb-4">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    <FileText className="w-10 h-10 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Technical Bid Document
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Technical specifications and requirements
                    </p>
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">File Type:</span> PDF • 
                      <span className="ml-2"><span className="font-medium">Size:</span> 1.2 MB</span>
                    </div>
                  </div>
                </div>
                <button className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium">
                  <Download className="w-4 h-4 mr-2" />
                  Download Technical Bid
                </button>
              </div>

              {/* Document 3: Financial Bid */}
              <div className="border-2 border-gray-200 rounded-lg p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    <FileText className="w-10 h-10 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Financial Bid Document
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Financial proposal template and pricing format
                    </p>
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">File Type:</span> PDF • 
                      <span className="ml-2"><span className="font-medium">Size:</span> 945 KB</span>
                    </div>
                  </div>
                </div>
                <button className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium">
                  <Download className="w-4 h-4 mr-2" />
                  Download Financial Bid
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Need More Information?
              </h3>
              <p className="text-blue-800 mb-3">
                For queries regarding closed tenders or future opportunities, please contact:
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
