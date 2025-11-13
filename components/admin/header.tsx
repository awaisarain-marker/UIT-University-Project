'use client'

import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-client'

interface Notification {
  id: string
  title: string
  message: string
  is_read: boolean
  created_at: string
}

export default function AdminHeader() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [showNotifications, setShowNotifications] = useState(false)
  const [user, setUser] = useState<{ email: string; name: string; initials: string } | null>(null)
  const supabase = createClient()

  useEffect(() => {
    loadUser()
    loadNotifications()
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

  const loadNotifications = async () => {
    const { data: { user: authUser } } = await supabase.auth.getUser()
    if (authUser) {
      const { data } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', authUser.id)
        .order('created_at', { ascending: false })
        .limit(5)
      
      if (data) {
        setNotifications(data)
      }
    }
  }

  const unreadCount = notifications.filter(n => !n.is_read).length

  const markAsRead = async (id: string) => {
    await supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('id', id)
    loadNotifications()
  }

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6">
      <div className="flex items-center gap-4 flex-1">
        <h1 className="text-xl font-semibold text-gray-900">UIT University Admin</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </Button>

          {showNotifications && (
            <div className="absolute right-0 top-12 w-80 bg-white border rounded-lg shadow-lg z-50">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Notifications</h3>
                {unreadCount > 0 && (
                  <p className="text-xs text-gray-500">{unreadCount} unread</p>
                )}
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-4 text-center text-gray-500 text-sm">
                    No notifications
                  </div>
                ) : (
                  notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${
                        !notif.is_read ? 'bg-blue-50' : ''
                      }`}
                      onClick={() => markAsRead(notif.id)}
                    >
                      <p className="font-medium text-sm">{notif.title}</p>
                      <p className="text-xs text-gray-600 mt-1">{notif.message}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(notif.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-xs font-semibold text-white">
              {user?.initials || 'U'}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
