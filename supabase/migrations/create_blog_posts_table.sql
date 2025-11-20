-- Create blog_posts table if it doesn't exist
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  author_id TEXT,
  author_name TEXT DEFAULT 'Admin',
  category TEXT,
  image_url TEXT,
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add author_name column if it doesn't exist (for existing tables)
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                 WHERE table_name='blog_posts' AND column_name='author_name') THEN
    ALTER TABLE blog_posts ADD COLUMN author_name TEXT DEFAULT 'Admin';
  END IF;
END $$;

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public can view published blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can manage blog posts" ON blog_posts;

-- Create policy to allow public read access to published posts
CREATE POLICY "Public can view published blog posts" ON blog_posts
  FOR SELECT
  USING (is_published = true);

-- Create policy to allow authenticated users to manage posts (for admin)
CREATE POLICY "Authenticated users can manage blog posts" ON blog_posts
  FOR ALL
  USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop trigger if exists, then create it
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- SAMPLE DATA (OPTIONAL - FOR TESTING ONLY)
-- ============================================
-- Comment out or delete this section if you don't want sample data
-- To remove sample blogs later, run: DELETE FROM blog_posts WHERE author_name IN ('MASON RIVERA', 'SARAH JOHNSON', 'DAVID CHEN', 'EMILY BROWN', 'MICHAEL ANDERSON', 'JESSICA MARTINEZ');

INSERT INTO blog_posts (title, content, excerpt, category, image_url, author_name, is_published, published_at)
VALUES 
  (
    'Visit to Tech Innovation Hub',
    '<p>Our students had an amazing opportunity to visit the Tech Innovation Hub, where they witnessed cutting-edge technology and innovation in action.</p><p>The visit included interactive sessions with industry experts, hands-on demonstrations of emerging technologies, and networking opportunities with professionals in the field.</p><p>Students gained valuable insights into the latest trends in technology and how they can apply their academic knowledge in real-world scenarios.</p>',
    'An exciting day trip to explore the latest innovations in technology and meet industry leaders.',
    'Technology',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    'MASON RIVERA',
    true,
    NOW()
  ),
  (
    'Manufacturing Plant Tour',
    '<p>Students from the Engineering department visited a state-of-the-art manufacturing plant to understand modern production processes and quality control systems.</p><p>The tour provided hands-on experience with industrial equipment and an understanding of supply chain management in a real-world setting.</p>',
    'Engineering students explore modern manufacturing processes and industrial automation.',
    'Engineering',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    'SARAH JOHNSON',
    true,
    NOW() - INTERVAL '7 days'
  ),
  (
    'Financial District Learning Experience',
    '<p>Business students embarked on a day trip to the financial district, visiting major banks and financial institutions.</p><p>They learned about investment strategies, risk management, and the role of financial markets in the global economy.</p>',
    'Business students gain insights into the world of finance and banking.',
    'Business',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    'DAVID CHEN',
    true,
    NOW() - INTERVAL '14 days'
  ),
  (
    'Environmental Conservation Project',
    '<p>Students participated in a hands-on environmental conservation project, learning about sustainable practices and ecological preservation.</p><p>The day included tree planting, waste management workshops, and discussions on climate change mitigation strategies.</p>',
    'Students engage in environmental conservation and learn about sustainability.',
    'Environment',
    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    'EMILY BROWN',
    true,
    NOW() - INTERVAL '21 days'
  ),
  (
    'Healthcare Facility Visit',
    '<p>Medical and nursing students visited a leading healthcare facility to observe modern medical practices and patient care protocols.</p><p>The visit included tours of various departments, interactions with healthcare professionals, and insights into medical technology advancements.</p>',
    'Healthcare students explore modern medical facilities and patient care systems.',
    'Healthcare',
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    'MICHAEL ANDERSON',
    true,
    NOW() - INTERVAL '28 days'
  ),
  (
    'Media Production Studio Tour',
    '<p>Communication and Media students visited a professional production studio to learn about content creation, broadcasting, and digital media production.</p><p>They experienced live production environments and learned about the latest tools and techniques in media production.</p>',
    'Media students discover the world of professional content creation and broadcasting.',
    'Media',
    'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
    'JESSICA MARTINEZ',
    true,
    NOW() - INTERVAL '35 days'
  )
ON CONFLICT DO NOTHING;

-- ============================================
-- END OF SAMPLE DATA
-- ============================================
