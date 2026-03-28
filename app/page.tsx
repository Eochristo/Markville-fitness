import { HeroSection } from "@/components/home/hero-section"
import { AmenitiesSection } from "@/components/home/amenities-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"
import { SharedPerks } from "@/components/pricing/shared-perks"

export default function Page() {
  return (
    <main id="top">
      {/* Fixed Background Hero Image */}
      <div 
        className="fixed inset-0 h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero Section - positioned over the fixed background */}
      <div className="relative z-10">
        <HeroSection />
      </div>

      {/* Main Content - scrolls over the hero */}
      <div className="relative z-10 bg-background">
        <AmenitiesSection />
        <TestimonialsSection />
        <CTASection />
        {/* Shared Perks Section */}
        <section className="px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <SharedPerks />
          </div>
        </section>
      </div>
    </main>
  )
}
