'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase-client'

interface Instructor {
  id: string
  full_name: string
  specialization: string
  image_url: string
  bio: string
}

export default function FacultySection() {
  const [faculty, setFaculty] = useState<Instructor[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    loadFaculty()
  }, [])

  const loadFaculty = async () => {
    const { data } = await supabase
      .from('instructors')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(4)
    
    if (data) {
      setFaculty(data)
    }
    setLoading(false)
  }

  // Static faculty data for fallback
  const staticFaculty = [
    { 
      id: '1',
      full_name: "Dr. Sarah Wilson", 
      specialization: "Professor of Computer Science", 
      image_url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: ""
    },
    { 
      id: '2',
      full_name: "Dr. Michael Chen", 
      specialization: "Professor of Engineering", 
      image_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: ""
    },
    { 
      id: '3',
      full_name: "Dr. Emily Johnson", 
      specialization: "Professor of Business", 
      image_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: ""
    },
    { 
      id: '4',
      full_name: "Dr. David Brown", 
      specialization: "Professor of Data Science", 
      image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      bio: ""
    }
  ]

  const displayFaculty = faculty.length > 0 ? faculty : staticFaculty

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
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-muted-foreground">Loading faculty...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayFaculty.map((instructor) => (
              <Card key={instructor.id} className="bg-background text-center group hover:shadow-lg transition-shadow">
                <div className="overflow-hidden">
                  <img 
                    src={instructor.image_url || 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'} 
                    alt={instructor.full_name} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{instructor.full_name}</h3>
                  <p className="text-muted-foreground mb-4">{instructor.specialization || 'Faculty Member'}</p>
                  <Button size="sm" variant="outline" className="w-full">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}