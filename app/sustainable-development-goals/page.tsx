'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, TrendingUp, Users, BookOpen, Leaf } from 'lucide-react';
import { supabase, BlogPost } from '@/lib/supabase';

interface CounterProps {
  end: number;
  duration?: number;
}

function Counter({ end, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-3xl font-bold text-gray-900 mb-1">
      {count}
    </div>
  );
}

const sdgData = [
  { number: 1, title: 'NO POVERTY', color: 'bg-[#E5243B]' },
  { number: 2, title: 'ZERO HUNGER', color: 'bg-[#DDA63A]' },
  { number: 3, title: 'GOOD HEALTH AND WELL-BEING', color: 'bg-[#4C9F38]' },
  { number: 4, title: 'QUALITY EDUCATION', color: 'bg-[#C5192D]' },
  { number: 5, title: 'GENDER EQUALITY', color: 'bg-[#FF3A21]' },
  { number: 6, title: 'CLEAN WATER AND SANITATION', color: 'bg-[#26BDE2]' },
  { number: 7, title: 'AFFORDABLE AND CLEAN ENERGY', color: 'bg-[#FCC30B]' },
  { number: 8, title: 'DECENT WORK AND ECONOMIC GROWTH', color: 'bg-[#A21942]' },
  { number: 9, title: 'INDUSTRY INNOVATION AND INFRASTRUCTURE', color: 'bg-[#FD6925]' },
  { number: 10, title: 'REDUCED INEQUALITIES', color: 'bg-[#DD1367]' },
  { number: 11, title: 'SUSTAINABLE CITIES AND COMMUNITIES', color: 'bg-[#FD9D24]' },
  { number: 12, title: 'RESPONSIBLE CONSUMPTION AND PRODUCTION', color: 'bg-[#BF8B2E]' },
  { number: 13, title: 'CLIMATE ACTION', color: 'bg-[#3F7E44]' },
  { number: 14, title: 'LIFE BELOW WATER', color: 'bg-[#0A97D9]' },
  { number: 15, title: 'LIFE ON LAND', color: 'bg-[#56C02B]' },
  { number: 16, title: 'PEACE, JUSTICE AND STRONG INSTITUTIONS', color: 'bg-[#00689D]' },
  { number: 17, title: 'PARTNERSHIPS FOR THE GOALS', color: 'bg-[#19486A]' },
];

const pillars = [
  { number: 19, label: 'Sustainability', icon: Leaf, color: 'text-green-600' },
  { number: 37, label: 'Communications', icon: TrendingUp, color: 'text-blue-600' },
  { number: 17, label: 'Community', icon: Users, color: 'text-purple-600' },
  { number: 80, label: 'Research / Publications', icon: BookOpen, color: 'text-orange-600' }
];

export default function SustainableDevelopmentGoalsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [displayedBlogs, setDisplayedBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [blogsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    const startIndex = 0;
    const endIndex = currentPage * blogsPerPage;
    setDisplayedBlogs(blogs.slice(startIndex, endIndex));
  }, [blogs, currentPage, blogsPerPage]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  const hasMoreBlogs = displayedBlogs.length < blogs.length;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      year: date.getFullYear()
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Modern Hero Section */}
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
              Sustainable Development Goals
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow" style={{ color: 'rgba(255, 255, 255, 0.9) !important' }}>
              Our Commitment to a Better Future
            </p>
            
            <div className="flex items-center justify-center gap-4 flex-wrap pb-4">
              <Link
                href="/sustainable-development-goals/sdgs-report"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-all font-semibold shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.4)] transform hover:-translate-y-0.5"
              >
                View SDGs Report
              </Link>
              <button
                onClick={() => {
                  const element = document.getElementById('sdgs-grid');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                type="button"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-all font-semibold border-2 border-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.4)]"
              >
                Explore Goals
              </button>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249, 250, 251)"/>
          </svg>
        </div>
      </div>

      {/* Our Pillars - Modern Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
                <Icon className={`w-8 h-8 ${pillar.color} mb-3`} />
                <Counter end={pillar.number} duration={2000} />
                <div className="text-sm text-gray-600 font-medium">{pillar.label}</div>
              </div>
            );
          })}
        </div>

        {/* Welcome Section - Modern Design */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="text-6xl">👋</div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Our SDGs Hub</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Welcome to UIT University's Sustainable Development Goals (SDGs) Hub. Here, we showcase our commitment to the 17 SDGs established by the United Nations. Explore how we integrate these global goals into our education, research, and community engagement efforts.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The Sustainable Development Goals are a universal call to action to end poverty, protect the planet, and ensure that all people enjoy peace and prosperity by 2030. UIT University is dedicated to contributing to these global initiatives through innovative solutions, collaborative partnerships, and sustainable practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SDGs Grid - Modern Layout */}
        <div id="sdgs-grid" className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 text-white px-10 py-4 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold">17 Sustainable Development Goals</h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {sdgData.map((sdg) => (
              <Link
                key={sdg.number}
                href={`/sustainable-development-goals/sdg-${sdg.number}`}
                className="group"
              >
                <div className={`${sdg.color} aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 relative`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-4 text-white">
                    <div className="text-6xl font-bold mb-3">{sdg.number}</div>
                    <div className="text-xs font-bold text-center leading-tight uppercase">
                      {sdg.title}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Events - Modern Cards */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 text-white px-10 py-4 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold">Recent Events</h2>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Loading events...</p>
            </div>
          ) : displayedBlogs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
              <p className="text-gray-600 text-lg">No events available at the moment.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {displayedBlogs.map((blog) => {
                  const date = formatDate(blog.published_at || blog.created_at);
                  return (
                    <Link 
                      key={blog.id} 
                      href={`/news-media/news-events/${blog.id}`}
                      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={blog.image_url || 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 left-4 bg-white rounded-xl shadow-lg p-3 text-center min-w-[70px]">
                          <div className="text-3xl font-bold text-gray-900">{date.day}</div>
                          <div className="text-xs text-gray-600 uppercase font-semibold">{date.month}</div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {blog.excerpt || blog.content.replace(/<[^>]*>/g, '').substring(0, 120)}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{date.day} {date.month} {date.year}</span>
                        </div>
                        {blog.author_name && (
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                            <Users className="w-4 h-4" />
                            <span>{blog.author_name}</span>
                          </div>
                        )}
                        {blog.category && (
                          <div className="mt-4">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide">
                              {blog.category}
                            </span>
                          </div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>

              {hasMoreBlogs && (
                <div className="text-center">
                  <button
                    onClick={loadMore}
                    className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Load More Events
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
