-- Add sections with flexible content blocks to courses Overview tab
-- Each section contains its own flexible content (headings, descriptions, images, tables, points)

ALTER TABLE courses ADD COLUMN IF NOT EXISTS overview_sections JSONB DEFAULT '[]'::jsonb;

-- Set default for existing rows
UPDATE courses 
SET overview_sections = '[]'::jsonb 
WHERE overview_sections IS NULL;

-- Add comment
COMMENT ON COLUMN courses.overview_sections IS 'Sections for Overview tab: [{id, title, order, isExpanded, content: {heading, description, items: [{id, type, text, order, imageUrl, tableData}]}}]';
