export type BillingPeriod = "1-month" | "3-month" | "yearly"

export interface PlanPricing {
  amount: number
  perMonth: number
  label: string
}

export interface Plan {
  id: string
  name: string
  description: string
  pricing: Record<BillingPeriod, PlanPricing>
  features: string[]
  isFeatured: boolean
}

export const BILLING_OPTIONS: { key: BillingPeriod; label: string }[] = [
  { key: "1-month", label: "1 Month" },
  { key: "3-month", label: "3 Months" },
  { key: "yearly", label: "Yearly" },
]

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for getting started on your fitness journey",
    pricing: {
      "1-month": { amount: 29, perMonth: 29, label: "/mo" },
      "3-month": { amount: 79, perMonth: 26.33, label: "/3 mo" },
      yearly: { amount: 299, perMonth: 24.92, label: "/yr" },
    },
    features: [
      "Access to gym facilities",
      "1 free personal training session / month",
      "1 free fitness class / month",
    ],
    isFeatured: false,
  },
  {
    id: "the-pro",
    name: "The Pro",
    description: "Our most popular plan for serious results",
    pricing: {
      "1-month": { amount: 49, perMonth: 49, label: "/mo" },
      "3-month": { amount: 129, perMonth: 43, label: "/3 mo" },
      yearly: { amount: 499, perMonth: 41.58, label: "/yr" },
    },
    features: [
      "Access to gym facilities",
      "3 free personal training sessions / month",
      "5 fitness classes / month",
    ],
    isFeatured: true,
  },
  {
    id: "elite",
    name: "Elite",
    description: "The ultimate fitness experience with no limits",
    pricing: {
      "1-month": { amount: 79, perMonth: 79, label: "/mo" },
      "3-month": { amount: 209, perMonth: 69.67, label: "/3 mo" },
      yearly: { amount: 799, perMonth: 66.58, label: "/yr" },
    },
    features: [
      "Access to gym facilities",
      "4 free personal training sessions / month",
      "Unlimited access to any fitness class",
    ],
    isFeatured: false,
  },
]

export const SHARED_PERKS = [
  {
    title: "15% Discount at Supplement King",
    description: "179 Enterprise Boulevard",
    icon: "tag" as const,
    href: "https://www.supplementking.com",
  },
  {
    title: "Barburrito Markham Special",
    description:
      "Any burrito bowl + Vitamin Water or Body Armour Drink (excluding shrimp and steak) at $14.50 — 9670 Markham Rd",
    icon: "utensils" as const,
    href: "https://www.barburrito.ca/location/wismer-commons",
  },
]
