"use client"

// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import AboutUs from "./pages/About"
import ContactUs from "./pages/Contact"
import Gallery from "./pages/Gallery"
import ProjectSubmission from "./pages/ProjectSubmission"
import Auth from "./pages/Auth"
import ProtectedRoute from "./components/ProtectedRoute"
import { authService } from "./services/auth"
import { ThemeProvider } from "./context/ThemeContext"
import Profile from "./pages/Profile"
import BackgroundGrid from "./components/BackgroundGrid"

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check authentication on app load and persist user session
  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log("[AUTH] Checking authentication status on app load")
        const token = authService.getToken()
        console.log("[AUTH] Token found:", !!token, token ? token.substring(0, 20) + "..." : "No token")

        if (authService.isAuthenticated()) {
          console.log("[AUTH] Token exists, verifying with server...")
          try {
            const userData = await authService.getCurrentUser()
            console.log("[AUTH] Server returned user data:", userData)
            // normalize common shapes: {user}, {data:{user}}, or raw user
            const normalizedUser = userData?.user || userData?.data?.user || userData
            
            if (normalizedUser) {
              setUser(normalizedUser)
              console.log("[AUTH] User authenticated:", normalizedUser.email)
            } else {
              console.warn("[AUTH] Could not normalize user data")
              localStorage.removeItem("token")
              setUser(null)
            }
          } catch (verifyError) {
            console.error("[AUTH] Token verification failed:", verifyError.message)
            // Token is invalid or expired, clear it
            localStorage.removeItem("token")
            setUser(null)
          }
        } else {
          console.log("[AUTH] No token found")
          setUser(null)
        }
      } catch (error) {
        console.error("[AUTH] Authentication check failed:", error)
        localStorage.removeItem("token")
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  useEffect(() => {
    console.log("[v0] User state changed:", user)
  }, [user])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[color:var(--primary)]"></div>
      </div>
    )
  }

  return (
    <Router>
      <ThemeProvider>
        <div className="App bg-app text-app min-h-screen">
          <Navbar user={user} setUser={setUser} />
          {/* subtle animated background for all pages */}
          <BackgroundGrid />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/auth" element={<Auth setUser={setUser} />} />

            {/* Protected route - only for authenticated users */}
            <Route
              path="/project-submission"
              element={
                <ProtectedRoute>
                  <ProjectSubmission user={user} />
                </ProtectedRoute>
              }
            />

            {/* Protected user profile route */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* 404 page */}
            <Route path="*" element={<div className="container mx-auto px-4 py-16 text-center">Page Not Found</div>} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
