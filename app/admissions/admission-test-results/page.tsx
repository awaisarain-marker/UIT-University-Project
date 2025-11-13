import PageBanner from '@/components/ui/page-banner';
import { Card, CardContent } from '@/components/ui/card';
import AdmissionsSidebar from '@/components/admissions/AdmissionsSidebar';
import { Download } from 'lucide-react';

export default function AdmissionTestResultsPage() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title="Admission Test Results"
        subtitle="Check your entrance test results"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admissions', href: '/admissions' },
          { label: 'Admission Test Results' }
        ]}
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <AdmissionsSidebar />
          
          <main className="flex-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">GAT Result Announcement - Fall 2025</h2>
                  <a
                    href="/images/GAT-result-announcement-Fall-2025.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </div>

                {/* PDF Viewer */}
                <div className="w-full border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                  <iframe
                    src="/images/GAT-result-announcement-Fall-2025.pdf"
                    className="w-full h-[600px] md:h-[700px] lg:h-[800px]"
                    title="GAT Result Announcement Fall 2025 PDF"
                  />
                </div>

                {/* Fallback message for mobile devices */}
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> If the PDF doesn&apos;t display properly on your device, 
                    please use the download button above to view it in your device&apos;s PDF reader.
                  </p>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}
