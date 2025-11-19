'use client'

import Link from 'next/link'
import { ArrowLeft, Calendar, Download } from 'lucide-react'
import PageBanner from '@/components/ui/page-banner'
import RegistrarSidebar from '@/components/registrar/registrar-sidebar'

export default function Spring2022CalendarPage() {
  const handleDownloadPDF = async () => {
    const { jsPDF } = await import('jspdf')
    await import('jspdf-autotable')

    const pdf = new jsPDF('p', 'mm', 'a4')
    
    pdf.setFontSize(18)
    pdf.setFont('helvetica', 'bold')
    pdf.text('Academic Calendar Spring 2022', pdf.internal.pageSize.getWidth() / 2, 20, { align: 'center' })
    
    pdf.setFontSize(10)
    pdf.setFont('helvetica', 'normal')
    pdf.text('UIT University', pdf.internal.pageSize.getWidth() / 2, 28, { align: 'center' })
    
    const tableData = calendarData.map(item => [
      item.sr,
      item.from,
      item.to,
      item.week,
      item.description,
      item.remarks
    ])
    
    ;(pdf as any).autoTable({
      startY: 35,
      head: [['Sr.', 'From', 'To', 'Week', 'Description of Activities', 'Remarks']],
      body: tableData,
      theme: 'grid',
      headStyles: {
        fillColor: [59, 130, 246],
        textColor: 255,
        fontStyle: 'bold',
        halign: 'left'
      },
      styles: {
        fontSize: 7,
        cellPadding: 2,
        overflow: 'linebreak'
      },
      columnStyles: {
        0: { cellWidth: 10, halign: 'center' },
        1: { cellWidth: 25 },
        2: { cellWidth: 25 },
        3: { cellWidth: 15, halign: 'center' },
        4: { cellWidth: 80 },
        5: { cellWidth: 35 }
      },
      margin: { top: 35, left: 10, right: 10 }
    })
    
    pdf.save('Academic-Calendar-Spring-2022.pdf')
  }

  const calendarData = [
    { sr: '1', from: '13-Feb-22', to: '', week: '', description: 'Open House', remarks: 'Fall 2021 AC' },
    { sr: '2', from: '14-Feb-22', to: '', week: '', description: 'Last Date for Registration', remarks: 'Fall 2021 AC' },
    { sr: '3', from: '16-Feb-22', to: '', week: '', description: 'Entry Test Spring 2022 Batch', remarks: 'Fall 2021 AC' },
    { sr: '4', from: '17-Feb-22', to: '19-Feb-22', week: '', description: 'Admission for Spring 2022 New Batch', remarks: 'Fall 2021 AC' },
    { sr: '5', from: '21-Feb-22', to: '26-Feb-22', week: '-', description: 'Admission for Spring 2022 New Batch', remarks: 'Preparation Week-Orientation Session for Spring 2022 Batch' },
    { sr: '6', from: '28-Feb-22', to: '05-Mar-22', week: '', description: 'Registration for Spring 2022 New Batch', remarks: 'Final Examination Fall 2021 Semester' },
    { sr: '7', from: '07-Mar-22', to: '08-Mar-22', week: '1', description: 'Commencement of Classes', remarks: 'Final Examination Fall 2021 Semester' },
    { sr: '8', from: '09-Mar-22', to: '12-Mar-22', week: '1', description: 'Classes / Last date to ADD/DROP Course(s)', remarks: 'Final Examination Fall 2021 Semester' },
    { sr: '9', from: '14-Mar-22', to: '19-Mar-22', week: '2', description: 'Classes / Last date for fee payment', remarks: 'Final Examination Fall 2021 Semester' },
    { sr: '10', from: '21-Mar-22', to: '26-Mar-22', week: '3', description: 'Classes', remarks: 'Pakistan Day: 23-Mar-2022' },
    { sr: '11', from: '28-Mar-22', to: '02-Apr-22', week: '4', description: 'Classes', remarks: '' },
    { sr: '12', from: '04-Apr-22', to: '09-Apr-22', week: '5', description: 'Classes', remarks: '' },
    { sr: '13', from: '11-Apr-22', to: '16-Apr-22', week: '6', description: 'Classes', remarks: '' },
    { sr: '14', from: '18-Apr-22', to: '23-Apr-22', week: '7', description: 'Classes', remarks: '' },
    { sr: '15', from: '25-Apr-22', to: '30-Apr-22', week: '8', description: 'Classes', remarks: '' },
    { sr: '16', from: '02-May-22', to: '07-May-22', week: '9', description: 'Mid-Term Examination / Eid-ul-Fitr (Expected)', remarks: 'Labor Day: 01-May-2022' },
    { sr: '17', from: '09-May-22', to: '14-May-22', week: '10', description: 'Classes', remarks: '' },
    { sr: '18', from: '16-May-22', to: '21-May-22', week: '11', description: 'Classes / Mid-Term Result Announcement', remarks: '' },
    { sr: '19', from: '23-May-22', to: '28-May-22', week: '12', description: 'Classes / Display of Final Exam Time Table', remarks: '' },
    { sr: '20', from: '30-May-22', to: '04-Jun-22', week: '13', description: 'Classes / Submission of Final Exam Paper / Last date to Withdraw Course(s)', remarks: '"W" grade will be awarded' },
    { sr: '21', from: '06-Jun-22', to: '11-Jun-22', week: '14', description: 'Final Lab Exams / Faculty and Course Evaluation', remarks: '' },
    { sr: '22', from: '13-Jun-22', to: '18-Jun-22', week: '15', description: 'Final Lab Exams / Last date for Faculty to submit Sessional Marks', remarks: '' },
    { sr: '23', from: '20-Jun-22', to: '25-Jun-22', week: '16', description: 'Final Lab Exams / Last Date of Classes / Issuance of Admit Card thru EDU portal', remarks: '' },
    { sr: '24', from: '27-Jun-22', to: '02-Jul-22', week: '17', description: 'Final Examination / Last date to request "Incomplete Grade"', remarks: '"I" grade will be awarded' },
    { sr: '25', from: '04-Jul-22', to: '09-Jul-22', week: '18', description: 'Final Examination', remarks: 'Eid-ul-Azha (3 days)' },
    { sr: '26', from: '11-Jul-22', to: '16-Jul-22', week: '19', description: 'Final Examination', remarks: '' },
    { sr: '27', from: '18-Jul-22', to: '23-Jul-22', week: '', description: 'Grading & Result Submission / Registration for Summer 2022 Session', remarks: '' },
    { sr: '28', from: '25-Jul-22', to: '30-Jul-22', week: '', description: 'ERC / FYP Final Milestone & Report Evaluation / Commencement of Summer 2022 Session', remarks: 'Ashura: 08-Aug-22, 09-Aug-22' },
    { sr: '29', from: '01-Aug-22', to: '06-Aug-22', week: '20', description: 'Grading & Result Submission / Semester Break for Students', remarks: '' },
    { sr: '30', from: '08-Aug-22', to: '13-Aug-22', week: '21', description: 'ERC / FYP Result Submission / Semester Break for Students', remarks: '' },
    { sr: '31', from: '15-Aug-22', to: '10-Sep-22', week: '22', description: 'Annual Break / Online Registration for Fall 2022 Semester (for students) / Pre-Semester Planning', remarks: '' },
    { sr: '32', from: '12-Sep-22', to: '17-Sep-22', week: '23', description: 'Online Registration for Fall 2022 Semester (for existing students) / Semester Break for Students', remarks: '' },
    { sr: '33', from: '19-Sep-22', to: '24-Sep-22', week: '24', description: 'Commencement of Fall 2022 Semester', remarks: '' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Academic Calendar Spring 2022"
        subtitle="Important dates and deadlines for Spring 2022 semester"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Registrar', href: '/registrar' },
          { label: 'Spring 2022' }
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

            {/* Archive Notice */}
            <div className="bg-gray-100 border-l-4 border-gray-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Archive Notice
              </h3>
              <p className="text-gray-700">
                This is an archived academic calendar for reference purposes. The Spring 2022 semester has been completed.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                  Academic Calendar Spring 2022
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
                      <span className="font-medium">Semester Start:</span> February 13, 2022
                    </div>
                    <div>
                      <span className="font-medium">Semester End:</span> September 24, 2022
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Calendar</h3>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Academic Calendar Spring 2022
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-3 py-3 text-left text-xs font-semibold text-gray-900 border-r border-gray-300">
                            Sr.
                          </th>
                          <th className="px-3 py-3 text-left text-xs font-semibold text-gray-900 border-r border-gray-300">
                            From
                          </th>
                          <th className="px-3 py-3 text-left text-xs font-semibold text-gray-900 border-r border-gray-300">
                            To
                          </th>
                          <th className="px-3 py-3 text-left text-xs font-semibold text-gray-900 border-r border-gray-300">
                            Week
                          </th>
                          <th className="px-3 py-3 text-left text-xs font-semibold text-gray-900 border-r border-gray-300">
                            Description of Activities
                          </th>
                          <th className="px-3 py-3 text-left text-xs font-semibold text-gray-900">
                            Remarks
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {calendarData.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-3 py-3 text-xs text-gray-900 border-r border-gray-300 text-center">
                              {item.sr}
                            </td>
                            <td className="px-3 py-3 text-xs text-gray-900 border-r border-gray-300 whitespace-nowrap">
                              {item.from}
                            </td>
                            <td className="px-3 py-3 text-xs text-gray-900 border-r border-gray-300 whitespace-nowrap">
                              {item.to}
                            </td>
                            <td className="px-3 py-3 text-xs text-gray-900 border-r border-gray-300 text-center">
                              {item.week}
                            </td>
                            <td className="px-3 py-3 text-xs text-gray-900 border-r border-gray-300">
                              {item.description}
                            </td>
                            <td className="px-3 py-3 text-xs text-gray-700">
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
                    <li>• This is an archived calendar for the completed Spring 2022 semester.</li>
                    <li>• This calendar includes admission and orientation activities for the Spring 2022 batch.</li>
                    <li>• Pakistan Day was observed on March 23, 2022.</li>
                    <li>• Labor Day was observed on May 1, 2022.</li>
                    <li>• Ashura was observed on August 8-9, 2022.</li>
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
                Download the complete academic calendar for Spring 2022 semester as a PDF document.
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
