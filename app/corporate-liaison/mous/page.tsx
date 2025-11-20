import PageBanner from '@/components/ui/page-banner';
import CorporateLiaisonSidebar from '@/components/corporate-liaison/corporate-liaison-sidebar';
import { Handshake, Building2, GraduationCap, Heart, Rocket, Brain, Laptop } from 'lucide-react';

export default function MOUsPage() {
  const mous = [
    {
      name: 'Sales Institute of Pakistan',
      description: 'Collaboration focused on training students in essential Soft Skills, social media marketing strategies, and professional website development to enhance their career readiness.',
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Systems Limited',
      description: 'Strategic partnership dedicated to the comprehensive training and professional development of students, preparing them for successful careers in the technology sector.',
      icon: Building2,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Federal State Budgetary Educational Institution of Higher Education Russian Timiryazev State Agrarian University',
      description: 'A significant collaboration marked by welcoming Mr. Andrey Viktorovich Fedorov, Consul General of Russia. This partnership establishes a foundation for continued academic collaboration, student exchange programs, and research initiatives between our institutions.',
      icon: Handshake,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Kashif Dental Clinic',
      description: 'Exclusive partnership offering 50% discount on all dental services and treatments for UITU Employees, Students, Alumni, and their families. This beneficial collaboration was established on 23rd February, 2023, ensuring accessible healthcare for our university community.',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      highlight: true
    },
    {
      name: 'WANZ International Technology',
      description: 'Partnership aimed at strengthening industrial linkages to support student startups and Final Year Projects (FYPs), providing real-world exposure and mentorship opportunities.',
      icon: Rocket,
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'MASHQ Training and Consultancy Pvt. Ltd',
      description: 'Collaborative initiative hosting conferences on Mental Health in partnership with Mashq Trainings & Consultancy and Speak Karachi, promoting student wellbeing and mental health awareness.',
      icon: Brain,
      color: 'from-teal-500 to-teal-600'
    },
    {
      name: 'iTecknologi Group of Companies',
      description: 'Strategic partnership focused on securing excellence by providing best-in-class tracking services. Both organizations share a mutual commitment to advancing innovation and collaboration in the field of IT & Technology.',
      icon: Laptop,
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="MOUs"
        subtitle="Memorandums of Understanding with industry partners"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Corporate Liaison', href: '/corporate-liaison' },
          { label: 'MOUs' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CorporateLiaisonSidebar />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Memorandums of Understanding
              </h1>
              <p className="text-gray-600 text-lg">
                Our university has established strategic partnerships with leading organizations through 
                Memorandums of Understanding (MOUs) to enhance academic programs, research opportunities, 
                and career prospects for our students.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mous.map((mou, index) => {
                const Icon = mou.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow ${
                      mou.highlight ? 'ring-2 ring-red-500' : ''
                    }`}
                  >
                    <div className={`h-24 bg-gradient-to-r ${mou.color} flex items-center justify-center`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                        {mou.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {mou.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Partnership Opportunities</h3>
              <p className="text-blue-800 mb-3">
                Interested in establishing a partnership with our university? Contact us to explore collaboration opportunities:
              </p>
              <div className="space-y-1 text-blue-800">
                <p>
                  <span className="font-medium">Email:</span>{' '}
                  <a href="mailto:partnerships@uit.edu" className="underline hover:text-blue-600">
                    partnerships@uit.edu
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
  );
}
