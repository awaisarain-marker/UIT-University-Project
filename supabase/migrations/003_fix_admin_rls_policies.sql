-- Migration: Fix RLS Policies for Admin Operations
-- Created: 2024-11-14
-- Description: Adds policies to allow authenticated users (admins) to manage all content

-- Drop existing restrictive policies and add admin-friendly ones

-- Instructors policies
DROP POLICY IF EXISTS "Instructors are viewable by everyone" ON instructors;
CREATE POLICY "Instructors are viewable by everyone" 
    ON instructors FOR SELECT 
    USING (true);

CREATE POLICY "Authenticated users can insert instructors" 
    ON instructors FOR INSERT 
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update instructors" 
    ON instructors FOR UPDATE 
    USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete instructors" 
    ON instructors FOR DELETE 
    USING (auth.role() = 'authenticated');

-- Courses policies
DROP POLICY IF EXISTS "Public courses are viewable by everyone" ON courses;
CREATE POLICY "Courses are viewable by everyone" 
    ON courses FOR SELECT 
    USING (true);

CREATE POLICY "Authenticated users can insert courses" 
    ON courses FOR INSERT 
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update courses" 
    ON courses FOR UPDATE 
    USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete courses" 
    ON courses FOR DELETE 
    USING (auth.role() = 'authenticated');

-- Events policies
DROP POLICY IF EXISTS "Public events are viewable by everyone" ON events;
CREATE POLICY "Events are viewable by everyone" 
    ON events FOR SELECT 
    USING (true);

CREATE POLICY "Authenticated users can insert events" 
    ON events FOR INSERT 
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update events" 
    ON events FOR UPDATE 
    USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete events" 
    ON events FOR DELETE 
    USING (auth.role() = 'authenticated');

-- Blog posts policies
DROP POLICY IF EXISTS "Published blog posts are viewable by everyone" ON blog_posts;
CREATE POLICY "Blog posts are viewable by everyone" 
    ON blog_posts FOR SELECT 
    USING (true);

CREATE POLICY "Authenticated users can insert blog posts" 
    ON blog_posts FOR INSERT 
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update blog posts" 
    ON blog_posts FOR UPDATE 
    USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete blog posts" 
    ON blog_posts FOR DELETE 
    USING (auth.role() = 'authenticated');

-- Students policies
DROP POLICY IF EXISTS "Students can view own profile" ON students;
DROP POLICY IF EXISTS "Students can update own profile" ON students;

CREATE POLICY "Students are viewable by authenticated users" 
    ON students FOR SELECT 
    USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can insert students" 
    ON students FOR INSERT 
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update students" 
    ON students FOR UPDATE 
    USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete students" 
    ON students FOR DELETE 
    USING (auth.role() = 'authenticated');

-- Enrollments policies
DROP POLICY IF EXISTS "Students can view own enrollments" ON enrollments;
DROP POLICY IF EXISTS "Students can create enrollments" ON enrollments;

CREATE POLICY "Enrollments are viewable by authenticated users" 
    ON enrollments FOR SELECT 
    USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can insert enrollments" 
    ON enrollments FOR INSERT 
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update enrollments" 
    ON enrollments FOR UPDATE 
    USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete enrollments" 
    ON enrollments FOR DELETE 
    USING (auth.role() = 'authenticated');

-- Testimonials policies
DROP POLICY IF EXISTS "Approved testimonials are viewable by everyone" ON testimonials;

CREATE POLICY "Testimonials are viewable by everyone" 
    ON testimonials FOR SELECT 
    USING (true);

CREATE POLICY "Authenticated users can insert testimonials" 
    ON testimonials FOR INSERT 
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update testimonials" 
    ON testimonials FOR UPDATE 
    USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete testimonials" 
    ON testimonials FOR DELETE 
    USING (auth.role() = 'authenticated');

-- Event attendees policies
DROP POLICY IF EXISTS "Students can view own event attendances" ON event_attendees;
DROP POLICY IF EXISTS "Students can register for events" ON event_attendees;

CREATE POLICY "Event attendees are viewable by authenticated users" 
    ON event_attendees FOR SELECT 
    USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can insert event attendees" 
    ON event_attendees FOR INSERT 
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update event attendees" 
    ON event_attendees FOR UPDATE 
    USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete event attendees" 
    ON event_attendees FOR DELETE 
    USING (auth.role() = 'authenticated');

-- Categories policies (from previous migration)
CREATE POLICY "Authenticated users can insert categories" 
    ON categories FOR INSERT 
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update categories" 
    ON categories FOR UPDATE 
    USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete categories" 
    ON categories FOR DELETE 
    USING (auth.role() = 'authenticated');

-- Notifications policies
CREATE POLICY "Authenticated users can insert notifications" 
    ON notifications FOR INSERT 
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update notifications" 
    ON notifications FOR UPDATE 
    USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete notifications" 
    ON notifications FOR DELETE 
    USING (auth.role() = 'authenticated');

-- User roles policies
CREATE POLICY "Authenticated users can view all roles" 
    ON user_roles FOR SELECT 
    USING (auth.role() = 'authenticated');

-- Dashboard stats policies
CREATE POLICY "Authenticated users can insert dashboard stats" 
    ON dashboard_stats FOR INSERT 
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update dashboard stats" 
    ON dashboard_stats FOR UPDATE 
    USING (auth.role() = 'authenticated');
