import React from 'react';
import Link from 'next/link';
import PageBanner from '@/components/ui/page-banner';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Microscope, Shield } from 'lucide-react';

export default function ORICPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Banner */}
      <PageBanner
        title="Office of Research, Innovation & Commercialization (ORIC)"
        subtitle="Fostering Research and Innovation"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "ORIC" }
        ]}
        backgroundImage="/images/bg-1-1.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation - Desktop/Tablet */}
          <aside className="hidden lg:block lg:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h3>
              <nav className="space-y-2">
                <a
                  href="#introduction"
                  className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Introduction
                </a>
                <a
                  href="#director-message"
                  className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Director's Message
                </a>
                <a
                  href="#vision-mission"
                  className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Vision & Mission
                </a>
                <a
                  href="#organogram"
                  className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Organogram
                </a>
                <a
                  href="#labs"
                  className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  ORIC Labs
                </a>
                <a
                  href="#newsroom"
                  className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  News Room
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* ORIC Introduction Section */}
            <section id="introduction" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
          <div className="prose max-w-none space-y-4 text-gray-700 leading-relaxed">
            <p>
              The Office of Research, Innovation, and Commercialization (ORIC) is designed to enhance a university's research capacity, foster innovation, and drive the commercialization of new ideas and technologies. ORIC bridges the gap between academic research and industry needs, ensuring that the research conducted within universities has practical applications. Its role extends to nurturing a culture of entrepreneurship, where faculty and students are encouraged to develop creative solutions and turn innovative ideas into commercially viable products or services. This helps universities contribute to economic growth and societal development.
            </p>
            <p>
              In addition to promoting research and innovation, ORIC facilitates partnerships between universities, industries, and government bodies. These collaborations are essential for addressing complex challenges, from technological advancements to sustainability initiatives. ORIC also plays a key role in securing research funding, generating intellectual property, and managing the commercialization of research outputs. By aligning academic goals with market demands, ORIC helps create a sustainable ecosystem of research and innovation, benefiting both the academic community and society at large.
            </p>
          </div>
        </section>

            {/* Director's Message Section */}
            <section id="director-message" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Director's Message</h2>
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-l-4 border-primary">
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Looking ahead, our vision is clear and collaborative. I see ORIC as a catalyst for the incredible potential within our academic community. That is the very core of our mission: to ensure that the knowledge we create in our labs and classrooms is translated into real-world solutions, rather than leaving it on the shelf.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Thus, building on this foundation, our pursuit is directed toward creating a sustainable ecosystem where Academia, Industry, and Institutions can come together to form partnerships that address the challenges of Digital Transformation and a Sustainable Future. ORIC endeavors to become a partner in this adventure and enable the continuum from discovery to impact.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Together, we will not only elevate the status of UIT University as a leading Institution, but will also create an economic and social engine for the growth and progress of Pakistan.
                </p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="text-gray-900 font-semibold">With regards,</p>
                  <p className="text-gray-900 font-semibold">Muhammad Ali Kemal</p>
                  <p className="text-primary font-medium">Director ORIC</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

            {/* Vision & Mission Section */}
            <section id="vision-mission" className="mb-16 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-t-4 border-blue-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">ORIC Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  "To establish UIT University as a prominent global leader in innovation and sustainability, enabling students and faculty to spearhead state-of-the-art research and solutions that propel technology forward while advocating for environmentally conscious practices."
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-t-4 border-green-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">ORIC Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  "To support UIT University's pursuit of excellence in research and sustainable technology by fostering impactful research and facilitating the commercialization of pioneering innovations. We are dedicated to empowering students and faculty through strategic partnerships, effective resource mobilization, and rigorous ethical oversight, creating a dynamic research ecosystem that advances technological progress and environmental stewardship."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

            {/* ORIC Organogram Section */}
            <section id="organogram" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">ORIC Organogram</h2>
          <Card>
            <CardContent className="p-8">
              <div className="bg-gray-100 rounded-lg h-[600px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FileText className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">ORIC Organizational Structure</p>
                  <p className="text-sm">Hierarchy Image Placeholder</p>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4">
                Organizational hierarchy of the Office of Research, Innovation & Commercialization
              </p>
            </CardContent>
          </Card>
        </section>

            {/* ORIC Labs Section */}
            <section id="labs" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">ORIC Labs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* MERL Lab */}
            <Link href="/merl" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-64 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <Microscope className="w-24 h-24 text-white relative z-10" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      Micro Electronic Research Lab (MERL)
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Pioneering chip design education and open-source hardware development. MERL focuses on cutting-edge microelectronics research and innovation.
                    </p>
                    <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
                      <span>Visit MERL Lab</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Post-Quantum Computing Lab */}
            <Link href="/post-quantum-lab" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-800 h-64 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <Shield className="w-24 h-24 text-white relative z-10" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      Post-Quantum Computing Lab
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Advancing research in quantum-resistant cryptography and next-generation computing technologies for a secure digital future.
                    </p>
                    <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
                      <span>Visit Post-Quantum Lab</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

            {/* News Room Section */}
            <section id="newsroom" className="mb-16 scroll-mt-24">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">News Room</h2>
            <Button variant="outline" asChild>
              <Link href="/blog">
                View All News
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          {/* News Grid - Placeholder for dynamic blog component */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">November {item}, 2025</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      ORIC News Article {item}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Latest updates and announcements from the Office of Research, Innovation & Commercialization...
                    </p>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link href={`/blog/article-${item}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Stay updated with the latest research developments, innovations, and achievements from ORIC
            </p>
          </div>
        </section>

            {/* Call to Action Section */}
            <section className="mb-16">
          <Card className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Get Involved with ORIC</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Join us in advancing research, innovation, and commercialization at UIT University. 
                Collaborate with us to transform ideas into impactful solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Contact ORIC
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
                  <Link href="/research">
                    Explore Research Opportunities
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
