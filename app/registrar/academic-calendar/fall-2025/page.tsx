'use client'

import Link from 'next/link'
import { ArrowLeft, Calendar, Download } from 'lucide-react'
import PageBanner from '@/components/ui/page-banner'
import RegistrarSidebar from '@/components/registrar/registrar-sidebar'

export default function Fall2025CalendarPage() {
  const handleDownloadPDF = async () => {
    const { jsPDF } = await import('jspdf')
    await import('jspdf-autotable')

    const pdf = new jsPDF('p', 'mm', 'a4')
    
    // Add title
    pdf.setFontSize(18)
    pdf.setFont('helvetica', 'bold')
    pdf.text('Academic Calendar Fall 2025', pdf.internal.pageSize.getWidth() / 2, 20, { align: 'center' })
    
    // Add subtitle
    pdf.setFontSize(10)
    pdf.setFont('helvetica', 'normal')
    pdf.text('UIT University', pdf.internal.pageSize.getWidth() / 2, 28, { align: 'center' })
    
    // Prepare table data
    const tableData = calendarData.map(item => [
      item.sNo,
      item.description,
      item.from,
      item.to,
      item.week,
      item.remarks
    ])
    
    // Generate table
    ;(pdf as any).autoTable({
      startY: 35,
      head: [['S.#', 'Description', 'From', 'To', 'W#', 'Remarks']],
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
    
    pdf.save('Academic-Calendar-Fall-2025.pdf')
  }

  const calendarData = [
    { sNo: '1', description: 'Registrations Fall 2025', from: 'September 2, 2025', to: 'September 15, 2025', week: '2', remarks: '' },
    { sNo: '2', description: 'Display Time Table of Fall - 2025', from: 'September 5, 2025', to: '', week: '', remarks: '' },
    { sNo: '3', description: 'Commencement of Classes', from: 'September 15, 2025', to: '', week: '01', remarks: '' },
    { sNo: '4', description: 'Last Date to ADD Course(s)', from: 'September 29, 2025', to: '', week: '03', remarks: '' },
    { sNo: '5', description: 'Last Date to Drop Course(s) without Financial Penalty', from: 'September 29, 2025', to: '', week: '03', remarks: '' },
    { sNo: '6', description: 'Last Date for the Payment of Fee', from: 'September 29, 2025', to: '', week: '02', remarks: '' },
    { sNo: '7', description: 'Last date to withdraw from Course(s)', from: 'November 7, 2025', to: '', week: '08', remarks: '"W" grade will be awarded' },
    { sNo: '8', description: 'Allama Iqbal Day 2025', from: 'November 9, 2025', to: '', week: '', remarks: 'Gazetted Holiday' },
    { sNo: '9', description: 'Mid-Term Examinations', from: 'November 10, 2025', to: 'November 15, 2025', week: '10', remarks: '' },
    { sNo: '10', description: 'Mid-Term Exam Results in EDU Portal', from: 'November 24, 2025', to: 'November 29, 2025', week: '12', remarks: '' },
    { sNo: '11', description: 'Short of Attendance List', from: 'December 15, 2025', to: 'December 20, 2025', week: '13', remarks: '' },
    { sNo: '12', description: 'Teachers must enter their Sessional Marks in EDU portal', from: 'December 22, 2025', to: 'December 27, 2025', week: '14', remarks: '' },
    { sNo: '13', description: 'Final Year Milestone SP-22 & FA-22', from: 'December 22, 2025', to: 'December 27, 2025', week: '14', remarks: '' },
    { sNo: '14', description: 'Quaid-e-Azam Day', from: 'December 25, 2025', to: '', week: '14', remarks: 'Gazetted Holiday' },
    { sNo: '15', description: 'List Short of Attendance(SOA) to be Displayed', from: 'December 29, 2025', to: '', week: '15', remarks: '' },
    { sNo: '16', description: 'Issuance of Admit Card thru EDU portal', from: 'January 2, 2026', to: '', week: '', remarks: '' },
    { sNo: '17', description: 'Convocation 2025', from: 'January 3, 2026', to: '', week: '', remarks: '*' },
    { sNo: '18', description: 'Last Date of Classes', from: 'January 10, 2026', to: '', week: '16', remarks: '' },
    { sNo: '19', description: 'Final Examinations', from: 'January 12, 2026', to: 'January 17, 2026', week: '17', remarks: '' },
    { sNo: '20', description: 'End of Semester', from: 'January 17, 2026', to: '', week: '17', remarks: '' },
    { sNo: '21', description: 'Declaration of Results in EDU Portal', from: 'January 24, 2026', to: '', week: '', remarks: '' },
    { sNo: '22', description: 'Registration & Commencement of Classes for Spring 2026', from: 'February 2, 2026', to: '', week: '', remarks: '' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Academic Calendar Fall 2025"
        subtitle="Important dates and deadlines for Fall 2025 semester"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Registrar', href: '/registrar' },
          { label: 'Fall 2025' }
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
                  Academic Calendar Fall 2025
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
                      <span className="font-medium">Semester Start:</span> September 2, 2025
                    </div>
                    <div>
                      <span className="font-medium">Semester End:</span> February 2, 2026
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Calendar</h3>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Academic Calendar Fall 2025
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
                            W#
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
                Download the complete academic calendar for Fall 2025 semester as a PDF document.
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
