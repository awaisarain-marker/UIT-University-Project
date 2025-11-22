-- Create mega menu sections table
CREATE TABLE IF NOT EXISTS mega_menu_sections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  menu_item_id UUID REFERENCES menu_items(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create mega menu links table (items within sections)
CREATE TABLE IF NOT EXISTS mega_menu_links (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section_id UUID REFERENCES mega_menu_sections(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  url VARCHAR(500) NOT NULL,
  target VARCHAR(20) DEFAULT '_self',
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_mega_menu_sections_menu_item ON mega_menu_sections(menu_item_id);
CREATE INDEX IF NOT EXISTS idx_mega_menu_sections_order ON mega_menu_sections(display_order);
CREATE INDEX IF NOT EXISTS idx_mega_menu_links_section ON mega_menu_links(section_id);
CREATE INDEX IF NOT EXISTS idx_mega_menu_links_order ON mega_menu_links(display_order);

-- Enable RLS
ALTER TABLE mega_menu_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE mega_menu_links ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Allow public read access to mega_menu_sections"
  ON mega_menu_sections FOR SELECT
  USING (is_active = true);

CREATE POLICY "Allow public read access to mega_menu_links"
  ON mega_menu_links FOR SELECT
  USING (is_active = true);

-- Authenticated users can manage
CREATE POLICY "Allow authenticated users to insert mega_menu_sections"
  ON mega_menu_sections FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update mega_menu_sections"
  ON mega_menu_sections FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete mega_menu_sections"
  ON mega_menu_sections FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert mega_menu_links"
  ON mega_menu_links FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update mega_menu_links"
  ON mega_menu_links FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete mega_menu_links"
  ON mega_menu_links FOR DELETE
  TO authenticated
  USING (true);

-- Add comments
COMMENT ON TABLE mega_menu_sections IS 'Sections/columns in mega menu dropdowns';
COMMENT ON TABLE mega_menu_links IS 'Individual links within mega menu sections';
COMMENT ON COLUMN mega_menu_sections.menu_item_id IS 'Parent menu item that triggers the mega menu';
COMMENT ON COLUMN mega_menu_sections.title IS 'Section heading (e.g., "Academic Programs")';
