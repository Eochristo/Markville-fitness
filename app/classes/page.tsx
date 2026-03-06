import { Metadata } from "next"
import { ClassSchedule } from "@/components/classes/class-schedule"

export const metadata: Metadata = {
  title: "Classes | Markville Fitness",
  description:
    "Explore our full fitness class schedule at Markville Fitness. Yoga, boot camp, zumba, dance, body tone, and more with certified instructors.",
}

export default function ClassesPage() {
  return (
    <main className="min-h-screen bg-background">
      <ClassSchedule />
    </main>
  )
}
