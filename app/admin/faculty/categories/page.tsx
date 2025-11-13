'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, Trash2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase-client'

interface Category {
  id: string
  name: string
  description?: string
}

export default function FacultyCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [newCategory, setNewCategory] = useState('')
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    const { data } = await supabase
      .from('categories')
      .select('*')
      .eq('type', 'faculty')
      .order('name')
    
    if (data) {
      setCategories(data)
    }
  }

  const handleAddCategory = async () => {
    if (newCategory.trim() && !categories.find(c => c.name === newCategory.trim())) {
      setLoading(true)
      const { error } = await supabase
        .from('categories')
        .insert([{ name: newCategory.trim(), type: 'faculty' }])
      
      if (error) {
        alert('Error adding category: ' + error.message)
      } else {
        setNewCategory('')
        loadCategories()
      }
      setLoading(false)
    }
  }

  const handleDeleteCategory = async (category: Category) => {
    if (confirm(`Delete specialization "${category.name}"?`)) {
      setLoading(true)
      const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', category.id)
      
      if (error) {
        alert('Error deleting category: ' + error.message)
      } else {
        loadCategories()
      }
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <Link href="/admin/faculty" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Faculty
      </Link>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Add New Specialization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                placeholder="e.g., Computer Science, Mathematics"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddCategory()}
              />
              <Button onClick={handleAddCategory} disabled={loading}>
                <Plus className="w-4 h-4 mr-2" />
                {loading ? 'Adding...' : 'Add'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Specializations ({categories.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {categories.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-4">No specializations yet.</p>
              ) : (
                categories.map((category) => (
                  <div key={category.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                    <span className="font-medium text-gray-900">{category.name}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteCategory(category)}
                      className="text-red-600 hover:text-red-700"
                      disabled={loading}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
