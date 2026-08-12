import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { MapPin, Phone, Mail, Globe, Clock, ChevronRight, Send } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '../Common/SectionWrapper'
import { CONTACT_INFO, COURSE_OPTIONS } from '../../constants/data'
import type { ContactFormData } from '../../types'
import { Button } from '../Common/Button'

interface ContactProps {
  onSubmitSuccess: () => void
}

export const Contact: React.FC<ContactProps> = ({ onSubmitSuccess }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1200))
    console.log('Form data:', data)
    reset()
    onSubmitSuccess()
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3.5 rounded-xl border text-sm text-gray-900 placeholder:text-gray-400 bg-white transition-all duration-200 outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 ${
      hasError
        ? 'border-red-300 focus:border-red-400'
        : 'border-gray-200 focus:border-[#1E3A8A]'
    }`

  const infoItems = [
    { icon: <MapPin className="w-5 h-5" />, label: 'Address', value: CONTACT_INFO.address },
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: CONTACT_INFO.phone },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: CONTACT_INFO.email },
    { icon: <Globe className="w-5 h-5" />, label: 'Website', value: CONTACT_INFO.website },
    { icon: <Clock className="w-5 h-5" />, label: 'Office Hours', value: CONTACT_INFO.hours },
  ]

  return (
    <SectionWrapper id="contact" className="bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact Us"
          title="Ready to Start Your "
          highlight="Data Journey?"
          description="Reach out to us for a free demo session, course details, or any other queries. We're here to help."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left – Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2D4F9E] rounded-3xl p-8 sm:p-10 text-white h-full relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/4 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/4 -translate-x-1/4" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                <p className="text-blue-200 text-sm leading-relaxed mb-8">
                  Our team of advisors is ready to help you choose the right course and answer all your questions.
                </p>

                <div className="space-y-5">
                  {infoItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-blue-200 text-xs font-medium uppercase tracking-wide mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-white text-sm font-medium">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-6 border-t border-white/15">
                  <p className="text-blue-200 text-xs font-medium uppercase tracking-widest mb-4">
                    Follow Us
                  </p>
                  <div className="flex gap-3">
                    {[
                      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/intellxskilltechnologies-undefined-402892414/' },
                      { name: 'YouTube', href: 'https://www.youtube.com/@IntellxskillTechnologies' },
                      { name: 'Instagram', href: 'https://www.instagram.com/intellxskill_technologies/' },
                      { name: 'Facebook', href: 'https://www.facebook.com/?checkpoint_src=any' },
                    ].map(s => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow us on ${s.name}`}
                        className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center hover:bg-[#F97316] transition-colors text-xs font-bold"
                      >
                        {s.name[0]}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right – Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Book a Free Demo Session</h3>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-label="Contact and enrollment form"
              >
                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className={inputClass(!!errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      {...register('name', {
                        required: 'Please enter your name',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' },
                      })}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="text-red-500 text-xs mt-1.5">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email + Phone row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className={inputClass(!!errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                        })}
                      />
                      {errors.email && (
                        <p id="email-error" role="alert" className="text-red-500 text-xs mt-1.5">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Phone <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className={inputClass(!!errors.phone)}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        {...register('phone', {
                          required: 'Phone number is required',
                          pattern: { value: /^[\d\s\+\-\(\)]{8,15}$/, message: 'Enter a valid phone number' },
                        })}
                      />
                      {errors.phone && (
                        <p id="phone-error" role="alert" className="text-red-500 text-xs mt-1.5">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Course Select */}
                  <div>
                    <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Interested Course <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="course"
                      className={`${inputClass(!!errors.course)} cursor-pointer`}
                      aria-describedby={errors.course ? 'course-error' : undefined}
                      {...register('course', { required: 'Please select a course' })}
                    >
                      <option value="">Select a course...</option>
                      {COURSE_OPTIONS.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.course && (
                      <p id="course-error" role="alert" className="text-red-500 text-xs mt-1.5">
                        {errors.course.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your background and goals..."
                      className={`${inputClass(!!errors.message)} resize-none`}
                      {...register('message')}
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={isSubmitting}
                    icon={<Send className="w-4 h-4" />}
                    iconPosition="right"
                    className="w-full justify-center mt-2 btn-glow"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  <p className="text-center text-xs text-gray-400">
                    🔒 Your information is safe. We never spam.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
