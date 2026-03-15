"use client"

import { TrainerCard } from "./trainer-card"
import { FadeIn, FadeInStagger } from "@/components/ui/fade-in"

const TRAINERS = [
  {
    name: "Ethan",
    specialty: "Strength Training",
  },
  {
    name: "Elias",
    specialty: "HIIT & Cardio",
  },
  {
    name: "Tom",
    specialty: "Functional Fitness",
    imageUrl: "/images/trainers/tom.jpg",
  },
  {
    name: "Rick Court",
    specialty: "Bodybuilding",
    imageUrl: "/images/trainers/rick-court.jpg",
  },
  {
    name: "Lynda",
    specialty: "Yoga & Wellness",
  },
  {
    name: "Portchia",
    specialty: "Personal Training",
    imageUrl: "/images/trainers/portchia.jpg",
  },
]

export function TrainersSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn direction="up" duration={700}>
          <div className="mb-12 text-center md:mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Meet Our Trainers
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Our certified fitness professionals are dedicated to helping you achieve your goals with personalized guidance and expert knowledge.
            </p>
          </div>
        </FadeIn>

        {/* Trainers Grid */}
        <FadeInStagger
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          staggerDelay={100}
          direction="up"
          duration={600}
        >
          {TRAINERS.map((trainer) => (
            <TrainerCard
              key={trainer.name}
              name={trainer.name}
              specialty={trainer.specialty}
              imageUrl={trainer.imageUrl}
            />
          ))}
        </FadeInStagger>

        {/* Future expansion notice */}
        <FadeIn direction="up" delay={300} duration={700}>
          <div className="mt-16 rounded-xl border border-border bg-card/50 p-6 text-center">
            <p className="text-muted-foreground">
              Interested in joining our team?{" "}
              <a
                href="/contact"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Contact us
              </a>{" "}
              to learn about opportunities.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
