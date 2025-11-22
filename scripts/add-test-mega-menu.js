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

async function addTestMegaMenu() {
  try {
    console.log('🔍 Finding menu items...');
    
    // Get the first active menu item
    const { data: menuItems, error: menuError } = await supabase
      .from('menu_items')
      .select('id, title')
      .eq('is_active', true)
      .limit(5);

    if (menuError) throw menuError;

    if (!menuItems || menuItems.length === 0) {
      console.error('❌ No menu items found. Please create menu items first.');
      return;
    }

    console.log('\n📋 Available menu items:');
    menuItems.forEach((item, index) => {
      console.log(`  ${index + 1}. ${item.title} (ID: ${item.id})`);
    });

    // Use the first menu item (or you can change this)
    const targetMenuItem = menuItems[0];
    console.log(`\n✅ Using menu item: "${targetMenuItem.title}"`);

    // Check if mega menu already exists for this item
    const { data: existing } = await supabase
      .from('mega_menu_sections')
      .select('id')
      .eq('menu_item_id', targetMenuItem.id);

    if (existing && existing.length > 0) {
      console.log('⚠️  Mega menu already exists for this item. Skipping...');
      return;
    }

    console.log('\n📝 Creating mega menu sections...');

    // Section 1: Academic Programs
    const { data: section1, error: s1Error } = await supabase
      .from('mega_menu_sections')
      .insert({
        menu_item_id: targetMenuItem.id,
        title: 'Academic Programs',
        display_order: 0,
        is_active: true
      })
      .select()
      .single();

    if (s1Error) throw s1Error;
    console.log('  ✓ Created section: Academic Programs');

    // Add links to section 1
    await supabase.from('mega_menu_links').insert([
      { section_id: section1.id, title: 'Computer Science', url: '/programs/computer-science', target: '_self', display_order: 0, is_active: true },
      { section_id: section1.id, title: 'Engineering', url: '/programs/engineering', target: '_self', display_order: 1, is_active: true },
      { section_id: section1.id, title: 'Business Administration', url: '/programs/business', target: '_self', display_order: 2, is_active: true },
      { section_id: section1.id, title: 'Medical Sciences', url: '/programs/medical', target: '_self', display_order: 3, is_active: true }
    ]);
    console.log('    → Added 4 links');

    // Section 2: Student Services
    const { data: section2, error: s2Error } = await supabase
      .from('mega_menu_sections')
      .insert({
        menu_item_id: targetMenuItem.id,
        title: 'Student Services',
        display_order: 1,
        is_active: true
      })
      .select()
      .single();

    if (s2Error) throw s2Error;
    console.log('  ✓ Created section: Student Services');

    await supabase.from('mega_menu_links').insert([
      { section_id: section2.id, title: 'Student Affairs', url: '/student/student-affairs', target: '_self', display_order: 0, is_active: true },
      { section_id: section2.id, title: 'Scholarships', url: '/student/scholarships', target: '_self', display_order: 1, is_active: true },
      { section_id: section2.id, title: 'Career Services', url: '/student/career', target: '_self', display_order: 2, is_active: true },
      { section_id: section2.id, title: 'Health & Wellness', url: '/student/health', target: '_self', display_order: 3, is_active: true }
    ]);
    console.log('    → Added 4 links');

    // Section 3: Resources
    const { data: section3, error: s3Error } = await supabase
      .from('mega_menu_sections')
      .insert({
        menu_item_id: targetMenuItem.id,
        title: 'Resources & Info',
        display_order: 2,
        is_active: true
      })
      .select()
      .single();

    if (s3Error) throw s3Error;
    console.log('  ✓ Created section: Resources & Info');

    await supabase.from('mega_menu_links').insert([
      { section_id: section3.id, title: 'Campus Map', url: '/resources/campus-map', target: '_self', display_order: 0, is_active: true },
      { section_id: section3.id, title: 'Academic Calendar', url: '/resources/calendar', target: '_self', display_order: 1, is_active: true },
      { section_id: section3.id, title: 'Tenders', url: '/tenders/auditorium-renovation', target: '_self', display_order: 2, is_active: true },
      { section_id: section3.id, title: 'Corporate Liaison', url: '/corporate-liaison/csr', target: '_self', display_order: 3, is_active: true }
    ]);
    console.log('    → Added 4 links');

    console.log('\n✅ Test mega menu created successfully!');
    console.log(`\n🎯 Mega menu attached to: "${targetMenuItem.title}"`);
    console.log('   Hover over this menu item on the frontend to see the mega menu.\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

addTestMegaMenu();
