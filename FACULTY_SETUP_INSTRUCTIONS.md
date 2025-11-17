# Faculty Profile Setup Instructions

## Option 1: Run Migration (Recommended)

Try running the simple migration:

```bash
cd supabase
supabase migration up --local
```

If you get errors, try Option 2.

## Option 2: Manual SQL (If migrations fail)

1. **Open Supabase Dashboard**
   - Go to your Supabase project
   - Click on "SQL Editor" in the left sidebar

2. **Run the SQL Script**
   - Copy the contents of `MANUAL_FACULTY_SETUP.sql`
   - Paste into the SQL Editor
   - Click "Run" button

3. **Verify Success**
   - You should see a table with 6 rows showing the new columns
   - Check that all columns are created

## Option 3: Add Columns Manually

If both options fail, add columns one by one:

### Step 1: Add Columns
```sql
ALTER TABLE instructors ADD COLUMN overview_data JSONB;
ALTER TABLE instructors ADD COLUMN membership_data JSONB;
ALTER TABLE instructors ADD COLUMN research_data JSONB;
ALTER TABLE instructors ADD COLUMN courses_taught_data JSONB;
ALTER TABLE instructors ADD COLUMN publications_data JSONB;
ALTER TABLE instructors ADD COLUMN slug VARCHAR(255);
```

### Step 2: Set Defaults
```sql
UPDATE instructors SET overview_data = '{"heading": "Overview", "description": "", "items": []}' WHERE overview_data IS NULL;
UPDATE instructors SET membership_data = '{"heading": "Membership and Affiliation", "description": "", "items": []}' WHERE membership_data IS NULL;
UPDATE instructors SET research_data = '{"heading": "Research Interests", "description": "", "items": []}' WHERE research_data IS NULL;
UPDATE instructors SET courses_taught_data = '{"heading": "Courses Taught", "description": "", "items": []}' WHERE courses_taught_data IS NULL;
UPDATE instructors SET publications_data = '{"heading": "Publications and Conferences", "description": "", "items": []}' WHERE publications_data IS NULL;
```

### Step 3: Generate Slugs
```sql
UPDATE instructors 
SET slug = LOWER(REGEXP_REPLACE(full_name, '[^a-zA-Z0-9]+', '-', 'g'))
WHERE slug IS NULL OR slug = '';
```

### Step 4: Create Index
```sql
CREATE UNIQUE INDEX idx_instructors_slug ON instructors(slug);
```

## Verify Setup

Run this query to check if everything is set up:

```sql
SELECT 
    id,
    full_name,
    slug,
    overview_data,
    membership_data,
    research_data,
    courses_taught_data,
    publications_data
FROM instructors
LIMIT 1;
```

You should see all the new columns with default JSON values.

## Common Errors and Solutions

### Error: "column already exists"
**Solution:** The column is already added. Skip to the next step.

### Error: "relation instructors does not exist"
**Solution:** Your table might have a different name. Check your database schema.

### Error: "syntax error near JSONB"
**Solution:** Make sure you're using PostgreSQL 9.4 or higher.

### Error: "duplicate key value violates unique constraint"
**Solution:** Some faculty members have the same slug. Run this to make slugs unique:
```sql
UPDATE instructors 
SET slug = LOWER(REGEXP_REPLACE(full_name, '[^a-zA-Z0-9]+', '-', 'g')) || '-' || id::text
WHERE slug IS NULL OR slug = '';
```

## After Setup

Once the columns are added:

1. **Restart your dev server**
   ```bash
   npm run dev
   ```

2. **Go to admin panel**
   - Navigate to `/admin/faculty`
   - Click "Edit" on any faculty member

3. **Test the tabs**
   - You should see 6 tabs: Basic Info, Overview, Membership, Research, Courses, Publications
   - Try adding points, headings, and descriptions
   - Use the reorder buttons (↑↓)
   - Save and check the frontend at `/faculty/[slug]`

## Troubleshooting

### Tabs not showing
- Clear browser cache (Ctrl+Shift+R)
- Check browser console for errors
- Verify columns exist in database

### Can't save data
- Check Supabase logs for errors
- Verify RLS policies allow updates
- Check that user is authenticated

### Slug not working
- Make sure slug is unique
- Check that slug doesn't contain special characters
- Verify index was created

## Need Help?

If you're still having issues:
1. Share the exact error message
2. Check which step is failing
3. Verify your database schema matches expectations
