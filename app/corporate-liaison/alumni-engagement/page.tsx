import PageBanner from '@/components/ui/page-banner';
import CorporateLiaisonSidebar from '@/components/corporate-liaison/corporate-liaison-sidebar';

export default function AlumniEngagementPage() {
  const alumni = [
    { name: 'Shahmeer Amir', title: 'FOUNDER AND CEO AT VEILIUX', batch: 'BATCH 2011', initial: 'S' },
    { name: 'Eng. Fawad Laher', title: 'MD, STORM FIBER', batch: 'BATCH 1997', initial: 'F' },
    { name: 'Tehseen Ahmed', title: 'CEO AT TOTAL NETWORK SOLUTIONS', batch: 'BATCH 2011', initial: 'T' },
    { name: 'Aqeel Khan', title: 'CEO DREAMS NETWORK AND TECHNOLOGY', batch: 'BATCH 2004', initial: 'A' },
    { name: 'Absar Ansari', title: 'CEO AT AAA TECHNOLOGY', batch: 'BATCH 1997', initial: 'A' },
    { name: 'Wajid Hassan', title: 'SOLUTION ARCHITECT AT AT&T USA', batch: 'BATCH 2002', initial: 'W' },
    { name: 'Muhammad Kahif', title: 'SENIOR INFORMATION SECURITY PROFESSIONAL AT KUWAIT FINANCE HOUSE', batch: 'BATCH 1997', initial: 'M' },
    { name: 'Muhammad Fahad Shafi', title: 'COUNTRY MANAGER SP AT HUAWEI UAE', batch: 'BATCH 2005', initial: 'M' },
    { name: 'Khalid Khan', title: 'REGIONAL SALES MANAGER AT HEWLETT-PACKARD MALESIA', batch: 'BATCH 2000', initial: 'K' },
    { name: 'Dr. Ishtiyaq Makda', title: 'ASSISTANT PROFESSOR HABIB UNIVERSITY', batch: 'BATCH 2004', initial: 'I' },
    { name: 'Tariq Jawed', title: 'VP LEAD ARCHITECT AT JP MORGAN CHASE AND CO. USA', batch: 'BATCH 2002', initial: 'T' },
    { name: 'Sara Azim', title: 'HEAD, PROCESSES MANAGEMENT AT NATIONAL BANK OF PAKISTAN', batch: 'BATCH 2001', initial: 'S' }
  ];

  const colors = [
    'bg-blue-600',
    'bg-indigo-600',
    'bg-purple-600',
    'bg-pink-600',
    'bg-red-600',
    'bg-orange-600',
    'bg-yellow-600',
    'bg-green-600',
    'bg-teal-600',
    'bg-cyan-600',
    'bg-sky-600',
    'bg-violet-600'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Alumni Engagement"
        subtitle="Connecting with our alumni network"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Corporate Liaison', href: '/corporate-liaison' },
          { label: 'Alumni Engagement' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CorporateLiaisonSidebar />
          </div>

          <div className="lg:col-span-3">
            {/* Section 1: Descriptive Block */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Alumni Engagement
              </h1>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  UIT University takes immense pride in nurturing strong connections with our alumni, making alumni engagement a top priority within our Department of Corporate Liaison. Our commitment to our former students is reflected in a range of initiatives designed to keep our alumni involved and invested in the growth and success of the university community.
                </p>
                <p className="mb-4">
                  We offer alumni opportunities to contribute to the professional development of current students through mentorship programs and career guidance, sharing their valuable insights and experiences. Additionally, we assist our alumni by providing guidance on further studies and scholarship opportunities, ensuring that they have access to resources to continue their educational journeys.
                </p>
                <p className="mb-4">
                  Furthermore, UIT University encourages alumni to support current students by sponsoring internships and offering invaluable work experiences that shape the careers of the next generation. We also actively engage our alumni in the academic realm by allowing them to sponsor and oversee final-year projects, fostering a sense of academic excellence and continuity.
                </p>
                <p className="mb-4">
                  But it's not all about business and academics; we believe in the joy of coming back. Our alumni are invited to participate in recreational activities and events that help maintain connections and friendships formed during their time at the university. Moreover, we proudly feature our alumni's accomplishments in our bi-annual newsletter, giving them the recognition they deserve.
                </p>
                <p className="mb-6">
                  At UIT University, alumni engagement isn't just a commitment; it's a celebration of the enduring relationship between our former students and their alma mater. Join us in preserving and enhancing this legacy of excellence and connection.
                </p>
                <p className="text-center text-xl italic text-blue-600 font-semibold mt-8">
                  Our alumni have accomplished amazing things. We are proud to be a part of their journey.
                </p>
              </div>
            </div>

            {/* Section 2: Alumni Spotlight Grid */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Alumni Spotlight
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {alumni.map((person, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200"
                  >
                    <div className="flex flex-col items-center p-6">
                      <div className={`w-20 h-20 ${colors[index]} rounded-full flex items-center justify-center mb-4`}>
                        <span className="text-3xl font-bold text-white">{person.initial}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
                        {person.name}
                      </h3>
                      <p className="text-sm text-gray-600 text-center mb-2">
                        {person.title}
                      </p>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                        {person.batch}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
