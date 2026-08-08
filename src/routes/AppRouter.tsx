import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { CourseDetail } from '../pages/CourseDetail'
import { FAQ } from '../pages/FAQ'
import { NotFound } from '../pages/NotFound'
import { ScrollToTop } from '../components/Common/ScrollToTop'

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses/:slug" element={<CourseDetail />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)
