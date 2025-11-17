import { createClient } from './supabase-client'

export interface UploadOptions {
  folder?: string
  maxSizeMB?: number
  allowedTypes?: string[]
}

export interface UploadResult {
  url: string
  path: string
  filename: string
}

/**
 * Upload a file to Supabase Storage via API route
 * Uses the /api/upload endpoint which handles server-side uploads with service role key
 */
export async function uploadFile(
  file: File,
  options: UploadOptions = {}
): Promise<UploadResult> {
  const { folder = 'uploads', maxSizeMB = 5, allowedTypes = ['image/*'] } = options

  // Validate file type
  const isAllowed = allowedTypes.some(type => {
    if (type.endsWith('/*')) {
      const prefix = type.split('/')[0]
      return file.type.startsWith(prefix + '/')
    }
    return file.type === type
  })

  if (!isAllowed) {
    throw new Error(`File type ${file.type} is not allowed. Allowed types: ${allowedTypes.join(', ')}`)
  }

  // Validate file size
  const maxSize = maxSizeMB * 1024 * 1024
  if (file.size > maxSize) {
    throw new Error(`File size must be less than ${maxSizeMB}MB`)
  }

  // Upload via API route
  const formData = new FormData()
  formData.append('file', file)
  formData.append('folder', folder)

  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Upload failed')
  }

  const data = await response.json()
  return {
    url: data.url,
    path: `${folder}/${data.filename}`,
    filename: data.filename,
  }
}

/**
 * Delete a file from Supabase Storage
 */
export async function deleteFile(path: string): Promise<void> {
  const supabase = createClient()
  
  const { error } = await supabase.storage
    .from('uploads')
    .remove([path])

  if (error) {
    throw new Error(`Failed to delete file: ${error.message}`)
  }
}

/**
 * Get public URL for a file
 */
export function getPublicUrl(path: string): string {
  const supabase = createClient()
  
  const { data } = supabase.storage
    .from('uploads')
    .getPublicUrl(path)

  return data.publicUrl
}

/**
 * Upload multiple files
 */
export async function uploadMultipleFiles(
  files: File[],
  options: UploadOptions = {}
): Promise<UploadResult[]> {
  const uploadPromises = files.map(file => uploadFile(file, options))
  return Promise.all(uploadPromises)
}

/**
 * Storage folders for different content types
 */
export const STORAGE_FOLDERS = {
  COURSES: 'courses',
  INSTRUCTORS: 'instructors',
  EVENTS: 'events',
  BLOG: 'blog',
  TESTIMONIALS: 'testimonials',
  FACULTY: 'faculty',
  GENERAL: 'uploads',
} as const

/**
 * Allowed file types
 */
export const FILE_TYPES = {
  IMAGES: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  DOCUMENTS: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  ALL_MEDIA: ['image/*', 'video/*'],
} as const
