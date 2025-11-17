# Faculty Member Profile Page - Implementation Plan

## Overview
Create a dynamic faculty member profile page with 5 tabs, where each tab has:
- **Heading** (editable text field)
- **Description** (editable textarea)
- **List Items** (add/remove multiple items with numbered badges)

## Reference
Similar to: https://uitu.edu.pk/amir-khan/
Pattern: Same as courses admin page (PEOsPLOsManager component)

## Database Schema

### 1. Update Faculty Table
Add JSON columns for each tab's data:

```sql
-- Add columns to faculty table
ALTER TABLE faculty ADD COLUMN IF NOT EXISTS overview_data JSONB DEFAULT '{"heading": "", "description": "", "items": []}'::jsonb;
ALTER TABLE faculty ADD COLUMN IF NOT EXISTS membership_data JSONB DEFAULT '{"heading": "", "description": "", "items": []}'::jsonb;
ALTER TABLE faculty ADD COLUMN IF NOT EXISTS research_data JSONB DEFAULT '{"heading": "", "description": "", "items": []}'::jsonb;
ALTER TABLE faculty ADD COLUMN IF NOT EXISTS courses_taught_data JSONB DEFAULT '{"heading": "", "description": "", "items": []}'::jsonb;
ALTER TABLE faculty ADD COLUMN IF NOT EXISTS publications_data JSONB DEFAULT '{"heading": "", "description": "", "items": []}'::jsonb;
```

### 2. Data Structure for Each Tab
```typescript
interface TabData {
  heading: string
  description: string
  items: Array<{
    id: string
    text: string
  }>
}
```

## Implementation Steps

### Step 1: Create Database Migration
**File:** `supabase/migrations/add_faculty_profile_tabs.sql`

```sql
-- Add profile tab data columns to faculty table
ALTER TABLE faculty ADD COLUMN IF NOT EXISTS overview_data JSONB DEFAULT '{"heading": "Overview", "description": "", "items": []}'::jsonb;
ALTER TABLE faculty ADD COLUMN IF NOT EXISTS membership_data JSONB DEFAULT '{"heading": "Membership and Affiliation", "description": "", "items": []}'::jsonb;
ALTER TABLE faculty ADD COLUMN IF NOT EXISTS research_data JSONB DEFAULT '{"heading": "Research Interests", "description": "", "items": []}'::jsonb;
ALTER TABLE faculty ADD COLUMN IF NOT EXISTS courses_taught_data JSONB DEFAULT '{"heading": "Courses Taught", "description": "", "items": []}'::jsonb;
ALTER TABLE faculty ADD COLUMN IF NOT EXISTS publications_data JSONB DEFAULT '{"heading": "Publications and Conferences", "description": "", "items": []}'::jsonb;

-- Add comments
COMMENT ON COLUMN faculty.overview_data IS 'Overview tab content with heading, description, and list items';
COMMENT ON COLUMN faculty.membership_data IS 'Membership and Affiliation tab content';
COMMENT ON COLUMN faculty.research_data IS 'Research Interests tab content';
COMMENT ON COLUMN faculty.courses_taught_data IS 'Courses Taught tab content';
COMMENT ON COLUMN faculty.publications_data IS 'Publications and Conferences tab content';
```

### Step 2: Create Reusable Tab Manager Component
**File:** `components/admin/FacultyTabManager.tsx`

This component will be reusable for all 5 tabs.

```typescript
interface TabItem {
  id: string
  text: string
}

interface TabData {
  heading: string
  description: string
  items: TabItem[]
}

interface FacultyTabManagerProps {
  title: string              // e.g., "Overview"
  data: TabData
  onChange: (data: TabData) => void
  itemLabel?: string         // e.g., "Item", "Publication", "Course"
  badgeColor?: string        // e.g., "blue", "green", "purple"
}
```

Features:
- Heading input field
- Description textarea
- Add/Remove list items
- Numbered badges for each item
- Drag and drop reordering (optional)

