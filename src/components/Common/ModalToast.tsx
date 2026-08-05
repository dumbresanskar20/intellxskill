import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react'
import { modalVariants, overlayVariants } from '../../animations/variants'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'lg',
}) => {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  }

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`relative bg-white rounded-2xl shadow-2xl w-full ${sizes[size]} max-h-[90vh] overflow-hidden z-10`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {title && (
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <h2 id="modal-title" className="text-xl font-bold text-gray-900">{title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-800"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

// Toast component
interface ToastProps {
  id: string
  type: 'success' | 'error' | 'info'
  title: string
  message: string
  onRemove: (id: string) => void
}

export const Toast: React.FC<ToastProps> = ({ id, type, title, message, onRemove }) => {
  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />,
    info: <Info className="w-5 h-5 text-blue-500 flex-shrink-0" />,
  }

  const borders = {
    success: 'border-l-4 border-green-500',
    error: 'border-l-4 border-red-500',
    info: 'border-l-4 border-blue-500',
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.9 }}
      className={`bg-white rounded-xl shadow-xl p-4 flex items-start gap-3 w-80 ${borders[type]}`}
      role="alert"
    >
      {icons[type]}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 text-sm">{title}</p>
        <p className="text-gray-500 text-xs mt-0.5">{message}</p>
      </div>
      <button
        onClick={() => onRemove(id)}
        className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 flex-shrink-0"
        aria-label="Dismiss notification"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  )
}

export const ToastContainer: React.FC<{
  toasts: ToastProps[]
  onRemove: (id: string) => void
}> = ({ toasts, onRemove }) => (
  <div className="fixed bottom-6 right-6 z-[99999] flex flex-col gap-3">
    <AnimatePresence mode="popLayout">
      {toasts.map(toast => (
        <Toast key={toast.id} {...toast} onRemove={onRemove} />
      ))}
    </AnimatePresence>
  </div>
)
