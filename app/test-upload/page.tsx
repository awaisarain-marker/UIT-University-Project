'use client'

import { useState } from 'react'
import { ImageUploadField } from '@/components/admin/image-upload-field'

export default function TestUploadPage() {
  const [courseImage, setCourseImage] = useState('')
  const [instructorImage, setInstructorImage] = useState('')
  const [eventImage, setEventImage] = useState('')

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-2">Supabase Storage Test</h1>
          <p className="text-gray-600 mb-8">
            Test your image upload functionality with different folders
          </p>

          <div className="space-y-8">
            {/* Course Image Upload */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Course Image</h2>
              <ImageUploadField
                label="Upload Course Image"
                folder="COURSES"
                currentImageUrl={courseImage}
                onImageChange={setCourseImage}
                maxSizeMB={5}
              />
              {courseImage && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-800 mb-2">
                    ✓ Upload successful!
                  </p>
                  <p className="text-xs text-green-700 break-all">
                    URL: {courseImage}
                  </p>
                </div>
              )}
            </div>

            {/* Instructor Image Upload */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Instructor Photo</h2>
              <ImageUploadField
                label="Upload Instructor Photo"
                folder="INSTRUCTORS"
                currentImageUrl={instructorImage}
                onImageChange={setInstructorImage}
                maxSizeMB={3}
              />
              {instructorImage && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-800 mb-2">
                    ✓ Upload successful!
                  </p>
                  <p className="text-xs text-green-700 break-all">
                    URL: {instructorImage}
                  </p>
                </div>
              )}
            </div>

            {/* Event Image Upload */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Event Image</h2>
              <ImageUploadField
                label="Upload Event Image"
                folder="EVENTS"
                currentImageUrl={eventImage}
                onImageChange={setEventImage}
                maxSizeMB={5}
              />
              {eventImage && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-800 mb-2">
                    ✓ Upload successful!
                  </p>
                  <p className="text-xs text-green-700 break-all">
                    URL: {eventImage}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">
              Setup Instructions:
            </h3>
            <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
              <li>Go to your Supabase Dashboard</li>
              <li>Navigate to Storage section</li>
              <li>Create a new bucket named "uploads"</li>
              <li>Make it public</li>
              <li>Add your SUPABASE_SERVICE_ROLE_KEY to .env.local</li>
              <li>Restart your dev server</li>
              <li>Try uploading an image above</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
