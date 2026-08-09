import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const TECHNOLOGIES = [
  { name: 'Power BI', color: '#F2C811', bg: '#FFF8E1', icon: '📊' },
  { name: 'Azure', color: '#0078D4', bg: '#E3F2FD', icon: '☁️' },
  { name: 'SQL Server', color: '#CC2927', bg: '#FFEBEE', icon: '🗄️' },
  { name: 'Python', color: '#3776AB', bg: '#E8F5E9', icon: '🐍' },
  { name: 'Snowflake', color: '#29B5E8', bg: '#E0F7FA', icon: '❄️' },
  { name: 'Databricks', color: '#FF3621', bg: '#FBE9E7', icon: '🔥' },
  { name: 'SSIS', color: '#0078D4', bg: '#E3F2FD', icon: '⚙️' },
  { name: 'Excel', color: '#217346', bg: '#E8F5E9', icon: '📗' },
  { name: 'Git', color: '#F05032', bg: '#FBE9E7', icon: '🔀' },
  { name: 'AI / Gen AI', color: '#7C3AED', bg: '#F3E8FF', icon: '🤖' },
]

/* ── SVG icons for each technology ── */
const TechSVG: Record<string, React.ReactNode> = {
  'Power BI': (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <rect x="8" y="18" width="6" height="16" rx="1.5" fill="#F2C811" />
      <rect x="17" y="12" width="6" height="22" rx="1.5" fill="#E8A800" />
      <rect x="26" y="6" width="6" height="28" rx="1.5" fill="#D69700" />
    </svg>
  ),
  'Azure': (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <path d="M12 30L20 8h4L16 22h10l-2 8H12z" fill="#0078D4" />
      <path d="M22 14l6-4 2 2-4 10h-6l2-8z" fill="#50A0E6" opacity="0.7" />
    </svg>
  ),
  'SQL Server': (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <ellipse cx="20" cy="12" rx="11" ry="5" fill="#CC2927" />
      <path d="M9 12v16c0 2.76 4.93 5 11 5s11-2.24 11-5V12" stroke="#CC2927" strokeWidth="2" fill="none" />
      <ellipse cx="20" cy="20" rx="11" ry="5" fill="none" stroke="#CC2927" strokeWidth="1.5" opacity="0.5" />
      <ellipse cx="20" cy="28" rx="11" ry="5" fill="none" stroke="#CC2927" strokeWidth="1.5" opacity="0.3" />
    </svg>
  ),
  'Python': (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <path d="M20 6c-5 0-7 2.5-7 5v3h7v1H11c-3 0-5 2.5-5 6s2 6 5 6h3v-3c0-3 2-5 5-5h7c2.5 0 4-2 4-4v-5c0-2.5-2-4-5-4h-5z" fill="#3776AB" />
      <path d="M20 34c5 0 7-2.5 7-5v-3h-7v-1h9c3 0 5-2.5 5-6s-2-6-5-6h-3v3c0 3-2 5-5 5h-7c-2.5 0-4 2-4 4v5c0 2.5 2 4 5 4h5z" fill="#FFD43B" />
      <circle cx="15" cy="12" r="1.5" fill="#ffffff" />
      <circle cx="25" cy="28" r="1.5" fill="#ffffff" />
    </svg>
  ),
  'Snowflake': (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <line x1="20" y1="6" x2="20" y2="34" stroke="#29B5E8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="8" y1="13" x2="32" y2="27" stroke="#29B5E8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="8" y1="27" x2="32" y2="13" stroke="#29B5E8" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="20" cy="6" r="2" fill="#29B5E8" />
      <circle cx="20" cy="34" r="2" fill="#29B5E8" />
      <circle cx="8" cy="13" r="2" fill="#29B5E8" />
      <circle cx="32" cy="27" r="2" fill="#29B5E8" />
      <circle cx="8" cy="27" r="2" fill="#29B5E8" />
      <circle cx="32" cy="13" r="2" fill="#29B5E8" />
    </svg>
  ),
  'Databricks': (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <path d="M20 6L6 14l14 8 14-8L20 6z" fill="#FF3621" />
      <path d="M6 20l14 8 14-8" stroke="#FF3621" strokeWidth="2" fill="none" opacity="0.7" />
      <path d="M6 26l14 8 14-8" stroke="#FF3621" strokeWidth="2" fill="none" opacity="0.4" />
    </svg>
  ),
  'SSIS': (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <circle cx="20" cy="20" r="12" stroke="#0078D4" strokeWidth="2.5" fill="none" />
      <path d="M14 20h12M20 14v12" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" />
      <circle cx="14" cy="20" r="2.5" fill="#0078D4" />
      <circle cx="26" cy="20" r="2.5" fill="#0078D4" />
      <circle cx="20" cy="14" r="2.5" fill="#50A0E6" />
      <circle cx="20" cy="26" r="2.5" fill="#50A0E6" />
    </svg>
  ),
  'Excel': (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <rect x="6" y="8" width="28" height="24" rx="3" fill="#217346" />
      <text x="20" y="25" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial">X</text>
    </svg>
  ),
  'Git': (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <path d="M36.2 18.6L21.4 3.8c-.8-.8-2-.8-2.8 0l-3 3 3.6 3.6c.8-.3 1.8-.1 2.4.5.7.7.8 1.7.5 2.5l3.4 3.4c.8-.3 1.8-.1 2.5.5.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.7-.7-.9-1.8-.5-2.6l-3.2-3.2v8.4c.2.1.4.3.6.5.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.9-.9-.9-2.4 0-3.3.3-.3.5-.4.8-.5V15c-.3-.1-.6-.3-.8-.5-.7-.7-.9-1.8-.5-2.6l-3.5-3.5L3.8 18.6c-.8.8-.8 2 0 2.8l14.8 14.8c.8.8 2 .8 2.8 0l14.8-14.8c.8-.8.8-2 0-2.8z" fill="#F05032" />
    </svg>
  ),
  'AI / Gen AI': (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
      <rect x="10" y="10" width="20" height="16" rx="3" stroke="#7C3AED" strokeWidth="2" fill="none" />
      <circle cx="16" cy="18" r="2" fill="#7C3AED" />
      <circle cx="24" cy="18" r="2" fill="#7C3AED" />
      <path d="M16 22c0 2 1.8 3 4 3s4-1 4-3" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <line x1="14" y1="10" x2="14" y2="6" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="10" x2="20" y2="6" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <line x1="26" y1="10" x2="26" y2="6" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="26" x2="14" y2="34" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <line x1="26" y1="26" x2="26" y2="34" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
}

export const TechStack: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section ref={ref} className="py-10 md:py-14 bg-gradient-to-b from-gray-50/80 to-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xl md:text-2xl font-bold text-gray-900 mb-8"
        >
          Technologies You'll Master
        </motion.h3>

        <div className="tech-stack-grid">
          {TECHNOLOGIES.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="tech-stack-item"
            >
              <div className="tech-stack-icon" style={{ backgroundColor: tech.bg }}>
                {TechSVG[tech.name]}
              </div>
              <span className="tech-stack-label">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
