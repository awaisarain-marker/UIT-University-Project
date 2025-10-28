'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  price: number;
  description: string;
  features: string[];
  level: 'Undergraduate' | 'Graduate' | 'Short Course';
  image: string;
}

const courses: Course[] = [
  {
    id: '1',
    title: 'BS Computer Science',
    category: 'Computing Sciences',
    duration: '4 Years',
    price: 150000,
    description: 'Comprehensive computer science program covering programming, algorithms, data structures, and software development.',
    features: ['Programming Languages', 'Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems'],
    level: 'Undergraduate',
    image: '/api/placeholder/400/300'
  },
  {
    id: '2',
    title: 'BS Software Engineering',
    category: 'Computing Sciences',
    duration: '4 Years',
    price: 150000,
    description: 'Focus on software development lifecycle, project management, and modern software engineering practices.',
    features: ['Software Development', 'Project Management', 'System Design', 'Quality Assurance', 'Agile Methodologies'],
    level: 'Undergraduate',
    image: '/api/placeholder/400/300'
  },
  {
    id: '3',
    title: 'BS Artificial Intelligence',
    category: 'Computing Sciences',
    duration: '4 Years',
    price: 160000,
    description: 'Cutting-edge AI program covering machine learning, neural networks, and intelligent systems.',
    features: ['Machine Learning', 'Neural Networks', 'Deep Learning', 'Natural Language Processing', 'Computer Vision'],
    level: 'Undergraduate',
    image: '/api/placeholder/400/300'
  },
  {
    id: '4',
    title: 'BE Electrical Engineering',
    category: 'Engineering',
    duration: '4 Years',
    price: 140000,
    description: 'Comprehensive electrical engineering program with focus on power systems and electronics.',
    features: ['Power Systems', 'Electronics', 'Control Systems', 'Telecommunications', 'Renewable Energy'],
    level: 'Undergraduate',
    image: '/api/placeholder/400/300'
  },
  {
    id: '5',
    title: 'BBA Business Administration',
    category: 'Management',
    duration: '4 Years',
    price: 120000,
    description: 'Business administration program covering management principles, marketing, and entrepreneurship.',
    features: ['Business Management', 'Marketing', 'Finance', 'Human Resources', 'Entrepreneurship'],
    level: 'Undergraduate',
    image: '/api/placeholder/400/300'
  },
  {
    id: '6',
    title: 'MS Computer Science',
    category: 'Computing Sciences',
    duration: '2 Years',
    price: 200000,
    description: 'Advanced computer science program for graduate students with research opportunities.',
    features: ['Advanced Algorithms', 'Research Methods', 'Thesis Project', 'Specialized Electives', 'Industry Internship'],
    level: 'Graduate',
    image: '/api/placeholder/400/300'
  },
  {
    id: '7',
    title: 'Python Programming',
    category: 'Short Course',
    duration: '3 Months',
    price: 25000,
    description: 'Intensive Python programming course for beginners and intermediate learners.',
    features: ['Python Basics', 'Data Structures', 'Web Development', 'Data Analysis', 'Project Work'],
    level: 'Short Course',
    image: '/api/placeholder/400/300'
  },
  {
    id: '8',
    title: 'Digital Marketing',
    category: 'Short Course',
    duration: '2 Months',
    price: 20000,
    description: 'Comprehensive digital marketing course covering SEO, social media, and online advertising.',
    features: ['SEO & SEM', 'Social Media Marketing', 'Content Marketing', 'Analytics', 'Campaign Management'],
    level: 'Short Course',
    image: '/api/placeholder/400/300'
  }
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [sortBy, setSortBy] = useState('title');

  const categories = ['All', 'Computing Sciences', 'Engineering', 'Management', 'Short Course'];
  const levels = ['All', 'Undergraduate', 'Graduate', 'Short Course'];

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory;
    const levelMatch = selectedLevel === 'All' || course.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'title':
        return a.title.localeCompare(b.title);
      case 'duration':
        return a.duration.localeCompare(b.duration);
      default:
        return 0;
    }
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-large mb-4">Our Courses</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our comprehensive range of programs designed to meet industry demands and prepare you for success.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Level Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="title">Title</option>
                  <option value="price">Price</option>
                  <option value="duration">Duration</option>
                </select>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              Showing {sortedCourses.length} course{sortedCourses.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{course.category.charAt(0)}</div>
                    <div className="text-sm opacity-90">{course.category}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      course.level === 'Undergraduate' ? 'bg-blue-100 text-blue-800' :
                      course.level === 'Graduate' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {course.level}
                    </span>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">
                      {formatPrice(course.price)}
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={`/courses/complete-web-development-bootcamp`}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        Learn More
                      </Link>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-large text-gray-900 mb-4">Ready to Start Learning?</h2>
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
