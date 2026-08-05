import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Clock, BarChart2, ChevronRight, BookOpen } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '../Common/SectionWrapper'
import { COURSES, FILTER_CATEGORIES } from '../../constants/data'
import type { CourseCategory, Course } from '../../types'

// ─── Course Card ────────────────────────────────────────────────────────────

const CourseCard: React.FC<{
  course: Course
  index: number
  inView: boolean
}> = ({ course, index, inView }) => (
  <motion.article
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    layout
    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
  >
    {/* Gradient Banner */}
    <div className={`relative h-44 bg-gradient-to-br ${course.color} p-6 overflow-hidden`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/4" />
      <div className="relative z-10">
        <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full backdrop-blur-sm mb-3">
          {course.category}
        </span>
        <h3 className="text-white text-lg font-extrabold leading-tight">{course.title}</h3>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1">
      {/* Meta row */}
      <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {course.duration}
        </span>
        <span className="flex items-center gap-1">
          <BarChart2 className="w-3.5 h-3.5" />
          {course.level}
        </span>
      </div>

      <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
        {course.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {course.tags.slice(0, 3).map(tag => (
          <span
            key={tag}
            className={`px-2.5 py-1 ${course.bgColor} ${course.textColor} text-xs font-medium rounded-lg`}
          >
            {tag}
          </span>
        ))}
        {course.tags.length > 3 && (
          <span className="px-2.5 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-lg">
            +{course.tags.length - 3}
          </span>
        )}
      </div>

      {/* CTA — navigates to /courses/:slug */}
      <Link
        to={`/courses/${course.slug}`}
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-[#1E3A8A] text-[#1E3A8A] font-semibold text-sm hover:bg-[#1E3A8A] hover:text-white transition-all duration-200 group/btn"
        aria-label={`View full syllabus for ${course.title}`}
      >
        <BookOpen className="w-4 h-4" />
        View Full Syllabus
        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </Link>
    </div>
  </motion.article>
)

// ─── Courses Section ─────────────────────────────────────────────────────────

export const Courses: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CourseCategory>('All')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const filtered =
    activeFilter === 'All'
      ? COURSES
      : COURSES.filter(c => c.category === activeFilter)

  return (
    <SectionWrapper id="courses" className="bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Courses"
          title="Build Skills That "
          highlight="Employers Want"
          description="Five comprehensive courses covering the entire modern data stack. From Excel to cloud data warehousing."
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Filter courses by category">
          {FILTER_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-[#1E3A8A] text-white shadow-md scale-[1.03]'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#1E3A8A] hover:text-[#1E3A8A]'
              }`}
              aria-pressed={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <motion.div
          ref={ref}
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((course, i) => (
              <CourseCard
                key={course.id}
                course={course}
                index={i}
                inView={inView}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
