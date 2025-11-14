# PEOs and PLOs Management System

## Overview
A dynamic system for managing Program Educational Objectives (PEOs) and Program Learning Outcomes (PLOs) with numbered items and visual mapping diagrams.

## Features

### 1. Program Educational Objectives (PEOs)
- **Heading** - Customizable section heading
- **Description** - Introduction text for PEOs
- **Numbered Items** - Add unlimited PEO items with blue circle badges (1, 2, 3...)
- Each PEO has a large textarea for detailed text

### 2. Program Learning Outcomes (PLOs)
- **Heading** - Customizable section heading
- **Description** - Introduction text for PLOs
- **Numbered Items** - Add unlimited PLO items with dark badges (1, 2, 3, 4...)
- Each PLO has a large textarea for detailed text

### 3. Mapping Diagram
- **Image Upload** - Upload a visual diagram showing mapping between SOs and PEOs
- **Preview** - See the uploaded image in the admin panel
- Stored in `courses/peo-plo-mappings/` folder

## User Interface

### PEOs Section
```
Program Educational Objectives (PEO's)
[Add PEO Button]

Heading: [Input field]
Description: [Textarea]

PEO Items:
┌─────────────────────────────────────────┐
│ ① [Large textarea for PEO 1]      [×]  │
│ ② [Large textarea for PEO 2]      [×]  │
│ ③ [Large textarea for PEO 3]      [×]  │
└─────────────────────────────────────────┘
```

### PLOs Section
```
Program Learning Outcomes (PLO's)
[Add PLO Button]

Heading: [Input field]
Description: [Textarea]

PLO Items:
┌─────────────────────────────────────────┐
│ 1 [Large textarea for PLO 1]      [×]  │
│ 2 [Large textarea for PLO 2]      [×]  │
│ 3 [Large textarea for PLO 3]      [×]  │
│ 4 [Large textarea for PLO 4]      [×]  │
│ 5 [Large textarea for PLO 5]      [×]  │
│ 6 [Large textarea for PLO 6]      [×]  │
│ 7 [Large textarea for PLO 7]      [×]  │
└─────────────────────────────────────────┘
```

## Database Structure

### Fields Added to `courses` Table:

```sql
-- PEO Section
peo_heading TEXT
peo_description TEXT
peos JSONB  -- Array of {id, text}

-- PLO Section
plo_heading TEXT
plo_description TEXT
plos JSONB  -- Array of {id, text}

-- Mapping Image
mapping_image_url TEXT
```

### JSON Structure:

**PEOs Example:**
```json
[
  {
    "id": "peo-1",
    "text": "Pursue diverse range of careers, advanced degrees, or professional development in various computing disciplines."
  },
  {
    "id": "peo-2",
    "text": "Apply analytical skills, computing principles, and modern technologies to design innovative and sustainable computing solutions to meet business objectives and societal challenges."
  },
  {
    "id": "peo-3",
    "text": "Communicate effectively and work efficiently as an individual and in interdisciplinary teams with high professional and ethical values."
  }
]
```

**PLOs Example:**
```json
[
  {
    "id": "plo-1",
    "text": "Completion of an accredited program of study designed to prepare graduates as computing professionals."
  },
  {
    "id": "plo-2",
    "text": "Apply knowledge of computing fundamentals, knowledge of a computing specialization, and mathematics, science, and domain knowledge appropriate for the computing specialization to the abstraction and conceptualization of computing models from defined problems and requirements."
  }
  // ... more items
]
```

## Setup Instructions

### Step 1: Run Migration

The migration is already included in `add_course_tabs_fields.sql`:

```sql
-- File: supabase/migrations/add_course_tabs_fields.sql
```

This adds:
- `peo_heading`, `peo_description`, `peos` (JSONB)
- `plo_heading`, `plo_description`, `plos` (JSONB)
- `mapping_image_url`

### Step 2: Use the System

1. Navigate to `/admin/courses/new` or edit any course
2. Click on the "PEO's and PLO's" tab
3. Fill in PEO section:
   - Add heading (e.g., "Program Educational Objectives (PEO's)")
   - Add description
   - Click "Add PEO" to add items
   - Fill in each PEO text
4. Fill in PLO section:
   - Add heading (e.g., "Student Outcomes (PLO's)")
   - Add description
   - Click "Add PLO" to add items
   - Fill in each PLO text
5. Upload mapping diagram image
6. Submit the form

## Example Data

### PEO Example:
**Heading:** Program Educational Objectives (PEO's)

**Description:** The graduates of the BS Computer Science program will have the knowledge, understanding and skills to:

**Items:**
1. Pursue diverse range of careers, advanced degrees, or professional development in various computing disciplines.
2. Apply analytical skills, computing principles, and modern technologies to design innovative and sustainable computing solutions to meet business objectives and societal challenges.
3. Communicate effectively and work efficiently as an individual and in interdisciplinary teams with high professional and ethical values.

### PLO Example:
**Heading:** Student Outcomes (PLO's)

**Description:** The students of BS Computer Science program are expected to attain the following outcomes by the time of graduation:

**Items:**
1. Completion of an accredited program of study designed to prepare graduates as computing professionals.
2. Apply knowledge of computing fundamentals, knowledge of a computing specialization, and mathematics, science, and domain knowledge appropriate for the computing specialization to the abstraction and conceptualization of computing models from defined problems and requirements.
3. Identify, formulate, research literature, and solve complex computing problems reaching substantiated conclusions using fundamental principles of mathematics, computing sciences, and relevant domain disciplines.
4. Design and evaluate solutions for complex computing problems, and design and evaluate systems, components, or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.
5. Create, select, adapt and apply appropriate techniques, resources, and modern computing tools to complex computing activities, with an understanding of the limitations.
6. Function effectively as an individual and as a member or leader in diverse teams and in multi-disciplinary settings.
7. Communicate effectively with the computing community and with society at large about complex computing activities by being able to comprehend and write effective reports, design documentation, make effective presentations, and give and understand clear instructions.

## Files Created/Modified

### New Files:
1. `components/admin/PEOsPLOsManager.tsx` - React component for managing PEOs and PLOs

### Modified Files:
1. `app/admin/courses/new/page.tsx` - Added PEOs/PLOs management
2. `app/admin/courses/[id]/edit/page.tsx` - Added PEOs/PLOs management
3. `supabase/migrations/add_course_tabs_fields.sql` - Added database fields
4. `PEOS_PLOS_GUIDE.md` - This documentation

## Benefits

1. **Structured Data** - PEOs and PLOs stored as structured JSON
2. **Easy Management** - Add/remove/edit items easily
3. **Visual Numbering** - Automatic numbering with styled badges
4. **Flexible** - Support any number of PEOs and PLOs
5. **Image Support** - Upload mapping diagrams
6. **Professional Display** - Clean, organized interface

## Future Enhancements

Possible additions:
1. Drag-and-drop reordering of items
2. Rich text editor for formatting
3. Multiple mapping images
4. Export to PDF
5. Templates for common programs
6. Mapping matrix editor (interactive table)
