import PageBanner from '@/components/ui/page-banner';
import { Card, CardContent } from '@/components/ui/card';
import AdmissionsSidebar from '@/components/admissions/AdmissionsSidebar';
import Link from 'next/link';

export default function HowToApplyPage() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title="How to Apply / Online Admission Procedure"
        subtitle="Step-by-step guide to applying at UIT University"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admissions', href: '/admissions' },
          { label: 'How to Apply' }
        ]}
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <AdmissionsSidebar />
          
          <main className="flex-1">
            <div className="space-y-8">
              {/* I. Registration */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">I. Registration</h2>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                    <li>
                      Register at the admission portal by{' '}
                      <a 
                        href="https://eduboard.uit.edu/AdmissionPortal/Login" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-semibold"
                      >
                        clicking here
                      </a>.
                    </li>
                    <li>Open your email and click on the link received to validate your email address.</li>
                    <li>Proceed with the rest of the online application process using the link received.</li>
                  </ol>
                </CardContent>
              </Card>

              {/* II. Submission of Application Form */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">II. Submission of Application Form</h2>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                    <li>Log-in to the admission portal using your user ID & password.</li>
                    <li>
                      Fill in the details and upload a recent photograph. Please note that the photograph must be 
                      clear and on a white background. (see{' '}
                      <Link href="/admissions/photographs-specification" className="text-primary hover:underline font-semibold">
                        photograph specification
                      </Link>).
                    </li>
                    <li>Upload all required academic documents.</li>
                    <li>Submit the application and download the system-generated fee voucher.</li>
                  </ol>
                </CardContent>
              </Card>

              {/* III. Documents Required */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">III. Documents Required to Upload with the Application Form</h2>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li>SSC marks sheet / O-Level equivalency.</li>
                    <li>HSC-Part II consolidated marks sheet / A-Level equivalency.</li>
                    <li>SSC Certificate.</li>
                    <li>HSC Part-II admit card (for result awaited students).</li>
                    <li>CNIC/Form-B.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* IV. Application Processing Fee */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">IV. Application Processing Fee</h2>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                    <li>Print out the system-generated fee voucher after application submission.</li>
                    <li>Visit any branch of Meezan Bank and pay the admission processing fee PKR 3,000.</li>
                    <li>
                      Submit a scanned copy of the paid fee voucher through the admission portal and email at{' '}
                      <a href="mailto:admission@uitu.edu.pk" className="text-primary hover:underline font-semibold">
                        admission@uitu.edu.pk
                      </a>.
                    </li>
                  </ol>
                </CardContent>
              </Card>

              {/* V. Issuance of Admit Card */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">V. Issuance of Admit Card</h2>
                  <p className="text-gray-700">
                    After receiving all the information and confirmation of the fee receipt by UIT University, 
                    an email and SMS alert will be sent to the candidates to print out the admit card.
                  </p>
                </CardContent>
              </Card>

              {/* VI. Entrance Test */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">VI. Entrance Test</h2>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    <li>
                      The entrance test will be conducted on <strong>Saturday, January 10, 2026</strong>, 
                      at <strong>11:00 A.M.</strong> at UIT University.
                    </li>
                    <li>The candidate must bring the UIT University admit card on the entry test day.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* VII. Interview */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">VII. Interview</h2>
                  <p className="text-gray-700">
                    The candidate will receive a schedule of the interview via email & SMS.
                  </p>
                </CardContent>
              </Card>

              {/* VIII. Merit List */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">VIII. Merit List</h2>
                  <p className="text-gray-700">
                    The candidate will receive an email regarding the admission offer.
                  </p>
                </CardContent>
              </Card>

              {/* IX. Merit Determination Criteria */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">IX. Merit Determination Criteria</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Factor</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Weightage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">Weightage of Pre-Entry Admission test</td>
                          <td className="border border-gray-300 px-4 py-3 font-semibold">50%</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">Weightage of HSC marks OR equivalent</td>
                          <td className="border border-gray-300 px-4 py-3 font-semibold">40%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">Weightage of SSC marks OR equivalent</td>
                          <td className="border border-gray-300 px-4 py-3 font-semibold">10%</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">Pre-Admission Interviews</td>
                          <td className="border border-gray-300 px-4 py-3 font-semibold">ACCEPT/DECLINE</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* X. Submission of Documents */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">X. Submission of Documents</h2>
                  <p className="text-gray-700">
                    The candidate will be asked to visit UIT University to submit the admission fee along with 
                    their educational documents in order to receive their UIT University roll number.
                  </p>
                </CardContent>
              </Card>

              {/* XI. Payment of Registration Fee */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">XI. Payment of Registration Fee</h2>
                  <p className="text-gray-700 mb-4">
                    The candidate is required to pay the fee via pay order, using the following details:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        <strong>Account title:</strong> UIT University
                      </p>
                      <p className="text-gray-700">
                        <strong>NTN #:</strong> 4473774
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Important Links */}
      

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Important Links & Information</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      <strong>Admission Portal:</strong>{' '}
                      <a 
                        href="https://eduboard.uit.edu/AdmissionPortal/Login" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        https://eduboard.uit.edu/AdmissionPortal/Login
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <strong>Email:</strong>{' '}
                      <a href="mailto:admission@uitu.edu.pk" className="text-primary hover:underline">
                        admission@uitu.edu.pk
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <strong>Phone:</strong> 021-34994305 Ext: 3025, 3087, 03330399113
                    </p>
                    <p className="text-gray-700">
                      <strong>WhatsApp:</strong> 0333-0399113
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
