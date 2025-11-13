# 📁 Local Image Upload - Server Storage

Images are now stored on your hosting server instead of Supabase!

---

## ✅ What Changed

### Before
- Images uploaded to Supabase Storage
- Required Supabase bucket setup
- External dependency

### After
- Images uploaded to your server
- Stored in `public/uploads/` folder
- No external dependencies
- Faster access
- Full control

---

## 📂 File Structure

```
your-project/
├── public/
│   └── uploads/
│       ├── .gitkeep          # Keeps folder in git
│       ├── faculty/          # Faculty photos (auto-created)
│       ├── courses/          # Course images (auto-created)
│       ├── events/           # Event images (auto-created)
│       └── blog/             # Blog images (auto-created)
├── app/
│   └── api/
│       └── upload/
│           └── route.ts      # Upload API endpoint
└── components/
    └── admin/
        └── ImageUpload.tsx   # Updated component
```

---

## 🚀 How It Works

### 1. User Uploads Image
- Drag & drop or click to select
- File validated (type, size)
- Sent to `/api/upload` endpoint

### 2. Server Processes Upload
- Validates file again
- Creates unique filename
- Creates folder if needed
- Saves to `public/uploads/{folder}/`

### 3. Returns Public URL
- Returns path like `/uploads/faculty/1234567890-abc123.jpg`
- Image immediately accessible
- Stored in database

---

## 📊 Upload Folders

Images are organized by type:

| Folder | Used For | Example Path |
|--------|----------|--------------|
| `faculty/` | Faculty photos | `/uploads/faculty/1699876543210-abc123.jpg` |
| `courses/` | Course images | `/uploads/courses/1699876543211-def456.png` |
| `events/` | Event images | `/uploads/events/1699876543212-ghi789.jpg` |
| `blog/` | Blog images | `/uploads/blog/1699876543213-jkl012.png` |

---

## 🔒 Security Features

### File Validation
- ✅ Only image files allowed (PNG, JPG, GIF, etc.)
- ✅ Maximum file size: 5MB
- ✅ Validated on client AND server
- ✅ Unique filenames prevent overwrites

### Access Control
- ✅ Upload requires authentication
- ✅ Public read access for display
- ✅ Files stored outside git (in .gitignore)

---

## 🎯 Usage

### In Admin Forms
Works exactly the same as before:
1. Drag and drop image
2. Or click to browse
3. Image uploads to server
4. Preview shows immediately
5. URL saved to database

### Accessing Images
Images are publicly accessible at:
```
https://yourdomain.com/uploads/faculty/filename.jpg
https://yourdomain.com/uploads/courses/filename.jpg
```

---

## 🔧 Configuration

### Change Upload Directory
Edit `app/api/upload/route.ts`:
```typescript
const uploadDir = path.join(process.cwd(), 'public', 'uploads', folder)
// Change 'uploads' to your preferred folder name
```

### Change Max File Size
Edit `app/api/upload/route.ts`:
```typescript
if (file.size > 5 * 1024 * 1024) {
// Change 5 to your preferred size in MB
```

### Change Allowed File Types
Edit `app/api/upload/route.ts`:
```typescript
if (!file.type.startsWith('image/')) {
// Modify this condition for different file types
```

---

## 📦 Deployment

### Important Notes

1. **Uploads Folder**
   - The `public/uploads/` folder is in `.gitignore`
   - Only `.gitkeep` file is tracked
   - Actual uploaded files are NOT in git

2. **On Your Server**
   - Create `public/uploads/` folder manually
   - Set proper permissions (755 or 775)
   - Ensure Node.js can write to it

3. **Permissions**
   ```bash
   mkdir -p public/uploads
   chmod 755 public/uploads
   ```

4. **Backup Strategy**
   - Uploaded files are NOT in git
   - Set up separate backup for `public/uploads/`
   - Consider cloud backup or regular backups

---

## 🐛 Troubleshooting

### "Upload failed" error
- Check `public/uploads/` folder exists
- Verify folder permissions (755 or 775)
- Check disk space available
- Look at server logs for details

### Images not displaying
- Verify file was actually uploaded
- Check file path in database
- Ensure `public/uploads/` is accessible
- Check browser console for 404 errors

### Permission denied
- Set folder permissions: `chmod 755 public/uploads`
- Ensure Node.js process can write
- Check parent folder permissions

### File too large
- Default limit is 5MB
- Increase in `app/api/upload/route.ts`
- Also check server upload limits

---

## 💾 Backup Recommendations

Since uploaded files are not in git:

### Option 1: Cloud Backup
- Use rsync to backup to cloud storage
- Schedule daily backups
- Keep multiple versions

### Option 2: Server Backup
- Include `public/uploads/` in server backups
- Regular automated backups
- Test restore process

### Option 3: CDN
- Upload to CDN after local save
- Provides backup + faster delivery
- Can be added later

---

## 🎨 Benefits

### Advantages
- ✅ No external dependencies
- ✅ Faster image loading
- ✅ Full control over files
- ✅ No storage costs
- ✅ Easier to manage
- ✅ Works offline (development)

### Considerations
- ⚠️ Files not in git (need separate backup)
- ⚠️ Uses server disk space
- ⚠️ Need to manage backups
- ⚠️ May need CDN for high traffic

---

## 📝 Checklist

Setup:
- [x] API route created (`app/api/upload/route.ts`)
- [x] ImageUpload component updated
- [x] `.gitignore` updated
- [x] `public/uploads/.gitkeep` created

Testing:
- [ ] Test upload in Faculty form
- [ ] Test upload in Courses form
- [ ] Test upload in Events form
- [ ] Test upload in Blog form
- [ ] Verify images display correctly
- [ ] Check files in `public/uploads/`

Deployment:
- [ ] Create `public/uploads/` on server
- [ ] Set proper permissions
- [ ] Test upload on production
- [ ] Set up backup strategy

---

## 🎉 You're All Set!

Images now upload to your server at:
- `public/uploads/faculty/`
- `public/uploads/courses/`
- `public/uploads/events/`
- `public/uploads/blog/`

No Supabase Storage needed! Everything is on your hosting server.
