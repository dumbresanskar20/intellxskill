import React, { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, ChevronDown } from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────
interface QA {
  patterns: string[]
  answer: string
}

interface ChatMessage {
  id: number
  role: 'bot' | 'user'
  text: string
}

// ─── Predefined Q&A knowledge base ───────────────────────────────────────────
const QA_DATABASE: QA[] = [
  {
    patterns: ['hello', 'hi', 'hey', 'howdy', 'good morning', 'good evening', 'good afternoon', 'greet'],
    answer: "👋 Hello! Welcome to IntellxSkill Technologies! I'm your virtual assistant. How can I help you today? You can ask me about our courses, fees, placement, or anything else!",
  },
  {
    patterns: ['courses', 'what courses', 'available courses', 'programs', 'training', 'learn', 'what do you offer'],
    answer: "📚 We offer 5 industry-leading courses:\n\n• **Microsoft Advanced Excel with AI** (25 hrs)\n• **Advanced SQL Server Program** (100 hrs)\n• **Snowflake Data Warehousing** (20 hrs)\n• **Python for Data Analytics** (35 hrs)\n• **Microsoft Power BI** (30 hrs)\n\nAll include live + recorded sessions! Which one interests you?",
  },
  {
    patterns: ['excel', 'microsoft excel', 'advanced excel'],
    answer: "📊 **Microsoft Advanced Excel with AI** covers:\n• Advanced Formulas (XLOOKUP, LAMBDA, LET)\n• Power Query & Data Transformation\n• VBA Macros & Automation\n• AI-powered features (Copilot)\n• Dashboard Design\n\nDuration: 25 Hours | 20 Live Sessions\nLevel: Beginner to Advanced\n\nWould you like to know about fees or enrollment?",
  },
  {
    patterns: ['sql', 'sql server', 'microsoft sql', 'database'],
    answer: "🗄️ **Advanced SQL Server Program** covers:\n• Database Fundamentals, Data Types & Clauses\n• Database Design (Normalization, Star/Snowflake Schemas)\n• Advanced Joins, Set Operations & Subqueries\n• CTEs, Views, Stored Procedures, UDFs & Triggers\n• Performance Tuning (Indexes & Execution Plans)\n\nDuration: 100 Hours | 80 Live Sessions\nLevel: Beginner to Advanced\n\nPerfect for aspiring SQL Developers, Data Engineers, and BI Professionals!",
  },
  {
    patterns: ['snowflake', 'cloud warehouse', 'data warehouse'],
    answer: "❄️ **Snowflake Data Warehousing** covers:\n• Snowflake Architecture & Concepts\n• Data Loading (Stages, COPY INTO, Snowpipe)\n• Semi-structured Data (JSON, Parquet)\n• Tasks, Streams & Pipelines\n• Security & Cost Optimization\n\nDuration: 20 Hours | 16 Live Sessions\nPrepares you for the SnowPro Core Certification!",
  },
  {
    patterns: ['python', 'python analytics', 'pandas', 'data science'],
    answer: "🐍 **Python for Data Analytics** covers:\n• Python Fundamentals & OOP\n• NumPy & Pandas\n• Data Cleaning & EDA\n• Matplotlib, Seaborn & Plotly\n• ML Intro with Scikit-learn\n\nDuration: 35 Hours | 28 Live Sessions\nLevel: Beginner to Advanced\n\nIdeal for aspiring Data Scientists and Analysts!",
  },
  {
    patterns: ['power bi', 'powerbi', 'bi', 'dax', 'dashboard'],
    answer: "📈 **Microsoft Power BI** covers:\n• Power Query & Data Transformation\n• Data Modeling (Star Schema)\n• DAX Mastery\n• Time Intelligence Functions\n• Row-Level Security & Deployment\n\nDuration: 30 Hours | 24 Live Sessions\nAligns with the PL-300 Certification!",
  },
  {
    patterns: ['fee', 'fees', 'price', 'cost', 'pricing', 'how much', 'payment', 'emi'],
    answer: "💰 Our courses are priced affordably!\n\n✅ Flexible payment plans available\n✅ EMI options for all students\n✅ Group discount for 2+ enrollments\n\nFor exact pricing, please **Book a Free Demo** and our counselor will share a personalized plan.",
  },
  {
    patterns: ['placement', 'job', 'placement assistance', 'job guarantee', 'hiring', 'career', 'employed'],
    answer: "🎯 We provide **100% Job Assistance** to all our students!\n\n✅ Resume & LinkedIn optimization\n✅ Mock interviews with industry experts\n✅ Direct placement referrals to 150+ companies\n✅ Lifetime career support membership\n\nStudents placed at Infosys, Wipro, TCS, Accenture, Deloitte, HCL & more!",
  },
  {
    patterns: ['certificate', 'certification', 'degree', 'diploma'],
    answer: "🏆 Yes! Upon successful completion, you receive an **industry-recognized certificate** from IntellxSkill Technologies.\n\nRecognized by top MNCs across India. You also get LinkedIn-shareable credentials!",
  },
  {
    patterns: ['duration', 'how long', 'time', 'weeks', 'months'],
    answer: "⏱️ Course durations vary:\n• Excel with AI: 25 hours\n• SQL Server Program: 100 hours\n• Snowflake: 20 hours\n• Python Analytics: 35 hours\n• Power BI: 30 hours\n\nTypically completed in **4–8 weeks** with weekend batches or **2–4 weeks** with daily classes.",
  },
  {
    patterns: ['online', 'offline', 'mode', 'live', 'recorded', 'sessions'],
    answer: "💻 All courses are **Online (Live + Recorded)**!\n\n• Live instructor-led sessions with real-time Q&A\n• Recorded sessions for later review\n• Lifetime access to all recordings\n• Weekend & weekday batch options\n• Small batch sizes for personalized attention",
  },
  {
    patterns: ['demo', 'free demo', 'free session', 'trial', 'sample class'],
    answer: "🎁 We offer a **FREE Demo Session** where you can:\n\n✅ Experience our teaching methodology\n✅ Meet the instructor\n✅ Get all your questions answered\n✅ Understand the full curriculum\n\nClick **Book Free Demo** in the navbar or scroll to the Contact section!",
  },
  {
    patterns: ['contact', 'reach', 'call', 'email', 'phone', 'address', 'location'],
    answer: "📞 You can reach us through:\n\n📍 3rd Floor, Tech Hub, Andheri East, Mumbai - 400069\n📱 +91 98765 43210\n📧 hello@intellxskill.com\n🌐 www.intellxskill.com\n⏰ Mon–Sat: 9:00 AM – 7:00 PM\n\nOr fill out our Contact Form on this page!",
  },
  {
    patterns: ['batch', 'schedule', 'timing', 'when', 'start'],
    answer: "📅 New batches start **every month**!\n\nWe offer:\n• Weekend batches (Sat–Sun)\n• Weekday batches (Mon–Fri)\n• Morning & Evening slots\n\nSeats are limited! Book a demo to reserve your spot.",
  },
  {
    patterns: ['who', 'instructor', 'trainer', 'mentor', 'faculty', 'teacher'],
    answer: "👨‍🏫 Our instructors are **industry veterans** with 10+ years of real-world experience in cloud data analytics and BI engineering.\n\nThey've worked with Fortune 500 companies and bring live, practical knowledge into every session!",
  },
  {
    patterns: ['beginner', 'fresher', 'no experience', 'new', 'starting', 'zero'],
    answer: "🌱 Absolutely! We welcome **complete beginners**!\n\nAll courses start from fundamentals and build to advanced topics. We've trained 500+ students from zero to job-ready professionals!\n\nWhich course would you like to start with?",
  },
  {
    patterns: ['thank', 'thanks', 'thank you', 'great', 'awesome', 'perfect', 'good'],
    answer: "😊 You're welcome! Is there anything else you'd like to know about IntellxSkill Technologies?\n\nFeel free to ask about courses, fees, placement support, or anything else!",
  },
  {
    patterns: ['bye', 'goodbye', 'see you', 'later', 'exit'],
    answer: "👋 Goodbye! Thanks for connecting with IntellxSkill Technologies. We hope to see you in our next batch! Don't hesitate to come back if you have more questions. 🚀",
  },
  {
    patterns: ['about', 'intellxskill', 'company', 'who are you', 'tell me about'],
    answer: "🏢 **IntellxSkill Technologies** is India's leading Cloud Data Analytics & BI Engineering training institute!\n\n✅ 500+ students successfully placed\n✅ 100+ hours of comprehensive training\n✅ 5 industry-relevant courses\n✅ 7+ career roles covered\n✅ 100% Job Assistance",
  },
  {
    patterns: ['whatsapp', 'chat', 'message', 'connect'],
    answer: "📱 You can reach us on WhatsApp using the green WhatsApp button on the left side of this page! Just click it and start chatting with our team directly.",
  },
]

