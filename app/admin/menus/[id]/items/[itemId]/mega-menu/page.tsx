import React from 'react'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import { Button } from '@/components/ui/button'
import { Plus, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import MegaMenuManager from '@/components/admin/MegaMenuManager'

export default async function MegaMenuPage({
  params,
}: {
  params: Promise<{ id: string; itemId: string }>
}) {
  const { id, itemId } = await params
  const supabase = await createServerSupabaseClient()

  // Get menu item details
  const { data: menuItem } = await supabase
    .from('menu_items')
    .select('*')
    .eq('id', itemId)
    .single()

  if (!menuItem) {
    return <div className="p-8">Menu item not found</div>
  }

  // Get mega menu sections
  const { data: sections } = await supabase
    .from('mega_menu_sections')
    .select('*')
    .eq('menu_item_id', itemId)
    .order('display_order', { ascending: true })

  // Get all links for these sections
  const sectionIds = sections?.map((s) => s.id) || []
  const { data: links } = sectionIds.length > 0
    ? await supabase
        .from('mega_menu_links')
        .select('*')
        .in('section_id', sectionIds)
        .order('display_order', { ascending: true })
    : { data: [] }

  return (
    <div className="p-8">
      <div className="mb-6">
        <Link href={`/admin/menus/${id}/items`}>
          <Button variant="ghost" className="gap-2 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Menu Items
          </Button>
        </Link>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Mega Menu: {menuItem.title}
            </h1>
            <p className="text-gray-500">
              Manage sections and links for the mega menu dropdown
            </p>
          </div>
        </div>
      </div>

      <MegaMenuManager
        menuId={id}
        menuItemId={itemId}
        initialSections={sections || []}
        initialLinks={links || []}
      />
    </div>
  )
}
