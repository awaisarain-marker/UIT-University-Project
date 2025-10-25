'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Footer from './components/Footer';
import AceternityTimeline from '@/components/ui/aceternity-timeline';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Play, Star, ArrowRight, GraduationCap, Building, Users, Calendar, Clock, MapPin, ArrowUpRight } from 'lucide-react';
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

  const TestimonialsCarousel = () => {
    const [api, setApi] = useState<any>();

    useEffect(() => {
      if (!api) return;

      const interval = setInterval(() => {
        api.scrollNext();
      }, 4000);

      return () => clearInterval(interval);
    }, [api]);

    return (
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {[
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
          ].map((testimonial, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="bg-background p-8 text-center h-full">
                <CardContent className="p-0">
                  <div className="text-4xl text-primary mb-4">"</div>
                  <blockquote className="text-lg text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.program}</div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-primary-foreground bg-primary hover:bg-primary/90" />
        <CarouselNext className="text-primary-foreground bg-primary hover:bg-primary/90" />
      </Carousel>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+92-21-111-978-275</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@uitu.edu.pk</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="ma-iconboxes-top text-primary-foreground hover:text-primary-foreground/80">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="ma-iconboxes-top text-primary-foreground hover:text-primary-foreground/80">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="ma-iconboxes-top text-primary-foreground hover:text-primary-foreground/80">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="ma-iconboxes-top text-primary-foreground hover:text-primary-foreground/80">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-background shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">U</span>
                </div>
                <span className="ml-3 text-2xl font-bold text-foreground">UIT University</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="text-primary hover:text-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/courses" className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Courses
              </Link>
              <Link href="/events" className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Events
              </Link>
              <Link href="/blog" className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
              <Button size="sm">Login</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slideshow */}
      <section className="relative h-screen overflow-hidden">
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 ma-bg-gradient ma-65-width">
              <div className="text-white flex-1">
                <h1 className="text-5xl md:text-6xl font-medium mb-6 heading-large">
                  Transform Your Future at UIT University
                </h1>
                <p className="banner-desc-21 mb-8">
                  Empowering with Knowledge, Discover Academic World
                </p>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
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

          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            {/* Left: Overlapping images like reference */}
            <div className="relative flex-1 w-full max-w-xl">
              {/* Back image */}
              <div className="rounded-2xl overflow-hidden w-[50%]">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                  alt="University Building"
                  className="w-full h-[380px] md:h-[430px] object-cover"
                />
              </div>
              {/* Front image card */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/4 w-[70%] rounded-2xl border-4 border-gray bg-white">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                  alt="Students"
                  className="w-full h-[260px] md:h-[300px] object-cover rounded-2xl"
                />
                {/* Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl px-5 py-4 flex items-center gap-3">
                  <div className="text-3xl font-bold text-primary leading-none">27</div>
                  <div className="text-sm text-gray-600 leading-tight">Years of Experience</div>
                </div>
              </div>
            </div>

            {/* Right: Copy */}
            <div className="flex-1">
              <h2 className="text-4xl font-medium mb-4 heading-large">About UIT University</h2>
              <p className="text-muted-foreground mb-6">
                The UIT University (UITU) was established vide The UIT University Act, 2017 [Sindh Act No. XXXIV of 2018] of Government of Sindh and published vide Notification in The Sindh Government Gazette on May 28, 2018. The University after due charter inspections by HEC, granted NOC whereby UITU has been initially allowed to start undergraduate programs in four departments namely, Electrical Engineering, Management Sciences, Computer Science and Social Sciences. The UIT University is managed by Usman Memorial Foundation (UMF).
              </p>
              <Button>
                More About Us <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Reasons to Choose Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Reasons to Choose UIT University</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover what makes us the preferred choice for students seeking quality education and career success.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <Card className="flex-1 text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Best Faculty</h3>
                <p className="text-muted-foreground mb-6">
                  Our distinguished faculty members are experts in their fields, bringing real-world experience
                  and cutting-edge knowledge to the classroom.
                </p>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Play className="w-4 h-4 text-primary-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card className="flex-1 text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Modern Facilities</h3>
                <p className="text-muted-foreground mb-6">
                  State-of-the-art laboratories, libraries, and learning spaces equipped with the latest
                  technology to enhance your educational experience.
                </p>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Play className="w-4 h-4 text-primary-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card className="flex-1 text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Industry Connections</h3>
                <p className="text-muted-foreground mb-6">
                  Strong partnerships with leading companies and organizations provide internship
                  opportunities and direct pathways to employment.
                </p>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Play className="w-4 h-4 text-primary-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Courses Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Academic Courses</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our comprehensive range of programs designed to prepare you for success in your chosen field.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">All Courses</Button>
            <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">Undergraduate</Button>
            <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">Graduate</Button>
            <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">Short Course</Button>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {[
                {
                  title: "BS Computer Science",
                  duration: "4 Years",
                  level: "Undergraduate",
                  description: "Comprehensive computer science program covering programming, algorithms, and software development.",
                  price: "$150,000",
                  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                  title: "BS Software Engineering",
                  duration: "4 Years",
                  level: "Undergraduate",
                  description: "Focus on software development lifecycle and modern engineering practices.",
                  price: "$150,000",
                  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                  title: "BS Artificial Intelligence",
                  duration: "4 Years",
                  level: "Undergraduate",
                  description: "Cutting-edge AI program covering machine learning and intelligent systems.",
                  price: "$160,000",
                  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                  title: "BE Electrical Engineering",
                  duration: "4 Years",
                  level: "Undergraduate",
                  description: "Comprehensive electrical engineering with focus on power systems.",
                  price: "$140,000",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                  title: "BBA Business Administration",
                  duration: "4 Years",
                  level: "Undergraduate",
                  description: "Business administration covering management and entrepreneurship.",
                  price: "$120,000",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                  title: "MS Computer Science",
                  duration: "2 Years",
                  level: "Graduate",
                  description: "Advanced computer science program with research opportunities.",
                  price: "$200,000",
                  image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                }
              ].map((course, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-background h-full">
                    <div className="overflow-hidden">
                      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{course.level}</span>
                        <span className="text-sm text-muted-foreground">{course.duration}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{course.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">{course.price}</span>
                        <Button size="sm">Enroll Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-primary-foreground bg-primary hover:bg-primary/90" />
            <CarouselNext className="text-primary-foreground bg-primary hover:bg-primary/90" />
          </Carousel>
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
              <h2 className="text-4xl font-bold mb-4 leading-tight">
                Recent &<br />Upcoming <span className="underline decoration-[6px] underline-offset-8 text-primary">Events</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Stay tuned for exciting upcoming events designed to inspire, engage, and connect our community.
              </p>
              {/* Curve */}
              <svg viewBox="0 0 300 120" className="w-56 h-24 text-primary mb-8" fill="none">
                <path d="M5 115 C60 20, 180 20, 295 75" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Timeline</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A brief history of UIT University from foundation to becoming an independent chartered university.
            </p>
          </div>

          <AceternityTimeline
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
      <section className="relative py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}></div>
        <div className="absolute inset-0 bg-primary/60"></div>

        <div className="relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Play className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Video Tour In Campus</h2>
            <p className="text-lg mb-8">Experience our campus life and facilities through this virtual tour</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span>📞 +92-21-111-978-275</span>
              <span>✉️ info@uitu.edu.pk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Learn from Experienced Instructors</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our faculty members are industry experts and academic leaders committed to your success.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {[
              { name: "Dr. Sarah Wilson", position: "Professor of Computer Science", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
              { name: "Dr. Michael Chen", position: "Professor of Engineering", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
              { name: "Dr. Emily Johnson", position: "Professor of Business", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
              { name: "Dr. David Brown", position: "Professor of Data Science", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
            ].map((instructor, index) => (
              <Card key={index} className="flex-1 bg-background text-center">
                <div className="overflow-hidden">
                  <img src={instructor.image} alt={instructor.name} className="w-full h-64 object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
                  <p className="text-muted-foreground mb-4">{instructor.position}</p>
                  <Button size="sm">View Profile</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Feedback Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Feedback From Students</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear what our students have to say about their experience at UIT University.
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>



      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Latest Insights & Updates</h2>
            <Button>View All</Button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {[
              {
                category: "Education",
                title: "The Importance of STEM Education",
                date: "May 15, 2024",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                category: "Technology",
                title: "Future of Artificial Intelligence",
                date: "May 12, 2024",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                category: "Career",
                title: "Building Your Professional Network",
                date: "May 10, 2024",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              }
            ].map((post, index) => (
              <Card key={index} className="flex-1 bg-background group cursor-pointer overflow-hidden">
                <div className="overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover transition-transform duration-[400ms] group-active:scale-110 group-hover:scale-105" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
                  <h3 className="text-xl font-semibold mb-2 transition-colors duration-[400ms] group-active:text-primary group-hover:text-primary">{post.title}</h3>
                  <div className="text-sm text-muted-foreground mb-4">{post.date}</div>
                  <Button variant="link" className="p-0 h-auto">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}