const QUICK_REPLIES = [
  'Tell me about courses',
  'Fees & payment options',
  'Job placement support',
  'Book a free demo',
  'Contact information',
]

// ─── Match user input to answer ───────────────────────────────────────────────
function getAnswer(input: string): string {
  const lower = input.toLowerCase().trim()
  for (const qa of QA_DATABASE) {
    if (qa.patterns.some((p) => lower.includes(p))) {
      return qa.answer
    }
  }
  return "🤔 I'm not sure about that, but I'd love to help! Try asking about:\n\n• Our courses (Excel, SQL, Snowflake, Python, Power BI)\n• Fees and payment options\n• Job placement support\n• Free demo session\n• Contact information\n\nOr click **Book Free Demo** to talk to our counselors directly!"
}

// ─── Render markdown-like bold text ──────────────────────────────────────────
function renderMessage(text: string): React.ReactNode[] {
  const lines = text.split('\n')
  return lines.map((line, i) => {
    const parts = line.split(/\*\*(.*?)\*\*/g)
    return (
      <span key={i}>
        {parts.map((part, j) =>
          j % 2 === 1 ? (
            <strong key={j} className="font-bold text-white">
              {part}
            </strong>
          ) : (
            part
          )
        )}
        {i < lines.length - 1 && <br />}
      </span>
    )
  })
}

