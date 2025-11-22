'use client'

import { usePathname } from 'next/navigation'
import DynamicHeader from '@/components/layout/DynamicHeader'
import DynamicFooter from '@/components/layout/DynamicFooter'
import Chatbot from '@/components/ui/chatbot'

type ConditionalLayoutProps = {
  children: React.ReactNode;
  initialMenuItems?: any[];
  initialMegaMenuData?: Record<string, any>;
};

export default function ConditionalLayout({ 
  children, 
  initialMenuItems = [], 
  initialMegaMenuData = {} 
}: ConditionalLayoutProps) {
  const pathname = usePathname()
  
  // Hide header/footer for admin and auth routes
  const isAdminOrAuth = pathname?.startsWith('/admin') || pathname?.startsWith('/login')
  
  if (isAdminOrAuth) {
    return <>{children}</>
  }
  
  return (
    <>
      <DynamicHeader initialMenuItems={initialMenuItems} initialMegaMenuData={initialMegaMenuData} />
      <main className="min-h-screen">
        {children}
      </main>
      <DynamicFooter />
      <Chatbot />
    </>
  )
}
