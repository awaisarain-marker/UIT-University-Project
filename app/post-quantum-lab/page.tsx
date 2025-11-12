import React from 'react';
import PageBanner from '@/components/ui/page-banner';

export const metadata = {
  title: 'Post-Quantum Computing Lab | UIT University',
  description: 'Post-Quantum Computing Lab at UIT University - Advancing quantum-resistant cryptography and next-generation computing',
};

export default function PostQuantumLabPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Banner */}
      <PageBanner
        title="Post-Quantum Computing Lab"
        subtitle="Advancing Quantum-Resistant Technologies"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "ORIC", href: "/oric" },
          { label: "Post-Quantum Lab" }
        ]}
        backgroundImage="/images/bg-1-1.jpg"
      />

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Post-Quantum Computing Lab
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This page is under development. The Post-Quantum Computing Lab focuses on advancing research in quantum-resistant cryptography and next-generation computing technologies for a secure digital future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
