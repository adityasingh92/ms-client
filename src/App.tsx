import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landing-page'
import LoginPage from './pages/login-page'
import SignUpPage from './pages/signup-page'

// local imports

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='sign-up' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
