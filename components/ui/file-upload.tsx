'use client'

import { useState, useRef, ChangeEvent } from 'react'
import { uploadFile, UploadOptions, UploadResult } from '@/lib/supabase-storage'
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react'

interface FileUploadProps {
  onUploadComplete: (result: UploadResult) => void
  onUploadError?: (error: Error) => void
  options?: UploadOptions
  currentImageUrl?: string
  className?: string
}

export function FileUpload({
  onUploadComplete,
  onUploadError,
  options = {},
  currentImageUrl,
  className = '',
}: FileUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(currentImageUrl || null)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFile = async (file: File) => {
    try {
      setUploading(true)

      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)

      // Upload file
      const result = await uploadFile(file, options)
      onUploadComplete(result)
    } catch (error) {
      console.error('Upload error:', error)
      setPreview(null)
      if (onUploadError) {
        onUploadError(error as Error)
      }
    } finally {
      setUploading(false)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFile(file)
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const file = e.dataTransfer.files?.[0]
    if (file) {
      handleFile(file)
    }
  }

  const clearPreview = () => {
    setPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className={className}>
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleChange}
        accept="image/*"
        className="hidden"
        disabled={uploading}
      />

      {preview ? (
        <div className="relative">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-48 object-cover rounded-lg"
          />
          {!uploading && (
            <button
              type="button"
              onClick={clearPreview}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {uploading && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
          )}
        </div>
      ) : (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`
            border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
            transition-colors duration-200
            ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}
            ${uploading ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          {uploading ? (
            <Loader2 className="w-12 h-12 mx-auto text-gray-400 animate-spin" />
          ) : (
            <>
              <ImageIcon className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <p className="text-sm text-gray-600 mb-2">
                Drag and drop an image here, or click to select
              </p>
              <p className="text-xs text-gray-500">
                Max size: {options.maxSizeMB || 5}MB
              </p>
            </>
          )}
        </div>
      )}
    </div>
  )
}
