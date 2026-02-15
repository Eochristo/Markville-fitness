import { Check } from "lucide-react"

interface FeatureListProps {
  features: string[]
}

export function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="flex flex-col gap-3" role="list">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-3">
          <Check
            className="mt-0.5 h-5 w-5 shrink-0 text-primary"
            aria-hidden="true"
          />
          <span className="text-sm text-foreground">{feature}</span>
        </li>
      ))}
    </ul>
  )
}
