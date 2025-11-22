'use client'

import { usePathname } from 'next/navigation'
import DynamicHeader from '@/components/layout/DynamicHeader'
import DynamicFooter from '@/components/layout/DynamicFooter'
import Chatbot from '@/components/ui/chatbot'

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Hide header/footer for admin and auth routes
  const isAdminOrAuth = pathname?.startsWith('/admin') || pathname?.startsWith('/login')
  
  if (isAdminOrAuth) {
    return <>{children}</>
  }
  
  return (
    <>
      <DynamicHeader />
      <main className="min-h-screen">
        {children}
      </main>
      <DynamicFooter />
      <Chatbot />
    </>
  )
}
