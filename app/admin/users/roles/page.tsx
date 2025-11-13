import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Eye, Edit } from 'lucide-react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { createServerSupabaseClient } from '@/lib/supabase-server'

const iconMap: Record<string, any> = {
  admin: Shield,
  editor: Edit,
  viewer: Eye,
}

const colorMap: Record<string, { text: string; bg: string }> = {
  admin: { text: 'text-red-600', bg: 'bg-red-50' },
  editor: { text: 'text-blue-600', bg: 'bg-blue-50' },
  viewer: { text: 'text-green-600', bg: 'bg-green-50' },
}

export default async function RolesPage() {
  const supabase = await createServerSupabaseClient()
  
  const { data: rolesData } = await supabase
    .from('user_roles')
    .select('*')
    .eq('is_active', true)
    .order('name')

  const roles = rolesData?.map(role => ({
    name: role.display_name,
    icon: iconMap[role.name] || Shield,
    color: colorMap[role.name]?.text || 'text-gray-600',
    bgColor: colorMap[role.name]?.bg || 'bg-gray-50',
    permissions: Array.isArray(role.permissions) 
      ? role.permissions 
      : (role.description ? [role.description] : []),
    description: role.description
  })) || []

  return (
    <div className="p-8">
      <Link href="/admin/users" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Users
      </Link>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">User Roles & Permissions</h1>
        <p className="text-gray-500">Overview of different user roles and their access levels</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {roles.map((role) => {
          const Icon = role.icon
          return (
            <Card key={role.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 ${role.bgColor} rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className={`w-6 h-6 ${role.color}`} />
                </div>
                <CardTitle>{role.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {role.permissions.map((permission: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span className="text-gray-700">{permission}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>How to Assign Roles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-sm text-gray-700">
            <p>
              <strong>When creating a new user:</strong> Select the appropriate role from the dropdown menu in the "Add New User" form.
            </p>
            <p>
              <strong>To change a user's role:</strong> Go to the Users list, click Edit on the user, and update their role.
            </p>
            <p>
              <strong>Best Practices:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Assign the minimum required permissions for each user</li>
              <li>Regularly review user roles and access</li>
              <li>Use Admin role sparingly - only for trusted administrators</li>
              <li>Editor role is suitable for content managers</li>
              <li>Viewer role is good for stakeholders who need read-only access</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
