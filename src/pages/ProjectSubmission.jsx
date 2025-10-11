"use client"

import { useState } from "react"
import { projectsService } from "../services/projects"

const ProjectSubmission = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  })

  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [submitSuccess, setSubmitSuccess] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setSubmitError("")
    setSubmitSuccess("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError("")
    setSubmitSuccess("")

    try {
      // send to protected user route: POST /projects/submit
      // map fields as-is; backend validator should accept user fields
      await projectsService.submit({
        name: formData.name,
        email: formData.email,
        projectType: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        description: formData.description,
      })

      setSubmitSuccess("Project details submitted successfully! We will get back to you soon.")
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
      })
    } catch (err) {
      const msg = err?.response?.data?.message || "Submission failed. Please ensure you are signed in and try again."
      setSubmitError(msg)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="project" className="py-20 bg-app">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-app mb-4">Project Submission</h2>
        <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
          Have an idea for a project? Tell us about it and we'll help you bring it to life.
        </p>

        <div className="max-w-3xl mx-auto bg-surface p-8 rounded-lg shadow-soft">
          {submitError && (
            <div className="mb-4 bg-[color:var(--danger)]/10 border border-[color:var(--danger)]/30 text-[color:var(--danger)] px-4 py-3 rounded-lg text-sm">
              {submitError}
            </div>
          )}
          {submitSuccess && (
            <div className="mb-4 bg-[color:var(--accent)]/10 border border-[color:var(--accent)]/30 text-[color:var(--accent)] px-4 py-3 rounded-lg text-sm">
              {submitSuccess}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-app"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-app"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-secondary mb-1">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-app"
                >
                  <option value="">Select a category</option>
                  <option value="hardware">Hardware</option>
                  <option value="embedded">Embedded Systems</option>
                  <option value="iot">IoT</option>
                  <option value="ev">E-Vehicles</option>
                  <option value="ai">AI</option>
                  <option value="vlsi">VLSI</option>
                  <option value="app">App Development</option>
                  <option value="web">Web Solutions</option>
                  <option value="laptop">Laptop Upgrade</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-secondary mb-1">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-app"
                >
                  <option value="">Select budget range</option>
                  <option value="<1000">Less than $1,000</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-25000">$10,000 - $25,000</option>
                  <option value=">25000">More than $25,000</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-secondary mb-1">
                Expected Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-app"
              >
                <option value="">Select timeline</option>
                <option value="<1month">Less than 1 month</option>
                <option value="1-3months">1-3 months</option>
                <option value="3-6months">3-6 months</option>
                <option value="6-12months">6-12 months</option>
                <option value=">12months">More than 12 months</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-secondary mb-1">
                Project Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="6"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-app"
                placeholder="Please describe your project in detail..."
              ></textarea>
            </div>

            <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
              {submitting ? "Submitting..." : "Submit Project"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ProjectSubmission
