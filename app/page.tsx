import { SiteHeader } from "@/components/layout/site-header"
import { HeroSection } from "@/components/home/hero-section"
import { AmenitiesSection } from "@/components/home/amenities-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"
import { SharedPerks } from "@/components/pricing/shared-perks"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <HeroSection />
        <AmenitiesSection />
        <TestimonialsSection />
        <CTASection />
        {/* Shared Perks Section */}
        <section className="px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SharedPerks />
          </div>
        </section>
      </main>
    </>
  )
}
