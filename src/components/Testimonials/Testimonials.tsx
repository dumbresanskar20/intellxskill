import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Star, Quote } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '../Common/SectionWrapper'
import { TESTIMONIALS } from '../../constants/data'

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

export const Testimonials: React.FC = () => {
  return (
    <SectionWrapper id="reviews" className="bg-gradient-to-br from-gray-50 to-blue-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Student Reviews"
          title="Stories of "
          highlight="Real Success"
          description="Don't take our word for it — hear directly from graduates who transformed their careers with IntellxSkill."
        />

        {/* Swiper carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true, dynamicBullets: true }}
            loop
            grabCursor
            className="pb-14"
            aria-label="Student testimonials carousel"
          >
            {TESTIMONIALS.map((testimonial, i) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 card-hover h-full flex flex-col"
                >
                  {/* Quote icon */}
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-5 flex-shrink-0">
                    <Quote className="w-5 h-5 text-[#F97316]" />
                  </div>

                  {/* Rating */}
                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">
                    "{testimonial.review}"
                  </blockquote>

                  {/* Student Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div
                      className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                      aria-hidden="true"
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">
                        {testimonial.role} · {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Aggregate Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 p-8 bg-white rounded-2xl shadow-sm border border-gray-100"
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
            <p className="text-3xl font-extrabold text-gray-900">150+</p>
            <p className="text-sm text-gray-500">Hiring Partners</p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
