-- Create short_course_categories table
CREATE TABLE IF NOT EXISTS short_course_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL UNIQUE,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default short course categories
INSERT INTO short_course_categories (name, slug, description, display_order) VALUES
  ('Programming', 'programming', 'Programming and coding courses', 1),
  ('Design', 'design', 'Graphic and UI/UX design courses', 2),
  ('Business', 'business', 'Business and management courses', 3),
  ('Marketing', 'marketing', 'Digital marketing courses', 4),
  ('Data Science', 'data-science', 'Data analysis and science courses', 5),
  ('Language', 'language', 'Language learning courses', 6)
ON CONFLICT (slug) DO NOTHING;

-- Enable RLS
ALTER TABLE short_course_categories ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to active short course categories"
  ON short_course_categories FOR SELECT
  USING (is_active = true);

CREATE POLICY "Allow authenticated users to manage short course categories"
  ON short_course_categories FOR ALL
  USING (auth.role() = 'authenticated');

-- Create updated_at trigger
DROP TRIGGER IF EXISTS update_short_course_categories_updated_at ON short_course_categories;
CREATE TRIGGER update_short_course_categories_updated_at
  BEFORE UPDATE ON short_course_categories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add short_course_category_id column to courses table (if it doesn't exist)
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='courses' AND column_name='short_course_category_id') THEN
    ALTER TABLE courses ADD COLUMN short_course_category_id UUID REFERENCES short_course_categories(id);
  END IF;
END $$;
