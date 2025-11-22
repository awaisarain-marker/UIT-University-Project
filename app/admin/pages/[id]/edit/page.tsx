'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Save, Trash2 } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const TiptapEditor = dynamic(() => import('@/components/cms/TiptapEditor'), {
  ssr: false,
  loading: () => <div className="border rounded-lg p-4 h-64 flex items-center justify-center">Loading editor...</div>
});

export default function EditPagePage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [pageId, setPageId] = useState<string>('');
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    meta_description: '',
    parent_id: '',
    sort_order: 0,
    is_published: false
  });
  const [parentPages, setParentPages] = useState<any[]>([]);

  useEffect(() => {
    params.then(p => {
      setPageId(p.id);
      fetchPage(p.id);
      fetchParentPages(p.id);
    });
  }, []);

  const fetchParentPages = async (currentPageId: string) => {
    try {
      const response = await fetch('/api/admin/pages');
      if (response.ok) {
        const data = await response.json();
        // Exclude current page and its children from parent options
        setParentPages(data.filter((p: any) => !p.parent_id && p.id !== currentPageId));
      }
    } catch (error) {
      console.error('Error fetching parent pages:', error);
    }
  };

  const fetchPage = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/pages/${id}`);
      if (!response.ok) throw new Error('Failed to fetch page');
      const data = await response.json();
      setFormData(data);
    } catch (error) {
      console.error('Error fetching page:', error);
      alert('Failed to load page');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pageId) return;
    
    setLoading(true);

    try {
      const response = await fetch(`/api/admin/pages/${pageId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to update page');

      router.push('/admin/pages');
      router.refresh();
    } catch (error) {
      console.error('Error updating page:', error);
      alert('Failed to update page');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!pageId) return;
    
    if (!confirm('Are you sure you want to delete this page? This action cannot be undone.')) {
      return;
    }

    setDeleting(true);

    try {
      const response = await fetch(`/api/admin/pages/${pageId}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete page');

      router.push('/admin/pages');
      router.refresh();
    } catch (error) {
      console.error('Error deleting page:', error);
      alert('Failed to delete page');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-6">
        <Link href="/admin/pages">
          <Button variant="ghost" className="gap-2 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Pages
          </Button>
        </Link>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Edit Page</h1>
            <p className="text-gray-500">Update page content and settings</p>
          </div>
          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={deleting}
            className="gap-2"
          >
            <Trash2 className="w-4 h-4" />
            {deleting ? 'Deleting...' : 'Delete Page'}
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg border p-6 space-y-6">
          <div>
            <Label htmlFor="title">Page Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., About Us"
              required
            />
          </div>

          <div>
            <Label htmlFor="slug">URL Slug *</Label>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">/</span>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="about-us"
                required
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Changing the slug will change the page URL
            </p>
          </div>

          <div>
            <Label htmlFor="meta_description">Meta Description</Label>
            <Textarea
              id="meta_description"
              value={formData.meta_description}
              onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
              placeholder="Brief description for SEO (150-160 characters)"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="parent_id">Parent Page (Optional)</Label>
              <select
                id="parent_id"
                value={formData.parent_id || ''}
                onChange={(e) => setFormData({ ...formData, parent_id: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">None (Top-level page)</option>
                {parentPages.map((page) => (
                  <option key={page.id} value={page.id}>
                    {page.title}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Select a parent to make this a child page
              </p>
            </div>

            <div>
              <Label htmlFor="sort_order">Sort Order</Label>
              <Input
                id="sort_order"
                type="number"
                value={formData.sort_order}
                onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) || 0 })}
                placeholder="0"
              />
              <p className="text-xs text-gray-500 mt-1">
                Lower numbers appear first
              </p>
            </div>
          </div>

          <div>
            <Label>Page Content</Label>
            <TiptapEditor
              content={formData.content}
              onChange={(content) => setFormData({ ...formData, content })}
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="is_published"
              checked={formData.is_published}
              onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <Label htmlFor="is_published" className="cursor-pointer">
              Published
            </Label>
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="submit" disabled={loading} className="gap-2">
            <Save className="w-4 h-4" />
            {loading ? 'Saving...' : 'Save Changes'}
          </Button>
          <Link href="/admin/pages">
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
