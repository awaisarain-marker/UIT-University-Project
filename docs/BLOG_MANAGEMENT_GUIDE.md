# Blog Management Guide

## Overview
This guide explains how to manage blogs in your UIT University website, including adding, editing, and removing blog posts.

## Current Design
The blog system uses a modern card-based design with:
- **Large featured image** at the top
- **Category badge** (white background, top-left)
- **Date with calendar icon** (e.g., "AUG 28, 2025")
- **Author with user icon** ("POST BY MASON RIVERA")
- **Title limited to 2 lines**
- **Description limited to 2 lines**
- **Hover effects** for better UX

## Sample Data

### What are Sample Blogs?
When you first set up the blog system, 6 sample blog posts are automatically created for testing purposes. These include:
1. Visit to Tech Innovation Hub (Technology)
2. Manufacturing Plant Tour (Engineering)
3. Financial District Learning Experience (Business)
4. Environmental Conservation Project (Environment)
5. Healthcare Facility Visit (Healthcare)
6. Media Production Studio Tour (Media)

### How to Remove Sample Blogs

#### Option 1: Using Supabase SQL Editor
1. Go to your Supabase project
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `supabase/migrations/remove_sample_blogs.sql`
4. Click **Run**
5. All sample blogs will be deleted

#### Option 2: Manual Deletion
1. Go to Supabase **Table Editor**
2. Open the `blog_posts` table
3. Find blogs with these author names:
   - MASON RIVERA
   - SARAH JOHNSON
   - DAVID CHEN
   - EMILY BROWN
   - MICHAEL ANDERSON
   - JESSICA MARTINEZ
4. Delete them individually

#### Option 3: Using SQL Query
Run this query in Supabase SQL Editor:
```sql
DELETE FROM blog_posts 
WHERE author_name IN (
  'MASON RIVERA', 
  'SARAH JOHNSON', 
  'DAVID CHEN', 
  'EMILY BROWN', 
  'MICHAEL ANDERSON', 
  'JESSICA MARTINEZ'
);
```

## Adding New Blogs from Admin Dashboard

### Method 1: Using Supabase Table Editor (Quick)
1. Go to Supabase **Table Editor**
2. Open `blog_posts` table
3. Click **Insert row**
4. Fill in the fields:
   - `title`: Your blog title
   - `content`: HTML content (use `<p>`, `<h2>`, etc.)
   - `excerpt`: Short description (150-200 characters)
   - `category`: Category name (e.g., "Technology", "Business")
   - `image_url`: Full URL to image (1200x630px recommended)
   - `author_name`: Author name in UPPERCASE (e.g., "JOHN DOE")
   - `is_published`: Check this box to publish
   - `published_at`: Select current date/time
5. Click **Save**

### Method 2: Using SQL Insert (Advanced)
```sql
INSERT INTO blog_posts (
  title, 
  content, 
  excerpt, 
  category, 
  image_url, 
  author_name, 
  is_published, 
  published_at
)
VALUES (
  'Your Blog Title',
  '<p>Your blog content with HTML formatting...</p>',
  'Short description of your blog post',
  'Technology',
  'https://images.unsplash.com/photo-xxx',
  'JOHN DOE',
  true,
  NOW()
);
```

### Method 3: Using Admin Dashboard (Recommended for Production)
Create an admin interface with a form that includes:
- Title input
- Rich text editor (TipTap, Quill, or similar)
- Excerpt textarea
- Category dropdown
- Image upload (Supabase Storage)
- Author name input
- Publish checkbox
- Date picker

Example code for creating a blog:
```typescript
import { supabase } from '@/lib/supabase';

const createBlog = async (blogData) => {
  const { data, error } = await supabase
    .from('blog_posts')
    .insert({
      title: blogData.title,
      content: blogData.content,
      excerpt: blogData.excerpt,
      category: blogData.category,
      image_url: blogData.image_url,
      author_name: blogData.author_name.toUpperCase(),
      is_published: true,
      published_at: new Date().toISOString()
    })
    .select()
    .single();

  if (error) throw error;
  return data;
};
```

## Editing Existing Blogs

### Using Supabase Table Editor
1. Go to **Table Editor** → `blog_posts`
2. Find the blog you want to edit
3. Click on any cell to edit
4. Make your changes
5. Changes are saved automatically

