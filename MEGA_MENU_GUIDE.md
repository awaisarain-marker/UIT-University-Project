# Mega Menu System Guide

## Overview
The mega menu system allows you to create rich dropdown menus with multiple sections and links, perfect for displaying "More Pages" or complex navigation structures.

## Features
- ✅ Dynamic sections with custom headings
- ✅ Multiple links per section
- ✅ Drag & drop ordering for sections and links
- ✅ Full CRUD operations (Add/Edit/Delete)
- ✅ Hover-activated mega menu display
- ✅ Responsive grid layout (3 columns on desktop)
- ✅ Database-driven with Supabase

## Database Structure

### Tables Created
1. **mega_menu_sections** - Sections/columns in the mega menu
   - `id` - UUID primary key
   - `menu_item_id` - References menu_items (which menu item triggers this mega menu)
   - `title` - Section heading (e.g., "Academic Programs")
   - `display_order` - Order of sections
   - `is_active` - Active/inactive status

2. **mega_menu_links** - Individual links within sections
   - `id` - UUID primary key
   - `section_id` - References mega_menu_sections
   - `title` - Link text
   - `url` - Link destination
   - `target` - Link target (_self, _blank, etc.)
   - `display_order` - Order of links within section
   - `is_active` - Active/inactive status

## How to Use

### 1. Run the Migration
```bash
# Run the mega menu migration
node scripts/run-pages-migration.js
```

### 2. Access Mega Menu Manager
1. Go to Admin → Menus → [Your Menu] → Items
2. Click the grid icon (🔲) next to any menu item
3. This opens the Mega Menu Manager for that item

### 3. Create Sections
1. Click "Add Section" button
2. Edit the section title (e.g., "Student Services", "Academic Programs")
3. Drag sections to reorder them

### 4. Add Links to Sections
1. Within each section, click "Add Link"
2. Enter the link title and URL
3. Drag links to reorder within the section
4. Delete links using the trash icon

### 5. View on Frontend
- Hover over the menu item to see the mega menu
- The mega menu displays in a 3-column grid
- Each section shows its heading and links

## Admin Interface

### Menu Items Page
- New grid icon (🔲) button for each menu item
- Click to manage mega menu for that item

### Mega Menu Manager
- Card-based layout showing all sections
- Drag & drop sections to reorder
- Each section card contains:
  - Editable heading
  - List of links (also draggable)
  - Add Link button
  - Delete section button

## Frontend Display

### Desktop View
- Mega menu appears on hover
- 3-column grid layout
- Section headings in uppercase
- Links displayed as list items
- Smooth transitions

### Mobile View
- Currently uses standard dropdown
- Can be enhanced for mobile mega menu if needed

## Customization

### Adjust Column Count
Edit `components/DynamicNavigation.tsx`:
```tsx
// Change from grid-cols-3 to grid-cols-2 or grid-cols-4
<div className="grid grid-cols-3 gap-6">
```

### Adjust Mega Menu Width
Edit `components/DynamicNavigation.tsx`:
```tsx
// Change minWidth value
style={{ minWidth: '600px' }}
```

### Styling
All styling uses Tailwind CSS classes and can be customized in the respective components.

## Tips
- Use descriptive section headings (e.g., "For Students", "Resources")
- Keep link titles concise
- Organize related links under the same section
- Use drag & drop for quick reordering
- Test on frontend after making changes

## Troubleshooting

### Mega Menu Not Showing
- Check that sections and links are marked as `is_active: true`
- Verify the menu item has associated mega menu sections
- Check browser console for errors

### Drag & Drop Not Working
- Ensure JavaScript is enabled
- Check that you're clicking and holding the grip icon
- Try refreshing the page

### Links Not Updating
- Check database connection
- Verify Supabase RLS policies are correct
- Check browser console for API errors
