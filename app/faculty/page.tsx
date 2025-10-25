import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface FacultyMember {
  id: string;
  name: string;
  position: string;
  department: string;
  qualifications: string;
  specialization: string[];
  experience: string;
  image: string;
  bio: string;
}

const faculty: FacultyMember[] = [
  {
    id: '1',
    name: 'Dr. Vali Uddin',
    position: 'Vice Chancellor',
    department: 'Administration',
    qualifications: 'PhD in Engineering',
    specialization: ['Leadership', 'Strategic Planning', 'Academic Administration'],
    experience: '20+ years',
    image: '/api/placeholder/300/300',
    bio: 'Dr. Vali Uddin brings extensive experience in academic leadership and strategic planning to UIT University.'
  },
  {
    id: '2',
    name: 'Prof. Dr. Abid Karim',
    position: 'Professor & Dean Faculty of Engineering & Technology',
    department: 'Engineering',
    qualifications: 'PhD in Electrical Engineering',
    specialization: ['Power Systems', 'Control Systems', 'Renewable Energy'],
    experience: '25+ years',
    image: '/api/placeholder/300/300',
    bio: 'Professor Abid Karim is a distinguished academic with extensive research experience in power systems and renewable energy technologies.'
  },
  {
    id: '3',
    name: 'Dr. Muhammad Wasim',
    position: 'Professor & Chairperson Computer Science',
    department: 'Computer Science',
    qualifications: 'PhD in Computer Science',
    specialization: ['Machine Learning', 'Data Science', 'Software Engineering'],
    experience: '18+ years',
    image: '/api/placeholder/300/300',
    bio: 'Dr. Muhammad Wasim is a leading researcher in machine learning and data science with numerous publications in top-tier journals.'
  },
  {
    id: '4',
    name: 'Dr. Kashif Mehmood',
    position: 'Provost',
    department: 'Administration',
    qualifications: 'PhD in Management Sciences',
    specialization: ['Academic Administration', 'Quality Assurance', 'Student Affairs'],
    experience: '15+ years',
    image: '/api/placeholder/300/300',
    bio: 'Dr. Kashif Mehmood oversees academic operations and ensures the highest standards of education at UIT University.'
  },
  {
    id: '5',
    name: 'Engr. Dr. Syed Talha Ahsan',
    position: 'Professor & Chairperson Electrical Engineering',
    department: 'Electrical Engineering',
    qualifications: 'PhD in Electrical Engineering',
    specialization: ['Electronics', 'Telecommunications', 'Signal Processing'],
    experience: '22+ years',
    image: '/api/placeholder/300/300',
    bio: 'Dr. Syed Talha Ahsan is an expert in electronics and telecommunications with significant contributions to the field.'
  },
  {
    id: '6',
    name: 'Dr. Sarah Ahmed',
    position: 'Associate Professor',
    department: 'Computer Science',
    qualifications: 'PhD in Artificial Intelligence',
    specialization: ['AI', 'Machine Learning', 'Computer Vision'],
    experience: '12+ years',
    image: '/api/placeholder/300/300',
    bio: 'Dr. Sarah Ahmed is a leading researcher in artificial intelligence and machine learning with expertise in computer vision applications.'
  },
  {
    id: '7',
    name: 'Dr. Ali Hassan',
    position: 'Associate Professor',
    department: 'Management Sciences',
    qualifications: 'PhD in Business Administration',
    specialization: ['Strategic Management', 'Marketing', 'Entrepreneurship'],
    experience: '16+ years',
    image: '/api/placeholder/300/300',
    bio: 'Dr. Ali Hassan brings extensive industry experience to his teaching and research in business administration and strategic management.'
  },
  {
    id: '8',
    name: 'Dr. Fatima Khan',
    position: 'Assistant Professor',
    department: 'Data Science',
    qualifications: 'PhD in Statistics',
    specialization: ['Data Analytics', 'Statistical Modeling', 'Big Data'],
    experience: '8+ years',
    image: '/api/placeholder/300/300',
    bio: 'Dr. Fatima Khan is an expert in data science and statistical modeling with a focus on big data applications in business.'
  }
];

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Meet our distinguished faculty members who are dedicated to providing excellence in education and research.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {faculty.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl font-bold mb-2">{member.name.split(' ').map(n => n[0]).join('')}</div>
                    <div className="text-sm opacity-90">{member.department}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.qualifications}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Specialization:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specialization.map((spec, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">Experience:</span> {member.experience}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                  
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Statistics */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Faculty Excellence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our faculty members are committed to academic excellence, research, and student success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Faculty Members</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600">PhD Qualified</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600">Research Publications</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Years Average Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Academic Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in joining our faculty? We welcome applications from qualified professionals 
            who are passionate about education and research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/careers" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              View Openings
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
