# How to Add Menu Items with Parent-Child (Dropdown) Support

## Step-by-Step Guide

### Step 1: Go to Menus Page
1. Navigate to: `http://localhost:3001/admin/menus`
2. You'll see a list of menus (Header Menus, Footer Menus)

### Step 2: Click on the Menu Icon (≡)
On the "Main Navigation" menu card, you'll see several icons:
- 👁️ (Eye icon) - View
- ≡ (Three lines icon) - **CLICK THIS ONE** ← Manage Items
- ✏️ (Edit icon) - Edit menu settings
- 🗑️ (Trash icon) - Delete

**Click the ≡ (three lines) icon** to manage menu items.

### Step 3: You'll See the Menu Items Manager
This page has TWO sections:

#### LEFT SIDE: Add Menu Item Form
```
┌─────────────────────────────────┐
│ Add Menu Item                   │
├─────────────────────────────────┤
│ Title *                         │
│ [Enter menu title]              │
│                                 │
│ URL *                           │
│ [Enter URL]                     │
│                                 │
│ Parent Item (for dropdown menus)│ ← THIS IS THE KEY!
│ [Dropdown selector]             │
│ ▼ None (Top Level)              │
│   Home                          │
│   About                         │
│   Admissions                    │
│   ...                           │
│                                 │
│ Target                          │
│ [Same Window ▼]                 │
│                                 │
│ Display Order                   │
│ [0]                             │
│                                 │
│ ☑ Active                        │
│                                 │
│ [Add Item]                      │
└─────────────────────────────────┘
```

#### RIGHT SIDE: Current Menu Items List
Shows all existing menu items with Edit/Delete buttons.

## Creating a Dropdown Menu

### Example: Create "Admissions" with Dropdown

#### Step 1: Create the Parent Item
1. **Title:** `Admissions`
2. **URL:** `/admissions`
3. **Parent Item:** Select `None (Top Level)` ← This makes it a top-level menu
4. **Display Order:** `6`
5. Click **Add Item**

#### Step 2: Create Child Items (These will appear in the dropdown)

**Child Item 1: Undergraduate**
1. **Title:** `Undergraduate`
2. **URL:** `/admissions/undergraduate`
3. **Parent Item:** Select `Admissions` ← THIS MAKES IT A DROPDOWN ITEM!
4. **Display Order:** `1`
5. Click **Add Item**

**Child Item 2: Graduate**
1. **Title:** `Graduate`
2. **URL:** `/admissions/graduate`
3. **Parent Item:** Select `Admissions` ← Same parent
4. **Display Order:** `2`
5. Click **Add Item**

**Child Item 3: Fee Structure**
1. **Title:** `Fee Structure`
2. **URL:** `/admissions/fee-structure`
3. **Parent Item:** Select `Admissions` ← Same parent
4. **Display Order:** `3`
5. Click **Add Item**

### Result on Website
When users hover over "Admissions" in the header, they'll see:
```
Admissions ▼
  ├─ Undergraduate
  ├─ Graduate
  └─ Fee Structure
```

## Troubleshooting

### "I don't see the Parent Item dropdown"
**Solution:** Make sure you're on the correct page:
- ✅ Correct: `/admin/menus/[menu-id]/items`
- ❌ Wrong: `/admin/menus/[menu-id]/edit`

The URL should end with `/items`, not `/edit`.

### "The Parent dropdown is empty"
**Solution:** 
1. First create at least one top-level menu item
2. Then you can select it as a parent for other items
3. Refresh the page if needed

### "I'm on the Edit Menu page"
If you see:
- Menu Name field
- Slug field
- Location dropdown
- "Need to add pages to this menu?" message

You're on the **Edit Menu** page. Click the **"Manage Menu Items"** button to go to the items page.

### "Menu not found" error
This means the menu ID in the URL doesn't exist. Go back to `/admin/menus` and click the correct menu's ≡ icon.

## Quick Reference

### To Create Top-Level Item:
- Parent Item: `None (Top Level)`

### To Create Dropdown Item:
- Parent Item: Select the parent menu item name

### To Create Nested Dropdown:
- Parent Item: Select a child item (creates grandchild)

## Visual Flow

```
/admin/menus
    ↓ (Click ≡ icon on a menu)
/admin/menus/[id]/items
    ↓ (Fill form on left side)
    ↓ (Select parent from dropdown)
    ↓ (Click Add Item)
Menu item created! ✓
```

## Alternative Access Method

If you can't find the ≡ icon:

1. Go to `/admin/menus`
2. Click the **Edit** (✏️) icon on "Main Navigation"
3. On the Edit Menu page, click **"Manage Menu Items"** button
4. You'll be taken to `/admin/menus/[id]/items`

## What You Should See

On the `/admin/menus/[id]/items` page, you should see:
- ✅ "Add Menu Item" form on the left
- ✅ "Parent Item (for dropdown menus)" dropdown
- ✅ List of current menu items on the right
- ✅ Hierarchical display showing parent → child relationships

If you don't see these, please share a screenshot of what you're seeing.
