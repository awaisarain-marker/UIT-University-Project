'use client';

import { useState } from 'react';
import PageBanner from '@/components/ui/page-banner';
import NewsMediaSidebar from '@/components/news-media/news-media-sidebar';
import { Play } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
}

export default function BioSymposium2023Page() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const videos: Video[] = [
    {
      id: '1',
      title: 'Teaser 1',
      category: 'TEASER',
      thumbnail: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: '2',
      title: 'Teaser 2',
      category: 'TEASER',
      thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: '3',
      title: 'Dr. Faisal Khan',
      category: 'SPEAKER',
      thumbnail: 'https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: '4',
      title: 'Dr. Parvez Hoodbhoy',
      category: 'SPEAKER',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: '5',
      title: 'Dr. Imran Rauf',
      category: 'SPEAKER',
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: '6',
      title: 'Dr. Fareeda Soomro',
      category: 'SPEAKER',
      thumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: '7',
      title: 'Samir Hoodbhoy',
      category: 'SPEAKER',
      thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: '8',
      title: 'Durr E Shehwar Tariq',
      category: 'SPEAKER',
      thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: '9',
      title: 'Dr. Stephen Lyon',
      category: 'SPEAKER',
      thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Bio Symposium 2023"
        subtitle="Highlights and insights from the Bio Symposium 2023 event"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Media', href: '/news-media' },
          { label: 'Bio Symposium 2023' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <NewsMediaSidebar />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-lg text-gray-700">
                The Bio Symposium 2023 brought together leading researchers, scientists, and students 
                to discuss cutting-edge developments in biological sciences. Watch the highlights and 
                keynote speeches from our distinguished speakers.
              </p>
            </div>

            {/* Video Grid - 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-gray-800 rounded-full">
                        {video.category}
                      </span>
                    </div>

                    {/* UIT Logo Watermark */}
                    <div className="absolute top-3 right-3 opacity-60">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">UITU</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
                      Bio Symposium 2023
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 font-bold"
            >
              ✕
            </button>
            
            <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
              <iframe
                src={selectedVideo.videoUrl}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="mt-4 text-white">
              <h2 className="text-2xl font-bold">{selectedVideo.title}</h2>
              <p className="text-gray-300 mt-2">{selectedVideo.category} - Bio Symposium 2023</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
