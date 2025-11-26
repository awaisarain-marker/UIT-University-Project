'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, ExternalLink, Calendar } from 'lucide-react';

interface Report {
  id: string;
  title: string;
  period: string;
  date: string;
  link: string;
  thumbnail: string;
}

export default function SDGsReportPage() {
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  const reports: Report[] = [
    {
      id: '1',
      title: 'SDG Report July - Dec 2024',
      period: 'July - December 2024',
      date: '2024',
      link: 'https://online.pubhtml5.com/ndia/gfaj/',
      thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      title: 'SDGs Report January - June 2024',
      period: 'January - June 2024',
      date: '2024',
      link: 'https://online.pubhtml5.com/ndia/mqxe/',
      thumbnail: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3',
      title: 'SDGs Report 2023',
      period: 'Annual Report 2023',
      date: '2023',
      link: 'https://online.pubhtml5.com/ndia/mnyq/',
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Banner - Same as Parent */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 pb-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-5">
              <span className="text-white/90 text-sm font-medium">United Nations</span>
              <span className="w-1 h-1 bg-white/50 rounded-full"></span>
              <span className="text-white font-bold">17 Goals</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg" style={{ color: 'white !important' }}>
              SDGs Annual Reports
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow" style={{ color: 'rgba(255, 255, 255, 0.9) !important' }}>
              Our progress and impact on Sustainable Development Goals
            </p>
            
            <Link
              href="/sustainable-development-goals"
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-all font-semibold border-2 border-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to SDGs
            </Link>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249, 250, 251)"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-12 relative z-10">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <p className="text-lg text-gray-700">
            Explore our comprehensive SDGs Annual Reports showcasing UIT University's commitment to the 
            United Nations Sustainable Development Goals. These reports highlight our initiatives, achievements, 
            and measurable impact across various SDG targets.
          </p>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reports.map((report) => (
            <div
              key={report.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-800">
                <img
                  src={report.thumbnail}
                  alt={report.title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <BookOpen className="w-16 h-16 text-white mb-4" />
                  <h3 className="text-white font-bold text-xl mb-2 drop-shadow-lg">
                    {report.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white text-sm mb-4 drop-shadow-md">
                    <Calendar className="w-4 h-4" />
                    <span>{report.period}</span>
                  </div>
                  <span className="px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {report.date}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="p-4 space-y-2">
                <button
                  onClick={() => setSelectedReport(report)}
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-medium flex items-center justify-center gap-2 shadow-lg"
                >
                  <BookOpen className="w-4 h-4" />
                  Read Online
                </button>
                
                <a
                  href={report.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in New Tab
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-blue-600 mb-2">17</div>
            <div className="text-sm text-gray-600 font-medium">SDGs Addressed</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-sm text-gray-600 font-medium">Active Initiatives</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
            <div className="text-sm text-gray-600 font-medium">Students Engaged</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
            <div className="text-sm text-gray-600 font-medium">Partner Organizations</div>
          </div>
        </div>
      </div>

      {/* Report Viewer Modal */}
      {selectedReport && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedReport(null)}
        >
          <div
            className="relative w-full max-w-6xl h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedReport(null)}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 font-bold z-10"
            >
              ✕
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedReport.title}</h2>
                  <p className="text-sm text-gray-600">{selectedReport.period}</p>
                </div>
                <a
                  href={selectedReport.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Full Screen
                </a>
              </div>
              
              <iframe
                src={selectedReport.link}
                className="w-full flex-1"
                title={selectedReport.title}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
