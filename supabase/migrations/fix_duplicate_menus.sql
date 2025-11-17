-- Fix duplicate menus
-- This script removes duplicate menus keeping only the first one

-- Delete duplicate menus (keep the oldest one for each slug)
DELETE FROM menus a
USING menus b
WHERE a.slug = b.slug
  AND a.created_at > b.created_at;

-- Verify no duplicates remain
SELECT slug, COUNT(*) as count
FROM menus
GROUP BY slug
HAVING COUNT(*) > 1;
