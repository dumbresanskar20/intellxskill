// TypeScript types for IntellxSkill
export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
  icon: string
}

export interface WhyCard {
  id: number
  icon: string
  title: string
  description: string
  color: string
  gradient: string
  iconBg: string
  iconColor: string
}

export type CourseCategory = 'All' | 'AI' | 'Data Analytics' | 'SQL Server' | 'Power BI' | 'SAP' | 'DBA'

export interface CourseModule {
  concept?: string
  title: string
  lessons: string[]
}

export interface CourseProject {
  title: string
  desc: string
}

export interface CourseFAQ {
  q: string
  a: string
}

export interface Course {
  id: number
  slug: string
  title: string
  category: CourseCategory | CourseCategory[]
  duration: string
  sessions: string
  mode: string
  level: string
  description: string
  tags: string[]
  color: string
  textColor: string
  bgColor: string
  bannerGrad: string
  image?: string
  syllabus: string[]
  modules: CourseModule[]
  skills: string[]
  tools: string[]
  projects: CourseProject[]
  careers: string[]
  faqs: CourseFAQ[]
}

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  review: string
  rating: number
  avatar: string
  avatarColor: string
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  website: string
  hours: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  course: string
  message: string
}

export interface SocialLink {
  icon: string
  label: string
  href: string
}

export interface AboutTab {
  id: string
  label: string
  icon: string
  title: string
  description: string
  points: string[]
}

export interface ToastMessage {
  id: string
  type: 'success' | 'error' | 'info'
  title: string
  message: string
}
