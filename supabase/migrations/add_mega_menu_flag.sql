-- Add has_mega_menu flag to menu_items
ALTER TABLE menu_items ADD COLUMN IF NOT EXISTS has_mega_menu BOOLEAN DEFAULT false;

-- Add comment
COMMENT ON COLUMN menu_items.has_mega_menu IS 'If true, shows mega menu instead of regular dropdown';
