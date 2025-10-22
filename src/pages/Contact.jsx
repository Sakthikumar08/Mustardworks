"use client"

import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "isa32dkw2y0wij",
          ...formData
        }),
      })

      const result = await response.json()
      if (result.success) {
        alert("Message sent successfully!")
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      alert("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-24 pb-16 bg-app min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-app mb-4">Get In Touch</h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Have a project in mind or need technical assistance? Reach out to us and let's discuss how we can help bring
            your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-surface p-8 rounded-xl shadow-soft">
            <h2 className="text-2xl font-bold text-app mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-app mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-token rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-app mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-token rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-app mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-token rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] transition-colors bg-surface"
                >
                  <option value="">Select a subject</option>
                  <option value="hardware">Hardware Project</option>
                  <option value="iot">IoT Solution</option>
                  <option value="ai">AI/Machine Learning</option>
                  <option value="vlsi">VLSI Design</option>
                  <option value="app">App Development</option>
                  <option value="web">Web Development</option>
                  <option value="laptop">Laptop Upgrade</option>
                  <option value="portrait">Custom Portrait</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-app mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  className="w-full px-4 py-3 border border-token rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] transition-colors bg-surface"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-surface text-app p-8 rounded-xl shadow-soft mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[color:var(--primary-ghost)] p-3 rounded-full mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[color:var(--primary)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-app text-lg">Phone</h3>
                    <p className="text-secondary">+91 94999 22744</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[color:var(--primary-ghost)] p-3 rounded-full mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[color:var(--primary)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-app text-lg">Email</h3>
                    <p className="text-secondary">mustardworks25@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[color:var(--primary-ghost)] p-3 rounded-full mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[color:var(--primary)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-app text-lg">Address</h3>
                    <p className="text-secondary">MustardWorks™
No. 1/1278C, 1st Floor, 3rd Street,
South Bethal Nagar, Injambakkam,
Chennai – 600115, Tamil Nadu, India.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-surface p-8 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold text-app mb-4">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-secondary">Monday - Friday</span>
                  <span className="font-semibold text-[color:var(--primary)]">8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Saturday</span>
                  <span className="font-semibold text-[color:var(--primary)]">10:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Sunday</span>
                  <span className="font-semibold text-[color:var(--primary)]">Closed</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-token">
                <h3 className="text-xl font-semibold text-app mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-[color:var(--primary-ghost)] text-[color:var(--primary)] p-3 rounded-full hover:opacity-90 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-[color:var(--primary-ghost)] text-[color:var(--primary)] p-3 rounded-full hover:opacity-90 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-[color:var(--primary-ghost)] text-[color:var(--primary)] p-3 rounded-full hover:opacity-90 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact