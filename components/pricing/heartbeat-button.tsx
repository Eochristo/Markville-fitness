"use client"

import { cn } from "@/lib/utils"

interface HeartbeatButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  ariaLabel?: string
  isFeatured?: boolean
}

export function HeartbeatButton({
  children,
  className,
  onClick,
  ariaLabel,
  isFeatured = false,
}: HeartbeatButtonProps) {
  if (isFeatured) {
    return (
      <button
        className={cn(
          "w-full rounded-lg px-6 py-3 text-sm font-semibold transition-colors",
          "bg-primary text-primary-foreground hover:bg-[#BE123C]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "animate-heartbeat",
          className
        )}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      className={cn(
        "w-full rounded-lg border-2 border-foreground px-6 py-3 text-sm font-semibold transition-colors",
        "bg-transparent text-foreground",
        "hover:bg-foreground hover:text-background",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2",
        className
      )}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
