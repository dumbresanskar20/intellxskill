import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, AlertTriangle } from 'lucide-react'

export const NotFound: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-white px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-md"
    >
      <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
        <AlertTriangle className="w-10 h-10 text-[#1E3A8A]" />
      </div>
      <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
      <h2 className="text-xl font-bold text-gray-700 mb-3">Page Not Found</h2>
      <p className="text-gray-500 mb-8 leading-relaxed">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A8A] text-white rounded-xl font-semibold hover:bg-[#152B6B] transition-colors shadow-md"
      >
        <Home className="w-4 h-4" />
        Back to Home
      </Link>
    </motion.div>
  </div>
)
