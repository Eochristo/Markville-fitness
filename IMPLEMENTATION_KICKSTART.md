# Markville Fitness - Membership Pricing Section: Implementation Kickstart

## Project Overview

Build a high-conversion, modern membership pricing section for **Markville Fitness** using Next.js 16, Tailwind CSS, and Framer Motion. The section features three pricing tiers (Starter, The Pro, Elite) with a billing period toggle (1 Month / 3 Month / Yearly), animated entry, and a signature heartbeat CTA animation on the featured Pro card.

---

## 1. Brand Identity & Design Tokens

| Token             | Value                  | Usage                                  |
| ----------------- | ---------------------- | -------------------------------------- |
| **Background**    | Pure White `#FFFFFF`   | Page and card backgrounds              |
| **Primary**       | Crimson Red `#E11D48`  | CTA buttons, glow, checkmarks, accents |
| **Foreground**    | Jet Black `#0F172A`    | Headings, body text, ghost buttons     |
| **Muted**         | Slate Gray `#64748B`   | Secondary text, micro-copy             |
| **Card Border**   | Light Gray `#E2E8F0`   | Non-featured card borders              |

### Typography

- **Font Family:** Inter (Google Fonts) -- bold condensed weights for headers, regular for body
- **Heading sizes:** Plan name `text-2xl font-bold`, Price `text-5xl font-extrabold`
- **Body:** Feature list `text-base`, micro-copy `text-sm`

---

## 2. Pricing Data (Hardcoded / Static)

Pricing is embedded directly in the component as static data. Values below are **placeholders pending final confirmation** -- the structure supports easy updates.

| Tier        | 1 Month | 3 Months | Yearly   |
| ----------- | ------- | -------- | -------- |
| **Starter** | $29/mo  | $79 ($26.33/mo) | $299 ($24.92/mo) |
| **The Pro** | $49/mo  | $129 ($43/mo) | $499 ($41.58/mo) |
| **Elite**   | $79/mo  | $209 ($69.67/mo) | $799 ($66.58/mo) |

> **Note:** Pricing values above are realistic placeholders. Update the `PLANS` data constant with final approved numbers before launch.

---

## 3. Plan Features by Tier

### Starter
- Access to gym facilities
- 1 free personal training session / month
- 15% discount at Supplement King (179 Enterprise Boulevard)
- Barburrito Markham (9670 Markham Rd) -- any burrito bowl + Vitamin Water or Body Armour Drink (excluding shrimp and steak) at the special price of $14.50

### The Pro (Featured)
- Access to gym facilities
- 3 free personal training sessions / month
- 5 fitness classes / month
- 15% discount at Supplement King (179 Enterprise Boulevard)
- Barburrito Markham (9670 Markham Rd) -- any burrito bowl + Vitamin Water or Body Armour Drink (excluding shrimp and steak) at the special price of $14.50

### Elite
- Access to gym facilities
- 4 free personal training sessions / month
- Unlimited access to any fitness class
- 15% discount at Supplement King (179 Enterprise Boulevard)
- Barburrito Markham (9670 Markham Rd) -- any burrito bowl + Vitamin Water or Body Armour Drink (excluding shrimp and steak) at the special price of $14.50

> **Shared perks** (Supplement King discount + Barburrito deal) apply to ALL tiers and can be rendered as a shared section or repeated per card.

---

## 4. Component Architecture

```
app/
  page.tsx                          -- Main page, renders <PricingSection />
  layout.tsx                        -- Root layout (update metadata + Inter font)
  globals.css                       -- Updated design tokens

components/
  pricing/
    pricing-section.tsx             -- Top-level section wrapper (heading, toggle, grid, micro-copy)
    billing-toggle.tsx              -- 3-option toggle: 1 Month | 3 Months | Yearly
    pricing-card.tsx                -- Individual plan card (receives plan data + isFeatured prop)
    feature-list.tsx                -- Renders checkmark list of features
    heartbeat-button.tsx            -- CTA button with Framer Motion heartbeat animation
    shared-perks.tsx                -- Supplement King + Barburrito shared perks banner
```

### Data Layer

```
lib/
  pricing-data.ts                   -- Static PLANS array with pricing, features, metadata
```

---

## 5. Layout & Responsive Design

### Desktop (lg and above)
- Three cards in a horizontal row using CSS Grid: `grid grid-cols-3`
- The Pro card scaled to `1.1x` via `transform: scale(1.1)` with higher `z-index`
- Max container width: `max-w-6xl mx-auto`
- Cards have equal internal padding `p-8`

### Tablet (md)
- Two cards per row with The Pro card spanning or centered
- Slight scale reduction on Pro card: `scale(1.05)`

