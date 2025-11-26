import Link from 'next/link';
import PageBanner from '@/components/ui/page-banner';
import NewsMediaSidebar from '@/components/news-media/news-media-sidebar';

export default function NewsMediaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="News & Media"
        subtitle="Stay connected with the latest news, events, and insights from our institution"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Media' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <NewsMediaSidebar />
          </div>

          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/news-media/media-press" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold text-blue-600 mb-3">Media / Press</h2>
                <p className="text-gray-600">
                  Press releases, media coverage, and official statements.
                </p>
              </Link>

              <Link href="/news-media/news-events" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold text-blue-600 mb-3">News & Events</h2>
                <p className="text-gray-600">
                  Latest news, announcements, and upcoming events.
                </p>
              </Link>

              <Link href="/news-media/newsletter" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold text-blue-600 mb-3">Newsletter</h2>
                <p className="text-gray-600">
                  Subscribe for regular updates and highlights.
                </p>
              </Link>

              <Link href="/news-media/views-opinions" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold text-blue-600 mb-3">Views & Opinions</h2>
                <p className="text-gray-600">
                  Expert perspectives and thought leadership.
                </p>
              </Link>

              <Link href="/news-media/bio-symposium-2023" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold text-blue-600 mb-3">Bio Symposium 2023</h2>
                <p className="text-gray-600">
                  Highlights from the Bio Symposium 2023 event.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
