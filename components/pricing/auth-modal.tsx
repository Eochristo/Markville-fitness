"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"

interface AuthModalProps {
  planName: string
  isOpen: boolean
  onClose: () => void
}

export function AuthModal({ planName, isOpen, onClose }: AuthModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  // Trap focus inside modal
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      dialogRef.current?.focus()
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Sign in to choose ${planName} plan`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-2xl"
        style={{
          animation: "modalIn 0.2s ease-out",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-card-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <h3 className="text-xl font-bold text-card-foreground">
            Get Started
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {"Sign in to continue with the "}
            <span className="font-semibold text-primary">{planName}</span>
            {" plan"}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <a
            href="/login"
            className="flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#BE123C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Log In
          </a>
          <a
            href={`/signup?plan=${encodeURIComponent(planName)}`}
            className="flex w-full items-center justify-center rounded-lg border-2 border-foreground bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            Create Account
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(8px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
