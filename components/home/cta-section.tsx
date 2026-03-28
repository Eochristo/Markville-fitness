"use client"

import Link from "next/link"
import { FadeIn } from "@/components/ui/fade-in"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-20 sm:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <FadeIn direction="up" duration={700}>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Ready to Start Your Transformation?
          </h2>
          <p className="mt-6 text-balance text-lg text-muted-foreground">
            Join Markville Fitness today and get access to everything you need to achieve your goals. First month is 50% off for new members.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={150} duration={700}>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/pricing"
              className="rounded-lg bg-primary px-8 py-4 text-center text-lg font-semibold text-primary-foreground transition-colors hover:bg-[#BE123C]"
            >
              View Membership Plans
            </Link>
            <a
              href="tel:+16479876543"
              className="rounded-lg border-2 border-foreground px-8 py-4 text-center text-lg font-semibold text-foreground transition-colors hover:bg-foreground/10"
            >
              Call Us Today
            </a>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={300} duration={700}>
          <p className="mt-8 text-sm text-muted-foreground">
            No long-term contracts • Cancel anytime • 24/7 member support
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
