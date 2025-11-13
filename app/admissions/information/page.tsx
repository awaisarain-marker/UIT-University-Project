import PageBanner from '@/components/ui/page-banner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdmissionsSidebar from '@/components/admissions/AdmissionsSidebar';

export default function AdmissionInformationPage() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title="Admission Information"
        subtitle="Essential eligibility criteria and important dates for UIT programs"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admissions', href: '/admissions' },
          { label: 'Information' }
        ]}
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <AdmissionsSidebar />
          
          <main className="flex-1">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            This page provides essential eligibility criteria and important dates for applying to the 
            Undergraduate and Graduate programs offered by the Departments of Computer Science, 
            Electrical Engineering, and Management Sciences.
          </p>
        </div>

        {/* Important Dates Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Important Dates</h2>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-600 mb-1">Online Application Portal</span>
                    <a 
                      href="https://eduboard.uit.edu/AdmissionPortal/Login" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      https://eduboard.uit.edu/AdmissionPortal/Login
                    </a>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-600 mb-1">Last Date for Application</span>
                    <span className="text-lg font-bold text-gray-900">Thursday, January 08, 2026</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-600 mb-1">Entrance Test Date</span>
                    <span className="text-lg font-bold text-gray-900">Saturday, January 10, 2026</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-600 mb-1">Test Time & Venue</span>
                    <span className="text-lg font-medium text-gray-900">11:00 AM / UIT University</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-600 mb-1">Academic Session Starts</span>
                    <span className="text-lg font-bold text-gray-900">February, 2026</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Eligibility Criteria Section */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-8">Eligibility Criteria</h2>

          {/* Computer Science Department */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Department of Computer Science</h3>
            
            {/* Undergraduate Programs */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">Undergraduate Programs (BS Computer Science, BS Software Engineering)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Requirement Type</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Criteria</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">Academic Background</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Passed either Higher Secondary Examination (HSC-II) in Pre-Engineering/Pre-Medical/Science General/Computer Science 
                          from any authorized board of intermediate education in Pakistan OR any equivalent foreign examination board.
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">Minimum Marks</td>
                        <td className="border border-gray-300 px-4 py-3">At least 50% or 550 marks.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">Pending Results</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Candidates awaiting their final result of HSC-II are eligible to apply.
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">Pre-Medical Requirement</td>
                        <td className="border border-gray-300 px-4 py-3">
                          HSC-II (Pre-medical) students must pass deficiency courses of Mathematics of 6 credit hours 
                          within one year of their regular studies.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Graduate Program - MS CS */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Graduate Program (MS Computer Science)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Requirement Type</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Criteria</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">Academic Background</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Sixteen years of schooling or 4-year education after HSSC or equivalent (minimum 124 credit hours) 
                          from an HEC recognized degree awarding institute.
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">Minimum Score</td>
                        <td className="border border-gray-300 px-4 py-3">
                          A minimum CGPA of 2.0 (on a scale of 4.0) or at least 60% Marks in a computing discipline.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">Relevant Fields</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Computing, Communication/Telecommunication, Electronics, or any other field deemed relevant by the Admission Committee.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Electrical Engineering Department */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Department of Electrical Engineering</h3>
            
            {/* MS Electrical Engineering */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">Graduate Program (MS Electrical Engineering)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Requirement Type</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Criteria</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">Academic Background</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Candidate must have a PEC-recognized BE / BS Engg. / BSc Engg. or equivalent degree.
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">Minimum Score</td>
                        <td className="border border-gray-300 px-4 py-3">
                          A minimum CGPA of 2.0 (on a scale of 4.0) or at least 60% Marks.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">Relevant Fields</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Electrical, Electronics, Controls, or relevant engineering disciplines.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* MS Communication and Network Engineering */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Graduate Program (MS Communication and Network Engineering)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Requirement Type</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Criteria</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">Academic Background</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Sixteen years of schooling or 4-year education after HSSC or equivalent (minimum 124 credit hours) 
                          from an HEC recognized degree awarding institute.
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">Minimum Score</td>
                        <td className="border border-gray-300 px-4 py-3">
                          A minimum CGPA of 2.0 (on a scale of 4.0) or at least 60% Marks.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">Relevant Fields</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Computing, Communication / Telecommunication, Electronics, or relevant fields.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Management Sciences Department */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Department of Management Sciences</h3>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Undergraduate Programs (BBA, BS Accounting and Finance)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Requirement Type</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Criteria</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">Academic Background</td>
                        <td className="border border-gray-300 px-4 py-3">
                          Passed either Higher Secondary Examination (HSC-II) or equivalent from any authorized board of 
                          intermediate education in Pakistan OR any equivalent foreign examination board.
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">Minimum Marks</td>
                        <td className="border border-gray-300 px-4 py-3">
                          At least 50% or 550 marks are eligible to apply for admission.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
          </main>
        </div>
      </div>
    </div>
  );
}
