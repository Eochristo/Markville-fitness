"use client"

import { cn } from "@/lib/utils"
import { BILLING_OPTIONS, type BillingPeriod } from "@/lib/pricing-data"

interface BillingToggleProps {
  selected: BillingPeriod
  onChange: (period: BillingPeriod) => void
}

export function BillingToggle({ selected, onChange }: BillingToggleProps) {
  const selectedIndex = BILLING_OPTIONS.findIndex((o) => o.key === selected)

  return (
    <div
      className="relative inline-flex items-center rounded-full bg-secondary p-1"
      role="tablist"
      aria-label="Billing period"
    >
      {/* Animated sliding pill */}
      <span
        className="absolute top-1 bottom-1 rounded-full bg-primary transition-all duration-300 ease-out"
        style={{
          width: `calc(${100 / BILLING_OPTIONS.length}% - 0px)`,
          left: `calc(${(selectedIndex * 100) / BILLING_OPTIONS.length}% + 0px)`,
        }}
        aria-hidden="true"
      />

      {BILLING_OPTIONS.map((option) => {
        const isActive = selected === option.key
        return (
          <button
            key={option.key}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            className={cn(
              "relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              isActive
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
            onClick={() => onChange(option.key)}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
