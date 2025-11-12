'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageBanner from '@/components/ui/page-banner';
import { Card, CardContent } from '@/components/ui/card';

export default function MSComputerSciencePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const graduatePrograms = [
    { name: 'MS Electrical Engineering', href: '/admissions/graduate/ms-electrical-engineering', active: false },
    { name: 'MS Communication and Network Engineering', href: '/admissions/graduate/ms-communication-network-engineering', active: false },
    { name: 'MS Computer Science', href: '/admissions/graduate/ms-computer-science', active: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageBanner
        title="MS Computer Science"
        subtitle="Graduate Program"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Graduate Programs", href: "/admissions/graduate" },
          { label: "MS Computer Science" }
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
                <div className="bg-gradient-to-r from-emerald-600 to-teal-700 h-64 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-3xl font-bold mb-2">MS Computer Science</h2>
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Overview</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        The Master of Science in Computer Science (MS CS) program at UIT University is thoughtfully designed to develop high-caliber professionals, researchers, and academicians. The curriculum offers a comprehensive blend of in-depth and broad-based knowledge in core areas of computer science, aligned with the guidelines set by the Higher Education Commission (HEC) of Pakistan. Beyond the foundational coursework, students can pursue specialized tracks that foster advanced expertise in cutting-edge research domains and industry-relevant technologies.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Specializations</h3>
                      <p className="text-gray-700 mb-4">The program currently offers the following specializations:</p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-gray-700 list-disc">Computer Networks & Cloud Computing (CN&CC)</li>
                        <li className="text-gray-700 list-disc">Software Engineering and DevOps (SE&DevOPs)</li>
                        <li className="text-gray-700 list-disc">AI & Data Science (AI&DS)</li>
                        <li className="text-gray-700 list-disc">Cybersecurity and Threat Intelligence (CYS&TI)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Duration</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-32 font-semibold text-gray-900">Minimum Duration:</span>
                          <span className="text-gray-700">1.5 years or (03) regular semesters</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-32 font-semibold text-gray-900">Maximum Duration:</span>
                          <span className="text-gray-700">Four years. After which extension may be allowed as per HEC policy / UITU statutory body decision.</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Courses Tab */}
              {activeTab === 'courses' && (
                <div className="space-y-6">
                  {/* Semester 1 */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Semester 1</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">#</th>
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Credit Hours (Th)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4">CS Core – I</td><td className="border border-gray-300 py-2 px-4 text-center">3+0</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4">CS Core – II</td><td className="border border-gray-300 py-2 px-4 text-center">3+0</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4">CS Core – III</td><td className="border border-gray-300 py-2 px-4 text-center">3+0</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">4</td><td className="border border-gray-300 py-2 px-4">Elective – I / Research Methodology</td><td className="border border-gray-300 py-2 px-4 text-center">3+0</td></tr>
                            <tr className="bg-gray-50 font-semibold"><td colSpan={2} className="border border-gray-300 py-2 px-4 text-right">Total Credit Hours</td><td className="border border-gray-300 py-2 px-4 text-center">12</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Semester 2 */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Semester 2</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">#</th>
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Credit Hours (Th)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4">CS Core – IV</td><td className="border border-gray-300 py-2 px-4 text-center">3+0</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4">Elective – II</td><td className="border border-gray-300 py-2 px-4 text-center">3+0</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4">Elective – III / Thesis -I/Dissertation – I</td><td className="border border-gray-300 py-2 px-4 text-center">3+0</td></tr>
                            <tr className="bg-gray-50 font-semibold"><td colSpan={2} className="border border-gray-300 py-2 px-4 text-right">Total Credit Hours</td><td className="border border-gray-300 py-2 px-4 text-center">9</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Semester 3 */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Semester 3</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">#</th>
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Credit Hours (Th)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4">Elective – IV / Thesis – II /Dissertation – I</td><td className="border border-gray-300 py-2 px-4 text-center">3+0</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4">Elective – V / III</td><td className="border border-gray-300 py-2 px-4 text-center">3+0</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4">Elective – VI / IV</td><td className="border border-gray-300 py-2 px-4 text-center">3+0</td></tr>
                            <tr className="bg-gray-50 font-semibold"><td colSpan={2} className="border border-gray-300 py-2 px-4 text-right">Total Credit Hours</td><td className="border border-gray-300 py-2 px-4 text-center">9</td></tr>
                          </tbody>
                        </table>
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Minimum Requirements for Admission</h3>
                      <p className="text-gray-700">
                        Sixteen years of education in computing discipline earned from a recognized university with a minimum CGPA of 2.0 (on a scale of 4.0) or at least 60% Marks.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Admission Test Criteria</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">1</span>
                          <span className="text-gray-700">The UITU MS Admission Test must be passed prior to admission.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">2</span>
                          <span className="text-gray-700">An interview must be cleared that shall be conducted by the Admission Committee.</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Accepted Alternative Test Scores</h3>
                      <p className="text-gray-700 mb-4">In lieu of UITU MS Admission Test:</p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-gray-700 list-disc">Valid NTS GAT General Test result with a minimum 50% cumulative, OR</li>
                        <li className="text-gray-700 list-disc">50% marks in GRE / HAT general, OR</li>
                        <li className="text-gray-700 list-disc">50% marks in the UITU admission test</li>
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
