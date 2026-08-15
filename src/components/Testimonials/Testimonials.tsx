import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, X } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '../Common/SectionWrapper'
import { TESTIMONIALS } from '../../constants/data'

// ─── Types ────────────────────────────────────────────────────────────────────
interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  review: string
  rating: number
  avatar: string
  avatarColor: string
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const CHAR_LIMIT = 110

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-[#F97316] fill-[#F97316]' : 'text-gray-200 fill-gray-200'}`}
      />
    ))}
  </div>
)

// ─── Full-review Modal ────────────────────────────────────────────────────────
const ReviewModal: React.FC<{
  testimonial: Testimonial | null
  onClose: () => void
}> = ({ testimonial, onClose }) => (
  <AnimatePresence>
    {testimonial && (
      <>
        {/* Backdrop */}
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[2000] bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal */}
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 40 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[2001] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Full review by ${testimonial.name}`}
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 relative">
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Close review"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            {/* Quote icon */}
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-5">
              <Quote className="w-6 h-6 text-[#F97316]" />
            </div>

            {/* Stars */}
            <div className="mb-4">
              <StarRating rating={testimonial.rating} />
            </div>

            {/* Full review */}
            <blockquote className="text-base text-gray-700 leading-relaxed mb-6">
              "{testimonial.review}"
            </blockquote>

            {/* Divider */}
            <div className="border-t border-gray-100 pt-5 flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-base flex-shrink-0`}
                aria-hidden="true"
              >
                {testimonial.avatar}
              </div>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
)

// ─── Testimonial Card ─────────────────────────────────────────────────────────
const TestimonialCard: React.FC<{
  testimonial: Testimonial
  onReadMore: (t: Testimonial) => void
}> = ({ testimonial, onReadMore }) => {
  const isLong = testimonial.review.length > CHAR_LIMIT
  const preview = isLong
    ? testimonial.review.slice(0, CHAR_LIMIT).trimEnd() + '…'
    : testimonial.review

  return (
    <div
      className={`flex-shrink-0 w-[320px] md:w-[360px] bg-white rounded-2xl p-7 shadow-md border border-gray-100 flex flex-col mx-3 select-none ${isLong ? 'cursor-pointer hover:shadow-lg hover:border-blue-200 transition-all duration-200' : ''}`}
      style={{ height: '270px' }}
      onClick={isLong ? () => onReadMore(testimonial) : undefined}
      role={isLong ? 'button' : undefined}
      tabIndex={isLong ? 0 : undefined}
      onKeyDown={isLong ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onReadMore(testimonial) } } : undefined}
      aria-label={isLong ? `Read full review by ${testimonial.name}` : undefined}
    >
      {/* Top row */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
          <Quote className="w-4 h-4 text-[#F97316]" />
        </div>
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Review preview */}
      <div className="flex-1 mb-4">
        <blockquote className="text-sm text-gray-600 leading-relaxed">
          "{preview}"
        </blockquote>
        {isLong && (
          <button
            type="button"
            onClick={() => onReadMore(testimonial)}
            className="mt-1.5 text-xs font-semibold text-[#1E3A8A] hover:text-[#3B5CC4] transition-colors underline-offset-2 hover:underline"
          >
            Read more
          </button>
        )}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
          aria-hidden="true"
        >
          {testimonial.avatar}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-gray-900 truncate">{testimonial.name}</p>
          <p className="text-xs text-gray-500 truncate">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export const Testimonials: React.FC = () => {
  const [activeReview, setActiveReview] = useState<Testimonial | null>(null)

  // Duplicate for seamless loop
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <SectionWrapper id="reviews" className="bg-gradient-to-br from-gray-50 to-blue-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Student Reviews"
          title="Stories of "
          highlight="Real Success"
          description="Don't take our word for it — hear directly from graduates who transformed their careers with IntellxSkill."
        />
      </div>

      {/* ── Infinite auto-slider (right → left) ── */}
      <div className="relative w-full overflow-hidden mt-4 mb-12">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgb(248 250 252), transparent)' }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, rgb(248 250 252), transparent)' }}
        />

        {/* Scrolling track */}
        <div
          className="flex"
          style={{
            animation: 'marquee-rtl 30s linear infinite',
            width: 'max-content',
          }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard
              key={`${t.id}-${i}`}
              testimonial={t}
              onReadMore={setActiveReview}
            />
          ))}
        </div>
      </div>

      {/* ── Aggregate stats ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 p-8 bg-white rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="text-center">
            <p className="text-5xl font-extrabold text-[#1E3A8A]">4.9</p>
            <StarRating rating={5} />
            <p className="text-xs text-gray-500 mt-1">Average Rating</p>
          </div>
          <div className="h-px w-24 sm:h-16 sm:w-px bg-gray-200" />
          <div className="text-center">
            <p className="text-3xl font-extrabold text-gray-900">500+</p>
            <p className="text-sm text-gray-500">Happy Students</p>
          </div>
          <div className="h-px w-24 sm:h-16 sm:w-px bg-gray-200" />
          <div className="text-center">
            <p className="text-3xl font-extrabold text-gray-900">98%</p>
            <p className="text-sm text-gray-500">Placement Rate</p>
          </div>
          <div className="h-px w-24 sm:h-16 sm:w-px bg-gray-200" />
          <div className="text-center">
            <p className="text-3xl font-extrabold text-gray-900">1500+</p>
            <p className="text-sm text-gray-500">Hiring Partners</p>
          </div>
        </motion.div>
      </div>

      {/* ── Full-review modal ── */}
      <ReviewModal testimonial={activeReview} onClose={() => setActiveReview(null)} />

      {/* Marquee keyframe */}
      <style>{`
        @keyframes marquee-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </SectionWrapper>
  )
}
