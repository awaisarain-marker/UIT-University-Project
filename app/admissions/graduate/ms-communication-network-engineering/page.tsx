'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageBanner from '@/components/ui/page-banner';
import { Card, CardContent } from '@/components/ui/card';

export default function MSCommunicationNetworkEngineeringPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const graduatePrograms = [
    { name: 'MS Electrical Engineering', href: '/admissions/graduate/ms-electrical-engineering', active: false },
    { name: 'MS Communication and Network Engineering', href: '/admissions/graduate/ms-communication-network-engineering', active: true },
    { name: 'MS Computer Science', href: '/admissions/graduate/ms-computer-science', active: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageBanner
        title="MS Communication and Network Engineering"
        subtitle="Graduate Program"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Graduate Programs", href: "/admissions/graduate" },
          { label: "MS Communication and Network Engineering" }
        ]}
        backgroundImage="/images/bg-1-1.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Graduate Programs */}
          <aside className="lg:w-64 flex-shrink-0">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Graduate Programs</h3>
                <nav className="space-y-2">
                  {graduatePrograms.map((program, index) => (
                    <Link
                      key={index}
                      href={program.href}
                      className={`block px-4 py-2 rounded-md transition-colors ${
                        program.active
                          ? 'bg-primary text-primary-foreground font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {program.name}
                    </Link>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Program Hero Image Placeholder */}
            <Card className="mb-8">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-700 h-64 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-3xl font-bold mb-2">MS Communication and Network Engineering</h2>
                    <p className="text-lg">Program Hero Image Placeholder</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tab Navigation */}
            <div className="mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex flex-wrap -mb-px">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'courses', label: 'Courses' },
                    { id: 'eligibility', label: 'Eligibility' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-primary text-primary'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Salient Features</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <tbody>
                            <tr className="border-b">
                              <td className="py-3 px-4 font-semibold text-gray-900 bg-gray-50">Total Credit Hours (Minimum)</td>
                              <td className="py-3 px-4 text-gray-700">30</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 font-semibold text-gray-900 bg-gray-50">Total Duration</td>
                              <td className="py-3 px-4 text-gray-700">Minimum: 1.5 years (3 semesters) / Maximum: 4 years</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Options</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">i</span>
                          <div>
                            <p className="text-gray-900 font-semibold mb-1">With Course work:</p>
                            <p className="text-gray-700">10 courses of 3 credit hours each (30 credit hours total).</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">ii</span>
                          <div>
                            <p className="text-gray-900 font-semibold mb-1">With Dissertation:</p>
                            <p className="text-gray-700">8 courses of 3 credit hours each (24 credit hours) + Dissertation (6 credit hours).</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Mandatory Requirement</h4>
                      <p className="text-gray-700">
                        As per HEC instructions, two courses of 'Understanding of Holy Quran I and II' of one credit-hour each must be taken by the candidate.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Courses Tab */}
              {activeTab === 'courses' && (
                <div className="space-y-8">
                  {/* Compulsory (Core) Courses */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Compulsory (Core) Courses</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">S. No.</th>
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Code</th>
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Title</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Credit Hrs</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold" colSpan={3}>Contact Hours</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Marks</th>
                            </tr>
                            <tr className="bg-gray-50">
                              <th className="border border-gray-300 py-2 px-4"></th>
                              <th className="border border-gray-300 py-2 px-4"></th>
                              <th className="border border-gray-300 py-2 px-4"></th>
                              <th className="border border-gray-300 py-2 px-4"></th>
                              <th className="border border-gray-300 py-2 px-4 text-center text-sm">Th</th>
                              <th className="border border-gray-300 py-2 px-4 text-center text-sm">Pr</th>
                              <th className="border border-gray-300 py-2 px-4 text-center text-sm">Total</th>
                              <th className="border border-gray-300 py-2 px-4"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4">ELE7020</td><td className="border border-gray-300 py-2 px-4">Probability & Random Processes</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4">CNE7001</td><td className="border border-gray-300 py-2 px-4">Advanced Wireless Communications</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4">CNE7002</td><td className="border border-gray-300 py-2 px-4">Digital Communication Theory</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">4</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">4</td><td className="border border-gray-300 py-2 px-4">CNE8003</td><td className="border border-gray-300 py-2 px-4">Advanced Computer Networks</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Elective Courses */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Elective Courses</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">S. No.</th>
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Code</th>
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Title</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Credit Hrs</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold" colSpan={3}>Contact Hours</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Marks</th>
                            </tr>
                            <tr className="bg-gray-50">
                              <th className="border border-gray-300 py-2 px-4"></th>
                              <th className="border border-gray-300 py-2 px-4"></th>
                              <th className="border border-gray-300 py-2 px-4"></th>
                              <th className="border border-gray-300 py-2 px-4"></th>
                              <th className="border border-gray-300 py-2 px-4 text-center text-sm">Th</th>
                              <th className="border border-gray-300 py-2 px-4 text-center text-sm">Pr</th>
                              <th className="border border-gray-300 py-2 px-4 text-center text-sm">Total</th>
                              <th className="border border-gray-300 py-2 px-4"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4">ELE7092</td><td className="border border-gray-300 py-2 px-4">Research Methodology</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4">CNE7005</td><td className="border border-gray-300 py-2 px-4">AI and Machine Learning</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4">CNE7006</td><td className="border border-gray-300 py-2 px-4">Telecommunication Network Operations</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">4</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">4</td><td className="border border-gray-300 py-2 px-4">CNE7007</td><td className="border border-gray-300 py-2 px-4">Network Security and Cryptography</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">5</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">5</td><td className="border border-gray-300 py-2 px-4">CNE7008</td><td className="border border-gray-300 py-2 px-4">Information and Coding Theory</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">6</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">6</td><td className="border border-gray-300 py-2 px-4">CNE7009</td><td className="border border-gray-300 py-2 px-4">Optical Fiber Communication Networks</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">7</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">7</td><td className="border border-gray-300 py-2 px-4">CNE7010</td><td className="border border-gray-300 py-2 px-4">Satellite Communication Systems</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">8</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">8</td><td className="border border-gray-300 py-2 px-4">CNE8004</td><td className="border border-gray-300 py-2 px-4">Advanced Digital Signal Processing</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">9</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">9</td><td className="border border-gray-300 py-2 px-4">CNE8006</td><td className="border border-gray-300 py-2 px-4">Advanced Mobile Communication Networks</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Project and Dissertation */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Project & Dissertation</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Type</th>
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Code</th>
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Title</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Credit Hours</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border border-gray-300 py-2 px-4 font-semibold">Project</td><td className="border border-gray-300 py-2 px-4">CNE7080</td><td className="border border-gray-300 py-2 px-4">Independent Study Project (ISP)</td><td className="border border-gray-300 py-2 px-4 text-center">6</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 font-semibold">Dissertation</td><td className="border border-gray-300 py-2 px-4">CNE7090</td><td className="border border-gray-300 py-2 px-4">Dissertation</td><td className="border border-gray-300 py-2 px-4 text-center">9</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recommended Study Plan */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Recommended Study Plan</h3>
                      
                      <div className="space-y-6">
                        {/* Semester 1 */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">SEMESTER-1</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="border border-gray-300 py-3 px-4 text-center font-semibold">#</th>
                                  <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course</th>
                                  <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Credit Hours</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4">CORE-I</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                                <tr><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4">CORE-II</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                                <tr><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4">CORE-III</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                                <tr><td className="border border-gray-300 py-2 px-4 text-center">4</td><td className="border border-gray-300 py-2 px-4">RESEARCH METHODOLOGY (ELECTIVE-I)</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Semester 2 */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">SEMESTER-2</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="border border-gray-300 py-3 px-4 text-center font-semibold">#</th>
                                  <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course</th>
                                  <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Credit Hours</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4">CORE-IV</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                                <tr><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4">ELECTIVE-II</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                                <tr><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4">ELECTIVE-III / DISSERTATION</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Semester 3 */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">SEMESTER-3</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="border border-gray-300 py-3 px-4 text-center font-semibold">#</th>
                                  <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course</th>
                                  <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Credit Hours</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4">ELECTIVE-IV / DISSERTATION</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                                <tr><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4">ELECTIVE-V / III</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                                <tr><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4">ELECTIVE-VI / IV</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Eligibility Tab */}
              {activeTab === 'eligibility' && (
                <div className="space-y-8">
                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Requirements</h3>
                      <p className="text-gray-700 mb-4">
                        Sixteen years of schooling or 4-year education after HSSC or equivalent (minimum 124 credit hours) from HEC recognized degree awarding institute, with a minimum CGPA of 2.0 (on a scale of 4.0) or 60% marks, in any of the following fields:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-gray-700 list-disc">Computing</li>
                        <li className="text-gray-700 list-disc">Communication / Telecommunication</li>
                        <li className="text-gray-700 list-disc">Electronics</li>
                        <li className="text-gray-700 list-disc">Any other field as deemed relevant by the Admission Committee</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Requirements</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">1</span>
                          <span className="text-gray-700">Passing of a Graduate Assessment Test (GAT) or University Entrance Test is mandatory.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">2</span>
                          <span className="text-gray-700">Performance in a technical interview may be required for final admission.</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
