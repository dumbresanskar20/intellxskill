import React from 'react'
import { MainLayout } from '../layouts/MainLayout'
import { Hero } from '../components/Hero/Hero'
import { About } from '../components/About/About'
import { WhyChooseUs } from '../components/WhyChooseUs/WhyChooseUs'
import { Courses } from '../components/Courses/Courses'
import { Certificate } from '../components/Certificate/Certificate'
import { Testimonials } from '../components/Testimonials/Testimonials'
import { Contact } from '../components/Contact/Contact'
import { useToast } from '../hooks/useToast'

export const Home: React.FC = () => {
  const { addToast } = useToast()

  const handleContactSuccess = () => {
    addToast({
      type: 'success',
      title: '🎉 Message Sent!',
      message: 'Our team will reach out within 24 hours. Thank you!',
    })
  }

  return (
    <MainLayout>
      <Hero />
      <About />
      <WhyChooseUs />
      <Courses />
      <Certificate />
      <Testimonials />
      <Contact onSubmitSuccess={handleContactSuccess} />
    </MainLayout>
  )
}
