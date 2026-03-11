"use client"

import { FadeIn, FadeInStagger } from "@/components/ui/fade-in"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Fitness Enthusiast",
      text: "Markville Fitness transformed my life. The trainers are incredibly supportive and the facility is top-notch. I've never felt more motivated to achieve my goals!",
      rating: 5,
    },
    {
      name: "James Rodriguez",
      role: "Marathon Runner",
      text: "The variety of classes and equipment here is unmatched. Whether it's cardio training or strength building, everything I need is under one roof.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Yoga Practitioner",
      text: "The yoga studio is serene and the instructors are knowledgeable. It's the perfect place to balance intensity with mindfulness.",
      rating: 5,
    },
  ]

  return (
    <section className="bg-background/50 px-4 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn direction="up" duration={700}>
          <div className="mb-16 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Member Success Stories
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real transformations from real members
            </p>
          </div>
        </FadeIn>

        <FadeInStagger 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={150}
          direction="up"
          duration={600}
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border/50 bg-card p-8 shadow-lg transition-all hover:shadow-xl hover:shadow-primary/20"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-lg text-primary">
                    ★
                  </span>
                ))}
              </div>

              <p className="mb-6 text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-primary">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
