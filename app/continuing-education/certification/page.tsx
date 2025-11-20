'use client';

import { useState, useRef } from 'react';
import PageBanner from '@/components/ui/page-banner';
import ContinuingEducationSidebar from '@/components/continuing-education/continuing-education-sidebar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CertificationCarouselProps {
  title: string;
  images: string[];
  onImageClick: (images: string[], index: number) => void;
}

function CertificationCarousel({ title, images, onImageClick }: CertificationCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const totalSlides = Math.ceil(images.length / 4);
  const currentSlide = Math.floor((scrollContainerRef.current?.scrollLeft || 0) / (scrollContainerRef.current?.scrollWidth || 1) * totalSlides);

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-blue-600 text-center mb-4">{title}</h3>
      
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className="flex gap-3 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => !isDragging && onImageClick(images, index)}
            className="flex-shrink-0 w-[calc(25%-9px)] cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img
              src={image}
              alt={`${title} certificate ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg shadow-md"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Bullet Points */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (scrollContainerRef.current) {
                const scrollWidth = scrollContainerRef.current.scrollWidth;
                scrollContainerRef.current.scrollLeft = (scrollWidth / totalSlides) * index;
              }
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function CertificationPage() {
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

  const certifications = [
    {
      title: 'CCNA with Cyber Security',
      images: Array(12).fill('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    {
      title: 'AI Powered Video Editing',
      images: Array(12).fill('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    {
      title: 'Data Science Fundamentals',
      images: Array(12).fill('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    {
      title: 'MERN Stack Web Development',
      images: Array(12).fill('https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    {
      title: 'Cyber Security',
      images: Array(12).fill('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    {
      title: '3D Animation',
      images: Array(12).fill('https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    {
      title: 'Professional Cyber Security - Job Training',
      images: Array(12).fill('https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    {
      title: 'Social Media Marketing',
      images: Array(12).fill('https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    {
      title: 'Become a Freelancer',
      images: Array(12).fill('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Certificate Distribution"
        subtitle="Professional certification programs to advance your career"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Continuing Education', href: '/continuing-education' },
          { label: 'Certification' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ContinuingEducationSidebar />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Certificate Distribution
              </h1>

              {certifications.map((cert, index) => (
                <CertificationCarousel
                  key={index}
                  title={cert.title}
                  images={cert.images}
                  onImageClick={openLightbox}
                />
              ))}
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
                alt={`Certificate ${lightboxIndex + 1}`}
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

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
