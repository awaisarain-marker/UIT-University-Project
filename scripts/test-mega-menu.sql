-- Check if tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('mega_menu_sections', 'mega_menu_links');

-- Check existing menu items
SELECT id, title, url 
FROM menu_items 
WHERE is_active = true 
ORDER BY display_order;

-- Check if any mega menu data exists
SELECT COUNT(*) as section_count FROM mega_menu_sections;
SELECT COUNT(*) as link_count FROM mega_menu_links;

-- View existing mega menu data (if any)
SELECT 
  mms.id as section_id,
  mms.title as section_title,
  mi.title as menu_item_title,
  mi.id as menu_item_id
FROM mega_menu_sections mms
JOIN menu_items mi ON mms.menu_item_id = mi.id
ORDER BY mms.display_order;
