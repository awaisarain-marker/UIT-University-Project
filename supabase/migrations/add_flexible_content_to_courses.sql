-- Add flexible content blocks to courses Overview tab
-- This allows drag & drop content with headings, descriptions, images, and points

ALTER TABLE courses ADD COLUMN IF NOT EXISTS overview_content_blocks JSONB DEFAULT '{"blocks": []}'::jsonb;

-- Set default for existing rows
UPDATE courses 
SET overview_content_blocks = '{"blocks": []}'::jsonb 
WHERE overview_content_blocks IS NULL;

-- Add comment
COMMENT ON COLUMN courses.overview_content_blocks IS 'Flexible content blocks for Overview tab: {blocks: [{id, type: "point"|"heading"|"description"|"image", text, order, imageUrl}]}';
