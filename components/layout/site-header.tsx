"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LiveHeartRateMonitor } from "./live-heart-rate-monitor"

function UserIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Classes", href: "/classes" },
  { label: "Trainers", href: "/trainers" },
  { label: "Contact", href: "/contact" },
]

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/markvillefitness?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100057353632345",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/mulch31",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="flex h-6 w-6 flex-col items-center justify-center gap-[5px]">
      <span
        className={cn(
          "block h-[2px] w-5 rounded-full bg-foreground transition-all duration-300",
          open && "translate-y-[7px] rotate-45"
        )}
      />
      <span
        className={cn(
          "block h-[2px] w-5 rounded-full bg-foreground transition-all duration-300",
          open && "opacity-0"
        )}
      />
      <span
        className={cn(
          "block h-[2px] w-5 rounded-full bg-foreground transition-all duration-300",
          open && "-translate-y-[7px] -rotate-45"
        )}
      />
    </div>
  )
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const loginDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  // Close login dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target as Node)) {
        setLoginDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Lock body scroll when login modal is open
  useEffect(() => {
    if (loginModalOpen) {
      document.body.style.overflow = "hidden"
    } else if (!mobileOpen) {
      document.body.style.overflow = ""
    }
  }, [loginModalOpen, mobileOpen])

  const openLoginModal = () => {
    setLoginDropdownOpen(false)
    setMobileOpen(false)
    setShowForgotPassword(false)
    setLoginModalOpen(true)
  }

  const closeLoginModal = () => {
    setLoginModalOpen(false)
    setShowForgotPassword(false)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-500 ease-in-out",
        mobileOpen
          ? "bg-black border-b border-black"
          : scrolled
            ? "border-b border-border/50 bg-background/90 backdrop-blur-lg"
            : "bg-background"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo + Slogan */}
        <div className="flex items-center gap-3">
          <Link 
            href="/#top" 
            className="group flex flex-col items-center min-h-[44px] min-w-[44px] justify-center active:scale-95 transition-transform"
            aria-label="Go to home page"
            onClick={() => {
              setMobileOpen(false)
              if (window.location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            <span className="font-oleo text-3xl text-foreground border-b-2 border-foreground pb-0.5 leading-none">
              Markville
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-foreground mt-1">
              Fitness
            </span>
          </Link>
          <span className="ml-3 hidden text-xs text-muted-foreground lg:block">
            Push Beyond Limits
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right side: heart monitor + socials + CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <LiveHeartRateMonitor />
          <div className="flex items-center gap-1">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <Link
            href="/pricing"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#BE123C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Join Now
          </Link>

          {/* Login Button with Dropdown */}
          <div className="relative" ref={loginDropdownRef}>
            <button
              onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
              className="flex items-center justify-center rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50"
              aria-label="Account menu"
              aria-expanded={loginDropdownOpen}
            >
              <UserIcon className="h-6 w-6" />
            </button>

            {/* Dropdown Menu */}
            <div
              className={cn(
                "absolute right-0 top-full mt-2 w-48 rounded-lg border border-border bg-card shadow-lg transition-all duration-200",
                loginDropdownOpen
                  ? "pointer-events-auto opacity-100 translate-y-0"
                  : "pointer-events-none opacity-0 -translate-y-2"
              )}
            >
              <div className="py-2">
                <button
                  onClick={openLoginModal}
                  className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted/50 transition-colors"
                >
                  Log In
                </button>
                <Link
                  href="/pricing"
                  onClick={() => setLoginDropdownOpen(false)}
                  className="block w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted/50 transition-colors"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="relative z-50 flex items-center justify-center rounded-md p-2 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </div>

      {/* Mobile overlay nav */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-black transition-opacity duration-500 ease-in-out md:hidden",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div 
          className={cn(
            "flex flex-1 flex-col items-center justify-center gap-6 px-6 pt-16 transition-all duration-500 ease-in-out",
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          )}
        >
          <nav className="flex flex-col items-center gap-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-2xl font-semibold text-white transition-all hover:text-primary drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]",
                  mobileOpen
                    ? "translate-y-0 opacity-100 brightness-110"
                    : "translate-y-4 opacity-0"
                )}
                style={{
                  transitionDelay: mobileOpen ? `${idx * 75}ms` : "0ms",
                  transitionDuration: "500ms",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "mt-4 w-full max-w-xs rounded-lg bg-primary px-6 py-3 text-center text-base font-semibold text-primary-foreground transition-all hover:bg-[#BE123C] shadow-lg shadow-primary/30",
              mobileOpen
                ? "translate-y-0 opacity-100 brightness-110"
                : "translate-y-4 opacity-0"
            )}
            style={{
              transitionDelay: mobileOpen ? `${NAV_LINKS.length * 75 + 50}ms` : "0ms",
              transitionDuration: "500ms",
            }}
          >
            Join Now
          </Link>

          {/* Login/Account Options */}
          <div 
            className={cn(
              "mt-4 flex items-center gap-4 transition-all",
              mobileOpen
                ? "translate-y-0 opacity-100 brightness-110"
                : "translate-y-4 opacity-0"
            )}
            style={{
              transitionDelay: mobileOpen ? `${NAV_LINKS.length * 75 + 100}ms` : "0ms",
              transitionDuration: "500ms",
            }}
          >
            <button
              onClick={openLoginModal}
              className="flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <UserIcon className="h-5 w-5" />
              Log In
            </button>
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-primary brightness-110 hover:underline"
            >
              Create Account
            </Link>
          </div>

          {/* Heart Rate Monitor */}
          <div 
            className={cn(
              "mt-4 transition-all",
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            )}
            style={{
              transitionDelay: mobileOpen ? `${NAV_LINKS.length * 75 + 150}ms` : "0ms",
              transitionDuration: "500ms",
            }}
          >
            <LiveHeartRateMonitor />
          </div>

          {/* Slogan */}
          <p 
            className={cn(
              "mt-4 text-sm text-gray-300 transition-all",
              mobileOpen
                ? "translate-y-0 opacity-100 brightness-110"
                : "translate-y-4 opacity-0"
            )}
            style={{
              transitionDelay: mobileOpen ? `${NAV_LINKS.length * 75 + 200}ms` : "0ms",
              transitionDuration: "500ms",
            }}
          >
            Push Beyond Limits
          </p>

          {/* Social icons */}
          <div 
            className={cn(
              "flex items-center gap-4 transition-all",
              mobileOpen
                ? "translate-y-0 opacity-100 brightness-125"
                : "translate-y-4 opacity-0"
            )}
            style={{
              transitionDelay: mobileOpen ? `${NAV_LINKS.length * 75 + 250}ms` : "0ms",
              transitionDuration: "500ms",
            }}
          >
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-300 transition-colors hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300",
          loginModalOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        onClick={closeLoginModal}
      >
        <div
          className={cn(
            "relative w-full max-w-md mx-4 rounded-xl border border-border bg-card p-6 shadow-2xl transition-all duration-300",
            loginModalOpen
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-4 opacity-0 scale-95"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={closeLoginModal}
            className="absolute right-4 top-4 p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close login modal"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {!showForgotPassword ? (
            <>
              {/* Login Form */}
              <div className="text-center mb-6">
                <UserIcon className="h-12 w-12 mx-auto text-primary mb-3" />
                <h2 className="text-2xl font-bold text-foreground">Welcome Back</h2>
                <p className="text-sm text-muted-foreground mt-1">Sign in to your account</p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary py-2.5 font-semibold text-primary-foreground transition-colors hover:bg-[#BE123C] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                >
                  Log In
                </button>
              </form>

              <div className="mt-4 text-center">
                <button
                  onClick={() => setShowForgotPassword(true)}
                  className="text-sm text-primary hover:underline transition-colors"
                >
                  Forgot your password?
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  {"Don't have an account? "}
                  <Link
                    href="/pricing"
                    onClick={closeLoginModal}
                    className="text-primary font-medium hover:underline"
                  >
                    Create Account
                  </Link>
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Forgot Password Form */}
              <div className="text-center mb-6">
                <div className="h-12 w-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-primary">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-foreground">Reset Password</h2>
                <p className="text-sm text-muted-foreground mt-1">Enter your email to receive a reset link</p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label htmlFor="reset-email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="reset-email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary py-2.5 font-semibold text-primary-foreground transition-colors hover:bg-[#BE123C] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                >
                  Send Reset Link
                </button>
              </form>

              <div className="mt-4 text-center">
                <button
                  onClick={() => setShowForgotPassword(false)}
                  className="text-sm text-primary hover:underline transition-colors"
                >
                  Back to login
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
