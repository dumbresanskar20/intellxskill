import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, BookOpen, ChevronRight } from 'lucide-react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { NAV_LINKS } from '../../constants/data'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { Button } from '../Common/Button'

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { scrolled, progress } = useScrollProgress()
  const location = useLocation()
  const navigate = useNavigate()

  const isHomePage = location.pathname === '/'

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Track active section (only on home page)
  useEffect(() => {
    if (!isHomePage) return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [isHomePage])

  // Handle nav link clicks — scroll on home, navigate + hash on other pages
  const handleNavClick = useCallback(
    (href: string) => {
      setMobileOpen(false)
      if (isHomePage) {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        // Navigate to home then scroll — use hash URL
        navigate('/' + href)
      }
    },
    [isHomePage, navigate]
  )

  // When navigating to home with a hash, scroll to target
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash
      const el = document.querySelector(id)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 200)
      }
    }
  }, [location])

  // Navbar background: always white on inner pages
  const navBg = isHomePage
    ? scrolled
      ? 'bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-gray-100/80'
      : 'bg-transparent'
    : 'bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-gray-100/80'

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${navBg}`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group"
              aria-label="IntellxSkill Technologies — go to homepage"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-9 h-9 bg-gradient-to-br from-[#1E3A8A] to-[#3B5CC4] rounded-xl flex items-center justify-center shadow-md"
              >
                <BookOpen className="w-5 h-5 text-white" />
              </motion.div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-extrabold text-gray-900 tracking-tight">
                  Intellx<span className="text-[#1E3A8A]">Skill</span>
                </span>
                <span className="text-[10px] font-medium text-gray-500 tracking-wide">Technologies</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link, i) => {
                const sectionId = link.href.replace('#', '')
                const isActive = isHomePage && activeSection === sectionId
                return (
                  <motion.a
                    key={link.href}
                    href={isHomePage ? link.href : `/${link.href}`}
                    onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.3, duration: 0.4 }}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-[#1E3A8A]'
                        : 'text-gray-600 hover:text-[#1E3A8A] hover:bg-blue-50'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="active-nav"
                        className="absolute inset-0 bg-blue-50 rounded-lg -z-10"
                      />
                    )}
                  </motion.a>
                )
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" size="sm">
                Student Login
              </Button>
              <Button
                variant="secondary"
                size="sm"
                icon={<ChevronRight className="w-4 h-4" />}
                iconPosition="right"
                onClick={() => handleNavClick('#contact')}
              >
                Book Free Demo
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(prev => !prev)}
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
            >
              <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={isHomePage ? link.href : `/${link.href}`}
                    onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#1E3A8A] hover:bg-blue-50 rounded-xl transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-gray-100">
                  <Button variant="outline" size="sm" className="w-full justify-center">
                    Student Login
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full justify-center"
                    onClick={() => handleNavClick('#contact')}
                  >
                    Book Free Demo
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
