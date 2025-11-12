# Image Troubleshooting Guide

## 🐛 Issue Fixed

### Problem
Images were not showing in the carousel because of incorrect file extensions.

### Root Causes
1. **Wrong Extensions**: GSOC22 images are `.png` but were referenced as `.jpg`
2. **achiev-2**: File is `.png` but was referenced as `.jpg`

---

## ✅ Solution Applied

### Before (Incorrect)
```tsx
images={[
    '/images/GSOC22_1.jpg',  // ❌ Wrong - file is .png
    '/images/GSOC22_2.jpg',  // ❌ Wrong - file is .png
    '/images/achiev-2.jpg',  // ❌ Wrong - file is .png
]}
```

### After (Correct)
```tsx
images={[
    '/images/GSOC22_1.png',  // ✅ Correct
    '/images/GSOC22_2.png',  // ✅ Correct
    '/images/GSOC22_3.png',  // ✅ Correct
    '/images/GSOC22_4.png',  // ✅ Correct
    '/images/GSOC22_5.png',  // ✅ Correct
    '/images/achiev-2.png',  // ✅ Correct
]}
```

---

## 📁 Actual Files in `/public/images/`

```
✅ achiev-2.png
✅ bg-1-1.jpg
✅ GSOC1.jpg
✅ GSOC2.jpg
✅ GSOC3.jpg
✅ GSOC4.jpg
✅ GSOC5.jpg
✅ GSOC6.jpg
✅ GSOC7.jpg
✅ GSOC8.jpg
✅ GSOC22_1.png
✅ GSOC22_2.png
✅ GSOC22_3.png
✅ GSOC22_4.png
✅ GSOC22_5.png
```

---

## 🔍 How to Check Image Extensions

### Method 1: File Explorer
1. Open `public/images/` folder
2. Look at file names with extensions
3. Note: `.jpg` vs `.png` vs `.jpeg`

### Method 2: Command Line
```bash
# Windows (PowerShell)
Get-ChildItem public/images

# Mac/Linux
ls -la public/images
```

### Method 3: VS Code
1. Open Explorer panel
2. Navigate to `public/images/`
3. Check file extensions in the list

---

## 🎯 Common Image Issues & Solutions

### Issue 1: Image Not Showing
**Symptoms**: Broken image icon or blank space

**Possible Causes**:
- ❌ Wrong file extension (`.jpg` vs `.png`)
- ❌ Wrong file name (case-sensitive)
- ❌ Wrong path (missing `/images/`)
- ❌ File doesn't exist

**Solution**:
1. Check actual file name in `public/images/`
2. Match extension exactly (`.jpg`, `.png`, `.jpeg`)
3. Ensure path starts with `/images/`
4. Check case sensitivity (Linux/Mac are case-sensitive)

---

### Issue 2: Next.js Image Optimization Error
**Symptoms**: Console error about image optimization

**Possible Causes**:
- ❌ Invalid image format
- ❌ Corrupted image file
- ❌ Image too large

**Solution**:
1. Verify image is valid (open in image viewer)
2. Check image size (< 10MB recommended)
3. Use supported formats: `.jpg`, `.png`, `.webp`, `.avif`

---

### Issue 3: Images Load Slowly
**Symptoms**: Images take long to appear

**Possible Causes**:
- ❌ Large file sizes
- ❌ Not optimized
- ❌ No lazy loading

**Solution**:
1. Compress images before uploading
2. Use Next.js Image component (already done ✅)
3. Ensure `loading="lazy"` for off-screen images

---

## 📝 Best Practices for Adding Images

### 1. Check File Extension
```bash
# Before adding to code, verify:
public/images/my-image.??? 
                      ↑
              What is this?
```

### 2. Use Consistent Naming
```
✅ Good:
- gsoc-2024-1.jpg
- gsoc-2024-2.jpg
- achievement-1.png

❌ Bad:
- GSOC1.jpg
- gsoc2.JPG  (inconsistent case)
- achievement.PNG (inconsistent case)
```

