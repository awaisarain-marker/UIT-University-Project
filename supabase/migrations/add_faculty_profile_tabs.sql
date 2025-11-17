-- Add profile tab data columns to instructors table
-- Each tab has: heading, description, and items array

ALTER TABLE instructors ADD COLUMN IF NOT EXISTS overview_data JSONB DEFAULT '{"heading": "Overview", "description": "", "items": []}'::jsonb;
ALTER TABLE instructors ADD COLUMN IF NOT EXISTS membership_data JSONB DEFAULT '{"heading": "Membership and Affiliation", "description": "", "items": []}'::jsonb;
ALTER TABLE instructors ADD COLUMN IF NOT EXISTS research_data JSONB DEFAULT '{"heading": "Research Interests", "description": "", "items": []}'::jsonb;
ALTER TABLE instructors ADD COLUMN IF NOT EXISTS courses_taught_data JSONB DEFAULT '{"heading": "Courses Taught", "description": "", "items": []}'::jsonb;
ALTER TABLE instructors ADD COLUMN IF NOT EXISTS publications_data JSONB DEFAULT '{"heading": "Publications and Conferences", "description": "", "items": []}'::jsonb;

-- Add slug column if it doesn't exist (for URL-friendly faculty profiles)
ALTER TABLE instructors ADD COLUMN IF NOT EXISTS slug VARCHAR(255);

-- Create unique index on slug
CREATE UNIQUE INDEX IF NOT EXISTS idx_instructors_slug ON instructors(slug);

-- Add comments for documentation
COMMENT ON COLUMN instructors.overview_data IS 'Overview tab: heading, description, and list items';
COMMENT ON COLUMN instructors.membership_data IS 'Membership and Affiliation tab: heading, description, and list items';
COMMENT ON COLUMN instructors.research_data IS 'Research Interests tab: heading, description, and list items';
COMMENT ON COLUMN instructors.courses_taught_data IS 'Courses Taught tab: heading, description, and list items';
COMMENT ON COLUMN instructors.publications_data IS 'Publications and Conferences tab: heading, description, and list items';
COMMENT ON COLUMN instructors.slug IS 'URL-friendly identifier for faculty profile pages';

-- Generate slugs for existing faculty members (if any)
UPDATE instructors 
SET slug = LOWER(REGEXP_REPLACE(full_name, '[^a-zA-Z0-9]+', '-', 'g'))
WHERE slug IS NULL OR slug = '';
