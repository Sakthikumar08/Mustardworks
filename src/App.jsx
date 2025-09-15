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

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // In your App.js
useEffect(() => {
  const checkAuth = async () => {
    try {
      console.log('[v0] Checking authentication status');
      const token = authService.getToken();
      console.log('[v0] Token found:', !!token, token ? token.substring(0, 20) + '...' : 'No token');
      
      if (authService.isAuthenticated()) {
        console.log('[v0] Token exists, verifying with server...');
        const userData = await authService.getCurrentUser();
        console.log('[v0] Server returned user data:', userData);
        setUser(userData.data.user);
      } else {
        console.log('[v0] No token found');
        setUser(null);
      }
    } catch (error) {
      console.error('[v0] Authentication check failed:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  checkAuth();
}, []);

  useEffect(() => {
    console.log("[v0] User state changed:", user)
  }, [user])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-mustard-dark"></div>
      </div>
    )
  }

  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
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

          {/* 404 page */}
          <Route path="*" element={<div className="container mx-auto px-4 py-16 text-center">Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
