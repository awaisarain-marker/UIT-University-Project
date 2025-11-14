'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { createClient } from '@/lib/supabase-client';

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
}

interface CoursesSectionProps {
  showFilters?: boolean;
  limit?: number;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

export default function CoursesSection({ showFilters = true, limit }: CoursesSectionProps) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all-courses');

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
    let query = supabase
      .from('courses')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error loading courses:', error);
    } else {
      setCourses(data || []);
    }
    setLoading(false);
  };

  const filteredCourses = courses.filter(course => {
    if (selectedCategory === 'all-courses') return true;
    if (selectedCategory === 'undergraduate') {
      return course.level === 'bachelor' || course.level === 'beginner';
    }
    if (selectedCategory === 'graduate') {
      return course.level === 'master' || course.level === 'phd';
    }
    if (selectedCategory === 'short-courses') {
      return course.level === 'intermediate' || course.level === 'advanced';
    }
    return true;
  });

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

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white">Loading courses...</p>
      </div>
    );
  }

  return (
    <>
      {showFilters && categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <Button
              key={category.id}
              variant="outline"
              onClick={() => setSelectedCategory(category.slug)}
              className={`${
                selectedCategory === category.slug
                  ? 'bg-white text-primary border-white hover:bg-white hover:text-primary'
                  : 'bg-transparent text-white border-white hover:bg-white hover:text-primary'
              } hover:border-white focus-visible:ring-white transition-colors`}
            >
              {category.name}
            </Button>
          ))}
        </div>
      )}

      {filteredCourses.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-white text-lg">No courses available at the moment.</p>
        </div>
      ) : (
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {filteredCourses.map((course) => (
              <CarouselItem key={course.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-background h-full">
                  <div className="overflow-hidden ma-roundborder">
                    {course.image_url ? (
                      <img 
                        src={course.image_url} 
                        alt={course.title} 
                        className="w-full h-48 object-cover" 
                      />
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white text-4xl font-bold">{course.title.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        {formatLevel(course.level)}
                      </span>
                      <span className="text-sm text-muted-foreground">{course.duration || 'N/A'}</span>
                    </div>
                    <h3 className="text-xl ma-courses-heading-dark font-semibold mb-2">{course.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                      {course.description || 'No description available.'}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">${course.price.toFixed(2)}</span>
                      <Button size="sm">Enroll Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary-foreground bg-primary hover:bg-primary/90" />
          <CarouselNext className="text-primary-foreground bg-primary hover:bg-primary/90" />
        </Carousel>
      )}
    </>
  );
}
