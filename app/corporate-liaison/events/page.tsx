'use client';

import { useState, useMemo } from 'react';
import PageBanner from '@/components/ui/page-banner';
import CorporateLiaisonSidebar from '@/components/corporate-liaison/corporate-liaison-sidebar';
import { Search, Calendar, MapPin, Filter, X, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  sdg: string;
  image: string;
}

const mockEvents: Event[] = [
  { id: 1, title: 'Tech Innovation Summit', date: '2025-12-15', time: '10:00 AM', location: 'Main Auditorium', type: 'Conference', sdg: 'Industry, Innovation, and Infrastructure', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Career Fair 2025', date: '2025-11-20', time: '9:00 AM', location: 'Campus Grounds', type: 'Tradeshow, Consumer Show or Expo', sdg: 'Decent Work and Economic Growth', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Sustainability Workshop', date: '2025-12-01', time: '2:00 PM', location: 'Room 301', type: 'Class, Training, or Workshop', sdg: 'Climate Action', image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Alumni Networking Night', date: '2025-11-25', time: '6:00 PM', location: 'University Hall', type: 'Meeting or Networking Event', sdg: 'Partnerships for the Goals', image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 5, title: 'Entrepreneurship Seminar', date: '2025-12-10', time: '11:00 AM', location: 'Business Center', type: 'Seminar or Talk', sdg: 'Decent Work and Economic Growth', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 6, title: 'Clean Energy Expo', date: '2025-12-05', time: '10:00 AM', location: 'Exhibition Hall', type: 'Tradeshow, Consumer Show or Expo', sdg: 'Affordable and Clean Energy', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 7, title: 'Mental Health Awareness', date: '2025-11-28', time: '3:00 PM', location: 'Student Center', type: 'Seminar or Talk', sdg: 'Good Health and Well-being', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 8, title: 'Coding Bootcamp', date: '2025-12-12', time: '9:00 AM', location: 'Computer Lab', type: 'Class, Training, or Workshop', sdg: 'Quality Education', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 9, title: 'Industry Visit - Tech Park', date: '2025-11-30', time: '8:00 AM', location: 'Tech Park', type: 'Tour', sdg: 'Industry, Innovation, and Infrastructure', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 10, title: 'Gender Equality Forum', date: '2025-12-08', time: '1:00 PM', location: 'Conference Room', type: 'Conference', sdg: 'Gender Equality', image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 11, title: 'Sports Tournament', date: '2025-12-20', time: '4:00 PM', location: 'Sports Complex', type: 'Tournament', sdg: 'Good Health and Well-being', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 12, title: 'Research Symposium', date: '2025-12-18', time: '10:00 AM', location: 'Research Center', type: 'Conference', sdg: 'Quality Education', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
];

const sdgCategories = [
  'Affordable and Clean Energy', 'Business & Professional', 'Charity & Causes', 'Clean Water and Sanitation',
  'Climate Action', 'Community & Culture', 'day trip', 'Decent Work and Economic Growth',
  'Family & Education', 'Fashion & Beauty', 'Film, Media & Entertainment', 'Food & Drink',
  'Game or Competition', 'Gender Equality', 'Good Health and Well-being', 'Industry, Innovation, and Infrastructure',
  'Life Below Water', 'Life on Land', 'No Poverty', 'ORIC', 'Other', 'Partnerships for the Goals',
  'Peace and Justice Strong Institutions', 'Performing & Visual Arts', 'Quality Education', 'Reduced Inequality',
  'Responsible Consumption and Production', 'Science & Technology', 'Sports & Fitness',
  'Sustainable Cities and Communities', 'Zero Hunger'
];

const eventTypes = [
  'Appearance or Signing', 'Attraction', 'Camp, Trip, or Retreat', 'Class, Training, or Workshop',
  'Communication', 'Community', 'Concert or Performance', 'Conference', 'Convention',
  'Developing trained workforce', 'Dinner or Gala', 'Festival or Fair', 'Game or Competition',
  'Meeting or Networking Event', 'Other', 'Party or Social Gathering', 'Publications',
  'Race or Endurance Event', 'Rally', 'Research', 'Screening', 'Seminar or Talk',
  'Sustainability', 'Tour', 'Tournament', 'Tradeshow, Consumer Show or Expo'
];

function CheckboxFilter({ 
  title, 
  options, 
  selected, 
  onChange 
}: { 
  title: string; 
  options: string[]; 
  selected: string[]; 
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-2"
      >
        {title}
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {isOpen && (
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="max-h-48 overflow-y-auto space-y-1">
            {filteredOptions.map((option) => (
              <label key={option} className="flex items-center text-sm cursor-pointer hover:bg-gray-50 p-1 rounded">
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  onChange={() => onChange(option)}
                  className="mr-2"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CorporateEventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedSDGs, setSelectedSDGs] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const toggleSDG = (sdg: string) => {
    setSelectedSDGs(prev =>
      prev.includes(sdg) ? prev.filter(s => s !== sdg) : [...prev, sdg]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setStartDate('');
    setEndDate('');
    setSelectedSDGs([]);
    setSelectedTypes([]);
  };

  const removeFilter = (type: 'sdg' | 'type' | 'date', value?: string) => {
    if (type === 'sdg' && value) {
      setSelectedSDGs(prev => prev.filter(s => s !== value));
    } else if (type === 'type' && value) {
      setSelectedTypes(prev => prev.filter(t => t !== value));
    } else if (type === 'date') {
      setStartDate('');
      setEndDate('');
    }
  };

  const filteredEvents = useMemo(() => {
    return mockEvents.filter(event => {
      const matchesSearch = searchTerm === '' ||
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDateRange = (!startDate || event.date >= startDate) &&
        (!endDate || event.date <= endDate);

      const matchesSDG = selectedSDGs.length === 0 || selectedSDGs.includes(event.sdg);
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(event.type);

      return matchesSearch && matchesDateRange && matchesSDG && matchesType;
    });
  }, [searchTerm, startDate, endDate, selectedSDGs, selectedTypes]);

  const hasActiveFilters = selectedSDGs.length > 0 || selectedTypes.length > 0 || startDate || endDate;

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner
        title="Corporate Liaison Events"
        subtitle="Industry events and networking opportunities"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Corporate Liaison', href: '/corporate-liaison' },
          { label: 'Events' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CorporateLiaisonSidebar />
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Filters Bar - Inline at Top */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Date Range */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Start Date
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      End Date
                    </label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* SDG Category Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      SDG Category
                    </label>
                    <select
                      value={selectedSDGs[0] || ''}
                      onChange={(e) => setSelectedSDGs(e.target.value ? [e.target.value] : [])}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">All SDGs</option>
                      {sdgCategories.map(sdg => (
                        <option key={sdg} value={sdg}>{sdg}</option>
                      ))}
                    </select>
                  </div>

                  {/* Event Type Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Event Type
                    </label>
                    <select
                      value={selectedTypes[0] || ''}
                      onChange={(e) => setSelectedTypes(e.target.value ? [e.target.value] : [])}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">All Types</option>
                      {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {hasActiveFilters && (
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={clearAllFilters}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
              </div>

              {/* Event List */}
              <div>
                {/* Search Bar */}
                <div className="bg-white rounded-lg shadow-md p-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search events by title or location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Active Filters */}
                {hasActiveFilters && (
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex flex-wrap gap-2">
                      {(startDate || endDate) && (
                        <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {startDate && endDate ? `${startDate} to ${endDate}` : startDate || endDate}
                          <button onClick={() => removeFilter('date')} className="ml-2">
                            <X className="w-4 h-4" />
                          </button>
                        </span>
                      )}
                      {selectedSDGs.map(sdg => (
                        <span key={sdg} className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          {sdg}
                          <button onClick={() => removeFilter('sdg', sdg)} className="ml-2">
                            <X className="w-4 h-4" />
                          </button>
                        </span>
                      ))}
                      {selectedTypes.map(type => (
                        <span key={type} className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                          {type}
                          <button onClick={() => removeFilter('type', type)} className="ml-2">
                            <X className="w-4 h-4" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Events Grid */}
                {filteredEvents.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredEvents.map(event => (
                      <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                          <div className="space-y-2 text-sm text-gray-600 mb-4">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                              <span>{event.date} at {event.time}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                              <span>{event.location}</span>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                                {event.type}
                              </span>
                              <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                                {event.sdg}
                              </span>
                            </div>
                          </div>
                          <Link
                            href={`/corporate-liaison/events/${event.id}`}
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                          >
                            View Details
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-12 text-center">
                    <p className="text-gray-600 text-lg mb-4">No events found matching your criteria.</p>
                    <button
                      onClick={clearAllFilters}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
