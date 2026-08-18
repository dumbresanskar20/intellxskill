import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id={id}
      ref={ref}
      className={`py-10 md:py-12 min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-x-clip w-full max-w-full min-w-0 ${className}`}
    >
      <motion.div
        className="w-full max-w-full min-w-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </section>
  )
}

interface SectionHeadingProps {
  badge?: string
  title: string
  highlight?: string
  description?: string
  centered?: boolean
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  description,
  centered = true,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const parts = highlight ? title.split(highlight) : [title]

  return (
    <div ref={ref} className={`mb-8 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 bg-blue-50 text-[#1E3A8A] text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-blue-100"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
      >
        {highlight ? (
          <>
            {parts[0]}
            <span className="text-gradient-primary">{highlight}</span>
            {parts[1]}
          </>
        ) : title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

export const ScrollReveal: React.FC<{
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
}> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const initial = {
    up: { opacity: 0, y: 40 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
    none: { opacity: 0 },
  }[direction]

  const animate = {
    up: { opacity: 1, y: 0 },
    left: { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    none: { opacity: 1 },
  }[direction]

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
