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
    <div className="pt-24 pb-16 bg-gradient-to-b from-mustard-light to-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-6">
              <div className="logo-placeholder mx-auto">MW</div>
              <h1 className="text-2xl font-bold text-mustard-brown mt-4">
                {isLogin ? "Sign In to Your Account" : "Create Your Account"}
              </h1>
              <p className="text-gray-600 mt-2">
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
      console.log("[v0] Attempting login with:", { email: formData.email })
      const response = await authService.login({
        email: formData.email,
        password: formData.password,
      })

      console.log("[v0] Login response:", response)

      const token = response.token || response.data?.token || response.data?.data?.token
      const userData = response.user || response.data?.user || response.data?.data?.user || response.data

      console.log("[v0] Extracted token:", token ? "Found" : "Not found")
      console.log("[v0] Extracted user data:", userData)

      if (token) {
        localStorage.setItem("token", token)
        console.log("[v0] Token stored successfully")
        setUser(userData)

        const redirectTo = location.state?.from || "/"
        console.log("[v0] Redirecting to:", redirectTo)
        navigate(redirectTo)
      } else {
        console.log("[v0] No token found in response structure")
        setError("Login failed. No token received.")
      }
    } catch (error) {
      console.error("[v0] Login error:", error)
      setError(error.response?.data?.message || "Login failed. Please try again.")
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
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard-dark"
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
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard-dark"
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
            className="h-4 w-4 text-mustard-dark focus:ring-mustard-dark border-gray-300 rounded"
          />
          <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>

        <a href="#" className="text-sm text-mustard-dark hover:text-mustard-brown">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-mustard-dark text-white py-2 px-4 rounded-lg hover:bg-mustard-brown transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>

      <div className="text-center mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={onToggleForm}
            className="text-mustard-dark hover:text-mustard-brown font-semibold underline"
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
    setError("") // Clear error when user types
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  try {
    const response = await authService.login({
      email: formData.email,
      password: formData.password
    });
    
    console.log('[v0] Login response structure:', response);
    
    // Check if token exists in the expected location
    if (response.token) {
      console.log('[v0] Token found in response.token:', response.token.substring(0, 20) + '...');
    } else if (response.data && response.data.token) {
      console.log('[v0] Token found in response.data.token:', response.data.token.substring(0, 20) + '...');
    } else {
      console.log('[v0] No token found in expected locations, full response:', response);
    }
    
    // Update user state in App.js - check different possible response structures
    const userData = response.data || response;
    setUser(userData.user || userData);
    
    // Redirect to the intended page or home
    const from = location.state?.from || '/';
    navigate(from, { replace: true });
  } catch (error) {
    console.error('[v0] Login error:', error);
    setError(error.response?.data?.message || 'Login failed. Please try again.');
  } finally {
    setLoading(false);
  }
};

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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard-dark"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard-dark"
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
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard-dark"
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
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard-dark"
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
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mustard-dark"
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
          className="h-4 w-4 text-mustard-dark focus:ring-mustard-dark border-gray-300 rounded"
        />
        <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
          I agree to the{" "}
          <a href="#" className="text-mustard-dark hover:text-mustard-brown">
            Terms and Conditions
          </a>
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-mustard-dark text-white py-2 px-4 rounded-lg hover:bg-mustard-brown transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Creating Account..." : "Create Account"}
      </button>

      <div className="text-center mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onToggleForm}
            className="text-mustard-dark hover:text-mustard-brown font-semibold underline"
          >
            Sign in to your account
          </button>
        </p>
      </div>
    </form>
  )
}

export default Auth
