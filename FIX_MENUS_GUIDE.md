# Fix Duplicate Menus & Add Pages System

## 🔧 Issues Fixed

1. **Duplicate Menus** - Script to remove duplicates
2. **Pages Management** - New system to manage pages that can be added to menus

## 🚀 Step-by-Step Fix

### Step 1: Remove Duplicate Menus

Run this in Supabase SQL Editor:
```sql
-- File: supabase/migrations/fix_duplicate_menus.sql
```

This will:
- Remove duplicate menus (keeps the oldest one)
- Verify no duplicates remain

### Step 2: Create Pages System

Run this in Supabase SQL Editor:
```sql
-- File: supabase/migrations/create_pages_system.sql
```

This creates:
- `pages` table for managing site pages
- Default pages (About, Contact, Admissions)
- RLS policies

### Step 3: Access Pages Management

1. Go to `/admin/pages`
2. You'll see a list of pages
3. Click "Add Page" to create new pages
4. Each page gets a URL like `/about`, `/contact`, etc.

## 📋 How to Add Pages to Menus

### Method 1: Using Existing Pages

1. Go to `/admin/pages`
2. Note the page URL (e.g., `/about`)
3. Go to `/admin/menus`
4. Click "Manage Items" on the menu you want
5. Add a new menu item:
   - Title: "About Us"
   - URL: `/about`
   - Click "Add Item"

### Method 2: Adding External Links

1. Go to `/admin/menus`
2. Click "Manage Items"
3. Add menu item:
   - Title: "Google"
   - URL: `https://google.com`
   - Target: "New Window"
   - Click "Add Item"

### Method 3: Adding Nested Menu Items

1. First, add a parent item:
   - Title: "About"
   - URL: `/about`
2. Then, add child items:
   - Title: "Our Team"
   - URL: `/about/team`
   - Parent Item: Select "About"
   - Click "Add Item"

## 🎯 Complete Workflow

### Creating a New Page and Adding to Menu:

1. **Create the Page:**
   - Go to `/admin/pages`
   - Click "Add Page"
   - Fill in:
     - Title: "Our Mission"
     - Slug: "our-mission" (auto-generated)
     - Content: Your page content
     - Published: ✓
   - Click "Create Page"

2. **Add to Header Menu:**
   - Go to `/admin/menus`
   - Find "Main Navigation"
   - Click "Manage Items"
   - Click "Add Item"
   - Fill in:
     - Title: "Our Mission"
     - URL: `/our-mission`
     - Parent Item: None (or select "About" for nested)
     - Target: Same Window
     - Display Order: 5
     - Active: ✓
   - Click "Add Item"

3. **Verify:**
   - Visit your homepage
   - Check the header menu
   - You should see "Our Mission" link

## 📊 Current Menu Structure

After running the fixes, you should have:

### Header Menu: "Main Navigation"
- Home
- About (with dropdown)
- Academics (with dropdown)
- MERL
- Faculty
- Admissions (with dropdown)
- More (with dropdown)
- Contact

### Footer Menus:
1. **Quick Links** (5 items)
2. **Information** (3 items)
3. **Undergraduate Programs** (5 items)

## 🔍 Checking for Duplicates

To verify no duplicates exist, run in Supabase:
```sql
SELECT slug, COUNT(*) as count
FROM menus
GROUP BY slug
HAVING COUNT(*) > 1;
```

Should return 0 rows.

## 📁 Files Created

1. `supabase/migrations/fix_duplicate_menus.sql` - Remove duplicates
2. `supabase/migrations/create_pages_system.sql` - Pages table
3. `app/admin/pages/page.tsx` - Pages list
4. `FIX_MENUS_GUIDE.md` - This guide

## 📝 Files Updated

1. `components/admin/sidebar.tsx` - Added Pages link

## ✅ What You Can Do Now

- ✅ View all pages at `/admin/pages`
- ✅ Create new pages
- ✅ Edit pages
- ✅ Delete pages
- ✅ Publish/unpublish pages
- ✅ Add page URLs to any menu
- ✅ No more duplicate menus

## 🎉 Next Steps

1. Run `fix_duplicate_menus.sql`
2. Run `create_pages_system.sql`
3. Visit `/admin/pages` to manage pages
4. Visit `/admin/menus` to add pages to menus

Your menu system is now clean and you can easily add pages! 🚀
