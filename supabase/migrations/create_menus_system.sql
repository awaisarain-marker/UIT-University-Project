-- Create menus table for dynamic header and footer menus
CREATE TABLE IF NOT EXISTS menus (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  location VARCHAR(50) NOT NULL, -- 'header' or 'footer'
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create menu_items table for menu items with hierarchy support
CREATE TABLE IF NOT EXISTS menu_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  menu_id UUID REFERENCES menus(id) ON DELETE CASCADE,
  parent_id UUID REFERENCES menu_items(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  url VARCHAR(500),
  target VARCHAR(20) DEFAULT '_self', -- '_self' or '_blank'
  icon VARCHAR(100),
  css_class VARCHAR(100),
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_menus_location ON menus(location);
CREATE INDEX IF NOT EXISTS idx_menus_slug ON menus(slug);
CREATE INDEX IF NOT EXISTS idx_menu_items_menu_id ON menu_items(menu_id);
CREATE INDEX IF NOT EXISTS idx_menu_items_parent_id ON menu_items(parent_id);
CREATE INDEX IF NOT EXISTS idx_menu_items_display_order ON menu_items(display_order);

-- Add RLS policies
ALTER TABLE menus ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public read access to menus" ON menus;
DROP POLICY IF EXISTS "Allow public read access to menu_items" ON menu_items;
DROP POLICY IF EXISTS "Allow authenticated users to insert menus" ON menus;
DROP POLICY IF EXISTS "Allow authenticated users to update menus" ON menus;
DROP POLICY IF EXISTS "Allow authenticated users to delete menus" ON menus;
DROP POLICY IF EXISTS "Allow authenticated users to insert menu_items" ON menu_items;
DROP POLICY IF EXISTS "Allow authenticated users to update menu_items" ON menu_items;
DROP POLICY IF EXISTS "Allow authenticated users to delete menu_items" ON menu_items;

-- Public read access
CREATE POLICY "Allow public read access to menus"
  ON menus FOR SELECT
  USING (is_active = true);

CREATE POLICY "Allow public read access to menu_items"
  ON menu_items FOR SELECT
  USING (is_active = true);

-- Authenticated users can manage menus
CREATE POLICY "Allow authenticated users to insert menus"
  ON menus FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update menus"
  ON menus FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete menus"
  ON menus FOR DELETE
  TO authenticated
  USING (true);

-- Authenticated users can manage menu items
CREATE POLICY "Allow authenticated users to insert menu_items"
  ON menu_items FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update menu_items"
  ON menu_items FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete menu_items"
  ON menu_items FOR DELETE
  TO authenticated
  USING (true);

-- Add comments
COMMENT ON TABLE menus IS 'Stores menu configurations for header and footer';
COMMENT ON TABLE menu_items IS 'Stores menu items with support for nested hierarchy';
COMMENT ON COLUMN menus.location IS 'Menu location: header or footer';
COMMENT ON COLUMN menu_items.parent_id IS 'Parent menu item ID for nested menus (NULL for top-level items)';
COMMENT ON COLUMN menu_items.target IS 'Link target: _self (same window) or _blank (new window)';

-- Insert default header menu (only if not exists)
INSERT INTO menus (name, slug, location, display_order) 
SELECT 'Main Navigation', 'main-navigation', 'header', 1
WHERE NOT EXISTS (SELECT 1 FROM menus WHERE slug = 'main-navigation');

-- Insert default footer menus (only if not exists)
INSERT INTO menus (name, slug, location, display_order) 
SELECT 'Quick Links', 'quick-links', 'footer', 1
WHERE NOT EXISTS (SELECT 1 FROM menus WHERE slug = 'quick-links');

INSERT INTO menus (name, slug, location, display_order) 
SELECT 'Information', 'information', 'footer', 2
WHERE NOT EXISTS (SELECT 1 FROM menus WHERE slug = 'information');

INSERT INTO menus (name, slug, location, display_order) 
SELECT 'Undergraduate Programs', 'undergraduate-programs', 'footer', 3
WHERE NOT EXISTS (SELECT 1 FROM menus WHERE slug = 'undergraduate-programs');

-- Get the menu IDs and insert default items
DO $$
DECLARE
  header_menu_id UUID;
  quick_links_id UUID;
  information_id UUID;
  undergrad_id UUID;
  about_parent_id UUID;
  academics_parent_id UUID;
  admissions_parent_id UUID;
  more_parent_id UUID;
BEGIN
  -- Get menu IDs
  SELECT id INTO header_menu_id FROM menus WHERE slug = 'main-navigation';
  SELECT id INTO quick_links_id FROM menus WHERE slug = 'quick-links';
  SELECT id INTO information_id FROM menus WHERE slug = 'information';
  SELECT id INTO undergrad_id FROM menus WHERE slug = 'undergraduate-programs';

  -- Only insert if menu items don't exist
  IF NOT EXISTS (SELECT 1 FROM menu_items WHERE menu_id = header_menu_id) THEN
    -- Insert header menu items
    INSERT INTO menu_items (menu_id, title, url, display_order) VALUES
    (header_menu_id, 'Home', '/', 1);
    
    -- About with dropdown
    INSERT INTO menu_items (menu_id, title, url, display_order) 
    VALUES (header_menu_id, 'About', '/about', 2)
    RETURNING id INTO about_parent_id;
    
    INSERT INTO menu_items (menu_id, parent_id, title, url, display_order) VALUES
    (header_menu_id, about_parent_id, 'About UIT', '/about', 1),
    (header_menu_id, about_parent_id, 'Our Mission', '/about#mission', 2),
    (header_menu_id, about_parent_id, 'Leadership', '/about#leadership', 3),
    (header_menu_id, about_parent_id, 'Campus', '/about#campus', 4);
    
    -- Academics with dropdown
    INSERT INTO menu_items (menu_id, title, url, display_order) 
    VALUES (header_menu_id, 'Academics', '/courses', 3)
    RETURNING id INTO academics_parent_id;
    
    INSERT INTO menu_items (menu_id, parent_id, title, url, display_order) VALUES
    (header_menu_id, academics_parent_id, 'All Programs', '/courses', 1),
    (header_menu_id, academics_parent_id, 'Engineering', '/courses?category=engineering', 2),
    (header_menu_id, academics_parent_id, 'Computer Science', '/courses?category=computer-science', 3),
    (header_menu_id, academics_parent_id, 'Business', '/courses?category=business', 4);
    
    INSERT INTO menu_items (menu_id, title, url, display_order) VALUES
    (header_menu_id, 'MERL', '/merl', 4),
    (header_menu_id, 'Faculty', '/faculty', 5);
    
    -- Admissions with dropdown
    INSERT INTO menu_items (menu_id, title, url, display_order) 
    VALUES (header_menu_id, 'Admissions', '/admissions', 6)
    RETURNING id INTO admissions_parent_id;
    
    INSERT INTO menu_items (menu_id, parent_id, title, url, display_order) VALUES
    (header_menu_id, admissions_parent_id, 'Information', '/admissions/information', 1),
    (header_menu_id, admissions_parent_id, 'FAQs', '/admissions/faq', 2),
    (header_menu_id, admissions_parent_id, 'How to Apply', '/admissions/how-to-apply', 3),
    (header_menu_id, admissions_parent_id, 'Fee Structure', '/admissions/fee-structure', 4);
    
    -- More with dropdown
    INSERT INTO menu_items (menu_id, title, url, display_order) 
    VALUES (header_menu_id, 'More', '#', 7)
    RETURNING id INTO more_parent_id;
    
    INSERT INTO menu_items (menu_id, parent_id, title, url, display_order) VALUES
    (header_menu_id, more_parent_id, 'QEC', '/qec', 1),
    (header_menu_id, more_parent_id, 'ORIC', '/oric', 2);
    
    INSERT INTO menu_items (menu_id, title, url, display_order) VALUES
    (header_menu_id, 'Contact', '/contact', 8);
  END IF;

  -- Insert footer menu items only if they don't exist
  IF NOT EXISTS (SELECT 1 FROM menu_items WHERE menu_id = quick_links_id) THEN
    INSERT INTO menu_items (menu_id, title, url, display_order) VALUES
    (quick_links_id, 'Careers', '/careers', 1),
    (quick_links_id, 'FAQs', '/faq', 2),
    (quick_links_id, 'Fee Refund Policy', '/fee-refund-policy', 3),
    (quick_links_id, 'Fee Structure', '/fee-structure', 4),
    (quick_links_id, 'How to Apply', '/how-to-apply', 5);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM menu_items WHERE menu_id = information_id) THEN
    INSERT INTO menu_items (menu_id, title, url, display_order) VALUES
    (information_id, 'Short Courses', '/short-courses', 1),
    (information_id, 'Vice Chancellor''s Message', '/vc-message', 2),
    (information_id, 'Vision & Mission', '/vision-mission', 3);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM menu_items WHERE menu_id = undergrad_id) THEN
    INSERT INTO menu_items (menu_id, title, url, display_order) VALUES
    (undergrad_id, 'BS Computer Science', '/programs/bs-computer-science', 1),
    (undergrad_id, 'BS Software Engineering', '/programs/bs-software-engineering', 2),
    (undergrad_id, 'BE Electrical (Electronic)', '/programs/be-electrical-electronic', 3),
    (undergrad_id, 'BE Computer Systems', '/programs/be-computer-systems', 4),
    (undergrad_id, 'BBA (Business Administration)', '/programs/bba', 5);
  END IF;
END $$;
