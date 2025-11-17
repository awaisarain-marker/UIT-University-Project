-- Manual SQL Script to Add Faculty Profile Tabs
-- Run this directly in Supabase SQL Editor if migrations fail

-- Step 1: Add columns to instructors table
ALTER TABLE instructors ADD COLUMN IF NOT EXISTS overview_data JSONB;
ALTER TABLE instructors ADD COLUMN IF NOT EXISTS membership_data JSONB;
ALTER TABLE instructors ADD COLUMN IF NOT EXISTS research_data JSONB;
ALTER TABLE instructors ADD COLUMN IF NOT EXISTS courses_taught_data JSONB;
ALTER TABLE instructors ADD COLUMN IF NOT EXISTS publications_data JSONB;
ALTER TABLE instructors ADD COLUMN IF NOT EXISTS slug VARCHAR(255);

-- Step 2: Set default values for existing rows
UPDATE instructors 
SET overview_data = '{"heading": "Overview", "description": "", "items": []}'::jsonb 
WHERE overview_data IS NULL;

UPDATE instructors 
SET membership_data = '{"heading": "Membership and Affiliation", "description": "", "items": []}'::jsonb 
WHERE membership_data IS NULL;

UPDATE instructors 
SET research_data = '{"heading": "Research Interests", "description": "", "items": []}'::jsonb 
WHERE research_data IS NULL;

UPDATE instructors 
SET courses_taught_data = '{"heading": "Courses Taught", "description": "", "items": []}'::jsonb 
WHERE courses_taught_data IS NULL;

UPDATE instructors 
SET publications_data = '{"heading": "Publications and Conferences", "description": "", "items": []}'::jsonb 
WHERE publications_data IS NULL;

-- Step 3: Generate slugs for existing faculty members
UPDATE instructors 
SET slug = LOWER(REGEXP_REPLACE(full_name, '[^a-zA-Z0-9]+', '-', 'g'))
WHERE slug IS NULL OR slug = '';

-- Step 4: Create unique index on slug (if not exists)
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_indexes 
        WHERE tablename = 'instructors' 
        AND indexname = 'idx_instructors_slug'
    ) THEN
        CREATE UNIQUE INDEX idx_instructors_slug ON instructors(slug);
    END IF;
END $$;

-- Step 5: Verify the changes
SELECT 
    column_name, 
    data_type, 
    is_nullable
FROM information_schema.columns
WHERE table_name = 'instructors'
AND column_name IN (
    'overview_data', 
    'membership_data', 
    'research_data', 
    'courses_taught_data', 
    'publications_data', 
    'slug'
);

-- You should see 6 rows returned with the new columns
