import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Award, 
  BookOpen, 
  Target, 
  Lightbulb,
  TrendingUp,
  Globe,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

export default function MERLPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                Research Excellence
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Management & Economics Research Lab
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Advancing knowledge through innovative research in management sciences, economics, 
                and business analytics to drive sustainable economic growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Explore Research
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Join Our Team
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* Placeholder for MERL hero image */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="bg-white/20 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Innovation Hub</h3>
                <p className="text-lg opacity-90">
                  Driving research excellence in management and economics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About MERL Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">About MERL</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  The Management & Economics Research Lab (MERL) at UIT University serves as a premier 
                  research facility dedicated to advancing knowledge in management sciences, economics, 
                  and business analytics.
                </p>
                <p>
                  Our multidisciplinary approach combines theoretical frameworks with practical applications, 
                  fostering innovation that addresses real-world challenges in business and economic development.
                </p>
                <p>
                  MERL collaborates with industry partners, government agencies, and international research 
                  institutions to conduct cutting-edge research that contributes to sustainable economic growth 
                  and organizational excellence.
                </p>
              </div>
              <div className="flex items-center gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Research Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Researchers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Placeholder for MERL about image */}
              <div className="bg-gradient-to-br from-muted to-muted/50 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <BookOpen className="w-24 h-24 mx-auto mb-4" />
                  <p className="text-lg">MERL Research Facility</p>
                  <p className="text-sm">Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Research Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our research spans multiple disciplines, addressing contemporary challenges in management and economics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Business Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced data analytics and business intelligence solutions for strategic decision-making 
                  and performance optimization.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Predictive Analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Market Research
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Performance Metrics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Economic Development</h3>
                <p className="text-muted-foreground mb-4">
                  Research on sustainable economic growth, policy analysis, and development strategies 
                  for emerging markets.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Policy Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Market Dynamics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Growth Strategies
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Organizational Behavior</h3>
                <p className="text-muted-foreground mb-4">
                  Studies on leadership, team dynamics, organizational culture, and human resource 
                  management practices.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Leadership Studies
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Team Dynamics
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    HR Management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Strategic Management</h3>
                <p className="text-muted-foreground mb-4">
                  Research on strategic planning, competitive analysis, and business model innovation 
                  for sustainable growth.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Strategic Planning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Competitive Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Innovation Management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Financial Economics</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced research in financial markets, investment strategies, and economic modeling 
                  for financial institutions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Market Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Risk Management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Investment Strategies
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Innovation & Entrepreneurship</h3>
                <p className="text-muted-foreground mb-4">
                  Studies on innovation processes, startup ecosystems, and entrepreneurial behavior 
                  in emerging markets.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Startup Ecosystems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Innovation Processes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Business Incubation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Research Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet our distinguished researchers and faculty members driving innovation in management and economics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Ahmed Hassan",
                position: "Director, MERL",
                specialization: "Strategic Management & Business Analytics",
                education: "Ph.D. in Management Sciences"
              },
              {
                name: "Dr. Sarah Khan",
                position: "Senior Research Fellow",
                specialization: "Economic Development & Policy Analysis",
                education: "Ph.D. in Economics"
              },
              {
                name: "Dr. Muhammad Ali",
                position: "Research Associate",
                specialization: "Organizational Behavior & HR Management",
                education: "Ph.D. in Organizational Psychology"
              },
              {
                name: "Dr. Fatima Sheikh",
                position: "Research Fellow",
                specialization: "Financial Economics & Investment Analysis",
                education: "Ph.D. in Finance"
              },
              {
                name: "Dr. Usman Malik",
                position: "Research Associate",
                specialization: "Innovation & Entrepreneurship",
                education: "Ph.D. in Business Administration"
              },
              {
                name: "Dr. Ayesha Rehman",
                position: "Research Fellow",
                specialization: "Business Analytics & Data Science",
                education: "Ph.D. in Information Systems"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  {/* Placeholder for team member photo */}
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground mb-3">{member.specialization}</p>
                  <Badge variant="secondary" className="text-xs">{member.education}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Current Research Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our ongoing research initiatives that are shaping the future of management and economics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Digital Transformation in SMEs",
                status: "Ongoing",
                duration: "2024-2026",
                funding: "HEC Research Grant",
                description: "Investigating the impact of digital transformation on small and medium enterprises in Pakistan, focusing on adoption barriers and success factors."
              },
              {
                title: "Sustainable Business Models",
                status: "Ongoing", 
                duration: "2023-2025",
                funding: "Industry Partnership",
                description: "Developing frameworks for sustainable business models that balance profitability with environmental and social responsibility."
              },
              {
                title: "Economic Impact of Fintech",
                status: "Ongoing",
                duration: "2024-2025",
                funding: "Government Grant",
                description: "Analyzing the economic impact of financial technology adoption on traditional banking and financial inclusion in emerging markets."
              },
              {
                title: "Leadership in Crisis Management",
                status: "Completed",
                duration: "2022-2024",
                funding: "University Research Fund",
                description: "Examining leadership strategies and organizational resilience during crisis situations, with insights from the COVID-19 pandemic."
              }
            ].map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={project.status === 'Ongoing' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-medium">Funding: {project.funding}</span>
                    <Button variant="link" className="p-0 h-auto">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Publications & Impact</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  MERL researchers have published extensively in top-tier international journals, 
                  contributing to the global body of knowledge in management and economics.
                </p>
                <p>
                  Our research has been cited over 500 times and has influenced policy decisions 
                  at both national and international levels.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Journal Publications</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Citations</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Conference Papers</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Policy Reports</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Recent Publications</h3>
              {[
                {
                  title: "Digital Transformation and SME Performance: Evidence from Pakistan",
                  journal: "Journal of Business Research",
                  year: "2024",
                  authors: "Hassan, A., Khan, S."
                },
                {
                  title: "Sustainable Business Models in Emerging Markets",
                  journal: "Strategic Management Journal",
                  year: "2024",
                  authors: "Sheikh, F., Ali, M."
                },
                {
                  title: "Fintech Adoption and Financial Inclusion",
                  journal: "Economic Development Quarterly",
                  year: "2023",
                  authors: "Malik, U., Rehman, A."
                }
              ].map((publication, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">{publication.title}</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      <span className="font-medium">{publication.journal}</span> ({publication.year})
                    </p>
                    <p className="text-sm text-muted-foreground">Authors: {publication.authors}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Collaboration */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Collaborate with MERL</h2>
              <p className="text-xl mb-8 opacity-90">
                Join us in advancing research excellence. We welcome collaborations with industry partners, 
                academic institutions, and research organizations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Research Partnerships</h3>
                    <p className="opacity-90">
                      Collaborate on joint research projects and share expertise across disciplines.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Student Research</h3>
                    <p className="opacity-90">
                      Opportunities for graduate students to participate in cutting-edge research projects.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Consulting Services</h3>
                    <p className="opacity-90">
                      Expert consulting services for organizations seeking research-based solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="opacity-90">MERL, UIT University, Karachi, Pakistan</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="opacity-90">+92-21-111-978-275</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="opacity-90">merl@uitu.edu.pk</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="w-full bg-white text-primary hover:bg-white/90">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}