// ─── Chatbot Component ────────────────────────────────────────────────────────
export const Chatbot: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 0,
      role: 'bot',
      text: "👋 Hi there! I'm **IntellxBot**, your virtual assistant at IntellxSkill Technologies!\n\nI can help you with courses, fees, placement, and more. How can I assist you today?",
    },
  ])
  const [input, setInput] = useState<string>('')
  const [typing, setTyping] = useState<boolean>(false)
  const [unread, setUnread] = useState<number>(1)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesRef = useRef<HTMLDivElement>(null)

  // Prevent wheel/touchpad scroll from bubbling to the page
  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const el = messagesRef.current
    if (!el) return
    const { scrollTop, scrollHeight, clientHeight } = el
    const atTop = scrollTop === 0 && e.deltaY < 0
    const atBottom = scrollTop + clientHeight >= scrollHeight && e.deltaY > 0
    if (!atTop && !atBottom) {
      e.stopPropagation()
    }
  }, [])

  useEffect(() => {
    if (open) {
      setUnread(0)
      const timer = setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const sendMessage = (text: string): void => {
    if (!text.trim()) return

    const userMsg: ChatMessage = {
      id: Date.now(),
      role: 'user',
      text: text.trim(),
    }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTyping(true)

    const delay = 600 + Math.random() * 600
    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: Date.now() + 1,
        role: 'bot',
        text: getAnswer(text),
      }
      setMessages((prev) => [...prev, botMsg])
      setTyping(false)
      if (!open) setUnread((n) => n + 1)
    }, delay)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    sendMessage(input)
  }

  const handleQuickReply = (reply: string): void => {
    sendMessage(reply)
  }

  const handleToggle = (): void => {
    setOpen((prev) => !prev)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value)
  }

  return (
    <>
      {/* ── Floating Toggle Button ── */}
      <div className="fixed bottom-16 right-4 sm:bottom-24 sm:right-6 z-[1000] flex flex-col items-end gap-2">
        {/* Tooltip bubble */}
        <AnimatePresence>
          {!open && (
          <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="relative hidden sm:block bg-white rounded-2xl px-4 py-2.5 shadow-xl border border-gray-100 text-sm font-medium text-gray-700 max-w-[180px] text-center"
            >
              💬 Chat with us!
              <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white border-b border-r border-gray-100 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <motion.button
          id="chatbot-toggle-btn"
          type="button"
          onClick={handleToggle}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          className="relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl text-white"
          style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #3B5CC4 100%)' }}
          aria-label={open ? 'Close chatbot' : 'Open chatbot'}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.span>
            )}
          </AnimatePresence>

          {/* Unread badge */}
          {!open && unread > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#F97316] rounded-full text-[10px] font-bold flex items-center justify-center"
            >
              {unread}
            </motion.span>
          )}
        </motion.button>
      </div>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="chatbot-window"
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-2 bottom-2 top-16 sm:inset-auto sm:bottom-44 sm:right-6 sm:w-[360px] z-[1000] flex flex-col rounded-3xl overflow-hidden shadow-2xl"
            style={{ maxHeight: 'calc(100dvh - 80px)', border: '1px solid rgba(30,58,138,0.15)' }}
            role="dialog"
            aria-modal="true"
            aria-label="Chat window"
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-5 py-4 flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #3B5CC4 100%)' }}
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm leading-none">IntellxBot</p>
                <p className="text-blue-200 text-xs mt-0.5">Virtual Assistant · Always Online</p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-300 text-xs font-medium">Live</span>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="ml-2 w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={messagesRef}
              className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-3"
              style={{ background: '#F8FAFF' }}
              onWheel={handleWheel}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-7 h-7 rounded-xl flex-shrink-0 flex items-center justify-center ${
                      msg.role === 'bot'
                        ? 'bg-gradient-to-br from-[#1E3A8A] to-[#3B5CC4]'
                        : 'bg-gradient-to-br from-[#F97316] to-[#FBBF24]'
                    }`}
                  >
                    {msg.role === 'bot' ? (
                      <Bot className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <User className="w-3.5 h-3.5 text-white" />
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'bot'
                        ? 'bg-gradient-to-br from-[#1E3A8A] to-[#2D4F9E] text-blue-100 rounded-tl-sm'
                        : 'bg-white text-gray-800 rounded-tr-sm shadow-sm border border-gray-100'
                    }`}
                  >
                    {msg.role === 'bot' ? renderMessage(msg.text) : msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex gap-2.5 items-end"
                  >
                    <div className="w-7 h-7 rounded-xl flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-[#1E3A8A] to-[#3B5CC4]">
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2D4F9E] rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5 items-center">
                      {([0, 1, 2] as const).map((i) => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-blue-300"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            <div
              className="px-4 py-2 flex gap-2 overflow-x-auto flex-shrink-0 bg-white border-t border-gray-100"
              style={{ scrollbarWidth: 'none' }}
            >
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => handleQuickReply(reply)}
                  className="flex-shrink-0 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-[#1E3A8A] text-xs font-semibold rounded-xl border border-blue-100 transition-colors whitespace-nowrap"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input form */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-4 py-3 bg-white border-t border-gray-100 flex-shrink-0"
              style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
            >
              <input
                ref={inputRef}
                id="chatbot-input"
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 bg-gray-50 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 outline-none border border-gray-200 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/10 transition-all"
                aria-label="Chat message input"
                disabled={typing}
                autoComplete="off"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!input.trim() || typing}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 disabled:opacity-40 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #3B5CC4 100%)' }}
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
