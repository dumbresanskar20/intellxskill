import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ChevronDown,
  HelpCircle,
  Users,
  Code,
  Video,
  Wrench,
  FolderGit2,
  ClipboardCheck,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Award,
  Monitor,
  RefreshCcw,
  Compass,
  Rocket,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { MainLayout } from '../layouts/MainLayout'

interface FAQItem {
  id: number
  question: string
  answer: string
  icon: React.ReactNode
  category: string
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: 'Who is this program suitable for?',
    answer:
      'This program is designed for freshers, working professionals, non-IT graduates, MIS professionals, and anyone looking to build a career in Data Analytics, BI, or related technology roles.',
    icon: <Users className="w-5 h-5" />,
    category: 'General',
  },
  {
    id: 2,
    question: 'Do I need prior coding experience?',
    answer:
      'No. The program starts with fundamentals and gradually takes you to advanced, practical concepts. Basic computer knowledge and a willingness to learn are sufficient.',
    icon: <Code className="w-5 h-5" />,
    category: 'Prerequisites',
  },
  {
    id: 3,
    question: 'Is the training live or recorded?',
    answer:
      'The program includes live instructor-led sessions with practical demonstrations, hands-on exercises, doubt-solving, and project work.',
    icon: <Video className="w-5 h-5" />,
    category: 'Training',
  },
  {
    id: 4,
    question: 'What technologies will I learn?',
    answer:
      'Depending on the selected program, you may work with technologies such as Excel with AI, SQL Server, Power BI, Python, Snowflake, Databricks, and Azure.',
    icon: <Wrench className="w-5 h-5" />,
    category: 'Curriculum',
  },
  {
    id: 5,
    question: 'Will I work on real-world projects?',
    answer:
      'Yes. The learning is project-oriented, with practical datasets and business scenarios designed to help you build a strong portfolio.',
    icon: <FolderGit2 className="w-5 h-5" />,
    category: 'Training',
  },
  {
    id: 6,
    question: 'Will you provide datasets and assignments?',
    answer:
      'Yes. Practical assignments, datasets, exercises, and project work are provided as part of the learning journey.',
    icon: <ClipboardCheck className="w-5 h-5" />,
    category: 'Training',
  },
  {
    id: 7,
    question: 'What kind of career opportunities can I explore after completing the program?',
    answer:
      'Depending on your skills and experience, you can explore roles such as Data Analyst, BI Analyst, Power BI Developer, MIS Analyst, Reporting Analyst, or Data-related roles.',
    icon: <Briefcase className="w-5 h-5" />,
    category: 'Career',
  },
  {
    id: 8,
    question: 'Do you provide interview preparation?',
    answer:
      'Yes. The program includes interview-oriented preparation such as technical questions, project discussions, resume guidance, and mock interview practice.',
    icon: <GraduationCap className="w-5 h-5" />,
    category: 'Career',
  },
  {
    id: 9,
    question: 'Do you provide job placement?',
    answer:
      'We provide career and job assistance, including interview preparation, resume guidance, job-search support, and relevant career guidance. Employment depends on the candidate\'s skills, performance, and selection process.',
    icon: <ShieldCheck className="w-5 h-5" />,
    category: 'Career',
  },
  {
    id: 10,
    question: 'Will I receive a certificate?',
    answer:
      'Yes. Participants who successfully complete the required training, assignments, projects, and assessments receive an IntellxSkill Technologies Certificate of Completion.',
    icon: <Award className="w-5 h-5" />,
    category: 'Certification',
  },
  {
    id: 11,
    question: 'What software or laptop configuration do I need?',
    answer:
      'A Windows laptop/desktop with a stable internet connection is recommended. Specific software requirements may vary depending on the program.',
    icon: <Monitor className="w-5 h-5" />,
    category: 'Prerequisites',
  },
  {
    id: 12,
    question: 'Can working professionals attend the program?',
    answer:
      'Yes. Batch timings are planned to accommodate both students and working professionals.',
    icon: <RefreshCcw className="w-5 h-5" />,
    category: 'General',
  },
  {
    id: 13,
    question: 'Is this program suitable for career switchers?',
    answer:
      'Yes. If you are planning to move into Data Analytics, BI, or related technology roles, the program provides a structured path from fundamentals to practical projects.',
    icon: <Compass className="w-5 h-5" />,
    category: 'General',
  },
  {
    id: 14,
    question: 'How can I choose the right program for my career?',
    answer:
      'You can speak with our career team to understand which program best matches your current skills, experience, and career goals.',
    icon: <MessageCircle className="w-5 h-5" />,
    category: 'General',
  },
  {
    id: 15,
    question: 'How do I get started?',
    answer:
      'Click "Talk to a Career Expert" or "Book a Free Consultation" and our team will help you understand the program and next steps.',
    icon: <Rocket className="w-5 h-5" />,
    category: 'General',
  },
]

