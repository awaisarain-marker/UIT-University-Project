'use client'

import Link from 'next/link'
import { ArrowLeft, Calendar, Download } from 'lucide-react'
import PageBanner from '@/components/ui/page-banner'
import RegistrarSidebar from '@/components/registrar/registrar-sidebar'

export default function Spring2025CalendarPage() {
  const handleDownloadPDF = async () => {
    const { jsPDF } = await import('jspdf')
    await import('jspdf-autotable')

    const pdf = new jsPDF('p', 'mm', 'a4')
    
    pdf.setFontSize(18)
    pdf.setFont('helvetica', 'bold')
    pdf.text('Academic Calendar Spring 2025', pdf.internal.pageSize.getWidth() / 2, 20, { align: 'center' })
    
    pdf.setFontSize(10)
    pdf.setFont('helvetica', 'normal')
    pdf.text('UIT University', pdf.internal.pageSize.getWidth() / 2, 28, { align: 'center' })
    
    const tableData = calendarData.map(item => [
      item.sNo,
      item.description,
      item.from,
      item.to,
      item.week,
      item.remarks
    ])
    
    ;(pdf as any).autoTable({
      startY: 35,
      head: [['S.#', 'Description', 'From', 'To', 'Week #', 'Remarks']],
      body: tableData,
      theme: 'grid',
      headStyles: {
        fillColor: [59, 130, 246],
        textColor: 255,
        fontStyle: 'bold',
        halign: 'left'
      },
      styles: {
        fontSize: 8,
        cellPadding: 3,
        overflow: 'linebreak'
      },
      columnStyles: {
        0: { cellWidth: 10, halign: 'center' },
        1: { cellWidth: 60 },
        2: { cellWidth: 30 },
        3: { cellWidth: 30 },
        4: { cellWidth: 10, halign: 'center' },
        5: { cellWidth: 40 }
      },
      margin: { top: 35, left: 10, right: 10 }
    })
    
    pdf.save('Academic-Calendar-Spring-2025.pdf')
  }

  const calendarData = [
    { sNo: '1', description: 'Registrations - Spring 2025', from: 'February 13, 2025', to: 'February 27, 2025', week: '', remarks: '' },
    { sNo: '2', description: 'Display Time Table / Class Schedule', from: 'February 04, 2025', to: '', week: '', remarks: '' },
    { sNo: '3', description: 'Commencement of Classes', from: 'February 17, 2025', to: '', week: '01', remarks: '' },
    { sNo: '4', description: 'Last Date to ADD Course(s)', from: 'February 27, 2025', to: '', week: '02', remarks: '' },
    { sNo: '5', description: 'Last Date to Drop Course(s) without Financial Penalty', from: 'February 27, 2025', to: '', week: '02', remarks: '' },
    { sNo: '6', description: 'Last Date for the Payment of Fee', from: 'February 27, 2025', to: '', week: '02', remarks: '' },
    { sNo: '7', description: 'First Day of Ramazan 2025*', from: 'March 1, 2025', to: '', week: '02', remarks: '1st Ramazan 1446*' },
    { sNo: '8', description: 'Pakistan Day', from: 'March 23, 2025', to: '', week: '', remarks: 'Gazetted holiday' },
    { sNo: '9', description: 'Spring Break / Eid-ul-Fitr 2025*', from: 'March 24, 2025', to: 'April 03, 2025', week: '', remarks: 'No Classes' },
    { sNo: '10', description: 'FYP Milestone (EL & CS) 2021B', from: 'April 07, 2025', to: 'April 12, 2025', week: '08', remarks: '' },
    { sNo: '11', description: 'Last date to withdraw from Course(s)', from: 'April 18, 2025', to: '', week: '09', remarks: '"W" grade will be awarded' },
    { sNo: '12', description: 'Labor Day', from: 'May 1, 2025', to: '', week: '', remarks: 'Gazetted Holiday' },
    { sNo: '13', description: 'Mid-Term Examinations', from: 'May 05, 2025', to: 'May 10, 2025', week: '11', remarks: '' },
    { sNo: '14', description: 'Mid-Term Exam Results in EDU Portal', from: 'May 19, 2025', to: 'May 24, 2025', week: '13', remarks: '' },
    { sNo: '15', description: 'Display of Final Examination Time Table & Faculty and Course Evaluation', from: 'May 26, 2025', to: 'May 31, 2025', week: '14', remarks: '' },
    { sNo: '16', description: 'Final Year Milestone SP-23, FA-23', from: 'June 2, 2025', to: 'June 5, 2025', week: '14', remarks: '' },
    { sNo: '17', description: 'Entry of Sessional Marks in EDU portal', from: 'June 2, 2025', to: 'June 5, 2025', week: '14', remarks: '' },
    { sNo: '18', description: 'List Short of Attendance (SOA) to be Displayed', from: 'June 2, 2025', to: 'June 5, 2025', week: '14', remarks: '' },
    { sNo: '19', description: 'Submission of Final Exam Paper', from: 'June 5, 2025', to: '', week: '14', remarks: '' },
    { sNo: '20', description: 'Eid-Al-Adha*', from: 'June 6, 2025', to: 'June 8, 2025', week: '15', remarks: '10 Dhul-Hijjah 1446 AH*' },
    { sNo: '21', description: 'Final Lab Exams', from: 'June 16, 2025', to: 'June 21, 2025', week: '16', remarks: '' },
    { sNo: '22', description: 'Last Date of Classes', from: 'June 21, 2025', to: '', week: '16', remarks: '' },
    { sNo: '23', description: 'Last Date to request "Incomplete Grade"', from: 'June 21, 2025', to: '', week: '16', remarks: '"I" grade will be awarded' },
    { sNo: '24', description: 'Issuance of Admit Card thru EDU portal', from: 'June 21, 2025', to: '', week: '16', remarks: '' },
    { sNo: '25', description: 'Final Examination', from: 'June 23, 2025', to: 'July 4, 2025', week: '17/18', remarks: '' },
    { sNo: '26', description: 'Semester Break for Students', from: 'July 5, 2025', to: '', week: '18', remarks: '' },
    { sNo: '27', description: 'Declaration of Results in EDU Portal', from: 'July 11, 2025', to: '', week: '', remarks: '' },
    { sNo: '28', description: 'Registration & Commencement of Classes for Summer 2025', from: 'July 7, 2025', to: '', week: '', remarks: '' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Academic Calendar Spring 2025"
        subtitle="Important dates and deadlines for Spring 2025 semester"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Registrar', href: '/registrar' },
          { label: 'Spring 2025' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <RegistrarSidebar />
          </div>

          <div className="lg:col-span-3">
            <Link
              href="/registrar"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Registrar Office
            </Link>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                  Academic Calendar Spring 2025
                </h1>
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>

              <section className="mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    Semester Overview
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
                    <div>
                      <span className="font-medium">Semester Start:</span> February 13, 2025
                    </div>
                    <div>
                      <span className="font-medium">Semester End:</span> July 11, 2025
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Calendar</h3>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Academic Calendar Spring 2025
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-300">
                            S.#
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-300">
                            Description
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-300">
                            From
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-300">
                            To
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-300">
                            Week #
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                            Remarks
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {calendarData.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">
                              {item.sNo}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">
                              {item.description}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300 whitespace-nowrap">
                              {item.from}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300 whitespace-nowrap">
                              {item.to}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300 text-center">
                              {item.week}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-700">
                              {item.remarks}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                    Important Notes
                  </h3>
                  <ul className="space-y-2 text-yellow-800 text-sm">
                    <li>• Dates are subject to change. Please check regularly for updates.</li>
                    <li>• Students must complete registration by the specified deadline.</li>
                    <li>• Late registration may incur additional fees.</li>
                    <li>• Holiday dates may vary based on moon sighting for Islamic holidays.</li>
                    <li>• Spring Break includes Eid-ul-Fitr holidays (March 24 - April 3).</li>
                    <li>• The PDF is generated dynamically from the calendar data displayed above.</li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Download Calendar
              </h2>
              <p className="text-gray-600 mb-6">
                Download the complete academic calendar for Spring 2025 semester as a PDF document.
              </p>
              <button 
                onClick={handleDownloadPDF}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Academic Calendar (PDF)
              </button>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Questions?
              </h3>
              <p className="text-blue-800 mb-3">
                For questions about the academic calendar, please contact the Office of the Registrar:
              </p>
              <div className="space-y-1 text-blue-800">
                <p>
                  <span className="font-medium">Email:</span>{' '}
                  <a href="mailto:registrar@uit.edu" className="underline hover:text-blue-600">
                    registrar@uit.edu
                  </a>
                </p>
                <p>
                  <span className="font-medium">Phone:</span> +92 (21) 1234-5678
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
