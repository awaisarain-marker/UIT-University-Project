import { createServerSupabaseClient } from '@/lib/supabase-server'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

export default async function PagesPage() {
  const supabase = await createServerSupabaseClient()
  
  const { data: pages } = await supabase
    .from('pages')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Pages Management</h1>
          <p className="text-gray-500">Manage site pages that can be added to menus</p>
        </div>
        <Link href="/admin/pages/new">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Page
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-lg border">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Slug</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">URL</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {pages?.map((page) => (
              <tr key={page.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{page.title}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{page.slug}</td>
                <td className="px-6 py-4 text-sm text-gray-500">/{page.slug}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    page.is_published 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {page.is_published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <Link href={`/admin/pages/${page.id}/edit`}>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
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
        <h3 className="font-semibold text-blue-900 mb-2">💡 How to add pages to menus:</h3>
        <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
          <li>Create a page here</li>
          <li>Copy the page URL (e.g., /about)</li>
          <li>Go to Menus → Manage Items</li>
          <li>Add a new menu item with the page URL</li>
        </ol>
      </div>
    </div>
  )
}
