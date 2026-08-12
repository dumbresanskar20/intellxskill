import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Lightbulb, ClipboardCheck, Briefcase, CheckCircle2 } from 'lucide-react'
import { SectionWrapper, SectionHeading, ScrollReveal } from '../Common/SectionWrapper'
import { ABOUT_TABS } from '../../constants/data'
import logo from '../../assets/logo.png'

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
    <SectionWrapper id="about" className="bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About IntellxSkill"
          title="Designed to Launch Your "
          highlight="Data Career"
          description="We combine industry expertise, real-world projects, and dedicated career support to transform you into a job-ready data professional."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start" ref={ref}>
          {/* Left - Info Cards */}
          <div className="space-y-6">
            {/* IntellxSkill Logo */}
            <ScrollReveal direction="up">
              <div className="flex items-center justify-center">
                <img
                  src={logo}
                  alt="IntellxSkill Technologies"
                  className="h-28 w-auto object-contain drop-shadow-md"
                />
              </div>
            </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5">
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
                desc: 'Go from beginner to job-ready in just 3–4 months with intensive training.',
              },
              {
                icon: '🤝',
                title: 'Lifetime Support',
                desc: 'Our commitment doesn\'t end at placement — career support for life.',
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.1} direction="up">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover h-full">
                  <span className="text-3xl mb-3 block">{card.icon}</span>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          </div>

          {/* Right - Interactive Tabs */}
          <div>
            {/* Tab Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex gap-1 bg-gray-100 p-1.5 rounded-2xl mb-6"
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
                  className={`relative flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab.id
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
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {activeTabData.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {activeTabData.description}
                  </p>
                  <ul className="space-y-3">
                    {activeTabData.points.map((point, i) => (
                      <motion.li
                        key={point}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.35 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA inside tab */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3"
                  >
                    <div className="h-10 w-10 rounded-xl bg-[#1E3A8A]/10 flex items-center justify-center">
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
