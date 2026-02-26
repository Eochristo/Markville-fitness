import { SiteHeader } from "@/components/layout/site-header"
import { CallUsSection } from "@/components/contact/call-us-section"

export const metadata = {
  title: "Contact Markville Fitness",
  description: "Get in touch with Markville Fitness. Phone, email, address, and hours of operation.",
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <CallUsSection />
      </main>
    </>
  )
}
