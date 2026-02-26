"use client"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
          placeholder="Tell us how we can help..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground transition-colors hover:bg-[#BE123C] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      >
        {submitted ? "Message Sent!" : "Send Message"}
      </button>

      {submitted && (
        <div className="rounded-lg bg-primary/10 border border-primary/50 p-4">
          <p className="text-sm text-primary text-center">
            Thank you for your message! We'll get back to you soon.
          </p>
        </div>
      )}
    </form>
  )
}
