import { createServerSupabaseClient } from '@/lib/supabase-server'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import MenusList from '@/components/admin/MenusList'

export default async function MenusPage() {
  const supabase = await createServerSupabaseClient()
  
  const { data: menus } = await supabase
    .from('menus')
    .select('*')
    .order('location', { ascending: true })
    .order('display_order', { ascending: true })

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Menu Management</h1>
          <p className="text-gray-500">Manage header and footer menus</p>
        </div>
        <Link href="/admin/menus/new">
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Menu
          </Button>
        </Link>
      </div>

      <MenusList menus={menus || []} />
    </div>
  )
}
