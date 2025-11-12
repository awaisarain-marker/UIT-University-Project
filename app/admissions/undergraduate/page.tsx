import React from 'react';
import PageBanner from '@/components/ui/page-banner';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function UndergraduateProgramsPage() {
  const programs = [
    { name: 'BS Computer Science', href: '/admissions/undergraduate/bs-computer-science' },
    { name: 'BS Software Engineering', href: '/admissions/undergraduate/bs-software-engineering' },
    { name: 'BS Artificial Intelligence', href: '/admissions/undergraduate/bs-artificial-intelligence' },
    { name: 'BS Data Science', href: '/admissions/undergraduate/bs-data-science' },
    { name: 'BE Electrical (Electronic)', href: '/admissions/undergraduate/be-electrical/electronic' },
    { name: 'BE Electrical (Power)', href: '/admissions/undergraduate/be-electrical/power' },
    { name: 'BE Computer Systems', href: '/admissions/undergraduate/be-computer-systems' },
    { name: 'BE Tech (Computer)', href: '/admissions/undergraduate/be-tech/computer' },
    { name: 'BE Tech (Software)', href: '/admissions/undergraduate/be-tech/software' },
    { name: 'BBA', href: '/admissions/undergraduate/bba' },
    { name: 'BS Accounting and Finance', href: '/admissions/undergraduate/bs-accounting-finance' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageBanner
        title="Undergraduate Programs"
        subtitle="Explore Our Bachelor's Degree Programs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Undergraduate Programs" }
        ]}
        backgroundImage="/images/bg-1-1.jpg"
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Undergraduate Programs</h2>
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
