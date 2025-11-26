import { createServerSupabaseClient } from '@/lib/supabase-server';
import { notFound } from 'next/navigation';
import PageBanner from '@/components/ui/page-banner';
import NewsMediaSidebar from '@/components/news-media/news-media-sidebar';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  image_url: string | null;
  category: string | null;
  author_name: string | null;
  published_at: string;
  is_published: boolean;
}

export default async function NewsEventDetailPage({ params }: { params: { id: string } }) {
  const supabase = await createServerSupabaseClient();

  const { data: blog, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', params.id)
    .eq('is_published', true)
    .single();

  if (error || !blog) {
    notFound();
  }

  const blogPost = blog as BlogPost;
  const formattedDate = new Date(blogPost.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title={blogPost.title}
        subtitle={blogPost.excerpt || 'News & Events'}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Media', href: '/news-media' },
          { label: 'News & Events', href: '/news-media/news-events' },
          { label: blogPost.title }
        ]}
        backgroundImage={blogPost.image_url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <NewsMediaSidebar />
          </div>

          <div className="lg:col-span-3">
            <Link
              href="/news-media/news-events"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News & Events
            </Link>

            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              {blogPost.image_url && (
                <div className="w-full h-96 relative">
                  <img
                    src={blogPost.image_url}
                    alt={blogPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-8">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formattedDate}</span>
                  </div>
                  {blogPost.author_name && (
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{blogPost.author_name}</span>
                    </div>
                  )}
                  {blogPost.category && (
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {blogPost.category}
                      </span>
                    </div>
                  )}
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-6">{blogPost.title}</h1>

                {blogPost.excerpt && (
                  <p className="text-xl text-gray-600 mb-8 pb-8 border-b border-gray-200">
                    {blogPost.excerpt}
                  </p>
                )}

                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
