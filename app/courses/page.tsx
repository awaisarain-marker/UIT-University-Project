'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase-client';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal, X } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  price: number;
  category: string;
  image_url: string;
  is_active: boolean;
  created_at: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCourseIds, setSelectedCourseIds] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedLevel, setSelectedLevel] = useState('all');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const supabase = createClient();
    
    // Load categories
    const { data: categoriesData } = await supabase
      .from('course_categories')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });
    
    if (categoriesData) {
      setCategories(categoriesData);
    }

    // Load courses
    const { data: coursesData } = await supabase
      .from('courses')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (coursesData) {
      setCourses(coursesData);
      console.log('Loaded courses:', coursesData.length);
    }
    setLoading(false);
  };

  // Get unique years from courses
  const years = ['all', ...Array.from(new Set(courses.map(c => {
    const match = c.duration?.match(/(\d+)\s*year/i);
    return match ? match[1] : null;
  }).filter((y): y is string => y !== null)))];

  // Filter courses
  const filteredCourses = courses.filter(course => {
    // Search filter
    if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !course.description?.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Category filter (if any categories are selected)
    if (selectedCategories.length > 0) {
      let matchesCategory = false;
      
      if (selectedCategories.includes('undergraduate') && 
          (course.level === 'bachelor' || course.level === 'beginner')) {
        matchesCategory = true;
      }
      if (selectedCategories.includes('graduate') && 
          (course.level === 'master' || course.level === 'phd')) {
        matchesCategory = true;
      }
      if (selectedCategories.includes('short-courses') && 
          (course.level === 'intermediate' || course.level === 'advanced')) {
        matchesCategory = true;
      }
      
      if (!matchesCategory) return false;
    }

    // Specific course filter (if any courses are selected)
    if (selectedCourseIds.length > 0 && !selectedCourseIds.includes(course.id)) {
      return false;
    }

    // Year filter
    if (selectedYear !== 'all') {
      const match = course.duration?.match(/(\d+)\s*year/i);
      if (!match || match[1] !== selectedYear) return false;
    }

    // Price filter
    if (course.price < priceRange[0] || course.price > priceRange[1]) {
      return false;
    }

    // Level filter
    if (selectedLevel !== 'all' && course.level !== selectedLevel) {
      return false;
    }

    return true;
  });

  // Debug logging
  console.log('Total courses:', courses.length);
  console.log('Filtered courses:', filteredCourses.length);
  console.log('Selected categories:', selectedCategories);
  console.log('Selected course IDs:', selectedCourseIds);

  // Helper functions for category checkboxes
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleCourse = (courseId: string) => {
    setSelectedCourseIds(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const formatLevel = (level: string) => {
    const levelMap: { [key: string]: string } = {
      'beginner': 'Beginner',
      'intermediate': 'Intermediate',
      'advanced': 'Advanced',
      'bachelor': 'Undergraduate',
      'master': 'Graduate',
      'phd': 'PhD'
    };
    return levelMap[level] || level;
  };

  const Sidebar = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Search</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
        <div className="space-y-3">
          {/* Undergraduate Program */}
          <div>
            <label className="flex items-center gap-2 cursor-pointer font-medium hover:text-blue-600">
              <input
                type="checkbox"
                checked={selectedCategories.includes('undergraduate')}
                onChange={() => toggleCategory('undergraduate')}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="text-sm text-gray-900">Undergraduate Program</span>
            </label>
            {/* Sub-items */}
            <div className="ml-6 mt-2 space-y-1">
              {courses
                .filter(c => c.level === 'bachelor' || c.level === 'beginner')
                .slice(0, 5)
                .map((course) => (
                  <label 
                    key={course.id} 
                    className="flex items-center gap-2 text-xs text-gray-600 pl-2 border-l-2 border-gray-200 py-1 cursor-pointer hover:text-blue-600 hover:border-blue-400"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCourseIds.includes(course.id)}
                      onChange={() => toggleCourse(course.id)}
                      className="w-3 h-3 text-blue-600 rounded"
                    />
                    {course.title}
                  </label>
                ))}
              {courses.filter(c => c.level === 'bachelor' || c.level === 'beginner').length > 5 && (
                <div className="text-xs text-gray-500 pl-2 italic">
                  +{courses.filter(c => c.level === 'bachelor' || c.level === 'beginner').length - 5} more
                </div>
              )}
            </div>
          </div>

          {/* Graduate Program */}
          <div>
            <label className="flex items-center gap-2 cursor-pointer font-medium hover:text-blue-600">
              <input
                type="checkbox"
                checked={selectedCategories.includes('graduate')}
                onChange={() => toggleCategory('graduate')}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="text-sm text-gray-900">Graduate Program</span>
            </label>
            {/* Sub-items */}
            <div className="ml-6 mt-2 space-y-1">
              {courses
                .filter(c => c.level === 'master' || c.level === 'phd')
                .slice(0, 5)
                .map((course) => (
                  <label 
                    key={course.id} 
                    className="flex items-center gap-2 text-xs text-gray-600 pl-2 border-l-2 border-gray-200 py-1 cursor-pointer hover:text-blue-600 hover:border-blue-400"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCourseIds.includes(course.id)}
                      onChange={() => toggleCourse(course.id)}
                      className="w-3 h-3 text-blue-600 rounded"
                    />
                    {course.title}
                  </label>
                ))}
              {courses.filter(c => c.level === 'master' || c.level === 'phd').length > 5 && (
                <div className="text-xs text-gray-500 pl-2 italic">
                  +{courses.filter(c => c.level === 'master' || c.level === 'phd').length - 5} more
                </div>
              )}
            </div>
          </div>

          {/* Short Courses */}
          <div>
            <label className="flex items-center gap-2 cursor-pointer font-medium hover:text-blue-600">
              <input
                type="checkbox"
                checked={selectedCategories.includes('short-courses')}
                onChange={() => toggleCategory('short-courses')}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="text-sm text-gray-900">Short Courses</span>
            </label>
            {/* Sub-items */}
            <div className="ml-6 mt-2 space-y-1">
              {courses
                .filter(c => c.level === 'intermediate' || c.level === 'advanced')
                .slice(0, 5)
                .map((course) => (
                  <label 
                    key={course.id} 
                    className="flex items-center gap-2 text-xs text-gray-600 pl-2 border-l-2 border-gray-200 py-1 cursor-pointer hover:text-blue-600 hover:border-blue-400"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCourseIds.includes(course.id)}
                      onChange={() => toggleCourse(course.id)}
                      className="w-3 h-3 text-blue-600 rounded"
                    />
                    {course.title}
                  </label>
                ))}
              {courses.filter(c => c.level === 'intermediate' || c.level === 'advanced').length > 5 && (
                <div className="text-xs text-gray-500 pl-2 italic">
                  +{courses.filter(c => c.level === 'intermediate' || c.level === 'advanced').length - 5} more
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Duration */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Duration</h3>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Durations</option>
          {years.filter(y => y !== 'all').map((year) => (
            <option key={year} value={year}>{year} Year{year !== '1' ? 's' : ''}</option>
          ))}
        </select>
      </div>

      {/* Level */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Level</h3>
        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="bachelor">Bachelor</option>
          <option value="master">Master</option>
          <option value="phd">PhD</option>
        </select>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Reset Filters */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          setSearchQuery('');
          setSelectedCategories([]);
          setSelectedCourseIds([]);
          setSelectedYear('all');
          setPriceRange([0, 10000]);
          setSelectedLevel('all');
        }}
      >
        Reset Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Courses</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our comprehensive range of programs designed to prepare you for success in your chosen field.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section with Sidebar */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Button */}
            <div className="lg:hidden">
              <Button
                onClick={() => setSidebarOpen(true)}
                className="w-full gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </Button>
            </div>

            {/* Sidebar - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-4">
                <Sidebar />
              </div>
            </aside>

            {/* Sidebar - Mobile */}
            {sidebarOpen && (
              <>
                <div
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                  onClick={() => setSidebarOpen(false)}
                />
                <aside className="fixed inset-y-0 left-0 w-80 bg-white z-50 lg:hidden overflow-y-auto p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <button onClick={() => setSidebarOpen(false)}>
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <Sidebar />
                </aside>
              </>
            )}

            {/* Courses Grid */}
            <div className="flex-1">
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing {filteredCourses.length} of {courses.length} courses
                </p>
              </div>

              {loading ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading courses...</p>
                </div>
              ) : filteredCourses.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No courses found matching your criteria.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      {course.image_url ? (
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={course.image_url} 
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                          <span className="text-white text-4xl font-bold">{course.title.charAt(0)}</span>
                        </div>
                      )}

                      <div className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            course.level === 'bachelor' || course.level === 'beginner' ? 'bg-blue-100 text-blue-800' :
                            course.level === 'master' || course.level === 'advanced' ? 'bg-green-100 text-green-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {formatLevel(course.level)}
                          </span>
                          <span className="text-sm text-gray-500">{course.duration || 'N/A'}</span>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                          {course.description || 'No description available.'}
                        </p>

                        {course.category && (
                          <div className="mb-4">
                            <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                              {course.category}
                            </span>
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-blue-600">
                            ${course.price.toFixed(2)}
                          </div>
                          <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have chosen UIT University for their education.
            Apply now and take the first step towards your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
