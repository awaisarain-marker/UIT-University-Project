# 🔧 Fix Image Upload - Quick Guide

## Problem
- "Bucket not found" error when uploading images
- No success messages after saving

## ✅ Solution

### Step 1: Create Storage Bucket

1. Go to **Supabase Dashboard**
2. Click **Storage** in left sidebar
3. Click **New bucket** button
4. Fill in:
   - **Name**: `images`
   - **Public bucket**: ✅ Check this box
   - **File size limit**: 5MB (or your preference)
5. Click **Create bucket**

### Step 2: Set Storage Policies

1. Go to **SQL Editor** in Supabase
2. Copy and paste this SQL:

```sql
-- Policy 1: Allow anyone to view images (public read access)
CREATE POLICY "Public can view images"
ON storage.objects FOR SELECT
USING (bucket_id = 'images');

-- Policy 2: Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'images' 
  AND auth.role() = 'authenticated'
);

-- Policy 3: Allow authenticated users to update images
CREATE POLICY "Authenticated users can update images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'images' 
  AND auth.role() = 'authenticated'
);

-- Policy 4: Allow authenticated users to delete images
CREATE POLICY "Authenticated users can delete images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'images' 
  AND auth.role() = 'authenticated'
);
```

3. Click **Run** to execute

### Step 3: Test Image Upload

1. Go to any admin form (Faculty, Courses, Events, or Blog)
2. Drag and drop an image
3. Should upload successfully!
4. After saving, you'll see: "✅ [Item] created successfully!"

---

## ✅ What Was Fixed

### Image Upload
- ✅ Now works after creating bucket
- ✅ Shows upload progress
- ✅ Displays preview
- ✅ Proper error messages

### Success Messages
All forms now show success messages:
- ✅ "Faculty member created successfully!"
- ✅ "Course created successfully!"
- ✅ "Event created successfully!"
- ✅ "Blog post created successfully!"
- ✅ "Faculty member updated successfully!"
- ✅ "Course updated successfully!"
- ✅ "Event updated successfully!"
- ✅ "Blog post updated successfully!"

---

## 🐛 Troubleshooting

### Still getting "Bucket not found"?
- Make sure bucket name is exactly `images` (lowercase)
- Verify bucket is set to **Public**
- Check you're logged in to Supabase

### Images not uploading?
- Check file size (must be under 5MB)
- Verify file is an image (PNG, JPG, GIF)
- Make sure storage policies are set
- Check browser console for errors

### Success message not showing?
- Refresh the page
- Check if item was actually created/updated
- Look in browser console for errors

---

## 📊 Verification Checklist

- [ ] Created `images` bucket in Supabase Storage
- [ ] Set bucket to Public
- [ ] Ran storage policies SQL
- [ ] Tested drag-and-drop upload
- [ ] Tested click-to-upload
- [ ] Verified image preview shows
- [ ] Confirmed success message appears
- [ ] Checked item appears in list

---

## 🎉 You're Done!

After completing these steps:
- ✅ Image upload will work perfectly
- ✅ Success messages will appear
- ✅ Images will be stored in Supabase
- ✅ Images will display on your website

Try uploading an image now!
