"use client"

import { getScheduleByDay } from "@/lib/classes-data"

export function ClassSchedule() {
  const schedule = getScheduleByDay()

  return (
    <section className="space-y-8 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Class Schedule
        </h1>
        <p className="text-muted-foreground">
          Join our variety of fitness classes led by experienced instructors
        </p>
      </div>

      <div className="mx-auto max-w-6xl space-y-12">
        {schedule.map(({ day, classes }) =>
          classes.length > 0 ? (
            <div key={day} className="space-y-3">
              <h2 className="text-xl font-bold text-primary">{day}</h2>
              <div className="space-y-2">
                {classes.map((cls) => (
                  <div
                    key={cls.id}
                    className="flex flex-col gap-2 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/40 hover:bg-card/80 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">
                        {cls.name}
                      </h3>
                      <p className="text-sm text-primary">
                        Instructor: {cls.instructor}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="whitespace-nowrap text-sm text-muted-foreground">
                        {cls.startTime} - {cls.endTime}
                      </p>
                      <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#BE123C]">
                        Sign Up
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null
        )}
      </div>
    </section>
  )
}
