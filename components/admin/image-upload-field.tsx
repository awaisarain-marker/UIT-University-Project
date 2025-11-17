'use client'

import { useState } from 'react'
import { FileUpload } from '@/components/ui/file-upload'
import { STORAGE_FOLDERS, UploadResult } from '@/lib/supabase-storage'
import { AlertCircle, CheckCircle } from 'lucide-react'

interface ImageUploadFieldProps {
  label: string
  folder?: keyof typeof STORAGE_FOLDERS
  currentImageUrl?: string
  onImageChange: (url: string) => void
  required?: boolean
  maxSizeMB?: number
}

export function ImageUploadField({
  label,
  folder = 'GENERAL',
  currentImageUrl,
  onImageChange,
  required = false,
  maxSizeMB = 5,
}: ImageUploadFieldProps) {
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleUploadComplete = (result: UploadResult) => {
    setError(null)
    setSuccess(true)
    onImageChange(result.url)
    
    // Clear success message after 3 seconds
    setTimeout(() => setSuccess(false), 3000)
  }

  const handleUploadError = (error: Error) => {
    setError(error.message)
    setSuccess(false)
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <FileUpload
        onUploadComplete={handleUploadComplete}
        onUploadError={handleUploadError}
        currentImageUrl={currentImageUrl}
        options={{
          folder: STORAGE_FOLDERS[folder],
          maxSizeMB,
          allowedTypes: ['image/*'],
        }}
      />

      {error && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-3 rounded-lg">
          <CheckCircle className="w-4 h-4 flex-shrink-0" />
          <span>Image uploaded successfully!</span>
        </div>
      )}

      {currentImageUrl && !error && (
        <p className="text-xs text-gray-500">
          Current image URL: {currentImageUrl.substring(0, 50)}...
        </p>
      )}
    </div>
  )
}
