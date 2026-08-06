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
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ToastContainer toasts={toasts as any} onRemove={removeToast} />
      {/* Floating action buttons */}
      <WhatsAppButton />
      <Chatbot />
    </>
  )
}

// Export addToast context if needed — for now pages handle their own toasts
export default MainLayout
