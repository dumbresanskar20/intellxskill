import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Calendar, CheckCircle2, Clock, Briefcase, Trophy } from 'lucide-react'
import { AnimatedCounter } from '../Common/AnimatedCounter'
import { Button } from '../Common/Button'

const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/hero/hero-slide-1.png',
    alt: 'Professional instructor teaching cloud data analytics in a modern classroom',
  },
  {
    id: 2,
    image: '/images/hero/hero-slide-2.png',
    alt: 'Students attentively listening to technology lecture in modern lab',
  },
  {
    id: 3,
    image: '/images/hero/hero-slide-3.png',
    alt: 'Students working practically on laptops during data analytics session',
  },
  {
    id: 4,
    image: '/images/hero/hero-slide-4.png',
    alt: 'Instructor guiding students hands-on during practical technology session',
  },
]

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
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const statDisplay = [
    { value: 100, suffix: '+', label: 'Hours Training' },
    { value: 5, suffix: '', label: 'Industry Tools' },
    { value: 7, suffix: '+', label: 'Career Roles' },
    { value: 100, suffix: '%', label: 'Job Assistance' },
  ]

  const highlights = [
    'Online & Classroom Training',
    'Live Practical Sessions',
    'Career-Focused Programs',
  ]

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden pt-24 md:pt-26 pb-4"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 60% 20%, #DBEAFE 0%, transparent 55%), radial-gradient(ellipse 50% 50% at 85% 75%, #FED7AA 0%, transparent 55%), #FFFFFF',
      }}
      aria-label="Hero section"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2 pb-6 lg:pt-4 lg:pb-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="relative z-10 max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-4"
            >
              <span className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse-dot" />
              <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider">
                Practical Learning. Real Skills. Better Career Opportunities.
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight"
            >
              Build{' '}
              <span className="text-gradient-primary">Job-Ready Skills</span>
              {' '}{' '}
              <span className="text-gradient-accent"> with Intellxskill Technologies</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3.5 text-lg text-gray-500 leading-relaxed"
            >
              Master in-demand Data, Cloud, Technology and AI skills through practical sessions, real-world projects and expert guidance.{' '}
              <strong className="text-gray-700 font-semibold">100% placement assistance</strong>.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-4.5 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-sm font-semibold text-gray-700"
            >
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4.5 flex flex-col sm:flex-row gap-3"
            >
              <Button
                variant="primary"
                size="lg"
                icon={<ChevronRight className="w-5 h-5" />}
                iconPosition="right"
                onClick={() => handleNavClick('#courses')}
                className="btn-glow"
              >
                Explore Our Courses
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Calendar className="w-5 h-5" />}
                onClick={() => handleNavClick('#contact')}
              >
                Book Free Counselling
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-full min-w-0"
            >
              {statDisplay.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.7 }}
                  className="text-center min-w-0"
                >
                  <p className="text-2xl font-extrabold text-[#1E3A8A] truncate">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5 truncate">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual Slider */}
          <div className="relative flex items-center justify-center lg:justify-start mt-8 lg:mt-0 max-w-full overflow-hidden lg:overflow-visible min-w-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-full sm:max-w-xl lg:max-w-none lg:w-[115%] lg:-mr-12 xl:-mr-20 min-w-0"
            >
              {/* Soft ambient background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-indigo-300/15 to-orange-300/20 rounded-full blur-3xl -z-10 scale-110" />

              {/* Slider Image Container with Feathered Edge Blending */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[1.15/1] xl:aspect-[1.25/1]">
                <div
                  className="relative w-full h-full"
                  style={{
                    WebkitMaskImage:
                      'radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, rgba(0,0,0,0.85) 52%, rgba(0,0,0,0.2) 75%, transparent 92%), linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)',
                    WebkitMaskComposite: 'source-in',
                    maskImage:
                      'radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, rgba(0,0,0,0.85) 52%, rgba(0,0,0,0.2) 75%, transparent 92%), linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)',
                    maskComposite: 'intersect',
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide}
                      src={HERO_SLIDES[currentSlide].image}
                      alt={HERO_SLIDES[currentSlide].alt}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>
              </div>

              {/* Floating Badges */}
              <FloatingBadge
                icon={<Trophy className="w-5 h-5" />}
                label="100% Job Assistance"
                sub="Placement Guaranteed"
                className="-top-6 -left-4 hidden sm:flex"
                delay={0.6}
              />
              <FloatingBadge
                icon={<Clock className="w-5 h-5" />}
                label="100+ Hours"
                sub="Live Training"
                className="-bottom-4 -right-4 hidden sm:flex"
                delay={0.8}
              />
              <FloatingBadge
                icon={<Briefcase className="w-5 h-5" />}
                label="7+ Career Roles"
                sub="In Data & BI"
                className="top-1/3 -right-6 hidden md:flex"
                delay={1.0}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
