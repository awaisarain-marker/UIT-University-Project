-- Add Header Bottom Menu
-- Run this to add the header bottom menu to your existing installation

-- Insert header bottom menu (only if not exists)
INSERT INTO menus (name, slug, location, display_order, is_active) 
SELECT 'Header Bottom Menu', 'header-bottom-menu', 'header-bottom', 2, true
WHERE NOT EXISTS (SELECT 1 FROM menus WHERE slug = 'header-bottom-menu');

-- Get the menu ID and insert default items
DO $$
DECLARE
  bottom_menu_id UUID;
BEGIN
  -- Get menu ID
  SELECT id INTO bottom_menu_id FROM menus WHERE slug = 'header-bottom-menu';

  -- Only insert if menu items don't exist
  IF NOT EXISTS (SELECT 1 FROM menu_items WHERE menu_id = bottom_menu_id) THEN
    -- Insert default bottom menu items
    INSERT INTO menu_items (menu_id, title, url, display_order, is_active) VALUES
    (bottom_menu_id, 'Undergraduate Programs', '/admissions/undergraduate', 1, true),
    (bottom_menu_id, 'Graduate Programs', '/admissions/graduate', 2, true),
    (bottom_menu_id, 'Admission Test Results', '/admissions/admission-test-results', 3, true),
    (bottom_menu_id, 'Scholarship Policy', '/admissions/scholarship-policy', 4, true),
    (bottom_menu_id, 'Outreach Programs', '/admissions/outreach-programs', 5, true),
    (bottom_menu_id, 'Photographs Specification', '/admissions/photographs-specification', 6, true),
    (bottom_menu_id, 'Sample Test Paper', '/admissions/sample-test-paper', 7, true);
  END IF;
END $$;
