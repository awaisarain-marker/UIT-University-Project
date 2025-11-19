'use client'

import Link from 'next/link'
import { ArrowLeft, Calendar, Download } from 'lucide-react'
import PageBanner from '@/components/ui/page-banner'
import RegistrarSidebar from '@/components/registrar/registrar-sidebar'

export default function Spring2023CalendarPage() {
  const handleDownloadPDF = async () => {
    const { jsPDF } = await import('jspdf')
    await import('jspdf-autotable')

    const pdf = new jsPDF('l', 'mm', 'a4') // Landscape for wider table
    
    pdf.setFontSize(18)
    pdf.setFont('helvetica', 'bold')
    pdf.text('Academic Calendar Spring 2023', pdf.internal.pageSize.getWidth() / 2, 20, { align: 'center' })
    
    pdf.setFontSize(10)
    pdf.setFont('helvetica', 'normal')
    pdf.text('UIT University', pdf.internal.pageSize.getWidth() / 2, 28, { align: 'center' })
    
    const tableData = calendarData.map(item => [
      item.sr,
      item.from,
      item.to,
      item.week,
      item.description,
      item.responsibility,
      item.remarks
    ])
    
    ;(pdf as any).autoTable({
      startY: 35,
      head: [['Sr.', 'From', 'To', 'Study Week', 'Description of Activities', 'Responsibility', 'Remarks']],
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
        3: { cellWidth: 20 },
        4: { cellWidth: 100 },
        5: { cellWidth: 25 },
        6: { cellWidth: 60 }
      },
      margin: { top: 35, left: 10, right: 10 }
    })
    
    pdf.save('Academic-Calendar-Spring-2023.pdf')
  }

  const calendarData = [
    { sr: 'a', from: '27-Feb-23', to: '06-Mar-23', week: 'Fall 2022', description: 'Grading and Result Submissions; ERC (UIT)/QEC (UITU) for Examination; Submission of Scholarship (SRF)/Fee Installment (FIRF); Online Registration for Spring 2023 Existing Students', responsibility: 'AO, ED', remarks: 'Semester Break for Students' },
    { sr: 'b', from: '06-Mar-23', to: '06-Mar-23', week: 'Fall 2022', description: 'Announcement of Results (for UITU); Submission of Results to NEDUET (For UIT)', responsibility: 'ED', remarks: '' },
    { sr: '1', from: '07-Mar-23', to: '07-Mar-23', week: '', description: 'Announcement of Time Table for Spring 2023; Online Registration for Spring 2023/Payment of Fees; Pre-Semester Preparation Day; Faculty Meeting by HODs', responsibility: 'AO, TD', remarks: '' },
    { sr: '2', from: '08-Mar-23', to: '10-Mar-23', week: '', description: 'Online Registration for Spring 2023/Payment of Fees; Semester Break for Students; Semester Break for the Faculty and Staff', responsibility: 'AD', remarks: 'Thin staff of Academic and Admission will attend office.' },
    { sr: '3', from: '13-Mar-23', to: '18-Mar-23', week: '1', description: 'Commencement of Classes; Last date to ADD/DROP/Enroll Course(s); Last date for fee payment', responsibility: 'AO, TD', remarks: '' },
    { sr: '4', from: '20-Mar-23', to: '25-Mar-23', week: '2', description: 'Classes', responsibility: 'AO, TD', remarks: 'Pakistan Day: March 23, 2023' },
    { sr: '5', from: '27-Mar-23', to: '01-Apr-23', week: '3', description: 'Classes', responsibility: 'AO, TD', remarks: '' },
    { sr: '6', from: '03-Apr-23', to: '08-Apr-23', week: '4', description: 'Classes; 1st Ramazan 1444* (Expected: March 23, 2023)', responsibility: 'AO, TD', remarks: '' },
    { sr: '7', from: '10-Apr-23', to: '15-Apr-23', week: '5', description: 'Classes', responsibility: 'AO, TD', remarks: '' },
    { sr: '8', from: '17-Apr-23', to: '22-Apr-23', week: '6', description: 'Classes; Submission of Short of Attendance (SOA) by Faculty', responsibility: 'AO, TD', remarks: '' },
    { sr: '9', from: '24-Apr-23', to: '29-Apr-23', week: '7', description: 'Classes; Eid-ul-Fitr 2023*', responsibility: 'AO, TD', remarks: 'No Classes' },
    { sr: '10', from: '01-May-23', to: '06-May-23', week: '8', description: 'Classes', responsibility: 'AO, TD', remarks: 'Labor Day: May 1, 2023' },
    { sr: '11', from: '08-May-23', to: '13-May-23', week: '9', description: 'Mid-Term Examination', responsibility: 'AO, ED', remarks: '' },
    { sr: '12', from: '15-May-23', to: '20-May-23', week: '10', description: 'Classes', responsibility: 'AO, TD', remarks: '' },
    { sr: '13', from: '22-May-23', to: '27-May-23', week: '11', description: 'Classes; Last date to Withdraw Course(s)', responsibility: 'AO, TD', remarks: 'W grade will be awarded' },
    { sr: '14', from: '29-May-23', to: '03-Jun-23', week: '12', description: 'Classes; Mid-Term Result Announcement', responsibility: 'AO, ED', remarks: '' },
    { sr: '15', from: '05-Jun-23', to: '10-Jun-23', week: '13', description: 'Classes; FYP 1st Milestone (EL & CS) Department (Batch 2020)', responsibility: 'AO, TD', remarks: '' },
    { sr: '16', from: '12-Jun-23', to: '17-Jun-23', week: '14', description: 'Classes; Display of Final Exam Time Table', responsibility: 'AO, TD', remarks: '' },
    { sr: '17', from: '19-Jun-23', to: '24-Jun-23', week: '15', description: 'Last date for Faculty to submit Sessional Marks; Faculty & Course Evaluation; Issuance of Admit Card through EDU portal', responsibility: 'AO, ED, TD', remarks: '' },
    { sr: '18', from: '26-Jun-23', to: '01-Jul-23', week: '16', description: 'Final Lab Exams; Last Date of Classes; Last date to request "Incomplete Grade"', responsibility: 'AO, ED, TD', remarks: '"I" grade will be awarded' },
    { sr: '19', from: '03-Jul-23', to: '08-Jul-23', week: '17', description: 'Final Examination; Eid-ul-Adha 2023*', responsibility: 'AO, ED', remarks: '' },
    { sr: '20', from: '10-Jul-23', to: '15-Jul-23', week: '18', description: 'Final Examination', responsibility: 'AO, ED', remarks: '' },
    { sr: '21', from: '17-Jul-23', to: '22-Jul-23', week: '', description: 'Submission of Final Grade', responsibility: 'AO, ED', remarks: '' },
    { sr: '22', from: '24-Jul-23', to: '29-Jul-23', week: '', description: 'ERC (UIT)/QEC (UITU) for Examination; Ashura 1445*', responsibility: 'AO, ED', remarks: '' },
    { sr: '23', from: '31-Jul-23', to: '05-Aug-23', week: '', description: 'Announcement of Results (for UITU); Submission of Results to NEDUET (For UIT); Registration for Summer 2023 Session', responsibility: 'AO, ED', remarks: '' },
    { sr: '24', from: '07-Aug-23', to: '11-Aug-23', week: '', description: 'FYP Result Submission; Result Announcement; Commencement of Summer 2023 Classes; Semester Break for Students (not registered in Summer)', responsibility: 'AO, TD, ED', remarks: 'Start of Summer 2023 Session/Details in a Separate Calendar' },
    { sr: '25', from: '15-Aug-23', to: '16-Sep-23', week: '', description: 'Annual Break; Summer 2023 Session', responsibility: 'AO, TD', remarks: 'Thin staff of Academic will attend office whereas faculty members will only come for classes.' },
    { sr: '26', from: '18-Sep-23', to: '23-Sep-23', week: '', description: 'Summer 2023 Final Examination; Online Registration for Fall 2023 Semester', responsibility: 'AO, ED', remarks: 'End of Summer 2023 Session' },
    { sr: '27', from: '25-Sep-23', to: '', week: '', description: 'Commencement of Fall 2023 Semester', responsibility: 'AO', remarks: 'Start of Fall 2023 Semester/Details in a Separate Calendar' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Academic Calendar Spring 2023"
        subtitle="Important dates and deadlines for Spring 2023 semester"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Registrar', href: '/registrar' },
          { label: 'Spring 2023' }
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
                This is an archived academic calendar for reference purposes. The Spring 2023 semester has been completed.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                  Academic Calendar Spring 2023
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
                      <span className="font-medium">Semester Start:</span> February 27, 2023
                    </div>
                    <div>
                      <span className="font-medium">Semester End:</span> September 25, 2023
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Calendar</h3>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Academic Calendar Spring 2023
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
                            Study Week
                          </th>
                          <th className="px-3 py-3 text-left text-xs font-semibold text-gray-900 border-r border-gray-300">
                            Description of Activities
                          </th>
                          <th className="px-3 py-3 text-left text-xs font-semibold text-gray-900 border-r border-gray-300">
                            Responsibility
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
                            <td className="px-3 py-3 text-xs text-gray-900 border-r border-gray-300">
                              {item.responsibility}
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
                    <li>• This is an archived calendar for the completed Spring 2023 semester.</li>
                    <li>• AO = Academic Office, ED = Examination Department, TD = Teaching Department, AD = Admission Department</li>
                    <li>• Holiday dates may have varied based on moon sighting for Islamic holidays.</li>
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
                Download the complete academic calendar for Spring 2023 semester as a PDF document.
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
