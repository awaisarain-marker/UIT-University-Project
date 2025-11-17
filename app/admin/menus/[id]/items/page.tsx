import { createServerSupabaseClient } from '@/lib/supabase-server'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import MenuItemsManager from '@/components/admin/MenuItemsManager'

export default async function MenuItemsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const supabase = await createServerSupabaseClient()
  
  const { data: menu, error: menuError } = await supabase
    .from('menus')
    .select('*')
    .eq('id', resolvedParams.id)
    .single()

  if (menuError) {
    console.error('Error fetching menu:', menuError)
  }

  const { data: menuItems } = await supabase
    .from('menu_items')
    .select('*')
    .eq('menu_id', resolvedParams.id)
    .order('display_order', { ascending: true })

  if (!menu) {
    return (
      <div className="p-8">
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Menu not found</h2>
          <p className="text-gray-500 mb-4">The menu you're looking for doesn't exist or has been deleted.</p>
          <Link href="/admin/menus" className="text-blue-600 hover:text-blue-700">
            ← Back to Menus
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <Link href="/admin/menus" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Menus
      </Link>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{menu.name}</h1>
        <p className="text-gray-500">Manage menu items - Add items and create dropdown menus by selecting a parent</p>
      </div>

      <MenuItemsManager menuId={resolvedParams.id} initialItems={menuItems || []} />
    </div>
  )
}
