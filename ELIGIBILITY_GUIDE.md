# Eligibility Management System

## Overview
A dynamic system for managing eligibility criteria with two main sections: Pre Entry Admission Test Eligibility Criteria and Academic Requirements.

## Features

### 1. Pre Entry Admission Test Eligibility Criteria
- **Heading** - Customizable section heading
- **Description** - Introduction text (e.g., "Candidates are required to:")
- **Numbered Items** - Add unlimited test criteria with blue circle badges (①, ②, ③)
- Each item has a textarea for detailed criteria text

### 2. Academic Requirements
- **Heading** - Customizable section heading
- **Paragraphs** - Add unlimited requirement paragraphs
- Each paragraph has a large textarea for detailed text
- Labeled as P1, P2, P3, etc.

## User Interface

### Test Criteria Section
```
Pre Entry Admission Test Eligibility Criteria
[Add Criteria Button]

Heading: [Input field]
Description: [Textarea]

Test Criteria Items:
┌─────────────────────────────────────────┐
│ ① [Textarea for criteria 1]      [×]   │
│ ② [Textarea for criteria 2]      [×]   │
│ ③ [Textarea for criteria 3]      [×]   │
└─────────────────────────────────────────┘
```

### Academic Requirements Section
```
Academic Requirements
[Add Paragraph Button]

Heading: [Input field]

Requirement Paragraphs:
┌─────────────────────────────────────────┐
│ P1 [Large textarea for paragraph 1] [×]│
│ P2 [Large textarea for paragraph 2] [×]│
│ P3 [Large textarea for paragraph 3] [×]│
└─────────────────────────────────────────┘
```

## Database Structure

### Fields Added to `courses` Table:

```sql
-- Test Eligibility Criteria
test_criteria_heading TEXT
test_criteria_description TEXT
test_criteria_items JSONB  -- Array of {id, text}

-- Academic Requirements
academic_requirements_heading TEXT
academic_requirements JSONB  -- Array of {id, text}
```

### JSON Structure:

**Test Criteria Example:**
```json
[
  {
    "id": "test-1",
    "text": "Pass the university's pre-admission entry tests with at least 50% marks, OR"
  },
  {
    "id": "test-2",
    "text": "Pass the HEC Undergraduate Studies Admission Test (USAT) with at least 50% marks, OR"
  },
  {
    "id": "test-3",
    "text": "Hold a score of at least 800 in SAT-I and secured at least 1500 in relevant subjects."
  }
]
```

**Academic Requirements Example:**
```json
[
  {
    "id": "academic-1",
    "text": "Students holding Higher Secondary School Certificate (HSC-II) in Pre-Engineering, Pre-Medical, Science General, Computer Science from any authorized board of intermediate education in Pakistan OR any equivalent foreign examination board with at least 50% or 550 out of 1100 marks are eligible to apply for admission."
  },
  {
    "id": "academic-2",
    "text": "Students awaiting the final result of HSC-II can also apply for conditional admission based on HSC-I results."
  },
  {
    "id": "academic-3",
    "text": "HSC-II (Pre-medical) or equivalent students are also eligible for admission. However, they must undertake deficiency courses in six-credit-hour Mathematics in the first year of regular studies."
  }
]
```

## Setup Instructions

### Step 1: Run Migration

The migration is already included in `add_course_tabs_fields.sql`:

```sql
-- File: supabase/migrations/add_course_tabs_fields.sql
```

This adds:
- `test_criteria_heading`, `test_criteria_description`, `test_criteria_items` (JSONB)
- `academic_requirements_heading`, `academic_requirements` (JSONB)

### Step 2: Use the System

1. Navigate to `/admin/courses/new` or edit any course
2. Click on the "Eligibility" tab
3. Fill in Test Criteria section:
   - Add heading (e.g., "Pre Entry Admission Test Eligibility Criteria")
   - Add description (e.g., "Candidates are required to:")
   - Click "Add Criteria" to add items
   - Fill in each test criteria
4. Fill in Academic Requirements section:
   - Add heading (e.g., "Academic Requirements")
   - Click "Add Paragraph" to add requirement paragraphs
   - Fill in each paragraph
5. Submit the form

## Example Data

### Test Criteria Example:
**Heading:** Pre Entry Admission Test Eligibility Criteria

**Description:** Candidates are required to:

**Items:**
1. Pass the university's pre-admission entry tests with at least 50% marks, OR
2. Pass the HEC Undergraduate Studies Admission Test (USAT) with at least 50% marks, OR
3. Hold a score of at least 800 in SAT-I and secured at least 1500 in relevant subjects.

### Academic Requirements Example:
**Heading:** Academic Requirements

**Paragraphs:**

**P1:** Students holding Higher Secondary School Certificate (HSC-II) in Pre-Engineering, Pre-Medical, Science General, Computer Science from any authorized board of intermediate education in Pakistan OR any equivalent foreign examination board with at least 50% or 550 out of 1100 marks are eligible to apply for admission.

**P2:** Students awaiting the final result of HSC-II can also apply for conditional admission based on HSC-I results.

**P3:** HSC-II (Pre-medical) or equivalent students are also eligible for admission. However, they must undertake deficiency courses in six-credit-hour Mathematics in the first year of regular studies.

## Files Created/Modified

### New Files:
1. `components/admin/EligibilityManager.tsx` - React component for managing eligibility
2. `ELIGIBILITY_GUIDE.md` - This documentation

### Modified Files:
1. `app/admin/courses/new/page.tsx` - Added eligibility management
2. `app/admin/courses/[id]/edit/page.tsx` - Added eligibility management
3. `supabase/migrations/add_course_tabs_fields.sql` - Added database fields

## Benefits

1. **Structured Data** - Eligibility stored as structured JSON
2. **Easy Management** - Add/remove/edit items easily
3. **Visual Numbering** - Automatic numbering with styled badges
4. **Flexible** - Support any number of criteria and paragraphs
5. **Professional Display** - Clean, organized interface
6. **Separate Sections** - Clear distinction between test criteria and academic requirements

## Visual Design

- **Test Criteria**: Blue circle badges (①, ②, ③) - matching your wireframe
- **Academic Requirements**: Simple paragraph labels (P1, P2, P3)
- Clean, organized layout
- Add/Remove buttons for easy management
- Large textareas for detailed content

## Future Enhancements

Possible additions:
1. Drag-and-drop reordering of items
2. Rich text editor for formatting
3. Import from existing templates
4. Export to PDF
5. Multiple eligibility tracks (domestic/international)
6. Conditional eligibility rules
