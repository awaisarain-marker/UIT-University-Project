-- Add Mobile Menu
-- Run this to add a mobile-specific menu

-- Insert mobile menu (only if not exists)
INSERT INTO menus (name, slug, location, display_order, is_active) 
SELECT 'Mobile Menu', 'mobile-menu', 'mobile', 3, true
WHERE NOT EXISTS (SELECT 1 FROM menus WHERE slug = 'mobile-menu');

-- Get the menu ID and insert default items
DO $$
DECLARE
  mobile_menu_id UUID;
BEGIN
  -- Get menu ID
  SELECT id INTO mobile_menu_id FROM menus WHERE slug = 'mobile-menu';

  -- Only insert if menu items don't exist
  IF NOT EXISTS (SELECT 1 FROM menu_items WHERE menu_id = mobile_menu_id) THEN
    -- Insert default mobile menu items
    INSERT INTO menu_items (menu_id, title, url, display_order, is_active) VALUES
    (mobile_menu_id, 'Home', '/', 1, true),
    (mobile_menu_id, 'About', '/about', 2, true),
    (mobile_menu_id, 'Admissions', '/admissions', 3, true),
    (mobile_menu_id, 'Academics', '/courses', 4, true),
    (mobile_menu_id, 'Faculty', '/faculty', 5, true),
    (mobile_menu_id, 'Contact', '/contact', 6, true);
  END IF;
END $$;
