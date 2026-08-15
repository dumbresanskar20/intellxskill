import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Clock,
  BarChart2,
  Monitor,
  BookOpen,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Wrench,
  FolderOpen,
  Briefcase,
  Award,
  Star,
  MessageCircle,
  Users,
  Play,
  Zap,
} from 'lucide-react'
import { COURSES } from '../constants/data'
import { MainLayout } from '../layouts/MainLayout'
import type { Course, CourseFAQ, CourseModule } from '../types'

// ─── Scroll Reveal Wrapper ───────────────────────────────────────────────────
const Reveal: React.FC<{
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
  className?: string
}> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const initial =
    direction === 'left'
      ? { opacity: 0, x: -40 }
      : direction === 'right'
      ? { opacity: 0, x: 40 }
      : { opacity: 0, y: 35 }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── FAQ Accordion Item ──────────────────────────────────────────────────────
const FAQItem: React.FC<{ faq: CourseFAQ; index: number }> = ({ faq, index }) => {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border border-gray-100 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 text-[#1E3A8A]"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Module Accordion Item ───────────────────────────────────────────────────
const ModuleItem: React.FC<{ module: CourseModule; index: number }> = ({ module, index }) => {
  const [open, setOpen] = useState(index === 0)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border border-gray-100 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1E3A8A] font-bold text-sm flex items-center justify-center flex-shrink-0">
          {String(index + 1).padStart(2, '0')}
        </div>
        <span className="flex-1 font-semibold text-gray-900 text-sm">{module.title}</span>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-xs text-gray-400 hidden sm:block">{module.lessons.length} lessons</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="text-[#1E3A8A]"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.span>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="border-t border-gray-100 divide-y divide-gray-50">
              {module.lessons.map((lesson, i) => {
                const isSubItem = lesson.trim().startsWith('•') || lesson.startsWith('  ')
                const isSectionHeader = lesson.startsWith('Approach')
                return (
                  <li
                    key={i}
                    className={`flex items-start gap-3 px-6 py-3 ${
                      isSectionHeader
                        ? 'bg-blue-50/80 font-bold text-[#1E3A8A] text-sm'
                        : isSubItem
                        ? 'bg-gray-50/40 pl-11 text-gray-600'
                        : 'bg-gray-50/70 text-gray-800'
                    }`}
                  >
                    {!isSubItem && !isSectionHeader && (
                      <Play className="w-3.5 h-3.5 text-[#F97316] flex-shrink-0 mt-0.5" />
                    )}
                    {isSubItem && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]/60 flex-shrink-0 mt-1.5 ml-1" />
                    )}
                    <span className="text-sm font-medium leading-relaxed">
                      {lesson.replace(/^[\s•]+/, '')}
                    </span>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Section Label ───────────────────────────────────────────────────────────
const SectionLabel: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-2 mb-6">
    <div className="w-8 h-8 bg-[#1E3A8A]/10 rounded-xl flex items-center justify-center text-[#1E3A8A]">
      {icon}
    </div>
    <h2 className="text-xl font-extrabold text-gray-900">{label}</h2>
  </div>
)

// ─── Sticky Enroll Sidebar ───────────────────────────────────────────────────
const EnrollSidebar: React.FC<{ course: Course }> = ({ course }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6 sticky top-24">
    {/* Price placeholder */}
    {/* <div className="flex items-baseline gap-2 mb-1">
      <span className="text-3xl font-extrabold text-gray-900">₹ 999</span>
      <span className="text-gray-400 line-through text-sm">₹ 4,999</span>
      <span className="text-green-600 font-bold text-sm">80% OFF</span>
    </div>
    <p className="text-xs text-gray-400 mb-5">Limited seats available – Offer ends soon</p> */}

    {/* Course quick info */}
    <div className="space-y-3 mb-6 p-4 bg-gray-50 rounded-xl">
      {[
        { icon: <Clock className="w-4 h-4" />, label: 'Duration', val: course.duration },
        { icon: <Monitor className="w-4 h-4" />, label: 'Mode', val: course.mode },
        { icon: <BookOpen className="w-4 h-4" />, label: 'Sessions', val: course.sessions },
        { icon: <BarChart2 className="w-4 h-4" />, label: 'Level', val: course.level },
      ].map(({ icon, label, val }) => (
        <div key={label} className="flex items-center justify-between gap-4 text-sm">
          <span className="flex items-center gap-2 text-gray-500 flex-shrink-0">
            <span className="text-[#1E3A8A]">{icon}</span>
            {label}
          </span>
          <span className="font-semibold text-gray-800 text-right">{val}</span>
        </div>
      ))}
    </div>

    <Link
      to="/#contact"
      className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#1E3A8A] text-white rounded-xl font-bold text-sm hover:bg-[#152B6B] transition-colors shadow-md"
    >
      Enroll Now
      <ChevronRight className="w-4 h-4" />
    </Link>
    {/* <Link
      to="/#contact"
      className="w-full flex items-center justify-center gap-2 py-3.5 border-2 border-[#F97316] text-[#F97316] rounded-xl font-bold text-sm hover:bg-[#F97316] hover:text-white transition-colors"
    >
      Book Free Demo
    </Link> */}

    <p className="text-center text-xs text-gray-400 mt-4">🔒 Secure enrollment. Cancel anytime.</p>
  </div>
)

// ─── Main CourseDetail Page ──────────────────────────────────────────────────
export const CourseDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const course =
    COURSES.find(c => c.slug === slug) ||
    (slug === 'excel-ai' ? COURSES.find(c => c.id === 1) : undefined) ||
    (slug === 'sap-mm' || slug === 'sql-dba' ? COURSES.find(c => c.id === 5) : undefined)

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (!course) {
    return (
      <MainLayout>
        <div className="min-h-screen flex flex-col items-center justify-center py-32 px-4">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-5">
            <BookOpen className="w-8 h-8 text-[#1E3A8A]" />
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Course Not Found</h1>
          <p className="text-gray-500 mb-6">This course doesn't exist yet. Check our available programs.</p>
          <Link
            to="/#courses"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A8A] text-white rounded-xl font-semibold hover:bg-[#152B6B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Browse All Courses
          </Link>
        </div>
      </MainLayout>
    )
  }

  const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0)

  return (
    <MainLayout>
      {/* ── Hero Banner ─────────────────────────────────────────────────── */}
      <section
        className={`relative pt-24 pb-16 overflow-hidden bg-gradient-to-br ${course.bannerGrad}`}
        aria-label={`${course.title} course hero`}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs text-white/70 mb-8"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/#courses" className="hover:text-white transition-colors">Courses</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white font-medium">{course.title}</span>
          </motion.nav>

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Left — Hero content */}
            <div className="lg:col-span-2">
              {/* Category badge */}
              <motion.span
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full mb-5 backdrop-blur-sm"
              >
                {course.category}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5"
              >
                {course.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/85 text-lg leading-relaxed mb-8 max-w-2xl"
              >
                {course.description}
              </motion.p>

              {/* Quick stats row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-5 mb-8"
              >
                {[
                  { icon: <Clock className="w-4 h-4" />, val: course.duration },
                  { icon: <BookOpen className="w-4 h-4" />, val: course.sessions },
                  { icon: <Monitor className="w-4 h-4" />, val: course.mode },
                  { icon: <BarChart2 className="w-4 h-4" />, val: course.level },
                ].map(({ icon, val }) => (
                  <div key={val} className="flex items-center gap-2 text-white/90 text-sm">
                    <span className="text-white/60">{icon}</span>
                    <span>{val}</span>
                  </div>
                ))}
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {course.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-white/15 text-white text-xs font-semibold rounded-lg backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Aggregate trust row */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap items-center gap-6"
              >
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                  ))}
                  <span className="text-white font-bold text-sm ml-1">4.9</span>
                  <span className="text-white/60 text-sm">(200+ reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/80 text-sm">
                  <Users className="w-4 h-4" />
                  <span>500+ enrolled</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/80 text-sm">
                  <Award className="w-4 h-4" />
                  <span>Certificate included</span>
                </div>
              </motion.div>
            </div>

            {/* Right — Sidebar (desktop only) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="hidden lg:block"
            >
              <EnrollSidebar course={course} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Page Body ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content column */}
          <div className="lg:col-span-2 space-y-16">

            {/* ── What You'll Learn (syllabus overview) */}
            <section aria-labelledby="learn-heading">
              <Reveal>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-[#1E3A8A]/10 rounded-xl flex items-center justify-center text-[#1E3A8A]">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h2 id="learn-heading" className="text-xl font-extrabold text-gray-900">What You'll Learn</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {course.syllabus.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.4 }}
                      className="flex items-start gap-3 p-4 bg-blue-50/60 rounded-xl border border-blue-100/60"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#1E3A8A] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* ── Full Curriculum / Module Accordions */}
            <section aria-labelledby="curriculum-heading">
              <Reveal>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#1E3A8A]/10 rounded-xl flex items-center justify-center text-[#1E3A8A]">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <h2 id="curriculum-heading" className="text-xl font-extrabold text-gray-900">Complete Curriculum</h2>
                  </div>
                  <div className="text-xs text-gray-400">
                    {course.modules.length} modules · {totalLessons} lessons
                  </div>
                </div>

                {/* Group modules by concept if concepts exist */}
                {(() => {
                  const hasConcepts = course.modules.some(m => m.concept)
                  if (!hasConcepts) {
                    // Flat list for courses without concepts
                    return (
                      <div className="space-y-3">
                        {course.modules.map((mod, i) => (
                          <ModuleItem key={i} module={mod} index={i} />
                        ))}
                      </div>
                    )
                  }

                  // Group modules by concept, preserving order
                  const conceptGroups: { concept: string; modules: { mod: CourseModule; globalIdx: number }[] }[] = []
                  let globalIdx = 0
                  course.modules.forEach(mod => {
                    const conceptName = mod.concept || 'General'
                    const lastGroup = conceptGroups[conceptGroups.length - 1]
                    if (lastGroup && lastGroup.concept === conceptName) {
                      lastGroup.modules.push({ mod, globalIdx })
                    } else {
                      conceptGroups.push({ concept: conceptName, modules: [{ mod, globalIdx }] })
                    }
                    globalIdx++
                  })

                  return (
                    <div className="space-y-8">
                      {conceptGroups.map((group, gIdx) => (
                        <Reveal key={group.concept} delay={gIdx * 0.08}>
                          {/* Concept Header */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-9 h-9 bg-gradient-to-br from-[#1E3A8A] to-[#3B5CC4] rounded-xl flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0">
                              {gIdx + 1}
                            </div>
                            <div>
                              <h3 className="text-lg font-extrabold text-gray-900">{group.concept}</h3>
                              <p className="text-xs text-gray-400">{group.modules.length} modules · {group.modules.reduce((acc, m) => acc + m.mod.lessons.length, 0)} lessons</p>
                            </div>
                          </div>
                          {/* Modules under this concept */}
                          <div className="space-y-3 pl-3 border-l-2 border-[#1E3A8A]/10">
                            {group.modules.map(({ mod, globalIdx: gi }) => (
                              <ModuleItem key={gi} module={mod} index={gi} />
                            ))}
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  )
                })()}

              </Reveal>
            </section>

            {/* ── Skills Covered */}
            <section aria-labelledby="skills-heading">
              <Reveal>
                <SectionLabel icon={<Zap className="w-4 h-4" />} label="Skills You'll Master" />
                <div className="flex flex-wrap gap-3">
                  {course.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-xl shadow-sm hover:border-[#1E3A8A] hover:text-[#1E3A8A] transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* ── Tools Covered */}
            <section aria-labelledby="tools-heading">
              <Reveal>
                <SectionLabel icon={<Wrench className="w-4 h-4" />} label="Tools You'll Work With" />
                <div className="grid sm:grid-cols-2 gap-4">
                  {course.tools.map((tool, i) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm"
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-[#1E3A8A] to-[#3B5CC4] rounded-xl flex items-center justify-center text-white font-extrabold text-xs flex-shrink-0">
                        {tool.charAt(0)}
                      </div>
                      <span className="text-sm font-semibold text-gray-800">{tool}</span>
                    </motion.div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* ── Projects Included */}
            <section aria-labelledby="projects-heading">
              <Reveal>
                <SectionLabel icon={<FolderOpen className="w-4 h-4" />} label="Real-World Projects" />
                <div className="space-y-4">
                  {course.projects.map((project, i) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#F97316]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <FolderOpen className="w-5 h-5 text-[#F97316]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm mb-1.5">{project.title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{project.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* ── Career Opportunities */}
            <section aria-labelledby="careers-heading">
              <Reveal>
                <SectionLabel icon={<Briefcase className="w-4 h-4" />} label="Career Opportunities" />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {course.careers.map((role, i) => (
                    <motion.div
                      key={role}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl text-center"
                    >
                      <Briefcase className="w-5 h-5 text-[#1E3A8A] mx-auto mb-2" />
                      <span className="text-sm font-semibold text-gray-800">{role}</span>
                    </motion.div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* ── Certification Section */}
            <section aria-labelledby="cert-heading">
              <Reveal>
                <div className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] to-[#2D4F9E] rounded-3xl p-8 text-white">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
                  <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 id="cert-heading" className="text-xl font-extrabold mb-2">IntellxSkill Certificate of Completion</h2>
                      <p className="text-blue-200 text-sm leading-relaxed">
                        Earn an industry-recognized certificate upon completing <strong className="text-white">{course.title}</strong>.
                        Verified, shareable on LinkedIn, and lifetime valid.
                      </p>
                    </div>
                    <Link
                      to="/#certificate"
                      className="flex-shrink-0 px-5 py-2.5 bg-[#F97316] hover:bg-[#EA6B0A] text-white rounded-xl font-semibold text-sm transition-colors whitespace-nowrap"
                    >
                      Learn More
                    </Link>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/15 grid grid-cols-3 gap-4">
                    {[
                      { val: 'Lifetime', label: 'Validity' },
                      { val: 'Blockchain', label: 'Verified' },
                      { val: 'LinkedIn', label: 'Ready' },
                    ].map(({ val, label }) => (
                      <div key={label} className="text-center">
                        <p className="text-white font-extrabold text-lg">{val}</p>
                        <p className="text-blue-300 text-xs">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            {/* ── FAQ Section */}
            <section aria-labelledby="faq-heading">
              <Reveal>
                <SectionLabel icon={<MessageCircle className="w-4 h-4" />} label="Frequently Asked Questions" />
                <div className="space-y-3">
                  {course.faqs.map((faq, i) => (
                    <FAQItem key={i} faq={faq} index={i} />
                  ))}
                </div>
              </Reveal>
            </section>

            {/* ── Bottom CTA */}
            <Reveal>
              <div className="flex flex-col sm:flex-row gap-4 py-6 border-t border-gray-100">
                <Link
                  to="/#contact"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-[#1E3A8A] text-white rounded-xl font-bold hover:bg-[#152B6B] transition-colors shadow-md"
                >
                  Enroll Now {/* — ₹999 */}
                  <ChevronRight className="w-4 h-4" />
                </Link>
                {/* <Link
                  to="/#contact"
                  className="flex-1 flex items-center justify-center gap-2 py-4 border-2 border-[#F97316] text-[#F97316] rounded-xl font-bold hover:bg-[#F97316] hover:text-white transition-all"
                >
                  Book a Free Demo
                </Link> */}
              </div>
            </Reveal>
          </div>

          {/* ── Sticky Sidebar (desktop) */}
          <div className="hidden lg:block">
            <Reveal direction="right">
              <EnrollSidebar course={course} />
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-2xl px-4 py-3 flex gap-3">
        <Link
          to="/#contact"
          className="w-full flex items-center justify-center gap-1.5 py-3 bg-[#1E3A8A] text-white rounded-xl font-bold text-sm"
        >
          Enroll Now
        </Link>
        {/* <Link
          to="/#contact"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 border-2 border-[#F97316] text-[#F97316] rounded-xl font-bold text-sm"
        >
          Free Demo
        </Link> */}
      </div>
    </MainLayout>
  )
}
