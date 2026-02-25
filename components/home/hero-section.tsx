export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      {/* Background blur effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Transform Your Body, Elevate Your Mind
              </h1>
              <p className="text-balance text-lg text-muted-foreground leading-relaxed">
                Welcome to Markville Fitness — where elite training meets personalized coaching. Join hundreds of members achieving their fitness goals with state-of-the-art equipment, expert trainers, and a community that pushes you to excel.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/pricing"
                className="rounded-lg bg-primary px-8 py-3 text-center font-semibold text-primary-foreground transition-colors hover:bg-[#BE123C]"
              >
                Join Now
              </a>
              <a
                href="#amenities"
                className="rounded-lg border-2 border-foreground px-8 py-3 text-center font-semibold text-foreground transition-colors hover:bg-foreground/10"
              >
                Explore Amenities
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">25+</p>
                <p className="text-sm text-muted-foreground">Expert Trainers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">23</p>
                <p className="text-sm text-muted-foreground">Weekly Classes</p>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative h-96 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-primary/20 to-background shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/30">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M6.5 6.5h11M6.5 17.5h11M12 6.5v11M2 8h4v8H2M18 8h4v8h-4M5 6h2v12H5M17 6h2v12h-2" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-foreground">
                  State-of-the-Art Facility
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Modern equipment & premium amenities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
