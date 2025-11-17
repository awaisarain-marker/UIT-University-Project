-- Complete cleanup script for duplicate menus and menu items
-- Run this in Supabase SQL Editor

-- Step 1: Show current duplicates
SELECT 'Current duplicate menus:' as info;
SELECT slug, COUNT(*) as count, STRING_AGG(id::text, ', ') as ids
FROM menus
GROUP BY slug
HAVING COUNT(*) > 1;

-- Step 2: Delete duplicate menu items first (to avoid foreign key issues)
DELETE FROM menu_items
WHERE menu_id IN (
  SELECT a.id
  FROM menus a
  INNER JOIN menus b ON a.slug = b.slug AND a.created_at > b.created_at
);

-- Step 3: Delete duplicate menus (keep the oldest one for each slug)
DELETE FROM menus a
USING menus b
WHERE a.slug = b.slug
  AND a.created_at > b.created_at;

-- Step 4: Verify no duplicates remain
SELECT 'Remaining menus after cleanup:' as info;
SELECT slug, COUNT(*) as count
FROM menus
GROUP BY slug
HAVING COUNT(*) > 1;

-- Step 5: Show final menu count
SELECT 'Total menus:' as info, COUNT(*) as total FROM menus;
SELECT 'Total menu items:' as info, COUNT(*) as total FROM menu_items;

-- Step 6: Show all menus
SELECT 'All menus:' as info;
SELECT id, name, slug, location, is_active, display_order
FROM menus
ORDER BY location, display_order;
