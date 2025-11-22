import React from 'react'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import { Button } from '@/components/ui/button'
import { Plus, ArrowLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import MenuItemActions from '@/components/admin/MenuItemActions'

interface MenuItem {
  id: string;
  title: string;
  url: string;
  parent_id: string | null;
  display_order: number;
  is_active: boolean;
  target: string;
}

export default async function MenuItemsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createServerSupabaseClient()
  
  // Get menu details
  const { data: menu } = await supabase
    .from('menus')
    .select('*')
    .eq('id', id)
    .single()

  if (!menu) {
    return <div className="p-8">Menu not found</div>
  }

  // Get menu items
  const { data: items } = await supabase
    .from('menu_items')
    .select('*')
    .eq('menu_id', id)
    .order('display_order', { ascending: true })

  const parentItems = items?.filter(item => !item.parent_id) || []
  const childItems = items?.filter(item => item.parent_id) || []

  const getChildren = (parentId: string) => {
    return childItems.filter(item => item.parent_id === parentId)
  }

  const renderItemRow = (item: MenuItem, isChild = false) => (
    <tr key={item.id} className="hover:bg-gray-50">
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          {isChild && (
            <>
              <div className="w-6 h-px bg-gray-300"></div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </>
          )}
          <span className={`font-medium ${isChild ? 'text-gray-700 text-sm' : 'text-gray-900'}`}>
            {item.title}
          </span>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">{item.url}</td>
      <td className="px-6 py-4">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          item.target === '_blank' 
            ? 'bg-blue-100 text-blue-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {item.target === '_blank' ? 'New Tab' : 'Same Tab'}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          item.is_active 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {item.is_active ? 'Active' : 'Inactive'}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          isChild 
            ? 'bg-blue-100 text-blue-800' 
            : 'bg-purple-100 text-purple-800'
        }`}>
          {isChild ? 'Child' : 'Parent'}
        </span>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">{item.display_order}</td>
      <td className="px-6 py-4 text-right">
        <MenuItemActions itemId={item.id} menuId={id} itemTitle={item.title} />
      </td>
    </tr>
  )

  return (
    <div className="p-8">
      <div className="mb-6">
        <Link href="/admin/menus">
          <Button variant="ghost" className="gap-2 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Menus
          </Button>
        </Link>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Menu Items: {menu.name}</h1>
            <p className="text-gray-500">Manage menu items with parent-child relationships</p>
          </div>
          <Link href={`/admin/menus/${id}/items/new`}>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Add Item
            </Button>
          </Link>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-2xl font-bold text-gray-900">{items?.length || 0}</div>
          <div className="text-sm text-gray-500">Total Items</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-2xl font-bold text-purple-600">{parentItems.length}</div>
          <div className="text-sm text-gray-500">Parent Items</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-2xl font-bold text-blue-600">{childItems.length}</div>
          <div className="text-sm text-gray-500">Child Items</div>
        </div>
      </div>

      <div className="bg-white rounded-lg border">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">URL</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Target</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {parentItems.map((parent) => (
              <React.Fragment key={parent.id}>
                {renderItemRow(parent, false)}
                {getChildren(parent.id).map((child) => renderItemRow(child, true))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        {!items || items.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No menu items found. Add your first item!
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">💡 How Menu Items Work:</h3>
        <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
          <li><strong>Parent Items:</strong> Top-level menu items (e.g., About, Services)</li>
          <li><strong>Child Items:</strong> Dropdown items under a parent (e.g., About → Team, About → History)</li>
          <li>Use display order to control the sequence of items</li>
          <li>Toggle active status to show/hide items</li>
          <li>Set target to open links in same tab or new tab</li>
        </ul>
      </div>
    </div>
  )
}
