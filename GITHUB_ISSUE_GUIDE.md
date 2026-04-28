# Markville Fitness AI Developer Guide & Tracker

Welcome, AI Engineer! This guide is designed to provide you with context, goals, milestones, and instructions to ensure we stay on track with the Markville Fitness project. 

**Always read this document at the start of a new chat session.**

---

## 🎯 Current Priority
- **Goal:** Implement the high-conversion, modern membership pricing section.
- **Active Task:** Configure Sentry error tracking, then follow `IMPLEMENTATION_KICKSTART.md` to build out the pricing tiers.

## 🏗️ Project Architecture & Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS (Markville brand colors: Pure White, Crimson Red, Jet Black, Slate Gray)
- **Animations:** Framer Motion (Heartbeat CTA, Card entry sweeps)
- **Components:** React (shadcn/ui, Lucide React)
- **Data:** Hardcoded static pricing `lib/pricing-data.ts` (awaiting final numbers)

## 🗺️ Milestones Tracker

### 🔴 Not Started
- [ ] Install and configure `framer-motion`.
- [ ] Create data layer (`lib/pricing-data.ts`).
- [ ] Build base components (`feature-list`, `shared-perks`).
- [ ] Build interactive components (`billing-toggle`, `heartbeat-button`, `pricing-card`).
- [ ] Assemble `pricing-section.tsx` and integrate into `app/page.tsx`.
- [ ] Responsive & Accessibility Testing.

### 🟡 In Progress
- [ ] Setup Sentry tracking with Next.js (`npx @sentry/wizard@latest -i nextjs`). Link to Issue #18.
- [ ] Read and assimilate `IMPLEMENTATION_KICKSTART.md`.

### 🟢 Completed
- [x] Set up initial Next.js repository tailored for Markville Fitness.
- [x] Created `IMPLEMENTATION_KICKSTART.md` specification.

---

## 🤖 AI Agent Guidelines
To maintain a high quality of work and clear communication, please adhere to the following rules:

1. **Assess the State:** Start by reviewing this `GITHUB_ISSUE_GUIDE.md` and the current state of the repository. Check off milestones as they are completed.
2. **Prioritize Aesthetics & UI/UX:** The pricing section is the main conversion mechanism. Follow design tokens precisely (especially the Crimson Red `#E11D48` glow and The Pro card scaling).
3. **Commit/Update Often:** Make small, logical progress updates. When a milestone is completed, update this `GITHUB_ISSUE_GUIDE.md` file!
4. **Update This Guide:** If a milestone is completed, move it to the 🟢 Completed section. If the project's scope changes, add new milestones.
5. **Ask Questions:** If a technical decision (e.g., routing, dark mode, final prices) is ambiguous, pause and prompt the user for clarification before proceeding with assumptions. (See Open Items in `IMPLEMENTATION_KICKSTART.md`).
6. **Code Quality:** Ensure that Next.js configurations or Tailwind styles are modified safely to not break the global layout. Follow SEO and Accessibility standards.

---
*End of Guide. Begin your session by reviewing the "Current Priority" and the "Milestones Tracker", then let the user know what you'll work on!*