### 3. Optimize Before Upload
```
Recommended sizes:
- Width: 1200-1920px
- Height: 700-1080px
- Format: .jpg (photos), .png (graphics)
- Quality: 80-90%
- File size: < 500KB
```

### 4. Test Locally First
```tsx
// Add one image first
images={[
    '/images/test-image.jpg',
]}

// If it works, add more
images={[
    '/images/test-image.jpg',
    '/images/another-image.png',
]}
```

---

## 🔧 Debugging Steps

### Step 1: Check Browser Console
1. Open DevTools (F12)
2. Go to Console tab
3. Look for 404 errors or image errors

### Step 2: Check Network Tab
1. Open DevTools (F12)
2. Go to Network tab
3. Filter by "Img"
4. Reload page
5. Check which images fail to load (red)

### Step 3: Verify File Path
```tsx
// In your code:
'/images/GSOC22_1.png'

// Should match exactly:
public/images/GSOC22_1.png
         ↑              ↑
    Must match    Must match
```

### Step 4: Check File Permissions
```bash
# Ensure files are readable
# Windows: Right-click → Properties → Security
# Mac/Linux: ls -la public/images/
```

---

## 📋 Checklist for Adding New Images

- [ ] Image file is in `public/images/` folder
- [ ] File extension is correct (`.jpg`, `.png`, etc.)
- [ ] File name matches exactly (case-sensitive)
- [ ] Path starts with `/images/` (not `public/images/`)
- [ ] Image is valid and not corrupted
- [ ] Image size is reasonable (< 2MB)
- [ ] Added to carousel array in `app/merl/page.tsx`
- [ ] Tested in browser (no 404 errors)

---

## 🎨 Current Carousel Images (14 total)

```tsx
images={[
    '/images/GSOC1.jpg',      // ✅ Works
    '/images/GSOC2.jpg',      // ✅ Works
    '/images/GSOC3.jpg',      // ✅ Works
    '/images/GSOC4.jpg',      // ✅ Works
    '/images/GSOC5.jpg',      // ✅ Works
    '/images/GSOC6.jpg',      // ✅ Works
    '/images/GSOC7.jpg',      // ✅ Works
    '/images/GSOC8.jpg',      // ✅ Works
    '/images/GSOC22_1.png',   // ✅ Fixed
    '/images/GSOC22_2.png',   // ✅ Fixed
    '/images/GSOC22_3.png',   // ✅ Fixed
    '/images/GSOC22_4.png',   // ✅ Fixed
    '/images/GSOC22_5.png',   // ✅ Fixed
    '/images/achiev-2.png',   // ✅ Fixed
]}
```

---

## 💡 Pro Tips

### Tip 1: Use Image Viewer
Before adding images to code, open them in an image viewer to verify they're valid.

### Tip 2: Batch Rename
If you have many images with inconsistent names, use a batch rename tool:
- Windows: PowerToys PowerRename
- Mac: Automator
- Cross-platform: Bulk Rename Utility

### Tip 3: Image Compression
Use tools to compress images before uploading:
- TinyPNG (online)
- ImageOptim (Mac)
- Squoosh (web app)

### Tip 4: Next.js Image Formats
Next.js automatically converts images to WebP for better performance. Just use `.jpg` or `.png` and Next.js handles the rest!

---

## 🚀 Quick Fix Command

If you need to quickly check all image extensions:

```bash
# PowerShell (Windows)
Get-ChildItem public/images | Select-Object Name, Extension

# Bash (Mac/Linux)
ls -1 public/images/ | grep -E '\.(jpg|png|jpeg|webp)$'
```

---

## ✅ Verification

After fixing, verify:
1. ✅ All 14 images load in carousel
2. ✅ No 404 errors in console
3. ✅ Images display correctly
4. ✅ Navigation works through all slides
5. ✅ Lightbox opens with all images

---

*Last Updated: November 8, 2025*  
*Issue: Fixed image extensions*
