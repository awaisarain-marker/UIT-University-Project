-- QUICK FIX: Run this immediately to fix RLS issues
-- This allows authenticated users to manage all content

-- INSTRUCTORS
DROP POLICY IF EXISTS "Instructors are viewable by everyone" ON instructors;
DROP POLICY IF EXISTS "Authenticated users can insert instructors" ON instructors;
DROP POLICY IF EXISTS "Authenticated users can update instructors" ON instructors;
DROP POLICY IF EXISTS "Authenticated users can delete instructors" ON instructors;

CREATE POLICY "Anyone can view instructors" ON instructors FOR SELECT USING (true);
CREATE POLICY "Authenticated can insert instructors" ON instructors FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can update instructors" ON instructors FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can delete instructors" ON instructors FOR DELETE USING (auth.role() = 'authenticated');

-- COURSES
DROP POLICY IF EXISTS "Public courses are viewable by everyone" ON courses;
DROP POLICY IF EXISTS "Courses are viewable by everyone" ON courses;
DROP POLICY IF EXISTS "Authenticated users can insert courses" ON courses;
DROP POLICY IF EXISTS "Authenticated users can update courses" ON courses;
DROP POLICY IF EXISTS "Authenticated users can delete courses" ON courses;

CREATE POLICY "Anyone can view courses" ON courses FOR SELECT USING (true);
CREATE POLICY "Authenticated can insert courses" ON courses FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can update courses" ON courses FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can delete courses" ON courses FOR DELETE USING (auth.role() = 'authenticated');

-- EVENTS
DROP POLICY IF EXISTS "Public events are viewable by everyone" ON events;
DROP POLICY IF EXISTS "Events are viewable by everyone" ON events;
DROP POLICY IF EXISTS "Authenticated users can insert events" ON events;
DROP POLICY IF EXISTS "Authenticated users can update events" ON events;
DROP POLICY IF EXISTS "Authenticated users can delete events" ON events;

CREATE POLICY "Anyone can view events" ON events FOR SELECT USING (true);
CREATE POLICY "Authenticated can insert events" ON events FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can update events" ON events FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can delete events" ON events FOR DELETE USING (auth.role() = 'authenticated');

-- BLOG POSTS
DROP POLICY IF EXISTS "Published blog posts are viewable by everyone" ON blog_posts;
DROP POLICY IF EXISTS "Blog posts are viewable by everyone" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can insert blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can update blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can delete blog posts" ON blog_posts;

CREATE POLICY "Anyone can view blog posts" ON blog_posts FOR SELECT USING (true);
CREATE POLICY "Authenticated can insert blog posts" ON blog_posts FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can update blog posts" ON blog_posts FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can delete blog posts" ON blog_posts FOR DELETE USING (auth.role() = 'authenticated');

-- CATEGORIES
DROP POLICY IF EXISTS "Categories are viewable by everyone" ON categories;
DROP POLICY IF EXISTS "Authenticated users can insert categories" ON categories;
DROP POLICY IF EXISTS "Authenticated users can update categories" ON categories;
DROP POLICY IF EXISTS "Authenticated users can delete categories" ON categories;

CREATE POLICY "Anyone can view categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Authenticated can insert categories" ON categories FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can update categories" ON categories FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can delete categories" ON categories FOR DELETE USING (auth.role() = 'authenticated');

-- NOTIFICATIONS
DROP POLICY IF EXISTS "Notifications are viewable by owner" ON notifications;
DROP POLICY IF EXISTS "Authenticated users can insert notifications" ON notifications;
DROP POLICY IF EXISTS "Authenticated users can update notifications" ON notifications;
DROP POLICY IF EXISTS "Authenticated users can delete notifications" ON notifications;

CREATE POLICY "Users can view own notifications" ON notifications FOR SELECT USING (auth.uid()::text = user_id::text OR auth.role() = 'authenticated');
CREATE POLICY "Authenticated can insert notifications" ON notifications FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can update notifications" ON notifications FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can delete notifications" ON notifications FOR DELETE USING (auth.role() = 'authenticated');

-- USER ROLES
DROP POLICY IF EXISTS "User roles are viewable by everyone" ON user_roles;
DROP POLICY IF EXISTS "Authenticated users can view all roles" ON user_roles;

CREATE POLICY "Anyone can view user roles" ON user_roles FOR SELECT USING (true);

-- DASHBOARD STATS
DROP POLICY IF EXISTS "Dashboard stats are viewable by authenticated users" ON dashboard_stats;
DROP POLICY IF EXISTS "Authenticated users can insert dashboard stats" ON dashboard_stats;
DROP POLICY IF EXISTS "Authenticated users can update dashboard stats" ON dashboard_stats;

CREATE POLICY "Authenticated can view dashboard stats" ON dashboard_stats FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can insert dashboard stats" ON dashboard_stats FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can update dashboard stats" ON dashboard_stats FOR UPDATE USING (auth.role() = 'authenticated');
