"use client"

// src/components/ProtectedRoute.jsx
import { useEffect, useState } from "react"
import { authService } from "../services/auth"
import { useNavigate, useLocation } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (authService.isAuthenticated()) {
          // Verify token is still valid
          await authService.getCurrentUser()
          setIsAuthenticated(true)
        } else {
          setIsAuthenticated(false)
          // Redirect to login with return url
          navigate("/auth", {
            state: { from: location.pathname },
            replace: true,
          })
        }
      } catch (error) {
        console.error("Auth check failed:", error)
        setIsAuthenticated(false)
        navigate("/auth", {
          state: { from: location.pathname },
          replace: true,
        })
      }
    }

    checkAuth()
  }, [navigate, location])

  if (isAuthenticated === null) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-mustard-dark"></div>
      </div>
    )
  }

  return isAuthenticated ? children : null
}

export default ProtectedRoute
