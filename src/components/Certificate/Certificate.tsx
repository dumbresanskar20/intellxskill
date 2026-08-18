import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Award, Shield, ExternalLink } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '../Common/SectionWrapper'
import certificateImg from '../../assets/certificate.png'

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

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* ── Left: Demo Certificate Showcase ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Outer decorative wrapper */}
            <div className="relative">
              {/* Background decorative pattern */}
              <div
                className="absolute inset-0 -m-4 rounded-[2rem] opacity-[0.04]"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, #1E3A8A 1px, transparent 0)`,
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Demo Certificate label */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-center mb-6"
              >
                <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#1E3A8A] to-[#2D4F9E] text-white text-xs font-bold rounded-full shadow-lg shadow-blue-900/20 uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  Demo Certificate
                </span>
              </motion.div>

              {/* Certificate image container */}
              <div className="relative group">
                {/* Outer glow on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1E3A8A]/20 via-[#F97316]/15 to-[#1E3A8A]/20 rounded-[1.75rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Certificate card */}
                <div
                  className="relative overflow-hidden rounded-2xl bg-white border border-gray-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.18)] group-hover:scale-[1.01]"
                  style={{ aspectRatio: '1.414 / 1' }}
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-[3px] border-l-[3px] border-[#1E3A8A]/30 rounded-tl-2xl pointer-events-none z-10" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-[3px] border-r-[3px] border-[#1E3A8A]/30 rounded-tr-2xl pointer-events-none z-10" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-[3px] border-l-[3px] border-[#F97316]/30 rounded-bl-2xl pointer-events-none z-10" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-[3px] border-r-[3px] border-[#F97316]/30 rounded-br-2xl pointer-events-none z-10" />

                  <img
                    src={certificateImg}
                    alt="IntellxSkill Technologies - Demo Certificate of Completion for Advanced Data Analytics with Snowflake & AI"
                    className="w-full h-full object-contain block p-2"
                  />

                  {/* Shine overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7, type: 'spring', stiffness: 200 }}
                  className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-5 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100 flex items-center gap-3 z-20"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold text-gray-900">Blockchain Verified</p>
                    <p className="text-[9px] sm:text-[10px] text-gray-500">Tamper-proof certificate</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9, type: 'spring', stiffness: 200 }}
                  className="absolute -top-4 -left-2 sm:-top-5 sm:-left-5 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100 flex items-center gap-3 z-20"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#1E3A8A]" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold text-gray-900">Industry Recognized</p>
                    <p className="text-[9px] sm:text-[10px] text-gray-500">Accepted by top employers</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Certificate Info & Features ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              A Certificate Recognized by Top Employers
            </h3>
            <p className="text-gray-500 leading-relaxed mb-8">
              Upon successful completion, you receive an industry-recognized certificate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <h4 className="text-sm font-bold text-gray-900 mb-1.5">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
