'use client';

import { useState } from 'react';
import PageBanner from '@/components/ui/page-banner';
import NewsMediaSidebar from '@/components/news-media/news-media-sidebar';
import { BookOpen, ExternalLink, Calendar } from 'lucide-react';

interface Newsletter {
  id: string;
  title: string;
  edition: string;
  date: string;
  link: string;
  thumbnail: string;
}

export default function NewsletterPage() {
  const [selectedNewsletter, setSelectedNewsletter] = useState<Newsletter | null>(null);

  const newsletters: Newsletter[] = [
    {
      id: '1',
      title: 'Newsletter Jan-June 2025',
      edition: '5th Edition',
      date: 'Jan-June 2025',
      link: 'https://online.pubhtml5.com/ndia/yjfo/',
      thumbnail: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      title: 'Newsletter 30th Special Edition 2024',
      edition: '30th Special Edition',
      date: '2024',
      link: 'https://online.pubhtml5.com/ndia/wlal/',
      thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3',
      title: 'Newsletter June 2024',
      edition: '3rd Edition',
      date: 'June 2024',
      link: 'https://online.pubhtml5.com/ndia/wmxc/',
      thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '4',
      title: 'Newsletter December 2022',
      edition: '1st Edition',
      date: 'December 2022',
      link: 'https://online.pubhtml5.com/ndia/gike/',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '5',
      title: 'Newsletter December 2022',
      edition: '2nd Edition',
      date: 'December 2022',
      link: 'https://online.pubhtml5.com/ndia/prbz/',
      thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Newsletter"
        subtitle="Subscribe to receive regular updates and highlights"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Media', href: '/news-media' },
          { label: 'Newsletter' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <NewsMediaSidebar />
          </div>

          <div className="lg:col-span-3">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-lg text-gray-700">
                Stay updated with our latest newsletters featuring university news, achievements, 
                events, and insights from our community. Browse our archive of past editions below.
              </p>
            </div>

            {/* Newsletter Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsletters.map((newsletter) => (
                <div
                  key={newsletter.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
                    <img
                      src={newsletter.thumbnail}
                      alt={newsletter.title}
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                    />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <BookOpen className="w-16 h-16 text-white mb-4" />
                      <h3 className="text-white font-bold text-xl mb-2 drop-shadow-lg">
                        {newsletter.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white text-sm mb-4 drop-shadow-md">
                        <Calendar className="w-4 h-4" />
                        <span>{newsletter.date}</span>
                      </div>
                      <span className="px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        {newsletter.edition}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-4 space-y-2">
                    <button
                      onClick={() => setSelectedNewsletter(newsletter)}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      Read Online
                    </button>
                    
                    <a
                      href={newsletter.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open in New Tab
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Subscribe Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Subscribe to Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Get the latest newsletter delivered directly to your inbox.
              </p>
              
              <form className="max-w-2xl space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Viewer Modal */}
      {selectedNewsletter && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedNewsletter(null)}
        >
          <div
            className="relative w-full max-w-6xl h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedNewsletter(null)}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 font-bold z-10"
            >
              ✕
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedNewsletter.title}</h2>
                  <p className="text-sm text-gray-600">{selectedNewsletter.edition} - {selectedNewsletter.date}</p>
                </div>
                <a
                  href={selectedNewsletter.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Full Screen
                </a>
              </div>
              
              <iframe
                src={selectedNewsletter.link}
                className="w-full flex-1"
                title={selectedNewsletter.title}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
