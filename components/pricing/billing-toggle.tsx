"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { BILLING_OPTIONS, type BillingPeriod } from "@/lib/pricing-data"

interface BillingToggleProps {
  selected: BillingPeriod
  onChange: (period: BillingPeriod) => void
}

export function BillingToggle({ selected, onChange }: BillingToggleProps) {
  return (
    <div
      className="inline-flex items-center rounded-full bg-secondary p-1"
      role="tablist"
      aria-label="Billing period"
    >
      {BILLING_OPTIONS.map((option) => {
        const isActive = selected === option.key
        return (
          <button
            key={option.key}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            className={cn(
              "relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            )}
            onClick={() => onChange(option.key)}
          >
            {isActive && (
              <motion.span
                layoutId="billing-active-pill"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}
