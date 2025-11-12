'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  title: string;
  description: string;
  thumbnail?: string; // For videos
}

interface ResearchProjectsWithLightboxProps {
  images: MediaItem[];
  videos: MediaItem[];
}

export default function ResearchProjectsWithLightbox({ images, videos }: ResearchProjectsWithLightboxProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Combine all media items
  const allMedia = [...images, ...videos];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? allMedia.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === allMedia.length - 1 ? 0 : prev + 1));
  };

  // Close lightbox on Escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isLightboxOpen]);

  const currentMedia = allMedia[currentIndex];

  return (
    <>
      {/* Research Projects Section */}
      <section id="research" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Research Projects</h2>
            <p className="text-xl text-gray-600">
              MERL-UITU Graduates presented their Research Projects in International Conferences and Workshops
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {images.map((item, index) => (
              <div
                key={`image-${index}`}
                className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  alt={item.title}
                  className="w-full h-64 object-cover"
                  src={item.src}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((item, index) => (
              <div
                key={`video-${index}`}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(images.length + index)}
              >
                <div className="aspect-video relative">
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <iframe
                      src={item.src}
                      title={item.title}
                      className="w-full h-full pointer-events-none"
                      allowFullScreen
                    />
                  )}
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && currentMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-50"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8 text-white" />
            </button>

            {/* Lightbox Content */}
            <div
              className="relative w-full max-w-6xl mx-auto px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media Display */}
              <div className="relative w-full">
                {currentMedia.type === 'image' ? (
                  <img
                    src={currentMedia.src}
                    alt={currentMedia.title}
                    className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                  />
                ) : (
                  <div className="aspect-video w-full max-w-4xl mx-auto">
                    <iframe
                      src={currentMedia.src}
                      title={currentMedia.title}
                      className="w-full h-full rounded-lg"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                )}
              </div>

              {/* Media Info */}
              <div className="text-center mt-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {currentMedia.title}
                </h3>
                <p className="text-gray-300">
                  {currentMedia.description}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  {currentIndex + 1} / {allMedia.length}
                </p>
              </div>

              {/* Navigation Buttons */}
              {allMedia.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all"
                    aria-label="Previous item"
                  >
                    <ChevronLeft className="w-8 h-8 text-white" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all"
                    aria-label="Next item"
                  >
                    <ChevronRight className="w-8 h-8 text-white" />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
