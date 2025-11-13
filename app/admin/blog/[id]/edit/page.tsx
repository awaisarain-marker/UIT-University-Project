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
import ImageUpload from '@/components/admin/ImageUpload'
import { toast } from '@/components/ui/toast'

export default function EditBlogPage() {
  const router = useRouter()
  const params = useParams()
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [loadingData, setLoadingData] = useState(true)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    image_url: '',
    is_published: false,
  })

  useEffect(() => {
    loadBlogPost()
  }, [])

  const loadBlogPost = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error) {
      toast.error('Error loading blog post: ' + error.message)
      router.push('/admin/blog')
    } else if (data) {
      setFormData({
        title: data.title || '',
        content: data.content || '',
        excerpt: data.excerpt || '',
        category: data.category || '',
        image_url: data.image_url || '',
        is_published: data.is_published ?? false,
      })
    }
    setLoadingData(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { data: { user } } = await supabase.auth.getUser()
    
    const { error } = await supabase
      .from('blog_posts')
      .update({
        ...formData,
        published_at: formData.is_published ? new Date().toISOString() : null,
      })
      .eq('id', params.id)

    if (error) {
      toast.error('Error updating blog post: ' + error.message)
      setLoading(false)
    } else {
      toast.success('Blog post updated successfully!')
      router.push('/admin/blog')
      router.refresh()
    }
  }

  if (loadingData) {
    return (
      <div className="p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <Link href="/admin/blog" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      <Card>
        <CardHeader>
          <CardTitle>Edit Blog Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Input
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content *</Label>
              <textarea
                id="content"
                required
                className="w-full min-h-[200px] px-3 py-2 border rounded-md"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <select
                  id="category"
                  required
                  className="w-full px-3 py-2 border rounded-md"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="">Select a category</option>
                  <option value="News">News</option>
                  <option value="Research">Research</option>
                  <option value="Announcements">Announcements</option>
                  <option value="Events">Events</option>
                  <option value="Student Life">Student Life</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <ImageUpload
              label="Featured Image"
              value={formData.image_url}
              onChange={(url) => setFormData({ ...formData, image_url: url })}
              folder="blog"
            />

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="is_published"
                checked={formData.is_published}
                onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
                className="w-4 h-4"
              />
              <Label htmlFor="is_published">Published</Label>
            </div>

            <div className="flex gap-3">
              <Button type="submit" disabled={loading}>
                {loading ? 'Updating...' : 'Update Post'}
              </Button>
              <Link href="/admin/blog">
                <Button type="button" variant="outline">Cancel</Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
