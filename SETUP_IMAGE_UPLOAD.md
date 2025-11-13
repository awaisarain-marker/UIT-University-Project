# Image Upload Setup Guide

## 🎯 Overview

All admin forms now have drag-and-drop image upload functionality! Users can:
- Drag and drop images
- Click to browse and select images
- Preview uploaded images
- Remove or change images
- Fallback to manual URL input

---

## 🗄️ Supabase Storage Setup

### Step 1: Create Storage Bucket

1. Go to your **Supabase Dashboard**
2. Navigate to **Storage** in the left sidebar
3. Click **New bucket**
4. Create a bucket with these settings:
   - **Name**: `images`
   - **Public bucket**: ✅ Yes (checked)
   - **File size limit**: 5MB (or your preference)
   - **Allowed MIME types**: `image/*`

### Step 2: Set Storage Policies

Go to **Storage** → **Policies** → Click on your `images` bucket

**Add these policies:**

#### Policy 1: Public Read Access
```sql
-- Allow anyone to view images
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'images');
```

#### Policy 2: Authenticated Upload
```sql
-- Allow authenticated users to upload
CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'images' 
  AND auth.role() = 'authenticated'
);
```

#### Policy 3: Authenticated Update
```sql
-- Allow authenticated users to update their uploads
CREATE POLICY "Authenticated users can update images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'images' 
  AND auth.role() = 'authenticated'
);
```

#### Policy 4: Authenticated Delete
```sql
-- Allow authenticated users to delete images
CREATE POLICY "Authenticated users can delete images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'images' 
  AND auth.role() = 'authenticated'
);
```

---

## 📁 Folder Structure

Images are automatically organized by type:
- `/faculty/` - Faculty member photos
- `/courses/` - Course images
- `/events/` - Event images
- `/blog/` - Blog post featured images
- `/uploads/` - General uploads

---

## ✨ Features

### Drag and Drop
- Drag image files directly onto the upload area
- Visual feedback when dragging over the drop zone
- Automatic upload on drop

### Click to Upload
- Click anywhere on the upload area
- Opens file browser
- Select image file to upload

### Image Preview
- Shows uploaded image immediately
- Hover to see Change/Remove buttons
- Displays image URL below preview

### Validation
- Only image files accepted (PNG, JPG, GIF, etc.)
- Maximum file size: 5MB
- User-friendly error messages

### Fallback Option
- Manual URL input available
- Expand "Or enter image URL manually"
- Paste external image URLs

---

## 🎨 Usage in Forms

The `ImageUpload` component is now used in:

1. **Faculty Form** (`/admin/faculty/new`)
   - Label: "Faculty Photo"
   - Folder: `faculty`

2. **Courses Form** (`/admin/courses/new`)
   - Label: "Course Image"
   - Folder: `courses`

3. **Events Form** (`/admin/events/new`)
   - Label: "Event Image"
   - Folder: `events`

4. **Blog Form** (`/admin/blog/new`)
   - Label: "Featured Image"
   - Folder: `blog`

---

## 🔧 Component Props

```typescript
interface ImageUploadProps {
  value: string              // Current image URL
  onChange: (url: string) => void  // Callback when image changes
  bucket?: string            // Storage bucket name (default: 'images')
  folder?: string            // Folder within bucket (default: 'uploads')
  label?: string             // Field label (default: 'Image')
  required?: boolean         // Is field required? (default: false)
}
```

### Example Usage
```tsx
<ImageUpload
  label="Profile Photo"
  value={formData.image_url}
  onChange={(url) => setFormData({ ...formData, image_url: url })}
  folder="profiles"
  required={true}
/>
```

---

## 🚀 How It Works

1. **User selects/drops image**
2. **Validation checks** (file type, size)
3. **Upload to Supabase Storage** with unique filename
4. **Get public URL** from storage
5. **Update form field** with URL
6. **Display preview** to user

---

## 🐛 Troubleshooting

### "Error uploading file: new row violates row-level security policy"
- Make sure you created the storage policies (Step 2)
- Verify user is authenticated
- Check bucket is set to public

### "Bucket not found"
- Create the `images` bucket in Supabase Storage
- Make sure it's set to public
- Check bucket name matches in code

### Images not displaying
- Verify bucket is public
- Check image URL is correct
- Ensure RLS policies allow SELECT

### Upload fails silently
- Check browser console for errors
- Verify file size is under 5MB
- Ensure file is an image type
- Check Supabase Storage logs

### "Failed to fetch" error
- Check Supabase project URL is correct
- Verify anon key is set in environment variables
- Check network connection

---

## 📊 File Naming Convention

Uploaded files are automatically named:
```
{folder}/{timestamp}-{random}.{extension}

Examples:
- faculty/1699876543210-abc123.jpg
- courses/1699876543211-def456.png
- events/1699876543212-ghi789.gif
```

This ensures:
- No filename conflicts
- Easy to identify upload time
- Organized by content type

---

## 🎯 Benefits

1. **Better UX**: Drag-and-drop is intuitive and fast
2. **Automatic Organization**: Files sorted into folders
3. **Validation**: Prevents invalid uploads
4. **Preview**: Users see images before saving
5. **Fallback**: Manual URL input still available
6. **Consistent**: Same component across all forms

---

## 🔐 Security

- Only authenticated users can upload
- File type validation (images only)
- File size limits (5MB default)
- Unique filenames prevent overwrites
- Public read access for display
- RLS policies protect storage

---

## 📝 Next Steps

1. ✅ Create `images` bucket in Supabase
2. ✅ Set up storage policies
3. ✅ Test upload in each form
4. ✅ Verify images display correctly
5. Optional: Adjust file size limits
6. Optional: Add image optimization
7. Optional: Add image cropping

---

## 💡 Tips

- **Optimize images** before upload for better performance
- **Use descriptive filenames** when uploading manually
- **Test with different image formats** (PNG, JPG, GIF)
- **Check mobile upload** works correctly
- **Monitor storage usage** in Supabase dashboard

---

## 🎨 Customization

To change upload settings, edit `components/admin/ImageUpload.tsx`:

```typescript
// Change max file size (currently 5MB)
if (file.size > 5 * 1024 * 1024) {

// Change accepted file types
if (!file.type.startsWith('image/')) {

// Change bucket name
bucket = 'images'

// Change folder structure
folder = 'uploads'
```

---

## ✅ Checklist

- [ ] Created `images` bucket in Supabase Storage
- [ ] Set bucket to public
- [ ] Added all 4 storage policies
- [ ] Tested upload in Faculty form
- [ ] Tested upload in Courses form
- [ ] Tested upload in Events form
- [ ] Tested upload in Blog form
- [ ] Verified images display correctly
- [ ] Tested drag-and-drop functionality
- [ ] Tested click-to-upload functionality
- [ ] Tested image removal
- [ ] Tested manual URL input fallback

---

**You're all set!** 🎉 Your admin dashboard now has professional drag-and-drop image upload functionality.
