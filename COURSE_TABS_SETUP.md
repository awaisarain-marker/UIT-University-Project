# Course Tabs Setup Guide

## Overview
Added 4 tabs to the course add/edit pages with dynamic fields:
1. **Overview** - Program overview and degree requirements
2. **Courses** - Course content and curriculum
3. **PEO's and PLO's** - Program Educational Objectives and Learning Outcomes
4. **Eligibility** - Eligibility criteria and requirements

## Database Migration

Run the migration to add new fields to the courses table:

```sql
-- In Supabase SQL Editor, run:
-- File: supabase/migrations/add_course_tabs_fields.sql
```

This adds 11 new columns for dynamic content management.

## Features

### Tab Navigation
- Black underline for active tab
- Smooth transitions between tabs
- All form data persists when switching tabs

### Overview Tab
Organized into 3 sections:

**1. Program Overview Section**
- Heading (dynamic)
- Description paragraph (dynamic textarea)

**2. Degree Requirements Section**
- Duration of Program (In Years)
- Number of Semesters
- Number of Courses per Semester
- Total Credit Hours
- Total Number of Courses

**3. Basic Information Section**
- Course Title, Category
- Description
- Level, Price, Max Students
- Start Date, End Date
- Course Image
- Active status

### Courses Tab
- Dynamic semester management system
- Add/remove semesters
- For each semester, add/remove courses with:
  - Course Code (e.g., CSC101)
  - Course Title
  - Credit Hours (Theory)
  - Lab Hours
  - Total (auto-calculated)
- Displays semester total credit hours
- Drag-and-drop ordering (future enhancement)

### PEO's and PLO's Tab
- Two separate textareas:
  - Program Educational Objectives (PEOs)
  - Program Learning Outcomes (PLOs)

### Eligibility Tab
- Large textarea for eligibility criteria
- Enter requirements, prerequisites, and admission criteria

## Database Fields Added

### Overview Tab Fields:
- `program_overview_heading` (TEXT) - Program overview heading
- `program_overview_paragraph` (TEXT) - Program overview description
- `duration_years` (INTEGER) - Duration in years
- `number_of_semesters` (INTEGER) - Total semesters
- `courses_per_semester` (VARCHAR) - Courses per semester (e.g., "5-6")
- `total_credit_hours` (INTEGER) - Total credit hours
- `total_number_of_courses` (VARCHAR) - Total courses with notes

### Other Tab Fields:
- `course_content` (TEXT) - Course curriculum
- `peos` (TEXT) - Program Educational Objectives
- `plos` (TEXT) - Program Learning Outcomes
- `eligibility` (TEXT) - Eligibility requirements

## Files Modified

1. `app/admin/courses/new/page.tsx` - Add course page with tabs
2. `app/admin/courses/[id]/edit/page.tsx` - Edit course page with tabs
3. `supabase/migrations/add_course_tabs_fields.sql` - Database migration

## Usage

1. Run the database migration in Supabase
2. Navigate to `/admin/courses/new` or edit any course
3. Use the tabs to switch between different sections
4. Fill in the dynamic fields in each section
5. All data is saved together when you submit the form

## Styling

- Tabs use black color for active state
- Clean, professional interface with organized sections
- Gray background boxes for grouped fields
- Responsive layout


## Semester Courses System

### Database Table: `semester_courses`

Stores individual course details for each semester of a program.

**Fields:**
- `id` - UUID primary key
- `course_id` - Reference to main course/program
- `semester_number` - Semester number (1-8)
- `course_code` - Course code (e.g., CSC101)
- `course_title` - Course title
- `credit_hours_theory` - Theory credit hours
- `credit_hours_lab` - Lab credit hours
- `credit_hours_total` - Total credit hours (auto-calculated)
- `display_order` - Order within semester

### Features

1. **Add Semester** - Click to add a new semester
2. **Remove Semester** - Delete entire semester with all courses
3. **Add Course** - Add courses to any semester
4. **Remove Course** - Delete individual courses
5. **Auto-calculation** - Total credit hours calculated automatically
6. **Semester Total** - Shows total credit hours for each semester

### Usage Example

**Semester 1:**
| Course Code | Course Title | Credit Hours (Th) | Lab | Total |
|-------------|--------------|-------------------|-----|-------|
| CSC101 | Introduction to Computing | 2 | 1 | 3 |
| CSC102 | Programming Fundamentals | 3 | 1 | 4 |
| ASC116 | Applied Physics | 3 | 0 | 3 |
| **Total** | | | | **10** |

### Migration Required

Run the new migration:
```sql
-- File: supabase/migrations/add_semester_courses.sql
```

This creates the `semester_courses` table with proper relationships and RLS policies.
