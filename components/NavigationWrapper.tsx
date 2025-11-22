import { createServerSupabaseClient } from '@/lib/supabase-server';
import DynamicNavigation from './DynamicNavigation';

export default async function NavigationWrapper() {
  const supabase = await createServerSupabaseClient();
  
  // Fetch header menu items
  const { data: headerMenu } = await supabase
    .from('menus')
    .select('id')
    .eq('location', 'header')
    .eq('is_active', true)
    .single();

  let menuItems = [];
  let megaMenuData: Record<string, any> = {};
  
  if (headerMenu) {
    const { data } = await supabase
      .from('menu_items')
      .select('*')
      .eq('menu_id', headerMenu.id)
      .eq('is_active', true)
      .order('display_order', { ascending: true });
    
    menuItems = data || [];

    // Fetch mega menu sections and links for all menu items
    const menuItemIds = menuItems.map(item => item.id);
    
    if (menuItemIds.length > 0) {
      const { data: sections } = await supabase
        .from('mega_menu_sections')
        .select('*')
        .in('menu_item_id', menuItemIds)
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      if (sections && sections.length > 0) {
        const sectionIds = sections.map(s => s.id);
        
        const { data: links } = await supabase
          .from('mega_menu_links')
          .select('*')
          .in('section_id', sectionIds)
          .eq('is_active', true)
          .order('display_order', { ascending: true });

        // Organize mega menu data by menu item id
        sections.forEach(section => {
          if (!megaMenuData[section.menu_item_id]) {
            megaMenuData[section.menu_item_id] = [];
          }
          megaMenuData[section.menu_item_id].push({
            ...section,
            links: links?.filter(link => link.section_id === section.id) || []
          });
        });
      }
    }
  }

  return <DynamicNavigation menuItems={menuItems} megaMenuData={megaMenuData} />;
}
