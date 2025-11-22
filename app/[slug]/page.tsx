import { createServerSupabaseClient } from '@/lib/supabase-server';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createServerSupabaseClient();
  
  const { data: page } = await supabase
    .from('pages')
    .select('title, meta_description')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (!page) {
    return {
      title: 'Page Not Found'
    };
  }

  return {
    title: page.title,
    description: page.meta_description || page.title
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const supabase = await createServerSupabaseClient();
  
  const { data: page } = await supabase
    .from('pages')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-6">{page.title}</h1>
          <div 
            className="content"
            dangerouslySetInnerHTML={{ __html: page.content }} 
          />
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const supabase = await createServerSupabaseClient();
  
  const { data: pages } = await supabase
    .from('pages')
    .select('slug')
    .eq('is_published', true);

  return pages?.map((page) => ({
    slug: page.slug
  })) || [];
}
