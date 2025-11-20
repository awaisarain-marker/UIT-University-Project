'use client';

import PageBanner from '@/components/ui/page-banner';
import StudentSidebar from '@/components/student/student-sidebar';
import { Users, Heart, Award, AlertCircle, Calendar, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function AffairsPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 'personality',
      icon: Users,
      title: 'Personality Development',
      content: [
        'Organizing activities and events',
        'Developing interpersonal skills',
        'Arranging corporate visits',
        'Professional development workshops'
      ]
    },
    {
      id: 'counseling',
      icon: Heart,
      title: 'Counseling & Mentoring',
      content: [
        'Internal and external counselors',
        'Academic support by seniors and peers',
        'Alumni mentorship connections',
        'Personal guidance and career counseling'
      ]
    },
    {
      id: 'awareness',
      icon: Award,
      title: 'Academic Awareness',
      content: [
        'Publicizing academic accomplishments',
        'Recognition programs and awards',
        'Showcasing research and projects',
        'Building academic excellence culture'
      ]
    },
    {
      id: 'complaints',
      icon: AlertCircle,
      title: 'Complaints & Grievances',
      content: [
        'Handling academic and non-academic issues',
        'Classification and prioritization',
        'Coordination for resolution',
        'Confidential and fair process'
      ]
    },
    {
      id: 'events',
      icon: Calendar,
      title: 'Events & Activities',
      content: [
        'Coordination of student society activities',
        'Facilitation of campus events',
        'Promotion of extracurricular programs',
        'Liaison with other departments',
        'Cultural and sports events',
        'Community engagement initiatives'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Student Affairs"
        subtitle="Supporting student life and campus activities"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Student', href: '/student' },
          { label: 'Affairs' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <StudentSidebar />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Office of Student Affairs
              </h1>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  The Office of Student Affairs is a service, support division, and a helpful friend 
                  to all students. We are dedicated to enhancing the student experience through various 
                  programs, services, and activities that support academic success and personal development.
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {faqs.map((faq) => {
                const Icon = faq.icon;
                const isOpen = openFaq === faq.id;

                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center">
                        <Icon className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-gray-900 text-left">
                          {faq.title}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          isOpen ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {isOpen && (
                      <div className="px-4 pb-4 pt-2 border-t border-gray-100">
                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                          {faq.content.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Get in Touch</h3>
              <p className="text-blue-800 mb-3">
                For any questions or support, please contact the Office of Student Affairs:
              </p>
              <div className="space-y-1 text-blue-800">
                <p>
                  <span className="font-medium">Email:</span>{' '}
                  <a href="mailto:studentaffairs@uit.edu" className="underline hover:text-blue-600">
                    studentaffairs@uit.edu
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
  );
}
