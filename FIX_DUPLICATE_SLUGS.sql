-- Fix duplicate slugs by making them unique with ID
-- Run this in Supabase SQL Editor

-- Step 1: Add columns if they don't exist
ALTER TABLE instructors ADD COLUMN IF NOT EXISTS overview_data JSONB;
ALTER TABLE instructors ADD COLUMN IF NOT EXISTS membership_data JSONB;
ALTER TABLE instructors ADD COLUMN IF NOT EXISTS research_data JSONB;
ALTER TABLE instructors ADD COLUMN IF NOT EXISTS courses_taught_data JSONB;
ALTER TABLE instructors ADD COLUMN IF NOT EXISTS publications_data JSONB;
ALTER TABLE instructors ADD COLUMN IF NOT EXISTS slug VARCHAR(255);

-- Step 2: Set default values for new columns
UPDATE instructors SET overview_data = '{"heading": "Overview", "description": "", "items": []}'::jsonb WHERE overview_data IS NULL;
UPDATE instructors SET membership_data = '{"heading": "Membership and Affiliation", "description": "", "items": []}'::jsonb WHERE membership_data IS NULL;
UPDATE instructors SET research_data = '{"heading": "Research Interests", "description": "", "items": []}'::jsonb WHERE research_data IS NULL;
UPDATE instructors SET courses_taught_data = '{"heading": "Courses Taught", "description": "", "items": []}'::jsonb WHERE courses_taught_data IS NULL;
UPDATE instructors SET publications_data = '{"heading": "Publications and Conferences", "description": "", "items": []}'::jsonb WHERE publications_data IS NULL;

-- Step 3: Generate UNIQUE slugs by appending ID for duplicates
UPDATE instructors 
SET slug = LOWER(REGEXP_REPLACE(full_name, '[^a-zA-Z0-9]+', '-', 'g')) || '-' || SUBSTRING(id::text, 1, 8)
WHERE slug IS NULL OR slug = '';

-- Step 4: Create unique index (now it will work because slugs are unique)
DROP INDEX IF EXISTS idx_instructors_slug;
CREATE UNIQUE INDEX idx_instructors_slug ON instructors(slug);

-- Step 5: Verify - check for any remaining duplicates (should return 0 rows)
SELECT slug, COUNT(*) 
FROM instructors 
GROUP BY slug 
HAVING COUNT(*) > 1;

-- Step 6: Show all faculty with their new slugs
SELECT id, full_name, slug 
FROM instructors 
ORDER BY full_name;
