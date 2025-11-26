# Pages Drag & Drop Guide

## Features

The Pages Management system now includes:

### 1. Drag & Drop Reordering
- **Grab and drag** any page using the grip icon (⋮⋮) on the left
- **Drop** on another page to reorder
- **Automatic save** - changes are saved to database immediately
- **Visual feedback** - dragged item becomes semi-transparent

### 2. Collapsible Parent Pages
- **Expand/Collapse** - Click the arrow icon (▶/▼) next to parent pages
- **Hide children** - Collapse parent pages to hide their child pages
- **Clean view** - Focus on specific sections by collapsing others

### 3. Visual Hierarchy
- **Parent Pages** - Purple badge, no indentation
- **Child Pages** - Blue badge, indented with arrow indicator
- **Grip Icon** - Shows on hover, indicates draggable items
- **Sort Order** - Displayed in the "Order" column

## How to Use

### Reordering Pages

1. **Hover** over a page row
2. **Click and hold** the grip icon (⋮⋮) on the left
3. **Drag** the page up or down
4. **Drop** it in the desired position
5. **Release** - the order is automatically saved

### Collapsing/Expanding

1. **Look for** parent pages with child pages
2. **Click** the arrow icon (▶ or ▼) next to the page title
3. **Collapsed** (▶) - Child pages are hidden
4. **Expanded** (▼) - Child pages are visible

### Visual Indicators

| Icon | Meaning |
|------|---------|
| ⋮⋮ (GripVertical) | Drag handle - click and drag to reorder |
| ▼ (ChevronDown) | Parent is expanded - click to collapse |
| ▶ (ChevronRight) | Parent is collapsed - click to expand |
| → (ChevronRight small) | Child page indicator |

## Example Workflow

### Organizing News & Media Section

1. **Find** "News Media" parent page
2. **Expand** by clicking the ▼ icon
3. **See** all child pages:
   - Media / Press
   - News & Events
   - Newsletter
   - Views & Opinions
   - Bio Symposium 2023
4. **Reorder** by dragging child pages
5. **Collapse** when done to clean up the view

### Moving a Page

**Before:**
```
1. About
2. Admissions
3. News Media
   - Newsletter
   - Media Press
4. Contact
```

**To move "Newsletter" above "Media Press":**
1. Expand "News Media"
2. Drag "Newsletter" grip icon
3. Drop it above "Media Press"

**After:**
```
1. About
2. Admissions
3. News Media
   - Newsletter
   - Media Press
4. Contact
```

## Technical Details

### Database Updates
- Changes are saved to the `pages` table
- `sort_order` column is updated for all affected pages
- Updates happen in real-time via Supabase

### State Management
- Collapsed state is maintained in component state
- Persists during the session
- Resets on page refresh

### Performance
- Optimistic UI updates for smooth experience
- Database updates happen in background
- Page refresh after successful update

## Tips

1. **Collapse unused sections** to focus on what you're working on
2. **Use sort order** to see the current ordering
3. **Drag parent pages** to move entire sections
4. **Visual feedback** - watch for the semi-transparent effect while dragging
5. **Refresh** the page if order doesn't update correctly

## Troubleshooting

### Pages won't drag
- Make sure you're clicking the grip icon (⋮⋮)
- Check that JavaScript is enabled
- Try refreshing the page

### Order not saving
- Check your internet connection
- Verify Supabase credentials in `.env.local`
- Check browser console for errors

### Children not showing
- Click the expand arrow (▶) next to parent page
- Verify the page has `parent_id` set correctly
- Check that child pages exist in database

## Related Documentation

- [Pages Admin Guide](./PAGES_ADMIN_GUIDE.md)
- [Auto-Sync Pages](./AUTO_SYNC_PAGES.md)
- [Menu Drag & Drop](../MENU_DRAG_DROP_GUIDE.md)
