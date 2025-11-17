# Faculty Profile System - Complete Implementation Guide

## ✅ What's Been Created

A complete faculty profile system with **5 dynamic tabs**, where each tab has:
- **Heading** (editable)
- **Description** (editable textarea)
- **List Items** (add/remove with numbered badges)

Similar to: https://uitu.edu.pk/amir-khan/

## Files Created/Modified

### 1. Database Migration
**File:** `supabase/migrations/add_faculty_profile_tabs.sql`

Adds 5 JSONB columns to the `instructors` table:
- `overview_data`
- `membership_data`
- `research_data`
- `courses_taught_data`
- `publications_data`
- `slug` (for URL-friendly profiles)

### 2. Reusable Tab Manager Component
**File:** `components/admin/FacultyTabManager.tsx`

A reusable component for managing tab content with:
- Heading input
- Description textarea
- Add/Remove list items
- Numbered badges with customizable colors
- Drag handles for future reordering

### 3. Updated Admin Edit Page
**File:** `app/admin/faculty/[id]/edit/page.tsx`

Added 6 tabs:
1. **Basic Info** - Name, email, phone, bio, photo, slug
2. **Overview** - General information (Blue badges)
3. **Membership** - Professional memberships (Green badges)
4. **Research** - Research interests (Purple badges)
5. **Courses** - Courses taught (Orange badges)
6. **Publications** - Publications and conferences (Red badges)

### 4. Frontend Profile Page
**File:** `app/faculty/[slug]/page.tsx`

Public-facing faculty profile page with:
- Header section (photo, name, contact info)
- 5 tabs with dynamic content
- Responsive design
- SEO metadata
- Smooth scrolling navigation

## Tab Configurations

### 1. Overview Tab
- **Badge Color:** Blue (`bg-blue-600`)
- **Item Label:** "Point"
- **Purpose:** General background, education, achievements
- **Example Items:**
  - "PhD in Computer Science from MIT, 2015"
  - "10+ years of teaching experience in AI and Machine Learning"
  - "Published 50+ research papers in top-tier conferences"

### 2. Membership and Affiliation Tab
- **Badge Color:** Green (`bg-green-600`)
- **Item Label:** "Membership"
- **Purpose:** Professional memberships and affiliations
- **Example Items:**
  - "IEEE Senior Member since 2015"
  - "ACM Professional Member"
  - "Pakistan Engineering Council (PEC) Registered Engineer"

### 3. Research Interests Tab
- **Badge Color:** Purple (`bg-purple-600`)
- **Item Label:** "Research Area"
- **Purpose:** Areas of research and expertise
- **Example Items:**
  - "Machine Learning and Artificial Intelligence"
  - "Computer Vision and Image Processing"
  - "Natural Language Processing"

### 4. Courses Taught Tab
- **Badge Color:** Orange (`bg-orange-600`)
- **Item Label:** "Course"
- **Purpose:** List of courses taught
- **Example Items:**
  - "CS-101: Introduction to Programming"
  - "CS-301: Data Structures and Algorithms"
  - "CS-501: Machine Learning and Deep Learning"

### 5. Publications and Conferences Tab
- **Badge Color:** Red (`bg-red-600`)
- **Item Label:** "Publication"
- **Purpose:** Research publications and conference presentations
- **Example Items:**
  - "Deep Learning for Image Classification, IEEE CVPR 2023"
  - "Natural Language Processing with Transformers, ACL 2022"
  - "Book Chapter: AI in Healthcare, Springer 2021"

## How to Use

### Step 1: Run the Database Migration

```bash
cd supabase
supabase migration up --local
```

This will:
- Add 5 new JSONB columns to the `instructors` table
- Add `slug` column for URL-friendly profiles
- Generate slugs for existing faculty members

### Step 2: Edit Faculty Member in Admin

1. Go to `/admin/faculty`
2. Click "Edit" on any faculty member
3. You'll see 6 tabs at the top

#### Basic Info Tab
- Fill in name, email, phone, specialization
- Upload faculty photo
- **Slug** is auto-generated from name (e.g., "john-doe")
- Profile will be accessible at `/faculty/john-doe`

#### Overview Tab
1. Enter **Heading** (e.g., "Overview")
2. Enter **Description** (brief overview paragraph)
3. Click **"Add Point"** to add list items
4. Enter text for each point
5. Click trash icon to remove items

#### Other Tabs (Membership, Research, Courses, Publications)
Same process as Overview tab:
1. Enter heading
2. Enter description
3. Add list items
4. Remove items as needed

### Step 3: Save and View Profile

1. Click **"Update Faculty Member"** button
2. Wait for success message
3. Visit `/faculty/[slug]` to see the public profile

## Frontend Profile Page Features

### Header Section
- Faculty photo (circular, 160x160px)
- Full name (large heading)
- Specialization with icon
- Email and phone (clickable links)
- Bio paragraph
- Years of experience badge

### Tabs Section
- 5 tabs with smooth navigation
- Each tab shows:
  - Custom heading
  - Description paragraph
  - Numbered list items with colored badges
- Responsive design (mobile-friendly)
- Smooth scrolling to sections

### SEO Features
- Dynamic page title: "[Name] - Faculty Profile"
- Meta description from bio
- Static generation for fast loading

## Data Structure

Each tab stores data in this format:

```json
{
  "heading": "Overview",
  "description": "Brief description paragraph...",
  "items": [
    {
      "id": "item-1234567890",
      "text": "First point or item..."
    },
    {
      "id": "item-1234567891",
      "text": "Second point or item..."
    }
  ]
}
```

