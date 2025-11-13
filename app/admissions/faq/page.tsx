import PageBanner from '@/components/ui/page-banner';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import AdmissionsSidebar from '@/components/admissions/AdmissionsSidebar';

export default function AdmissionsFAQPage() {
  const faqs = [
    {
      id: 1,
      question: "When can one apply for admissions at UIT University?",
      answer: (
        <p>
          Admission has started from January, 2025. If an applicant fulfill the admission criteria 
          (eligibility criteria can be seen on website at www.uitu.edu.pk), he/she can apply for 
          admission via online application. The applicant can access his/her online application from 
          the homepage of UIT&apos;s website www.uitu.edu.pk.
        </p>
      )
    },
    {
      id: 2,
      question: "Which Undergraduate programs are offered at UIT University?",
      answer: (
        <div>
          <p className="mb-3">UIT University offers the following Undergraduate programs:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Department of Electrical Engineering</strong>
              <ul className="list-circle pl-6 mt-1 space-y-1">
                <li>BE Electrical (Electronic / Power/ Telecommunication)</li>
                <li>BE Computer Systems</li>
              </ul>
            </li>
            <li>
              <strong>Department of Computer Science</strong>
              <ul className="list-circle pl-6 mt-1 space-y-1">
                <li>BS Computer Science</li>
                <li>BS Software Engineering</li>
              </ul>
            </li>
            <li>
              <strong>Department of Engineering Technology</strong>
              <ul className="list-circle pl-6 mt-1 space-y-1">
                <li>Bachelor of Engineering Technology (Computer)</li>
                <li>Bachelor of Engineering Technology (Software)</li>
                <li>Bachelor of Engineering Technology (Electronics)</li>
              </ul>
            </li>
            <li>
              <strong>Department of Management Sciences</strong>
              <ul className="list-circle pl-6 mt-1 space-y-1">
                <li>BBA (Bachelor in Business Administration)</li>
                <li>BS Business Informatics</li>
                <li>BS Accounting & Finance</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      question: "What is the general admission criteria?",
      answer: (
        <div>
          <p className="mb-3">All applicants must meet the following criteria to be eligible to apply at UIT.</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>For B.E. Electrical (Electronic/ Power/ Telecommunication) & B.E. Computer Systems</strong>
              <br />
              HSC, A-level, Aga Khan Board, Federal Board and other board students with at least 60% or 
              equivalent marks in Pre-Engineering.
            </li>
            <li>
              <strong>For B.S. (Computer Science) & B.S. (Software Engineering)</strong>
              <br />
              HSC, A-level, Aga khan board, Federal Board and other board students with at least 50% or 
              equivalent marks in Pre-Engineering, Science General OR Pre-Medical. Pre-Medical students has 
              to pass deficiency courses of Mathematics of 6 credit hours within one year of their regular studies.
            </li>
            <li>
              <strong>For B.E. Tech (Engineering Technology)</strong>
              <br />
              Passed either Higher Secondary Examination (HSC-II)/DAE in relevant discipline from any authorized 
              board OR any equivalent foreign examination board with at least 50% or 550 marks OR is awaiting 
              his/her final result.
            </li>
            <li>
              <strong>For Management Science</strong>
              <br />
              Passed either Higher Secondary Examination (HSC-II) or equivalent from any authorized board of 
              intermediate education in Pakistan OR any equivalent foreign examination board with at least 45% 
              or 495 marks OR is awaiting his/her final result.
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 4,
      question: "How do I proceed with my online application?",
      answer: (
        <p>
          Once you have registered for admissions at UIT UNIVERSITY via Online Admission Application, 
          Admission link will be sent to you on your e-mail address. You can proceed with the rest of 
          the online application using the link. (Please refer admission procedure on website). The Office 
          of Admissions will update applicants accordingly via e-mail regarding the submission of supporting 
          documents and the completion of application in all aspects.
        </p>
      )
    },
    {
      id: 5,
      question: "What to do, if I am unable to register on Admission Portal? Or e-mail address is already registered?",
      answer: (
        <div>
          <p className="mb-2">
            You have to re-check that either you have already registered with the same e-mail address or not. 
            Use another email if you have already registered with the same email. If you did not receive the 
            log in information, please check your Junk or Spam folder in your email.
          </p>
          <p>
            If problem persist, please email at <a href="mailto:admission@uitu.edu.pk" className="text-primary hover:underline">admission@uitu.edu.pk</a> or 
            call 021-34994305 Ext: 3025, 3087, 03330399113.
          </p>
        </div>
      )
    },
    {
      id: 6,
      question: "Does UIT UNIVERSITY allow the students to apply for admission whose result has not been announced?",
      answer: (
        <p>
          Yes, UIT UNIVERSITY allows all the students who are awaiting for results to be announced.
        </p>
      )
    },
    {
      id: 7,
      question: "How can I receive my admit card for entry test?",
      answer: (
        <div>
          <p className="mb-2">
            After confirmation of receiving application fee from respective Bank, system generated admit card 
            will be available for printing from the admission portal.
          </p>
          <p className="font-semibold mb-2">Or</p>
          <p>
            After submitting the fee kindly share the picture/pdf of paid slip on WhatsApp 03330399113.
          </p>
        </div>
      )
    },
    {
      id: 8,
      question: "What is the fee Structure at UIT UNIVERSITY?",
      answer: (
        <p>
          The tuition fee is charged as per credit hour. (Please refer Fee structure on website at{' '}
          <a href="https://uitu.edu.pk/fee-structure/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            https://uitu.edu.pk/fee-structure/
          </a>
          ).
        </p>
      )
    },
    {
      id: 9,
      question: "How can I Pay Application fee?",
      answer: (
        <ol className="list-decimal pl-6 space-y-2">
          <li>Print out the fee voucher (system automatically generates fee voucher after submission of application)</li>
          <li>Visit any branch of Meezan Bank and pay admission processing fee i.e. 3,000/=</li>
          <li>Submit scanned copy of the paid fee voucher through the admission portal or send image of paid voucher on WhatsApp 0333-0399113.</li>
        </ol>
      )
    },
    {
      id: 10,
      question: "What supporting documents do I need to submit with my online application?",
      answer: (
        <div>
          <p className="mb-3">Following documents will be required for Admission process:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>SSC certificate or O-Level certificate</li>
            <li>SSC Marks sheet</li>
            <li>HSC consolidated Marks sheet (Students waiting for result must submit scanned copy of (HSC-II) Admit card)</li>
            <li>Equivalence certificate Original A-Level Certificate in case of A-Level, issued by IBBC</li>
          </ol>
        </div>
      )
    },
    {
      id: 11,
      question: "What type of Scholarships are offered by UIT UNIVERSITY?",
      answer: (
        <p>
          (Please refer Scholarships Policy & awards on website).
        </p>
      )
    },
    {
      id: 12,
      question: "Does UIT UNIVERSITY follow an open merit policy in awarding admission?",
      answer: (
        <p>
          Yes, UIT UNIVERSITY only offers open merit admissions. There are no reserved or quota-based seats.
        </p>
      )
    },
    {
      id: 13,
      question: "How frequently is UIT UNIVERSITY fee rates revised?",
      answer: (
        <p>
          Universities may increase fees, on annual basis to cover inflation and increased costs.
        </p>
      )
    },
    {
      id: 14,
      question: "If I failed to attain the required marks as a result awaiting candidate. What will happen?",
      answer: (
        <p>
          Those applicants who are awaiting results and will appear in HSC-2024 will be offered a provisional 
          admission. In case, their result is less than required marks after the announcement of HSC/A-level 
          results, the fee will be refunded as per policy. (Please refer Refund Policy on website).
        </p>
      )
    },
    {
      id: 15,
      question: "Can I change to the online application once I have pressed the \"Submit\" button?",
      answer: (
        <p>
          No, you cannot make any changes to your application once it has been submitted. However, if some 
          critical information needs to be corrected / altered (address, contact number) you can contact the 
          admission office and put in a request.
        </p>
      )
    },
    {
      id: 16,
      question: "Will I receive a confirmation after submitting my online application?",
      answer: (
        <p>
          Yes, you will receive a text message and an e-mail notification stating the successful submission 
          of your online application.
        </p>
      )
    },
    {
      id: 17,
      question: "If I have passed SAT-SAT- II exam, and I would I be exempted from Entry Test?",
      answer: (
        <p>
          Yes, you can apply based on SAT result If you have scored at least 800 in SAT-I and 1500 in SAT-II 
          with subjects of Physics, Chemistry/Computer Science and Mathematics/Biology. Candidate must submit 
          an application for the exemption along with the evidence to the Admission office.
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      <PageBanner
        title="Frequently Asked Questions (FAQs)"
        subtitle="Find answers to common questions about admissions at UIT University"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admissions', href: '/admissions' },
          { label: 'FAQ' }
        ]}
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <AdmissionsSidebar />
          
          <main className="flex-1">
            <div className="mb-8">
              <p className="text-lg text-gray-700">
                Browse through our frequently asked questions to find information about admission procedures, 
                eligibility criteria, application process, and more.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left hover:no-underline py-5 px-4 hover:bg-gray-50 rounded-t-lg">
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.id}. {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-5 text-gray-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
            </Accordion>

            <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Still have questions?</h3>
              <p className="text-gray-700 mb-4">
                If you couldn&apos;t find the answer you were looking for, feel free to contact our admissions office.
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:admission@uitu.edu.pk" className="text-primary hover:underline">
                    admission@uitu.edu.pk
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong> 021-34994305 Ext: 3025, 3087, 03330399113
                </p>
                <p>
                  <strong>WhatsApp:</strong> 0333-0399113
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
