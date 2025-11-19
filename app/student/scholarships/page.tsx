'use client';

import PageBanner from '@/components/ui/page-banner';
import StudentSidebar from '@/components/student/student-sidebar';
import { Award, DollarSign, GraduationCap, Users } from 'lucide-react';

export default function ScholarshipsPage() {
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
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-white rounded-lg shadow-md p-8">
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

              {/* Scholarships for Fresh Intake */}
              <div>
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Scholarships for Fresh Intake (First Semester)
                  </h2>
                </div>

                <div className="space-y-6">
                  {/* Merit Scholarship - Top Position Holders */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                    <div className="flex items-start mb-4">
                      <Award className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-blue-900 mb-2">
                          Merit Scholarship for Top Position Holders of Intermediate or Equivalent Examination
                        </h3>
                        <div className="bg-white rounded-lg p-4 mb-3">
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-semibold">Applicability:</span> Fresh Intake (First Semester)
                          </p>
                          <div className="mb-3">
                            <p className="font-semibold text-gray-900 mb-2">Benefits:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                              <li>100% tuition fee waiver for 1st semester</li>
                              <li>Cash award of PKR 100,000 per annum</li>
                            </ul>
                          </div>
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold">Continuation Requirement:</span> Must maintain minimum GPA/CGPA of 3.50
                          </p>
                        </div>
                        <p className="text-sm text-blue-800 italic">
                          * Cash award will be paid in two equal installments at the end of Fall and Spring semesters.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Merit Scholarship - Top Achievers in UITU Merit List */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-md p-6 border-l-4 border-green-600">
                    <div className="flex items-start mb-4">
                      <Award className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-green-900 mb-2">
                          Merit Scholarship for Top Achievers in UITU's Merit List
                        </h3>
                        <div className="bg-white rounded-lg p-4 mb-3">
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-semibold">Applicability:</span> Fresh Intake (First Semester)
                          </p>
                          <div className="mb-3">
                            <p className="font-semibold text-gray-900 mb-2">Benefits (Tuition Fee Waiver):</p>
                            <div className="overflow-x-auto">
                              <table className="min-w-full divide-y divide-gray-200 text-sm">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Position</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Tuition Fee Waiver</th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                  <tr>
                                    <td className="px-4 py-2 text-gray-900 font-medium">1st Position Holder</td>
                                    <td className="px-4 py-2 text-gray-700">75%</td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 text-gray-900 font-medium">2nd Position Holder</td>
                                    <td className="px-4 py-2 text-gray-700">50%</td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 text-gray-900 font-medium">3rd Position Holder</td>
                                    <td className="px-4 py-2 text-gray-700">30%</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold">Continuation Requirement:</span> Must maintain minimum GPA/CGPA of 3.50
                          </p>
                        </div>
                        <p className="text-sm text-green-800 italic">
                          * Cash award of PKR 60,000 per annum will be paid in two equal installments at the end of Fall and Spring semesters.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Merit Scholarship - Outstanding A-Level Performers */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                    <div className="flex items-start mb-4">
                      <Award className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-purple-900 mb-2">
                          Merit Scholarship for Outstanding Performers in A-Levels
                        </h3>
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-semibold">Applicability:</span> Fresh Intake (First Semester)
                          </p>
                          <div className="mb-3">
                            <p className="font-semibold text-gray-900 mb-2">Benefits:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                              <li>100% tuition fee waiver for 1st semester</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 mb-2">Requirements:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                              <li>Minimum 3 A*'s in A-Level</li>
                              <li>Must fall in top 25% of merit list</li>
                              <li>IBCC equivalence required</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scholarships for Continuing Students */}
              <div>
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Scholarships for Continuing Students (Ongoing)
                  </h2>
                </div>

                <div className="space-y-6">
                  {/* Performance Scholarship */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg shadow-md p-6 border-l-4 border-orange-600">
                    <div className="flex items-start mb-4">
                      <Award className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-orange-900 mb-2">
                          Performance Scholarship
                        </h3>
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-semibold">Applicability:</span> Continuing Students (Ongoing)
                          </p>
                          <div className="mb-3">
                            <p className="font-semibold text-gray-900 mb-2">Benefits (Tuition Fee Concession):</p>
                            <div className="overflow-x-auto">
                              <table className="min-w-full divide-y divide-gray-200 text-sm">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Position</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Concession</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Note</th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                  <tr>
                                    <td className="px-4 py-2 text-gray-900 font-medium">1st Position Holder</td>
                                    <td className="px-4 py-2 text-gray-700">70%</td>
                                    <td className="px-4 py-2 text-gray-600 text-xs">One for each batch</td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 text-gray-900 font-medium">2nd Position Holder</td>
                                    <td className="px-4 py-2 text-gray-700">40%</td>
                                    <td className="px-4 py-2 text-gray-600 text-xs">One for each batch</td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 text-gray-900 font-medium">3rd Position Holder</td>
                                    <td className="px-4 py-2 text-gray-700">30%</td>
                                    <td className="px-4 py-2 text-gray-600 text-xs">One for each batch</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Need Based Financial Assistance */}
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg shadow-md p-6 border-l-4 border-teal-600">
                    <div className="flex items-start mb-4">
                      <DollarSign className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-teal-900 mb-2">
                          Need Based Financial Assistance
                        </h3>
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-semibold">Applicability:</span> Continuing Students (Ongoing)
                          </p>
                          <div className="mb-3">
                            <p className="font-semibold text-gray-900 mb-2">Benefits:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                              <li>Full or partial concession in tuition fee</li>
                            </ul>
                          </div>
                          <p className="text-sm text-gray-700">
                            <span className="font-semibold">Continuation Requirement:</span> Must maintain minimum CGPA of 2.50
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sibling Financial Assistance */}
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg shadow-md p-6 border-l-4 border-indigo-600">
                    <div className="flex items-start mb-4">
                      <Users className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-indigo-900 mb-2">
                          Sibling Financial Assistance
                        </h3>
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-semibold">Applicability:</span> Continuing Students (Ongoing)
                          </p>
                          <div className="mb-3">
                            <p className="font-semibold text-gray-900 mb-2">Benefits:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                              <li>5% concession in tuition fee</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 mb-2">Requirements:</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                              <li>Must be brother or sister of an active student or alumnus</li>
                              <li>Must meet prescribed criteria</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
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
    </div>
  );
}
