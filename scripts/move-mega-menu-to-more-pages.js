const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Read .env.local file
const envPath = path.join(__dirname, '..', '.env.local');
let supabaseUrl, supabaseKey;

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const lines = envContent.split('\n');
  
  lines.forEach(line => {
    if (line.startsWith('NEXT_PUBLIC_SUPABASE_URL=')) {
      supabaseUrl = line.split('=')[1].trim();
    }
    if (line.startsWith('NEXT_PUBLIC_SUPABASE_ANON_KEY=')) {
      supabaseKey = line.split('=')[1].trim();
    }
    if (line.startsWith('SUPABASE_SERVICE_ROLE_KEY=')) {
      supabaseKey = line.split('=')[1].trim();
    }
  });
}

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function moveMegaMenu() {
  try {
    console.log('🔍 Finding "More Pages" menu item...');
    
    // Find "More Pages" menu item
    const { data: morePages, error: mpError } = await supabase
      .from('menu_items')
      .select('id, title')
      .ilike('title', '%more%pages%')
      .single();

    if (mpError || !morePages) {
      console.log('❌ "More Pages" menu item not found.');
      console.log('📋 Available menu items:');
      
      const { data: allItems } = await supabase
        .from('menu_items')
        .select('id, title')
        .eq('is_active', true)
        .order('display_order');
      
      allItems?.forEach((item, index) => {
        console.log(`  ${index + 1}. ${item.title} (ID: ${item.id})`);
      });
      
      console.log('\n💡 Please create a "More Pages" menu item first, or specify which item to use.');
      return;
    }

    console.log(`✅ Found: "${morePages.title}" (ID: ${morePages.id})`);

    // Check if mega menu already exists for More Pages
    const { data: existing } = await supabase
      .from('mega_menu_sections')
      .select('id')
      .eq('menu_item_id', morePages.id);

    if (existing && existing.length > 0) {
      console.log('⚠️  Mega menu already exists for "More Pages".');
      return;
    }

    // Find existing mega menu sections (from MS Electrical Engineering)
    const { data: oldSections } = await supabase
      .from('mega_menu_sections')
      .select('*')
      .order('display_order');

    if (!oldSections || oldSections.length === 0) {
      console.log('❌ No existing mega menu sections found to move.');
      return;
    }

    console.log(`\n📦 Moving ${oldSections.length} sections to "More Pages"...`);

    // Update all sections to point to More Pages
    for (const section of oldSections) {
      await supabase
        .from('mega_menu_sections')
        .update({ menu_item_id: morePages.id })
        .eq('id', section.id);
      
      console.log(`  ✓ Moved section: ${section.title}`);
    }

    console.log('\n✅ Mega menu successfully moved to "More Pages"!');
    console.log('   Refresh your browser and hover over "More Pages" to see it.\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

moveMegaMenu();
