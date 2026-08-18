import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { ToastContainer } from '../components/Common/ModalToast'
import { Chatbot } from '../components/Chatbot/Chatbot'
import { WhatsAppButton } from '../components/Common/WhatsAppButton'
import { useToast } from '../hooks/useToast'
import { useLenis } from '../hooks/useLenis'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { toasts, addToast, removeToast } = useToast()
  useLenis()

  return (
    <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-clip min-w-0 relative">
      <Navbar />
      <main className="flex-1 w-full max-w-full overflow-x-clip min-w-0">{children}</main>
      <Footer />
      <ToastContainer toasts={toasts as any} onRemove={removeToast} />
      {/* Floating action buttons */}
      <WhatsAppButton />
      <Chatbot />
    </div>
  )
}

// Export addToast context if needed — for now pages handle their own toasts
export default MainLayout
