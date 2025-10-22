"use client"

import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { authService } from "../services/auth"
import ThemeToggle from "./ThemeToggle"
import MWlogo from "../assets/Mustardworks-.png"

const Navbar = ({ user, setUser }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path) => {
    return location.pathname === path
  }

  const initials = (u) => {
    const name = u?.name || `${u?.firstName || ""} ${u?.lastName || ""}`.trim()
    if (!name) return "U"
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase()
  }

  const handleProjectSubmissionClick = (e) => {
    console.log("[NAVBAR] Project submission clicked, user:", user)
    if (!user) {
      e.preventDefault()
      navigate("/auth", { state: { from: "/project-submission" } })
    }
  }

  const logout = async () => {
    try {
      console.log("[NAVBAR] Logging out user")
      await authService.logout()
      setUser(null)
      console.log("[NAVBAR] Logout successful, redirecting to home")
      navigate("/", { replace: true })
    } catch (error) {
      console.error("[NAVBAR] Logout error:", error)
      // Even on error, clear user state and redirect
      setUser(null)
      navigate("/", { replace: true })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[color:var(--nav-bg)] shadow-soft backdrop-blur-md" : "bg-[color:var(--nav-bg)] backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* left */}
          <Link to="" className="flex items-center flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="MustardWorks Logo"
              className="w-48 sm:w-52 md:w-60 h-10 sm:h-11 md:h-12 object-contain"
            />
          </Link>

          {/* center links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              to="/"
              className={`transition-colors text-base hover:scale-105 transition-transform ${isActive("/") ? "text-[color:var(--primary)] font-semibold" : "text-secondary hover:text-app"}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors text-base hover:scale-105 transition-transform ${isActive("/about") ? "text-[color:var(--primary)] font-semibold" : "text-secondary hover:text-app"}`}
            >
              About Us
            </Link>
            <Link
              to="/gallery"
              className={`transition-colors text-base hover:scale-105 transition-transform ${isActive("/gallery") ? "text-[color:var(--primary)] font-semibold" : "text-secondary hover:text-app"}`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`transition-colors text-base hover:scale-105 transition-transform ${isActive("/contact") ? "text-[color:var(--primary)] font-semibold" : "text-secondary hover:text-app"}`}
            >
              Contact Us
            </Link>
            {user && (
              <Link
                to="/project-submission"
                onClick={handleProjectSubmissionClick}
                className={`transition-colors text-base hover:scale-105 transition-transform ${isActive("/project-submission") ? "text-[color:var(--primary)] font-semibold" : "text-secondary hover:text-app"}`}
              >
                Project Submission
              </Link>
            )}
          </div>

          {/* right controls */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            {!user ? (
              <button onClick={() => navigate("/auth")} className="btn-primary px-6 py-2.5">
                Sign In
              </button>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowMenu((s) => !s)}
                  className="h-10 w-10 rounded-full bg-[color:var(--primary-ghost)] text-[color:var(--primary)] font-bold flex items-center justify-center shadow-subtle hover:shadow-soft transition-shadow"
                  aria-haspopup="menu"
                  aria-expanded={showMenu}
                >
                  {initials(user)}
                </button>
                {showMenu && (
                  <div
                    role="menu"
                    className="absolute right-0 mt-2 w-48 rounded-xl bg-surface shadow-soft border border-[color:var(--border)] overflow-hidden z-50"
                  >
                    <button
                      className="w-full text-left px-4 py-3 hover:bg-[color:var(--surface-2)] text-app transition-colors flex items-center gap-2"
                      onClick={() => {
                        setShowMenu(false)
                        navigate("/profile")
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Profile
                    </button>
                    <button
                      className="w-full text-left px-4 py-3 hover:bg-red-50 dark:hover:bg-red-900/20 text-danger transition-colors flex items-center gap-2"
                      onClick={logout}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-app focus:outline-none p-2 hover:bg-[color:var(--surface-2)] rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-surface rounded-xl shadow-soft p-4 border border-token mobile-menu animate-slideDown">
            <Link
              to="/"
              className={`block py-3 px-4 rounded-lg mb-1 transition-all ${
                isActive("/") 
                  ? "text-[color:var(--primary)] font-semibold bg-[color:var(--primary-ghost)]" 
                  : "text-secondary hover:bg-[color:var(--surface-2)] hover:text-app"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block py-3 px-4 rounded-lg mb-1 transition-all ${
                isActive("/about") 
                  ? "text-[color:var(--primary)] font-semibold bg-[color:var(--primary-ghost)]" 
                  : "text-secondary hover:bg-[color:var(--surface-2)] hover:text-app"
              }`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/gallery"
              className={`block py-3 px-4 rounded-lg mb-1 transition-all ${
                isActive("/gallery") 
                  ? "text-[color:var(--primary)] font-semibold bg-[color:var(--primary-ghost)]" 
                  : "text-secondary hover:bg-[color:var(--surface-2)] hover:text-app"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`block py-3 px-4 rounded-lg mb-1 transition-all ${
                isActive("/contact") 
                  ? "text-[color:var(--primary)] font-semibold bg-[color:var(--primary-ghost)]" 
                  : "text-secondary hover:bg-[color:var(--surface-2)] hover:text-app"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            {user && (
              <>
                <Link
                  to="/project-submission"
                  className={`block py-3 px-4 rounded-lg mb-1 transition-all ${
                    isActive("/project-submission") 
                      ? "text-[color:var(--primary)] font-semibold bg-[color:var(--primary-ghost)]" 
                      : "text-secondary hover:bg-[color:var(--surface-2)] hover:text-app"
                  }`}
                  onClick={(e) => {
                    setIsOpen(false)
                    handleProjectSubmissionClick(e)
                  }}
                >
                  Project Submission
                </Link>
                <Link
                  to="/profile"
                  className={`block py-3 px-4 rounded-lg mb-1 transition-all ${
                    isActive("/profile") 
                      ? "text-[color:var(--primary)] font-semibold bg-[color:var(--primary-ghost)]" 
                      : "text-secondary hover:bg-[color:var(--surface-2)] hover:text-app"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
              </>
            )}
            <div className="pt-3 mt-2 border-t border-token">
              {!user ? (
                <button
                  onClick={() => {
                    setIsOpen(false)
                    navigate("/auth")
                  }}
                  className="btn-primary w-full text-center py-3 text-base"
                >
                  Sign In
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsOpen(false)
                    logout()
                  }}
                  className="w-full text-danger font-medium py-3 px-4 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
