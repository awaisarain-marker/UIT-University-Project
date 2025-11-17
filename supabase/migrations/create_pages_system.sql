-- Create pages table for managing site pages
CREATE TABLE IF NOT EXISTS pages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  content TEXT,
  meta_description TEXT,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_pages_slug ON pages(slug);
CREATE INDEX IF NOT EXISTS idx_pages_published ON pages(is_published);

-- Enable RLS
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public read access to published pages" ON pages;
DROP POLICY IF EXISTS "Allow authenticated users to manage pages" ON pages;

-- Public can read published pages
CREATE POLICY "Allow public read access to published pages"
  ON pages FOR SELECT
  USING (is_published = true);

-- Authenticated users can manage all pages
CREATE POLICY "Allow authenticated users to manage pages"
  ON pages FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Add comments
COMMENT ON TABLE pages IS 'Stores site pages that can be linked in menus';
COMMENT ON COLUMN pages.slug IS 'URL-friendly identifier (e.g., about-us)';
COMMENT ON COLUMN pages.is_published IS 'Whether the page is publicly visible';

-- Insert all existing pages
INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Home', 'home', 'UIT University homepage', 'Welcome to UIT University', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'home');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'About Us', 'about', 'About UIT University', 'Learn about UIT University, our mission, vision, and values', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'about');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Admissions', 'admissions', 'Admissions information and requirements', 'Apply to UIT University - admission requirements and process', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'admissions');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Apply Now', 'apply', 'Application form and process', 'Apply to UIT University online', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'apply');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Contact Us', 'contact', 'Contact information and form', 'Get in touch with UIT University', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'contact');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Courses', 'courses', 'Academic programs and courses', 'Explore our undergraduate and graduate programs', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'courses');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Faculty', 'faculty', 'Our faculty members', 'Meet our distinguished faculty members', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'faculty');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'MERL', 'merl', 'Microwave Engineering Research Lab', 'Research and innovation at MERL', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'merl');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'ORIC', 'oric', 'Office of Research, Innovation and Commercialization', 'Research and innovation initiatives', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'oric');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'QEC', 'qec', 'Quality Enhancement Cell', 'Quality assurance and enhancement', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'qec');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Post Quantum Lab', 'post-quantum-lab', 'Post Quantum Cryptography Lab', 'Advanced cryptography research', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'post-quantum-lab');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Chat Assistant', 'chat', 'AI-powered chat assistant', 'Get instant answers to your questions', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'chat');

-- Additional common pages
INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'FAQs', 'faq', 'Frequently Asked Questions', 'Common questions and answers', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'faq');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Fee Structure', 'fee-structure', 'Tuition and fee information', 'Complete fee structure for all programs', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'fee-structure');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Fee Refund Policy', 'fee-refund-policy', 'Fee refund policy and procedures', 'Understand our fee refund policy', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'fee-refund-policy');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'How to Apply', 'how-to-apply', 'Application process and requirements', 'Step-by-step application guide', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'how-to-apply');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Careers', 'careers', 'Career opportunities at UIT', 'Join our team - current openings', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'careers');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Short Courses', 'short-courses', 'Professional development courses', 'Short-term courses and certifications', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'short-courses');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Vice Chancellor''s Message', 'vc-message', 'Message from the Vice Chancellor', 'Welcome message from our Vice Chancellor', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'vc-message');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Vision & Mission', 'vision-mission', 'Our vision and mission', 'UIT University vision and mission statements', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'vision-mission');

-- Admissions pages
INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Admissions Information', 'admissions/information', 'General admissions information', 'Learn about admission requirements and process', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'admissions/information');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Undergraduate Admissions', 'admissions/undergraduate', 'Undergraduate admission requirements', 'Apply for undergraduate programs', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'admissions/undergraduate');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Graduate Admissions', 'admissions/graduate', 'Graduate admission requirements', 'Apply for graduate programs', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'admissions/graduate');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Admission Test Results', 'admissions/admission-test-results', 'Check your admission test results', 'View admission test results and merit lists', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'admissions/admission-test-results');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Scholarship Policy', 'admissions/scholarship-policy', 'Scholarship opportunities and policies', 'Financial aid and scholarship information', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'admissions/scholarship-policy');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Outreach Programs', 'admissions/outreach-programs', 'Community outreach and engagement programs', 'Learn about our outreach initiatives', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'admissions/outreach-programs');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Photographs Specification', 'admissions/photographs-specification', 'Photo requirements for admission', 'Guidelines for admission photographs', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'admissions/photographs-specification');

INSERT INTO pages (title, slug, content, meta_description, is_published) 
SELECT 'Sample Test Paper', 'admissions/sample-test-paper', 'Sample admission test papers', 'Practice with sample test papers', true
WHERE NOT EXISTS (SELECT 1 FROM pages WHERE slug = 'admissions/sample-test-paper');
