import Link from 'next/link'
import { ArrowLeft, Download, FileText } from 'lucide-react'
import PageBanner from '@/components/ui/page-banner'
import TendersSidebar from '@/components/tenders/tenders-sidebar'

export default function AuditoriumRenovationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Renovation of UIT University Auditorium"
        subtitle="Request for Proposal (RFP) for comprehensive auditorium renovation and modernization"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Tenders', href: '/tenders' },
          { label: 'Auditorium Renovation' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
                Tender / Request for Proposal (RFP) for Renovation of UIT University Auditorium
              </h1>

              {/* Introduction Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    At UIT University, Auditorium plays a pivotal role in the academic life at the campus. 
                    It promotes cultural and administrative life within the campus. It serves not just as a 
                    physical structure, but as a symbolic and functional centerpiece of campus life. As most 
                    of the events are held in the Auditorium, it also reflects the image of the University.
                  </p>
                  <p>
                    Originally constructed between 1996 and 1999, the Auditorium is now over 26 years old, 
                    and most of its core components – structural, electrical, and mechanical – have aged 
                    significantly, with only patchwork renovations carried out over the years.
                  </p>
                </div>
              </section>

              {/* Critical Issues Section */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Critical Issues Requiring Urgent Attention</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Structural degradation of the concrete floor and iron frame anchoring, posing safety risks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Termite damage and lifespan expiry of wooden wall panels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Obsolete, bulky seating with space inefficiency and poor ergonomics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Inefficient cooling systems due to aging cassette units and compromised ducting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Inadequate sound and multimedia infrastructure, previously replaced with ad hoc external solutions</span>
                  </li>
                </ul>
              </section>

              {/* Consultants Section */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Engaged Consultants</h3>
                <p className="text-gray-700 mb-4">
                  In view of these pressing needs, the University has decided to initiate the renovation 
                  of the Auditorium through a planned, professional, and design-focused approach. To ensure 
                  quality and longevity, the following industry-renowned consultants have been engaged:
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-4">
                  <h4 className="font-bold text-blue-900 mb-2">Architectural Design Consultant</h4>
                  <p className="text-blue-800">
                    <strong>M/s Najmi Bilgram Collaborative Limited</strong>, known for its excellence in 
                    institutional design and adaptive renovation of education facilities.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h4 className="font-bold text-green-900 mb-2">MEP (Mechanical, Electrical & Plumbing) Consultant</h4>
                  <p className="text-green-800">
                    <strong>M/s Excellent Associates</strong>, with strong expertise in engineering systems 
                    tailored to academic environments has been shortlisted and started working with the Architect.
                  </p>
                </div>
              </section>

              {/* University Philosophy Section */}
              <section className="mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    This initiative reflects the University's philosophy of <strong>"small but qualitative steps"</strong> and 
                    serves as a cornerstone for broader campus development in the future. The revitalized Auditorium 
                    will not only enhance functionality and safety but also symbolize the University's commitment to 
                    modern, student-centric learning spaces.
                  </p>
                  <p className="text-gray-700">
                    By investing in this renovation, UIT University reinforces its dedication to academic excellence, 
                    student experience, and institutional growth—one meaningful step at a time.
                  </p>
                </div>
              </section>

              {/* Importance Section */}
              <section className="mb-8">
                <div className="border-l-4 border-yellow-500 bg-yellow-50 p-6">
                  <p className="text-gray-800 italic">
                    The auditorium is not merely a large hall – it is a critical educational and cultural asset. 
                    It enhances the vibrancy, visibility, and versatility of university life and is vital to 
                    institutional development, student growth, and stakeholder engagement. Investing in its 
                    modernization ensures that it continues to serve these roles effectively in a fast-evolving 
                    educational landscape.
                  </p>
                </div>
              </section>
            </div>

            {/* Download RFP Document */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Download RFP Document</h2>
              <p className="text-gray-600 mb-6">
                Download the complete Request for Proposal document including technical specifications, 
                submission guidelines, and evaluation criteria.
              </p>
              
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                <FileText className="w-5 h-5 mr-2" />
                Download Complete RFP (PDF)
                <Download className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Need More Information?
              </h3>
              <p className="text-blue-800">
                For queries regarding this tender, please contact the Procurement Office at{' '}
                <a href="mailto:procurement@uit.edu" className="underline hover:text-blue-600 font-medium">
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
