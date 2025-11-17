'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createClient } from '@/lib/supabase-client'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function EditMenuPage() {
  const router = useRouter()
  const params = useParams()
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [loadingData, setLoadingData] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    location: 'header',
    display_order: 0,
    is_active: true,
  })

  useEffect(() => {
    loadMenu()
  }, [])

  const loadMenu = async () => {
    const { data, error } = await supabase
      .from('menus')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error) {
      console.error('Error loading menu:', error)
      router.push('/admin/menus')
    } else if (data) {
      setFormData({
        name: data.name || '',
        slug: data.slug || '',
        location: data.location || 'header',
        display_order: data.display_order || 0,
        is_active: data.is_active ?? true,
      })
    }
    setLoadingData(false)
  }

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  const handleNameChange = (name: string) => {
    setFormData({
      ...formData,
      name,
      slug: generateSlug(name)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase
      .from('menus')
      .update(formData)
      .eq('id', params.id)

    if (error) {
      alert('Error updating menu: ' + error.message)
      setLoading(false)
    } else {
      router.push('/admin/menus')
      router.refresh()
    }
  }

  if (loadingData) {
    return (
      <div className="p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading menu...</p>
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

      <div className="mb-4">
        <Link href={`/admin/menus/${params.id}/items`}>
          <Button variant="outline" className="gap-2">
            Manage Menu Items
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Edit Menu</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Menu Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="e.g., Main Navigation"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                required
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="e.g., main-navigation"
              />
              <p className="text-sm text-gray-500">URL-friendly identifier (auto-generated from name)</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <select
                id="location"
                required
                className="w-full px-3 py-2 border rounded-md"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              >
                <option value="header">Header</option>
                <option value="footer">Footer</option>
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
              <p className="text-sm text-gray-500">Lower numbers appear first</p>
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

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">💡 Need to add pages to this menu?</h3>
              <p className="text-sm text-blue-800 mb-3">
                First create pages, then add them as menu items.
              </p>
              <div className="flex gap-2">
                <Link href="/admin/pages">
                  <Button type="button" variant="outline" size="sm">
                    Go to Pages
                  </Button>
                </Link>
                <Link href={`/admin/menus/${params.id}/items`}>
                  <Button type="button" variant="outline" size="sm">
                    Manage Menu Items
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex gap-3">
              <Button type="submit" disabled={loading}>
                {loading ? 'Updating...' : 'Update Menu'}
              </Button>
              <Link href="/admin/menus">
                <Button type="button" variant="outline">Cancel</Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
