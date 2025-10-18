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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[color:var(--nav-bg)] shadow-soft" : "bg-[color:var(--nav-bg)]"}`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* left */}
          <Link to="/" className="flex items-center">
  <img 
    src={MWlogo}
    alt="MustardWorks" 
    className="h-8 w-8" // Adjust height and width as needed
  />
  <span className="text-xl font-bold text-app ml-3">MustardWorks</span>
</Link>

          {/* center links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`transition-colors ${isActive("/") ? "text-[color:var(--primary)] font-semibold" : "text-secondary hover:text-app"}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${isActive("/about") ? "text-[color:var(--primary)] font-semibold" : "text-secondary hover:text-app"}`}
            >
              About Us
            </Link>
            <Link
              to="/gallery"
              className={`transition-colors ${isActive("/gallery") ? "text-[color:var(--primary)] font-semibold" : "text-secondary hover:text-app"}`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${isActive("/contact") ? "text-[color:var(--primary)] font-semibold" : "text-secondary hover:text-app"}`}
            >
              Contact Us
            </Link>
            {user && (
              <Link
                to="/project-submission"
                onClick={handleProjectSubmissionClick}
                className={`transition-colors ${isActive("/project-submission") ? "text-[color:var(--primary)] font-semibold" : "text-secondary hover:text-app"}`}
              >
                Project Submission
              </Link>
            )}
          </div>

          {/* right controls */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            {!user ? (
              <button onClick={() => navigate("/auth")} className="btn-primary">
                Sign In
              </button>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowMenu((s) => !s)}
                  className="h-9 w-9 rounded-full bg-[color:var(--primary-ghost)] text-[color:var(--primary)] font-bold flex items-center justify-center shadow-subtle"
                  aria-haspopup="menu"
                  aria-expanded={showMenu}
                >
                  {initials(user)}
                </button>
                {showMenu && (
                  <div
                    role="menu"
                    className="absolute right-0 mt-2 w-44 rounded-xl bg-surface shadow-soft border border-[color:var(--border)] overflow-hidden"
                  >
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-[color:var(--surface-2)] text-app"
                      onClick={() => {
                        setShowMenu(false)
                        navigate("/profile")
                      }}
                    >
                      Profile
                    </button>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-[color:var(--surface-2)] text-danger"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-app focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12M6 12h12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 bg-surface rounded-lg shadow-soft p-4">
            <Link
              to="/"
              className={`block py-2 ${isActive("/") ? "text-[color:var(--primary)] font-semibold" : "text-secondary"}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block py-2 ${isActive("/about") ? "text-[color:var(--primary)] font-semibold" : "text-secondary"}`}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/gallery"
              className={`block py-2 ${isActive("/gallery") ? "text-[color:var(--primary)] font-semibold" : "text-secondary"}`}
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`block py-2 ${isActive("/contact") ? "text-[color:var(--primary)] font-semibold" : "text-secondary"}`}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            {user && (
              <>
                <Link
                  to="/project-submission"
                  className={`block py-2 ${isActive("/project-submission") ? "text-[color:var(--primary)] font-semibold" : "text-secondary"}`}
                  onClick={(e) => {
                    setIsOpen(false)
                    handleProjectSubmissionClick(e)
                  }}
                >
                  Project Submission
                </Link>
                <Link
                  to="/profile"
                  className={`block py-2 ${isActive("/profile") ? "text-[color:var(--primary)] font-semibold" : "text-secondary"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
              </>
            )}
            <div className="pt-2">
              {!user ? (
                <button
                  onClick={() => {
                    setIsOpen(false)
                    navigate("/auth")
                  }}
                  className="btn-primary w-full"
                >
                  Sign In
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsOpen(false)
                    logout()
                  }}
                  className="btn-primary w-full"
                >
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
