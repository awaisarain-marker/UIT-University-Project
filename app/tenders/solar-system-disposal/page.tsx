import Link from 'next/link'
import { ArrowLeft, Download, Eye, FileText, AlertCircle, ExternalLink } from 'lucide-react'
import PageBanner from '@/components/ui/page-banner'
import TendersSidebar from '@/components/tenders/tenders-sidebar'

export default function SolarSystemDisposalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Disposal of Solar System"
        subtitle="Tender for sale of 53.1 kW On-Grid Solar System"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Tenders', href: '/tenders' },
          { label: 'Solar System Disposal' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
                    This tender was closed on April 23, 2024. The bidding process has been 
                    completed. The information below is provided for reference and historical 
                    record purposes only.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Disposal of Solar System
              </h1>
              <h2 className="text-xl font-semibold text-gray-800 mb-8">
                Sale of 53.1 kW On-Grid Solar System
              </h2>

              {/* Introduction */}
              <section className="mb-8">
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    UIT University (UITU) invited sealed bids for the sale of a good working condition 
                    "53.1 kW On-Grid Solar System" on an "As is Where is basis". The system was available 
                    for inspection at the university premises during the specified dates.
                  </p>
                </div>
              </section>

              {/* Solar System Details */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Solar System Details</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Sr.</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Items</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">No.</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Year</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-700">1</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Solar PV "JA Solar" Panels of 320-watt</td>
                          <td className="px-4 py-3 text-sm text-gray-700">134</td>
                          <td className="px-4 py-3 text-sm text-gray-700">2017</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-700">2</td>
                          <td className="px-4 py-3 text-sm text-gray-700">On-grid 25 kW SMA Sunny Tripower Inverter (25000TL-302)</td>
                          <td className="px-4 py-3 text-sm text-gray-700">02</td>
                          <td className="px-4 py-3 text-sm text-gray-700">2020</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-700">3</td>
                          <td className="px-4 py-3 text-sm text-gray-700">Surface Mounted MS Structure</td>
                          <td className="px-4 py-3 text-sm text-gray-700">For 198 Panels</td>
                          <td className="px-4 py-3 text-sm text-gray-700">2017</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">* Purchase / Installation Year</p>
                </div>
              </section>

              {/* System Specifications */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">System Specifications</h3>
                <div className="bg-blue-50 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Total Capacity:</strong> 53.1 kW On-Grid Solar System</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Panel Brand:</strong> JA Solar (320-watt each)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Inverter:</strong> SMA Sunny Tripower 25000TL-302 (25 kW) x 2 units</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Mounting Structure:</strong> Surface Mounted MS Structure for 198 panels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Condition:</strong> Good working condition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Sale Basis:</strong> "As is Where is basis"</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Inspection Details */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Inspection Details</h3>
                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <p className="text-green-800 mb-3">
                    The solar system was available for inspection at the following times:
                  </p>
                  <ul className="space-y-2 text-green-800">
                    <li><strong>Dates:</strong> April 16 to 18, 2024</li>
                    <li><strong>Time:</strong> 9:00 AM to 5:00 PM</li>
                    <li><strong>Location:</strong> UIT University premises</li>
                  </ul>
                </div>
              </section>

              {/* Terms and Conditions */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Terms and Conditions</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Bid Submission Requirements:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Sealed offers on plain paper signed/stamped or company's letterhead</li>
                      <li>• Contact person's name, cell/phone number and address</li>
                      <li>• PO/DD of amount equal to 10% of the Offer Value as earnest money</li>
                      <li>• Earnest money in favour of UIT University</li>
                      <li>• Photocopy of CNIC</li>
                      <li>• Sealed envelope marked "Bid for Solar System"</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Important Dates:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Bid Submission Deadline:</strong> Monday, April 22, 2024 up to 5:00 PM</li>
                      <li>• <strong>Bid Opening:</strong> Tuesday, April 23, 2024 at 11:00 AM at UITU's Head Office</li>
                      <li>• Bids opened in the presence of available bidders</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Bidder Responsibilities:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Responsible for amicable removal/dismantling</li>
                      <li>• Pay balance amount within 3 days of acceptance</li>
                      <li>• Dismantle within 10 days of acceptance of offer</li>
                      <li>• Bear all transfer charges, Government taxes/duties, etc.</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Additional Terms:</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Unsuccessful bidders receive earnest money within 7 days of intimation</li>
                      <li>• UITU reserves the right to accept/reject any or all offers without assigning any reason</li>
                      <li>• Non-deposit of balance amount within 3 days results in forfeiture of earnest money</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Important Notice */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-lg font-bold text-red-900 mb-3">
                  Important Notice
                </h3>
                <p className="text-red-800">
                  In case of non-deposit of balance amount within 3 days of acceptance of bid, 
                  earnest money will be forfeited without further communication.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tender Timeline</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Inspection Period</span>
                  <span className="text-gray-900">April 16-18, 2024 (9:00 AM - 5:00 PM)</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Bid Submission Deadline</span>
                  <span className="text-gray-900">April 22, 2024 (5:00 PM)</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Bid Opening</span>
                  <span className="text-gray-900">April 23, 2024 (11:00 AM)</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium text-gray-700">Tender Status</span>
                  <span className="text-gray-900 font-semibold">CLOSED</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Contact Information
              </h3>
              <p className="text-blue-800 mb-3">
                For further information/details, please contact:
              </p>
              <div className="space-y-1 text-blue-800">
                <p>
                  <span className="font-medium">Senior Officer Administration:</span> Mr. Abid Ali
                </p>
                <p>
                  <span className="font-medium">Phone:</span>{' '}
                  <a href="tel:03115087336" className="underline hover:text-blue-600">
                    0311-5087336
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
