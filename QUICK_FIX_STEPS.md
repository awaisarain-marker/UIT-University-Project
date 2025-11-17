# Quick Fix Steps - Add Menu Items with Dropdown Support

## The Issue
You're seeing "Menu not found" or can't find where to add menu items with parent-child relationships.

## The Solution - Follow These Exact Steps:

### Step 1: Go to Admin Menus
Navigate to: `http://localhost:3001/admin/menus`

### Step 2: Click the Menu Icon (≡)
On the "Main Navigation" card, you'll see 4 icons:
- 👁️ Eye icon
- **≡ Three lines icon** ← CLICK THIS ONE!
- ✏️ Edit icon  
- 🗑️ Trash icon

Click the **≡ (three lines)** icon.

### Step 3: You Should Now See the Menu Items Manager
URL should be: `http://localhost:3001/admin/menus/[some-id]/items`

You should see:
- **LEFT SIDE:** A form with these fields:
  - Title *
  - URL *
  - **Parent Item (for dropdown menus)** ← THIS IS THE DROPDOWN!
  - Target
  - Display Order
  - Active checkbox
  - Add Item button

- **RIGHT SIDE:** List of current menu items

### Step 4: Create a Dropdown Menu

#### Create Parent Item First:
1. Title: `Admissions`
2. URL: `/admissions`
3. Parent Item: Select `None (Top Level)`
4. Click "Add Item"

#### Create Child Items (Dropdown Items):
1. Title: `Undergraduate`
2. URL: `/admissions/undergraduate`
3. Parent Item: Select `Admissions` ← THIS MAKES IT A DROPDOWN!
4. Click "Add Item"

Repeat for more children:
- Graduate → parent: Admissions
- Fee Structure → parent: Admissions
- FAQs → parent: Admissions

### Result
On your website, hovering over "Admissions" will show a dropdown with all child items.

## If You See "Menu not found"

### Option 1: Restart the Dev Server
```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### Option 2: Check the Database
The menu might not exist. Go back to `/admin/menus` and verify you have a "Main Navigation" or "Header Menu".

### Option 3: Create a New Menu
1. Go to `/admin/menus`
2. Click "Add Menu"
3. Name: "Header Menu"
4. Location: "Header"
5. Click "Create Menu"
6. Then click the ≡ icon on the new menu

## Visual Guide

```
/admin/menus
    ↓
[Click ≡ icon on Main Navigation]
    ↓
/admin/menus/[id]/items
    ↓
[See form on left with "Parent Item" dropdown]
    ↓
[Fill form and select parent]
    ↓
[Click Add Item]
    ↓
Done! ✓
```

## What the Parent Dropdown Should Show

After the fix, the "Parent Item" dropdown should display:
```
None (Top Level)
Home
About
  ↳ About UIT
  ↳ Our Mission
Admissions
  ↳ Undergraduate
  ↳ Graduate
Courses
...
```

Items with ↳ are child items. You can select ANY item as a parent.

## Still Not Working?

1. **Clear browser cache:** Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Check console for errors:** Press F12 and look at the Console tab
3. **Verify you're logged in:** Make sure you're authenticated as admin
4. **Check the URL:** Should end with `/items`, not `/edit`

## Screenshot Checklist

When you're on the correct page, you should see:
- ✅ "Add Menu Item" heading on the left
- ✅ "Parent Item (for dropdown menus)" label
- ✅ Dropdown selector below it
- ✅ "Menu Items (X)" heading on the right
- ✅ List of current items with Edit/Delete buttons

If you don't see these, you're on the wrong page!
