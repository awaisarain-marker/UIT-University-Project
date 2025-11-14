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

-- Create faculty_categories table
CREATE TABLE IF NOT EXISTS faculty_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL UNIQUE,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create event_categories table
CREATE TABLE IF NOT EXISTS event_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL UNIQUE,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog_categories table
CREATE TABLE IF NOT EXISTS blog_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL UNIQUE,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default course categories
INSERT INTO course_categories (name, slug, description, display_order) VALUES
  ('All Courses', 'all-courses', 'View all available courses', 0),
  ('Undergraduate', 'undergraduate', 'Bachelor degree programs', 1),
  ('Graduate', 'graduate', 'Master and PhD programs', 2),
  ('Short Courses', 'short-courses', 'Short term certification courses', 3)
ON CONFLICT (slug) DO NOTHING;

-- Insert default faculty categories
INSERT INTO faculty_categories (name, slug, description, display_order) VALUES
  ('Computer Science', 'computer-science', 'Computer Science Department', 1),
  ('Engineering', 'engineering', 'Engineering Department', 2),
  ('Business', 'business', 'Business Administration', 3),
  ('Mathematics', 'mathematics', 'Mathematics Department', 4),
  ('Physics', 'physics', 'Physics Department', 5)
ON CONFLICT (slug) DO NOTHING;

-- Insert default event categories
INSERT INTO event_categories (name, slug, description, display_order) VALUES
  ('Workshop', 'workshop', 'Educational workshops', 1),
  ('Seminar', 'seminar', 'Academic seminars', 2),
  ('Conference', 'conference', 'Academic conferences', 3),
  ('Competition', 'competition', 'Student competitions', 4),
  ('Social', 'social', 'Social events', 5)
ON CONFLICT (slug) DO NOTHING;

-- Insert default blog categories
INSERT INTO blog_categories (name, slug, description, display_order) VALUES
  ('News', 'news', 'University news and updates', 1),
  ('Research', 'research', 'Research articles', 2),
  ('Student Life', 'student-life', 'Student activities and life', 3),
  ('Technology', 'technology', 'Technology and innovation', 4),
  ('Announcements', 'announcements', 'Official announcements', 5)
ON CONFLICT (slug) DO NOTHING;

-- Enable RLS on all tables
ALTER TABLE course_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE faculty_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;

-- Create policies for course_categories
CREATE POLICY "Allow public read access to active course categories"
  ON course_categories FOR SELECT
  USING (is_active = true);

CREATE POLICY "Allow authenticated users to manage course categories"
  ON course_categories FOR ALL
  USING (auth.role() = 'authenticated');

-- Create policies for faculty_categories
CREATE POLICY "Allow public read access to active faculty categories"
  ON faculty_categories FOR SELECT
  USING (is_active = true);

CREATE POLICY "Allow authenticated users to manage faculty categories"
  ON faculty_categories FOR ALL
  USING (auth.role() = 'authenticated');

-- Create policies for event_categories
CREATE POLICY "Allow public read access to active event categories"
  ON event_categories FOR SELECT
  USING (is_active = true);

CREATE POLICY "Allow authenticated users to manage event categories"
  ON event_categories FOR ALL
  USING (auth.role() = 'authenticated');

-- Create policies for blog_categories
CREATE POLICY "Allow public read access to active blog categories"
  ON blog_categories FOR SELECT
  USING (is_active = true);

CREATE POLICY "Allow authenticated users to manage blog categories"
  ON blog_categories FOR ALL
  USING (auth.role() = 'authenticated');

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for all category tables (drop if exists first)
DROP TRIGGER IF EXISTS update_course_categories_updated_at ON course_categories;
CREATE TRIGGER update_course_categories_updated_at
  BEFORE UPDATE ON course_categories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_faculty_categories_updated_at ON faculty_categories;
CREATE TRIGGER update_faculty_categories_updated_at
  BEFORE UPDATE ON faculty_categories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_event_categories_updated_at ON event_categories;
CREATE TRIGGER update_event_categories_updated_at
  BEFORE UPDATE ON event_categories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_blog_categories_updated_at ON blog_categories;
CREATE TRIGGER update_blog_categories_updated_at
  BEFORE UPDATE ON blog_categories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add category_id columns to existing tables (if they don't exist)
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='courses' AND column_name='category_id') THEN
    ALTER TABLE courses ADD COLUMN category_id UUID REFERENCES course_categories(id);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='instructors' AND column_name='category_id') THEN
    ALTER TABLE instructors ADD COLUMN category_id UUID REFERENCES faculty_categories(id);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='category_id') THEN
    ALTER TABLE events ADD COLUMN category_id UUID REFERENCES event_categories(id);
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='blog_posts' AND column_name='category_id') THEN
    ALTER TABLE blog_posts ADD COLUMN category_id UUID REFERENCES blog_categories(id);
  END IF;
END $$;
