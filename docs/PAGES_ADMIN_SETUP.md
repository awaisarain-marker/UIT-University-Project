# Pages Admin System - Quick Setup

## Prerequisites
- Supabase project configured
- Database migrations run
- Admin authentication set up

## Setup Steps

### 1. Run Database Migration
The pages table should already exist from the migration file:
```bash
# If not already run, execute:
supabase/migrations/create_pages_system.sql
```

### 2. Verify Table Exists
Check in Supabase dashboard that the `pages` table exists with these columns:
- id (uuid)
- title (varchar)
- slug (varchar, unique)
- content (text)
- meta_description (text)
- is_published (boolean)
- created_at (timestamp)
- updated_at (timestamp)

### 3. Test the System

#### Access Admin Panel
Navigate to: `http://localhost:3000/admin/pages`

#### Create Your First Page
1. Click "Add Page"
2. Enter:
   - Title: "Test Page"
   - Slug: "test-page" (auto-generated)
   - Content: "This is a test page"
   - Check "Publish immediately"
3. Click "Create Page"

#### View Your Page
Navigate to: `http://localhost:3000/test-page`

### 4. Common Issues

#### Issue: "Cannot find module '@/components/ui/textarea'"
**Solution**: The textarea component has been created at `components/ui/textarea.tsx`

#### Issue: "Cannot find module '@/components/cms/TiptapEditor'"
**Solution**: The TiptapEditor component has been created at `components/cms/TiptapEditor.tsx`

#### Issue: Pages not loading
**Solution**: 
- Check Supabase connection
- Verify RLS policies are set correctly
- Check browser console for errors

#### Issue: Editor not working
**Solution**:
- Ensure @tiptap packages are installed
- Check that the component is dynamically imported
- Verify no SSR issues

### 5. File Structure

```
app/
├── admin/
│   └── pages/
│       ├── page.tsx              # List all pages
│       ├── new/
│       │   └── page.tsx          # Create new page
│       └── [id]/
│           └── edit/
│               └── page.tsx      # Edit page
├── api/
│   └── admin/
│       └── pages/
│           ├── route.ts          # GET all, POST new
│           └── [id]/
│               └── route.ts      # GET, PUT, DELETE single
└── [slug]/
    └── page.tsx                  # Dynamic page display

components/
├── admin/
│   └── DeletePageButton.tsx      # Delete button component
├── cms/
│   └── TiptapEditor.tsx          # Rich text editor
└── ui/
    └── textarea.tsx              # Textarea component

docs/
├── PAGES_ADMIN_GUIDE.md          # User guide
└── PAGES_ADMIN_SETUP.md          # This file
```

### 6. Required Packages

Ensure these packages are installed:
```bash
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-link @tiptap/extension-image
```

### 7. Testing Checklist

- [ ] Can access `/admin/pages`
- [ ] Can create a new page
- [ ] Can edit an existing page
- [ ] Can delete a page
- [ ] Can toggle publish status
- [ ] Can view published page at `/{slug}`
- [ ] Draft pages are not publicly accessible
- [ ] Rich text editor works properly
- [ ] Images and links can be added
- [ ] Meta descriptions are saved

### 8. Next Steps

1. **Add to Navigation**: Link pages in your navigation menu
2. **Create Common Pages**: About, Contact, Privacy Policy, Terms of Service
3. **Customize Styling**: Update the page template in `app/[slug]/page.tsx`
4. **Add Features**: Consider adding categories, tags, or search

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify Supabase connection
3. Check RLS policies in Supabase dashboard
4. Review the PAGES_ADMIN_GUIDE.md for usage instructions

## Security Notes

- Only authenticated users can create/edit/delete pages
- Public users can only view published pages
- RLS policies enforce these rules at the database level
- Always validate user input on the server side
