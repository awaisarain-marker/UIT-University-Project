-- Create course_categories table
CREATE TABLE IF NOT EXISTS course_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL UNIQUE,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default categories
INSERT INTO course_categories (name, slug, description, display_order) VALUES
  ('All Courses', 'all-courses', 'View all available courses', 0),
  ('Undergraduate', 'undergraduate', 'Bachelor degree programs', 1),
  ('Graduate', 'graduate', 'Master and PhD programs', 2),
  ('Short Courses', 'short-courses', 'Short term certification courses', 3)
ON CONFLICT (slug) DO NOTHING;

-- Enable RLS
ALTER TABLE course_categories ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to active categories"
  ON course_categories FOR SELECT
  USING (is_active = true);

CREATE POLICY "Allow authenticated users to manage categories"
  ON course_categories FOR ALL
  USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_course_categories_updated_at
  BEFORE UPDATE ON course_categories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
