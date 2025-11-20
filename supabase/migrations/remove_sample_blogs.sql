-- ============================================
-- REMOVE SAMPLE BLOG POSTS
-- ============================================
-- Run this script to remove all sample blog posts
-- This will only delete the sample data, not your real blogs

DELETE FROM blog_posts 
WHERE author_name IN (
  'MASON RIVERA', 
  'SARAH JOHNSON', 
  'DAVID CHEN', 
  'EMILY BROWN', 
  'MICHAEL ANDERSON', 
  'JESSICA MARTINEZ'
);

-- Verify deletion
SELECT COUNT(*) as remaining_blogs FROM blog_posts;
