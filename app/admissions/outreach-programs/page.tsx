import PageBanner from '@/components/ui/page-banner';
import AdmissionsSidebar from '@/components/admissions/AdmissionsSidebar';
import EventCarousel from '@/components/outreach/EventCarousel';
import { getAllEventGalleries } from '@/lib/getEventImages';

const eventTitles = [
  'Dhoraji Youth Services Foundation invited UIT for Career Counselling Seminar',
  'UIT University visited Govt. National College 2024',
  'Visit by Study Collegiate to UIT University',
  'UIT University participated in OMJ Freelancer Conference',
  'Visit by Vision Academy to UIT University',
  'Visit by Quaid e Azam Rangers School & College to UIT University',
  'UIT University visited Govt. Degree College Sukkur',
  'EDU Clan 3.0 Tando Muhammad Khan',
  'EDU Clan 3.0 Hyderabad',
  'Conducted a Counseling Session at Govt. Dehli College',
  'Participated in The Intellect School Career Fair 2023 Expo',
  'UIT University visited Govt. National College 2023',
  'Outreach Visit to Govt. College Gulzar e Hijri',
  '5th Pakistan Navy Industry Seminar & Exhibition 2023 Expo',
  'UIT University participated in Dawn Education Expo 2023',
  'UIT University participated in EDU CLAN 2.0 Tando Muhammad Khan 2022 Expo',
  "Visit by D'Rajus Coaching Center to UIT University",
  'UIT University particpated in The Caspian College Education Expo',
  'UIT University participated in The News Education Expo 202'
];

export default function OutreachProgramsPage() {
  const eventGalleries = getAllEventGalleries(eventTitles);
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
