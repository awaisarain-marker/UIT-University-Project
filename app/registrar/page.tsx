'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, UserCheck, Award, BellRing, GraduationCap, ClipboardList, Wallet, Scale, ScrollText } from 'lucide-react'
import PageBanner from '@/components/ui/page-banner'
import RegistrarSidebar from '@/components/registrar/registrar-sidebar'

export default function RegistrarPage() {
  const [activeTab, setActiveTab] = useState('credit-hours')

  const academicServices = [
    { title: 'General Policies', icon: BookOpen, href: '#general-policies' },
    { title: 'Policies for Students', icon: UserCheck, href: '#student-policies' },
    { title: 'Degree and Transcripts', icon: Award, href: '#transcripts' },
    { title: 'Result Announcement', icon: BellRing, href: '#results' },
    { title: 'Convocation', icon: GraduationCap, href: '#convocation' }
  ]

  const committees = [
    { title: 'Admission Selection Committee', icon: ClipboardList },
    { title: 'Scholarship Committee', icon: Wallet },
    { title: 'Student Disciplinary Committee', icon: Scale },
    { title: 'Code of Conduct', icon: ScrollText }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Office of the Registrar and Academic Operations"
        subtitle="Service | Accuracy | Privacy"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Registrar' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <RegistrarSidebar />
          </div>

          <div className="lg:col-span-3">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Office of the Registrar and Academic Operations
              </h1>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  The Office of the Registrar is pleased to support the University community by providing 
                  information and services to facilitate and promote the educational mission of the University. 
                  This role specifically includes providing information about and services related to academic 
                  programs and degree requirements, registration and enrollments, and maintenance of permanent 
                  academic records for students, faculty, staff and external constituencies in a timely, accurate, 
                  confidential and supportive manner in accordance with University policy, state and federal law.
                </p>
              </div>
            </div>

            {/* Academic Services */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Academic Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {academicServices.map((service) => {
                  const Icon = service.icon
                  return (
                    <a
                      key={service.title}
                      href={service.href}
                      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                          <Icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Academic Regulations */}
            <div className="bg-white rounded-lg shadow-md mb-8">
              <div className="border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 p-6 pb-4">Academic Regulations</h2>
                <div className="flex overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('credit-hours')}
                    className={`px-6 py-3 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === 'credit-hours'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Credit Hours & Semester
                  </button>
                  <button
                    onClick={() => setActiveTab('course-load')}
                    className={`px-6 py-3 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === 'course-load'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Course Load & Enrollment
                  </button>
                  <button
                    onClick={() => setActiveTab('grading')}
                    className={`px-6 py-3 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === 'grading'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Grading Scheme/System
                  </button>
                  <button
                    onClick={() => setActiveTab('freezing')}
                    className={`px-6 py-3 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === 'freezing'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Freezing of Semester
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Tab 1: Credit Hours & Semester */}
                {activeTab === 'credit-hours' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Credit Hours Definition</h3>
                      <p className="text-gray-700">
                        A "Credit Hour" is the unit of measuring educational credit, usually based on the number of 
                        classroom hours per week throughout a term. A unit of credit equates to three hours of student 
                        work per week (1 hour lecture plus 2 hours of homework or 3 hours of lab) for 16 weeks.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Credit Hours for Degrees</h3>
                      <p className="text-gray-700">
                        A credit hour means teaching/learning a theory course for one hour each week throughout the 
                        semester. One credit hour in laboratory/practical work would require lab contact of three hours 
                        per week. The credit hours are denoted by two digits within brackets (e.g., 3(3+0) for 3 theory 
                        hours; 4(3+1) for 3 theory + 1 lab hour).
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">CGPA Required for Completion</h3>
                      <p className="text-gray-700">
                        The minimum qualifying CGPAs for BS students is 2.00 and for MS/MPhil students is 2.50. Students 
                        falling below 2.00 CGPA at the end of the final semester may be allowed re-admission in courses 
                        graded below C, subject to regulations.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Course Layout for UG Students (124-140 Cr. Hrs)</h3>
                      <p className="text-gray-700">
                        Undergraduate degrees are composed of 124-140 Credit Hours (124 minimum, 140 maximum). A minimum 
                        of 160 credit hours is required for 5-year programs. 78-87 credit hours must be earned in the 
                        major area (Foundation or core courses & Elective courses).
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Fall/Spring Semester</h3>
                      <p className="text-gray-700">
                        Two regular semesters (Fall, Spring) per year, spreading over 16-18 weeks (inclusive of 1–2 weeks 
                        for exams).
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Summer Semester</h3>
                      <p className="text-gray-700">
                        Optional semester of 8–9 weeks duration. Students can enroll in a maximum of 8 credit hours for 
                        remedial work or grade improvement (1–2 courses). Contact hours are doubled.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Computation of GPA/CGPA</h3>
                      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Semester GPA (SGPA):</h4>
                          <div className="bg-white p-4 rounded border border-gray-200">
                            <p className="text-gray-700 text-center">
                              GPA = (Σ Course Credit Hours × Grade Point Earned) / Total Semester Credit Hours
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Cumulative GPA (CGPA):</h4>
                          <div className="bg-white p-4 rounded border border-gray-200">
                            <p className="text-gray-700 text-center">
                              CGPA = (Σ Course Credit Hours × Grade Point Earned for all Semesters) / Total Credit Hours taken in all Semesters
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Course Load & Enrollment */}
                {activeTab === 'course-load' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Undergraduate Course Load</h3>
                      <p className="text-gray-700">
                        Generally 15-18 credit hours per regular semester. The minimum required for a full-time student 
                        is 15 credit hours. Students with a CGPA above 3.5 or those who need the course to graduate on 
                        time may enroll for one course beyond 18 Cr. Hrs.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Graduate (MS/MPhil) Course Load</h3>
                      <p className="text-gray-700">
                        Normally 9-12 credit hours per regular semester. Minimum of 9 credit hours to be classified as 
                        a full-time student.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Academic Calendar</h3>
                      <p className="text-gray-700">
                        Universities must publish an Academic Calendar including: Semester starting/termination dates, 
                        Holidays, Mid-Term/Final exam weeks, and Result notification/transcript issue dates.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Enrollment / Registration</h3>
                      <p className="text-gray-700">
                        Students must choose courses prior to the start of a semester with advisor advice.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Add/Drop Period</h3>
                      <p className="text-gray-700">
                        Any change (add/drop) is allowed within the second week of the semester. No drop and add will 
                        be allowed after the third week.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Course Withdrawal (W)</h3>
                      <p className="text-gray-700">
                        Allowed during 4th to 6th week of the semester. Transcript records 'W' (Withdrawal), which has 
                        no impact on CGPA calculation.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Course Withdrawal (F)</h3>
                      <p className="text-gray-700">
                        A student withdrawing after the 6th week shall be automatically awarded 'F' grade, which shall 
                        count in the GPA.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Repeating Courses (F Grade)</h3>
                      <p className="text-gray-700">
                        If a student gets 'F' grade, s/he must repeat the course. The previous 'F' grade is recorded, 
                        but the new grade is used for CGPA calculation.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Repeating Courses (UG/C- Grade)</h3>
                      <p className="text-gray-700">
                        Undergraduate students may repeat a course with a grade below 'C'. Only the better grade is used 
                        for CGPA calculation. Institutions may define a maximum number (&lt;6) of courses allowed to repeat.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Repeating Courses (Graduate/C Grade)</h3>
                      <p className="text-gray-700">
                        Graduate students with a 'C' grade can repeat the course. Only the better grade is calculated in 
                        the CGPA, and it would be recorded with (Imp) on the transcript. Institutions may define a maximum 
                        number (&lt;3) of courses allowed to repeat.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Attendance</h3>
                      <p className="text-gray-700">
                        Attendance in classes is mandatory. Each Institution may develop a policy for minimum attendance 
                        (&gt;75 %) in a course.
                      </p>
                    </div>
                  </div>
                )}

                {/* Tab 3: Grading Scheme/System */}
                {activeTab === 'grading' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Grading Table</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                              Marks Range*
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                              Letter Grade
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                              GPA
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                              Remarks
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr><td className="px-6 py-4 text-sm text-gray-900">95 – 100</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">A+</td><td className="px-6 py-4 text-sm text-gray-900">4.00</td><td className="px-6 py-4 text-sm text-gray-700">Outstanding</td></tr>
                          <tr><td className="px-6 py-4 text-sm text-gray-900">90 – 94</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">A</td><td className="px-6 py-4 text-sm text-gray-900">4.00</td><td className="px-6 py-4 text-sm text-gray-700">Excellent</td></tr>
                          <tr><td className="px-6 py-4 text-sm text-gray-900">85 – 89</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">A-</td><td className="px-6 py-4 text-sm text-gray-900">3.67</td><td className="px-6 py-4 text-sm text-gray-700">Very Good</td></tr>
                          <tr><td className="px-6 py-4 text-sm text-gray-900">80 – 84</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">B+</td><td className="px-6 py-4 text-sm text-gray-900">3.33</td><td className="px-6 py-4 text-sm text-gray-700">Good</td></tr>
                          <tr><td className="px-6 py-4 text-sm text-gray-900">75 – 79</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">B</td><td className="px-6 py-4 text-sm text-gray-900">3.00</td><td className="px-6 py-4 text-sm text-gray-700">Fair</td></tr>
                          <tr><td className="px-6 py-4 text-sm text-gray-900">70 – 74</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">B-</td><td className="px-6 py-4 text-sm text-gray-900">2.67</td><td className="px-6 py-4 text-sm text-gray-700">Average</td></tr>
                          <tr><td className="px-6 py-4 text-sm text-gray-900">65 – 69</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">C+</td><td className="px-6 py-4 text-sm text-gray-900">2.33</td><td className="px-6 py-4 text-sm text-gray-700">Below Average</td></tr>
                          <tr><td className="px-6 py-4 text-sm text-gray-900">60 – 64</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">C</td><td className="px-6 py-4 text-sm text-gray-900">2.00</td><td className="px-6 py-4 text-sm text-gray-700">Satisfactory</td></tr>
                          <tr><td className="px-6 py-4 text-sm text-gray-900">55 – 59</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">C-</td><td className="px-6 py-4 text-sm text-gray-900">1.67</td><td className="px-6 py-4 text-sm text-gray-700">Pass</td></tr>
                          <tr><td className="px-6 py-4 text-sm text-gray-900">&gt; 55</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">P</td><td className="px-6 py-4 text-sm text-gray-900">N</td><td className="px-6 py-4 text-sm text-gray-700">Passed Non-credit Course</td></tr>
                          <tr><td className="px-6 py-4 text-sm text-gray-900">&lt; 55</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">F</td><td className="px-6 py-4 text-sm text-gray-900">–</td><td className="px-6 py-4 text-sm text-gray-700">Fail</td></tr>
                          <tr><td className="px-6 py-4 text-sm text-gray-900">–</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">FN</td><td className="px-6 py-4 text-sm text-gray-900">–</td><td className="px-6 py-4 text-sm text-gray-700">Failed Non-credit Course</td></tr>
                          <tr><td className="px-6 py-4 text-sm text-gray-900">–</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">D</td><td className="px-6 py-4 text-sm text-gray-900">–</td><td className="px-6 py-4 text-sm text-gray-700">Failed in Discipline Case</td></tr>
                          <tr><td className="px-6 py-4 text-sm text-gray-900">–</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">E</td><td className="px-6 py-4 text-sm text-gray-900">–</td><td className="px-6 py-4 text-sm text-gray-700">Exempted Course</td></tr>
                          <tr><td className="px-6 py-4 text-sm text-gray-900">–</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">I</td><td className="px-6 py-4 text-sm text-gray-900">–</td><td className="px-6 py-4 text-sm text-gray-700">Incomplete</td></tr>
                          <tr><td className="px-6 py-4 text-sm text-gray-900">–</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">W</td><td className="px-6 py-4 text-sm text-gray-900">–</td><td className="px-6 py-4 text-sm text-gray-700">Withdrawal</td></tr>
                          <tr><td className="px-6 py-4 text-sm text-gray-900">–</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">WU</td><td className="px-6 py-4 text-sm text-gray-900">–</td><td className="px-6 py-4 text-sm text-gray-700">Withdrawal Unofficially</td></tr>
                          <tr><td className="px-6 py-4 text-sm text-gray-900">–</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">AU</td><td className="px-6 py-4 text-sm text-gray-900">–</td><td className="px-6 py-4 text-sm text-gray-700">Audit</td></tr>
                          <tr><td className="px-6 py-4 text-sm text-gray-900">–</td><td className="px-6 py-4 text-sm font-semibold text-gray-900">TR</td><td className="px-6 py-4 text-sm text-gray-900">–</td><td className="px-6 py-4 text-sm text-gray-700">Transfer of Credits</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-gray-600 italic">*Any fraction of marks will be rounded to the nearest integer.</p>
                  </div>
                )}

                {/* Tab 4: Freezing of Semester */}
                {activeTab === 'freezing' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">General Policy</h3>
                      <p className="text-gray-700">
                        If a student freezes a semester(s), s/he will resume his/her studies from the same stage where 
                        s/he left (froze). No freezing during the semester will be allowed. The maximum duration of the 
                        degree program shall remain the same.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Enrollment Status</h3>
                      <p className="text-gray-700">
                        If a student is not enrolled in any course in a semester, s/he will not be considered a regular 
                        student of the university in that period.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Duration</h3>
                      <p className="text-gray-700">
                        The duration of Freezing is one year. A candidate who freezes a semester can get re-admission 
                        next year with the upcoming session.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Prerequisite for Freezing</h3>
                      <p className="text-gray-700">
                        Freezing of Semester will only be allowed after successful completion of the 1st Semester as 
                        a prerequisite.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Restrictions</h3>
                      <p className="text-gray-700">
                        Freezing of the first two semesters for BS and the first semester for MS is not allowed, except 
                        in special hardship circumstances with approval from the competent authority.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Hardship Cases</h3>
                      <p className="text-gray-700 mb-3">
                        Special hardship circumstances that may be considered include:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Iddat</li>
                        <li>Maternity/Delivery</li>
                        <li>Death in the immediate family</li>
                        <li>Any other subject to acceptance on justified rationale</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Medical Certificate</h3>
                      <p className="text-gray-700">
                        Medical certificates must be duly signed by the University Medical Officer.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Administrative Committees */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Administrative Committees</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {committees.map((committee) => {
                  const Icon = committee.icon
                  return (
                    <div
                      key={committee.title}
                      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                          <Icon className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{committee.title}</h3>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
