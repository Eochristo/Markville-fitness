import { SiteHeader } from "@/components/layout/site-header"
import { ContactInfoCard } from "@/components/contact/contact-info-card"
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
        {/* Hero Section */}
        <section className="px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 space-y-4 text-center">
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground">
                Have questions? We'd love to hear from you. Contact Markville Fitness today.
              </p>
            </div>

            <div className="flex justify-center">
              {/* Contact Info Card - Centered */}
              <div className="w-full max-w-md rounded-lg border border-border bg-card p-8">
                <h2 className="mb-8 text-2xl font-semibold text-foreground">
                  Contact Us
                </h2>
                <ContactInfoCard />
              </div>
            </div>
          </div>
        </section>

        {/* Call Us Section */}
        <CallUsSection />
      </main>
    </>
  )
}
