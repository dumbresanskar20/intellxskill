import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Lightbulb, ClipboardCheck, Briefcase, CheckCircle2 } from 'lucide-react'
import { SectionWrapper, SectionHeading, ScrollReveal } from '../Common/SectionWrapper'
import { ABOUT_TABS } from '../../constants/data'

const TAB_ICONS: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="w-4 h-4" />,
  ClipboardCheck: <ClipboardCheck className="w-4 h-4" />,
  Briefcase: <Briefcase className="w-4 h-4" />,
}

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('approach')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const activeTabData = ABOUT_TABS.find(t => t.id === activeTab)!

  return (
    <SectionWrapper id="about" className="bg-gray-50/50 !py-8 md:!py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mb-4">
          <SectionHeading
            badge="About IntellxSkill"
            title="Designed to Launch Your "
            highlight="Data Career"
            description="We combine industry expertise, real-world projects, and dedicated career support to transform you into a job-ready data professional."
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center" ref={ref}>
          {/* Left - Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: '🎯',
                title: 'Goal-Oriented',
                desc: 'Every module is designed with job-readiness as the primary goal.',
              },
              {
                icon: '🏭',
                title: 'Industry Aligned',
                desc: 'Curriculum crafted with inputs from hiring managers at top MNCs.',
              },
              {
                icon: '🚀',
                title: 'Fast-Track Career',
                desc: 'Go from beginner to job-ready in just 3–4 months.',
              },
              {
                icon: '🤝',
                title: 'Lifetime Support',
                desc: 'Career support that continues well beyond your placement.',
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.08} direction="up">
                <div className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 card-hover h-full">
                  <span className="text-4xl mb-4 block">{card.icon}</span>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right - Interactive Tabs */}
          <div>
            {/* Tab Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex gap-1 bg-gray-100 p-1 rounded-2xl mb-4"
              role="tablist"
              aria-label="About sections"
            >
              {ABOUT_TABS.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`tabpanel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex-1 flex items-center justify-center gap-2.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === tab.id
                    ? 'text-[#1E3A8A]'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="tab-active"
                      className="absolute inset-0 bg-white shadow-md rounded-xl"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {TAB_ICONS[tab.icon]}
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
                  </span>
                </button>
              ))}
            </motion.div>

            {/* Tab Content */}
            <div
              id={`tabpanel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {activeTabData.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {activeTabData.description}
                  </p>
                  <ul className="space-y-2">
                    {activeTabData.points.map((point, i) => (
                      <motion.li
                        key={point}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.35 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700 leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA inside tab */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3"
                  >
                    <div className="h-9 w-9 rounded-xl bg-[#1E3A8A]/10 flex items-center justify-center">
                      {TAB_ICONS[activeTabData.icon]}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Want to know more?</p>
                      <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                        className="text-sm font-semibold text-[#1E3A8A] hover:text-[#F97316] transition-colors"
                      >
                        Talk to an advisor →
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

