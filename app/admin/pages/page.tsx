import React from 'react'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Eye, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import DeletePageButton from '@/components/admin/DeletePageButton'

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

  const getChildren = (parentId: string) => {
    return childPages.filter(p => p.parent_id === parentId);
  };

  const renderPageRow = (page: Page, isChild = false) => (
    <tr key={page.id} className="hover:bg-gray-50">
      <td className="px-6 py-4 font-medium text-gray-900">
        <div className="flex items-center gap-2">
          {isChild && (
            <>
              <div className="w-6 h-px bg-gray-300"></div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </>
          )}
          <span className={isChild ? 'text-gray-700' : ''}>{page.title}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        <span className={isChild ? 'text-xs' : ''}>{page.slug}</span>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">
        <Link href={`/${page.slug}`} target="_blank" className="text-primary hover:underline flex items-center gap-1">
          /{page.slug}
          <Eye className="w-3 h-3" />
        </Link>
      </td>
      <td className="px-6 py-4">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          page.is_published 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {page.is_published ? 'Published' : 'Draft'}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          isChild 
            ? 'bg-blue-100 text-blue-800' 
            : 'bg-purple-100 text-purple-800'
        }`}>
          {isChild ? 'Child Page' : 'Parent Page'}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-2">
          <Link href={`/admin/pages/${page.id}/edit`}>
            <Button variant="ghost" size="sm">
              <Edit className="w-4 h-4" />
            </Button>
          </Link>
          <DeletePageButton pageId={page.id} pageTitle={page.title} />
        </div>
      </td>
    </tr>
  );

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
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {parentPages.map((parent) => (
              <React.Fragment key={parent.id}>
                {renderPageRow(parent, false)}
                {getChildren(parent.id).map((child) => renderPageRow(child, true))}
              </React.Fragment>
            ))}
            {childPages.filter(c => !parentPages.find(p => p.id === c.parent_id)).map((orphan) => (
              renderPageRow(orphan, true)
            ))}
          </tbody>
        </table>
        {!pages || pages.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No pages found. Add your first page!
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">💡 How Pages Work:</h3>
        <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
          <li><strong>Parent Pages:</strong> Top-level pages (e.g., About, Services)</li>
          <li><strong>Child Pages:</strong> Sub-pages under a parent (e.g., About → Team, About → History)</li>
          <li>Pages are accessible at /{'{slug}'} (e.g., /about-us, /about-us/team)</li>
          <li>Use sort order to control the display order of pages</li>
          <li>Toggle publish status to control visibility</li>
        </ul>
      </div>
    </div>
  )
}
