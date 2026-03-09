import { HeroSection } from "@/components/home/hero-section"
import { AmenitiesSection } from "@/components/home/amenities-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"
import { SharedPerks } from "@/components/pricing/shared-perks"
import { DealsBanner } from "@/components/home/deals-banner"

export default function Page() {
  return (
    <main id="top" className="bg-background">
        {/* Deals Banner - Set isVisible={true} to display promotional banner */}
        <DealsBanner
          isVisible={false}
          imageUrl="/images/deals/current-deal.jpg"
          imageAlt="Current promotional deal"
          headline="Limited Time Offer"
          subheadline="Join now and get your first month free!"
          linkUrl="/pricing"
          dismissible={true}
        />
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
  )
}
