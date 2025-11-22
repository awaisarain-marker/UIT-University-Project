-- This script inserts test mega menu data
-- First, find a menu item to attach the mega menu to
-- Replace 'YOUR_MENU_ITEM_ID' with an actual menu item ID from your database

-- Example: Insert mega menu sections for a "More Pages" menu item
-- Step 1: Get a menu item ID (run this first to find an ID)
-- SELECT id, title FROM menu_items WHERE is_active = true LIMIT 5;

-- Step 2: Replace the menu_item_id below with your actual menu item ID
-- Then run the INSERT statements

-- Insert Section 1: Academic Programs
INSERT INTO mega_menu_sections (menu_item_id, title, display_order, is_active)
VALUES ('YOUR_MENU_ITEM_ID', 'Academic Programs', 0, true)
RETURNING id;

-- Note the returned ID and use it below for section_id

-- Insert links for Academic Programs section
INSERT INTO mega_menu_links (section_id, title, url, target, display_order, is_active)
VALUES 
  ('SECTION_1_ID', 'Computer Science', '/programs/computer-science', '_self', 0, true),
  ('SECTION_1_ID', 'Engineering', '/programs/engineering', '_self', 1, true),
  ('SECTION_1_ID', 'Business Administration', '/programs/business', '_self', 2, true);

-- Insert Section 2: Student Services
INSERT INTO mega_menu_sections (menu_item_id, title, display_order, is_active)
VALUES ('YOUR_MENU_ITEM_ID', 'Student Services', 1, true)
RETURNING id;

-- Insert links for Student Services section
INSERT INTO mega_menu_links (section_id, title, url, target, display_order, is_active)
VALUES 
  ('SECTION_2_ID', 'Student Affairs', '/student/student-affairs', '_self', 0, true),
  ('SECTION_2_ID', 'Scholarships', '/student/scholarships', '_self', 1, true),
  ('SECTION_2_ID', 'Career Services', '/student/career', '_self', 2, true);

-- Insert Section 3: Resources
INSERT INTO mega_menu_sections (menu_item_id, title, display_order, is_active)
VALUES ('YOUR_MENU_ITEM_ID', 'Resources', 2, true)
RETURNING id;

-- Insert links for Resources section
INSERT INTO mega_menu_links (section_id, title, url, target, display_order, is_active)
VALUES 
  ('SECTION_3_ID', 'Campus Map', '/resources/campus-map', '_self', 0, true),
  ('SECTION_3_ID', 'Academic Calendar', '/resources/calendar', '_self', 1, true),
  ('SECTION_3_ID', 'Contact Directory', '/resources/contact', '_self', 2, true);
