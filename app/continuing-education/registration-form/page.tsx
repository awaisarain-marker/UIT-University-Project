'use client';

import PageBanner from '@/components/ui/page-banner';
import ContinuingEducationSidebar from '@/components/continuing-education/continuing-education-sidebar';
import { ExternalLink, FileText } from 'lucide-react';

export default function RegistrationFormPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Registration Form"
        subtitle="Download the registration form for continuing education programs"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Continuing Education', href: '/continuing-education' },
          { label: 'Registration Form' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ContinuingEducationSidebar />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Continuing Education Registration Form
          </h1>
          <p className="text-gray-600 mb-8">
            Download and complete the registration form to enroll in our continuing education programs.
          </p>

          <a
            href="https://uitu.edu.pk/wp-content/uploads/2024/01/Reg.FormUITU-NEW.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white border-l-4 border-blue-600 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start flex-1">
                <FileText className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Download Registration Form
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    UITU Continuing Education Registration Form (PDF)
                  </p>
                  <p className="text-xs text-gray-500">
                    Click to download and print the form
                  </p>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-blue-600 flex-shrink-0 ml-3" />
            </div>
          </a>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Instructions</h3>
            <ul className="list-disc list-inside space-y-2 text-blue-800 text-sm">
              <li>Download and print the registration form</li>
              <li>Fill out all required fields completely</li>
              <li>Attach necessary documents as mentioned in the form</li>
              <li>Submit the completed form to the admissions office</li>
            </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
