import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://mustardworks-backend1.onrender.com/api"

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Important for cookies if you're using them
})

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem("token")
      window.location.href = "/auth"
    }
    return Promise.reject(error)
  },
)

export const authService = {
  // Register new user
  register: async (userData) => {
    const response = await api.post("/auth/register", userData)
    const data = response?.data || response
    // handle common backend variants for token key
    const token = data?.token || data?.accessToken || data?.jwt || data?.authToken || data?.data?.token

    if (token) {
      localStorage.setItem("token", token)
      console.log("[v0] Token stored on register:", token.substring(0, 20) + "...")
    } else {
      console.log("[v0] No token found in register response:", data)
    }

    return data
  },

  // Login user
  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials)
    const data = response?.data || response

    const token = data?.token || data?.accessToken || data?.jwt || data?.authToken || data?.data?.token

    if (token) {
      localStorage.setItem("token", token)
      console.log("[v0] Token stored on login:", token.substring(0, 20) + "...")
    } else {
      console.log("[v0] No token found in login response:", data)
    }

    return data
  },

  // Get current user
  getCurrentUser: async () => {
    const response = await api.get("/auth/me")
    const data = response?.data || response
    return data?.user || data?.data?.user || data
  },

  // Update password
  updatePassword: async (passwordData) => {
    const response = await api.patch("/auth/update-password", passwordData)
    return response.data
  },

  // Logout user
  logout: async () => {
    const response = await api.post("/auth/logout")
    localStorage.removeItem("token")
    return response.data
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const token = localStorage.getItem("token")
    console.log("[v0] Checking authentication status, token exists:", !!token)
    return !!token
  },

  // Get token for debugging
  getToken: () => {
    return localStorage.getItem("token")
  },
}

export default api
