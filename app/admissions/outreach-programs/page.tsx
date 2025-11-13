import PageBanner from '@/components/ui/page-banner';
import AdmissionsSidebar from '@/components/admissions/AdmissionsSidebar';
import EventCarousel from '@/components/outreach/EventCarousel';
import { outreachEvents } from '@/lib/outreachEvents';

export default function OutreachProgramsPage() {
  const eventGalleries = outreachEvents;
  return (
    <div className="min-h-screen">
      <PageBanner
        title="Outreach Programs"
        subtitle="Community engagement and outreach initiatives"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admissions', href: '/admissions' },
          { label: 'Outreach Programs' }
        ]}
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <AdmissionsSidebar />
          
          <main className="flex-1 space-y-8">
            {/* Event Galleries */}
            {eventGalleries.map((event, index) => (
              <EventCarousel
                key={index}
                title={event.title}
                images={event.images}
              />
            ))}

            {eventGalleries.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p>No outreach event galleries available at this time.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
