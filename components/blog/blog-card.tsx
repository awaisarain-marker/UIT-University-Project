import Link from 'next/link';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt?: string;
  category?: string;
  image_url?: string;
  published_at?: string;
  author_name?: string;
  href: string;
  sponsored?: boolean;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  category,
  image_url,
  published_at,
  author_name = 'Admin',
  href,
  sponsored = false,
}: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).toUpperCase();
  };

  return (
    <Link href={href}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden bg-gray-200">
          {image_url ? (
            <img
              src={image_url}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <span className="text-gray-400 text-lg">No Image</span>
            </div>
          )}
          
          {/* Category Badge */}
          {category && (
            <div className="absolute top-4 left-4">
              <span className="px-4 py-2 bg-white text-gray-800 text-sm font-semibold rounded-lg shadow-md uppercase tracking-wide">
                {category}
              </span>
            </div>
          )}
          
          {/* Sponsored Badge */}
          {sponsored && (
            <div className="absolute top-4 right-4">
              <span className="px-4 py-2 bg-gray-800/80 text-white text-sm font-semibold rounded-lg backdrop-blur-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Sponsored
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Date and Author */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            {published_at && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{formatDate(published_at)}</span>
              </div>
            )}
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              <span className="font-medium">POST BY <span className="text-gray-800 uppercase">{author_name}</span></span>
            </div>
          </div>

          {/* Title - 2 lines max */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Excerpt - 2 lines max */}
          {excerpt && (
            <p className="text-gray-600 line-clamp-2 leading-relaxed">
              {excerpt}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
