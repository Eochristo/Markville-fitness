"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import type { Plan, BillingPeriod } from "@/lib/pricing-data"
import { FeatureList } from "./feature-list"
import { HeartbeatButton } from "./heartbeat-button"

interface PricingCardProps {
  plan: Plan
  billingPeriod: BillingPeriod
  index: number
  isGlowing: boolean
  onHover: () => void
  onHoverEnd: () => void
}

export function PricingCard({
  plan,
  billingPeriod,
  index,
  isGlowing,
  onHover,
  onHoverEnd,
}: PricingCardProps) {
  const pricing = plan.pricing[billingPeriod]
  const [isVisible, setIsVisible] = useState(false)
  const [priceKey, setPriceKey] = useState(billingPeriod)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const prevPeriod = useRef(billingPeriod)

  // Staggered fade-in on mount
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), index * 150)
    return () => clearTimeout(timeout)
  }, [index])

  // Smooth price transition
  useEffect(() => {
    if (prevPeriod.current !== billingPeriod) {
      setIsTransitioning(true)
      const timeout = setTimeout(() => {
        setPriceKey(billingPeriod)
        setIsTransitioning(false)
      }, 200)
      prevPeriod.current = billingPeriod
      return () => clearTimeout(timeout)
    }
  }, [billingPeriod])

  const displayPricing = plan.pricing[priceKey]

  return (
    <article
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
      className={cn(
        "relative flex flex-col rounded-2xl border bg-card p-8 transition-all duration-500 ease-out",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0",
        plan.isFeatured ? "z-10 lg:scale-110" : "",
        isGlowing ? "border-transparent" : "border-border"
      )}
      style={{
        boxShadow: isGlowing
          ? "0 0 40px rgba(225, 29, 72, 0.35), 0 0 80px rgba(225, 29, 72, 0.15)"
          : "0 0 0px rgba(225, 29, 72, 0)",
        transition: "box-shadow 0.4s ease, border-color 0.4s ease, opacity 0.6s ease, transform 0.6s ease",
      }}
      aria-label={`${plan.name} plan`}
    >
      {plan.isFeatured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span
            className="inline-block rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground"
            aria-label="Most popular plan"
          >
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-card-foreground">
          {plan.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {plan.description}
        </p>
      </div>

      <div className="mb-8" aria-live="polite" aria-atomic="true">
        <div
          className={cn(
            "flex items-baseline gap-1 transition-all duration-200",
            isTransitioning
              ? "translate-y-2 opacity-0"
              : "translate-y-0 opacity-100"
          )}
        >
          <span className="text-5xl font-extrabold text-card-foreground">
            {"$"}
            {displayPricing.amount}
          </span>
          <span className="text-base text-muted-foreground">
            {displayPricing.label}
          </span>
        </div>
        {priceKey !== "1-month" && (
          <p
            className={cn(
              "mt-1 text-sm text-muted-foreground transition-opacity duration-200",
              isTransitioning ? "opacity-0" : "opacity-100"
            )}
          >
            {"$"}
            {displayPricing.perMonth.toFixed(2)}
            {"/mo equivalent"}
          </p>
        )}
      </div>

      <div className="mb-8 flex-1">
        <FeatureList features={plan.features} />
      </div>

      <HeartbeatButton
        isGlowing={isGlowing}
        ariaLabel={`Choose ${plan.name} Plan`}
      >
        Choose Plan
      </HeartbeatButton>
    </article>
  )
}
