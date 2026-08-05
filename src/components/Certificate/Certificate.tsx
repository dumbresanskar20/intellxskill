import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Award, CheckCircle2, Star } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '../Common/SectionWrapper'

export const Certificate: React.FC = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="certificate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Certification"
          title="Earn a Certificate That "
          highlight="Speaks for Itself"
          description="Our industry-recognized certificate validates your expertise in Cloud Data Analytics & BI Engineering."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Certificate Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shine-animation">
              {/* Certificate Design */}
              <div className="bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1D4ED8] p-8 sm:p-12 relative">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute border border-white rounded-full"
                      style={{
                        width: `${(i + 1) * 120}px`,
                        height: `${(i + 1) * 120}px`,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-extrabold text-sm">IntellxSkill</p>
                        <p className="text-blue-200 text-xs">Technologies</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-200 text-xs">Certificate No.</p>
                      <p className="text-white text-xs font-bold">IXT-2024-DA-001</p>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="text-center mb-8">
                    <p className="text-blue-200 text-xs uppercase tracking-widest font-bold mb-2">
                      This certifies that
                    </p>
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent mb-4" />
                    <p className="text-white text-3xl font-extrabold mb-1">Your Name Here</p>
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent mt-4 mb-4" />
                    <p className="text-blue-200 text-xs uppercase tracking-widest mb-3">
                      has successfully completed
                    </p>
                    <p className="text-white text-xl font-bold leading-tight">
                      Cloud Data Analytics &<br />BI Engineering Program
                    </p>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#F97316] fill-[#F97316]" />
                    ))}
                  </div>

                  {/* Signature area */}
                  <div className="flex justify-between items-end">
                    <div className="text-center">
                      <div className="h-0.5 w-24 bg-white/40 mb-1 mx-auto" />
                      <p className="text-blue-200 text-xs">Director, IntellxSkill</p>
                    </div>
                    <div className="w-12 h-12 border-2 border-white/40 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white/60" />
                    </div>
                    <div className="text-center">
                      <div className="h-0.5 w-24 bg-white/40 mb-1 mx-auto" />
                      <p className="text-blue-200 text-xs">Program Coordinator</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orange accent bar */}
              <div className="h-2 bg-gradient-to-r from-[#F97316] via-[#FBBF24] to-[#F97316]" />
            </div>

            {/* Floating verification badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Blockchain Verified</p>
                <p className="text-[10px] text-gray-500">Tamper-proof certificate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              A Certificate Recognized by Top Employers
            </h3>
            <p className="text-gray-500 leading-relaxed mb-8">
              Upon successful completion, you receive an industry-recognized certificate that
              validates your skills in Cloud Data Analytics & BI Engineering. This certificate
              is designed to impress hiring managers at Fortune 500 companies.
            </p>

            {[
              {
                icon: '🏆',
                title: 'Issued By IntellxSkill Technologies',
                desc: 'Official certificate with unique verification code and digital seal.',
              },
              {
                icon: '🔐',
                title: 'Blockchain Verified',
                desc: 'Each certificate is secured on blockchain — impossible to forge or duplicate.',
              },
              {
                icon: '💼',
                title: 'LinkedIn Ready',
                desc: 'Add your certificate directly to LinkedIn and showcase your achievement.',
              },
              {
                icon: '♾️',
                title: 'Lifetime Validity',
                desc: 'Your certificate never expires and remains verifiable forever.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 mb-5 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
