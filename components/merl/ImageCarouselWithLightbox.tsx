'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageCarouselWithLightboxProps {
  images: string[];
  altPrefix?: string;
}

export default function ImageCarouselWithLightbox({
  images,
  altPrefix = 'MERL Achievement'
}: ImageCarouselWithLightboxProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [lightboxEmblaRef, lightboxEmblaApi] = useEmblaCarousel({ loop: true });
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxStartIndex, setLightboxStartIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollLightboxPrev = useCallback(() => {
    if (lightboxEmblaApi) lightboxEmblaApi.scrollPrev();
  }, [lightboxEmblaApi]);

  const scrollLightboxNext = useCallback(() => {
    if (lightboxEmblaApi) lightboxEmblaApi.scrollNext();
  }, [lightboxEmblaApi]);

  const openLightbox = useCallback((index: number) => {
    setLightboxStartIndex(index);
    setIsLightboxOpen(true);
    // Scroll to the clicked image in lightbox
    setTimeout(() => {
      if (lightboxEmblaApi) {
        lightboxEmblaApi.scrollTo(index);
      }
    }, 100);
  }, [lightboxEmblaApi]);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  // Close lightbox on Escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isLightboxOpen, closeLightbox]);

  return (
    <>
      {/* Main Carousel */}
      <div className="relative w-full">
        {/* Navigation Buttons - Top Position */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={scrollPrev}
            className="bg-white/90 hover:bg-white p-3 rounded-full transition-all z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={scrollNext}
            className="bg-white/90 hover:bg-white p-3 rounded-full transition-all z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image}
                  alt={`${altPrefix} ${index + 1}`}
                  width={1200}
                  height={700}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

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

            {/* Lightbox Carousel */}
            <div
              className="relative w-full max-w-6xl mx-auto px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden" ref={lightboxEmblaRef}>
                <div className="flex">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="flex-[0_0_100%] min-w-0 relative"
                    >
                      <div className="relative w-full h-[80vh]">
                        <Image
                          src={image}
                          alt={`${altPrefix} ${index + 1}`}
                          fill
                          className="object-contain"
                          sizes="100vw"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lightbox Navigation Buttons */}
              <button
                onClick={scrollLightboxPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <button
                onClick={scrollLightboxNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-4 rounded-full transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
