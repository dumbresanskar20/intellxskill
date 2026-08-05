import React from 'react'
import { motion } from 'framer-motion'
import { Search, ChevronRight, PlayCircle, Clock, BookOpen, Briefcase, Trophy } from 'lucide-react'
import { AnimatedCounter } from '../Common/AnimatedCounter'
import { Button } from '../Common/Button'
import { STATS } from '../../constants/data'

const FloatingBadge: React.FC<{
  icon: React.ReactNode
  label: string
  sub?: string
  className?: string
  delay?: number
}> = ({ icon, label, sub, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`absolute glass rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3 z-10 ${className}`}
    style={{ animation: `float ${3 + delay}s ease-in-out infinite` }}
  >
    <div className="w-10 h-10 bg-[#1E3A8A] rounded-xl flex items-center justify-center text-white flex-shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold text-gray-900">{label}</p>
      {sub && <p className="text-[10px] text-gray-500">{sub}</p>}
    </div>
  </motion.div>
)

export const Hero: React.FC = () => {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const statDisplay = [
    { value: 100, suffix: '+', label: 'Hours Training' },
    { value: 5, suffix: '', label: 'Industry Tools' },
    { value: 7, suffix: '+', label: 'Career Roles' },
    { value: 100, suffix: '%', label: 'Job Assistance' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 60% 20%, #DBEAFE 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 85% 75%, #FED7AA 0%, transparent 55%), #FFFFFF',
      }}
      aria-label="Hero section"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="relative z-10 max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse-dot" />
              <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                #1 Cloud Data Analytics Program
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight"
            >
              Master{' '}
              <span className="text-gradient-primary">Cloud Data</span>
              {' '}&{' '}
              <span className="text-gradient-accent">BI Engineering</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-lg text-gray-500 leading-relaxed"
            >
              Join India's most comprehensive training program in Cloud Data Analytics & BI Engineering.
              Land your dream job with{' '}
              <strong className="text-gray-700 font-semibold">100% placement assistance</strong>.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 relative"
            >
              <div className="flex items-center bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden p-1.5">
                <Search className="w-5 h-5 text-gray-400 ml-3 flex-shrink-0" />
                <input
                  type="search"
                  placeholder="Search courses – Power BI, Snowflake, Python..."
                  className="flex-1 px-4 py-2.5 text-sm text-gray-700 bg-transparent outline-none placeholder:text-gray-400"
                  aria-label="Search courses"
                />
                <Button variant="primary" size="sm" className="rounded-xl flex-shrink-0">
                  Search
                </Button>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 flex flex-col sm:flex-row gap-3"
            >
              <Button
                variant="primary"
                size="lg"
                icon={<ChevronRight className="w-5 h-5" />}
                iconPosition="right"
                onClick={() => handleNavClick('#contact')}
                className="btn-glow"
              >
                Start Learning Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<PlayCircle className="w-5 h-5" />}
                onClick={() => handleNavClick('#courses')}
              >
                Explore Courses
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {statDisplay.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.7 }}
                  className="text-center"
                >
                  <p className="text-2xl font-extrabold text-[#1E3A8A]">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md"
            >
              {/* Hero Card */}
              <div className="relative bg-gradient-to-br from-[#1E3A8A] to-[#3B5CC4] rounded-3xl p-8 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">BI Engineering Program</p>
                      <p className="text-blue-200 text-xs">Cloud Data Analytics</p>
                    </div>
                  </div>

                  {/* Progress bars */}
                  {[
                    { label: 'Power BI', pct: 92 },
                    { label: 'Snowflake', pct: 78 },
                    { label: 'Python Analytics', pct: 85 },
                    { label: 'SQL Server', pct: 88 },
                  ].map((item, i) => (
                    <div key={item.label} className="mb-4">
                      <div className="flex justify-between text-xs text-white/80 mb-1.5">
                        <span>{item.label}</span>
                        <span>{item.pct}%</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.pct}%` }}
                          transition={{ duration: 1, delay: 0.8 + i * 0.15, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-white to-blue-200 rounded-full"
                        />
                      </div>
                    </div>
                  ))}

                  <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-lg">500+ Students</p>
                      <p className="text-blue-200 text-xs">Placed Successfully</p>
                    </div>
                    <div className="flex -space-x-2">
                      {['from-blue-400 to-indigo-500', 'from-orange-400 to-rose-500', 'from-emerald-400 to-teal-500'].map((g, i) => (
                        <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br ${g} border-2 border-white`} />
                      ))}
                      <div className="w-8 h-8 rounded-full bg-white/30 border-2 border-white flex items-center justify-center">
                        <span className="text-[9px] text-white font-bold">+97</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <FloatingBadge
                icon={<Trophy className="w-5 h-5" />}
                label="100% Job Assistance"
                sub="Placement Guaranteed"
                className="-top-8 -left-8"
                delay={0.6}
              />
              <FloatingBadge
                icon={<Clock className="w-5 h-5" />}
                label="100+ Hours"
                sub="Live Training"
                className="-bottom-6 -right-6"
                delay={0.8}
              />
              <FloatingBadge
                icon={<Briefcase className="w-5 h-5" />}
                label="7+ Career Roles"
                sub="In Data & BI"
                className="top-1/3 -right-12"
                delay={1.0}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
