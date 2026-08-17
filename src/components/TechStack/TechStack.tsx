import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import excelLogo from '../../assets/excel-logo.png'

const TECHNOLOGIES = [
  { name: 'Power BI', color: '#F2C811', bg: '#FFF8E1', icon: '📊' },
  { name: 'Azure', color: '#0078D4', bg: '#E3F2FD', icon: '☁️' },
  { name: 'SQL Server', color: '#CC2927', bg: '#FFEBEE', icon: '🗄️' },
  { name: 'Python', color: '#3776AB', bg: '#E8F5E9', icon: '🐍' },
  { name: 'Snowflake', color: '#29B5E8', bg: '#E0F7FA', icon: '❄️' },
  { name: 'Databricks', color: '#FF3621', bg: '#FBE9E7', icon: '🔥' },

  { name: 'Excel', color: '#217346', bg: '#E8F5E9', icon: '📗' },
  { name: 'Git', color: '#F05032', bg: '#FBE9E7', icon: '🔀' },
  { name: 'AI / Gen AI', color: '#7C3AED', bg: '#F3E8FF', icon: '🤖' },
]

/* ── Original logos for each technology ── */
const TechSVG: Record<string, React.ReactNode> = {
  'Power BI':    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"                                          alt="Power BI"    className="w-12 h-12 object-contain" />,
  'Azure':       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"                                  alt="Azure"       className="w-12 h-12 object-contain" />,
  'SQL Server':  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"         alt="SQL Server"  className="w-12 h-12 object-contain" />,
  'Python':      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"                                 alt="Python"      className="w-12 h-12 object-contain" />,
  'Snowflake':   <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/snowflake.svg"                                                    alt="Snowflake"   className="w-12 h-12 object-contain" style={{ filter: 'invert(55%) sepia(98%) saturate(500%) hue-rotate(170deg)' }} />,
  'Databricks':  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/databricks.svg"                                                   alt="Databricks"  className="w-12 h-12 object-contain" style={{ filter: 'invert(27%) sepia(97%) saturate(5000%) hue-rotate(5deg) brightness(95%)' }} />,

  'Excel':       <img src={excelLogo}                                                                                                              alt="Excel"       className="w-12 h-12 object-contain" />,
  'Git':         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"                                       alt="Git"         className="w-12 h-12 object-contain" />,
  'AI / Gen AI': <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"                                                 alt="AI / Gen AI" className="w-12 h-12 object-contain" />,
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

        <div className="tech-stack-track">
          <div className="tech-stack-scroll">
            {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="tech-stack-item"
              >
                <div className="tech-stack-icon" style={{ backgroundColor: tech.bg }}>
                  {TechSVG[tech.name]}
                </div>
                <span className="tech-stack-label">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
