"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LiveHeartRateMonitor } from "./live-heart-rate-monitor"

const NAV_LINKS = [
  { label: "Classes", href: "/classes" },
  { label: "Trainers", href: "#trainers" },
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
    href: "https://facebook.com/MarkvilleFitness",
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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/90 backdrop-blur-lg"
          : "bg-background"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo + Slogan */}
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-2.5">
            {/* Dumbbell icon as logo mark */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-primary-foreground"
              >
                {/* Left plate */}
                <rect x="2" y="8" width="3" height="8" rx="0.5" />
                {/* Left handle */}
                <rect x="5.5" y="9" width="2" height="6" rx="1" />
                {/* Center bar */}
                <rect x="8" y="10" width="8" height="4" rx="0.5" />
                {/* Right handle */}
                <rect x="16.5" y="9" width="2" height="6" rx="1" />
                {/* Right plate */}
                <rect x="19" y="8" width="3" height="8" rx="0.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-foreground leading-none">
                MARKVILLE
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary leading-none mt-0.5">
                Fitness
              </span>
            </div>
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
          "fixed inset-0 z-40 flex flex-col bg-background transition-all duration-300 md:hidden",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6">
          <nav className="flex flex-col items-center gap-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="mt-4 w-full max-w-xs rounded-lg bg-primary px-6 py-3 text-center text-base font-semibold text-primary-foreground transition-colors hover:bg-[#BE123C]"
          >
            Join Now
          </Link>

          {/* Slogan */}
          <p className="mt-6 text-sm text-muted-foreground">Push Beyond Limits</p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
