'use client'

import React from 'react'

const TestimonialsFromCMS = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
            JD
          </div>
          <div className="ml-4">
            <h4 className="font-semibold">John Doe</h4>
            <p className="text-sm text-muted-foreground">Computer Science, Class of 2023</p>
          </div>
        </div>
        <p className="text-muted-foreground italic">
          "The university provided me with excellent opportunities and a supportive learning environment. 
          I'm grateful for the experience."
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold">
            JS
          </div>
          <div className="ml-4">
            <h4 className="font-semibold">Jane Smith</h4>
            <p className="text-sm text-muted-foreground">Business Administration, Class of 2024</p>
          </div>
        </div>
        <p className="text-muted-foreground italic">
          "Amazing faculty and great networking opportunities. The business program exceeded my expectations."
        </p>
      </div>
    </div>
  )
}

export default TestimonialsFromCMS
