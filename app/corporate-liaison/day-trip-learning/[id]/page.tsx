'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import PageBanner from '@/components/ui/page-banner';
import CorporateLiaisonSidebar from '@/components/corporate-liaison/corporate-liaison-sidebar';
import BlogCard from '@/components/blog/blog-card';
import { supabase, BlogPost } from '@/lib/supabase';
import { Calendar, User, ArrowLeft, Tag, Clock, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogPost[]>([]);
  const [recentBlogs, setRecentBlogs] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (params.id) {
      fetchBlog(params.id as string);
    }
  }, [params.id]);

  const fetchBlog = async (id: string) => {
    try {
      setLoading(true);

      // Fetch the blog post
      const { data: blogData, error: blogError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .eq('is_published', true)
        .single();

      if (blogError) throw blogError;

      const blogPost = blogData as BlogPost;
      setBlog(blogPost);

      // Fetch related blogs (same category, excluding current)
      if (blogPost.category) {
        const { data: relatedData, error: relatedError } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('category', blogPost.category)
          .eq('is_published', true)
          .neq('id', id)
          .limit(6)
          .order('published_at', { ascending: false });

        if (!relatedError && relatedData) {
          setRelatedBlogs(relatedData as BlogPost[]);
        }
      }

      // Fetch recent blogs for sidebar
      const { data: recentData, error: recentError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .neq('id', id)
        .limit(4)
        .order('published_at', { ascending: false });

      if (!recentError && recentData) {
        setRecentBlogs(recentData as BlogPost[]);
      }

      // Fetch all categories dynamically
      const { data: allBlogs, error: categoriesError } = await supabase
        .from('blog_posts')
        .select('category')
        .eq('is_published', true);

      if (!categoriesError && allBlogs) {
        const uniqueCategories = Array.from(
          new Set(allBlogs.map((b) => b.category).filter(Boolean))
        ) as string[];
        setCategories(uniqueCategories);
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
      router.push('/corporate-liaison/day-trip-learning');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatDateShort = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageBanner
          title="Loading..."
          subtitle="Please wait"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Corporate Liaison', href: '/corporate-liaison' },
            { label: 'Day Trip Learning', href: '/corporate-liaison/day-trip-learning' },
          ]}
          backgroundImage="https://images.unsplash.com/photo-1464047736614-af63643285bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-gray-600">Loading blog post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Day Trip Learning"
        subtitle="Educational field trips and industry visits"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Corporate Liaison', href: '/corporate-liaison' },
          { label: 'Day Trip Learning', href: '/corporate-liaison/day-trip-learning' },
          { label: blog.title },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1464047736614-af63643285bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content - 8 columns */}
          <div className="lg:col-span-8">
            {/* Back Button */}
            <Link
              href="/corporate-liaison/day-trip-learning"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>

            {/* Blog Content */}
            <article className="bg-white rounded-2xl shadow-md overflow-hidden">
              {/* Blog Header */}
              <div className="p-8 md:p-10">
                {/* Category and Date */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {blog.category && (
                    <span className="px-4 py-1.5 bg-gray-900 text-white text-xs font-bold rounded uppercase tracking-wide">
                      {blog.category}
                    </span>
                  )}
                  {blog.published_at && (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(blog.published_at)}</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {blog.title}
                </h1>

                {/* Author Info */}
                <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {blog.author_name || 'Admin'}
                      </p>
                      <p className="text-xs text-gray-500">Author</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              {blog.image_url && (
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Blog Content */}
              <div className="p-8 md:p-10">
                {blog.excerpt && (
                  <div className="mb-8 p-6 bg-gray-50 border-l-4 border-primary rounded-r-lg">
                    <p className="text-lg text-gray-700 italic leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                )}

                <div
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Share Section */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Share2 className="w-5 h-5" />
                      <span className="font-semibold">Share this article</span>
                    </div>
                    <div className="flex gap-3">
                      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </button>
                      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </button>
                      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Related Posts */}
            {relatedBlogs.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedBlogs.slice(0, 4).map((relatedBlog) => (
                    <BlogCard
                      key={relatedBlog.id}
                      id={relatedBlog.id}
                      title={relatedBlog.title}
                      excerpt={relatedBlog.excerpt}
                      category={relatedBlog.category}
                      image_url={relatedBlog.image_url}
                      published_at={relatedBlog.published_at}
                      author_name={relatedBlog.author_name || 'Admin'}
                      href={`/corporate-liaison/day-trip-learning/${relatedBlog.id}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - 4 columns */}
          <aside className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Navigation Sidebar */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Navigation</h3>
                <CorporateLiaisonSidebar />
              </div>

              {/* Recent Posts */}
              {recentBlogs.length > 0 && (
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentBlogs.map((recentBlog) => (
                      <Link
                        key={recentBlog.id}
                        href={`/corporate-liaison/day-trip-learning/${recentBlog.id}`}
                        className="flex gap-4 group"
                      >
                        {recentBlog.image_url && (
                          <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                            <img
                              src={recentBlog.image_url}
                              alt={recentBlog.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                            {recentBlog.title}
                          </h4>
                          {recentBlog.published_at && (
                            <p className="text-xs text-gray-500 mt-1">
                              {formatDateShort(recentBlog.published_at)}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories - Dynamic from Database */}
              {categories.length > 0 && (
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        href={`/corporate-liaison/day-trip-learning?category=${category}`}
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                          {category}
                        </span>
                        <span className="text-xs text-gray-400">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {blog.category && (
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      {blog.category}
                    </span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      Day Trip
                    </span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      Learning
                    </span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer">
                      Education
                    </span>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
