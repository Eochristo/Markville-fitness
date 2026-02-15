"use client"

import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Plan, BillingPeriod } from "@/lib/pricing-data"
import { FeatureList } from "./feature-list"
import { HeartbeatButton } from "./heartbeat-button"

interface PricingCardProps {
  plan: Plan
  billingPeriod: BillingPeriod
  index: number
}

export function PricingCard({ plan, billingPeriod, index }: PricingCardProps) {
  const shouldReduceMotion = useReducedMotion()
  const pricing = plan.pricing[billingPeriod]

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.6, ease: "easeOut", delay: index * 0.15 }
      }
      className={cn(
        "relative flex flex-col rounded-2xl border bg-card p-8",
        plan.isFeatured
          ? "z-10 border-transparent lg:scale-110"
          : "border-border"
      )}
      style={
        plan.isFeatured
          ? { boxShadow: "0 0 40px rgba(225, 29, 72, 0.3)" }
          : undefined
      }
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
        <h3 className="text-2xl font-bold text-card-foreground">{plan.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
      </div>

      <div className="mb-8" aria-live="polite" aria-atomic="true">
        <AnimatePresence mode="wait">
          <motion.div
            key={billingPeriod}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            className="flex items-baseline gap-1"
          >
            <span className="text-5xl font-extrabold text-card-foreground">
              {"$"}
              {pricing.amount}
            </span>
            <span className="text-base text-muted-foreground">
              {pricing.label}
            </span>
          </motion.div>
        </AnimatePresence>
        {billingPeriod !== "1-month" && (
          <AnimatePresence mode="wait">
            <motion.p
              key={`per-month-${billingPeriod}`}
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={shouldReduceMotion ? {} : { opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2, delay: 0.1 }}
              className="mt-1 text-sm text-muted-foreground"
            >
              {"$"}
              {pricing.perMonth.toFixed(2)}
              {"/mo equivalent"}
            </motion.p>
          </AnimatePresence>
        )}
      </div>

      <div className="mb-8 flex-1">
        <FeatureList features={plan.features} />
      </div>

      <HeartbeatButton
        isFeatured={plan.isFeatured}
        ariaLabel={`Choose ${plan.name} Plan`}
      >
        Choose Plan
      </HeartbeatButton>
    </motion.article>
  )
}