### Step 3: Update Admin Faculty Edit Page
**File:** `app/admin/faculty/[id]/edit/page.tsx`

Add 5 tabs:
1. Basic Info (existing)
2. Overview
3. Membership and Affiliation
4. Research Interests
5. Courses Taught
6. Publications and Conferences

Each tab uses the `FacultyTabManager` component.

### Step 4: Create Frontend Faculty Profile Page
**File:** `app/faculty/[slug]/page.tsx`

Display faculty profile with:
- Header section (photo, name, designation, email, etc.)
- 5 tabs with dynamic content
- Responsive design
- SEO metadata

### Step 5: Update Faculty List Page
**File:** `app/faculty/page.tsx`

Add links to individual faculty profiles.

## Detailed Component Structure

### FacultyTabManager Component

```tsx
'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, Trash2 } from 'lucide-react'

interface TabItem {
  id: string
  text: string
}

interface TabData {
  heading: string
  description: string
  items: TabItem[]
}

interface FacultyTabManagerProps {
  title: string
  data: TabData
  onChange: (data: TabData) => void
  itemLabel?: string
  badgeColor?: 'blue' | 'green' | 'purple' | 'orange' | 'red'
}

export default function FacultyTabManager({
  title,
  data,
  onChange,
  itemLabel = 'Item',
  badgeColor = 'blue'
}: FacultyTabManagerProps) {
  
  const addItem = () => {
    const newItem: TabItem = {
      id: `item-${Date.now()}`,
      text: ''
    }
    onChange({
      ...data,
      items: [...data.items, newItem]
    })
  }

  const removeItem = (index: number) => {
    onChange({
      ...data,
      items: data.items.filter((_, i) => i !== index)
    })
  }

  const updateItem = (index: number, text: string) => {
    const updated = [...data.items]
    updated[index].text = text
    onChange({
      ...data,
      items: updated
    })
  }

  const badgeColors = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600',
    orange: 'bg-orange-600',
    red: 'bg-red-600'
  }

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <Button type="button" onClick={addItem} variant="outline" size="sm" className="gap-2">
          <Plus className="w-4 h-4" />
          Add {itemLabel}
        </Button>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${title}-heading`}>Heading</Label>
        <Input
          id={`${title}-heading`}
          placeholder={`e.g., ${title}`}
          value={data.heading}
          onChange={(e) => onChange({ ...data, heading: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${title}-description`}>Description</Label>
        <textarea
          id={`${title}-description`}
          className="w-full min-h-[100px] px-3 py-2 border rounded-md"
          placeholder="Enter description..."
          value={data.description}
          onChange={(e) => onChange({ ...data, description: e.target.value })}
        />
      </div>

      <div className="space-y-3">
        <Label>{itemLabel}s</Label>
        {data.items.length === 0 ? (
          <div className="text-center py-4 text-gray-400 text-sm border border-dashed rounded">
            No {itemLabel.toLowerCase()}s added. Click "Add {itemLabel}" to add items.
          </div>
        ) : (
          data.items.map((item, index) => (
            <div key={item.id} className="flex gap-2 items-start">
              <div className={`flex-shrink-0 w-8 h-8 ${badgeColors[badgeColor]} text-white rounded-full flex items-center justify-center font-semibold text-sm mt-1`}>
                {index + 1}
              </div>
              <textarea
                className="flex-1 min-h-[80px] px-3 py-2 border rounded-md"
                placeholder={`Enter ${itemLabel.toLowerCase()} ${index + 1}...`}
                value={item.text}
                onChange={(e) => updateItem(index, e.target.value)}
              />
              <Button
                type="button"
                onClick={() => removeItem(index)}
                variant="ghost"
                size="sm"
                className="text-red-600 hover:text-red-700 mt-1"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
```

### Admin Edit Page Structure

```tsx
// app/admin/faculty/[id]/edit/page.tsx

const [activeTab, setActiveTab] = useState<'basic' | 'overview' | 'membership' | 'research' | 'courses' | 'publications'>('basic')

const [overviewData, setOverviewData] = useState<TabData>({
  heading: 'Overview',
  description: '',
  items: []
})

const [membershipData, setMembershipData] = useState<TabData>({
  heading: 'Membership and Affiliation',
  description: '',
  items: []
})

// ... similar for other tabs

// In the form:
{activeTab === 'overview' && (
  <FacultyTabManager
    title="Overview"
    data={overviewData}
    onChange={setOverviewData}
    itemLabel="Point"
    badgeColor="blue"
  />
)}

{activeTab === 'membership' && (
  <FacultyTabManager
    title="Membership and Affiliation"
    data={membershipData}
    onChange={setMembershipData}
    itemLabel="Membership"
    badgeColor="green"
  />
)}

// ... similar for other tabs
```

### Frontend Profile Page Structure

```tsx
// app/faculty/[slug]/page.tsx

export default async function FacultyProfilePage({ params }) {
  const { slug } = await params
  const supabase = await createServerSupabaseClient()
  
  const { data: faculty } = await supabase
    .from('faculty')
    .select('*')
    .eq('slug', slug)
    .single()

  return (
    <div>
      {/* Header Section */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex gap-6">
            <img src={faculty.image_url} className="w-32 h-32 rounded-full" />
            <div>
              <h1>{faculty.name}</h1>
              <p>{faculty.designation}</p>
              <p>{faculty.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="membership">Membership</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <h2>{faculty.overview_data.heading}</h2>
            <p>{faculty.overview_data.description}</p>
            <ul>
              {faculty.overview_data.items.map((item, i) => (
                <li key={item.id}>
                  <span className="badge">{i + 1}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </TabsContent>

          {/* Similar for other tabs */}
        </Tabs>
      </div>
    </div>
  )
}
```

## Tab Configurations

### 1. Overview Tab
- **Badge Color:** Blue
- **Item Label:** "Point"
- **Example Items:**
  - "PhD in Computer Science from XYZ University"
  - "10+ years of teaching experience"
  - "Published 50+ research papers"

### 2. Membership and Affiliation Tab
- **Badge Color:** Green
- **Item Label:** "Membership"
- **Example Items:**
  - "IEEE Member since 2015"
  - "ACM Professional Member"
  - "Pakistan Engineering Council (PEC) Registered"

### 3. Research Interests Tab
- **Badge Color:** Purple
- **Item Label:** "Research Area"
- **Example Items:**
  - "Machine Learning and Artificial Intelligence"
  - "Computer Vision"
  - "Natural Language Processing"

### 4. Courses Taught Tab
- **Badge Color:** Orange
- **Item Label:** "Course"
- **Example Items:**
  - "CS-101: Introduction to Programming"
  - "CS-301: Data Structures and Algorithms"
  - "CS-501: Machine Learning"

### 5. Publications and Conferences Tab
- **Badge Color:** Red
- **Item Label:** "Publication"
- **Example Items:**
  - "Paper title, Conference/Journal name, Year"
  - "Book chapter title, Book name, Publisher, Year"

## Files to Create/Modify

### New Files:
1. `supabase/migrations/add_faculty_profile_tabs.sql`
2. `components/admin/FacultyTabManager.tsx`
3. `app/faculty/[slug]/page.tsx`

### Files to Modify:
1. `app/admin/faculty/[id]/edit/page.tsx` - Add tabs
2. `app/faculty/page.tsx` - Add links to profiles

## Testing Checklist

- [ ] Database migration runs successfully
- [ ] Can add/edit/delete items in each tab
- [ ] Heading and description save correctly
- [ ] Items display with numbered badges
- [ ] Frontend profile page shows all tabs
- [ ] Tab switching works smoothly
- [ ] Responsive design on mobile
- [ ] SEO metadata is correct

## Next Steps After Implementation

1. Add rich text editor for descriptions (optional)
2. Add image upload for publications (optional)
3. Add search/filter in publications tab
4. Add export to PDF functionality
5. Add social media links in header
