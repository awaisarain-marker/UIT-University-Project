# Quick Reference - Dynamic Admin Dashboard

## 🚀 Quick Setup (3 Steps)

1. **Run Migration**
   - Open Supabase SQL Editor
   - Run `supabase/migrations/002_add_categories_and_notifications.sql`

2. **Record Initial Stats**
   ```sql
   SELECT record_daily_stats();
   ```

3. **Refresh Dashboard**
   - All features now dynamic!

---

## 📊 What's Dynamic Now?

| Feature | Before | After |
|---------|--------|-------|
| Dashboard Trends | Fake (+12%) | Real calculations |
| User Profile | "Admin User" | Your actual name |
| Notifications | Fake red dot | Real system |
| Event Categories | 6 hardcoded | Database-driven |
| Blog Categories | From posts | Database-driven |
| Course Categories | From courses | Database-driven |
| Faculty Categories | From instructors | Database-driven |
| User Roles | Static text | Database-driven |

---

## 🗄️ New Tables

### categories
```sql
SELECT * FROM categories WHERE type = 'event';
```

### notifications
```sql
SELECT * FROM notifications WHERE user_id = 'your-id';
```

### user_roles
```sql
SELECT * FROM user_roles WHERE is_active = true;
```

### dashboard_stats
```sql
SELECT * FROM dashboard_stats ORDER BY stat_date DESC;
```

---

## 💡 Common Tasks

### Add a Category
```sql
INSERT INTO categories (name, type)
VALUES ('New Category', 'course');
```

### Create Notification
```sql
INSERT INTO notifications (user_id, title, message, type)
VALUES ('user-id', 'Title', 'Message', 'info');
```

### Record Daily Stats
```sql
SELECT record_daily_stats();
```

### View Trends
```sql
SELECT 
  stat_date,
  courses_count,
  courses_count - LAG(courses_count) OVER (ORDER BY stat_date) as change
FROM dashboard_stats
ORDER BY stat_date DESC
LIMIT 30;
```

---

## 🔍 Troubleshooting

| Issue | Solution |
|-------|----------|
| 0% trends | Run `record_daily_stats()` daily for 30 days |
| No categories | Re-run migration INSERT statements |
| No notifications | Create test notification via SQL |
| User shows "Loading..." | Check Supabase Auth connection |

---

## 📁 Key Files

- **Migration**: `supabase/migrations/002_add_categories_and_notifications.sql`
- **Setup Guide**: `SETUP_DYNAMIC_ADMIN.md`
- **Full Details**: `DYNAMIC_UPDATES_SUMMARY.md`
- **Features**: `DYNAMIC_FEATURES.md`

---

## ✅ Verification Checklist

- [ ] Migration ran successfully
- [ ] Initial stats recorded
- [ ] Dashboard shows real user name
- [ ] Notification bell works
- [ ] Categories load from database
- [ ] Can add/delete categories
- [ ] Roles page shows dynamic data

---

## 🎯 Next Steps

1. Record stats daily: `SELECT record_daily_stats();`
2. Customize categories for your needs
3. Set up notification triggers
4. Monitor trends after 30 days
5. Customize role permissions

---

**Need Help?** Check `SETUP_DYNAMIC_ADMIN.md` for detailed instructions.
