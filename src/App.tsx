import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RootState } from './store'
import { useSelector } from 'react-redux'

// local imports
import LandingPage from './pages/landing-page'
import LoginPage from './pages/login-page'
import SignUpPage from './pages/signup-page'
import HomePage from './pages/home-page'

function authenticatedRoutes (auth:boolean) {
  return (
    <Routes>
        <Route index element={<LandingPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='sign-up' element={<SignUpPage />} />
        <Route path='home' element={<HomePage />} />
    </Routes>
  )
}

function unAuthenticatedRoutes (auth:boolean) {
  return (
    <Routes>
        <Route index element={<LandingPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='sign-up' element={<SignUpPage />} />
    </Routes>
  )
}

function App () {
  const authState = useSelector((state:RootState) => state.authReducer)
  return (
    <BrowserRouter>
      {authState.getAuth ? authenticatedRoutes(authState.getAuth) : unAuthenticatedRoutes(authState.getAuth)}
    </BrowserRouter>
  )
}

export default App
