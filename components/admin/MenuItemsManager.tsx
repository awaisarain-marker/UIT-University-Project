'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createClient } from '@/lib/supabase-client'
import { Plus, Trash2, Edit, GripVertical, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface MenuItem {
  id: string
  menu_id: string
  parent_id: string | null
  title: string
  url: string
  target: string
  icon: string | null
  css_class: string | null
  display_order: number
  is_active: boolean
}

interface MenuItemsManagerProps {
  menuId: string
  initialItems: MenuItem[]
}

export default function MenuItemsManager({ menuId, initialItems }: MenuItemsManagerProps) {
  const [items, setItems] = useState(initialItems)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    parent_id: '',
    target: '_self',
    icon: '',
    css_class: '',
    display_order: items.length,
    is_active: true,
  })
  
  const router = useRouter()
  const supabase = createClient()

  const resetForm = () => {
    setFormData({
      title: '',
      url: '',
      parent_id: '',
      target: '_self',
      icon: '',
      css_class: '',
      display_order: items.length,
      is_active: true,
    })
    setEditingId(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const data = {
      ...formData,
      menu_id: menuId,
      parent_id: formData.parent_id || null,
      icon: formData.icon || null,
      css_class: formData.css_class || null,
    }

    if (editingId) {
      const { error } = await supabase
        .from('menu_items')
        .update(data)
        .eq('id', editingId)

      if (!error) {
        setItems(items.map(item => item.id === editingId ? { ...item, ...data } : item))
        resetForm()
      }
    } else {
      const { data: newItem, error } = await supabase
        .from('menu_items')
        .insert([data])
        .select()
        .single()

      if (!error && newItem) {
        setItems([...items, newItem])
        resetForm()
      }
    }

    setLoading(false)
    router.refresh()
  }

  const handleEdit = (item: MenuItem) => {
    setFormData({
      title: item.title,
      url: item.url,
      parent_id: item.parent_id || '',
      target: item.target,
      icon: item.icon || '',
      css_class: item.css_class || '',
      display_order: item.display_order,
      is_active: item.is_active,
    })
    setEditingId(item.id)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this menu item?')) return

    const { error } = await supabase
      .from('menu_items')
      .delete()
      .eq('id', id)

    if (!error) {
      setItems(items.filter(item => item.id !== id))
      router.refresh()
    }
  }

  // Organize items into hierarchy
  const topLevelItems = items.filter(item => !item.parent_id)
  const getChildren = (parentId: string) => items.filter(item => item.parent_id === parentId)

  const MenuItem = ({ item, level = 0 }: { item: MenuItem; level?: number }) => {
    const children = getChildren(item.id)
    const hasChildren = children.length > 0

    return (
      <div>
        <div 
          className={`flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50 ${
            !item.is_active ? 'opacity-50' : ''
          }`}
          style={{ marginLeft: `${level * 24}px` }}
        >
          <GripVertical className="w-4 h-4 text-gray-400" />
          {hasChildren && <ChevronRight className="w-4 h-4 text-gray-400" />}
          <div className="flex-1">
            <div className="font-medium text-gray-900">{item.title}</div>
            <div className="text-sm text-gray-500">{item.url}</div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleEdit(item)}
            >
              <Edit className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleDelete(item.id)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
        {hasChildren && (
          <div className="mt-2 space-y-2">
            {children.map(child => (
              <MenuItem key={child.id} item={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Form */}
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>{editingId ? 'Edit Menu Item' : 'Add Menu Item'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Home"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="url">URL *</Label>
              <Input
                id="url"
                required
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                placeholder="e.g., /"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="parent_id">Parent Item (for dropdown menus)</Label>
              <select
                id="parent_id"
                className="w-full px-3 py-2 border rounded-md"
                value={formData.parent_id}
                onChange={(e) => setFormData({ ...formData, parent_id: e.target.value })}
              >
                <option value="">None (Top Level)</option>
                {items
                  .filter(item => item.id !== editingId) // Don't allow selecting itself
                  .map(item => {
                    const prefix = item.parent_id ? '  ↳ ' : '';
                    return (
                      <option key={item.id} value={item.id}>
                        {prefix}{item.title}
                      </option>
                    );
                  })}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Select a parent to make this item appear in a dropdown menu
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="target">Target</Label>
              <select
                id="target"
                className="w-full px-3 py-2 border rounded-md"
                value={formData.target}
                onChange={(e) => setFormData({ ...formData, target: e.target.value })}
              >
                <option value="_self">Same Window</option>
                <option value="_blank">New Window</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="display_order">Display Order</Label>
              <Input
                id="display_order"
                type="number"
                value={formData.display_order}
                onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="is_active"
                checked={formData.is_active}
                onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                className="w-4 h-4"
              />
              <Label htmlFor="is_active">Active</Label>
            </div>

            <div className="flex gap-2">
              <Button type="submit" disabled={loading} className="flex-1">
                {loading ? 'Saving...' : editingId ? 'Update' : 'Add Item'}
              </Button>
              {editingId && (
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* List */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Menu Items ({items.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {items.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No menu items yet. Add your first item!
            </div>
          ) : (
            <div className="space-y-2">
              {topLevelItems.map(item => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
