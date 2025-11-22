# Pages Admin System Guide

## Overview
The Pages Admin System allows you to create, edit, and delete custom pages for your website through an intuitive admin interface.

## Features
- ✅ Create new pages with rich text editor
- ✅ Edit existing pages
- ✅ Delete pages
- ✅ Publish/unpublish pages
- ✅ SEO-friendly with meta descriptions
- ✅ Auto-generated slugs from titles
- ✅ Dynamic routing for all pages

## How to Use

### Accessing the Admin Panel
1. Navigate to `/admin/pages`
2. You'll see a list of all pages

### Creating a New Page
1. Click the "Add Page" button
2. Fill in the form:
   - **Page Title**: The title of your page (e.g., "About Us")
   - **URL Slug**: Auto-generated from title, but you can edit it (e.g., "about-us")
   - **Meta Description**: Brief description for SEO (150-160 characters recommended)
   - **Page Content**: Use the rich text editor to create your content
   - **Publish immediately**: Check this to make the page live immediately

3. Click "Create Page"

### Editing a Page
1. From the pages list, click the edit icon (pencil) next to the page
2. Make your changes
3. Click "Save Changes"

### Deleting a Page
1. From the pages list, click the delete icon (trash) next to the page
2. Confirm the deletion
3. The page will be permanently removed

### Publishing/Unpublishing
- Toggle the "Published" checkbox when creating or editing a page
- Only published pages are visible to the public
- Draft pages are only visible in the admin panel

## Rich Text Editor Features

The editor includes the following formatting options:
- **Bold** and *Italic* text
- Headings (H1, H2)
- Bullet lists and numbered lists
- Links
- Images
- Undo/Redo

### Adding Links
1. Select the text you want to link
2. Click the link icon
3. Enter the URL
4. Press OK

### Adding Images
1. Click the image icon
2. Enter the image URL
3. Press OK

## Page URLs

Pages are accessible at: `/{slug}`

Examples:
- `/about-us`
- `/contact`
- `/privacy-policy`

## Database Structure

The `pages` table includes:
- `id`: Unique identifier (UUID)
- `title`: Page title
- `slug`: URL-friendly identifier
- `content`: HTML content
- `meta_description`: SEO description
- `is_published`: Publication status
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

## API Endpoints

### GET /api/admin/pages
Get all pages

### POST /api/admin/pages
Create a new page

**Body:**
```json
{
  "title": "Page Title",
  "slug": "page-slug",
  "content": "<p>HTML content</p>",
  "meta_description": "Description",
  "is_published": true
}
```

### GET /api/admin/pages/[id]
Get a single page by ID

### PUT /api/admin/pages/[id]
Update a page

**Body:** Same as POST

### DELETE /api/admin/pages/[id]
Delete a page

## Adding Pages to Navigation

1. Create your page in the Pages Admin
2. Copy the page URL (e.g., `/about-us`)
3. Go to **Admin → Menus**
4. Add a new menu item with the page URL

## Best Practices

1. **SEO**: Always fill in the meta description
2. **Slugs**: Keep slugs short, descriptive, and URL-friendly
3. **Content**: Use headings to structure your content
4. **Images**: Use optimized images with appropriate alt text
5. **Testing**: Preview pages before publishing

## Troubleshooting

### Page not showing
- Check if the page is published
- Verify the slug is correct
- Clear your browser cache

### Slug already exists
- Each slug must be unique
- Try a different slug or edit the existing page

### Editor not loading
- Refresh the page
- Check your internet connection
- Clear browser cache

## Security

- Only authenticated users can access the admin panel
- Row Level Security (RLS) is enabled on the pages table
- Public users can only view published pages
- All admin operations require authentication

## Future Enhancements

Potential features to add:
- Image upload functionality
- Page templates
- Version history
- Scheduled publishing
- Page categories/tags
- Search functionality
- Bulk operations