## Example Usage

### Creating a Complete Faculty Profile

**Basic Info:**
- Name: Dr. John Smith
- Email: john.smith@uitu.edu.pk
- Phone: +92-21-111-978-275
- Specialization: Computer Science
- Slug: dr-john-smith
- Bio: "Dr. John Smith is a Professor of Computer Science..."
- Years of Experience: 15

**Overview Tab:**
- Heading: "Overview"
- Description: "Dr. Smith has extensive experience in AI research..."
- Items:
  1. "PhD in Computer Science from Stanford University, 2008"
  2. "15+ years of teaching and research experience"
  3. "Published 60+ papers in top-tier conferences"

**Membership Tab:**
- Heading: "Professional Memberships"
- Description: "Active member of several professional organizations..."
- Items:
  1. "IEEE Senior Member since 2012"
  2. "ACM Professional Member"
  3. "Pakistan Engineering Council Registered"

**Research Tab:**
- Heading: "Research Interests"
- Description: "Primary research focus on artificial intelligence..."
- Items:
  1. "Machine Learning and Deep Learning"
  2. "Computer Vision"
  3. "Natural Language Processing"

**Courses Tab:**
- Heading: "Courses Taught"
- Description: "Currently teaching undergraduate and graduate courses..."
- Items:
  1. "CS-101: Introduction to Programming"
  2. "CS-401: Machine Learning"
  3. "CS-601: Advanced AI"

**Publications Tab:**
- Heading: "Selected Publications"
- Description: "Recent publications in top conferences and journals..."
- Items:
  1. "Deep Learning for Medical Imaging, IEEE CVPR 2023"
  2. "Transformer Models for NLP, ACL 2022"
  3. "AI in Healthcare, Springer Book Chapter 2021"

## Customization Options

### Changing Badge Colors

Edit `components/admin/FacultyTabManager.tsx`:

```typescript
const badgeColors = {
  blue: 'bg-blue-600',
  green: 'bg-green-600',
  purple: 'bg-purple-600',
  orange: 'bg-orange-600',
  red: 'bg-red-600',
  // Add more colors:
  teal: 'bg-teal-600',
  indigo: 'bg-indigo-600',
}
```

### Adding More Tabs

1. Add new column to database:
```sql
ALTER TABLE instructors ADD COLUMN new_tab_data JSONB DEFAULT '{"heading": "New Tab", "description": "", "items": []}'::jsonb;
```

2. Add state in edit page:
```typescript
const [newTabData, setNewTabData] = useState<TabData>({
  heading: 'New Tab',
  description: '',
  items: []
})
```

3. Add tab button and content in edit page
4. Add section in frontend profile page

### Styling Customization

Frontend profile page uses Tailwind CSS. Customize in `app/faculty/[slug]/page.tsx`:

- Header background: `bg-white`
- Badge colors: `bg-blue-600`, `bg-green-600`, etc.
- Text colors: `text-gray-900`, `text-gray-700`
- Spacing: `p-6`, `mb-4`, `gap-3`

## Troubleshooting

### "Slug already exists" error
- Each faculty member needs a unique slug
- Manually edit the slug to make it unique
- Example: "john-smith-2", "john-smith-cs"

### Tab data not saving
- Check browser console for errors
- Verify database migration ran successfully
- Check that JSONB columns exist in `instructors` table

### Profile page not found (404)
- Verify slug is set in admin
- Check that slug matches URL
- Run `generateStaticParams` by rebuilding the app

### Images not displaying
- Verify image URL is correct
- Check Supabase storage permissions
- Ensure image is publicly accessible

## Next Steps

### Enhancements You Can Add:

1. **Rich Text Editor**
   - Replace textarea with TinyMCE or Quill
   - Allow formatting in descriptions

2. **Drag and Drop Reordering**
   - Use `react-beautiful-dnd` library
   - Allow reordering list items

3. **Image Upload for Publications**
   - Add image field to publication items
   - Display thumbnails in frontend

4. **Search and Filter**
   - Add search in publications tab
   - Filter by year or type

5. **Export to PDF**
   - Add "Download CV" button
   - Generate PDF from profile data

6. **Social Media Links**
   - Add LinkedIn, Twitter, Google Scholar links
   - Display icons in header

7. **Statistics Dashboard**
   - Show total publications count
   - Display research impact metrics

## Testing Checklist

- [ ] Database migration runs successfully
- [ ] Can create new faculty member with slug
- [ ] Can edit existing faculty member
- [ ] All 6 tabs display correctly in admin
- [ ] Can add/edit/delete items in each tab
- [ ] Heading and description save correctly
- [ ] Items display with correct badge colors
- [ ] Frontend profile page loads at `/faculty/[slug]`
- [ ] All tabs display on frontend
- [ ] Tab navigation works (smooth scroll)
- [ ] Responsive design on mobile
- [ ] SEO metadata is correct
- [ ] Images display correctly
- [ ] Contact links work (email, phone)

## Support

If you encounter any issues:
1. Check browser console for errors
2. Verify database migration ran successfully
3. Check Supabase logs for backend errors
4. Ensure all files are saved and server is restarted

## Summary

You now have a complete faculty profile system with:
- ✅ 5 dynamic tabs with heading, description, and list items
- ✅ Reusable component for easy management
- ✅ Color-coded badges for visual distinction
- ✅ Public-facing profile pages with SEO
- ✅ Responsive design for all devices
- ✅ Easy to customize and extend

The system follows the same pattern as your courses admin page, making it familiar and easy to use!
