import { SiteHeader } from "@/components/layout/site-header"
import { PricingSection } from "@/components/pricing/pricing-section"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background">
        <PricingSection />
      </main>
    </>
  )
}
