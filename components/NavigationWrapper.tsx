import { createServerSupabaseClient } from '@/lib/supabase-server'
import DynamicNavbar from './DynamicNavbar'

interface MenuItem {
  id: string;
  title: string;
  url: string;
  target: string;
  parent_id: string | null;
  display_order: number;
}

export default async function NavigationWrapper() {
  const supabase = await createServerSupabaseClient()
  
  // Get the main navigation menu
  const { data: menu } = await supabase
    .from('menus')
    .select('id')
    .eq('slug', 'main-navigation')
    .eq('is_active', true)
    .single()

  if (!menu) {
    return <DynamicNavbar menuItems={[]} />
  }

  // Get all menu items for this menu
  const { data: items } = await supabase
    .from('menu_items')
    .select('*')
    .eq('menu_id', menu.id)
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  if (!items) {
    return <DynamicNavbar menuItems={[]} />
  }

  // Organize items into hierarchy
  const parentItems = items.filter(item => !item.parent_id)
  const childItems = items.filter(item => item.parent_id)

  const menuItems = parentItems.map(parent => ({
    id: parent.id,
    title: parent.title,
    url: parent.url || '#',
    target: parent.target || '_self',
    children: childItems
      .filter(child => child.parent_id === parent.id)
      .map(child => ({
        id: child.id,
        title: child.title,
        url: child.url || '#',
        target: child.target || '_self'
      }))
  }))

  return <DynamicNavbar menuItems={menuItems} />
}
