"use client"

import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { authService } from "../services/auth"

const Auth = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleForm = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div className="pt-24 pb-16 bg-app min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-surface rounded-xl shadow-soft overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-6">
              <div className="logo-placeholder mx-auto">MW</div>
              <h1 className="text-2xl font-bold text-app mt-4">
                {isLogin ? "Sign In to Your Account" : "Create Your Account"}
              </h1>
              <p className="text-secondary mt-2">
                {isLogin
                  ? "Access your account to manage projects and track progress"
                  : "Join MustardWorks to start your innovation journey"}
              </p>
            </div>

            {isLogin ? (
              <LoginForm onToggleForm={toggleForm} setUser={setUser} />
            ) : (
              <SignupForm onToggleForm={toggleForm} setUser={setUser} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const LoginForm = ({ onToggleForm, setUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const location = useLocation()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
    setError("") // Clear error when user types
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      console.log("[AUTH LOGIN] Attempting login with:", { email: formData.email })
      const data = await authService.login({
        email: formData.email,
        password: formData.password,
      })

      console.log("[AUTH LOGIN] Login response received:", {
        success: data?.success,
        hasToken: !!data?.token,
        hasUser: !!data?.data?.user || !!data?.user
      })

      // After authService.login, token should be in localStorage
      const hasToken = authService.isAuthenticated()
      console.log("[AUTH LOGIN] Token present after login:", hasToken)

      if (!hasToken) {
        setError("Login failed. No token received.")
        setLoading(false)
        return
      }

      // Fetch user profile using the fresh token
      const me = await authService.getCurrentUser()
      console.log("[AUTH LOGIN] User profile fetched:", me)
      const normalizedUser = me?.user || me?.data?.user || me

      if (!normalizedUser) {
        console.warn("[AUTH LOGIN] Could not normalize user data")
      }

      setUser(normalizedUser || null)

      const redirectTo = location.state?.from || "/"
      console.log("[AUTH LOGIN] Login successful, redirecting to:", redirectTo)
      navigate(redirectTo, { replace: true })
    } catch (error) {
      console.error("[AUTH LOGIN] Login error:", error)
      const errorMessage = error.response?.data?.message || error.message || "Login failed. Please try again."
      setError(errorMessage)
      // Clear any partial token on error
      localStorage.removeItem("token")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">{error}</div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-token rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-token rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
          placeholder="Your password"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="h-4 w-4 text-[color:var(--primary)] focus:ring-[color:var(--primary)] border-token rounded"
          />
          <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>

        <a href="#" className="text-sm text-[color:var(--primary)] hover:opacity-80">
          Forgot password?
        </a>
      </div>

      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? "Signing In..." : "Sign In"}
      </button>

      <div className="text-center mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={onToggleForm}
            className="text-[color:var(--primary)] hover:opacity-80 font-semibold underline"
          >
            Create new account
          </button>
        </p>
      </div>
    </form>
  )
}

const SignupForm = ({ onToggleForm, setUser }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const location = useLocation()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
    setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        agreeToTerms: formData.agreeToTerms,
      }

      console.log("[AUTH REGISTER] Attempting registration for:", formData.email)
      const response = await authService.register(payload)

      console.log("[AUTH REGISTER] Registration response:", {
        success: response?.success,
        hasToken: !!response?.token,
        hasUser: !!response?.data?.user || !!response?.user
      })

      // Verify token was stored
      const hasToken = authService.isAuthenticated()
      if (!hasToken) {
        setError("Registration successful but authentication failed. Please login.")
        setLoading(false)
        return
      }

      // authService.register stores token if present; also return shape can vary
      const userData = response?.user || response?.data?.user || response
      setUser(userData)

      const from = location.state?.from || "/"
      console.log("[AUTH REGISTER] Registration successful, redirecting to:", from)
      navigate(from, { replace: true })
    } catch (err) {
      console.error("[AUTH REGISTER] Registration error:", err)
      const errorMessage = err?.response?.data?.message || err.message || "Registration failed. Please try again."
      setError(errorMessage)
      // Clear any partial token on error
      localStorage.removeItem("token")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">{error}</div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-token rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
            placeholder="John"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-token rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="signup-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-token rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          id="signup-password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-token rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
          placeholder="Create a password"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-token rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)]"
          placeholder="Confirm your password"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          required
          className="h-4 w-4 text-[color:var(--primary)] focus:ring-[color:var(--primary)] border-token rounded"
        />
        <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
          I agree to the{" "}
          <a href="#" className="text-[color:var(--primary)] hover:opacity-80">
            Terms and Conditions
          </a>
        </label>
      </div>

      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? "Creating Account..." : "Create Account"}
      </button>

      <div className="text-center mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onToggleForm}
            className="text-[color:var(--primary)] hover:opacity-80 font-semibold underline"
          >
            Sign in to your account
          </button>
        </p>
      </div>
    </form>
  )
}

export default Auth
