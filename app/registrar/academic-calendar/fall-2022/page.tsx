'use client'

import Link from 'next/link'
import { ArrowLeft, Calendar, Download } from 'lucide-react'
import PageBanner from '@/components/ui/page-banner'
import RegistrarSidebar from '@/components/registrar/registrar-sidebar'

export default function Fall2022CalendarPage() {
  const handleDownloadPDF = async () => {
    const { jsPDF } = await import('jspdf')
    await import('jspdf-autotable')

    const pdf = new jsPDF('p', 'mm', 'a4')
    
    pdf.setFontSize(18)
    pdf.setFont('helvetica', 'bold')
    pdf.text('Academic Calendar Fall 2022', pdf.internal.pageSize.getWidth() / 2, 20, { align: 'center' })
    
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
    
    pdf.save('Academic-Calendar-Fall-2022.pdf')
  }

  const calendarData = [
    { sr: '1', from: '24-Jun-22', to: '', week: '', description: 'Admission for Fall 2022 New Batch', remarks: '' },
    { sr: '2', from: '21-Aug-22', to: '', week: '', description: 'Open House', remarks: '' },
    { sr: '3', from: '26-Aug-22', to: '', week: '', description: 'Last Date for Registration', remarks: '' },
    { sr: '4', from: '27-Aug-22', to: '', week: '', description: 'Entry Test 1 Fall 2022 Batch', remarks: '' },
    { sr: '5', from: '02-Sep-22', to: '03-Sep-22', week: '', description: 'Interviews', remarks: '' },
    { sr: '6', from: '06-Sep-22', to: '', week: '', description: 'Announcement of 1st Merit List', remarks: '' },
    { sr: '7', from: '06-Sep-22', to: '30-Sep-22', week: '', description: 'Admission for Fall 2022 New Batch', remarks: '' },
    { sr: '8', from: '24-Sep-22', to: '', week: '', description: 'Entry Test 2 Fall 2022 Batch', remarks: '' },
    { sr: '9', from: '24-Sep-22', to: '', week: '', description: 'Interviews', remarks: '' },
    { sr: '10', from: '30-Sep-22', to: '14-Oct-22', week: '', description: 'Online Registration for Fall 2022/Payment of Fee', remarks: '' },
    { sr: '11', from: '30-Sep-22', to: '', week: '', description: 'Orientation for Fall-2022', remarks: '' },
    { sr: '12', from: '03-Oct-22', to: '08-Oct-22', week: '1', description: 'Online Registration for Fall 2022 / Commencement of Classes', remarks: '' },
    { sr: '13', from: '10-Oct-22', to: '15-Oct-22', week: '2', description: 'Classes / Last Date to ADD/DROP Course(s)', remarks: '' },
    { sr: '14', from: '17-Oct-22', to: '22-Oct-22', week: '3', description: 'Classes', remarks: '' },
    { sr: '15', from: '24-Oct-22', to: '29-Oct-22', week: '4', description: 'Classes', remarks: '' },
    { sr: '16', from: '31-Oct-22', to: '05-Nov-22', week: '5', description: 'Classes', remarks: '' },
    { sr: '17', from: '07-Nov-22', to: '12-Nov-22', week: '6', description: 'Classes', remarks: '' },
    { sr: '18', from: '14-Nov-22', to: '19-Nov-22', week: '7', description: 'Classes', remarks: 'Allama Iqbal Day: 09-Nov-22' },
    { sr: '19', from: '21-Nov-22', to: '26-Nov-22', week: '8', description: 'Classes / Last date to Withdraw Course(s)', remarks: '\'W\' grade will be awarded' },
    { sr: '20', from: '28-Nov-22', to: '03-Dec-22', week: '9', description: 'Mid-Term Examination', remarks: '' },
    { sr: '21', from: '05-Dec-22', to: '10-Dec-22', week: '10', description: 'Classes', remarks: '' },
    { sr: '22', from: '12-Dec-22', to: '17-Dec-22', week: '11', description: 'Classes / Mid-Term Result Announcement', remarks: '' },
    { sr: '23', from: '19-Dec-22', to: '24-Dec-22', week: '12', description: 'Classes / FYP 1st Milestone (EL & CS) Department (Batch 2020)', remarks: '' },
    { sr: '24', from: '26-Dec-22', to: '31-Dec-22', week: '13', description: 'Classes / Submission of Final Exam Paper / Quaid-e-Azam Day', remarks: 'Quaid-e-Azam Day: 25-Dec-22' },
    { sr: '25', from: '02-Jan-23', to: '07-Jan-23', week: '14', description: 'Classes / Display of Final Exam Time Table / Faculty and Course Evaluation', remarks: '' },
    { sr: '26', from: '09-Jan-23', to: '14-Jan-23', week: '15', description: 'Classes / Last date for Faculty to submit Sessional Marks', remarks: '' },
    { sr: '27', from: '16-Jan-23', to: '21-Jan-23', week: '16', description: 'Final Lab Exams / Last Date of Classes / Issuance of Admit Card thru EDU portal', remarks: '' },
    { sr: '28', from: '23-Jan-23', to: '28-Jan-23', week: '17', description: 'Final Examination / Last date to request "Incomplete Grade"', remarks: '\'I\' grade will be awarded' },
    { sr: '29', from: '30-Jan-23', to: '04-Feb-23', week: '17', description: 'Final Examination / Registration for Summer 2023 Session', remarks: '' },
    { sr: '30', from: '06-Feb-23', to: '11-Feb-23', week: '18', description: 'Final Examination', remarks: '' },
    { sr: '31', from: '13-Feb-23', to: '15-Feb-23', week: '19', description: 'Final Examination', remarks: '' },
    { sr: '32', from: '16-Feb-23', to: '18-Feb-23', week: '19', description: 'Scripts Disclosure to Students (UITU) before Result Submission / Grading and Result Submissions / Semester Break for Students', remarks: '' },
    { sr: '33', from: '20-Feb-23', to: '25-Feb-23', week: '20', description: 'Grading and Result Submissions / ERC (UIT)/QEC (UITU) for Examination / Semester Break for Students', remarks: '' },
    { sr: '34', from: '27-Feb-23', to: '04-Mar-23', week: '21', description: 'ERC (UIT) for Examination / Semester Break for Students / Announcement of Results (for UITU) / Submission of Results to NEDUET (For UIT)', remarks: 'Orientation (27-Feb to 02-Mar)' },
    { sr: '35', from: '06-Mar-23', to: '11-Mar-23', week: '21', description: 'Online Registration for Spring 2023 / Payment of Fee / Orientation Session for Spring 2023 Batch / Semester Break (for all)', remarks: '' },
    { sr: '36', from: '13-Mar-23', to: '', week: '', description: 'Commencement of Spring 2023 Semester', remarks: '' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Academic Calendar Fall 2022"
        subtitle="Important dates and deadlines for Fall 2022 semester"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Registrar', href: '/registrar' },
          { label: 'Fall 2022' }
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
                This is an archived academic calendar for reference purposes. The Fall 2022 semester has been completed.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                  Academic Calendar Fall 2022
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
                      <span className="font-medium">Semester Start:</span> June 24, 2022
                    </div>
                    <div>
                      <span className="font-medium">Semester End:</span> March 13, 2023
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Calendar</h3>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Academic Calendar Fall 2022
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
                    <li>• This is an archived calendar for the completed Fall 2022 semester.</li>
                    <li>• This calendar includes admission and orientation activities for the Fall 2022 batch.</li>
                    <li>• Allama Iqbal Day was observed on November 9, 2022.</li>
                    <li>• Quaid-e-Azam Day was observed on December 25, 2022.</li>
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
                Download the complete academic calendar for Fall 2022 semester as a PDF document.
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
