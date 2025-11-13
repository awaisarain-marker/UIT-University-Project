'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase-client'
import { useRouter } from 'next/navigation'
import { Home, BookOpen, Users, FileText, Calendar, Settings, LogOut, ChevronDown, ChevronRight, Database, UserCog } from 'lucide-react'
import { useState, useEffect } from 'react'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: Home },
  { name: 'All Entries', href: '/admin/entries', icon: Database },
  { 
    name: 'Users', 
    icon: UserCog,
    submenu: [
      { name: 'View All', href: '/admin/users' },
      { name: 'Add New', href: '/admin/users/new' },
      { name: 'Roles', href: '/admin/users/roles' },
    ]
  },
  { 
    name: 'Courses', 
    icon: BookOpen,
    submenu: [
      { name: 'View All', href: '/admin/courses' },
      { name: 'Add New', href: '/admin/courses/new' },
      { name: 'Categories', href: '/admin/courses/categories' },
    ]
  },
  { 
    name: 'Faculty', 
    icon: Users,
    submenu: [
      { name: 'View All', href: '/admin/faculty' },
      { name: 'Add New', href: '/admin/faculty/new' },
      { name: 'Categories', href: '/admin/faculty/categories' },
    ]
  },
  { 
    name: 'Events', 
    icon: Calendar,
    submenu: [
      { name: 'View All', href: '/admin/events' },
      { name: 'Add New', href: '/admin/events/new' },
      { name: 'Categories', href: '/admin/events/categories' },
    ]
  },
  { 
    name: 'Blog', 
    icon: FileText,
    submenu: [
      { name: 'View All', href: '/admin/blog' },
      { name: 'Add New', href: '/admin/blog/new' },
      { name: 'Categories', href: '/admin/blog/categories' },
    ]
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()
  const [openMenus, setOpenMenus] = useState<string[]>([])
  const [user, setUser] = useState<{ email: string; name: string; initials: string } | null>(null)

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
    const { data: { user: authUser } } = await supabase.auth.getUser()
    if (authUser) {
      const name = authUser.user_metadata?.full_name || authUser.email?.split('@')[0] || 'User'
      const initials = name.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2)
      setUser({
        email: authUser.email || '',
        name,
        initials
      })
    }
  }

  const toggleMenu = (name: string) => {
    setOpenMenus(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name)
        : [...prev, name]
    )
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <div className="w-64 border-r bg-white flex flex-col h-full">
      {/* Logo Section */}
      <div className="p-6 border-b flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Home className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">UIT Admin</h2>
            <p className="text-xs text-gray-500">University Panel</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3 flex-shrink-0">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 pl-9 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <svg className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const Icon = item.icon
          const isOpen = openMenus.includes(item.name)
          const hasSubmenu = 'submenu' in item

          if (!hasSubmenu) {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href || '#'}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
                  isActive
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                )}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            )
          }

          return (
            <div key={item.name}>
              <button
                onClick={() => toggleMenu(item.name)}
                className="w-full flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  {item.name}
                </div>
                {isOpen ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              
              {isOpen && item.submenu && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.submenu.map((subitem) => {
                    const isActive = pathname === subitem.href
                    return (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        className={cn(
                          'block px-3 py-2 text-sm rounded-lg transition-all',
                          isActive
                            ? 'bg-gray-100 text-gray-900 font-medium'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        )}
                      >
                        {subitem.name}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t space-y-3 flex-shrink-0">
        <Link
          href="/admin/settings"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all"
        >
          <Settings className="w-5 h-5" />
          Settings
        </Link>
        
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-xs font-semibold text-gray-600">
              {user?.initials || 'U'}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{user?.name || 'Loading...'}</p>
            <p className="text-xs text-gray-500 truncate">{user?.email || ''}</p>
          </div>
        </div>

        <Button 
          variant="outline" 
          className="w-full justify-start gap-2"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}
