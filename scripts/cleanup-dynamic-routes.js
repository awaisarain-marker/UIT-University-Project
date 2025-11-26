/**
 * Script to remove dynamic route pages from the database
 * Dynamic routes like [slug], [id] should not be in the pages table
 */

const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Load environment variables from .env.local
function loadEnvFile() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    envContent.split('\n').forEach(line => {
      const match = line.match(/^([^=:#]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim();
        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    });
  }
}

loadEnvFile();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function cleanupDynamicRoutes() {
  console.log('🔍 Finding dynamic route pages in database...\n');

  // Get all pages
  const { data: pages, error } = await supabase
    .from('pages')
    .select('id, slug, title');

  if (error) {
    console.error('❌ Error fetching pages:', error.message);
    process.exit(1);
  }

  // Filter pages with dynamic segments
  const dynamicPages = pages.filter(page => 
    page.slug.includes('[') && page.slug.includes(']')
  );

  if (dynamicPages.length === 0) {
    console.log('✅ No dynamic route pages found. Database is clean!');
    return;
  }

  console.log(`Found ${dynamicPages.length} dynamic route pages to remove:\n`);
  dynamicPages.forEach(page => {
    console.log(`   - ${page.title} (${page.slug})`);
  });

  console.log('\n🗑️  Removing dynamic route pages...\n');

  let removed = 0;
  for (const page of dynamicPages) {
    const { error: deleteError } = await supabase
      .from('pages')
      .delete()
      .eq('id', page.id);

    if (deleteError) {
      console.error(`❌ Error removing "${page.title}":`, deleteError.message);
    } else {
      console.log(`✅ Removed: ${page.title} (${page.slug})`);
      removed++;
    }
  }

  console.log(`\n📊 Cleanup Summary:`);
  console.log(`   🗑️  Removed: ${removed}`);
  console.log(`   ❌ Failed: ${dynamicPages.length - removed}`);
}

cleanupDynamicRoutes()
  .then(() => {
    console.log('\n✅ Cleanup completed!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Cleanup failed:', error);
    process.exit(1);
  });
