'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Edit, Trash2, Eye, EyeOff, Menu as MenuIcon } from 'lucide-react'
import { createClient } from '@/lib/supabase-client'
import { useRouter } from 'next/navigation'

interface Menu {
  id: string
  name: string
  slug: string
  location: string
  is_active: boolean
  display_order: number
}

interface MenusListProps {
  menus: Menu[]
}

export default function MenusList({ menus: initialMenus }: MenusListProps) {
  const [menus, setMenus] = useState(initialMenus)
  const [loading, setLoading] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const toggleActive = async (id: string, currentStatus: boolean) => {
    setLoading(id)
    const { error } = await supabase
      .from('menus')
      .update({ is_active: !currentStatus })
      .eq('id', id)

    if (!error) {
      setMenus(menus.map(menu => 
        menu.id === id ? { ...menu, is_active: !currentStatus } : menu
      ))
    }
    setLoading(null)
  }

  const deleteMenu = async (id: string) => {
    if (!confirm('Are you sure you want to delete this menu? This will also delete all menu items.')) {
      return
    }

    setLoading(id)
    const { error } = await supabase
      .from('menus')
      .delete()
      .eq('id', id)

    if (!error) {
      setMenus(menus.filter(menu => menu.id !== id))
      router.refresh()
    }
    setLoading(null)
  }

  const headerMenus = menus.filter(m => m.location === 'header')
  const headerBottomMenus = menus.filter(m => m.location === 'header-bottom')
  const mobileMenus = menus.filter(m => m.location === 'mobile')
  const footerMenus = menus.filter(m => m.location === 'footer')

  const MenuCard = ({ menu }: { menu: Menu }) => (
    <div className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 flex-1">
          <div className={`p-2 rounded-lg ${menu.is_active ? 'bg-blue-100' : 'bg-gray-100'}`}>
            <MenuIcon className={`w-5 h-5 ${menu.is_active ? 'text-blue-600' : 'text-gray-400'}`} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900">{menu.name}</h3>
              <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                menu.is_active 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {menu.is_active ? 'Active' : 'Inactive'}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Slug: {menu.slug}</p>
            <p className="text-xs text-gray-400 mt-1">Order: {menu.display_order}</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => toggleActive(menu.id, menu.is_active)}
            disabled={loading === menu.id}
            title={menu.is_active ? 'Deactivate' : 'Activate'}
          >
            {menu.is_active ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </Button>
          <Link href={`/admin/menus/${menu.id}/items`}>
            <Button variant="ghost" size="sm" title="Manage Items">
              <MenuIcon className="w-4 h-4" />
            </Button>
          </Link>
          <Link href={`/admin/menus/${menu.id}/edit`}>
            <Button variant="ghost" size="sm" title="Edit Menu">
              <Edit className="w-4 h-4" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => deleteMenu(menu.id)}
            disabled={loading === menu.id}
            className="text-red-600 hover:text-red-700"
            title="Delete Menu"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Header Menus */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Header Menus (Main Navigation)</h2>
        {headerMenus.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed">
            <MenuIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No header menus found</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {headerMenus.map(menu => (
              <MenuCard key={menu.id} menu={menu} />
            ))}
          </div>
        )}
      </div>

      {/* Header Bottom Menus */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Header Bottom Bar (Desktop Only)</h2>
        <p className="text-sm text-gray-600 mb-4">
          This menu appears below the main navigation with white background. 
          Supports parent-child dropdowns just like the main menu.
        </p>
        {headerBottomMenus.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed">
            <MenuIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No header bottom menus found</p>
            <p className="text-sm text-gray-400 mt-2">Create one to add a bottom navigation bar with dropdown support</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {headerBottomMenus.map(menu => (
              <MenuCard key={menu.id} menu={menu} />
            ))}
          </div>
        )}
      </div>

      {/* Mobile Menus */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Mobile Menu (Mobile Only)</h2>
        <p className="text-sm text-gray-600 mb-4">
          This menu only appears on mobile devices in the left drawer. 
          Separate from desktop menus for better mobile experience.
        </p>
        {mobileMenus.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed">
            <MenuIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No mobile menus found</p>
            <p className="text-sm text-gray-400 mt-2">Create one to add a mobile-specific navigation</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {mobileMenus.map(menu => (
              <MenuCard key={menu.id} menu={menu} />
            ))}
          </div>
        )}
      </div>

      {/* Footer Menus */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Footer Menus</h2>
        {footerMenus.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed">
            <MenuIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No footer menus found</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {footerMenus.map(menu => (
              <MenuCard key={menu.id} menu={menu} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
