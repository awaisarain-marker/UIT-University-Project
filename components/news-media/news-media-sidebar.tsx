'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Newspaper, Calendar, Mail, MessageSquare, Microscope, FileText } from 'lucide-react';

export default function NewsMediaSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const menuItems = [
    {
      label: 'Media / Press',
      href: '/news-media/media-press',
      icon: FileText
    },
    {
      label: 'News & Events',
      href: '/news-media/news-events',
      icon: Calendar
    },
    {
      label: 'Newsletter',
      href: '/news-media/newsletter',
      icon: Mail
    },
    {
      label: 'Views & Opinions',
      href: '/news-media/views-opinions',
      icon: MessageSquare
    },
    {
      label: 'Bio Symposium 2023',
      href: '/news-media/bio-symposium-2023',
      icon: Microscope
    }
  ];

  return (
    <aside className="bg-white rounded-lg shadow-md p-6 sticky top-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <Newspaper className="w-5 h-5 mr-2 text-blue-600" />
          News & Media
        </h3>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                isActive(item.href)
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <Link
          href="/"
          className="block px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-center font-medium"
        >
          Back to Home
        </Link>
      </div>
    </aside>
  );
}
