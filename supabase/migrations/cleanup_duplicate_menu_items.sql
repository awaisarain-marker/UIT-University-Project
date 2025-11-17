-- Cleanup duplicate menu items
-- This script removes duplicate menu items keeping only the first occurrence

DO $$
DECLARE
  deleted_count INTEGER;
BEGIN
  -- Remove duplicates, keeping only the oldest entry for each unique combination
  WITH duplicates AS (
    SELECT 
      id,
      ROW_NUMBER() OVER (
        PARTITION BY menu_id, title, url 
        ORDER BY created_at ASC
      ) as rn
    FROM menu_items
  )
  DELETE FROM menu_items
  WHERE id IN (
    SELECT id FROM duplicates WHERE rn > 1
  );
  
  GET DIAGNOSTICS deleted_count = ROW_COUNT;
  RAISE NOTICE 'Removed % duplicate menu items', deleted_count;
END $$;
