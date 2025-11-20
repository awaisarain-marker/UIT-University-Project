'use client';

import { useState } from 'react';
import PageBanner from '@/components/ui/page-banner';
import ContinuingEducationSidebar from '@/components/continuing-education/continuing-education-sidebar';
import Image from 'next/image';

export default function WorkshopsPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const tabs = ['All', 'Management', 'Marketing', 'Other'];

  const workshops = [
    {
      id: 1,
      title: 'Leadership Workshop',
      category: 'Management',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Develop essential leadership skills'
    },
    {
      id: 2,
      title: 'Digital Marketing Seminar',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Master digital marketing strategies'
    },
    {
      id: 3,
      title: 'Project Management',
      category: 'Management',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Learn project management best practices'
    },
    {
      id: 4,
      title: 'Brand Strategy Workshop',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Build powerful brand strategies'
    },
    {
      id: 5,
      title: 'Innovation & Creativity',
      category: 'Other',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Foster innovation and creative thinking'
    },
    {
      id: 6,
      title: 'Communication Skills',
      category: 'Other',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Enhance professional communication'
    }
  ];

  const filteredWorkshops = activeTab === 'All' 
    ? workshops 
    : workshops.filter(w => w.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Workshops & Seminars"
        subtitle="Professional development workshops and seminars"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Continuing Education', href: '/continuing-education' },
          { label: 'Workshops' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ContinuingEducationSidebar />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Workshops & Seminars
          </h1>
          <p className="text-gray-600">
            Participate in our professional workshops and seminars to enhance your skills and knowledge.
          </p>
            </div>

            {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {tab}
            </button>
          ))}
            </div>

            {/* Workshop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkshops.map((workshop) => (
            <div
              key={workshop.id}
              onClick={() => setLightboxImage(workshop.image)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-2">
                  {workshop.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {workshop.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {workshop.description}
                </p>
              </div>
            </div>
          ))}
            </div>

            {filteredWorkshops.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-600">No workshops found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
            >
              ✕
            </button>
            <img
              src={lightboxImage}
              alt="Workshop"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
