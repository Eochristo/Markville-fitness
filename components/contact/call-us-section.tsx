import Link from "next/link"

export function CallUsSection() {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-primary/5 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
          Call Us Today
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Ready to start your fitness journey? Get in touch with our team and take the first step towards your goals.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:905-209-0763"
            className="rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-[#BE123C]"
          >
            📞 Call 905-209-0763
          </a>
          <Link
            href="/pricing"
            className="rounded-lg border-2 border-primary px-8 py-4 text-lg font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            Join Now
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-2 text-xl font-semibold text-foreground">Email</h3>
            <a
              href="mailto:MarkvilleFitness@gmail.com"
              className="text-primary hover:underline"
            >
              MarkvilleFitness@gmail.com
            </a>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-2 text-xl font-semibold text-foreground">Visit Us</h3>
            <p className="text-sm text-muted-foreground">
              190 Bullock Drive<br />
              Markham, Ontario L3P 1V7
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
