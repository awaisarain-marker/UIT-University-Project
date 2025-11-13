'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';

export default function AdmissionsSidebar() {
  const pathname = usePathname();

  const admissionsLinks = [
    { name: 'Undergraduate Programs', href: '/admissions/undergraduate' },
    { name: 'Graduate Programs', href: '/admissions/graduate' },
    { name: 'Information', href: '/admissions/information' },
    { name: 'FAQs', href: '/admissions/faq' },
    { name: 'How to Apply', href: '/admissions/how-to-apply' },
    { name: 'Sample Test Paper', href: '/admissions/sample-test-paper' },
    { name: 'Photographs Specification', href: '/admissions/photographs-specification' },
    { name: 'Fee Structure', href: '/admissions/fee-structure' },
    { name: 'Fee Refund Policy', href: '/admissions/fee-refund-policy' },
    { name: 'Scholarship Policy', href: '/admissions/scholarship-policy' },
    { name: 'Admission Test Results', href: '/admissions/admission-test-results' },
    { name: 'Outreach Programs', href: '/admissions/outreach-programs' }
  ];

  return (
    <aside className="lg:w-64 flex-shrink-0">
      <Card className="sticky top-24">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Admissions</h3>
          <nav className="space-y-2">
            {admissionsLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`block px-4 py-2 rounded-md transition-colors text-sm ${
                  pathname === link.href
                    ? 'bg-primary text-primary-foreground font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </CardContent>
      </Card>
    </aside>
  );
}
