import PageBanner from '@/components/ui/page-banner';
import StudentSidebar from '@/components/student/student-sidebar';

export default function StudentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Student Services"
        subtitle="Access student resources and services"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Student' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <StudentSidebar />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Welcome to Student Services
              </h1>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Access all student services and resources from the sidebar menu. We provide comprehensive 
                  support for your academic journey including portal access, student affairs, library services, 
                  and scholarship information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
