"use client"

import { cn } from "@/lib/utils"

interface HeartbeatButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  ariaLabel?: string
  isGlowing?: boolean
}

export function HeartbeatButton({
  children,
  className,
  onClick,
  ariaLabel,
  isGlowing = false,
}: HeartbeatButtonProps) {
  return (
    <button
      className={cn(
        "w-full rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-400",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        isGlowing
          ? "bg-primary text-primary-foreground hover:bg-[#BE123C] animate-heartbeat"
          : "border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background",
        className
      )}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
