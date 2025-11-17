'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

import ModernTimeline from '@/components/ui/modern-timeline';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Marquee } from '@/components/ui/marquee';
import FacultySection from '@/components/sections/FacultySection';
import CoursesSection from '@/components/sections/CoursesSection';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Play, Star, ArrowRight, GraduationCap, Building, Users, Calendar, Clock, MapPin, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [eventOrientation, setEventOrientation] = useState<'horizontal' | 'vertical'>('horizontal');

  const bannerImages = [
    "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // Adapt event carousel orientation: vertical on desktop, horizontal on mobile
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setEventOrientation(mq.matches ? 'vertical' : 'horizontal');
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const testimonials = [
    {
      quote: "UIT University has provided me with an exceptional learning environment. The faculty is outstanding, and the facilities are world-class. I've gained not just knowledge but also the confidence to pursue my dreams.",
      name: "Sarah Ahmed",
      program: "BS Computer Science, Class of 2023",
      rating: 5
    },
    {
      quote: "The practical approach to learning and industry connections at UIT University helped me secure my dream job even before graduation. The professors are incredibly supportive and knowledgeable.",
      name: "Ahmed Hassan",
      program: "BS Software Engineering, Class of 2023",
      rating: 5
    },
    {
      quote: "UIT University's AI program is cutting-edge. The research opportunities and modern labs provided me with hands-on experience that's invaluable in today's tech industry.",
      name: "Fatima Khan",
      program: "BS Artificial Intelligence, Class of 2024",
      rating: 5
    },
    {
      quote: "The business administration program at UIT University equipped me with both theoretical knowledge and practical skills. The entrepreneurship support helped me start my own company.",
      name: "Ali Raza",
      program: "BBA Business Administration, Class of 2022",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">




      {/* Hero Section with Slideshow */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden">
        {/* Slideshow Background */}
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="text-white flex-1 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 sm:mb-6 leading-tight">
                  Transform Your Future at UIT University
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
                  Empowering with Knowledge, Discover Academic World
                </p>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-16">
            {/* Left: Overlapping images */}
            <div className="relative flex-1 w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
              {/* Back image */}
              <div className="rounded-2xl overflow-hidden w-[55%] sm:w-[50%]">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                  alt="University Building"
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[430px] object-cover"
                />
              </div>
              {/* Front image card */}
              <div className="absolute -bottom-10 sm:-bottom-10 left-1/2 -translate-x-1/4 w-[70%] sm:w-[65%] rounded-2xl border-4 border-gray bg-white">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                  alt="Students"
                  className="w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[430px] object-cover rounded-2xl"
                />
                {/* Circular Badge with Rotating Text */}
                <div className="absolute -bottom-8 sm:-bottom-12 -left-8 sm:-left-12 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-primary/10">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Center Number */}
                    <div className="text-3xl sm:text-5xl font-bold text-primary z-10">27</div>
                    {/* Rotating Text */}
                    <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                      <defs>
                        <path
                          id="circlePath"
                          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        />
                      </defs>
                      <text className="text-[6px] sm:text-[8px] fill-gray-600 font-semibold uppercase tracking-wider">
                        <textPath href="#circlePath" startOffset="0%">
                          Years of Experience • Years of Experience •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Copy */}
            <div className="flex-1 w-full mt-16 sm:mt-20 lg:mt-0">
              <div className="flex items-center gap-2 text-sm mb-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary"><GraduationCap className="w-4 h-4" /></span>
                <span className="font-medium">About UIT University</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 font-semibold">An Introduction to Our <span className="ma-hightlighted-text font-semibold">University</span></h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                The UIT University (UITU) was established vide The UIT University Act, 2017 [Sindh Act No. XXXIV of 2018] of Government of Sindh and published vide Notification in The Sindh Government Gazette on May 28, 2018. The University after due charter inspections by HEC, granted NOC whereby UITU has been initially allowed to start undergraduate programs in four departments namely, Electrical Engineering, Management Sciences, Computer Science and Social Sciences. The UIT University is managed by Usman Memorial Foundation (UMF).
              </p>
              <Button>
                More About Us <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Reasons to Choose Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-large font-semibold mb-4">Why <span className="ma-hightlighted-text">UIT</span> University</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover what makes us the preferred choice for students seeking quality education and career success.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <Card className="flex-1 text-center">
              <CardContent className="p-7">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
                <h5 className="ma-iconbox-head mb-4">Qualified & Experienced Faculty</h5>
                <p className="text-muted-foreground mb-6 small-text">
                  The UITU is proud of its faculty, who are well qualified and experienced in their relevant fields. They play a significant role in students' lives as teachers, mentors, counsellors and advisors. The UITU's faculty have authored many books and research papers with well-reputed publishers.
                </p>
              </CardContent>
            </Card>

            <Card className="flex-1 text-center">
              <CardContent className="p-7">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-primary" />
                </div>
                <h5 className="ma-iconbox-head mb-4">State-of-the-art Facilities</h5>
                <p className="text-muted-foreground mb-6 small-text">
                  State-of-the-art Facilities The UITU campus comprises multimedia classrooms, well-equipped labs, several labs, a relaxing cafeteria, a resource-rich library, a state-of-the-art auditorium and conference rooms. To improve the overall students’ learning experience, all instructional areas are air-conditioned and completely furnished with the latest audio-visual and video conferencing tools.
                </p>
              </CardContent>
            </Card>

            <Card className="flex-1 text-center">
              <CardContent className="p-7">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h5 className="ma-iconbox-head mb-4">Ideal Location</h5>
                <p className="text-muted-foreground mb-6 small-text">
                  The UITU Campus is ideally located at the heart of the city and is easily accessible by all modes of transportation from all parts of Karachi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Courses Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-large font-semibold mb-4">Academic Courses</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our comprehensive range of programs designed to prepare you for success in your chosen field.
            </p>
          </div>

          <CoursesSection showFilters={true} />
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left: Section copy like reference */}
            <div className="w-full lg:w-2/5">
              <div className="flex items-center gap-2 text-sm mb-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary"><GraduationCap className="w-4 h-4" /></span>
                <span className="font-medium">Events</span>
              </div>
              <h2 className="heading-large font-semibold mb-4 leading-tight">
                What's Happening at <span className="ma-hightlighted-text">UIT</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Stay tuned for exciting upcoming events designed to inspire, engage, and connect our community.
              </p>
              {/* Curve */}
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                See More Events <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Right: Carousel cards with overlay like reference */}
            <div className="w-full lg:w-3/5">
              <Carousel orientation="horizontal" opts={{ align: 'start', loop: true }} className="w-full">
                <CarouselContent viewportClassName="md:h-auto">
                  {[
                    {
                      title: "Creating Futures Through Technology",
                      date: "24 Feb, 2024",
                      time: "11:00 AM - 08:00 PM",
                      location: "United States",
                      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                    },
                    {
                      title: "AI and Machine Learning Workshop",
                      date: "25 May, 2024",
                      time: "02:00 PM - 06:00 PM",
                      location: "Computer Lab 1",
                      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                    },
                    {
                      title: "The Middle East in the Twentieth Century",
                      date: "01 Jun, 2024",
                      time: "10:00 AM - 12:00 PM",
                      location: "Auditorium B",
                      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                    },
                    {
                      title: "Design Thinking Bootcamp",
                      date: "15 Jun, 2024",
                      time: "09:00 AM - 05:00 PM",
                      location: "Innovation Lab",
                      image: "https://images.unsplash.com/photo-1523246206-4b88b006a139?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                    }
                  ].map((event, index) => (
                    <CarouselItem key={index} className="basis-full md:basis-[85%] lg:basis-[77%]">
                      <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <img src={event.image} alt={event.title} className="w-full h-64 md:h-80 object-cover" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                          <div className="text-lg md:text-xl font-semibold mb-3 drop-shadow">{event.title}</div>
                          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm opacity-95">
                            <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4" /> {event.date}</span>
                            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" /> {event.time}</span>
                            <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> {event.location}</span>
                          </div>
                        </div>
                        <button aria-label="Open" className="pointer-events-auto absolute top-4 right-4 h-10 w-10 rounded-full bg-white text-primary flex items-center justify-center shadow-md hover:scale-105 transition">
                          <ArrowUpRight className="w-5 h-5" />
                        </button>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="text-primary-foreground bg-primary hover:bg-primary/90 md:-left-12 left-2" />
                <CarouselNext className="text-primary-foreground bg-primary hover:bg-primary/90 md:-right-12 right-2" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section (replaces Popular Departments) */}
      <section className="py-20 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          <div className="text-center mb-16">
            <h2 className="heading-large font-semibold mb-4">Our <span className="ma-hightlighted-text">Timeline</span></h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A brief history of UIT University from foundation to becoming an independent chartered university.
            </p>
          </div>

          <ModernTimeline
            items={[
              {
                year: '1973',
                content:
                  'Usman Memorial Foundation was formed in 1973 in the memory of Late Mohammad Usman, the eldest of Brothers of the Hasham family - a business conglomerate of Pakistan that owns a group of companies.',
              },
              {
                year: '1994',
                content:
                  'In order to pay tribute to Late Usman’s keen interest in education of the community and the students fraternity at large, the UMF comprised of family members, friends and well-wishers of Late Mohammad Usman took a philanthropic initiative by establishing Usman Institute of Technology (UIT) in 1994.',
              },
              {
                year: '2015',
                content:
                  'Initially, UIT was a constituent institution of Hamdard University and later in 2015 it got affiliation with NED University of Engineering and Technology (NEDUET). It is recognized by HEC.',
              },
              {
                year: '2021',
                content:
                  'Usman Institute of Technology (UIT) has now become an independent chartered UIT University.',
              },
            ]}
          />
        </div>
      </section>

      {/* Video Tour Section */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out scale-100 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <div className="group bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-white/30 cursor-pointer">
            <Play className="w-8 h-8 transition-transform duration-300 group-hover:scale-125" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Video Tour In Campus</h2>
          <p className="text-lg mb-8">
            Experience our campus life and facilities through this virtual tour
          </p>
        </div>

        {/* Contact Box */}
        <div className="absolute bottom-5 left-[420px] right-[450px] bg-primary text-primary-foreground py-5 px-10 rounded-[10px] shadow-lg">
          <div className="max-w-5xl mx-auto w-full flex items-center justify-center gap-16">

            {/* Left Section */}
            <div className="flex flex-col items-center justify-center text-center space-y-1">
              <span className="font-semibold text-sm leading-tight">Get In Touch:</span>
              <span className="text-xs leading-tight">info@example.com</span>
            </div>

            {/* Center Circular "or" */}
            <div className="bg-white text-blue-600 rounded-full w-11 h-11 flex items-center justify-center shadow-md border border-primary mx-2">
              <span className="font-extrabold text-base tracking-wide">or</span>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center justify-center text-center space-y-1">
              <span className="font-semibold text-sm leading-tight">Get In Touch:</span>
              <span className="text-xs leading-tight">+88 123-456-789</span>
            </div>

          </div>
        </div>

      </section>


      {/* Faculty Section */}
      <FacultySection />

      {/* Student Feedback Section */}
      <section className="py-20 overflow-hidden">
        <div className="text-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-large font-semibold mb-4">Feedback From <span className="ma-hightlighted-text">Students</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear what our students have to say about their experience at UIT University.
          </p>
        </div>

        <Marquee pauseOnHover className="[--duration:30s]">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg rounded-3xl p-8 border-0 w-[400px]">
              <CardContent className="p-0 flex flex-col h-full">
                <blockquote className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-semibold text-xl flex-shrink-0">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.program}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </Marquee>
      </section>



      {/* Blog Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="heading-large font-semibold mb-2">Latest <span className="ma-hightlighted-text">Insights</span></h2>
              <p className="text-muted-foreground">Stay updated with our latest news and articles</p>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              View All <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Education",
                icon: GraduationCap,
                title: "The Importance of STEM Education",
                excerpt: "Discover how STEM education shapes the future of innovation and technology.",
                date: "May 15, 2024",
                readTime: "5 min read",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                category: "Technology",
                icon: Building,
                title: "Future of Artificial Intelligence",
                excerpt: "Exploring the transformative potential of AI in education and beyond.",
                date: "May 12, 2024",
                readTime: "7 min read",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                category: "Career",
                icon: Users,
                title: "Building Your Professional Network",
                excerpt: "Essential strategies for creating meaningful professional connections.",
                date: "May 10, 2024",
                readTime: "4 min read",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              }
            ].map((post, index) => {
              const IconComponent = post.icon;
              return (
                <Card key={index} className="bg-white group cursor-pointer overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                      <IconComponent className="w-4 h-4" />
                      {post.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-primary hover:text-primary/80 font-semibold group/btn"
                    >
                      Read More 
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>


    </div>
  );
}