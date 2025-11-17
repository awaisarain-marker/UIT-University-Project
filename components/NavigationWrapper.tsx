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
  
  if (headerMenu) {
    const { data } = await supabase
      .from('menu_items')
      .select('*')
      .eq('menu_id', headerMenu.id)
      .eq('is_active', true)
      .order('display_order', { ascending: true });
    
    menuItems = data || [];
  }

  return <DynamicNavigation menuItems={menuItems} />;
}
