# Quick Start: Auto-Sync Pages to Database

## What This Does

Automatically syncs your Next.js pages (in `/app` folder) to the database with parent-child relationships.

## Quick Setup

### 1. Make sure your `.env.local` has:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

### 2. Run the sync:
```bash
npm run sync:pages
```

That's it! ✨

## Example

You created these pages:
```
app/
└── news-media/
    ├── page.tsx              (Parent)
    ├── media-press/
    │   └── page.tsx          (Child)
    └── newsletter/
        └── page.tsx          (Child)
```

After running `npm run sync:pages`, they're automatically added to your database with proper parent-child relationships!

## What Happens

- ✨ New pages are **created** in database
- ✅ Existing pages are **updated**
- 🔗 Parent-child relationships are **automatically detected**
- 📝 Titles are **auto-generated** from folder names

## When to Use

Run this command whenever you:
- Create new pages
- Rename folders
- Restructure your app directory

## Full Documentation

See [docs/AUTO_SYNC_PAGES.md](./docs/AUTO_SYNC_PAGES.md) for complete details.
