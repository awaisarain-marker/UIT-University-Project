'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface EventCard {
  image: string;
  title: string;
  description: string;
}

interface EventsWithLightboxProps {
  events: EventCard[];
}

export default function EventsWithLightbox({ events }: EventsWithLightboxProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
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

  return (
    <>
      {/* Events Section */}
      <section id="events" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Events</h2>
            <p className="text-xl text-gray-600">
              MERL-UITU hosted Events and Training Sessions for celebrating success of our interns and to familiarize students in state of the art technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <img
                  alt={event.title}
                  className="w-full h-64 object-cover cursor-pointer"
                  src={event.image}
                  onClick={() => openLightbox(index)}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
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
              {/* Image */}
              <div className="relative w-full">
                <img
                  src={events[currentImageIndex].image}
                  alt={events[currentImageIndex].title}
                  className="w-full h-auto max-h-[85vh] object-contain mx-auto"
                />
              </div>

              {/* Image Info */}
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {events[currentImageIndex].title}
                </h3>
                <p className="text-gray-300">
                  {events[currentImageIndex].description}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  {currentImageIndex + 1} / {events.length}
                </p>
              </div>

              {/* Navigation Buttons */}
              {events.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-8 h-8 text-white" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all"
                    aria-label="Next image"
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
