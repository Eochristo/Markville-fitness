"use client"

import { useState, useCallback } from "react"
import { PLANS, type BillingPeriod } from "@/lib/pricing-data"
import { BillingToggle } from "./billing-toggle"
import { PricingCard } from "./pricing-card"
import { SharedPerks } from "./shared-perks"
import { AuthModal } from "./auth-modal"

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("1-month")
  const [hoveredPlanId, setHoveredPlanId] = useState<string | null>(null)
  const [selectedPlanName, setSelectedPlanName] = useState<string | null>(null)
  const closeAuth = useCallback(() => setSelectedPlanName(null), [])

  return (
    <section
      className="px-4 py-16 sm:py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <h2
            id="pricing-heading"
            className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Choose Your Plan
          </h2>
          <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
            Find the membership that fits your fitness goals. Upgrade or
            downgrade anytime.
          </p>
          <div className="mt-2">
            <BillingToggle
              selected={billingPeriod}
              onChange={setBillingPeriod}
            />
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mx-auto grid max-w-sm grid-cols-1 items-stretch gap-8 md:max-w-none md:grid-cols-3 lg:gap-4">
          {PLANS.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingPeriod={billingPeriod}
              index={index}
              isGlowing={hoveredPlanId === plan.id}
              onHover={() => setHoveredPlanId(plan.id)}
              onHoverEnd={() => setHoveredPlanId(null)}
              onChoosePlan={() => setSelectedPlanName(plan.name)}
            />
          ))}
        </div>

        <AuthModal
          planName={selectedPlanName ?? ""}
          isOpen={selectedPlanName !== null}
          onClose={closeAuth}
        />

        {/* Shared Perks */}
        <div className="mt-16">
          <SharedPerks />
        </div>

        {/* Micro-copy */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          No commitment, cancel anytime. Existing members can change plans at
          any time.
        </p>
      </div>
    </section>
  )
}
