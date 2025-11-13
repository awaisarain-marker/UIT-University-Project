-- Migration: Add Categories and Notifications Tables
-- Created: 2024-11-13
-- Description: Creates tables for managing categories and notifications dynamically

-- Categories table (for all content types)
CREATE TABLE IF NOT EXISTS categories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL CHECK (type IN ('course', 'event', 'blog', 'faculty')),
    description TEXT,
    slug VARCHAR(100),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(name, type)
);

-- Notifications table
CREATE TABLE IF NOT EXISTS notifications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    type VARCHAR(50) DEFAULT 'info' CHECK (type IN ('info', 'success', 'warning', 'error')),
    link TEXT,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User roles table (for dynamic role management)
CREATE TABLE IF NOT EXISTS user_roles (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    display_name VARCHAR(100) NOT NULL,
    description TEXT,
    permissions JSONB DEFAULT '[]'::jsonb,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Dashboard stats history (for calculating trends)
CREATE TABLE IF NOT EXISTS dashboard_stats (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    stat_date DATE NOT NULL DEFAULT CURRENT_DATE,
    courses_count INTEGER DEFAULT 0,
    instructors_count INTEGER DEFAULT 0,
    events_count INTEGER DEFAULT 0,
    blog_posts_count INTEGER DEFAULT 0,
    users_count INTEGER DEFAULT 0,
    enrollments_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(stat_date)
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_categories_type ON categories(type);
CREATE INDEX IF NOT EXISTS idx_categories_is_active ON categories(is_active);
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_is_read ON notifications(is_read);
CREATE INDEX IF NOT EXISTS idx_dashboard_stats_date ON dashboard_stats(stat_date);

-- Create triggers for updated_at
CREATE TRIGGER update_categories_updated_at 
    BEFORE UPDATE ON categories 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_notifications_updated_at 
    BEFORE UPDATE ON notifications 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_roles_updated_at 
    BEFORE UPDATE ON user_roles 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE dashboard_stats ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Categories are viewable by everyone" 
    ON categories FOR SELECT 
    USING (is_active = true);

CREATE POLICY "Notifications are viewable by owner" 
    ON notifications FOR SELECT 
    USING (auth.uid()::text = user_id::text);

CREATE POLICY "User roles are viewable by everyone" 
    ON user_roles FOR SELECT 
    USING (is_active = true);

CREATE POLICY "Dashboard stats are viewable by authenticated users" 
    ON dashboard_stats FOR SELECT 
    USING (auth.role() = 'authenticated');

-- Insert default categories
INSERT INTO categories (name, type, description) VALUES
    ('Computer Science', 'course', 'Computer Science and IT courses'),
    ('Engineering', 'course', 'Engineering courses'),
    ('Business', 'course', 'Business and Management courses'),
    ('Arts', 'course', 'Arts and Humanities courses'),
    ('Science', 'course', 'Natural Sciences courses'),
    ('Conference', 'event', 'Academic and professional conferences'),
    ('Workshop', 'event', 'Hands-on workshops and training'),
    ('Seminar', 'event', 'Educational seminars'),
    ('Sports', 'event', 'Sports and athletic events'),
    ('Cultural', 'event', 'Cultural events and celebrations'),
    ('Academic', 'event', 'Academic events'),
    ('News', 'blog', 'University news and announcements'),
    ('Research', 'blog', 'Research articles and publications'),
    ('Student Life', 'blog', 'Student activities and life'),
    ('Announcements', 'blog', 'Official announcements'),
    ('Computer Science', 'faculty', 'Computer Science specialization'),
    ('Engineering', 'faculty', 'Engineering specialization'),
    ('Mathematics', 'faculty', 'Mathematics specialization'),
    ('Physics', 'faculty', 'Physics specialization'),
    ('Business', 'faculty', 'Business and Management specialization')
ON CONFLICT (name, type) DO NOTHING;

-- Insert default user roles
INSERT INTO user_roles (name, display_name, description, permissions) VALUES
    ('admin', 'Administrator', 'Full access to all features', 
     '["users.manage", "content.manage", "settings.manage", "analytics.view"]'::jsonb),
    ('editor', 'Editor', 'Can create and edit content', 
     '["content.create", "content.edit", "content.delete", "analytics.view"]'::jsonb),
    ('viewer', 'Viewer', 'Read-only access', 
     '["content.view", "analytics.view"]'::jsonb)
ON CONFLICT (name) DO NOTHING;

-- Function to record daily stats
CREATE OR REPLACE FUNCTION record_daily_stats()
RETURNS void AS $$
DECLARE
    v_courses_count INTEGER;
    v_instructors_count INTEGER;
    v_events_count INTEGER;
    v_blog_posts_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO v_courses_count FROM courses;
    SELECT COUNT(*) INTO v_instructors_count FROM instructors;
    SELECT COUNT(*) INTO v_events_count FROM events;
    SELECT COUNT(*) INTO v_blog_posts_count FROM blog_posts;
    
    INSERT INTO dashboard_stats (
        stat_date, 
        courses_count, 
        instructors_count, 
        events_count, 
        blog_posts_count
    ) VALUES (
        CURRENT_DATE,
        v_courses_count,
        v_instructors_count,
        v_events_count,
        v_blog_posts_count
    )
    ON CONFLICT (stat_date) 
    DO UPDATE SET
        courses_count = EXCLUDED.courses_count,
        instructors_count = EXCLUDED.instructors_count,
        events_count = EXCLUDED.events_count,
        blog_posts_count = EXCLUDED.blog_posts_count;
END;
$$ LANGUAGE plpgsql;
