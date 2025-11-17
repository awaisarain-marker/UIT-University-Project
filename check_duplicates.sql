-- Check for duplicate menu items
-- Run this to see if you have duplicates

SELECT 
  menu_id,
  title,
  url,
  COUNT(*) as count,
  STRING_AGG(id::text, ', ') as ids
FROM menu_items
GROUP BY menu_id, title, url
HAVING COUNT(*) > 1
ORDER BY count DESC;

-- If you see results, you have duplicates
-- To remove them, run: supabase migration up --local
-- Or manually delete the duplicate IDs shown above
