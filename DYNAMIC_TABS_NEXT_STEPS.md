# Dynamic Tabs - Next Steps

## ✅ What's Done:
- 2-column table feature added to flexible content
- Works in faculty profiles and courses
- Drag & drop, add/remove rows

## 🔄 What's Next: Dynamic Tabs System

### Current Situation:
Courses have fixed tabs: Overview, Courses, PEO's & PLO's, Eligibility

### Goal:
- Add/remove tabs dynamically
- Each course can have different tabs
- Some courses might not need PEO's tab, so remove it

### Implementation Needed:

#### 1. Database Schema
```sql
ALTER TABLE courses ADD COLUMN active_tabs JSONB DEFAULT '["overview", "courses", "peos-plos", "eligibility"]'::jsonb;
```

#### 2. Tab Configuration
Store which tabs are active for each course:
```json
{
  "tabs": [
    { "id": "overview", "name": "Overview", "order": 0 },
    { "id": "courses", "name": "Courses", "order": 1 },
    { "id": "peos-plos", "name": "PEO's & PLO's", "order": 2 },
    { "id": "eligibility", "name": "Eligibility", "order": 3 }
  ]
}
```

#### 3. UI Changes
- Add "+" button next to tabs to add new tab
- Add "×" button on each tab to remove it
- Drag tabs to reorder

#### 4. Custom Tabs
Allow creating custom tabs:
- Click "+ Add Tab"
- Enter tab name
- Tab gets flexible content system automatically

### Benefits:
- Flexible course structure
- Only show relevant tabs
- Custom tabs for special courses
- Cleaner admin interface

## Current Status:

**Table Feature:** ✅ Complete and working!

**Dynamic Tabs:** 📋 Planned (requires more implementation time)

## To Test Table Feature Now:

1. Run migration:
```sql
-- Already done in previous migration
```

2. Go to `/admin/courses/[id]/edit`
3. Click **Overview** tab
4. Click **"Add Table"** button (red)
5. Enter column headers
6. Add rows
7. Drag to reorder
8. Save!

## Next Session:
We can implement the dynamic tabs system when you're ready. It will take about 45-60 minutes to implement properly.

For now, you have:
- ✅ Flexible content (headings, descriptions, points, images)
- ✅ 2-column tables with dynamic rows
- ✅ Drag & drop reordering
- ✅ Works in faculty profiles
- ✅ Works in courses Overview tab

The table feature is ready to use! 🎉
