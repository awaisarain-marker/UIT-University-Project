# Auto-Sync Pages to Database

This guide explains how to automatically sync your file-based pages (in `/app` directory) to the database.

## How It Works

When you create new pages in your Next.js app directory structure, this script will:

1. **Scan** the `/app` directory for all `page.tsx` files
2. **Detect** parent-child relationships based on folder structure
3. **Automatically insert or update** pages in the database
4. **Maintain hierarchy** - parent pages are created before child pages

## Example

If you create this structure:
```
app/
├── news-media/
│   ├── page.tsx                    → Parent: "News Media" (slug: news-media)
│   ├── media-press/
│   │   └── page.tsx                → Child: "Media Press" (slug: news-media/media-press)
│   ├── news-events/
│   │   └── page.tsx                → Child: "News Events" (slug: news-media/news-events)
│   └── newsletter/
│       └── page.tsx                → Child: "Newsletter" (slug: news-media/newsletter)
```

The script will automatically:
- Create "News Media" as a parent page
- Create all child pages with proper `parent_id` references
- Generate titles from folder names (e.g., "news-media" → "News Media")

## Usage

### 1. Set Up Environment Variables

Make sure you have these in your `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
# Optional: For better permissions
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 2. Run the Sync Script

```bash
npm run sync:pages
```

Or directly:

```bash
node scripts/sync-pages-to-db.js
```

### 3. Check the Output

The script will show:
- ✨ **Created**: New pages added to database
- ✅ **Updated**: Existing pages updated
- ⏭️ **Skipped**: Pages that had errors
- 📄 **Total**: Total pages processed

Example output:
```
🔍 Scanning /app directory for pages...

📄 Found 17 pages to sync

✨ Created: News Media (/news-media)
✨ Created: Media Press (/news-media/media-press)
✨ Created: News Events (/news-media/news-events)
✨ Created: Newsletter (/news-media/newsletter)
✅ Updated: About Us (/about)

📊 Sync Summary:
   ✨ Created: 4
   ✅ Updated: 1
   ⏭️  Skipped: 0
   📄 Total: 17

✅ Sync completed successfully!
```

## What Gets Synced

### Included:
- All directories with `page.tsx` files
- Nested page structures (parent-child relationships)
- Page metadata (title, slug, description)

### Excluded:
- `/app/api` - API routes
- `/app/admin` - Admin pages
- Files starting with `_` or `.`
- Special Next.js files (`layout.tsx`, `loading.tsx`, etc.)

## Automatic Title Generation

Folder names are converted to titles:
- `news-media` → "News Media"
- `media-press` → "Media Press"
- `bio-symposium-2023` → "Bio Symposium 2023"

## Database Fields

Each page is synced with:
- **title**: Auto-generated from folder name
- **slug**: Full path (e.g., `news-media/newsletter`)
- **parent_id**: UUID of parent page (if nested)
- **content**: Basic description
- **meta_description**: SEO description
- **is_published**: Set to `true` by default
- **sort_order**: Set to `0` by default

## When to Run

Run the sync script:
- ✅ After creating new pages
- ✅ After restructuring page hierarchy
- ✅ After renaming folders
- ✅ When setting up a new environment

## Automation Options

### Option 1: Run Manually
```bash
npm run sync:pages
```

### Option 2: Add to Build Process
Add to `package.json`:
```json
"scripts": {
  "build": "npm run sync:pages && next build"
}
```

### Option 3: Git Hook (Pre-commit)
Create `.husky/pre-commit`:
```bash
#!/bin/sh
npm run sync:pages
git add -A
```

### Option 4: GitHub Action
Create `.github/workflows/sync-pages.yml`:
```yaml
name: Sync Pages
on:
  push:
    paths:
      - 'app/**/page.tsx'
jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run sync:pages
        env:
          NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          SUPABASE_SERVICE_ROLE_KEY: ${{ secrets.SUPABASE_SERVICE_KEY }}
```

## Troubleshooting

### Error: "Missing Supabase credentials"
- Make sure `.env.local` has `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Error: "Error finding parent page"
- Parent pages must be created before child pages
- The script automatically handles this by sorting by depth

### Pages not showing in admin
- Check that `is_published` is set to `true`
- Verify the page exists in database: `SELECT * FROM pages WHERE slug = 'your-slug'`

### Duplicate pages
- The script uses `slug` as unique identifier
- Existing pages are updated, not duplicated

## Advanced: Custom Metadata

To add custom metadata for specific pages, modify the script or manually update in the database:

```sql
UPDATE pages 
SET 
  meta_description = 'Custom description',
  sort_order = 10
WHERE slug = 'news-media/newsletter';
```

## See Also

- [Pages Admin Guide](./PAGES_ADMIN_GUIDE.md)
- [Menu System Guide](./MENU_SYSTEM_GUIDE.md)
- [Database Migrations](../supabase/migrations/)
