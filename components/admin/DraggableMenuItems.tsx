'use client'

import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import MenuItemActions from '@/components/admin/MenuItemActions'
import { createClient } from '@/lib/supabase-client'
import { useRouter } from 'next/navigation'

interface MenuItem {
  id: string
  title: string
  url: string
  parent_id: string | null
  display_order: number
  is_active: boolean
  target: string
}

interface DraggableMenuItemsProps {
  items: MenuItem[]
  menuId: string
}

export default function DraggableMenuItems({ items, menuId }: DraggableMenuItemsProps) {
  const [menuItems, setMenuItems] = useState(items)
  const [draggedItem, setDraggedItem] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const allItems = menuItems || []
  const parentItems = allItems.filter(item => !item.parent_id)

  const getChildren = (parentId: string) => {
    return allItems.filter(item => item.parent_id === parentId)
  }

  const getItemLevel = (item: MenuItem): number => {
    if (!item.parent_id) return 0
    const parent = allItems.find(i => i.id === item.parent_id)
    return parent ? getItemLevel(parent) + 1 : 0
  }

  const getItemType = (item: MenuItem): string => {
    const level = getItemLevel(item)
    if (level === 0) return 'Parent'
    if (level === 1) return 'Child'
    return 'Sub-child'
  }

  const handleDragStart = (e: React.DragEvent, itemId: string) => {
    setDraggedItem(itemId)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = async (e: React.DragEvent, targetItemId: string) => {
    e.preventDefault()
    
    if (!draggedItem || draggedItem === targetItemId) {
      setDraggedItem(null)
      return
    }

    const draggedIndex = allItems.findIndex(item => item.id === draggedItem)
    const targetIndex = allItems.findIndex(item => item.id === targetItemId)

    if (draggedIndex === -1 || targetIndex === -1) return

    // Reorder items
    const newItems = [...allItems]
    const [removed] = newItems.splice(draggedIndex, 1)
    newItems.splice(targetIndex, 0, removed)

    // Update display_order for all items
    const updates = newItems.map((item, index) => ({
      id: item.id,
      display_order: index
    }))

    // Update in database
    try {
      for (const update of updates) {
        await supabase
          .from('menu_items')
          .update({ display_order: update.display_order })
          .eq('id', update.id)
      }

      setMenuItems(newItems)
      router.refresh()
    } catch (error) {
      console.error('Error updating order:', error)
    }

    setDraggedItem(null)
  }

  const renderItemRow = (item: MenuItem, level = 0): React.ReactNode => {
    const children = getChildren(item.id)
    const itemType = getItemType(item)
    const isDragging = draggedItem === item.id
    
    return (
      <React.Fragment key={item.id}>
        <tr 
          className={`hover:bg-gray-50 cursor-move ${isDragging ? 'opacity-50' : ''}`}
          draggable
          onDragStart={(e) => handleDragStart(e, item.id)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, item.id)}
        >
          <td className="px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="cursor-grab active:cursor-grabbing">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
              </div>
              {level > 0 && (
                <>
                  <div style={{ width: `${level * 24}px` }} className="flex items-center">
                    {Array.from({ length: level }).map((_, i) => (
                      <div key={i} className="w-6 h-px bg-gray-300"></div>
                    ))}
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </>
              )}
              <span className={`font-medium ${level > 0 ? 'text-gray-700 text-sm' : 'text-gray-900'}`}>
                {item.title}
              </span>
            </div>
          </td>
          <td className="px-6 py-4 text-sm text-gray-500">{item.url}</td>
          <td className="px-6 py-4">
            <div className="flex items-center gap-2">
              <span
                className={`px-2 py-1 font-medium rounded-full ${
                  item.is_active
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
                style={{ fontSize: '12px' }}
              >
                {item.is_active ? 'Active' : 'Inactive'}
              </span>
              <span
                className={`px-2 py-1 font-medium rounded-full ${
                  level === 0
                    ? 'bg-purple-100 text-purple-800'
                    : level === 1
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-orange-100 text-orange-800'
                }`}
                style={{ fontSize: '12px' }}
              >
                {itemType}
              </span>
            </div>
          </td>
          <td className="px-6 py-4 text-sm text-gray-500">{item.display_order}</td>
          <td className="px-6 py-4 text-right">
            <MenuItemActions itemId={item.id} menuId={menuId} itemTitle={item.title} />
          </td>
        </tr>
        {children.map((child) => renderItemRow(child, level + 1))}
      </React.Fragment>
    )
  }

  return (
    <>
      {parentItems.map((parent) => renderItemRow(parent, 0))}
    </>
  )
}
