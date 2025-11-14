-- Create semester courses table
-- This table stores course details for each semester of a program

CREATE TABLE IF NOT EXISTS semester_courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  semester_number INTEGER NOT NULL,
  course_code VARCHAR(50),
  course_title VARCHAR(255) NOT NULL,
  credit_hours_theory INTEGER DEFAULT 0,
  credit_hours_lab INTEGER DEFAULT 0,
  credit_hours_total INTEGER DEFAULT 0,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_semester_courses_course_id ON semester_courses(course_id);
CREATE INDEX IF NOT EXISTS idx_semester_courses_semester_number ON semester_courses(semester_number);

-- Add RLS policies
ALTER TABLE semester_courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to semester courses"
  ON semester_courses FOR SELECT
  USING (true);

CREATE POLICY "Allow authenticated users to insert semester courses"
  ON semester_courses FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update semester courses"
  ON semester_courses FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete semester courses"
  ON semester_courses FOR DELETE
  TO authenticated
  USING (true);

-- Add comments
COMMENT ON TABLE semester_courses IS 'Stores course details for each semester of a program';
COMMENT ON COLUMN semester_courses.course_id IS 'Reference to the main course/program';
COMMENT ON COLUMN semester_courses.semester_number IS 'Semester number (1-8)';
COMMENT ON COLUMN semester_courses.course_code IS 'Course code (e.g., CSC101)';
COMMENT ON COLUMN semester_courses.course_title IS 'Course title';
COMMENT ON COLUMN semester_courses.credit_hours_theory IS 'Theory credit hours';
COMMENT ON COLUMN semester_courses.credit_hours_lab IS 'Lab credit hours';
COMMENT ON COLUMN semester_courses.credit_hours_total IS 'Total credit hours';
COMMENT ON COLUMN semester_courses.display_order IS 'Order of display within semester';
