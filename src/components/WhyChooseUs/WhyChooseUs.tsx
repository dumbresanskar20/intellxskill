import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  DollarSign,
  Building2,
  FolderOpen,
  MessageSquare,
  ClipboardCheck,
  Trophy,
} from 'lucide-react'
import { SectionWrapper, SectionHeading } from '../Common/SectionWrapper'
import { WHY_CARDS } from '../../constants/data'

const ICONS: Record<string, React.ReactNode> = {
  DollarSign: <DollarSign className="w-6 h-6" />,
  Factory: <Building2 className="w-6 h-6" />,
  FolderGit2: <FolderOpen className="w-6 h-6" />,
  MessagesSquare: <MessageSquare className="w-6 h-6" />,
  ClipboardCheck: <ClipboardCheck className="w-6 h-6" />,
  Trophy: <Trophy className="w-6 h-6" />,
}

export const WhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <SectionWrapper id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why IntellxSkill"
          title="Everything You Need to "
          highlight="Succeed"
          description="We've built our program around the exact needs of employers and the most common hurdles students face. Here's why 500+ students chose us."
        />

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {WHY_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative bg-gradient-to-br ${card.gradient} rounded-2xl p-7 border border-gray-100 hover:border-transparent card-hover hover:shadow-xl overflow-hidden`}
            >
              {/* Decorative shape */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/30 -translate-y-1/2 translate-x-1/2 transition-all duration-300 group-hover:scale-150 group-hover:opacity-50" />

              {/* Icon */}
              <div className={`relative w-13 h-13 w-14 h-14 ${card.iconBg} rounded-2xl flex items-center justify-center mb-5 ${card.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                {ICONS[card.icon]}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#1E3A8A] transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {card.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#1E3A8A] to-[#F97316] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 text-center"
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
