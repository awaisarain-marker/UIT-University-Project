import PageBanner from '@/components/ui/page-banner';
import { Card, CardContent } from '@/components/ui/card';
import AdmissionsSidebar from '@/components/admissions/AdmissionsSidebar';
import { Camera, FileImage, AlertCircle } from 'lucide-react';
import Image from 'next/image';

export default function PhotographsSpecificationPage() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title="Photographs Specification"
        subtitle="Requirements for application photographs"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admissions', href: '/admissions' },
          { label: 'Photographs Specification' }
        ]}
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <AdmissionsSidebar />
          
          <main className="flex-1 space-y-6">
            {/* Important Notice */}
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Important Notice</h3>
                    <p className="text-sm text-gray-700">
                      Please ensure your photograph meets all the requirements listed below. 
                      Applications with non-compliant photographs may be rejected.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* General Requirements */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Camera className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-gray-900">I. General Requirements</h2>
                </div>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>The photograph must be a <strong>recent passport-sized color photograph</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>The photo must be taken against a <strong>plain white or light background</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>The candidate must be <strong>looking directly at the camera with a neutral expression</strong>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>No shadows</strong> should be visible on the face or the background.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>
                      <strong>Head coverings</strong> are only permitted for religious reasons, 
                      provided the full facial features are visible.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Digital File Specifications */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileImage className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-gray-900">II. Digital File Specifications</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  The following table details the technical requirements for the digital file upload:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="border border-gray-300 px-6 py-4 text-left font-semibold">
                          Specification
                        </th>
                        <th className="border border-gray-300 px-6 py-4 text-left font-semibold">
                          Requirement
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">
                          File Format
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-gray-700">
                          JPEG/JPG only
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">
                          Minimum Resolution
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-gray-700">
                          300 x 400 pixels (width x height)
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">
                          Maximum File Size
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-gray-700">
                          100 KB
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">
                          Background Color
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-gray-700">
                          Plain White or light grey
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">
                          Clarity
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-gray-700">
                          Must be clear, sharp, and without red-eye.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">
                          Face Coverage
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-gray-700">
                          The face should occupy 70-80% of the photograph area.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Visual Example */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Checklist</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-green-700">✓ DO:</p>
                    <ul className="text-sm text-gray-700 space-y-1 pl-4">
                      <li>• Use a plain white/light background</li>
                      <li>• Face the camera directly</li>
                      <li>• Ensure good lighting</li>
                      <li>• Keep a neutral expression</li>
                      <li>• Upload JPEG/JPG format only</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-red-700">✗ DON&apos;T:</p>
                    <ul className="text-sm text-gray-700 space-y-1 pl-4">
                      <li>• Use colored backgrounds</li>
                      <li>• Wear sunglasses or hats</li>
                      <li>• Include shadows on face</li>
                      <li>• Submit blurry images</li>
                      <li>• Exceed 100 KB file size</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}
