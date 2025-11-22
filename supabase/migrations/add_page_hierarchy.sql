-- Add parent_id and sort_order columns to pages table
-- Run this if you already have the pages table created

-- Add parent_id column
ALTER TABLE pages 
ADD COLUMN IF NOT EXISTS parent_id UUID REFERENCES pages(id) ON DELETE SET NULL;

-- Add sort_order column
ALTER TABLE pages 
ADD COLUMN IF NOT EXISTS sort_order INTEGER DEFAULT 0;

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_pages_parent_id ON pages(parent_id);
CREATE INDEX IF NOT EXISTS idx_pages_sort_order ON pages(sort_order);

-- Add comment
COMMENT ON COLUMN pages.parent_id IS 'Reference to parent page for hierarchical structure';
COMMENT ON COLUMN pages.sort_order IS 'Order in which pages should be displayed (lower numbers first)';
