# Header Bottom Bar - Setup Guide

## What is it?
A red navigation bar that appears below the main header navigation, similar to the one in your screenshot.

## Setup Steps

### 1. Run the Migration
Go to Supabase Dashboard → SQL Editor and run:
```sql
-- Copy and paste from: supabase/migrations/add_header_bottom_menu.sql
```

This will create:
- A new menu called "Header Bottom Menu"
- Default menu items (Undergraduate Programs, Graduate Programs, etc.)

### 2. Access Admin Panel
Go to: `/admin/menus`

You'll now see three sections:
1. **Header Menus (Main Navigation)** - The main top menu
2. **Header Bottom Bar** - The red bar below (NEW!)
3. **Footer Menus** - Footer navigation

### 3. Manage Bottom Bar Items
1. Find "Header Bottom Menu" in the "Header Bottom Bar" section
2. Click the menu icon (☰) to manage items
3. You'll see the default items already added

### 4. Add New Items

**For Parent Items (Top-level):**
1. Click "Add Item"
2. Fill in:
   - **Title**: "Admissions"
   - **URL**: "/admissions"
   - **Parent**: "None (Top-level item)"
   - **Target**: "Same Tab"
   - **Display Order**: 1
3. Click "Create Item"

**For Child Items (Dropdown):**
1. Click "Add Item"
2. Fill in:
   - **Title**: "Undergraduate Programs"
   - **URL**: "/admissions/undergraduate"
   - **Parent**: "Admissions" (select from dropdown)
   - **Target**: "Same Tab"
   - **Display Order**: 1
3. Click "Create Item"

### 5. Edit/Delete Items
- Click the edit icon (✏️) to modify an item
- Click the trash icon (🗑️) to delete an item
- Toggle active/inactive status

## Features

### Bottom Bar Characteristics:
- ✅ White background with border
- ✅ Gray text with primary color on hover
- ✅ Centered items
- ✅ Supports dropdowns (parent-child relationships)
- ✅ Shows below main header (not fixed)
- ✅ Pulls items from database
- ✅ Full dropdown support like main navigation

### Admin Features:
- ✅ Create/Edit/Delete items
- ✅ Control display order
- ✅ Toggle active/inactive
- ✅ Set custom URLs
- ✅ Choose link target (same tab/new tab)

## Example Menu Structure

### Simple (No Dropdowns)
```
Header Bottom Menu
├─ Undergraduate Programs (/admissions/undergraduate)
├─ Graduate Programs (/admissions/graduate)
├─ Admission Test Results (/admissions/admission-test-results)
└─ Scholarship Policy (/admissions/scholarship-policy)
```

### With Dropdowns (Parent-Child)
```
Header Bottom Menu
├─ Admissions (parent)
│   ├─ Undergraduate Programs (child)
│   ├─ Graduate Programs (child)
│   └─ How to Apply (child)
├─ Programs (parent)
│   ├─ Engineering (child)
│   ├─ Computer Science (child)
│   └─ Business (child)
└─ Resources (parent)
    ├─ Downloads (child)
    ├─ FAQs (child)
    └─ Contact (child)
```

## Customization

### Change Background Color
Edit `components/layout/BottomNavBar.tsx`:
```tsx
<div className="bg-white border-b border-gray-200 shadow-sm">
```
Change `bg-white` to your desired color (e.g., `bg-primary` for blue).

### Change Text Color
Edit the link classes:
```tsx
className="text-gray-700 hover:text-primary"
```
Change to your preferred colors.

### Add Icons
Update the menu item to include an icon field, then modify the component to display it.

## Troubleshooting

### Bottom bar not showing
1. Check if menu exists: Go to `/admin/menus`
2. Verify menu is active
3. Check if menu items exist and are active
4. Clear browser cache

### Items in wrong order
1. Go to menu items page
2. Edit each item
3. Set display_order (lower numbers first)
4. Save changes

### Menu not in admin
1. Run the migration: `add_header_bottom_menu.sql`
2. Refresh the admin page
3. Check Supabase for the menu

## What's Different from Main Navigation?

| Feature | Main Navigation | Bottom Bar |
|---------|----------------|------------|
| Dropdowns | ✅ Yes | ✅ Yes |
| Mobile | ✅ Shows | ✅ Shows |
| Background | White/Transparent | White with border |
| Position | Fixed at top | Below main nav |
| Parent Items | ✅ Supported | ✅ Supported |
| Fixed Position | ✅ Yes | ❌ No (scrolls with page) |

## Next Steps

1. **Run the migration** to create the menu
2. **Go to `/admin/menus`** to see it
3. **Click menu icon** to manage items
4. **Add/edit items** as needed
5. **View on frontend** to see the red bar

Your header bottom bar is now ready! 🎉