const CATEGORIES = ['All', 'General', 'Prerequisites', 'Training', 'Curriculum', 'Career', 'Certification']

const categoryColors: Record<string, string> = {
  All: 'from-[#1E3A8A] to-[#3B5CC4]',
  General: 'from-blue-500 to-indigo-600',
  Prerequisites: 'from-purple-500 to-violet-600',
  Training: 'from-emerald-500 to-teal-600',
  Curriculum: 'from-orange-500 to-amber-600',
  Career: 'from-rose-500 to-pink-600',
  Certification: 'from-sky-500 to-cyan-600',
}

const AccordionItem: React.FC<{
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
  index: number
}> = ({ item, isOpen, onToggle, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.4, delay: index * 0.04 }}
    className="group"
  >
    <div
      className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
          ? 'border-[#1E3A8A]/20 shadow-[0_8px_30px_rgba(30,58,138,0.12)]'
          : 'border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200'
        }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-6 py-5 text-left transition-colors"
        aria-expanded={isOpen}
        id={`faq-btn-${item.id}`}
        aria-controls={`faq-panel-${item.id}`}
      >
        {/* Icon */}
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen
              ? 'bg-gradient-to-br from-[#1E3A8A] to-[#3B5CC4] text-white shadow-md'
              : 'bg-blue-50 text-[#1E3A8A] group-hover:bg-blue-100'
            }`}
        >
          {item.icon}
        </div>

        {/* Question text */}
        <span
          className={`flex-1 text-[15px] font-semibold leading-snug transition-colors duration-200 ${isOpen ? 'text-[#1E3A8A]' : 'text-gray-800 group-hover:text-[#1E3A8A]'
            }`}
        >
          {item.question}
        </span>

        {/* Category badge */}
        <span className="hidden sm:inline-flex text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 flex-shrink-0">
          {item.category}
        </span>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${isOpen ? 'bg-[#1E3A8A] text-white' : 'bg-gray-100 text-gray-400'
            }`}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${item.id}`}
            role="region"
            aria-labelledby={`faq-btn-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pl-20">
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#1E3A8A] to-[#F97316] rounded-full mb-3" />
              <p className="text-gray-600 text-[15px] leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
)

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1)
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredFAQs =
    activeCategory === 'All'
      ? FAQ_DATA
      : FAQ_DATA.filter((faq) => faq.category === activeCategory)

  return (
    <MainLayout>
      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 shadow-sm mb-6">
              <HelpCircle className="w-4 h-4 text-[#1E3A8A]" />
              <span className="text-sm font-semibold text-[#1E3A8A]">Support Center</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-5 leading-tight">
              Common{' '}
              <span className="text-gradient-primary">Questions</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-600 font-bold">
                — FAQ
              </span>
            </h1>

            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
              Everything you need to know about our programs, training methodology, career support,
              and certification — all in one place.
            </p>


          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 sm:py-16 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat)
                  setOpenId(null)
                }}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                    ? 'bg-gradient-to-r text-white shadow-md ' +
                    (categoryColors[cat] || categoryColors['All'])
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#1E3A8A]/30 hover:text-[#1E3A8A] hover:shadow-sm'
                  }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.span
                    layoutId="faq-active-cat"
                    className="absolute inset-0 rounded-full bg-gradient-to-r -z-10 opacity-0"
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Results count */}
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-gray-400 text-center mb-6"
          >
            Showing{' '}
            <span className="font-semibold text-gray-600">{filteredFAQs.length}</span>{' '}
            {filteredFAQs.length === 1 ? 'question' : 'questions'}
            {activeCategory !== 'All' && (
              <>
                {' '}
                in <span className="font-semibold text-[#1E3A8A]">{activeCategory}</span>
              </>
            )}
          </motion.p>

          {/* FAQ Accordion List */}
          <div className="space-y-3">
            <AnimatePresence mode="wait">
              {filteredFAQs.map((item, i) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  index={i}
                  isOpen={openId === item.id}
                  onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Empty state */}
          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No questions found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#1E3A8A] via-[#2548A0] to-[#3B5CC4] rounded-3xl p-8 sm:p-12 text-center overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-white/5 to-transparent rounded-full" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <MessageCircle className="w-4 h-4 text-white/80" />
                <span className="text-sm font-medium text-white/80">Still have questions?</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Can't find what you're looking for?
              </h2>
              <p className="text-blue-100 text-base sm:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
                Our career experts are here to help you make the right choice. Get personalized
                guidance, program recommendations, and all your questions answered.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F97316] hover:bg-[#EA6B0A] text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  Talk to a Career Expert
                </Link>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  )
}
