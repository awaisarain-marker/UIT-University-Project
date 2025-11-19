'use client';

import PageBanner from '@/components/ui/page-banner';
import StudentSidebar from '@/components/student/student-sidebar';
import { Book, Users, Clock, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Library"
        subtitle="Access library resources and services"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Student', href: '/student' },
          { label: 'Library Service', href: '/student/library-service/library' },
          { label: 'Library' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <StudentSidebar />
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  UIT University Library
                </h1>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    The UIT University Library and Learning Resource Center (LRC) provides comprehensive 
                    resources and services to support your academic research and learning needs.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Library Tour</h2>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/Ia0S3XBXXAE"
                    title="Library Tour"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Library Services</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Circulation Services / Lending</h3>
                    <p className="text-gray-700">
                      Members can borrow books and other materials from the library collection. Our circulation 
                      desk manages all lending activities and ensures smooth book transactions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Book Bank</h3>
                    <p className="text-gray-700">
                      The Book Bank facility provides textbooks to students for the entire semester, ensuring 
                      they have access to required course materials throughout their studies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Latest Arrivals</h3>
                    <p className="text-gray-700">
                      Stay updated with the newest additions to our collection. We regularly acquire the latest 
                      books, journals, and digital resources in various fields of study.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">OPAC / Online Book Reservation</h3>
                    <p className="text-gray-700 mb-2">
                      Our Online Public Access Catalog (OPAC) allows you to search the library collection and 
                      reserve books online.
                    </p>
                    <a
                      href="https://forms.gle/J6vRHBXvJbB5rHsB9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Reserve a Book Online
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Inter Library Loan Services (ILLS)</h3>
                    <p className="text-gray-700">
                      Access materials not available in our collection through our Inter Library Loan service. 
                      We coordinate with other libraries to fulfill your research needs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Selective Dissemination of Information (SDI)</h3>
                    <p className="text-gray-700">
                      Receive personalized information updates based on your research interests and academic needs. 
                      Our SDI service keeps you informed about new resources in your field.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Current Awareness Services (CAS)</h3>
                    <p className="text-gray-700">
                      Stay current with the latest publications, research, and developments in your area of study 
                      through our Current Awareness Services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Reference Service</h3>
                    <p className="text-gray-700 mb-2">Our reference librarians provide assistance with:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Research guidance and methodology</li>
                      <li>Database searching and information retrieval</li>
                      <li>Citation and bibliography preparation</li>
                      <li>Academic writing and research support</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Library Collection</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">General Collection</h3>
                    <p className="text-gray-700">
                      Our general collection includes a wide range of books covering various subjects and disciplines, 
                      supporting the curriculum and research needs of our academic community.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Reference Collection</h3>
                    <p className="text-gray-700">
                      The reference collection comprises encyclopedias, dictionaries, handbooks, and other reference 
                      materials that provide quick access to factual information and are available for in-library use.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Institutional Repository</h3>
                    <p className="text-gray-700">
                      Our institutional repository preserves and provides access to the intellectual output of the 
                      university, including theses, dissertations, research papers, and faculty publications.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Audio/Visual Collection</h3>
                    <p className="text-gray-700">
                      The audio/visual collection includes educational videos, documentaries, audio recordings, and 
                      multimedia resources that complement traditional learning materials.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Personal Collections</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-800 mb-2">Usman Collection</h4>
                        <p className="text-blue-900">
                          A valuable collection donated by Usman, featuring specialized books and resources that 
                          enrich our library holdings with unique perspectives and rare materials.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-blue-800 mb-2">Dr Muhammad Waseem Collection</h4>
                        <p className="text-blue-900">
                          This distinguished collection from Dr Muhammad Waseem includes scholarly works and research 
                          materials that reflect his academic contributions and expertise in his field.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-blue-800 mb-2">Zubair bin Umer Sidique Collection</h4>
                        <p className="text-blue-900">
                          The Zubair bin Umer Sidique Collection comprises carefully curated books and materials 
                          that add significant value to our library's specialized holdings.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-blue-800 mb-2">Gifted Collection of Faculty, Alumni and Students</h4>
                        <p className="text-blue-900">
                          This collection represents the generous contributions of our faculty, alumni, and students 
                          who have donated books and materials to support the academic community and preserve knowledge 
                          for future generations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Periodicals & Journals</h3>
                    <p className="text-gray-700">
                      Access current and back issues of academic journals, magazines, and periodicals covering a wide 
                      range of disciplines. Our collection includes both print and electronic subscriptions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Library Rules & Regulations</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <p className="text-gray-700 pt-1">
                      All library users must present a valid library card or university ID for entry and borrowing privileges.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <p className="text-gray-700 pt-1">
                      Maintain silence in the library premises. Use designated discussion areas for group work.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <p className="text-gray-700 pt-1">
                      Mobile phones must be switched to silent mode. Phone conversations are not permitted inside the library.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    <p className="text-gray-700 pt-1">
                      Food and beverages are strictly prohibited in the library to preserve the collection and maintain cleanliness.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">5</span>
                    </div>
                    <p className="text-gray-700 pt-1">
                      Return borrowed materials on or before the due date. Late returns will incur fines as per library policy.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">6</span>
                    </div>
                    <p className="text-gray-700 pt-1">
                      Handle all library materials with care. Report any damaged or missing pages to library staff immediately.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">7</span>
                    </div>
                    <p className="text-gray-700 pt-1">
                      Personal belongings must be kept in designated areas. The library is not responsible for lost or stolen items.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Book className="w-5 h-5 mr-2 text-blue-600" />
                    E-Resources
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="https://hec.gov.pk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
                        HEC Summon
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="https://hec.gov.pk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
                        HEC Digital Library
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="https://dl.acm.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
                        ACM Digital Library
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                        Free E-books
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                        Free E-books PDF
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Library Forms</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                        Library Membership form
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                        Library Book Bank form
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                        Book Request Form
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                        E-books and E-Articles Form
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Library Facilities</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      OPAC (Online Public Access Catalog)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      WiFi Internet Access
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Tutorial Room
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Reading Areas
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Computer Workstations
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Printing & Scanning Services
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Group Study Rooms
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    Library Hours
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Thursday:</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Friday:</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday:</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 pt-3 border-t">
                      * Library remains closed on Sundays and public holidays
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-blue-600" />
                    Contact Us
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start">
                      <Phone className="w-4 h-4 mr-2 mt-1 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone:</p>
                        <p>+92 21 34994305</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-4 h-4 mr-2 mt-1 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email:</p>
                        <a href="mailto:library@uitu.edu.pk" className="text-blue-600 hover:text-blue-800">
                          library@uitu.edu.pk
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-1 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Address:</p>
                        <p className="text-sm">UIT University, Karachi, Pakistan</p>
                        <a href="https://goo.gl/maps/9T6SKps5C81sMv5dA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm flex items-center mt-1">
                          View on Map
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-600" />
                    Library Officials
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Name</th>
                          <th className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Role</th>
                          <th className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Email</th>
                          <th className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Phone / Ext.</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-3 py-3 whitespace-nowrap text-gray-900 font-medium">Nuzhat Farzana</td>
                          <td className="px-3 py-3 whitespace-nowrap text-gray-700">Librarian</td>
                          <td className="px-3 py-3 text-gray-700">
                            <a href="mailto:nfarzana@uitu.edu.pk" className="text-blue-600 hover:text-blue-800">nfarzana@uitu.edu.pk</a>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap text-gray-700 text-xs">+92 21 34994305<br />Ext. 3023</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-3 whitespace-nowrap text-gray-900 font-medium">Saqib Ahmed</td>
                          <td className="px-3 py-3 whitespace-nowrap text-gray-700">Deputy Librarian</td>
                          <td className="px-3 py-3 text-gray-700">
                            <a href="mailto:saqahmed@uitu.edu.pk" className="text-blue-600 hover:text-blue-800">saqahmed@uitu.edu.pk</a>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap text-gray-700 text-xs">+92 21 34994305<br />Ext. 3027</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-3 whitespace-nowrap text-gray-900 font-medium">Ahson Raza</td>
                          <td className="px-3 py-3 whitespace-nowrap text-gray-700">Assistant Librarian</td>
                          <td className="px-3 py-3 text-gray-700">
                            <a href="mailto:araza@uitu.edu.pk" className="text-blue-600 hover:text-blue-800">araza@uitu.edu.pk</a>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap text-gray-700 text-xs">Ext. 3111</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-3 whitespace-nowrap text-gray-900 font-medium">Yasir Ali</td>
                          <td className="px-3 py-3 whitespace-nowrap text-gray-700">Assistant Librarian</td>
                          <td className="px-3 py-3 text-gray-700">
                            <a href="mailto:yali@uitu.edu.pk" className="text-blue-600 hover:text-blue-800">yali@uitu.edu.pk</a>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap text-gray-700 text-xs">+92 21 34994305<br />Ext. 3083</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-3 whitespace-nowrap text-gray-900 font-medium">Siraj Saeed</td>
                          <td className="px-3 py-3 whitespace-nowrap text-gray-700">Assistant Librarian</td>
                          <td className="px-3 py-3 text-gray-700">
                            <a href="mailto:ssaeed@uitu.edu.pk" className="text-blue-600 hover:text-blue-800">ssaeed@uitu.edu.pk</a>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap text-gray-700 text-xs">Ext. 3027</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
