import React from 'react'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import DraggablePages from '@/components/admin/DraggablePages'

interface Page {
  id: string;
  title: string;
  slug: string;
  parent_id: string | null;
  sort_order: number;
  is_published: boolean;
  created_at: string;
}

export default async function PagesPage() {
  const supabase = await createServerSupabaseClient()
  
  const { data: pages } = await supabase
    .from('pages')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false })

  // Organize pages into hierarchy
  const parentPages = pages?.filter(p => !p.parent_id) || [];
  const childPages = pages?.filter(p => p.parent_id) || [];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pages Management</h1>
          <p className="text-gray-500">Create, edit, and manage site pages with parent-child relationships</p>
        </div>
        <Link href="/admin/pages/new">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Page
          </Button>
        </Link>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-2xl font-bold text-gray-900">{pages?.length || 0}</div>
          <div className="text-sm text-gray-500">Total Pages</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-2xl font-bold text-purple-600">{parentPages.length}</div>
          <div className="text-sm text-gray-500">Parent Pages</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-2xl font-bold text-blue-600">{childPages.length}</div>
          <div className="text-sm text-gray-500">Child Pages</div>
        </div>
      </div>

      <div className="bg-white rounded-lg border">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Slug</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">URL</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Order</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {pages && pages.length > 0 ? (
              <DraggablePages pages={pages} />
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-12 text-gray-500">
                  No pages found. Add your first page!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">💡 How Pages Work:</h3>
        <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
          <li><strong>Drag & Drop:</strong> Drag pages to reorder them (grab icon on the left)</li>
          <li><strong>Collapsible:</strong> Click the arrow icon to expand/collapse child pages</li>
          <li><strong>Parent Pages:</strong> Top-level pages (e.g., About, Services)</li>
          <li><strong>Child Pages:</strong> Sub-pages under a parent (e.g., About → Team, About → History)</li>
          <li>Pages are accessible at /{'{slug}'} (e.g., /about-us, /about-us/team)</li>
          <li>Toggle publish status to control visibility</li>
        </ul>
      </div>
    </div>
  )
}