### Mobile (below md)
- Single column stack: `grid-cols-1`
- The Pro card remains visually distinct (glow + badge) but at `scale(1.0)` -- no size increase on mobile
- Full-width cards with `px-4` container padding
- Cards ordered: Starter, The Pro (featured), Elite

---

## 6. The Pro Card -- Focal Point Specifications

| Property          | Value                                                         |
| ----------------- | ------------------------------------------------------------- |
| Scale (desktop)   | `scale(1.1)` on `lg:` breakpoint                             |
| Scale (mobile)    | `scale(1.0)` -- no enlargement                               |
| Red outer glow    | `box-shadow: 0 0 40px rgba(225, 29, 72, 0.3)` (blur effect) |
| MOST POPULAR badge | Positioned at top of card, Crimson Red background, white text, `text-xs font-bold uppercase tracking-wider`, `px-4 py-1 rounded-full`, centered above card content |
| z-index           | `z-10` to overlap adjacent cards on desktop                   |
| Border            | None (glow replaces border)                                   |

---

## 7. Animations (Framer Motion)

### 7a. Heartbeat CTA Button (The Pro card only)
```
Animation: continuous loop, 2-second cycle
Keyframes:
  scale: [1, 1.05, 1, 1.05, 1]
  times: [0, 0.2, 0.4, 0.6, 1]
Shadow/glow pulse: boxShadow oscillates between
  "0 0 0px rgba(225,29,72,0.4)" and "0 0 20px rgba(225,29,72,0.6)"
  in sync with the scale keyframes
Repeat: Infinity
RepeatType: "loop"
Duration: 2 seconds
```

### 7b. Card Entry Animation (all cards)
```
Initial state: { opacity: 0, y: 40 }
Animate to: { opacity: 1, y: 0 }
Transition: { duration: 0.6, ease: "easeOut" }
Stagger: 0.15s delay between each card (left to right)
Trigger: On mount (viewport entry)
```

### 7c. Price Transition (on toggle switch)
```
When billing period changes:
  - Price text uses AnimatePresence with exit/enter
  - Exit: { opacity: 0, y: -10 } over 0.2s
  - Enter: { opacity: 0, y: 10 } -> { opacity: 1, y: 0 } over 0.3s
  - layoutId on price container for smooth height transitions
```

### 7d. Accessibility: Reduced Motion
```
All Framer Motion animations respect prefers-reduced-motion:
  - Use useReducedMotion() hook from framer-motion
  - When reduced motion is preferred: disable heartbeat loop, skip entry animation, instant price switch
```

---

## 8. Billing Toggle Specifications

| Property        | Value                                                     |
| --------------- | --------------------------------------------------------- |
| Options         | "1 Month" / "3 Months" / "Yearly"                        |
| Style           | Pill-shaped segmented control with rounded-full container |
| Active state    | Crimson Red background, white text                        |
| Inactive state  | Transparent background, Jet Black text                    |
| Default         | "1 Month" selected on page load                           |
| Transition      | Background slides smoothly using Framer Motion `layoutId` |
| Position        | Centered above the pricing cards grid                     |
| Size            | `text-sm font-medium`, `px-5 py-2` per option            |

---

## 9. CTA Button Behavior

| Property           | Value                                                 |
| ------------------ | ----------------------------------------------------- |
| Button text        | "Choose Plan"                                         |
| The Pro button     | Solid Crimson Red `#E11D48`, white text, heartbeat animation |
| Starter/Elite btns | Ghost/outlined style -- Jet Black border, black text, transparent background |
| Click action       | Redirects to signup page (authentication required at checkout, not on click) |
| Hover states       | Pro: darken red to `#BE123C`; Ghost: fill with `#0F172A` bg, white text |
| Focus states       | Visible focus ring using `ring-2 ring-offset-2 ring-primary` |

---

## 10. Shared Perks Banner

Rendered below the pricing cards grid but above the micro-copy. Displays the two partner deals that apply to ALL tiers:

1. **Supplement King** -- 15% discount at 179 Enterprise Boulevard
2. **Barburrito Markham** -- Any burrito bowl + Vitamin Water or Body Armour Drink (excluding shrimp and steak) at $14.50 (9670 Markham Rd)

Style: Subtle muted background `bg-muted/50`, rounded card, icon-paired text, centered layout.

---

## 11. Micro-Copy

Below the pricing grid, centered:

> "No commitment, cancel anytime. Existing members can change plans at any time."

Style: `text-sm text-muted-foreground text-center`

---

## 12. Dependencies to Install

| Package          | Version  | Purpose                                    |
| ---------------- | -------- | ------------------------------------------ |
| `framer-motion`  | `^11.x`  | Card entry, heartbeat CTA, price transitions |

