-- Cleanup script for menus system
-- Run this if you need to reset the menus system

-- Drop existing policies
DROP POLICY IF EXISTS "Allow public read access to menus" ON menus;
DROP POLICY IF EXISTS "Allow public read access to menu_items" ON menu_items;
DROP POLICY IF EXISTS "Allow authenticated users to insert menus" ON menus;
DROP POLICY IF EXISTS "Allow authenticated users to update menus" ON menus;
DROP POLICY IF EXISTS "Allow authenticated users to delete menus" ON menus;
DROP POLICY IF EXISTS "Allow authenticated users to insert menu_items" ON menu_items;
DROP POLICY IF EXISTS "Allow authenticated users to update menu_items" ON menu_items;
DROP POLICY IF EXISTS "Allow authenticated users to delete menu_items" ON menu_items;

-- Drop tables (this will delete all data)
DROP TABLE IF EXISTS menu_items CASCADE;
DROP TABLE IF EXISTS menus CASCADE;
