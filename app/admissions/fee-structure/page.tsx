import PageBanner from '@/components/ui/page-banner';
import { Card, CardContent } from '@/components/ui/card';
import AdmissionsSidebar from '@/components/admissions/AdmissionsSidebar';

export default function FeeStructurePage() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title="Fee Structure"
        subtitle="Tuition and other fees for UIT programs"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admissions', href: '/admissions' },
          { label: 'Fee Structure' }
        ]}
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <AdmissionsSidebar />
          
          <main className="flex-1 space-y-8">
            {/* Undergraduate Programs */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Undergraduate Programs – Fee Information</h2>
                <p className="text-sm text-gray-600 mb-6">Fall 2025 Semester</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="border border-gray-300 px-3 py-3 text-left font-semibold">Sr.</th>
                        <th className="border border-gray-300 px-3 py-3 text-left font-semibold min-w-[200px]">Programs</th>
                        <th className="border border-gray-300 px-3 py-3 text-right font-semibold">One Time Charges</th>
                        <th className="border border-gray-300 px-3 py-3 text-right font-semibold">Security Deposit</th>
                        <th className="border border-gray-300 px-3 py-3 text-right font-semibold">Semester Charges</th>
                        <th className="border border-gray-300 px-3 py-3 text-right font-semibold">Tuition Fee (per Credit Hour)</th>
                        <th className="border border-gray-300 px-3 py-3 text-right font-semibold">1st Semester Credit Hour</th>
                        <th className="border border-gray-300 px-3 py-3 text-right font-semibold">1st Semester Tuition Fee</th>
                        <th className="border border-gray-300 px-3 py-3 text-right font-semibold">Semester Fee at the time of Admission</th>
                        <th className="border border-gray-300 px-3 py-3 text-right font-semibold">Admission Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-3 py-3">1</td>
                        <td className="border border-gray-300 px-3 py-3">BS (Computer Science)</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">25,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">-</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">9,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">10,870</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">15</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">163,050</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">197,050</td>
                        <td className="border border-gray-300 px-3 py-3 text-right"></td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-3 py-3">2</td>
                        <td className="border border-gray-300 px-3 py-3">BS (Software Engineering)</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">25,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">-</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">9,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">10,870</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">15</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">163,050</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">197,050</td>
                        <td className="border border-gray-300 px-3 py-3 text-right"></td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-3 py-3">3</td>
                        <td className="border border-gray-300 px-3 py-3">BS (Artificial Intelligence)</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">25,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">15,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">9,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">8,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">15</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">120,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">169,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right"></td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-3 py-3">4</td>
                        <td className="border border-gray-300 px-3 py-3">BS (Data Science)</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">25,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">15,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">9,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">8,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">15</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">120,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">169,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right"></td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-3 py-3">5</td>
                        <td className="border border-gray-300 px-3 py-3">BE Computer Systems</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">25,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">15,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">10,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">6,700</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">16</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">107,200</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">157,200</td>
                        <td className="border border-gray-300 px-3 py-3 text-right"></td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-3 py-3">6</td>
                        <td className="border border-gray-300 px-3 py-3">BE Electrical</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">25,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">15,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">10,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">6,700</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">16</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">107,200</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">157,200</td>
                        <td className="border border-gray-300 px-3 py-3 text-right"></td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-3 py-3">7</td>
                        <td className="border border-gray-300 px-3 py-3">BS (Accounting & Finance)</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">25,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">15,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">10,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">5,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">17</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">85,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">135,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right"></td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-3 py-3">8</td>
                        <td className="border border-gray-300 px-3 py-3">BBA</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">25,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">15,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">10,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">5,400</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">17</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">91,800</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">141,800</td>
                        <td className="border border-gray-300 px-3 py-3 text-right"></td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-3 py-3">9</td>
                        <td className="border border-gray-300 px-3 py-3">B.E. Tech (Computer)</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">25,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">15,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">10,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">3,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">16</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">48,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">98,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right"></td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-3 py-3">10</td>
                        <td className="border border-gray-300 px-3 py-3">B.E. Tech (Software)</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">25,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">15,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">10,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">3,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">16</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">48,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">98,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>


            {/* Graduate Programs */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Graduate Programs – Fee Information</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="border border-gray-300 px-3 py-3 text-left font-semibold">Sr.</th>
                        <th className="border border-gray-300 px-3 py-3 text-left font-semibold min-w-[200px]">Programs</th>
                        <th className="border border-gray-300 px-3 py-3 text-right font-semibold">Admission Fee</th>
                        <th className="border border-gray-300 px-3 py-3 text-right font-semibold">Security Deposit</th>
                        <th className="border border-gray-300 px-3 py-3 text-right font-semibold">Semester Charges</th>
                        <th className="border border-gray-300 px-3 py-3 text-right font-semibold">Tuition Fee (per Credit Hour)</th>
                        <th className="border border-gray-300 px-3 py-3 text-right font-semibold">1st Semester Credit Hours</th>
                        <th className="border border-gray-300 px-3 py-3 text-right font-semibold">1st Semester Tuition Fee</th>
                        <th className="border border-gray-300 px-3 py-3 text-right font-semibold">Total at the time of Admission</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-3 py-3">11</td>
                        <td className="border border-gray-300 px-3 py-3">MS (Computer Science)</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">15,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">15,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">8,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">9,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">12</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">108,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">146,000</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-3 py-3">12</td>
                        <td className="border border-gray-300 px-3 py-3">MS (Electrical Engg.)</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">15,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">15,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">8,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">8,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">12</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">96,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">134,000</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-3 py-3">13</td>
                        <td className="border border-gray-300 px-3 py-3">MS (Comm & Net Engg.)</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">15,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">15,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">8,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">8,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right">12</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">96,000</td>
                        <td className="border border-gray-300 px-3 py-3 text-right font-semibold">134,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Notes Section */}
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Notes</h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>(a)</strong> An anticipated increase of about 10% in tuition fees is expected every Fall, 
                    in alignment with the annual inflation rate.
                  </p>
                  <p>
                    <strong>(b)</strong> University fees are subject to change without prior notice. The institution 
                    reserves the right to revise the fee structure at its discretion.
                  </p>
                  <p>
                    <strong>(c)</strong> The security deposit for BS (Computer Science) and BS (Software Engineering) 
                    programs will be charged in the second semester.
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
