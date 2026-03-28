"use client"

import { FadeIn } from "@/components/ui/fade-in"

export function HeroSection() {
  const scrollToAmenities = () => {
    const amenitiesSection = document.getElementById("amenities")
    if (amenitiesSection) {
      amenitiesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center py-20 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-4 w-full">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="space-y-8">
            <FadeIn direction="up" duration={700}>
              <div className="space-y-4">
                <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
                  Transform Your Body, Elevate Your Mind
                </h1>
                <p className="text-balance text-lg text-gray-200 leading-relaxed drop-shadow-md">
                  Welcome to Markville Fitness — where elite training meets personalized coaching. Join hundreds of members achieving their fitness goals with state-of-the-art equipment, expert trainers, and a community that pushes you to excel.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={150} duration={700}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/pricing"
                  className="rounded-lg bg-primary px-8 py-3 text-center font-semibold text-primary-foreground transition-colors hover:bg-[#BE123C] shadow-lg"
                >
                  Join Now
                </a>
                <button
                  onClick={scrollToAmenities}
                  className="rounded-lg border-2 border-white px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-white/10 shadow-lg"
                >
                  Explore Amenities
                </button>
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn direction="up" delay={300} duration={700}>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-sm text-gray-300">Active Members</p>
                </div>
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-2xl font-bold text-primary">25+</p>
                  <p className="text-sm text-gray-300">Expert Trainers</p>
                </div>
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-2xl font-bold text-primary">17</p>
                  <p className="text-sm text-gray-300">Weekly Classes</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <FadeIn direction="up" delay={500} duration={700} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToAmenities}
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm">Scroll to explore</span>
          <svg 
            className="h-6 w-6 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </FadeIn>
    </section>
  )
}
