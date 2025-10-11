"use client"

import { useEffect, useMemo, useState } from "react"
import { authService } from "../services/auth"
import { projectsService } from "../services/projects"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const [user, setUser] = useState(null)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    let mounted = true
    const load = async () => {
      try {
        setLoading(true)
        const [u, mine] = await Promise.all([authService.getCurrentUser(), projectsService.getMine().catch(() => [])])
        if (!mounted) return
        const normalizedUser = u?.user || u?.data?.user || u
        setUser(normalizedUser || null)
        setProjects(Array.isArray(mine) ? mine : mine?.data || [])
      } catch (e) {
        setError(e?.response?.data?.message || "Failed to load profile.")
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => {
      mounted = false
    }
  }, [])

  const initials = useMemo(() => {
    const name = user?.name || `${user?.firstName || ""} ${user?.lastName || ""}`.trim()
    return name
      ? name
          .split(" ")
          .map((n) => n[0])
          .slice(0, 2)
          .join("")
          .toUpperCase()
      : "U"
  }, [user])

  const handleLogout = async () => {
    try {
      await authService.logout()
    } finally {
      navigate("/", { replace: true })
      window.location.href = "/"
    }
  }

  if (loading) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[color:var(--primary)]"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <p className="text-[color:var(--danger)]">{error}</p>
      </div>
    )
  }

  return (
    <main className="pt-24 pb-16 min-h-screen bg-app relative">
      {/* animated background */}
      <div className="animated-bg pointer-events-none" aria-hidden="true"></div>

      <div className="container mx-auto px-4 max-w-5xl">
        <section className="bg-surface rounded-2xl shadow-soft p-6 md:p-8">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-[color:var(--primary-ghost)] flex items-center justify-center text-[color:var(--primary)] font-bold">
              {initials}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-app">
                {user?.name || `${user?.firstName || ""} ${user?.lastName || ""}`.trim() || "User"}
              </h1>
              <p className="text-secondary">{user?.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-surface-2 rounded-xl p-5 shadow-subtle">
              <h2 className="text-lg font-semibold text-app mb-3">Personal Details</h2>
              <ul className="text-secondary space-y-2">
                <li>
                  <span className="font-medium text-app">Role:</span> {user?.role || "User"}
                </li>
                <li>
                  <span className="font-medium text-app">Work Domain:</span>{" "}
                  {user?.domain || user?.profile?.domain || "—"}
                </li>
                <li>
                  <span className="font-medium text-app">Organization:</span>{" "}
                  {user?.organization || user?.profile?.organization || "—"}
                </li>
              </ul>
            </div>

            <div className="bg-surface-2 rounded-xl p-5 shadow-subtle">
              <h2 className="text-lg font-semibold text-app mb-3">Account</h2>
              <ul className="text-secondary space-y-2">
                <li>
                  <span className="font-medium text-app">Member since:</span>{" "}
                  {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "—"}
                </li>
                <li>
                  <span className="font-medium text-app">Status:</span> Active
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl md:text-2xl font-bold text-app mb-4">Your Submitted Projects</h2>
          {projects.length === 0 ? (
            <div className="bg-surface rounded-xl p-6 shadow-subtle text-secondary">No projects submitted yet.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p) => {
                const id = p.id || p._id || Math.random().toString(36).slice(2)
                const title = p.title || p.name || "Untitled"
                const status = p.status || "submitted"
                const category = p.category || p.projectType || "other"
                return (
                  <article
                    key={id}
                    className="bg-surface rounded-xl p-5 shadow-soft hover:shadow-lift transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-app">{title}</h3>
                      <span className="text-xs rounded-full px-2 py-1 bg-[color:var(--primary-ghost)] text-[color:var(--primary)]">
                        {String(status).toUpperCase()}
                      </span>
                    </div>
                    <p className="mt-1 text-secondary">Category: {category}</p>
                  </article>
                )
              })}
            </div>
          )}
        </section>

        <div className="mt-12 flex justify-end">
          <button onClick={handleLogout} className="btn-primary">
            Logout
          </button>
        </div>
      </div>
    </main>
  )
}

export default Profile
