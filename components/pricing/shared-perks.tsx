import { Tag, Utensils } from "lucide-react"
import { SHARED_PERKS } from "@/lib/pricing-data"

const ICON_MAP = {
  tag: Tag,
  utensils: Utensils,
} as const

export function SharedPerks() {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-secondary/50 px-6 py-5">
      <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Included with every plan
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
        {SHARED_PERKS.map((perk) => {
          const Icon = ICON_MAP[perk.icon]
          return (
            <div key={perk.title} className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {perk.title}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
