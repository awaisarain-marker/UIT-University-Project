'use client';

import PageBanner from '@/components/ui/page-banner';
import CorporateLiaisonSidebar from '@/components/corporate-liaison/corporate-liaison-sidebar';
import Link from 'next/link';
import { FileText, Briefcase, Users, Calendar, Heart, Plane } from 'lucide-react';

export default function CorporateLiaisonPage() {
  const sections = [
    {
      title: 'MOUs',
      description: 'Explore our Memorandums of Understanding with industry partners and organizations.',
      icon: FileText,
      href: '/corporate-liaison/mous'
    },
    {
      title: 'Job Portal',
      description: 'Access career opportunities and job placements for students and alumni.',
      icon: Briefcase,
      href: '/corporate-liaison/job-portal'
    },
    {
      title: 'Alumni Engagement',
      description: 'Connect with our alumni network and participate in engagement activities.',
      icon: Users,
      href: '/corporate-liaison/alumni-engagement'
    },
    {
      title: 'Corporate Liaison Events',
      description: 'Stay updated on corporate events, seminars, and networking opportunities.',
      icon: Calendar,
      href: '/corporate-liaison/events'
    },
    {
      title: 'Corporate Social Responsibility',
      description: 'Learn about our CSR initiatives and community engagement programs.',
      icon: Heart,
      href: '/corporate-liaison/csr'
    },
    {
      title: 'Day Trip Learning',
      description: 'Participate in educational field trips and industry visits.',
      icon: Plane,
      href: '/corporate-liaison/day-trip-learning'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Corporate Liaison"
        subtitle="Bridging academia and industry for mutual growth"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Corporate Liaison' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CorporateLiaisonSidebar />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome to Corporate Liaison
              </h1>
              <p className="text-gray-600 text-lg">
                The Corporate Liaison Office serves as a bridge between the university and the corporate world, 
                facilitating partnerships, internships, job placements, and collaborative initiatives that benefit 
                both students and industry partners.
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
          </div>
        </div>
      </div>
    </div>
  );
}
