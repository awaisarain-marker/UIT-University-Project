# Admin Menu Management Guide

## Accessing Menu Management

1. Go to: `http://localhost:3001/admin/menus`
2. Click on "Header Menu" → "Manage Items"
3. You'll see the menu items management page

## Interface Layout

The page has 2 sections:

### Left Side: Add/Edit Form
```
┌─────────────────────────────────┐
│ Add Menu Item                   │
├─────────────────────────────────┤
│ Title *                         │
│ [Input field]                   │
│                                 │
│ URL *                           │
│ [Input field]                   │
│                                 │
│ Parent Item (for dropdown menus)│
│ [Dropdown with ALL items]       │
│ ↓ None (Top Level)              │
│   Home                          │
│   About                         │
│     ↳ About UIT                 │
│     ↳ Our Mission               │
│   Admissions                    │
│   ...                           │
│                                 │
│ Select a parent to make this    │
│ item appear in a dropdown menu  │
│                                 │
│ Target                          │
│ [Same Window / New Window]      │
│                                 │
│ Display Order                   │
│ [Number input]                  │
│                                 │
│ ☑ Active                        │
│                                 │
│ [Add Item Button]               │
└─────────────────────────────────┘
```

### Right Side: Menu Items List
```
┌─────────────────────────────────────────────┐
│ Menu Items (12)                             │
├─────────────────────────────────────────────┤
│ ≡ Home                                      │
│   /                                         │
│                              [Edit] [Delete]│
├─────────────────────────────────────────────┤
│ ≡ ▶ Admissions                              │
│   /admissions                               │
│                              [Edit] [Delete]│
│   ├─ ≡ Undergraduate                        │
│   │    /admissions/undergraduate            │
│   │                          [Edit] [Delete]│
│   ├─ ≡ Graduate                             │
│   │    /admissions/graduate                 │
│   │                          [Edit] [Delete]│
│   └─ ≡ Fee Structure                        │
│        /admissions/fee-structure            │
│                              [Edit] [Delete]│
└─────────────────────────────────────────────┘
```

## Key Features Now Available

### ✅ Parent Dropdown Shows ALL Items
The "Parent Item" dropdown now displays:
- **Top-level items** (no prefix) - e.g., "Home", "About", "Admissions"
- **Child items** (with ↳ prefix) - e.g., "↳ About UIT", "↳ Undergraduate"

This allows you to:
- Create top-level items (select "None")
- Create dropdown items (select any parent)
- Create nested dropdowns (select a child as parent)

### ✅ Visual Hierarchy
The right side shows the menu structure with:
- Indentation for child items
- ▶ icon for items with children
- Clear parent-child relationships

### ✅ Helpful Labels
- "Parent Item (for dropdown menus)" - Clear purpose
- "Select a parent to make this item appear in a dropdown menu" - Instructions

## Common Tasks

### Create a Simple Menu Item
1. Title: "Contact"
2. URL: "/contact"
3. Parent Item: "None (Top Level)"
4. Click "Add Item"

### Create a Dropdown Menu
1. **First, create the parent:**
   - Title: "Admissions"
   - URL: "/admissions"
   - Parent Item: "None (Top Level)"
   - Click "Add Item"

2. **Then, create children:**
   - Title: "Undergraduate"
   - URL: "/admissions/undergraduate"
   - Parent Item: Select "Admissions" ← KEY STEP!
   - Click "Add Item"

### Edit an Existing Item
1. Click the [Edit] button next to the item
2. Form fills with current values
3. Make changes
4. Click "Update"

### Change Item Order
1. Edit the item
2. Change "Display Order" number
3. Lower numbers appear first
4. Click "Update"

### Make Item Inactive (Hide)
1. Edit the item
2. Uncheck "Active"
3. Click "Update"
4. Item won't show on the website but stays in database

## Troubleshooting

### "I don't see the Parent dropdown"
- Make sure you're on the correct page: `/admin/menus/[id]/items`
- The form should be on the left side

### "Parent dropdown only shows top-level items"
- The component has been updated
- Refresh the page (Ctrl+F5 or Cmd+Shift+R)
- You should now see ALL items with ↳ prefix for children

### "I see duplicate menu items"
Run the cleanup:
```bash
cd supabase
supabase migration up --local
```

Or manually delete duplicates from the admin panel.

## Example: Complete Admissions Menu

Here's how to create a full Admissions dropdown:

```
Admissions (parent_id: null)
├─ Information (parent_id: Admissions)
├─ Undergraduate (parent_id: Admissions)
├─ Graduate (parent_id: Admissions)
├─ Fee Structure (parent_id: Admissions)
├─ Scholarship Policy (parent_id: Admissions)
└─ FAQs (parent_id: Admissions)
```

**Steps:**
1. Create "Admissions" with parent = "None"
2. Create each child with parent = "Admissions"
3. Set display_order: 1, 2, 3, 4, 5, 6

**Result on website:**
Hover over "Admissions" → See dropdown with all 6 items
