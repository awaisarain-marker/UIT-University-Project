/**
 * Script to automatically sync file-based pages to the database
 * This will scan the /app directory and add pages to the database with parent-child relationships
 * 
 * Usage: node scripts/sync-pages-to-db.js
 */

const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Load environment variables from .env.local if not already loaded
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

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env.local file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Directories to exclude from scanning
const EXCLUDED_DIRS = [
  'api',
  'admin',
  '_components',
  'fonts',
  'globals.css',
  'layout.tsx',
  'page.tsx', // root page
  'not-found.tsx',
  'error.tsx',
  'loading.tsx',
  'template.tsx'
];

// Function to check if path contains dynamic segments
function hasDynamicSegments(pathStr) {
  return pathStr.includes('[') && pathStr.includes(']');
}

// Function to convert folder/file name to title
function slugToTitle(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Function to scan directory and find all pages
function scanDirectory(dir, basePath = '', parentSlug = null) {
  const pages = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(dir, item.name);
    const relativePath = basePath ? `${basePath}/${item.name}` : item.name;

    // Skip excluded directories and files
    if (EXCLUDED_DIRS.includes(item.name) || item.name.startsWith('_') || item.name.startsWith('.') || item.name.startsWith('(')) {
      continue;
    }

    if (item.isDirectory()) {
      // Check if this directory has a page.tsx
      const pageFile = path.join(itemPath, 'page.tsx');
      
      if (fs.existsSync(pageFile)) {
        const slug = relativePath.replace(/\\/g, '/');
        
        // Skip dynamic routes (e.g., [slug], [id])
        if (hasDynamicSegments(slug)) {
          console.log(`⏭️  Skipping dynamic route: ${slug}`);
          continue;
        }
        
        const title = slugToTitle(item.name);
        
        pages.push({
          title,
          slug,
          parentSlug,
          content: `${title} page`,
          meta_description: `${title} - UIT University`,
          is_published: true,
          sort_order: 0
        });

        // Recursively scan subdirectories with this page as parent
        const subPages = scanDirectory(itemPath, relativePath, slug);
        pages.push(...subPages);
      } else {
        // Directory without page.tsx, just scan subdirectories
        const subPages = scanDirectory(itemPath, relativePath, parentSlug);
        pages.push(...subPages);
      }
    }
  }

  return pages;
}

// Function to get or create parent page
async function getParentId(parentSlug) {
  if (!parentSlug) return null;

  const { data, error } = await supabase
    .from('pages')
    .select('id')
    .eq('slug', parentSlug)
    .single();

  if (error) {
    console.error(`❌ Error finding parent page with slug "${parentSlug}":`, error.message);
    return null;
  }

  return data?.id || null;
}

// Function to sync pages to database
async function syncPages() {
  console.log('🔍 Scanning /app directory for pages...\n');

  const appDir = path.join(process.cwd(), 'app');
  const pages = scanDirectory(appDir);

  console.log(`📄 Found ${pages.length} pages to sync\n`);

  let created = 0;
  let updated = 0;
  let skipped = 0;

  // Sort pages by depth (parents first)
  pages.sort((a, b) => {
    const depthA = a.slug.split('/').length;
    const depthB = b.slug.split('/').length;
    return depthA - depthB;
  });

  for (const page of pages) {
    try {
      // Get parent_id if this page has a parent
      const parent_id = await getParentId(page.parentSlug);

      // Check if page already exists
      const { data: existing } = await supabase
        .from('pages')
        .select('id, title')
        .eq('slug', page.slug)
        .single();

      if (existing) {
        // Update existing page
        const { error } = await supabase
          .from('pages')
          .update({
            title: page.title,
            parent_id,
            content: page.content,
            meta_description: page.meta_description,
            is_published: page.is_published,
            updated_at: new Date().toISOString()
          })
          .eq('id', existing.id);

        if (error) {
          console.error(`❌ Error updating "${page.title}":`, error.message);
          skipped++;
        } else {
          console.log(`✅ Updated: ${page.title} (/${page.slug})`);
          updated++;
        }
      } else {
        // Insert new page
        const { error } = await supabase
          .from('pages')
          .insert({
            title: page.title,
            slug: page.slug,
            parent_id,
            content: page.content,
            meta_description: page.meta_description,
            is_published: page.is_published,
            sort_order: page.sort_order
          });

        if (error) {
          console.error(`❌ Error creating "${page.title}":`, error.message);
          skipped++;
        } else {
          console.log(`✨ Created: ${page.title} (/${page.slug})`);
          created++;
        }
      }
    } catch (err) {
      console.error(`❌ Error processing "${page.title}":`, err.message);
      skipped++;
    }
  }

  console.log('\n📊 Sync Summary:');
  console.log(`   ✨ Created: ${created}`);
  console.log(`   ✅ Updated: ${updated}`);
  console.log(`   ⏭️  Skipped: ${skipped}`);
  console.log(`   📄 Total: ${pages.length}`);
}

// Run the sync
syncPages()
  .then(() => {
    console.log('\n✅ Sync completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Sync failed:', error);
    process.exit(1);
  });