All other dependencies (Next.js 16, Tailwind CSS, Lucide React, shadcn/ui) are already available in the project.

---

## 13. Files to Create / Modify

### New Files
| File                                  | Purpose                              |
| ------------------------------------- | ------------------------------------ |
| `lib/pricing-data.ts`                 | Static pricing tiers, features, metadata |
| `components/pricing/pricing-section.tsx` | Main section orchestrator          |
| `components/pricing/billing-toggle.tsx`  | 3-way billing period toggle        |
| `components/pricing/pricing-card.tsx`    | Individual plan card               |
| `components/pricing/feature-list.tsx`    | Feature checkmark list             |
| `components/pricing/heartbeat-button.tsx`| Animated CTA button               |
| `components/pricing/shared-perks.tsx`    | Partner deals banner               |

### Modified Files
| File                  | Changes                                                |
| --------------------- | ------------------------------------------------------ |
| `app/page.tsx`        | Import and render `<PricingSection />`                 |
| `app/layout.tsx`      | Update metadata (title, description), add Inter font   |
| `app/globals.css`     | Add Markville-specific design tokens (crimson, jet black) |
| `tailwind.config.ts`  | Add heartbeat keyframe, custom colors if needed        |
| `package.json`        | Auto-updated when `framer-motion` is installed         |

---

## 14. Accessibility Checklist

- [ ] Billing toggle uses `role="tablist"` with `role="tab"` per option and `aria-selected`
- [ ] Pricing cards use semantic HTML: `<article>` or `<section>` with `aria-label` per plan
- [ ] MOST POPULAR badge has `aria-label="Most popular plan"`
- [ ] Feature checkmarks are decorative (`aria-hidden="true"`) with text carrying meaning
- [ ] CTA buttons have descriptive `aria-label`: e.g., "Choose Starter Plan"
- [ ] Focus indicators visible on all interactive elements
- [ ] `prefers-reduced-motion` disables heartbeat and entry animations
- [ ] Price changes announced to screen readers via `aria-live="polite"` region
- [ ] Keyboard navigation: Tab through toggle options, then through card buttons

---

## 15. Implementation Order

1. **Install framer-motion** dependency
2. **Update design tokens** -- globals.css with Markville brand colors; layout.tsx with Inter font and updated metadata
3. **Create data layer** -- `lib/pricing-data.ts` with all plan info, features, and pricing across 3 billing periods
4. **Build components bottom-up:**
   - `feature-list.tsx` (pure presentational)
   - `heartbeat-button.tsx` (Framer Motion animation)
   - `billing-toggle.tsx` (state management + animation)
   - `pricing-card.tsx` (composes feature-list + button)
   - `shared-perks.tsx` (partner deals banner)
   - `pricing-section.tsx` (composes toggle + cards + perks + micro-copy)
5. **Wire up page.tsx** -- Import and render the pricing section
6. **Responsive testing** -- Verify mobile single-column, tablet, and desktop 3-column with Pro card scale
7. **Animation tuning** -- Verify heartbeat loop timing, card entry stagger, and price transition smoothness

---

## 16. Open Items / Remaining Questions

| #  | Item                                              | Status           |
| -- | ------------------------------------------------- | ---------------- |
| 1  | **Final pricing numbers** for all 3 tiers x 3 periods | Placeholder values in use -- needs confirmation |
| 2  | **Signup page route** -- What URL does "Choose Plan" redirect to? (`/signup`, `/register`, `/checkout`?) | Needs decision |
| 3  | **Markville Fitness logo** -- Should a logo appear in or above the pricing section? | Not specified |
| 4  | **Section heading text** -- e.g., "Choose Your Plan", "Membership Plans", "Find Your Fit" | Needs decision |
| 5  | **Dark mode support** -- Should the pricing section support dark mode? | Not specified (defaulting to light only) |

---

## 17. Success Criteria

- Three pricing cards render correctly at all breakpoints (mobile, tablet, desktop)
- The Pro card is visually dominant: 1.1x scale on desktop, red glow, MOST POPULAR badge
- Billing toggle switches between 1 Month / 3 Months / Yearly with smooth price transitions
- Heartbeat animation on The Pro CTA runs continuously in a 2-second loop with glow pulse
- Cards fade and slide in on page load with staggered timing
- All shared perks (Supplement King + Barburrito) are clearly communicated
- Micro-copy reads "No commitment, cancel anytime. Existing members can change plans at any time."
- Fully accessible: keyboard navigable, screen reader friendly, respects reduced motion
- Performance: Framer Motion tree-shaken, no layout shift on load
