"use client"

import { motion, useReducedMotion } from "framer-motion"
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
  const shouldReduceMotion = useReducedMotion()

  if (isFeatured) {
    return (
      <motion.button
        className={cn(
          "w-full rounded-lg px-6 py-3 text-sm font-semibold transition-colors",
          "bg-primary text-primary-foreground hover:bg-[#BE123C]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          className
        )}
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.05, 1, 1.05, 1],
                boxShadow: [
                  "0 0 0px rgba(225,29,72,0.4)",
                  "0 0 20px rgba(225,29,72,0.6)",
                  "0 0 0px rgba(225,29,72,0.4)",
                  "0 0 20px rgba(225,29,72,0.6)",
                  "0 0 0px rgba(225,29,72,0.4)",
                ],
              }
        }
        transition={
          shouldReduceMotion
            ? {}
            : {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                times: [0, 0.2, 0.4, 0.6, 1],
              }
        }
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </motion.button>
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
