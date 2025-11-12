import React from 'react';
import PageBanner from '@/components/ui/page-banner';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function GraduateProgramsPage() {
  const programs = [
    { name: 'MS Electrical Engineering', href: '/admissions/graduate/ms-electrical-engineering' },
    { name: 'MS Communication and Network Engineering', href: '/admissions/graduate/ms-communication-network' },
    { name: 'MS Computer Science', href: '/admissions/graduate/ms-computer-science' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageBanner
        title="Graduate Programs"
        subtitle="Explore Our Master's Degree Programs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Graduate Programs" }
        ]}
        backgroundImage="/images/bg-1-1.jpg"
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Graduate Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Link key={index} href={program.href}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{program.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
