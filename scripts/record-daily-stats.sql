-- Script to manually record daily stats
-- Run this in Supabase SQL Editor or set up as a cron job

SELECT record_daily_stats();

-- To set up automatic daily recording, create a cron job:
-- (Requires pg_cron extension)

-- Enable pg_cron extension (run once)
-- CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Schedule daily stats recording at midnight
-- SELECT cron.schedule(
--   'record-daily-stats',
--   '0 0 * * *',
--   $$ SELECT record_daily_stats(); $$
-- );
