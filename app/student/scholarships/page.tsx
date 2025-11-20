'use client';

import PageBanner from '@/components/ui/page-banner';
import StudentSidebar from '@/components/student/student-sidebar';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function ScholarshipsPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const scholarships = [
    {
      id: 'merit-top-position',
      category: 'Fresh Intake',
      title: 'Merit Scholarship for Top Position Holders of Intermediate or Equivalent Examination',
      benefits: [
        '100% tuition fee waiver for 1st semester',
        'Cash award of PKR 100,000 per annum (paid in two equal installments at the end of Fall and Spring semesters)'
      ],
      requirements: [
        'Must maintain minimum GPA/CGPA of 3.50 for continuation'
      ]
    },
    {
      id: 'merit-uitu-list',
      category: 'Fresh Intake',
      title: 'Merit Scholarship for Top Achievers in UITU\'s Merit List',
      benefits: [
        '1st Position Holder: 75% tuition fee waiver',
        '2nd Position Holder: 50% tuition fee waiver',
        '3rd Position Holder: 30% tuition fee waiver',
        'Cash award of PKR 60,000 per annum (paid in two equal installments at the end of Fall and Spring semesters)'
      ],
      requirements: [
        'Must maintain minimum GPA/CGPA of 3.50 for continuation'
      ]
    },
    {
      id: 'merit-alevel',
      category: 'Fresh Intake',
      title: 'Merit Scholarship for Outstanding Performers in A-Levels',
      benefits: [
        '100% tuition fee waiver for 1st semester'
      ],
      requirements: [
        'Minimum 3 A*\'s in A-Level',
        'Must fall in top 25% of merit list',
        'IBCC equivalence required'
      ]
    },
    {
      id: 'performance',
      category: 'Continuing Students',
      title: 'Performance Scholarship',
      benefits: [
        '1st Position Holder: 70% tuition fee concession (one for each batch)',
        '2nd Position Holder: 40% tuition fee concession (one for each batch)',
        '3rd Position Holder: 30% tuition fee concession (one for each batch)'
      ],
      requirements: []
    },
    {
      id: 'need-based',
      category: 'Continuing Students',
      title: 'Need Based Financial Assistance',
      benefits: [
        'Full or partial concession in tuition fee'
      ],
      requirements: [
        'Must maintain minimum CGPA of 2.50 for continuation'
      ]
    },
    {
      id: 'sibling',
      category: 'Continuing Students',
      title: 'Sibling Financial Assistance',
      benefits: [
        '5% concession in tuition fee'
      ],
      requirements: [
        'Must be brother or sister of an active student or alumnus',
        'Must meet prescribed criteria'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Scholarships"
        subtitle="Financial aid and scholarship opportunities"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Student', href: '/student' },
          { label: 'Scholarships' }
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
                Scholarships & Financial Assistance
              </h1>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  The university offers various scholarship programs to support deserving students in their 
                  academic pursuits. Explore available opportunities based on your eligibility and learn how to apply.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Fresh Intake Scholarships</h2>
              <div className="space-y-3 mb-8">
                {scholarships.filter(s => s.category === 'Fresh Intake').map((scholarship) => {
                  const isOpen = openFaq === scholarship.id;

                  return (
                    <div
                      key={scholarship.id}
                      className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(scholarship.id)}
                        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 text-left pr-4">
                          {scholarship.title}
                        </h3>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {isOpen && (
                        <div className="px-4 pb-4 pt-2 border-t border-gray-100">
                          <div className="mb-3">
                            <p className="font-semibold text-gray-900 mb-2">Benefits:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                              {scholarship.benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                              ))}
                            </ul>
                          </div>
                          {scholarship.requirements.length > 0 && (
                            <div>
                              <p className="font-semibold text-gray-900 mb-2">Requirements:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                                {scholarship.requirements.map((req, index) => (
                                  <li key={index}>{req}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Continuing Students Scholarships</h2>
              <div className="space-y-3">
                {scholarships.filter(s => s.category === 'Continuing Students').map((scholarship) => {
                  const isOpen = openFaq === scholarship.id;

                  return (
                    <div
                      key={scholarship.id}
                      className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(scholarship.id)}
                        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 text-left pr-4">
                          {scholarship.title}
                        </h3>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {isOpen && (
                        <div className="px-4 pb-4 pt-2 border-t border-gray-100">
                          <div className="mb-3">
                            <p className="font-semibold text-gray-900 mb-2">Benefits:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                              {scholarship.benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                              ))}
                            </ul>
                          </div>
                          {scholarship.requirements.length > 0 && (
                            <div>
                              <p className="font-semibold text-gray-900 mb-2">Requirements:</p>
                              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                                {scholarship.requirements.map((req, index) => (
                                  <li key={index}>{req}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Need Help?
              </h3>
              <p className="text-blue-800 mb-3">
                For questions about scholarships and financial aid, please contact:
              </p>
              <div className="space-y-1 text-blue-800">
                <p>
                  <span className="font-medium">Email:</span>{' '}
                  <a href="mailto:scholarships@uit.edu" className="underline hover:text-blue-600">
                    scholarships@uit.edu
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
