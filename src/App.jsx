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

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // In your App.js
  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log("[v0] Checking authentication status")
        const token = authService.getToken()
        console.log("[v0] Token found:", !!token, token ? token.substring(0, 20) + "..." : "No token")

        if (authService.isAuthenticated()) {
          console.log("[v0] Token exists, verifying with server...")
          const userData = await authService.getCurrentUser()
          console.log("[v0] Server returned user data:", userData)
          // normalize common shapes: {user}, {data:{user}}, or raw user
          const normalizedUser = userData?.user || userData?.data?.user || userData
          setUser(normalizedUser || null)
        } else {
          console.log("[v0] No token found")
          setUser(null)
        }
      } catch (error) {
        console.error("[v0] Authentication check failed:", error)
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
          <div className="animated-bg pointer-events-none" aria-hidden="true"></div>
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
