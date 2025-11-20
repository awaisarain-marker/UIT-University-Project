'use client';

import PageBanner from '@/components/ui/page-banner';
import ContinuingEducationSidebar from '@/components/continuing-education/continuing-education-sidebar';
import Link from 'next/link';
import { FileText, BookOpen, Users, Award } from 'lucide-react';

export default function ContinuingEducationPage() {
  const sections = [
    {
      title: 'Registration Form',
      description: 'Download and submit the registration form to enroll in our continuing education programs.',
      icon: FileText,
      href: '/continuing-education/registration-form',
      color: 'blue'
    },
    {
      title: 'Short Courses',
      description: 'Explore our range of short courses designed to enhance your professional skills.',
      icon: BookOpen,
      href: '/continuing-education/short-courses',
      color: 'green'
    },
    {
      title: 'Workshops & Seminars',
      description: 'Participate in professional workshops and seminars led by industry experts.',
      icon: Users,
      href: '/continuing-education/workshops',
      color: 'purple'
    },
    {
      title: 'Certification Programs',
      description: 'Earn professional certifications to advance your career and expertise.',
      icon: Award,
      href: '/continuing-education/certification',
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Continuing Education"
        subtitle="Lifelong learning opportunities for professional development"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Continuing Education' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ContinuingEducationSidebar />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Continuing Education
          </h1>
          <p className="text-gray-600 text-lg">
            Our continuing education programs are designed to help professionals enhance their skills, 
            stay current with industry trends, and advance their careers through flexible learning opportunities.
          </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-600">
                      {section.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Get Started Today</h3>
          <p className="text-blue-800 mb-3">
            Ready to advance your career? Contact us to learn more about our programs:
          </p>
          <div className="space-y-1 text-blue-800">
            <p>
              <span className="font-medium">Email:</span>{' '}
              <a href="mailto:continuinged@uit.edu" className="underline hover:text-blue-600">
                continuinged@uit.edu
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
