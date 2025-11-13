'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function FacultySection() {

  // Static faculty data for fallback
  const staticFaculty = [
    { 
      name: "Dr. Sarah Wilson", 
      position: "Professor of Computer Science", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
    },
    { 
      name: "Dr. Michael Chen", 
      position: "Professor of Engineering", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
    },
    { 
      name: "Dr. Emily Johnson", 
      position: "Professor of Business", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
    },
    { 
      name: "Dr. David Brown", 
      position: "Professor of Data Science", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
    }
  ]

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-large font-semibold mb-4">
            Meet Our <span className="ma-hightlighted-text">Faculty</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Our faculty members are industry experts and academic leaders committed to your success.
          </p>
        </div>

        {/* Faculty Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staticFaculty.map((instructor, index) => (
            <Card key={index} className="bg-background text-center group hover:shadow-lg transition-shadow">
              <div className="overflow-hidden">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
                <p className="text-muted-foreground mb-4">{instructor.position}</p>
                <Button size="sm" variant="outline" className="w-full">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}