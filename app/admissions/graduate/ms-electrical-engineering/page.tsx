'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageBanner from '@/components/ui/page-banner';
import { Card, CardContent } from '@/components/ui/card';

export default function MSElectricalEngineeringPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const graduatePrograms = [
    { name: 'MS Electrical Engineering', href: '/admissions/graduate/ms-electrical-engineering', active: true },
    { name: 'MS Communication and Network Engineering', href: '/admissions/graduate/ms-communication-network-engineering', active: false },
    { name: 'MS Computer Science', href: '/admissions/graduate/ms-computer-science', active: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageBanner
        title="MS Electrical Engineering"
        subtitle="Graduate Program"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Graduate Programs", href: "/admissions/graduate" },
          { label: "MS Electrical Engineering" }
        ]}
        backgroundImage="/images/bg-1-1.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Engineering Programs */}
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
                <div className="bg-gradient-to-r from-indigo-600 to-purple-700 h-64 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-3xl font-bold mb-2">MS Electrical Engineering</h2>
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
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4">ELE8033</td><td className="border border-gray-300 py-2 px-4">Advanced Digital Control Systems</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4">ELE7034</td><td className="border border-gray-300 py-2 px-4">Advanced Instrumentation</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">4</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">4</td><td className="border border-gray-300 py-2 px-4">ELE7036</td><td className="border border-gray-300 py-2 px-4">Industrial Control System Design</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
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
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4">ECA7010</td><td className="border border-gray-300 py-2 px-4">Systems Engineering</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4">ECA7011</td><td className="border border-gray-300 py-2 px-4">Industrial Safety</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">4</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">4</td><td className="border border-gray-300 py-2 px-4">ECA7012</td><td className="border border-gray-300 py-2 px-4">Intelligent Systems</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">5</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">5</td><td className="border border-gray-300 py-2 px-4">ECA7013</td><td className="border border-gray-300 py-2 px-4">Mechatronics</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">6</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">6</td><td className="border border-gray-300 py-2 px-4">ELE7023</td><td className="border border-gray-300 py-2 px-4">Advanced Simulation Techniques</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">7</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">7</td><td className="border border-gray-300 py-2 px-4">ELE7031</td><td className="border border-gray-300 py-2 px-4">Unified Theory of Electrical Machines</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">8</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">8</td><td className="border border-gray-300 py-2 px-4">ELE7032</td><td className="border border-gray-300 py-2 px-4">Non-Linear Control Systems</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">9</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">9</td><td className="border border-gray-300 py-2 px-4">ELE8027</td><td className="border border-gray-300 py-2 px-4">Advanced Robotics</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">10</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">10</td><td className="border border-gray-300 py-2 px-4">ELE8028</td><td className="border border-gray-300 py-2 px-4">Advanced VLSI Technique</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">11</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">11</td><td className="border border-gray-300 py-2 px-4">ELE8029</td><td className="border border-gray-300 py-2 px-4">Advanced Solid State Drives</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">12</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">12</td><td className="border border-gray-300 py-2 px-4">ELE8030</td><td className="border border-gray-300 py-2 px-4">Advanced Power Electronics</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">13</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 text-center">13</td><td className="border border-gray-300 py-2 px-4">ECA8007</td><td className="border border-gray-300 py-2 px-4">Advanced Electrical Machine Design</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">-</td></tr>
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
                            <tr><td className="border border-gray-300 py-2 px-4 font-semibold">Project</td><td className="border border-gray-300 py-2 px-4">ECA7080</td><td className="border border-gray-300 py-2 px-4">Independent Study Project (ISP)</td><td className="border border-gray-300 py-2 px-4 text-center">6</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4 font-semibold">Dissertation</td><td className="border border-gray-300 py-2 px-4">ECA7090</td><td className="border border-gray-300 py-2 px-4">Dissertation</td><td className="border border-gray-300 py-2 px-4 text-center">9</td></tr>
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
                        Candidate must have a PEC-recognized BE / BS Engg. / BSc Engg. or equivalent degree, with a minimum CGPA of 2.0 (on a scale of 4.0) or 60% marks, in any of the following fields:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="text-gray-700 list-disc">Electrical Engineering</li>
                        <li className="text-gray-700 list-disc">Electronics Engineering</li>
                        <li className="text-gray-700 list-disc">Controls Engineering</li>
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