### Using SQL Update
```sql
UPDATE blog_posts
SET 
  title = 'Updated Title',
  content = '<p>Updated content...</p>',
  excerpt = 'Updated excerpt',
  updated_at = NOW()
WHERE id = 'blog-id-here';
```

## Deleting Blogs

### Using Supabase Table Editor
1. Go to **Table Editor** → `blog_posts`
2. Find the blog you want to delete
3. Click the **trash icon** on the right
4. Confirm deletion

### Using SQL Delete
```sql
DELETE FROM blog_posts WHERE id = 'blog-id-here';
```

## Blog Fields Explained

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | UUID | Auto | Unique identifier (auto-generated) |
| `title` | TEXT | Yes | Blog title (shown in card and detail page) |
| `content` | TEXT | Yes | Full blog content (HTML formatted) |
| `excerpt` | TEXT | No | Short description (2 lines max in card) |
| `author_name` | TEXT | No | Author name (default: "Admin") |
| `category` | TEXT | No | Category for filtering |
| `image_url` | TEXT | No | Featured image URL |
| `is_published` | BOOLEAN | Yes | Show/hide blog (default: false) |
| `published_at` | TIMESTAMP | No | Publication date/time |
| `created_at` | TIMESTAMP | Auto | Creation timestamp |
| `updated_at` | TIMESTAMP | Auto | Last update timestamp |

## Best Practices

### Images
- **Size**: 1200x630px (16:9 ratio)
- **Format**: JPG or PNG
- **Quality**: Optimized for web (< 200KB)
- **Source**: Unsplash, Pexels, or your own images
- **Storage**: Use Supabase Storage or external CDN

### Content
- **Title**: 50-70 characters (2 lines max)
- **Excerpt**: 150-200 characters (2 lines max)
- **Content**: Use proper HTML formatting
  - `<p>` for paragraphs
  - `<h2>`, `<h3>` for headings
  - `<ul>`, `<ol>` for lists
  - `<strong>`, `<em>` for emphasis
  - `<a href="">` for links

### Categories
Use consistent category names:
- Technology
- Engineering
- Business
- Environment
- Healthcare
- Media
- Innovation
- Workshop
- Conference

### Author Names
- Use UPPERCASE for consistency (e.g., "JOHN DOE")
- Keep it professional
- Can be real names or pseudonyms

## Troubleshooting

### Blogs Not Showing
1. Check `is_published` is set to `true`
2. Verify `published_at` is set
3. Clear browser cache
4. Check Supabase connection in `.env.local`

### Images Not Loading
1. Verify image URL is valid and accessible
2. Check CORS settings if using external images
3. Use HTTPS URLs only
4. Test URL in browser first

### Filters Not Working
1. Ensure category names match exactly (case-sensitive)
2. Clear filters and try again
3. Check browser console for errors

## URLs

- **Blog Listing**: `/corporate-liaison/day-trip-learning`
- **Individual Blog**: `/corporate-liaison/day-trip-learning/[blog-id]`

## Support Files

- **Main Migration**: `supabase/migrations/create_blog_posts_table.sql`
- **Remove Samples**: `supabase/migrations/remove_sample_blogs.sql`
- **Blog Card Component**: `components/blog/blog-card.tsx`
- **Setup Guide**: `docs/DAY_TRIP_LEARNING_SETUP.md`

## Quick Commands

### View all blogs
```sql
SELECT * FROM blog_posts ORDER BY published_at DESC;
```

### Count published blogs
```sql
SELECT COUNT(*) FROM blog_posts WHERE is_published = true;
```

### Get blogs by category
```sql
SELECT * FROM blog_posts 
WHERE category = 'Technology' 
AND is_published = true 
ORDER BY published_at DESC;
```

### Unpublish a blog (hide it)
```sql
UPDATE blog_posts SET is_published = false WHERE id = 'blog-id';
```

### Republish a blog
```sql
UPDATE blog_posts 
SET is_published = true, published_at = NOW() 
WHERE id = 'blog-id';
```

---

**Need Help?** Check the main setup guide at `docs/DAY_TRIP_LEARNING_SETUP.md` or contact your development team.
