import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Play, Star, ArrowRight, GraduationCap, Building, Users } from 'lucide-react';

export default function Home() {
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
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-foreground/80">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-foreground/80">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-foreground/80">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-foreground/80">
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

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}></div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 ma-bg-gradient ma-65-width">
              <div className="text-white flex-1">
                <h1 className="text-5xl md:text-6xl font-medium mb-6 heading-large">
                  Transform Your Future at UIT University
                </h1>
                <p className="text-xl md:text-2xl mb-8">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-primary mb-4 heading-large">An Introduction To Our University</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              UIT University is committed to providing world-class education and fostering innovation in technology and management. 
              We prepare students to become leaders in their chosen fields.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                     alt="University Building" className="w-full h-48 object-cover" />
              </div>
              <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                     alt="Students" className="w-full h-48 object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-4">Excellence in Education</h3>
              <p className="text-muted-foreground mb-6">
                Our university provides a comprehensive learning environment with state-of-the-art facilities, 
                experienced faculty, and innovative programs designed to meet the demands of the modern world.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <Card className="flex-1 bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold mb-2">10K</div>
                <div className="text-lg">Students</div>
              </CardContent>
            </Card>
            <Card className="flex-1 bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold mb-2">300</div>
                <div className="text-lg">Courses</div>
              </CardContent>
            </Card>
            <Card className="flex-1 bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold mb-2">48K</div>
                <div className="text-lg">Awards</div>
              </CardContent>
            </Card>
            <Card className="flex-1 bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold mb-2">2K</div>
                <div className="text-lg">Instructors</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reasons to Choose Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">The Reasons to Choose UIT University</h2>
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
                <h3 className="text-2xl font-bold text-foreground mb-4">Best Faculty</h3>
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
                <h3 className="text-2xl font-bold text-foreground mb-4">Modern Facilities</h3>
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
                <h3 className="text-2xl font-bold text-foreground mb-4">Industry Connections</h3>
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
          
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-8 flex-wrap">
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
              <Card key={index} className="flex-1 min-w-[300px] max-w-[400px] bg-background">
                <div className="overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{course.level}</span>
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{course.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    <Button size="sm">Enroll Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-primary mb-4">Recent & Upcoming Events</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stay updated with our latest events, workshops, and academic activities.
              </p>
              <Button>View All Events</Button>
            </div>
            
            <div className="flex-1 space-y-6">
              {[
                {
                  title: "Creating Future Through Technology",
                  date: "20 May, 2024 | 10:00 AM",
                  location: "University Auditorium",
                  image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                  title: "AI and Machine Learning Workshop",
                  date: "25 May, 2024 | 2:00 PM",
                  location: "Computer Lab 1",
                  image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                }
              ].map((event, index) => (
                <Card key={index} className="bg-background">
                  <div className="flex">
                    <img src={event.image} alt={event.title} className="w-32 h-24 object-cover rounded-l-lg" />
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-1">{event.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{event.date}</p>
                      <p className="text-sm text-muted-foreground">{event.location}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Departments Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Popular Departments</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse range of academic departments offering specialized programs and research opportunities.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center">
            {[
              { name: "Economics", icon: "📊", description: "Economic Analysis" },
              { name: "Computer Science", icon: "💻", description: "Technology & Innovation" },
              { name: "Cybersecurity", icon: "🔒", description: "Digital Security" },
              { name: "Psychology", icon: "🧠", description: "Human Behavior" },
              { name: "English", icon: "📚", description: "Literature & Language" },
              { name: "Engineering", icon: "⚙️", description: "Technical Solutions" }
            ].map((dept, index) => (
              <Card key={index} className="text-center flex-1 min-w-[150px] max-w-[200px]">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{dept.icon}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
            <h2 className="text-4xl font-bold text-primary mb-4">Learn from Experienced Instructors</h2>
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
                  <h3 className="text-xl font-semibold text-foreground mb-2">{instructor.name}</h3>
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
            <h2 className="text-4xl font-bold text-primary mb-4">Feedback From Students</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear what our students have to say about their experience at UIT University.
            </p>
          </div>
          
          <Card className="bg-background p-12 text-center">
            <div className="text-6xl text-primary mb-6">"</div>
            <blockquote className="text-xl text-muted-foreground mb-8 italic">
              "UIT University has provided me with an exceptional learning environment. The faculty is outstanding, 
              and the facilities are world-class. I've gained not just knowledge but also the confidence to pursue my dreams."
            </blockquote>
            <div className="flex items-center justify-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-lg font-semibold text-foreground mb-2">Sarah Ahmed</div>
            <div className="text-muted-foreground">BS Computer Science, Class of 2023</div>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Flexible Pricing Options</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that best fits your educational goals and budget.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {[
              {
                name: "Basic Plan",
                price: "$3K",
                period: "per month",
                features: ["Access to core courses", "Basic support", "Certificate of completion", "Online resources"]
              },
              {
                name: "Standard Plan",
                price: "$5K",
                period: "per month",
                features: ["All Basic features", "Advanced courses", "Priority support", "Career guidance", "Internship opportunities"],
                popular: true
              },
              {
                name: "Premium Plan",
                price: "$8K",
                period: "per month",
                features: ["All Standard features", "One-on-one mentoring", "Research opportunities", "Industry connections", "Job placement assistance"]
              }
            ].map((plan, index) => (
              <Card key={index} className={`flex-1 ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 rounded-t-lg -mt-8 -mx-8 mb-8">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                    <div className="text-muted-foreground">{plan.period}</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-5 h-5 text-green-500 mr-3">✓</div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-muted hover:bg-muted/80'}`}>
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Form Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}></div>
        <div className="absolute inset-0 bg-primary/80"></div>
        
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Admission Form</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input type="text" className="w-full border border-input rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input type="text" className="w-full border border-input rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 mt-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input type="email" className="w-full border border-input rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input type="tel" className="w-full border border-input rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 mt-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-foreground mb-2">Program</label>
                    <select className="w-full border border-input rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring">
                      <option>Select Program</option>
                      <option>BS Computer Science</option>
                      <option>BS Software Engineering</option>
                      <option>BE Electrical Engineering</option>
                      <option>BBA Business Administration</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-foreground mb-2">Level</label>
                    <select className="w-full border border-input rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring">
                      <option>Select Level</option>
                      <option>Undergraduate</option>
                      <option>Graduate</option>
                      <option>Short Course</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full">Submit Application</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-primary">Latest Insights & Updates</h2>
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
              <Card key={index} className="flex-1 bg-background">
                <div className="overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{post.title}</h3>
                  <div className="text-sm text-muted-foreground mb-4">{post.date}</div>
                  <Button variant="link" className="p-0 h-auto">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted text-muted-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">U</span>
                </div>
                <span className="ml-3 text-2xl font-bold text-foreground">UIT University</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Let's Get Moving Today</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of students who have chosen UIT University for their education. 
                Start your journey towards academic excellence and professional success.
              </p>
            </div>
            
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>ST-13, Block 7, Gulshan-e-Iqbal</p>
                <p>Abul Hasan Isphahani Road</p>
                <p>Karachi – 75300</p>
                <p>📞 +92-21-111-978-275</p>
                <p>✉️ info@uitu.edu.pk</p>
              </div>
            </div>
            
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">About</Link>
                <Link href="/courses" className="block text-muted-foreground hover:text-primary transition-colors">Academics</Link>
                <Link href="/events" className="block text-muted-foreground hover:text-primary transition-colors">Events</Link>
                <Link href="/blog" className="block text-muted-foreground hover:text-primary transition-colors">Blog</Link>
                <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">U</span>
                </div>
                <span className="ml-2 text-lg font-bold">UIT University</span>
              </div>
              <div className="flex space-x-6">
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">Academics</Link>
                <Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </div>
            </div>
            <div className="mt-4 text-center text-muted-foreground text-sm">
              © 2024 UIT University. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}