# Semester Courses Management System

## Overview
A dynamic system for managing semester-wise course details in the admin dashboard. Allows adding multiple semesters with detailed course information including course codes, titles, and credit hours.

## Features

### 1. Dynamic Semester Management
- Add unlimited semesters
- Remove semesters (with automatic renumbering)
- Each semester displays its total credit hours

### 2. Course Management per Semester
- Add multiple courses to each semester
- Fields for each course:
  - **Course Code** (e.g., CSC101, HSC121)
  - **Course Title** (e.g., Introduction to Computing)
  - **Credit Hours (Th)** - Theory hours
  - **Lab** - Lab hours
  - **Total** - Auto-calculated (Theory + Lab)
- Remove individual courses
- Displays semester total at bottom

### 3. User Interface
- Clean table layout matching your wireframe
- Add/Remove buttons for easy management
- Inline editing for all fields
- Auto-calculation of totals
- Responsive design

## Database Structure

### Table: `semester_courses`

```sql
CREATE TABLE semester_courses (
  id UUID PRIMARY KEY,
  course_id UUID REFERENCES courses(id),
  semester_number INTEGER,
  course_code VARCHAR(50),
  course_title VARCHAR(255),
  credit_hours_theory INTEGER,
  credit_hours_lab INTEGER,
  credit_hours_total INTEGER,
  display_order INTEGER,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

## Setup Instructions

### Step 1: Run Database Migrations

Run both migrations in Supabase SQL Editor:

1. **Course tabs fields:**
```sql
-- File: supabase/migrations/add_course_tabs_fields.sql
```

2. **Semester courses table:**
```sql
-- File: supabase/migrations/add_semester_courses.sql
```

### Step 2: Test the System

1. Navigate to `/admin/courses/new`
2. Click on the "Courses" tab
3. Click "Add Semester" to create Semester 1
4. Click "Add Course" to add courses to the semester
5. Fill in course details:
   - Course Code: CSC101
   - Course Title: Introduction to Computing
   - Credit Hours (Th): 2
   - Lab: 1
   - Total: 3 (auto-calculated)
6. Add more courses as needed
7. Add more semesters by clicking "Add Semester" again
8. Submit the form to save

## Example Data Structure

### Semester 1
| Course Code | Course Title | Credit Hours (Th) | Lab | Total |
|-------------|--------------|-------------------|-----|-------|
| CSC101 | Introduction to Computing | 2 | 1 | 3 |
| CSC102 | Programming Fundamentals | 3 | 1 | 4 |
| ASC116 | Applied Physics | 3 | 0 | 3 |
| HSC121 | Communication Skills | 3 | 0 | 3 |
| HSC102/103 | Islamic Studies / Ethics | 2 | 0 | 2 |
| **Total** | | | | **15** |

### Semester 2
| Course Code | Course Title | Credit Hours (Th) | Lab | Total |
|-------------|--------------|-------------------|-----|-------|
| CSC103 | Object Oriented Programming | 3 | 1 | 4 |
| CSC108 | Discrete Structures | 3 | 0 | 3 |
| CSC111 | Digital Logic Design | 3 | 1 | 4 |
| ASC111 | Calculus & Analytical Geometry | 3 | 0 | 3 |
| HSC111 | English Composition & Comprehension | 3 | 0 | 3 |
| HSC105 | Pakistan Studies | 2 | 0 | 2 |
| **Total** | | | | **19** |

## Files Created/Modified

### New Files:
1. `components/admin/SemesterCoursesManager.tsx` - React component for managing semesters
2. `supabase/migrations/add_semester_courses.sql` - Database migration
3. `SEMESTER_COURSES_GUIDE.md` - This documentation

### Modified Files:
1. `app/admin/courses/new/page.tsx` - Added semester management to add page
2. `app/admin/courses/[id]/edit/page.tsx` - Added semester management to edit page
3. `COURSE_TABS_SETUP.md` - Updated documentation

## How It Works

### Adding a Course
1. Admin clicks "Add Semester"
2. System creates a new semester with number (1, 2, 3, etc.)
3. Admin clicks "Add Course" within that semester
4. Admin fills in course details
5. Total credit hours auto-calculate
6. On form submit, all data saves to database

### Editing a Course
1. System loads existing course data
2. System loads all semester courses from database
3. Groups courses by semester number
4. Displays in editable tables
5. Admin can add/remove/edit courses
6. On submit, deletes old semester courses and inserts new ones

### Data Flow
```
Form Submit → Save Main Course → Save Semester Courses → Success
```

## Benefits

1. **Fully Dynamic** - No hardcoded semester data
2. **Easy to Use** - Intuitive interface for admins
3. **Flexible** - Support any number of semesters and courses
4. **Accurate** - Auto-calculation prevents errors
5. **Scalable** - Can handle large programs with many semesters

## Future Enhancements

Possible additions:
1. Drag-and-drop reordering of courses
2. Bulk import from CSV/Excel
3. Course templates for common programs
4. Duplicate semester functionality
5. Export to PDF
6. Course prerequisites tracking
7. Credit hour validation rules
