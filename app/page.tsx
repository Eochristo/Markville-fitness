import { SiteHeader } from "@/components/layout/site-header"
import { HeroSection } from "@/components/home/hero-section"
import { AmenitiesSection } from "@/components/home/amenities-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <HeroSection />
        <AmenitiesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  )
}
