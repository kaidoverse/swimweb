import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProgramPage from './Routes/ProgramPage'
import AboutPage from './Routes/AboutPage'
import InstructorsPage from './Routes/InstructorsPage'
import TestimonialsPage from './Routes/TestimonialsPage'
import ContactPage from './Routes/TestimonialsPage'




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/programpage' element={<ProgramPage />} />
      <Route path='/aboutpage' element={<AboutPage />} />
      <Route path='/instructorspage' element={<InstructorsPage />} />
      <Route path='/testimonialspage' element={<TestimonialsPage />} />
      <Route path='/contactpage' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
)
