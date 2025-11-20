'use client';

import { useState } from 'react';
import PageBanner from '@/components/ui/page-banner';
import CorporateLiaisonSidebar from '@/components/corporate-liaison/corporate-liaison-sidebar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CSRPage() {
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImages([]);
    setLightboxIndex(0);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  // CSR Activity Images - Using colorful placeholders
  const csrImages = [
    'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&q=80', // Blood donation
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80', // Mental health
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80', // Dental checkup
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80', // Iftar community
    'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80', // Community service
    'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80', // Ramadan spirit
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', // Electric vehicle
    'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80', // Innovation
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80', // Technology
    'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80', // Cleaning drive
    'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80', // Environment
    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80', // Sustainability
    'https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?w=800&q=80', // Blood drive KITCC
    'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80', // Healthcare
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80', // Medical support
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80', // Empowerment
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80', // Training
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80', // Education
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Corporate Social Responsibility"
        subtitle="Community engagement and social initiatives"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Corporate Liaison', href: '/corporate-liaison' },
          { label: 'CSR' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CorporateLiaisonSidebar />
          </div>

          <div className="lg:col-span-3">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-primary text-center mb-6">CSR Activities Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {csrImages.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => openLightbox(csrImages, index)}
                    className="relative aspect-video cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src={image}
                      alt={`CSR Activity ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-semibold text-sm">View Image</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#150D0D] mb-2">
                Corporate Social Responsibility (CSR)
              </h1>
              <p className="text-primary font-semibold text-lg mb-6">Welcome!</p>
              <div className="space-y-4 text-gray-700">
                <p>
                  At UIT University, we emphasize the importance of Corporate Social Responsibility (CSR) in modern business practices. 
                  CSR involves companies integrating ethical, social, and environmental concerns into their operations, going beyond profit 
                  to positively impact society. Our programs are designed to equip students with the knowledge and skills to implement 
                  responsible business strategies, preparing them to lead organizations that prioritize both profitability and social good.
                </p>
                <p>
                  Whether you&apos;re exploring cutting-edge research, engaging in community service, or pursuing your passions, UIT University 
                  offers the support and opportunities you need to succeed. Join us in shaping the future and making a lasting impact on the world.
                </p>
              </div>
            </div>

            {/* Key Areas of CSR (Pillars) */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#150D0D] text-center mb-10">Key Areas of CSR</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Environmental Responsibility */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Environmental Responsibility
                  </h3>
                  <p className="text-gray-600">
                    At UIT University, we are committed to reducing our environmental impact by adopting sustainable practices. 
                    Our initiatives include the use of renewable energy sources, waste reduction strategies, and pollution minimization efforts. 
                    By integrating these practices into our operations, we aim to contribute to a more sustainable future and serve as a model 
                    for environmental responsibility in higher education.
                  </p>
                </div>

                {/* Ethical Responsibility */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-red-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.111a12.004 12.004 0 00-7.801-4.251 12.004 12.004 0 00-7.8 4.251" />
                    </svg>
                    Ethical Responsibility
                  </h3>
                  <p className="text-gray-600">
                    At UIT University, we are dedicated to ensuring the fair and ethical treatment of all our stakeholders, including employees, 
                    students, partners, and the broader community. Our commitment involves maintaining transparent practices and actively avoiding 
                    any form of exploitation. Through these efforts, we strive to build a culture of trust, integrity, and mutual respect across 
                    all our interactions.
                  </p>
                </div>

                {/* Philanthropic Responsibility */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V4m0 16v-4" />
                    </svg>
                    Philanthropic Responsibility
                  </h3>
                  <p className="text-gray-600">
                    At UIT University, we actively support charitable causes and contribute to the welfare of society through donations, 
                    community service, and various forms of support. Our commitment to social responsibility reflects our dedication to making 
                    a positive impact and fostering a culture of compassion and generosity within our community.
                  </p>
                </div>

                {/* Economic Responsibility */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V4m0 16v-4" />
                    </svg>
                    Economic Responsibility
                  </h3>
                  <p className="text-gray-600">
                    At UIT University, we operate in a manner that contributes to the economic development of society, ensuring that our 
                    initiatives are both profitable and beneficial to our employees, students, and the broader community. By aligning our 
                    operations with economic growth, we strive to create opportunities that drive prosperity while maintaining a strong 
                    commitment to social responsibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Actions of CSR */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary inline-block px-6 py-2 border-b-4 border-primary">
                  Our Key Actions of CSR
                </h2>
              </div>

              <div className="space-y-12">
                {/* 1. Blood Donation to Mental Health Consultations (LEFT Image) */}
                <div className="bg-gray-50 p-6 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-1">
                      <div className="relative h-[300px] rounded-xl overflow-hidden bg-gradient-to-tr from-red-600 to-red-400 flex items-center justify-center">
                        <span className="text-white text-center font-semibold px-4">
                          Image Carousel Placeholder<br />(Health & Wellness Focus)
                        </span>
                      </div>
                    </div>
                    <div className="order-2 space-y-4">
                      <h3 className="text-2xl font-bold text-[#150D0D] mb-4">Blood Donation to Mental Health Consultations</h3>
                      <p className="text-gray-700">
                        At UIT University, we recognize the life-saving impact of blood donation. By organizing regular blood donation drives, 
                        we encourage our community members to give the gift of life. Each donation has the potential to save multiple lives, 
                        and our events provide a safe and supportive environment for donors.
                      </p>
                      <p className="text-gray-700">
                        Mental well-being is a critical aspect of overall health, and at UIT University, we are committed to supporting our 
                        community&apos;s mental health needs. Our mental health consultations offer a confidential and compassionate space for 
                        individuals to discuss their concerns with professional counselors.
                      </p>
                      <p className="text-gray-700">
                        Good oral health is essential to overall well-being, and UIT University is pleased to offer dental checkups as part 
                        of our health initiatives. Our dental checkup events provide convenient access to professional dental care.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Iftar on the Streets - Social Work (RIGHT Image) */}
                <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1 space-y-4">
                      <h3 className="text-2xl font-bold text-[#150D0D] mb-4">Iftar on the Streets - Social Work</h3>
                      <p className="text-gray-700">
                        In a heartwarming demonstration of compassion and practical learning, our BBA students at UIT University took to the 
                        streets of Karachi to embody the spirit of community and togetherness where it&apos;s needed most. As part of their 
                        community development coursework, they organized an iftar for the people of Karachi.
                      </p>
                      <p className="text-gray-700">
                        This event was not just about serving meals; it was about serving hope, fostering understanding, and creating a shared 
                        sense of humanity. As the sun set and the fast was broken together, it became a moment of reflection and connection.
                      </p>
                      <p className="text-gray-700">
                        Kudos to our students for exemplifying the true spirit of Ramadan and showcasing what it means to be a part of UIT 
                        University. Their actions are a testament to our values and commitment to making a meaningful impact on society.
                      </p>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="relative h-[300px] rounded-xl overflow-hidden bg-gradient-to-tr from-yellow-600 to-yellow-400 flex items-center justify-center">
                        <span className="text-white text-center font-semibold px-4">
                          Image Carousel Placeholder<br />(Community Service Focus)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Atlas Honda Limited - Escooty Test Ride Activity (LEFT Image) */}
                <div className="bg-gray-50 p-6 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-1">
                      <div className="relative h-[300px] rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 flex items-center justify-center">
                        <span className="text-white text-center font-semibold px-4">
                          Image Carousel Placeholder<br />(Industry Collaboration Focus)
                        </span>
                      </div>
                    </div>
                    <div className="order-2 space-y-4">
                      <h3 className="text-2xl font-bold text-[#150D0D] mb-4">Atlas Honda Limited - Escooty Test Ride Activity</h3>
                      <p className="text-gray-700">
                        Atlas Honda Limited recently conducted a Test Ride Activity for the Honda BENLY e at UIT University, leveraging the 
                        institution&apos;s renowned reputation for exceptional student final-year projects (FYPs) and significant faculty 
                        contributions in engineering and technology.
                      </p>
                      <p className="text-gray-700">
                        The test ride also served as a valuable platform for Atlas Honda to gather insightful feedback from UIT University&apos;s 
                        esteemed faculty. This collaboration underscores the strong relationship between industry and academia, highlighting both 
                        the innovative spirit of UIT University and Atlas Honda&apos;s commitment to advancing sustainable automotive solutions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. Cleaning Drive 2023 (RIGHT Image) */}
                <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1 space-y-4">
                      <h3 className="text-2xl font-bold text-[#150D0D] mb-4">Cleaning Drive 2023</h3>
                      <p className="text-gray-700">
                        UIT University recently organized a Cleaning Drive, where our dedicated students took to the streets to promote a 
                        healthier and cleaner environment. This initiative was a testament to our community&apos;s commitment to environmental 
                        stewardship, as students actively participated in removing litter and improving public spaces.
                      </p>
                      <p className="text-gray-700">
                        A heartfelt thanks to the enthusiastic students and faculty who rolled up their sleeves to contribute to this vital 
                        cause. Your unwavering commitment to enhancing environmental well-being is truly inspiring and reflects the university&apos;s 
                        values of fostering a sustainable and positive impact on our community.
                      </p>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="relative h-[300px] rounded-xl overflow-hidden bg-gradient-to-tr from-teal-600 to-teal-400 flex items-center justify-center">
                        <span className="text-white text-center font-semibold px-4">
                          Image Carousel Placeholder<br />(Environmental Focus)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Blood Donation Drive (LEFT Image) */}
                <div className="bg-gray-50 p-6 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-1">
                      <div className="relative h-[300px] rounded-xl overflow-hidden bg-gradient-to-tr from-rose-600 to-rose-400 flex items-center justify-center">
                        <span className="text-white text-center font-semibold px-4">
                          Image Carousel Placeholder<br />(KITCC Trust Collaboration)
                        </span>
                      </div>
                    </div>
                    <div className="order-2 space-y-4">
                      <h3 className="text-2xl font-bold text-[#150D0D] mb-4">Blood Donation Drive</h3>
                      <p className="text-gray-700">
                        UIT University is thrilled to announce the success of our recent Blood Donation Drive, held in collaboration with the 
                        KITCC (Kashif Iqbal Thalassemia Care Centre) Trust. This impactful event played a crucial role in saving lives and 
                        providing essential support to Thalassemia patients through the generous donation of blood.
                      </p>
                      <p className="text-gray-700">
                        We extend our deepest gratitude to all the donors and volunteers whose contributions made this event a tremendous success. 
                        Your kindness and dedication have profoundly benefited our community, showcasing the power of collective effort in making 
                        a meaningful difference.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 6. Blind Resource Foundation (RIGHT Image) */}
                <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1 space-y-4">
                      <h3 className="text-2xl font-bold text-[#150D0D] mb-4">Blind Resource Foundation</h3>
                      <p className="text-gray-700">
                        UIT University is honored to have hosted the Blind Resource Foundation Pakistan for a transformative training initiative. 
                        On Pakistan&apos;s 76th Independence Day, the foundation conducted an engaging two-day capacity-building program titled 
                        &quot;Main Bhi Pakistan Hoon.&quot;
                      </p>
                      <p className="text-gray-700">
                        This program demonstrated a profound commitment to empowerment and upliftment by providing visually impaired individuals 
                        with essential skills and tools to navigate and overcome societal challenges. Through this comprehensive training session, 
                        participants gained valuable knowledge and resources to enhance their independence and effectiveness in various aspects of life.
                      </p>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="relative h-[300px] rounded-xl overflow-hidden bg-gradient-to-tr from-purple-600 to-purple-400 flex items-center justify-center">
                        <span className="text-white text-center font-semibold px-4">
                          Image Carousel Placeholder<br />(Empowerment & Training Focus)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImages.length > 0 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 font-bold z-10"
            >
              ✕
            </button>
            
            <div className="relative">
              <img
                src={lightboxImages[lightboxIndex]}
                alt={`CSR Activity ${lightboxIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg mx-auto"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            {/* Image Counter */}
            <div className="text-center mt-4 text-white text-sm">
              {lightboxIndex + 1} / {lightboxImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
