# Menu Drag & Drop Feature Guide

## Features Implemented

### 1. **Auto-Increment Display Order**
When adding a new menu item, the `display_order` field automatically sets to the next available number.

**How it works:**
- Finds the maximum `display_order` in existing items
- Sets new item's order to `max + 1`
- New items automatically appear at the bottom

**Location:** `app/admin/menus/[id]/items/new/page.tsx`

### 2. **Drag & Drop Reordering**
Reorder menu items by dragging and dropping rows in the table.

**Features:**
- Visual feedback (opacity change while dragging)
- Cursor changes (grab → grabbing)
- Drag handle icon on each row
- Works with nested items (maintains hierarchy)
- Auto-saves to database

**How to use:**
1. Click and hold on any row
2. Drag to desired position
3. Release to drop
4. Order updates automatically

**Location:** `components/admin/DraggableMenuItems.tsx`

### 3. **Admin Sidebar Menu Link**
"Menus" link already exists in the admin sidebar for easy access.

**Location:** `components/admin/AdminSidebar.tsx`

---

## Technical Implementation

### Auto-Increment Order

```typescript
// In fetchParentItems function
const maxOrder = data.length > 0 
  ? Math.max(...data.map(item => item.display_order || 0)) 
  : -1;
setFormData(prev => ({ ...prev, display_order: maxOrder + 1 }));
```

### Drag & Drop Logic

**1. Drag Start:**
```typescript
const handleDragStart = (e: React.DragEvent, itemId: string) => {
  setDraggedItem(itemId)
  e.dataTransfer.effectAllowed = 'move'
}
```

**2. Drag Over:**
```typescript
const handleDragOver = (e: React.DragEvent) => {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'move'
}
```

**3. Drop & Reorder:**
```typescript
const handleDrop = async (e: React.DragEvent, targetItemId: string) => {
  // 1. Find dragged and target indices
  // 2. Reorder array
  // 3. Update display_order for all items
  // 4. Save to database
  // 5. Refresh UI
}
```

---

## User Experience

### Visual Indicators

1. **Drag Handle Icon:**
   - Horizontal lines icon (≡) on left side of each row
   - Indicates draggable area

2. **Cursor Changes:**
   - Default: `cursor-move`
   - Grabbing: `cursor-grab`
   - Active drag: `cursor-grabbing`

3. **Opacity Feedback:**
   - Dragged item: 50% opacity
   - Other items: Normal opacity

4. **Hover Effect:**
   - Rows highlight on hover (`hover:bg-gray-50`)

### Hierarchy Preservation

- Drag & drop maintains parent-child relationships
- Visual indentation shows nesting levels
- Color-coded badges indicate item type:
  - Purple = Parent
  - Blue = Child
  - Orange = Sub-child

---

## Database Updates

When items are reordered:

```typescript
// Update all items with new display_order
for (const update of updates) {
  await supabase
    .from('menu_items')
    .update({ display_order: update.display_order })
    .eq('id', update.id)
}
```

**Note:** All items in the menu get updated to maintain consistent ordering.

---

## Files Modified/Created

### Created:
- `components/admin/DraggableMenuItems.tsx` - Drag & drop component

### Modified:
- `app/admin/menus/[id]/items/page.tsx` - Uses DraggableMenuItems
- `app/admin/menus/[id]/items/new/page.tsx` - Auto-increment order

### Existing (No changes needed):
- `components/admin/AdminSidebar.tsx` - Already has Menus link

---

## Future Enhancements

Potential improvements:

1. **Drag Between Levels:**
   - Allow changing parent while dragging
   - Visual drop zones for different parents

2. **Bulk Reordering:**
   - Select multiple items
   - Move all at once

3. **Undo/Redo:**
   - Revert order changes
   - History of modifications

4. **Keyboard Shortcuts:**
   - Arrow keys to move items
   - Ctrl+Z for undo

5. **Visual Animations:**
   - Smooth transitions
   - Animated reordering

---

## Troubleshooting

### Items not reordering?
- Check browser console for errors
- Verify database connection
- Ensure `display_order` column exists

### Drag not working?
- Clear browser cache
- Restart dev server
- Check if JavaScript is enabled

### Order not saving?
- Check Supabase permissions
- Verify RLS policies allow updates
- Check network tab for failed requests
