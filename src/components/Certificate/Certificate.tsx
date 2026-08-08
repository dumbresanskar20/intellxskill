import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
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

        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Certificate Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            {/* Elegant container holding the certificate image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-[1.02] border border-gray-100/60 bg-white">
              <img
                src={certificateImg}
                alt="IntellxSkill Technologies Certificate of Completion"
                className="w-full h-auto object-cover block"
              />
              
              {/* Premium hover overlay glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>

            {/* Floating verification badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 z-10"
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
