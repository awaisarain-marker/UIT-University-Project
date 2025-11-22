# Page Hierarchy Guide

## Overview
The Pages Admin system now supports parent-child page relationships, allowing you to create hierarchical page structures.

## Features Added

### 1. Parent-Child Relationships
- **Parent Pages**: Top-level pages (e.g., About, Services, Products)
- **Child Pages**: Sub-pages under a parent (e.g., About → Team, About → History)

### 2. Sort Order
- Control the display order of pages
- Lower numbers appear first
- Useful for organizing navigation menus

### 3. Visual Hierarchy
- Parent pages shown with purple badge
- Child pages shown with blue badge and indentation
- Clear visual distinction in the admin list

## Database Changes

### New Columns Added:
- `parent_id` (UUID): Reference to parent page
- `sort_order` (INTEGER): Display order (default: 0)

### Migration Files:
1. **New installations**: Use `create_pages_system.sql` (includes hierarchy)
2. **Existing installations**: Use `add_page_hierarchy.sql` (adds columns)

## How to Use

### Creating a Parent Page
1. Go to `/admin/pages`
2. Click "Add Page"
3. Fill in the form
4. Leave "Parent Page" as "None (Top-level page)"
5. Set sort order (optional)
6. Click "Create Page"

### Creating a Child Page
1. Go to `/admin/pages`
2. Click "Add Page"
3. Fill in the form
4. Select a parent from "Parent Page" dropdown
5. Set sort order (optional)
6. Click "Create Page"

### Converting a Page
You can convert any page between parent and child:
- **To make a parent**: Edit page, set "Parent Page" to "None"
- **To make a child**: Edit page, select a parent from dropdown

## Admin Dashboard

### Statistics Display
The admin page shows:
- Total Pages count
- Parent Pages count (purple)
- Child Pages count (blue)

### Hierarchical List View
Pages are displayed in a tree structure:
```
📄 About Us (Parent)
  └─ 📄 Our Team (Child)
  └─ 📄 Our History (Child)
📄 Services (Parent)
  └─ 📄 Web Development (Child)
  └─ 📄 Mobile Apps (Child)
📄 Contact (Parent)
```

## URL Structure

### Current Implementation
All pages use flat URLs:
- Parent: `/about-us`
- Child: `/our-team`

### Future Enhancement (Optional)
You could implement nested URLs:
- Parent: `/about-us`
- Child: `/about-us/our-team`

## Sort Order Examples

### Example 1: Main Navigation
```
Sort 0: Home
Sort 1: About
Sort 2: Services
Sort 3: Contact
```

### Example 2: Sub-pages
```
About (Sort 0)
  ├─ Team (Sort 0)
  ├─ History (Sort 1)
  └─ Careers (Sort 2)
```

## Best Practices

### 1. Logical Grouping
Group related pages under a common parent:
- About → Team, History, Mission
- Services → Web Dev, Mobile, Consulting
- Resources → Blog, Downloads, FAQs

### 2. Limit Depth
- Keep hierarchy to 2 levels (Parent → Child)
- Avoid deep nesting for better UX

### 3. Consistent Naming
- Use clear, descriptive titles
- Maintain consistent naming conventions

### 4. Sort Order Strategy
- Use increments of 10 (0, 10, 20, 30)
- Allows easy insertion of new pages

## Migration Steps

### For New Installations
1. Run `create_pages_system.sql` in Supabase
2. The hierarchy columns are included

### For Existing Installations
1. Run `add_page_hierarchy.sql` in Supabase
2. Existing pages will have:
   - `parent_id`: NULL (all become parent pages)
   - `sort_order`: 0
3. Edit pages to set parent relationships

## SQL Migration

### Option 1: Supabase Dashboard
```sql
-- Copy and paste this in SQL Editor
ALTER TABLE pages 
ADD COLUMN IF NOT EXISTS parent_id UUID REFERENCES pages(id) ON DELETE SET NULL;

ALTER TABLE pages 
ADD COLUMN IF NOT EXISTS sort_order INTEGER DEFAULT 0;

CREATE INDEX IF NOT EXISTS idx_pages_parent_id ON pages(parent_id);
CREATE INDEX IF NOT EXISTS idx_pages_sort_order ON pages(sort_order);
```

### Option 2: Use Migration File
Run the file: `supabase/migrations/add_page_hierarchy.sql`

## API Changes

### Create Page (POST /api/admin/pages)
```json
{
  "title": "Our Team",
  "slug": "our-team",
  "content": "<p>Meet our team</p>",
  "meta_description": "Meet our amazing team",
  "parent_id": "uuid-of-parent-page",
  "sort_order": 10,
  "is_published": true
}
```

### Update Page (PUT /api/admin/pages/[id])
Same structure as create, all fields optional.

## Troubleshooting

### Pages not showing in hierarchy
- Check that parent_id is correctly set
- Verify parent page exists
- Check sort_order values

### Can't select parent
- Ensure parent page is created first
- Current page cannot be its own parent
- Child pages cannot be parents

### Sort order not working
- Verify sort_order column exists
- Check that values are integers
- Lower numbers appear first

## Future Enhancements

Potential features to add:
- [ ] Nested URL structure (/parent/child)
- [ ] Drag-and-drop reordering
- [ ] Breadcrumb navigation
- [ ] Maximum depth limit
- [ ] Bulk operations
- [ ] Page templates by hierarchy level
- [ ] Automatic sitemap generation

## Examples

### Example 1: Company Website
```
Home (sort: 0)
About (sort: 1)
  ├─ Our Story (sort: 0)
  ├─ Team (sort: 1)
  └─ Careers (sort: 2)
Services (sort: 2)
  ├─ Consulting (sort: 0)
  ├─ Development (sort: 1)
  └─ Support (sort: 2)
Contact (sort: 3)
```

### Example 2: Documentation Site
```
Getting Started (sort: 0)
  ├─ Installation (sort: 0)
  ├─ Quick Start (sort: 1)
  └─ Configuration (sort: 2)
Guides (sort: 1)
  ├─ Basic Usage (sort: 0)
  ├─ Advanced Features (sort: 1)
  └─ Best Practices (sort: 2)
API Reference (sort: 2)
```

## Support

For issues or questions:
1. Check this guide
2. Review the migration files
3. Check Supabase logs
4. Verify database schema
