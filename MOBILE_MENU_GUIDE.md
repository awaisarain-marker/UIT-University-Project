# Mobile Menu System Guide

## Overview
Your website now has separate menus for mobile and desktop devices:
- **Desktop**: Shows header navigation + bottom bar
- **Mobile**: Shows separate mobile menu in left drawer

## Setup

### 1. Run the Migration
Go to Supabase Dashboard → SQL Editor and run:
```sql
-- Copy and paste from: supabase/migrations/add_mobile_menu.sql
```

This creates:
- Mobile Menu location
- Default mobile menu items

### 2. Access Admin
Go to `/admin/menus`

You'll now see **4 sections**:
1. Header Menus (Desktop only)
2. Header Bottom Bar (Desktop only)
3. **Mobile Menu (Mobile only)** ← NEW!
4. Footer Menus

### 3. Manage Mobile Menu
1. Find "Mobile Menu" section
2. Click the menu icon (☰)
3. Add/edit/delete items
4. These items ONLY show on mobile devices

## How It Works

### Desktop (Laptop/PC):
- Shows main header navigation
- Shows bottom bar menu
- Mobile menu is hidden

### Mobile (Phone/Tablet):
- Hides desktop menus
- Shows hamburger icon
- Opens left drawer with mobile menu
- Separate menu items from desktop

## Creating Menu Items

### For Mobile Menu:
1. Go to `/admin/menus`
2. Find "Mobile Menu"
3. Click menu icon
4. Click "Add Item"
5. Create parent/child items as needed

### Example Mobile Menu Structure:
```
Mobile Menu
├─ Home
├─ About
│   ├─ Our Story
│   └─ Team
├─ Admissions
│   ├─ Undergraduate
│   ├─ Graduate
│   └─ How to Apply
├─ Academics
├─ Faculty
└─ Contact
```

## Features

### Mobile Drawer:
- ✅ Slides from left
- ✅ 320px wide
- ✅ Logo at top
- ✅ Close button (X)
- ✅ Separate menu items
- ✅ Dropdown support
- ✅ Dark overlay
- ✅ Smooth animations

### Admin:
- ✅ Separate mobile menu section
- ✅ Full CRUD operations
- ✅ Parent-child support
- ✅ Display order control
- ✅ Active/inactive toggle

## Benefits

### Why Separate Mobile Menu?
1. **Simplified Navigation**: Mobile users get streamlined menu
2. **Better UX**: Optimized for touch/small screens
3. **Different Content**: Show different links on mobile
4. **Flexibility**: Customize mobile experience

### Use Cases:
- Show fewer items on mobile
- Different order on mobile
- Mobile-specific links (e.g., "Call Us")
- Simplified structure for small screens

## Menu Locations

| Location | Shows On | Purpose |
|----------|----------|---------|
| Header | Desktop only | Main navigation |
| Header Bottom | Desktop only | Secondary navigation |
| Mobile | Mobile only | Mobile drawer menu |
| Footer | Both | Footer links |

## Troubleshooting

### Mobile menu not showing
1. Run the migration
2. Check menu is active in admin
3. Check menu items exist and are active
4. Test on actual mobile device or resize browser

### Desktop menus showing on mobile
- This is correct! Desktop menus are hidden on mobile
- Only mobile menu shows in the drawer

### Want same menu on both?
- Copy items from desktop menu to mobile menu
- Or create items in both locations

## Next Steps

1. **Run migration**: `add_mobile_menu.sql`
2. **Go to admin**: `/admin/menus`
3. **Find Mobile Menu**: Click menu icon
4. **Add items**: Create your mobile navigation
5. **Test**: Resize browser or use mobile device

Your mobile menu is now ready! 🎉
