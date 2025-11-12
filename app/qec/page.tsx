'use client';

import React, { useState } from 'react';
import PageBanner from '@/components/ui/page-banner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp, FileText, Mail, Phone } from 'lucide-react';

export default function QECPage() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('introduction');

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  // Team Members Data
  const teamMembers = [
    {
      name: 'Muhammad Iftikhar Mubbashir',
      title: 'Director QEC',
      phone: '02134978275',
      email: 'director.qec@uitu.edu.pk'
    },
    {
      name: 'Syeda Umme Aeman Kamal',
      title: 'Manager QEC',
      phone: '02134978275',
      email: 'manager.qec@uitu.edu.pk'
    },
    {
      name: 'Muhammad Hassan Shahbaz',
      title: 'Data Analyst',
      phone: '02134978275',
      email: 'data.analyst@uitu.edu.pk'
    },
    {
      name: 'Muhammad Latif',
      title: 'Office Boy',
      phone: 'N/A',
      email: 'N/A'
    }
  ];

  // Policies Data
  const policiesData = [
    {
      title: 'Policies for Students',
      policies: [
        'Admission Policy',
        'Dress Code Policy for Students',
        'Internship Policy',
        'Registration & Examination Policy',
        'Scholarship Policy',
        'Policy for Mentoring Female Students at UIT University',
        'Policy on Academic Standing Fall 2023',
        'Co-curricular and Extra-curricular Activities and Procedures 2024',
        'Academic Advisement'
      ]
    },
    {
      title: 'Academic Policies',
      policies: [
        'Anti-plagiarism',
        'CQI Policy',
        'Institution Quality Policy',
        'Policy on Compliance with the Pakistan Qualification Framework',
        'Program, Curriculum and Course Review Policy',
        'Interdisciplinary Research Policy',
        'Visiting Faculty Policy 2024',
        'Academic Program Approval and Procedure 2024',
        'Classroom Observation and Policy 2024',
        'Faculty Work Load Policy and Procedures'
      ]
    },
    {
      title: 'General Policies',
      policies: [
        'Center of Continuing Education (CCE)',
        'Inclusive Access to Academic, Co-Curricular, and Extracurricular Activities',
        'Automation and Digital Transformation Policy',
        'Communication of Approved Policies to all Stakeholders',
        'Document Control & Record Management Policy',
        'Open Door',
        'Social Media Management and Public Information Communication Policy (SMMPIC)',
        'Parking and Allied Services',
        'Employee Leave Policy',
        'Protection of Reporting Discrimination',
        'Grievance Policy and Procedure 2024',
        'Whistleblowing Policy 2024',
        'Resolution Numbering of Regular Meetings 2024',
        'Faculty and Staff Training and Development Policy and Procedures 2024',
        'Non-Discrimination Against Transgender Individuals',
        'Policy on Open Access to Library at UIT University'
      ]
    },
    {
      title: "HEC's Adopted Policies",
      policies: [
        'Policy for Students with Disabilities 2021',
        'Notification with Adopted Policy on Protection Against Sexual Harassment HEC',
        'Notification for the adoption of HEC Undergraduate Education policy',
        'Notification for the adoption of HEC Graduate Education policy',
        'Notification for the adoption of HEC Policy for Students with Disabilities'
      ]
    },
    {
      title: 'Archive',
      policies: [
        'Admission Policy 2024-2025',
        'Quality Assurance Policy',
        'Transfer of Credit Hours',
        'Harassment Act'
      ]
    }
  ];

  // Navigation Items
  const navigationItems = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'vision', label: 'Vision' },
    { id: 'mission', label: 'Mission & Objectives' },
    { id: 'calendar', label: 'Activity Calendar' },
    { id: 'organogram', label: 'Organogram' },
    { id: 'team', label: 'QEC Team' },
    { id: 'policies', label: 'University Policies' }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page Banner */}
      <PageBanner
        title="Quality Enhancement Cell (QEC)"
        subtitle="Ensuring Excellence in Education"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "QEC" }
        ]}
        backgroundImage="/images/bg-1-1.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation - Desktop/Tablet */}
          <aside className="hidden lg:block lg:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h3>
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Introduction Section */}
            <section id="introduction" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
              <div className="prose max-w-none space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Understanding the difficulties that higher education will face in the twenty-first century, the effects of globalization, and the need for a knowledge-based economy, UIT University started the Quality Enhancement Cell in April 2022. The goal is to assist the institution in its efforts to raise the level of instruction and research and make it compliant with global standards. The QEC thinks that quality is a continuous process of improvement rather than a one-time event.
                </p>
                <p>
                  The QEC is committed to fostering a culture of quality assurance and enhancement across all academic and administrative functions of the university. Through systematic evaluation, feedback mechanisms, and continuous improvement initiatives, we strive to maintain the highest standards of educational excellence.
                </p>
                <p>
                  Our approach is collaborative and inclusive, involving all stakeholders including faculty, students, staff, and external partners in the quality enhancement process. We believe that sustainable quality improvement can only be achieved through collective effort and shared commitment to excellence.
                </p>
              </div>
            </section>

            {/* Vision Section */}
            <section id="vision" className="mb-12 scroll-mt-24">
              <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Vision</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To establish UIT University as a center of excellence in higher education, recognized nationally and internationally for its commitment to quality, innovation, and continuous improvement in teaching, learning, and research.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Mission & Objectives Section */}
            <section id="mission" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mission & Objectives</h2>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Mission</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    To promote and sustain a culture of quality enhancement in all academic and administrative processes through systematic evaluation, continuous improvement, and stakeholder engagement.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Objectives</h3>
                  <ul className="space-y-3">
                    {[
                      'Develop and implement quality assurance mechanisms for academic programs',
                      'Monitor and evaluate teaching and learning processes',
                      'Facilitate faculty development and training programs',
                      'Ensure compliance with HEC and international quality standards',
                      'Promote research culture and scholarly activities',
                      'Establish effective feedback systems from all stakeholders',
                      'Support curriculum development and review processes',
                      'Foster institutional effectiveness through data-driven decision making',
                      'Enhance student learning outcomes and graduate attributes',
                      'Build partnerships with industry and academic institutions for quality benchmarking'
                    ].map((objective, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Activity Calendar Section */}
            <section id="calendar" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Activity Calendar 2024–2025</h2>
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-gray-700 mb-6">
                    View our comprehensive activity calendar for the academic year 2024-2025
                  </p>
                  <Button asChild>
                    <a href="/placeholder-calendar.pdf" target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4 mr-2" />
                      View Calendar (PDF)
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Organogram Section */}
            <section id="organogram" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">QEC Organogram</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <FileText className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">QEC Organogram</p>
                      <p className="text-sm">Image Placeholder</p>
                    </div>
                  </div>
                  <p className="text-center text-gray-600 mt-4">
                    Organizational structure of the Quality Enhancement Cell
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* QEC Team Section */}
            <section id="team" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">QEC Team</h2>
              
              {/* Team Photo Placeholder */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <FileText className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">QEC Team Photo</p>
                      <p className="text-sm">Image Placeholder</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Team Members Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-primary font-medium mb-4">{member.title}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">{member.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="w-4 h-4" />
                          <a 
                            href={member.email !== 'N/A' ? `mailto:${member.email}` : '#'}
                            className={member.email !== 'N/A' ? 'text-sm hover:text-primary transition-colors' : 'text-sm'}
                          >
                            {member.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* University Policies Section */}
            <section id="policies" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">University Policies</h2>
              <div className="space-y-4">
                {policiesData.map((group, groupIndex) => (
                  <Card key={groupIndex}>
                    <CardContent className="p-0">
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggleAccordion(group.title)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-xl font-semibold text-gray-900">{group.title}</h3>
                        {activeAccordion === group.title ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>

                      {/* Accordion Content */}
                      {activeAccordion === group.title && (
                        <div className="px-6 pb-6 border-t border-gray-200">
                          <div className="pt-4 space-y-3">
                            {group.policies.map((policy, policyIndex) => (
                              <div key={policyIndex} className="flex items-center justify-between py-2 hover:bg-gray-50 px-3 rounded-md transition-colors">
                                <span className="text-gray-700">{policy}</span>
                                <Button size="sm" variant="outline" asChild>
                                  <a href="/placeholder-policy.pdf" target="_blank" rel="noopener noreferrer">
                                    <FileText className="w-4 h-4 mr-2" />
                                    View PDF
                                  </a>
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
