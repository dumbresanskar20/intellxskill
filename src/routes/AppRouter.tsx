import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { CourseDetail } from '../pages/CourseDetail'
import { NotFound } from '../pages/NotFound'

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses/:slug" element={<CourseDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)
