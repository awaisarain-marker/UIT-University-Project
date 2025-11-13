# Admin Dashboard Setup

## ✅ What's Been Created

A modern admin dashboard with:
- **shadcn/ui** components for beautiful UI
- **Supabase** authentication and database integration
- Protected admin routes
- Responsive sidebar navigation
- **Black SVG lock icon** on login page
- **No header/footer** on admin and login pages
- **Modal overlay** login design

## 🚀 Getting Started

### 1. Set Up Database

Go to your Supabase SQL Editor and run the schema:
```
https://supabase.com/dashboard/project/itrrmzjvcdfcrroupzcv/sql
```

Copy and paste the contents of `supabase/schema.sql` and click "Run".

### 2. Create Admin User

In Supabase Dashboard:
1. Go to **Authentication > Users**
2. Click "Add user" > "Create new user"
3. Enter email and password
4. Click "Create user"

### 3. Access Admin Dashboard

1. Visit: http://localhost:3000/login
2. Sign in with your admin credentials
3. You'll be redirected to: http://localhost:3000/admin

## 📁 Admin Routes

- `/login` - Admin login page
- `/admin` - Dashboard with stats
- `/admin/courses` - Manage courses (coming soon)
- `/admin/students` - Manage students (coming soon)
- `/admin/instructors` - Manage instructors (coming soon)
- `/admin/enrollments` - Manage enrollments (coming soon)
- `/admin/events` - Manage events (coming soon)
- `/admin/blog` - Manage blog posts (coming soon)

## 🔧 Technical Details

### File Structure
```
app/
├── (auth)/
│   └── login/
│       └── page.tsx          # Login page (no admin layout)
└── admin/
    ├── layout.tsx            # Protected admin layout with sidebar
    └── page.tsx              # Dashboard with stats

components/
└── admin/
    └── sidebar.tsx           # Admin navigation sidebar

lib/
└── supabase.ts              # Supabase client (server & client)
```

### Authentication Flow
1. User visits `/admin/*` routes
2. Server checks for authenticated user via cookies
3. If not authenticated → redirect to `/login`
4. After login → redirect to `/admin`

### Supabase Integration
- **Server Components**: Use `createServerSupabaseClient()` with cookies
- **Client Components**: Use `createClient()` for browser
- Auth state persisted via HTTP-only cookies

## 🎨 Customization

### Add New Admin Pages
Create new pages under `app/admin/`:
```tsx
// app/admin/courses/page.tsx
import { createServerSupabaseClient } from '@/lib/supabase'

export default async function CoursesPage() {
  const supabase = await createServerSupabaseClient()
  const { data: courses } = await supabase.from('courses').select('*')
  
  return <div>Your courses UI</div>
}
```

### Update Navigation
Edit `components/admin/sidebar.tsx` to add new menu items.

## 🔐 Security Notes

- All admin routes are protected by authentication
- Uses HTTP-only cookies for session management
- Server-side auth checks prevent unauthorized access
- Environment variables stored in `.env.local`

## 📝 Next Steps

1. ✅ Database schema setup
2. ✅ Create admin user
3. ⏳ Build CRUD pages for courses, students, etc.
4. ⏳ Add file upload for images
5. ⏳ Implement role-based access control
