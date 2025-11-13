# Admin Dashboard Content Analysis
## Dynamic vs Static Content Breakdown

---

## 📊 DASHBOARD OVERVIEW (Main Admin Page)

### Dynamic Content (From Database)
- **Statistics Cards**
  - Total Courses count (from `courses` table)
  - Faculty Members count (from `instructors` table)
  - Events count (from `events` table)
  - Blog Posts count (from `blog_posts` table)
  - User count (from Supabase Auth)

- **Recent Entries Lists**
  - Recent Courses (last 5 from `courses` table)
  - Recent Faculty (last 5 from `instructors` table)
  - Recent Events (last 5 from `events` table)
  - Recent Blog Posts (last 5 from `blog_posts` table)

### Static Content (Hardcoded)
- Welcome banner text and buttons
- Percentage changes ("+12%", "+3%", "+8%", "+15%") - These are hardcoded, not calculated
- Quick Actions section with links
- Page layout and structure
- Icons and styling

---

## 📚 COURSES SECTION

### Dynamic Content
- **Courses List Page** (`/admin/courses`)
  - All course entries from `courses` table
  - Course title, category, level, instructor name, price, status
  - Instructor data joined from `instructors` table
  
- **Course Categories** (`/admin/courses/categories`)
  - Categories extracted from existing courses in database
  - Unique categories from `courses.category` field

### Static Content
- Page headers and descriptions
- Table column headers
- Form labels and placeholders
- Action buttons (Add, Edit, Delete)
- Empty state messages

---

## 👥 FACULTY SECTION

### Dynamic Content
- **Faculty List Page** (`/admin/faculty`)
  - All faculty members from `instructors` table
  - Name, email, specialization, years of experience
  - Profile initials generated from names

- **Faculty Categories** (`/admin/faculty/categories`)
  - Specializations extracted from `instructors.specialization` field
  - Unique specializations from existing faculty

### Static Content
- Page layout and headers
- Table structure
- Form fields and labels
- Navigation elements

---

## 📅 EVENTS SECTION

### Dynamic Content
- **Events List Page** (`/admin/events`)
  - All events from `events` table
  - Title, date, location, max attendees, status
  - Active/Inactive status badges

- **Event Categories** (`/admin/events/categories`)
  - **STATIC!** - Hardcoded list: Conference, Workshop, Seminar, Sports, Cultural, Academic
  - Not pulled from database

### Static Content
- Page structure
- Table headers
- Form elements
- Default category list (hardcoded)

---

## 📝 BLOG SECTION

### Dynamic Content
- **Blog Posts List** (`/admin/blog`)
  - All posts from `blog_posts` table
  - Title, excerpt, category, published date, status
  - Published/Draft status

- **Blog Categories** (`/admin/blog/categories`)
  - Categories extracted from existing blog posts
  - Unique categories from `blog_posts.category` field

### Static Content
- Page layout
- Table structure
- Form fields
- Status badges styling

---

## 👤 USER MANAGEMENT

### Dynamic Content
- **Users List** (`/admin/users`)
  - All users from Supabase Auth
  - Email, full name, role, created date
  - User metadata (role, full_name)

- **User Creation** (`/admin/users/new`)
  - Form submits to Supabase Auth API
  - Creates new authenticated users

### Static Content
- **Roles Page** (`/admin/users/roles`)
  - **COMPLETELY STATIC!** - All role descriptions and permissions are hardcoded
  - Admin, Editor, Viewer role definitions
  - Permission lists for each role
  - Best practices text

---

## 📋 ALL ENTRIES PAGE

### Dynamic Content
- **All Entries Overview** (`/admin/entries`)
  - Last 10 courses from `courses` table
  - Last 10 faculty from `instructors` table
  - Last 10 events from `events` table
  - Last 10 blog posts from `blog_posts` table
  - Counts for each section

### Static Content
- Page layout and cards
- Section headers
- Table structures
- Icons and styling

---

## 🎨 LAYOUT & NAVIGATION

### Dynamic Content
- User authentication status (redirects if not logged in)
- Current page highlighting in sidebar

### Static Content
- **Sidebar** (`components/admin/sidebar.tsx`)
  - All navigation menu items are hardcoded
  - Menu structure and links
  - Logo and branding
  - Search bar (non-functional)
  - User profile section (shows static "Admin User" and "admin@uit.edu")

- **Header** (`components/admin/header.tsx`)
  - Title "UIT University Admin"
  - Notification bell (static, not connected to real notifications)
  - User avatar

---

## 📊 SUMMARY

### Fully Dynamic (Database-Driven)
1. ✅ Courses list and data
2. ✅ Faculty list and data
3. ✅ Events list and data
4. ✅ Blog posts list and data
5. ✅ User list and authentication
6. ✅ Dashboard statistics (counts)
7. ✅ Course categories (extracted from DB)
8. ✅ Blog categories (extracted from DB)
9. ✅ Faculty specializations (extracted from DB)

### Partially Dynamic
1. ⚠️ Dashboard percentage changes (hardcoded, should be calculated)
2. ⚠️ User profile in sidebar (shows static data, not actual logged-in user)

### Fully Static (Hardcoded)
1. ❌ Event categories (hardcoded list, not from DB)
2. ❌ User roles and permissions descriptions
3. ❌ All navigation menus and links
4. ❌ Page layouts and structures
5. ❌ Form labels and placeholders
6. ❌ Welcome banner content
7. ❌ Quick actions section
8. ❌ Empty state messages
9. ❌ Notification system (bell icon is static)

---

## 🔧 RECOMMENDATIONS FOR IMPROVEMENT

### Make More Dynamic
1. **Event Categories** - Should be stored in database and manageable
2. **Dashboard Trends** - Calculate actual percentage changes from historical data
3. **User Profile** - Show actual logged-in user's name and email
4. **Notifications** - Connect to real notification system
5. **Role Permissions** - Store in database for flexibility

### Already Well Implemented
- Content management (courses, faculty, events, blog)
- User authentication and management
- Database integration for main entities
- Category extraction from existing data
