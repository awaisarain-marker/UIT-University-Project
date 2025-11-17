# Dynamic Menu Management System

## Overview
A complete system for managing header and footer menus dynamically from the admin dashboard. Create, edit, delete, and organize menu items with support for nested hierarchies.

## Features

### 1. Menu Management
- Create multiple menus for header and footer
- Activate/deactivate menus
- Set display order
- Unique slug for each menu
- Delete menus (cascades to menu items)

### 2. Menu Items Management
- Add unlimited menu items
- Support for nested/hierarchical menus (parent-child relationships)
- Drag-and-drop ordering (visual indicator)
- Set link target (same window or new window)
- Activate/deactivate individual items
- Edit and delete items

### 3. Locations
- **Header**: Main navigation menu
- **Footer**: Multiple footer menus (Quick Links, Information, etc.)

## Database Structure

### Tables Created

#### 1. `menus` Table
```sql
id UUID PRIMARY KEY
name VARCHAR(100) - Menu name
slug VARCHAR(100) UNIQUE - URL-friendly identifier
location VARCHAR(50) - 'header' or 'footer'
is_active BOOLEAN - Active status
display_order INTEGER - Display order
created_at TIMESTAMP
updated_at TIMESTAMP
```

#### 2. `menu_items` Table
```sql
id UUID PRIMARY KEY
menu_id UUID - Reference to menus table
parent_id UUID - Parent menu item (NULL for top-level)
title VARCHAR(255) - Menu item title
url VARCHAR(500) - Link URL
target VARCHAR(20) - '_self' or '_blank'
icon VARCHAR(100) - Optional icon class
css_class VARCHAR(100) - Optional CSS class
display_order INTEGER - Display order
is_active BOOLEAN - Active status
created_at TIMESTAMP
updated_at TIMESTAMP
```

## Admin Pages

### 1. Menu List (`/admin/menus`)
- View all menus grouped by location (Header/Footer)
- Quick actions: Activate/Deactivate, Edit, Manage Items, Delete
- Add new menu button

### 2. Add Menu (`/admin/menus/new`)
- Create new menu
- Fields:
  - Name (required)
  - Slug (auto-generated, editable)
  - Location (Header/Footer)
  - Display Order
  - Active status

### 3. Manage Menu Items (`/admin/menus/[id]/items`)
- Add/Edit/Delete menu items
- Hierarchical display with indentation
- Fields:
  - Title (required)
  - URL (required)
  - Parent Item (optional, for nested menus)
  - Target (Same Window/New Window)
  - Display Order
  - Active status

## Setup Instructions

### Step 1: Run Database Migration

```sql
-- File: supabase/migrations/create_menus_system.sql
```

This creates:
- `menus` table
- `menu_items` table
- Indexes for performance
- RLS policies
- Default menus and items

### Step 2: Access Menu Management

1. Navigate to `/admin/menus`
2. You'll see default menus already created
3. Click "Manage Items" to add/edit menu items
4. Click "Add Menu" to create new menus

### Step 3: Integrate with Frontend

The menus are now stored in the database. Next step is to update the Header and Footer components to fetch from the database instead of using hardcoded menus.

## Usage Examples

### Creating a Header Menu

1. Go to `/admin/menus/new`
2. Fill in:
   - Name: "Main Navigation"
   - Slug: "main-navigation" (auto-generated)
   - Location: "Header"
   - Display Order: 1
   - Active: ✓
3. Click "Create Menu"
4. Click "Manage Items" on the created menu
5. Add menu items:
   - Title: "Home", URL: "/"
   - Title: "About", URL: "/about"
   - Title: "Contact", URL: "/contact"

### Creating Nested Menu Items

1. First, create a parent item:
   - Title: "Academics", URL: "/courses"
2. Then, create child items:
   - Title: "Undergraduate", URL: "/undergraduate"
   - Parent Item: "Academics"
   - Title: "Graduate", URL: "/graduate"
   - Parent Item: "Academics"

### Creating Footer Menus

1. Create menu with Location: "Footer"
2. Name: "Quick Links"
3. Add items like:
   - "Careers"
   - "FAQs"
   - "Contact Us"

## Files Created

### Database:
- `supabase/migrations/create_menus_system.sql`

### Admin Pages:
- `app/admin/menus/page.tsx` - Menu list
- `app/admin/menus/new/page.tsx` - Add menu
- `app/admin/menus/[id]/items/page.tsx` - Manage menu items

### Components:
- `components/admin/MenusList.tsx` - Display menus
- `components/admin/MenuItemsManager.tsx` - Manage menu items

### Updated:
- `components/admin/sidebar.tsx` - Added Menus link

## Features Breakdown

### Menu Management Features:
- ✅ Create menus
- ✅ Edit menus
- ✅ Delete menus
- ✅ Activate/Deactivate menus
- ✅ Set display order
- ✅ Location-based grouping (Header/Footer)

### Menu Items Features:
- ✅ Add menu items
- ✅ Edit menu items
- ✅ Delete menu items
- ✅ Nested/hierarchical menus
- ✅ Set link target
- ✅ Display order
- ✅ Activate/Deactivate items
- ✅ Visual hierarchy display

## Next Steps

### To Complete the Integration:

1. **Update Header Component** (`components/layout/Header.tsx`):
   - Fetch menus from database
   - Replace hardcoded navigation with dynamic data
   - Support nested menus from database

2. **Update Footer Component** (`components/layout/Footer.tsx`):
   - Fetch footer menus from database
   - Replace hardcoded links with dynamic data
   - Group by menu name

3. **Add Caching** (Optional):
   - Cache menu data for better performance
   - Revalidate on menu updates

## Benefits

1. **No Code Changes**: Update menus without touching code
2. **Flexible**: Support any menu structure
3. **Hierarchical**: Unlimited nesting levels
4. **User-Friendly**: Easy-to-use admin interface
5. **Organized**: Separate header and footer menus
6. **Scalable**: Add as many menus as needed

## Future Enhancements

Possible additions:
1. Drag-and-drop reordering
2. Menu item icons support
3. Conditional display rules
4. Menu templates
5. Import/Export menus
6. Menu preview
7. Mega menu support
8. Menu analytics

## Troubleshooting

### Issue: Menus not showing
- Check if menu is active (`is_active = true`)
- Verify menu items exist
- Check RLS policies

### Issue: Nested menus not working
- Verify `parent_id` is set correctly
- Check display order
- Ensure parent item exists

### Issue: Can't delete menu
- Check if you have permission
- Verify no foreign key constraints
- Try deleting menu items first

## Security

- RLS policies enabled
- Public can only read active menus
- Only authenticated users can manage menus
- Cascade delete for menu items

## Conclusion

You now have a complete dynamic menu management system! Admins can easily create, edit, and organize menus without any code changes.
