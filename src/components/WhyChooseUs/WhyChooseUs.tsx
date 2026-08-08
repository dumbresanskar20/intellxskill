import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionWrapper } from '../Common/SectionWrapper'
import { WHY_CARDS } from '../../constants/data'

// Custom dual-tone brand-aligned SVG icons with interactive transitions
const AffordableIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <line x1="12" y1="1" x2="12" y2="23" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#1E3A8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:scale-110 origin-center" />
    <circle cx="12" cy="12" r="3.5" stroke="#F97316" strokeWidth="1.5" fill="none" className="transition-all duration-500 group-hover:scale-125 group-hover:stroke-orange-400 origin-center" />
  </svg>
)

const IndustryIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect x="3" y="9" width="18" height="11" rx="2" stroke="#1E3A8A" strokeWidth="2" className="transition-transform duration-500 group-hover:-translate-y-0.5" />
    <path d="M9 9V6a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v3" stroke="#1E3A8A" strokeWidth="2" />
    <path d="M12 12v3" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="12" cy="14" r="2" fill="#F97316" className="transition-transform duration-500 group-hover:scale-125 origin-center" />
  </svg>
)

const ProjectsIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="2" y1="8" x2="22" y2="8" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="5" cy="5.5" r="0.75" fill="#3B5CC4" />
    <circle cx="8" cy="5.5" r="0.75" fill="#3B5CC4" />
    <circle cx="11" cy="5.5" r="0.75" fill="#3B5CC4" />
    <path d="M8 11.5l-2.5 2.5 2.5 2.5" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-x-0.5" />
    <path d="M16 11.5l2.5 2.5-2.5 2.5" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5" />
    <path d="M13 11l-2 5" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const InterviewsIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 group-hover:stroke-[#3B5CC4]" />
    <path d="M8 9h8" stroke="#F97316" strokeWidth="2" strokeLinecap="round" className="transition-all duration-300 group-hover:stroke-orange-400" />
    <path d="M8 13h5" stroke="#F97316" strokeWidth="2" strokeLinecap="round" className="transition-all duration-300 group-hover:translate-x-0.5" />
  </svg>
)

const AssessmentsIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 9l2 2 4-4" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:scale-110 origin-[11px_11px]" />
    <line x1="7" y1="14" x2="17" y2="14" stroke="#3B5CC4" strokeWidth="2" strokeLinecap="round" />
    <line x1="7" y1="17" x2="13" y2="17" stroke="#3B5CC4" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const JobAssistanceIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" stroke="#1E3A8A" strokeWidth="2" />
    <path d="M12 2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z" stroke="#1E3A8A" strokeWidth="2" />
    <path d="M12 15v4M9 19h6" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="7.5" r="2" fill="#F97316" className="transition-transform duration-500 group-hover:scale-125 origin-[12px_7.5px]" />
  </svg>
)

const ICONS: Record<string, React.ReactNode> = {
  Affordable: <AffordableIcon />,
  Industry: <IndustryIcon />,
  Projects: <ProjectsIcon />,
  Interviews: <InterviewsIcon />,
  Assessments: <AssessmentsIcon />,
  JobAssistance: <JobAssistanceIcon />,
}

export const WhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <SectionWrapper id="why-choose-us" className="relative overflow-hidden">
      
      {/* Glowing blurred background blobs for premium depth */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-blue-200/10 blur-[100px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-orange-200/10 blur-[120px] pointer-events-none -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Decorative grid patterns */}
      <div className="absolute top-10 left-10 text-gray-200/40 pointer-events-none select-none -z-10 hidden lg:block">
        <svg width="60" height="60" fill="currentColor">
          <pattern id="dot-pattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" />
          </pattern>
          <rect width="60" height="60" fill="url(#dot-pattern)" />
        </svg>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-reveal">
        
        {/* Brand-aligned custom heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Why Choose <span className="text-[#1E3A8A]">Intellx</span><span className="text-[#F97316]">Skill</span>?
          </h2>
        </motion.div>

        {/* 6 Column Horizontal / Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-6 justify-items-center">
          {WHY_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col items-center text-center max-w-[200px]"
            >
              {/* Giant numeric badge in the background */}
              <div className="absolute top-3 text-6xl font-black text-gray-100/40 group-hover:text-blue-50/50 select-none pointer-events-none transition-colors -z-10 font-mono">
                0{i + 1}
              </div>

              {/* Circular Icon Container with modern micro-animations */}
              <div className="relative mb-5 flex items-center justify-center">
                {/* Outer dashed spinning ring */}
                <div className="absolute -inset-2 rounded-full border border-dashed border-[#3B5CC4]/20 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:rotate-[120deg] group-hover:scale-105" />
                
                <div className="relative w-20 h-20 rounded-full bg-blue-50/30 border border-blue-100/50 flex items-center justify-center transition-all duration-300 shadow-[0_4px_12px_rgba(30,58,138,0.02)] group-hover:scale-110 group-hover:bg-white group-hover:shadow-[0_12px_24px_rgba(30,58,138,0.08)] group-hover:border-blue-200">
                  {ICONS[card.icon]}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-extrabold text-gray-900 mb-2 leading-snug group-hover:text-[#1E3A8A] transition-colors mt-2">
                {card.title}
              </h3>

              {/* Subtitle / Description */}
              <p className="text-xs text-gray-500 leading-relaxed max-w-[170px]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-24 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">
            Ready to take the leap? Join thousands of successful data professionals.
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E3A8A] text-white rounded-xl font-semibold hover:bg-[#152B6B] transition-all btn-glow shadow-md"
          >
            Book Your Free Demo Session
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
