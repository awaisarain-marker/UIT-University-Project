'use client'

import React from 'react'

const CoursesFromCMS = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-xl font-semibold text-primary mb-2">Computer Science</h3>
        <p className="text-muted-foreground mb-4">
          Learn programming, algorithms, and software development.
        </p>
        <span className="text-sm text-gray-500">4 Years • Bachelor's Degree</span>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-xl font-semibold text-primary mb-2">Business Administration</h3>
        <p className="text-muted-foreground mb-4">
          Master business strategy, management, and entrepreneurship.
        </p>
        <span className="text-sm text-gray-500">4 Years • Bachelor's Degree</span>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-xl font-semibold text-primary mb-2">Engineering</h3>
        <p className="text-muted-foreground mb-4">
          Explore mechanical, electrical, and civil engineering.
        </p>
        <span className="text-sm text-gray-500">4 Years • Bachelor's Degree</span>
      </div>
    </div>
  )
}

export default CoursesFromCMS
