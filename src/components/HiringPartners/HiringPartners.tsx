import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HIRING_PARTNERS } from '../../constants/data'

type Partner = (typeof HIRING_PARTNERS)[number]

export const HiringPartners: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  // Split partners into 3 rows for a richer marquee effect
  const thirdLen = Math.ceil(HIRING_PARTNERS.length / 3)
  const row1 = HIRING_PARTNERS.slice(0, thirdLen)
  const row2 = HIRING_PARTNERS.slice(thirdLen, thirdLen * 2)
  const row3 = HIRING_PARTNERS.slice(thirdLen * 2)

  return (
    <section id="hiring-partners" ref={ref} className="py-12 md:py-16 overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-blue-50 text-[#1E3A8A] text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-blue-100"
          >
            Industry Experts & Innovators
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            <span className="text-gradient-primary">Leading Companies</span> Across Industries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            A glimpse into organizations shaping innovation and digital transformation.
          </motion.p>
        </div>

        {/* Marquee rows */}
        <div className="space-y-5">
          <MarqueeRow partners={row1} speed={35} />
          <MarqueeRow partners={row2} speed={28} reverse />
          <MarqueeRow partners={row3} speed={32} />
        </div>
      </motion.div>
    </section>
  )
}

interface MarqueeRowProps {
  partners: Partner[]
  speed?: number
  reverse?: boolean
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ partners, speed = 30, reverse = false }) => {
  // Duplicate the list 4x for seamless looping
  const items = [...partners, ...partners, ...partners, ...partners]

  return (
    <div className="hiring-marquee-track">
      <div
        className={`hiring-marquee-content ${reverse ? 'hiring-marquee-reverse' : ''}`}
        style={{ '--marquee-speed': `${speed}s` } as React.CSSProperties}
      >
        {items.map((partner, i) => (
          <div key={`${partner.name}-${i}`} className="hiring-partner-card">
            <div
              className="hiring-partner-badge"
              style={{ backgroundColor: partner.color }}
            >
              {partner.initials}
            </div>
            <span className="hiring-partner-name">{partner.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
