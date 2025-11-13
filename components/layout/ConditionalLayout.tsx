'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
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
      <Header />
      <main className="pt-24 lg:pt-28 min-h-screen">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
