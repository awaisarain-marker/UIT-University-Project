import PageBanner from '@/components/ui/page-banner';
import StudentSidebar from '@/components/student/student-sidebar';
import { ExternalLink } from 'lucide-react';

export default function LibraryFormPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Library Form"
        subtitle="Submit library service requests"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Student', href: '/student' },
          { label: 'Library Service', href: '/student/library-service/library' },
          { label: 'Library Form' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <StudentSidebar />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Library Forms
              </h1>
              <p className="text-gray-600 mb-6">
                Access various library service forms below.
              </p>
              
              <div className="space-y-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScaIxzXASVMWYnPR6tfLrP_p-UT8CmLPhKh3fIcIiJbOfinyA/viewform?vc=0&c=0&w=1&flr=0&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 bg-white border-l-4 border-blue-600 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Library Membership Form
                      </h3>
                      <p className="text-sm text-gray-600">
                        Register for library membership to access all library resources and services.
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-blue-600 flex-shrink-0 ml-3" />
                  </div>
                </a>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfWZWH8-FAk0v_7VAr482xDS7wdC81OGzvmzTpcvMal4JMylA/viewform?pli=1&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 bg-white border-l-4 border-blue-600 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Library Book Bank Form
                      </h3>
                      <p className="text-sm text-gray-600">
                        Apply for book bank services to borrow textbooks for the semester.
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-blue-600 flex-shrink-0 ml-3" />
                  </div>
                </a>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSclEasCya2i6uJLuBgGCxMBSOJjadc9waykS8mlVVZesSBIBQ/viewform?pli=1&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 bg-white border-l-4 border-blue-600 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Book Request Form
                      </h3>
                      <p className="text-sm text-gray-600">
                        Request new books or materials to be added to the library collection.
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-blue-600 flex-shrink-0 ml-3" />
                  </div>
                </a>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd53nwLzpi-2GYMrfyD4tMfvNjiKyKlNBr3KAQBhsMMUPNzGQ/viewform?vc=0&c=0&w=1&flr=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 bg-white border-l-4 border-blue-600 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        E-books and E-Articles Form
                      </h3>
                      <p className="text-sm text-gray-600">
                        Request access to digital resources including e-books and e-articles.
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-blue-600 flex-shrink-0 ml-3" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
