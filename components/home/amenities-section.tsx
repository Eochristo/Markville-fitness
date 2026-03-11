"use client"

import { FadeIn, FadeInStagger } from "@/components/ui/fade-in"

export function AmenitiesSection() {
  const amenities = [
    {
      icon: "💪",
      title: "Strength Training",
      description: "Complete range of free weights, machines, and resistance equipment for all fitness levels.",
    },
    {
      icon: "🏃",
      title: "Cardio Zone",
      description: "Latest treadmills, bikes, ellipticals, and rowing machines with individual entertainment screens.",
    },
    {
      icon: "🧘",
      title: "Yoga Studio",
      description: "Dedicated space for yoga, pilates, and flexibility training with expert instructors.",
    },
    {
      icon: "👩",
      title: "Women's Only Section",
      description: "Dedicated space designed exclusively for women members, ensuring comfort and a supportive community.",
    },
    {
      icon: "👥",
      title: "Group Classes",
      description: "23+ weekly classes including boot camp, zumba, dance, and more.",
    },
    {
      icon: "🎯",
      title: "Personal Training",
      description: "One-on-one coaching with certified trainers tailored to your fitness goals.",
    },
  ]

  return (
    <section
      id="amenities"
      className="bg-background px-4 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn direction="up" duration={700}>
          <div className="mb-16 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              World-Class Amenities
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to reach your fitness goals
            </p>
          </div>
        </FadeIn>

        <FadeInStagger 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={100}
          direction="up"
          duration={600}
        >
          {amenities.map((amenity, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col"
            >
              <div className="mb-4 text-4xl">{amenity.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {amenity.description}
              </p>
            </div>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
