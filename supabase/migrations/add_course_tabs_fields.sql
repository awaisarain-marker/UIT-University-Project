-- Add new fields for course tabs
-- Migration: Add dynamic fields for Overview, Courses, PEOs/PLOs, and Eligibility tabs

ALTER TABLE courses
-- Overview tab - Program Overview
ADD COLUMN IF NOT EXISTS program_overview_heading TEXT,
ADD COLUMN IF NOT EXISTS program_overview_paragraph TEXT,
-- Overview tab - Degree Requirements
ADD COLUMN IF NOT EXISTS duration_years INTEGER,
ADD COLUMN IF NOT EXISTS number_of_semesters INTEGER,
ADD COLUMN IF NOT EXISTS courses_per_semester VARCHAR(50),
ADD COLUMN IF NOT EXISTS total_credit_hours INTEGER,
ADD COLUMN IF NOT EXISTS total_number_of_courses VARCHAR(100),
-- Courses tab
ADD COLUMN IF NOT EXISTS course_content TEXT,
-- PEOs and PLOs tab
ADD COLUMN IF NOT EXISTS peo_heading TEXT,
ADD COLUMN IF NOT EXISTS peo_description TEXT,
ADD COLUMN IF NOT EXISTS peos JSONB,
ADD COLUMN IF NOT EXISTS plo_heading TEXT,
ADD COLUMN IF NOT EXISTS plo_description TEXT,
ADD COLUMN IF NOT EXISTS plos JSONB,
ADD COLUMN IF NOT EXISTS mapping_image_url TEXT,
-- Eligibility tab
ADD COLUMN IF NOT EXISTS test_criteria_heading TEXT,
ADD COLUMN IF NOT EXISTS test_criteria_description TEXT,
ADD COLUMN IF NOT EXISTS test_criteria_items JSONB,
ADD COLUMN IF NOT EXISTS academic_requirements_heading TEXT,
ADD COLUMN IF NOT EXISTS academic_requirements JSONB;

-- Add comments for documentation
COMMENT ON COLUMN courses.program_overview_heading IS 'Program Overview section heading';
COMMENT ON COLUMN courses.program_overview_paragraph IS 'Program Overview description paragraph';
COMMENT ON COLUMN courses.duration_years IS 'Duration of program in years';
COMMENT ON COLUMN courses.number_of_semesters IS 'Total number of semesters';
COMMENT ON COLUMN courses.courses_per_semester IS 'Number of courses per semester (e.g., 5-6)';
COMMENT ON COLUMN courses.total_credit_hours IS 'Total credit hours required';
COMMENT ON COLUMN courses.total_number_of_courses IS 'Total number of courses (e.g., 45 Including Final Year Project)';
COMMENT ON COLUMN courses.course_content IS 'Course curriculum, modules, and content details';
COMMENT ON COLUMN courses.peo_heading IS 'PEO section heading';
COMMENT ON COLUMN courses.peo_description IS 'PEO section description';
COMMENT ON COLUMN courses.peos IS 'Program Educational Objectives as JSON array';
COMMENT ON COLUMN courses.plo_heading IS 'PLO section heading';
COMMENT ON COLUMN courses.plo_description IS 'PLO section description';
COMMENT ON COLUMN courses.plos IS 'Program Learning Outcomes as JSON array';
COMMENT ON COLUMN courses.mapping_image_url IS 'URL for PEO-PLO mapping diagram image';
COMMENT ON COLUMN courses.test_criteria_heading IS 'Test eligibility criteria section heading';
COMMENT ON COLUMN courses.test_criteria_description IS 'Test eligibility criteria description';
COMMENT ON COLUMN courses.test_criteria_items IS 'Test eligibility criteria items as JSON array';
COMMENT ON COLUMN courses.academic_requirements_heading IS 'Academic requirements section heading';
COMMENT ON COLUMN courses.academic_requirements IS 'Academic requirement paragraphs as JSON array';
