'use client';

import { useEffect, useState } from 'react';
import PageBanner from '@/components/ui/page-banner';
import ContinuingEducationSidebar from '@/components/continuing-education/continuing-education-sidebar';
import { Clock, Calendar } from 'lucide-react';

interface ShortCourse {
  _id: string;
  title: string;
  description: string;
  duration: string;
  startDate: string;
  instructor: string;
  fee: string;
  image?: string;
}

export default function ShortCoursesPage() {
  const [courses, setCourses] = useState<ShortCourse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/short-courses');
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Short Courses"
        subtitle="Enhance your skills with our professional short courses"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Continuing Education', href: '/continuing-education' },
          { label: 'Short Courses' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ContinuingEducationSidebar />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Available Short Courses
          </h1>
          <p className="text-gray-600">
            Explore our range of short courses designed to help you develop new skills and advance your career.
          </p>
            </div>

            {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading courses...</p>
          </div>
            ) : courses.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-600 text-lg">No courses available at the moment.</p>
            <p className="text-gray-500 text-sm mt-2">Please check back later for new courses.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {course.image && (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {course.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-blue-600" />
                      <span>Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                      <span>Starts: {new Date(course.startDate).toLocaleDateString()}</span>
                    </div>
                    {course.instructor && (
                      <p className="text-gray-600">
                        <span className="font-semibold">Instructor:</span> {course.instructor}
                      </p>
                    )}
                    {course.fee && (
                      <p className="text-blue-600 font-semibold text-lg mt-3">
                        {course.fee}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
