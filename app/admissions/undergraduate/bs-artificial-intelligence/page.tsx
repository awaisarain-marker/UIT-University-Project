'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageBanner from '@/components/ui/page-banner';
import { Card, CardContent } from '@/components/ui/card';

export default function BSArtificialIntelligencePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const computingPrograms = [
    { name: 'BS Computer Science', href: '/admissions/undergraduate/bs-computer-science', active: false },
    { name: 'BS Software Engineering', href: '/admissions/undergraduate/bs-software-engineering', active: false },
    { name: 'BS Artificial Intelligence', href: '/admissions/undergraduate/bs-artificial-intelligence', active: true },
    { name: 'BS Data Science', href: '/admissions/undergraduate/bs-data-science', active: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageBanner
        title="BS Artificial Intelligence"
        subtitle="Undergraduate Program"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Undergraduate Programs", href: "/admissions/undergraduate" },
          { label: "BS Artificial Intelligence" }
        ]}
        backgroundImage="/images/bg-1-1.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Computing Programs */}
          <aside className="lg:w-64 flex-shrink-0">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Computing Programs</h3>
                <nav className="space-y-2">
                  {computingPrograms.map((program, index) => (
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
                <div className="bg-gradient-to-r from-purple-600 to-blue-800 h-64 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-3xl font-bold mb-2">BS Artificial Intelligence</h2>
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
                    { id: 'peos-plos', label: "PEO's and PLO's" },
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
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The BS (AI) program gives the students an in-depth knowledge they need to transform large and complex scenarios into actionable decisions. The program and its curriculum focus on how complex inputs — such as knowledge, vision, language and huge databases — can be used to make decisions to enhance human capabilities.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        The curriculum of the BS (AI) program includes coursework in computing, mathematics, automated reasoning, statistics, computational modeling, introduction to classical artificial intelligence languages and case studies, knowledge representation and reasoning, artificial neural networks, machine learning, natural language processing, vision and symbolic computation. The program also encourages students to take courses in ethics and social responsibility, with the opportunity to participate in long term projects in which artificial intelligence can be applied to solve problems that can change the world for the better — in areas like agriculture, defense, healthcare, governance, transportation, e-commerce, finance and education.
                      </p>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Degree Requirements</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <tbody>
                            <tr className="border-b">
                              <td className="py-3 px-4 font-semibold text-gray-900 bg-gray-50">Duration of Program (In Years)</td>
                              <td className="py-3 px-4 text-gray-700">4</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 font-semibold text-gray-900 bg-gray-50">Number of semesters</td>
                              <td className="py-3 px-4 text-gray-700">8</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 font-semibold text-gray-900 bg-gray-50">Number of courses per semester</td>
                              <td className="py-3 px-4 text-gray-700">5-6</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 font-semibold text-gray-900 bg-gray-50">Total credit hours</td>
                              <td className="py-3 px-4 text-gray-700">141</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 font-semibold text-gray-900 bg-gray-50">Total number of courses</td>
                              <td className="py-3 px-4 text-gray-700">45 (Including Internship + Capstone Project I & II)</td>
                            </tr>
                          </tbody>
                        </table>
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
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Code</th>
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Title</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Credit Hours (Th)</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Lab</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border border-gray-300 py-2 px-4">CSC-101</td><td className="border border-gray-300 py-2 px-4">Introduction to Computing</td><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">CSC-102</td><td className="border border-gray-300 py-2 px-4">Programming Fundamentals</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4 text-center">4</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">ASC-116</td><td className="border border-gray-300 py-2 px-4">Applied Physics</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">HSC-121</td><td className="border border-gray-300 py-2 px-4">Communication Skills</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">HSC-102/103</td><td className="border border-gray-300 py-2 px-4">Islamic Studies / Ethics</td><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">2</td></tr>
                            <tr className="bg-gray-50 font-semibold"><td colSpan={4} className="border border-gray-300 py-2 px-4 text-right">Total</td><td className="border border-gray-300 py-2 px-4 text-center">15</td></tr>
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
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Code</th>
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Title</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Credit Hours (Th)</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Lab</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border border-gray-300 py-2 px-4">CSC-103</td><td className="border border-gray-300 py-2 px-4">Object Oriented Programming</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4 text-center">4</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">CSC-108</td><td className="border border-gray-300 py-2 px-4">Discrete Structures</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">CSC-111</td><td className="border border-gray-300 py-2 px-4">Digital Logic Design</td><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">ASC-111</td><td className="border border-gray-300 py-2 px-4">Calculus & Analytical Geometry</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">HSC-111</td><td className="border border-gray-300 py-2 px-4">English Composition & Comprehension</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">HSC-106</td><td className="border border-gray-300 py-2 px-4">Ideology and Constitution of Pakistan</td><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">2</td></tr>
                            <tr className="bg-gray-50 font-semibold"><td colSpan={4} className="border border-gray-300 py-2 px-4 text-right">Total</td><td className="border border-gray-300 py-2 px-4 text-center">18</td></tr>
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
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Code</th>
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Title</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Credit Hours (Th)</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Lab</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border border-gray-300 py-2 px-4">CSC-201</td><td className="border border-gray-300 py-2 px-4">Data Structures & Algorithms</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4 text-center">4</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">CSC-202</td><td className="border border-gray-300 py-2 px-4">Computer Organization and Assembly Language</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4 text-center">4</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">ASC-112</td><td className="border border-gray-300 py-2 px-4">Linear Algebra</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">HSC-211</td><td className="border border-gray-300 py-2 px-4">Technical & Business Writing</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">CSE-101</td><td className="border border-gray-300 py-2 px-4">Software Engineering Principles</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr className="bg-gray-50 font-semibold"><td colSpan={4} className="border border-gray-300 py-2 px-4 text-right">Total</td><td className="border border-gray-300 py-2 px-4 text-center">17</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Semester 4 */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Semester 4</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Code</th>
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Title</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Credit Hours (Th)</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Lab</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border border-gray-300 py-2 px-4">CSC-203</td><td className="border border-gray-300 py-2 px-4">Operating Systems</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4 text-center">4</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">CSC-204</td><td className="border border-gray-300 py-2 px-4">Database Systems</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4 text-center">4</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">ASC-202</td><td className="border border-gray-300 py-2 px-4">Multivariate Calculus</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">CAI-201</td><td className="border border-gray-300 py-2 px-4">Programming for AI</td><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">CIC-201</td><td className="border border-gray-300 py-2 px-4">Artificial Intelligence</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4 text-center">4</td></tr>
                            <tr className="bg-gray-50 font-semibold"><td colSpan={4} className="border border-gray-300 py-2 px-4 text-right">Total</td><td className="border border-gray-300 py-2 px-4 text-center">18</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Semester 5 */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Semester 5</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Code</th>
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Title</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Credit Hours (Th)</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Lab</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border border-gray-300 py-2 px-4">CNS-301</td><td className="border border-gray-300 py-2 px-4">Computer Networks</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4 text-center">4</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">CAI-301</td><td className="border border-gray-300 py-2 px-4">Machine Learning</td><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">ASC-201</td><td className="border border-gray-300 py-2 px-4">Probability & Statistics</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">CAI-302</td><td className="border border-gray-300 py-2 px-4">Knowledge Representation & Reasoning</td><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">HSC-110</td><td className="border border-gray-300 py-2 px-4">Civics and Community Engagement</td><td className="border border-gray-300 py-2 px-4 text-center">2</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">2</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">MSC-203</td><td className="border border-gray-300 py-2 px-4">Principles of Management</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr className="bg-gray-50 font-semibold"><td colSpan={4} className="border border-gray-300 py-2 px-4 text-right">Total</td><td className="border border-gray-300 py-2 px-4 text-center">18</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Semester 6 */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Semester 6</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Code</th>
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Title</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Credit Hours (Th)</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Lab</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border border-gray-300 py-2 px-4">CSC-301</td><td className="border border-gray-300 py-2 px-4">Design & Analysis of Algorithms</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">CSC-302</td><td className="border border-gray-300 py-2 px-4">Parallel & Distributed Computing</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">CNS-302</td><td className="border border-gray-300 py-2 px-4">Information Security</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">CAI-303</td><td className="border border-gray-300 py-2 px-4">Artificial Neural Networks</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">-</td><td className="border border-gray-300 py-2 px-4">AI Domain Elective – I</td><td className="border border-gray-300 py-2 px-4 text-center">2/3</td><td className="border border-gray-300 py-2 px-4 text-center">1/0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">-</td><td className="border border-gray-300 py-2 px-4">AI Domain Elective – II</td><td className="border border-gray-300 py-2 px-4 text-center">2/3</td><td className="border border-gray-300 py-2 px-4 text-center">1/0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr className="bg-gray-50 font-semibold"><td colSpan={4} className="border border-gray-300 py-2 px-4 text-right">Total</td><td className="border border-gray-300 py-2 px-4 text-center">18</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Semester 7 */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Semester 7</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Code</th>
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Title</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Credit Hours (Th)</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Lab</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border border-gray-300 py-2 px-4">CAI-401</td><td className="border border-gray-300 py-2 px-4">Computer Vision</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">1</td><td className="border border-gray-300 py-2 px-4 text-center">4</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">MSC-301</td><td className="border border-gray-300 py-2 px-4">Technopreneurship</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">-</td><td className="border border-gray-300 py-2 px-4">AI Domain Elective – III</td><td className="border border-gray-300 py-2 px-4 text-center">2/3</td><td className="border border-gray-300 py-2 px-4 text-center">1/0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">-</td><td className="border border-gray-300 py-2 px-4">AI Domain Elective – IV</td><td className="border border-gray-300 py-2 px-4 text-center">2/3</td><td className="border border-gray-300 py-2 px-4 text-center">1/0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">-</td><td className="border border-gray-300 py-2 px-4">Elective Supporting – I</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">CSC-498</td><td className="border border-gray-300 py-2 px-4">Capstone Project – I</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr className="bg-gray-50 font-semibold"><td colSpan={4} className="border border-gray-300 py-2 px-4 text-right">Total</td><td className="border border-gray-300 py-2 px-4 text-center">19</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Semester 8 */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Semester 8</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Code</th>
                              <th className="border border-gray-300 py-3 px-4 text-left font-semibold">Course Title</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Credit Hours (Th)</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Lab</th>
                              <th className="border border-gray-300 py-3 px-4 text-center font-semibold">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border border-gray-300 py-2 px-4">HSC-311</td><td className="border border-gray-300 py-2 px-4">Computing Professional Practices</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">-</td><td className="border border-gray-300 py-2 px-4">AI Domain Elective – V</td><td className="border border-gray-300 py-2 px-4 text-center">2/3</td><td className="border border-gray-300 py-2 px-4 text-center">1/0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">-</td><td className="border border-gray-300 py-2 px-4">AI Domain Elective – VI</td><td className="border border-gray-300 py-2 px-4 text-center">2/3</td><td className="border border-gray-300 py-2 px-4 text-center">1/0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">-</td><td className="border border-gray-300 py-2 px-4">AI Domain Elective – VII</td><td className="border border-gray-300 py-2 px-4 text-center">2/3</td><td className="border border-gray-300 py-2 px-4 text-center">1/0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr><td className="border border-gray-300 py-2 px-4">CSC-497</td><td className="border border-gray-300 py-2 px-4">Capstone Project – II</td><td className="border border-gray-300 py-2 px-4 text-center">0</td><td className="border border-gray-300 py-2 px-4 text-center">3</td><td className="border border-gray-300 py-2 px-4 text-center">3</td></tr>
                            <tr className="bg-gray-50 font-semibold"><td colSpan={4} className="border border-gray-300 py-2 px-4 text-right">Total</td><td className="border border-gray-300 py-2 px-4 text-center">15</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* PEOs and PLOs Tab */}
              {activeTab === 'peos-plos' && (
                <div className="space-y-8">
                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Educational Objectives (PEO's)</h3>
                      <p className="text-gray-700 mb-4">The graduates of the BS Artificial Intelligence program will have the knowledge, understanding and skills to:</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">1</span>
                          <span className="text-gray-700">Pursue diverse range of careers, advanced degrees or professional development in computing and artificial intelligence knowledge acquired during studies.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">2</span>
                          <span className="text-gray-700">Apply computing principles, and artificial intelligence knowledge to design innovative and sustainable solutions to meet business objectives and societal challenges.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">3</span>
                          <span className="text-gray-700">Communicate effectively and work efficiently as an individual and in interdisciplinary teams with high professional and ethical values.</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Outcomes (PLO's)</h3>
                      <p className="text-gray-700 mb-4">The students of BS Artificial Intelligence program are expected to attain the following outcomes by the time of graduation:</p>
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p><strong>1.</strong> Completion of an accredited program of study designed to prepare graduates as computing professionals.</p>
                        <p><strong>2.</strong> Apply knowledge of computing fundamentals, knowledge of a computing specialization, and mathematics, science, and domain knowledge appropriate for the computing specialization to the abstraction and conceptualization of computing models from defined problems and requirements.</p>
                        <p><strong>3.</strong> Identify, formulate, research literature, and solve complex computing problems reaching substantiated conclusions using fundamental principles of mathematics, computing sciences, and relevant domain disciplines.</p>
                        <p><strong>4.</strong> Design and evaluate solutions for complex computing problems, and design and evaluate systems, components, or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.</p>
                        <p><strong>5.</strong> Create, select, adapt and apply appropriate techniques, resources, and modern computing tools to complex computing activities, with an understanding of the limitations.</p>
                        <p><strong>6.</strong> Function effectively as an individual and as a member or leader in diverse teams and in multi-disciplinary settings.</p>
                        <p><strong>7.</strong> Communicate effectively with the computing community and with society at large about complex computing activities by being able to comprehend and write effective reports, design documentation, make effective presentations, and give and understand clear instructions.</p>
                        <p><strong>8.</strong> Understand and assess societal, health, safety, legal, and cultural issues within local and global contexts, and the consequential responsibilities relevant to professional computing practice.</p>
                        <p><strong>9.</strong> Understand and commit to professional ethics, responsibilities, and norms of professional computing practice.</p>
                        <p><strong>10.</strong> Recognize the need, and have the ability, to engage in independent learning for continual development as a computing professional.</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Mapping Image Placeholder */}
                  <Card>
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-r from-gray-100 to-gray-200 h-96 flex items-center justify-center">
                        <div className="text-center text-gray-600">
                          <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p className="text-lg font-semibold">Mapping SOs with PEOs Image</p>
                          <p className="text-sm">Placeholder for visual mapping diagram</p>
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
                      <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                        <p>
                          Students holding Higher Secondary School Certificate (HSC-II) in Pre-Engineering, Pre-Medical, Science General, Computer Science from any authorized board of intermediate education in Pakistan OR any equivalent foreign examination board with at least 50% or 550 out of 1100 marks are eligible to apply for admission.
                        </p>
                        <p>
                          Students awaiting the final result of HSC-II can also apply for conditional admission based on HSC-I results.
                        </p>
                        <p>
                          HSC-II (Pre-medical) or equivalent students are also eligible for admission. However, they must undertake deficiency courses in six-credit-hour Mathematics in the first year of regular studies.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Pre Entry Admission Test Eligibility Criteria</h3>
                      <p className="text-gray-700 mb-4">Candidates are required to:</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">1</span>
                          <span className="text-gray-700">Pass the university's pre-admission entry tests with at least 50% marks, OR</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">2</span>
                          <span className="text-gray-700">Pass the HEC Undergraduate Studies Admission Test (USAT) with at least 50% marks, OR</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">3</span>
                          <span className="text-gray-700">Hold a score of at least 800 in SAT-I and secured at least 1500 in relevant subjects.</span>
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
