import PageBanner from '@/components/ui/page-banner';
import { Card, CardContent } from '@/components/ui/card';
import AdmissionsSidebar from '@/components/admissions/AdmissionsSidebar';

export default function FeeRefundPolicyPage() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title="Fee Refund Policy"
        subtitle="Terms and conditions for fee refunds"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admissions', href: '/admissions' },
          { label: 'Fee Refund Policy' }
        ]}
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <AdmissionsSidebar />
          
          <main className="flex-1 space-y-6">
            {/* Policy Overview */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Overview</h2>
                <p className="text-gray-700 mb-6">
                  The policy is circulated by the Higher Education Commission (HEC) and represents the 
                  revised National Fee-Refund Policy for Higher Education Institutions in Pakistan, updated in 2024.
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-700">
                      <strong className="text-gray-900">Admission Fee:</strong> is non-refundable in any case.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-700">
                      <strong className="text-gray-900">Security Deposit:</strong> is refundable at the time of 
                      completion of degree or closing of admission subject to clearance.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-700">
                      <strong className="text-gray-900">Tuition Fee/Exam Fee/Enrolment Fee/Extra Curricular Charges:</strong> are 
                      refundable in accordance with the guidelines of the Higher Education Commission (HEC).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Policy Notes */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Important Policy Notes</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      The policy will be applicable from the commencement of classes. Days shall be counted 
                      including working days and holidays.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      The same policy will apply to candidates offered admissions with pending results as well 
                      as in the event of any issues arising in the HSC/A-Level/Equivalent results after the 
                      commencement of classes.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Refund Schedule */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Refund Schedule (From Commencement of Classes)
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="border border-gray-300 px-6 py-4 text-left font-semibold">
                          Days from Commencement of Classes
                        </th>
                        <th className="border border-gray-300 px-6 py-4 text-left font-semibold">
                          Refund % of Tuition Fee
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-6 py-4 text-gray-700">
                          Up to 10th day
                        </td>
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-green-700">
                          100% Fee Refund
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-6 py-4 text-gray-700">
                          Up to 15th day
                        </td>
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-green-600">
                          80% Fee Refund
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-6 py-4 text-gray-700">
                          Up to 20th day
                        </td>
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-yellow-600">
                          60% Fee Refund
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-6 py-4 text-gray-700">
                          Up to 30th day
                        </td>
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-orange-600">
                          50% Fee Refund
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-6 py-4 text-gray-700">
                          31st day onwards
                        </td>
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-red-600">
                          No Refund
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}
