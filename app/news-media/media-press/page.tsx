'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PageBanner from '@/components/ui/page-banner';

interface PressCarouselProps {
  title: string;
  date: string;
  images: string[];
  onImageClick: (images: string[], index: number) => void;
}

function PressCarousel({ title, date, images, onImageClick }: PressCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const slideWidth = container.scrollWidth / totalSlides;
      const newSlide = Math.round(container.scrollLeft / slideWidth);
      setCurrentSlide(newSlide);
    }
  };

  const totalSlides = Math.ceil(images.length / 4);

  const scrollToSlide = (slideIndex: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const slideWidth = container.scrollWidth / totalSlides;
      container.scrollTo({
        left: slideWidth * slideIndex,
        behavior: 'smooth'
      });
      setCurrentSlide(slideIndex);
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-blue-600 text-center mb-2">{title}</h3>
      <p className="text-sm text-gray-500 text-center mb-4">Dated: {date}</p>
      
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
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
              alt={`${title} ${index + 1}`}
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
            onClick={() => scrollToSlide(index)}
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

interface SidebarProps {
  items: { id: string; title: string; date: string }[];
  onItemClick: (id: string) => void;
}

function Sidebar({ items, onItemClick }: SidebarProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Press Coverage</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onItemClick(item.id)}
              className="text-left w-full text-sm text-gray-700 hover:text-gray-900 hover:underline transition-colors"
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MediaPressPage() {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const pressCoverage = [
    { 
      id: 'bio-symposium',
      title: 'Bio Symposium', 
      date: '29th-April-2023', 
      images: Array(8).fill('https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    { 
      id: 'convocation-2023',
      title: 'CONVOCATION 2023', 
      date: '8th-Jan-2023', 
      images: Array(8).fill('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    { 
      id: 'job-fair-2022',
      title: 'UITU JOB FAIR 2022', 
      date: '31-Oct-2022', 
      images: Array(8).fill('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    { 
      id: 'robomania-2022',
      title: 'ROBOMANIA 2022', 
      date: '11-Jun-2022', 
      images: Array(8).fill('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    { 
      id: 'vice-chancellor',
      title: 'UIT University First Vice Chancellor', 
      date: '18-May-2022', 
      images: Array(8).fill('https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    { 
      id: 'convocation-2022',
      title: 'CONVOCATION 2022', 
      date: '26-Mar-2022', 
      images: Array(8).fill('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    { 
      id: 'mou-sailani',
      title: 'MoU signed between UIT University and Sailani Welfare', 
      date: '13-Jan-2022', 
      images: Array(8).fill('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    { 
      id: 'inauguration',
      title: 'Inauguration Ceremony of UIT University', 
      date: '18-Dec-2021', 
      images: Array(8).fill('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    { 
      id: 'dr-zahir',
      title: 'Dr. Zahir Ali Syed Incident', 
      date: '11-Jun-2021', 
      images: Array(8).fill('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    { 
      id: 'convocation-2021',
      title: 'CONVOCATION 2021', 
      date: '20-Mar-2021', 
      images: Array(8).fill('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    { 
      id: 'buraq',
      title: 'Final Year Projects "BURAQ"', 
      date: '10-Feb-2021', 
      images: Array(8).fill('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    { 
      id: 'admissions-2021',
      title: 'Admissions Fall 2021', 
      date: '4-Feb-2021', 
      images: Array(8).fill('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    { 
      id: 'readmission-2020',
      title: 'Re-Admission Fall 2020', 
      date: '9-Nov-2020', 
      images: Array(8).fill('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    { 
      id: 'job-fair-2020',
      title: 'JOB FAIR 2020', 
      date: '20-Oct-2020', 
      images: Array(8).fill('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    { 
      id: 'ignite-funds',
      title: 'Final Year Projects Funds Awarded by IGNITE', 
      date: '27-Aug-2020', 
      images: Array(8).fill('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    { 
      id: 'it-mania-1',
      title: 'IT Mania', 
      date: '30-Dec-2019', 
      images: Array(8).fill('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    },
    { 
      id: 'it-mania-2',
      title: 'IT Mania', 
      date: '30-Dec-2019', 
      images: Array(8).fill('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Media / Press"
        subtitle="Access our press releases, media coverage, and official statements"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Media', href: '/news-media' },
          { label: 'Media / Press' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Sidebar items={pressCoverage} onItemClick={scrollToSection} />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Press Coverage</h2>
              
              {pressCoverage.map((item) => (
                <div key={item.id} id={item.id} className="scroll-mt-4">
                  <PressCarousel
                    title={item.title}
                    date={item.date}
                    images={item.images}
                    onImageClick={openLightbox}
                  />
                </div>
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
                alt={`Press coverage ${lightboxIndex + 1}`}
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
