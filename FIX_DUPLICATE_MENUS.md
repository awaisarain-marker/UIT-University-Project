# Fix Duplicate Menu Items

## Problem
You're seeing duplicate menu items in the header (Home, About, etc. appearing twice).

## Solution

### Option 1: Run the Cleanup Migration (Recommended)
```bash
# This will remove duplicate menu items from the database
supabase migration up --local
```

Or if you want to reset everything:
```bash
supabase db reset
```

### Option 2: Manual Cleanup via Admin Panel
1. Go to http://localhost:3001/admin/menus
2. Click on "Header Menu" → "Manage Items"
3. Delete the duplicate items manually
4. Keep only one of each menu item

## What Was Fixed

### 1. Parent Dropdown Now Shows ALL Items
**Before:** The "Parent Item" dropdown only showed top-level items
**After:** Now shows ALL menu items so you can create nested dropdowns

The dropdown now displays:
- Top-level items (no prefix)
- Child items (with ↳ prefix)

### 2. Better Labels
Added helpful text: "Select a parent to make this item appear in a dropdown menu"

## How to Create Dropdown Menus

### Example: Create an Admissions Dropdown

1. **Go to:** `/admin/menus/[menu-id]/items`

2. **Create Parent Item:**
   - Title: `Admissions`
   - URL: `/admissions`
   - Parent Item: `None (Top Level)`
   - Display Order: `6`
   - Click "Add Item"

3. **Create Child Items:**
   
   **Undergraduate:**
   - Title: `Undergraduate`
   - URL: `/admissions/undergraduate`
   - Parent Item: Select `Admissions` ← This makes it a dropdown item!
   - Display Order: `1`
   - Click "Add Item"
   
   **Graduate:**
   - Title: `Graduate`
   - URL: `/admissions/graduate`
   - Parent Item: Select `Admissions`
   - Display Order: `2`
   - Click "Add Item"
   
   **Fee Structure:**
   - Title: `Fee Structure`
   - URL: `/admissions/fee-structure`
   - Parent Item: Select `Admissions`
   - Display Order: `3`
   - Click "Add Item"

4. **Result:** When you hover over "Admissions" in the header, you'll see a dropdown with:
   - Undergraduate
   - Graduate
   - Fee Structure

## Creating Multi-Level Dropdowns

You can even create dropdowns within dropdowns!

**Example: Admissions → Programs → Undergraduate Programs**

1. Create parent: `Admissions` (parent_id = null)
2. Create child: `Programs` (parent_id = Admissions)
3. Create grandchild: `Undergraduate Programs` (parent_id = Programs)

When you hover:
```
Admissions →
  Programs →
    Undergraduate Programs
    Graduate Programs
  Fee Structure
  FAQs
```

## Verification

After fixing, check:
1. ✅ No duplicate items in the header
2. ✅ Dropdown menus appear on hover
3. ✅ Parent dropdown in admin shows all items
4. ✅ Child items are indented with ↳ symbol
