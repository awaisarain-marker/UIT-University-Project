-- Add profile tab data columns to faculty table
-- Each tab has: heading, description, and items array

ALTER TABLE faculty ADD COLUMN IF NOT EXISTS overview_data JSONB DEFAULT '{"heading": "Overview", "description": "", "items": []}'::jsonb;
ALTER TABLE faculty ADD COLUMN IF NOT EXISTS membership_data JSONB DEFAULT '{"heading": "Membership and Affiliation", "description": "", "items": []}'::jsonb;
ALTER TABLE faculty ADD COLUMN IF NOT EXISTS research_data JSONB DEFAULT '{"heading": "Research Interests", "description": "", "items": []}'::jsonb;
ALTER TABLE faculty ADD COLUMN IF NOT EXISTS courses_taught_data JSONB DEFAULT '{"heading": "Courses Taught", "description": "", "items": []}'::jsonb;
ALTER TABLE faculty ADD COLUMN IF NOT EXISTS publications_data JSONB DEFAULT '{"heading": "Publications and Conferences", "description": "", "items": []}'::jsonb;

-- Add slug column if it doesn't exist (for URL-friendly faculty profiles)
ALTER TABLE faculty ADD COLUMN IF NOT EXISTS slug VARCHAR(255);

-- Create unique index on slug
CREATE UNIQUE INDEX IF NOT EXISTS idx_faculty_slug ON faculty(slug);

-- Add comments for documentation
COMMENT ON COLUMN faculty.overview_data IS 'Overview tab: heading, description, and list items';
COMMENT ON COLUMN faculty.membership_data IS 'Membership and Affiliation tab: heading, description, and list items';
COMMENT ON COLUMN faculty.research_data IS 'Research Interests tab: heading, description, and list items';
COMMENT ON COLUMN faculty.courses_taught_data IS 'Courses Taught tab: heading, description, and list items';
COMMENT ON COLUMN faculty.publications_data IS 'Publications and Conferences tab: heading, description, and list items';
COMMENT ON COLUMN faculty.slug IS 'URL-friendly identifier for faculty profile pages';

-- Generate slugs for existing faculty members (if any)
UPDATE faculty 
SET slug = LOWER(REGEXP_REPLACE(name, '[^a-zA-Z0-9]+', '-', 'g'))
WHERE slug IS NULL OR slug = '';
