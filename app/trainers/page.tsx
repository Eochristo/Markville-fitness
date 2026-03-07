import { Metadata } from "next"
import { TrainersSection } from "@/components/trainers/trainers-section"

export const metadata: Metadata = {
  title: "Trainers | Markville Fitness",
  description:
    "Meet our certified personal trainers at Markville Fitness. Expert guidance in strength training, cardio, yoga, and more.",
}

export default function TrainersPage() {
  return (
    <main className="min-h-screen bg-background">
      <TrainersSection />
    </main>
  )
}
