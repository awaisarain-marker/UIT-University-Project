# Flexible Content System - Implementation Plan

## Goal
Add the same flexible content system (drag & drop, multiple headings/descriptions/images/points) to:
1. **Blog Posts**
2. **Courses**
3. **Events**

## What Will Be Added

### Features (Same as Faculty Profiles):
- ✅ **Drag & Drop** - Reorder content blocks by dragging
- ✅ **Multiple Headings** - Add unlimited section headings
- ✅ **Multiple Descriptions** - Add unlimited text paragraphs
- ✅ **Multiple Points** - Add numbered/bulleted lists
- ✅ **Images** - Add images with captions anywhere
- ✅ **Flexible Ordering** - Mix and match content types

### UI (Same as Faculty):
```
[Add Image] [Add Description] [Add Heading] [+ Add Point]

⋮⋮ [1] Point text...                    [×]
⋮⋮ Heading: Section Title               [×]
⋮⋮ Description: Paragraph...            [×]
⋮⋮ Image with caption                   [×]
```

## Implementation Steps

### Step 1: Create Reusable Component
**File:** `components/admin/FlexibleContentManager.tsx`
- Rename `FacultyTabManager` to be more generic
- Same functionality, works for any content type

### Step 2: Database Migrations

#### Blog Posts
```sql
ALTER TABLE blog_posts ADD COLUMN content_blocks JSONB;
UPDATE blog_posts SET content_blocks = '{"blocks": []}' WHERE content_blocks IS NULL;
```

#### Courses
```sql
ALTER TABLE courses ADD COLUMN content_blocks JSONB;
UPDATE courses SET content_blocks = '{"blocks": []}' WHERE content_blocks IS NULL;
```

#### Events
```sql
ALTER TABLE events ADD COLUMN content_blocks JSONB;
UPDATE events SET content_blocks = '{"blocks": []}' WHERE content_blocks IS NULL;
```

### Step 3: Update Admin Edit Pages

#### Blog Edit Page
**File:** `app/admin/blog/[id]/edit/page.tsx`
- Add "Content" tab
- Use `FlexibleContentManager` component
- Save to `content_blocks` column

#### Course Edit Page
**File:** `app/admin/courses/[id]/edit/page.tsx`
- Already has tabs (Overview, Courses, PEOs, Eligibility)
- Add "Detailed Content" tab
- Use `FlexibleContentManager` component

#### Event Edit Page
**File:** `app/admin/events/[id]/edit/page.tsx`
- Add "Content" tab
- Use `FlexibleContentManager` component
- Save to `content_blocks` column

### Step 4: Update Frontend Display Pages

#### Blog Post Page
**File:** `app/blog/[slug]/page.tsx`
- Render flexible content blocks
- Display images, headings, descriptions, points

#### Course Detail Page
**File:** `app/courses/[slug]/page.tsx`
- Add flexible content section
- Render blocks below existing content

#### Event Detail Page
**File:** `app/events/[slug]/page.tsx`
- Render flexible content blocks
- Display images, headings, descriptions, points

## Data Structure

Each content block:
```typescript
{
  id: string
  type: 'point' | 'heading' | 'description' | 'image'
  text: string
  order: number
  imageUrl?: string // for image blocks
}
```

Stored in database as:
```json
{
  "blocks": [
    { "id": "point-1", "type": "point", "text": "First point", "order": 0 },
    { "id": "heading-1", "type": "heading", "text": "Section Title", "order": 1 },
    { "id": "desc-1", "type": "description", "text": "Paragraph...", "order": 2 },
    { "id": "img-1", "type": "image", "text": "Caption", "imageUrl": "...", "order": 3 }
  ]
}
```

## Files to Create/Modify

### New Files:
1. `components/admin/FlexibleContentManager.tsx` - Reusable component
2. `supabase/migrations/add_flexible_content_to_blog.sql`
3. `supabase/migrations/add_flexible_content_to_courses.sql`
4. `supabase/migrations/add_flexible_content_to_events.sql`

### Files to Modify:
1. `app/admin/blog/[id]/edit/page.tsx` - Add content tab
2. `app/admin/courses/[id]/edit/page.tsx` - Add content tab
3. `app/admin/events/[id]/edit/page.tsx` - Add content tab
4. `app/blog/[slug]/page.tsx` - Render flexible content
5. `app/courses/[slug]/page.tsx` - Render flexible content
6. `app/events/[slug]/page.tsx` - Render flexible content

## Benefits

### For Blog Posts:
- Rich, structured content
- Mix text, images, and lists
- Better storytelling
- Professional layout

### For Courses:
- Detailed course descriptions
- Add syllabus sections
- Include images and diagrams
- Structured learning outcomes

### For Events:
- Event details with images
- Agenda with sections
- Speaker bios with photos
- Venue information

## Timeline

1. **Create reusable component** - 10 min
2. **Database migrations** - 5 min
3. **Update blog admin** - 15 min
4. **Update courses admin** - 15 min
5. **Update events admin** - 15 min
6. **Update frontend pages** - 20 min
7. **Testing** - 10 min

**Total: ~90 minutes**

## Testing Checklist

- [ ] Blog: Can add/edit/delete content blocks
- [ ] Blog: Drag & drop works
- [ ] Blog: Images upload and display
- [ ] Blog: Frontend renders correctly
- [ ] Courses: Can add/edit/delete content blocks
- [ ] Courses: Drag & drop works
- [ ] Courses: Images upload and display
- [ ] Courses: Frontend renders correctly
- [ ] Events: Can add/edit/delete content blocks
- [ ] Events: Drag & drop works
- [ ] Events: Images upload and display
- [ ] Events: Frontend renders correctly

## Notes

- Backward compatible with existing content
- Old content fields remain untouched
- New flexible content is optional
- Can migrate old content to new format later
