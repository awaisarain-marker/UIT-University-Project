# How to Run the Pages Migration

## Option 1: Supabase Dashboard (Recommended - Easiest)

1. **Open Supabase Dashboard**
   - Go to: https://supabase.com/dashboard
   - Select your project

2. **Open SQL Editor**
   - Click on "SQL Editor" in the left sidebar
   - Click "New query"

3. **Copy the Migration SQL**
   - Open the file: `supabase/migrations/create_pages_system.sql`
   - Copy ALL the contents (Ctrl+A, Ctrl+C)

4. **Paste and Run**
   - Paste the SQL into the Supabase SQL Editor
   - Click "Run" button (or press Ctrl+Enter)

5. **Verify Success**
   - You should see "Success. No rows returned"
   - Go to "Table Editor" in the left sidebar
   - You should see a new table called "pages"

## Option 2: Check if Table Already Exists

Before running the migration, check if the table already exists:

1. Go to Supabase Dashboard → Table Editor
2. Look for a table named "pages"
3. If it exists, you're all set! ✅

## Option 3: Using Supabase CLI (Advanced)

If you have Supabase CLI installed:

```bash
supabase db push
```

## What the Migration Creates

The migration will create:
- ✅ `pages` table with all necessary columns
- ✅ Indexes for better performance
- ✅ Row Level Security (RLS) policies
- ✅ Sample pages (Home, About, Contact, etc.)

## Verify the Migration

After running, verify by checking:

1. **Table exists**: Go to Table Editor → pages
2. **Columns exist**: 
   - id (uuid)
   - title (varchar)
   - slug (varchar)
   - content (text)
   - meta_description (text)
   - is_published (boolean)
   - created_at (timestamp)
   - updated_at (timestamp)

3. **Sample data**: You should see several pre-populated pages

## Troubleshooting

### Error: "relation 'pages' already exists"
✅ This is fine! The table already exists. You can skip the migration.

### Error: "permission denied"
❌ Make sure you're using the Service Role Key or you're logged in as the project owner.

### Error: "syntax error"
❌ Make sure you copied the ENTIRE SQL file, including all statements.

## Next Steps

Once the migration is complete:
1. Go to `/admin/pages` in your app
2. You should see the pre-populated pages
3. Try creating a new page
4. View it at `/{slug}`

## Need Help?

If you encounter issues:
1. Check the Supabase logs in the dashboard
2. Verify your environment variables in `.env.local`
3. Make sure you're connected to the correct project
