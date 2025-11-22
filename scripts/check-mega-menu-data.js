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

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkData() {
  try {
    console.log('🔍 Checking "More Pages" menu item...\n');
    
    // Find More Pages
    const { data: morePages } = await supabase
      .from('menu_items')
      .select('*')
      .ilike('title', '%more%pages%')
      .single();

    if (!morePages) {
      console.log('❌ "More Pages" menu item not found!');
      return;
    }

    console.log('✅ More Pages found:');
    console.log(`   ID: ${morePages.id}`);
    console.log(`   Title: ${morePages.title}`);
    console.log(`   Active: ${morePages.is_active}`);
    console.log(`   Menu ID: ${morePages.menu_id}\n`);

    // Check sections
    const { data: sections } = await supabase
      .from('mega_menu_sections')
      .select('*')
      .eq('menu_item_id', morePages.id)
      .order('display_order');

    console.log(`📦 Mega Menu Sections: ${sections?.length || 0}`);
    if (sections && sections.length > 0) {
      sections.forEach(section => {
        console.log(`   - ${section.title} (Active: ${section.is_active}, Order: ${section.display_order})`);
      });
    } else {
      console.log('   ⚠️  No sections found!');
    }

    // Check links
    if (sections && sections.length > 0) {
      console.log('\n🔗 Mega Menu Links:');
      for (const section of sections) {
        const { data: links } = await supabase
          .from('mega_menu_links')
          .select('*')
          .eq('section_id', section.id)
          .order('display_order');

        console.log(`\n   ${section.title}:`);
        if (links && links.length > 0) {
          links.forEach(link => {
            console.log(`     - ${link.title} → ${link.url} (Active: ${link.is_active})`);
          });
        } else {
          console.log('     ⚠️  No links found!');
        }
      }
    }

    // Check menu
    console.log('\n📋 Checking menu configuration...');
    const { data: menu } = await supabase
      .from('menus')
      .select('*')
      .eq('id', morePages.menu_id)
      .single();

    if (menu) {
      console.log(`   Menu: ${menu.name}`);
      console.log(`   Location: ${menu.location}`);
      console.log(`   Active: ${menu.is_active}`);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

checkData();
