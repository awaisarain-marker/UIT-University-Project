import PageBanner from '@/components/ui/page-banner';
import CorporateLiaisonSidebar from '@/components/corporate-liaison/corporate-liaison-sidebar';
import { GraduationCap, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function JobPortalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Job Portal"
        subtitle="Career opportunities for students and alumni"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Corporate Liaison', href: '/corporate-liaison' },
          { label: 'Job Portal' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CorporateLiaisonSidebar />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Job Portal
              </h1>
              <p className="text-gray-600 text-lg text-center mb-8">
                Access the latest job opportunities, internships, and career placements available 
                for our students and alumni through our corporate partners.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* For Students Card */}
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      For Students
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Explore job opportunities, internships, and career placements tailored for students and recent graduates.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View Opportunities
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>

                {/* For Employers Card */}
                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                      <Building2 className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      For Employers
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Connect with talented students and alumni. Post job openings and find the perfect candidates for your organization.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Post a Job
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Assistance?</h3>
              <p className="text-blue-800 mb-3">
                For questions about the job portal or career services, please contact:
              </p>
              <div className="space-y-1 text-blue-800">
                <p>
                  <span className="font-medium">Email:</span>{' '}
                  <a href="mailto:careers@uit.edu" className="underline hover:text-blue-600">
                    careers@uit.edu
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
  );
}
