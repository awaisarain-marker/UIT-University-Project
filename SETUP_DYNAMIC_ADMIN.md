# Quick Setup Guide - Dynamic Admin Dashboard

Follow these steps to enable all dynamic features in your admin dashboard.

## Step 1: Run Database Migration

1. Open your Supabase project dashboard
2. Go to **SQL Editor**
3. Open the file `supabase/migrations/002_add_categories_and_notifications.sql`
4. Copy all the SQL code
5. Paste it into the SQL Editor
6. Click **Run** to execute

This creates:
- `categories` table
- `notifications` table
- `user_roles` table
- `dashboard_stats` table
- Default categories and roles
- Helper function for stats recording

## Step 2: Record Initial Statistics

In the same SQL Editor, run:

```sql
SELECT record_daily_stats();
```

This creates your first snapshot of dashboard statistics. The dashboard will show "0%" change until you have data from 30 days ago.

## Step 3: Test the Changes

1. **Refresh your admin dashboard** - You should see:
   - Your actual user name and email in the sidebar
   - Your initials in the header
   - Real notification system (empty at first)
   - Categories loaded from database

2. **Test Category Management**:
   - Go to any category page (Courses, Events, Blog, Faculty)
   - Add a new category
   - Verify it saves to database
   - Delete a category
   - Verify it's removed

3. **Test Notifications** (Optional):
   Run this SQL to create a test notification:
   ```sql
   INSERT INTO notifications (user_id, title, message, type)
   VALUES (
     (SELECT id FROM auth.users LIMIT 1),
     'Welcome!',
     'Your admin dashboard is now fully dynamic',
     'success'
   );
   ```
   Refresh the page and click the bell icon.

## Step 4: Set Up Daily Stats Recording (Optional)

To automatically record stats daily, choose one option:

### Option A: Manual (Run weekly/monthly)
```sql
SELECT record_daily_stats();
```

### Option B: Supabase Edge Function (Recommended)
Create a scheduled Edge Function that runs daily.

### Option C: External Cron Job
Set up a cron job that calls an API endpoint to trigger stats recording.

## What's Now Dynamic?

✅ **Dashboard Statistics** - Real counts from database
✅ **Trend Calculations** - Actual percentage changes
✅ **User Profile** - Shows logged-in user's info
✅ **Notifications** - Real notification system
✅ **All Categories** - Database-driven, fully manageable
✅ **User Roles** - Dynamic role definitions

## Troubleshooting

### "Cannot read property of undefined" errors
- Make sure the migration ran successfully
- Check browser console for specific errors
- Verify RLS policies are enabled

### Dashboard shows 0% everywhere
- This is normal for the first 30 days
- Run `SELECT record_daily_stats();` daily to build history
- Or manually insert historical data for testing

### Categories not showing
- Check the migration inserted default categories
- Run: `SELECT * FROM categories;` to verify
- If empty, re-run the INSERT statements from the migration

### Notifications not appearing
- Verify you have notifications for your user_id
- Check: `SELECT * FROM notifications WHERE user_id = 'your-user-id';`
- Create a test notification using the SQL above

## Next Steps

1. **Customize Categories**: Add/remove categories as needed
2. **Create Notifications**: Set up notification triggers for important events
3. **Monitor Trends**: Check back in 30 days to see real trend data
4. **Customize Roles**: Modify role permissions in the `user_roles` table

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all migrations ran successfully
3. Check Supabase logs for database errors
4. Review the `DYNAMIC_UPDATES_SUMMARY.md` for detailed information
