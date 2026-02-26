"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"

type GymExperience = "experienced" | "first-time" | null

export function SignupForm() {
  const searchParams = useSearchParams()
  const planName = searchParams.get("plan") ?? "Starter"

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [dob, setDob] = useState("")
  const [gymExperience, setGymExperience] = useState<GymExperience>(null)
  const [submitted, setSubmitted] = useState(false)

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 10)
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }

  function formatDob(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 8)
    if (digits.length <= 2) return digits
    if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="w-full max-w-md rounded-2xl border border-border bg-card p-10 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <svg
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-card-foreground">
            Welcome to Markville Fitness!
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {"Your "}
            <span className="font-semibold text-primary">{planName}</span>
            {" account has been created. Check your email for next steps."}
          </p>
          <a
            href="/"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#BE123C]"
          >
            Back to Plans
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">
        {/* Back link */}
        <a
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to plans
        </a>

        <div className="rounded-2xl border border-border bg-card p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-card-foreground">
              Create Your Account
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {"Signing up for the "}
              <span className="font-semibold text-primary">{planName}</span>
              {" plan"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-card-foreground"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-card-foreground"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-card-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-card-foreground"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                placeholder="(555) 123-4567"
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="dob"
                className="text-sm font-medium text-card-foreground"
              >
                Date of Birth
              </label>
              <input
                id="dob"
                type="text"
                required
                value={dob}
                onChange={(e) => setDob(formatDob(e.target.value))}
                placeholder="MM/DD/YYYY"
                maxLength={10}
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Gym experience checklist */}
            <fieldset className="flex flex-col gap-2">
              <legend className="mb-1 text-sm font-medium text-card-foreground">
                Gym Experience
              </legend>
              <label
                className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-colors ${
                  gymExperience === "experienced"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-muted-foreground/30"
                }`}
              >
                <input
                  type="radio"
                  name="gymExperience"
                  value="experienced"
                  checked={gymExperience === "experienced"}
                  onChange={() => setGymExperience("experienced")}
                  className="sr-only"
                  required
                />
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                    gymExperience === "experienced"
                      ? "border-primary bg-primary"
                      : "border-muted-foreground/40"
                  }`}
                >
                  {gymExperience === "experienced" && (
                    <span className="h-2 w-2 rounded-full bg-primary-foreground" />
                  )}
                </span>
                <span className="text-sm text-card-foreground">
                  I have worked out at a gym before
                </span>
              </label>

              <label
                className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-colors ${
                  gymExperience === "first-time"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-muted-foreground/30"
                }`}
              >
                <input
                  type="radio"
                  name="gymExperience"
                  value="first-time"
                  checked={gymExperience === "first-time"}
                  onChange={() => setGymExperience("first-time")}
                  className="sr-only"
                />
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                    gymExperience === "first-time"
                      ? "border-primary bg-primary"
                      : "border-muted-foreground/40"
                  }`}
                >
                  {gymExperience === "first-time" && (
                    <span className="h-2 w-2 rounded-full bg-primary-foreground" />
                  )}
                </span>
                <span className="text-sm text-card-foreground">
                  This is my first time signing up at a gym
                </span>
              </label>
            </fieldset>

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#BE123C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
