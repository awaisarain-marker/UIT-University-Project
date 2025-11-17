# Supabase Storage Setup Guide

## Overview
Your project is now configured to use Supabase Storage for all media file uploads (images, documents, etc.).

## Setup Steps

### 1. Create Storage Bucket in Supabase Dashboard

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project
3. Navigate to **Storage** in the left sidebar
4. Click **New Bucket**
5. Create a bucket named: `uploads`
6. Make it **Public** (so images can be accessed via URL)
7. Click **Create Bucket**

### 2. Set Storage Policies (Optional but Recommended)

For better security, set up Row Level Security policies:

```sql
-- Allow public read access
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'uploads' );

-- Allow authenticated users to upload
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'uploads' AND auth.role() = 'authenticated' );

-- Allow users to delete their own uploads
CREATE POLICY "Users can delete own uploads"
ON storage.objects FOR DELETE
USING ( bucket_id = 'uploads' AND auth.uid() = owner );
```

### 3. Update Environment Variables

Make sure your `.env.local` has the service role key:

```env
SUPABASE_SERVICE_ROLE_KEY=your_actual_service_role_key_here
```

Get this from: Supabase Dashboard → Settings → API → service_role key

⚠️ **IMPORTANT**: Never commit this key to git! It's already in `.gitignore`.

## Usage

### Basic Upload in a Form

```tsx
'use client'

import { useState } from 'react'
import { ImageUploadField } from '@/components/admin/image-upload-field'

export default function CourseForm() {
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // imageUrl now contains the Supabase public URL
    console.log('Image URL:', imageUrl)
  }

  return (
    <form onSubmit={handleSubmit}>
      <ImageUploadField
        label="Course Image"
        folder="COURSES"
        currentImageUrl={imageUrl}
        onImageChange={setImageUrl}
        required
        maxSizeMB={5}
      />
      <button type="submit">Save Course</button>
    </form>
  )
}
```

### Direct Upload with Custom Logic

```tsx
import { uploadFile, STORAGE_FOLDERS } from '@/lib/supabase-storage'

async function handleFileUpload(file: File) {
  try {
    const result = await uploadFile(file, {
      folder: STORAGE_FOLDERS.COURSES,
      maxSizeMB: 5,
      allowedTypes: ['image/*']
    })
    
    console.log('Uploaded:', result.url)
    // Save result.url to your database
  } catch (error) {
    console.error('Upload failed:', error)
  }
}
```

### Multiple File Upload

```tsx
import { uploadMultipleFiles, STORAGE_FOLDERS } from '@/lib/supabase-storage'

async function handleMultipleUploads(files: File[]) {
  try {
    const results = await uploadMultipleFiles(files, {
      folder: STORAGE_FOLDERS.BLOG,
      maxSizeMB: 3
    })
    
    results.forEach(result => {
      console.log('Uploaded:', result.url)
    })
  } catch (error) {
    console.error('Upload failed:', error)
  }
}
```

### Delete File

```tsx
import { deleteFile } from '@/lib/supabase-storage'

async function handleDelete(filePath: string) {
  try {
    await deleteFile(filePath)
    console.log('File deleted')
  } catch (error) {
    console.error('Delete failed:', error)
  }
}
```

## Available Storage Folders

Pre-configured folders for organizing your uploads:

- `COURSES` - Course images
- `INSTRUCTORS` - Instructor photos
- `EVENTS` - Event images
- `BLOG` - Blog post images
- `TESTIMONIALS` - Testimonial photos
- `FACULTY` - Faculty member photos
- `GENERAL` - General uploads

## File Type Restrictions

Default allowed types:
- Images: JPEG, PNG, WebP, GIF
- Max size: 5MB (configurable)

To allow documents:

```tsx
import { FILE_TYPES } from '@/lib/supabase-storage'

uploadFile(file, {
  allowedTypes: FILE_TYPES.DOCUMENTS,
  maxSizeMB: 10
})
```

## API Route

The upload API route is at `/api/upload` and handles:
- File validation (type, size)
- Unique filename generation
- Server-side upload with service role key
- Public URL generation

## Components

### FileUpload
Low-level component with drag-and-drop support.

### ImageUploadField
High-level component for forms with error handling and preview.

## Troubleshooting

### "Upload failed" error
- Check that the `uploads` bucket exists in Supabase
- Verify `SUPABASE_SERVICE_ROLE_KEY` is set correctly
- Check bucket is set to public

### "File type not allowed"
- Verify the file is an image
- Check `allowedTypes` in upload options

### "File too large"
- Default max is 5MB
- Increase with `maxSizeMB` option

### Images not displaying
- Verify bucket is public
- Check the URL in browser directly
- Ensure RLS policies allow public read access

## Next Steps

1. Create the `uploads` bucket in Supabase Dashboard
2. Add your service role key to `.env.local`
3. Test upload with the example form
4. Update your existing forms to use `ImageUploadField`

## Example: Update Course Form

```tsx
// In your course form component
import { ImageUploadField } from '@/components/admin/image-upload-field'

// Replace your old image input with:
<ImageUploadField
  label="Course Image"
  folder="COURSES"
  currentImageUrl={formData.image_url}
  onImageChange={(url) => setFormData({ ...formData, image_url: url })}
  required
/>
```
