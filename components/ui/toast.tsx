'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { BadgeCheck, X, AlertCircle } from 'lucide-react'

interface Toast {
  id: string
  message: string
  type: 'success' | 'error'
}

interface ToastContextType {
  showToast: (message: string, type: 'success' | 'error') => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = useCallback((message: string, type: 'success' | 'error') => {
    const id = Math.random().toString(36).substring(7)
    setToasts((prev) => [...prev, { id, message, type }])

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 3000)
  }, [])

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="group/item flex items-center border text-sm rounded-md transition-all duration-300 animate-in slide-in-from-right-full flex-wrap outline-none border-border py-3 px-4 gap-2.5 bg-white shadow-lg min-w-[300px]"
          >
            <div className="flex shrink-0 items-center justify-center gap-2 bg-transparent">
              {toast.type === 'success' ? (
                <BadgeCheck className="size-5 text-green-600" />
              ) : (
                <AlertCircle className="size-5 text-red-600" />
              )}
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex w-fit items-center gap-2 text-sm leading-snug font-medium">
                {toast.message}
              </div>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="flex items-center gap-2 hover:bg-gray-100 rounded p-1 transition-colors"
            >
              <X className="size-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}

// Helper functions for easy use
export const toast = {
  success: (message: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('show-toast', { detail: { message, type: 'success' } }))
    }
  },
  error: (message: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('show-toast', { detail: { message, type: 'error' } }))
    }
  },
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useState(() => {
    const handleShowToast = (event: CustomEvent) => {
      const { message, type } = event.detail
      const id = Math.random().toString(36).substring(7)
      setToasts((prev) => [...prev, { id, message, type }])

      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
      }, 3000)
    }

    window.addEventListener('show-toast' as any, handleShowToast)
    return () => window.removeEventListener('show-toast' as any, handleShowToast)
  })

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="group/item flex items-center border text-sm rounded-md transition-all duration-300 animate-in slide-in-from-right-full flex-wrap outline-none border-border py-3 px-4 gap-2.5 bg-white shadow-lg min-w-[300px]"
        >
          <div className="flex shrink-0 items-center justify-center gap-2 bg-transparent">
            {toast.type === 'success' ? (
              <BadgeCheck className="size-5 text-green-600" />
            ) : (
              <AlertCircle className="size-5 text-red-600" />
            )}
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <div className="flex w-fit items-center gap-2 text-sm leading-snug font-medium">
              {toast.message}
            </div>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="flex items-center gap-2 hover:bg-gray-100 rounded p-1 transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>
      ))}
    </div>
  )
}
