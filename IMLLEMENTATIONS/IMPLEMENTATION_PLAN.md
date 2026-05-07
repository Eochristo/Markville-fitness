# Markville Fitness: Backend Dashboard Implementation Plan

This document outlines the step-by-step implementation plan for building a full Role-Based Access Control (RBAC) backend dashboard for Markville Fitness using Supabase and Next.js. 

---

## 1. Branding & Design Guide
To maintain brand consistency with the existing landing page, all dashboard elements will be built using **shadcn/ui** following these design constraints:

*   **Theme Foundation:** Dark-mode dominant (`bg-black` background, off-white `text-foreground`).
*   **Primary Accent Color:** Crimson/Rose Red (`hsl(347, 77%, 50%)`). Used sparingly for primary CTA buttons, active state highlights, and critical notifications.
*   **Typography:** `Inter` for clean, readable dashboard elements and data tables. `Oleo Script` reserved purely for decorative headers or logos.
*   **UI Components (shadcn/ui):**
    *   **Cards:** Use `bg-card` (dark slate/gray) to containerize widgets and forms to contrast slightly against the pure black background.
    *   **Tables:** Minimalist borders, hover states mapped to `bg-muted` for row highlights.
    *   **Animations:** Preserve the brand's energetic feel by applying subtle versions of the `animate-heartbeat` to notification dots or live status indicators.

---

## 2. Supabase Architecture & Database Schema

We will utilize **Supabase Postgres** for data storage, **Supabase Auth** for identity, and **Row Level Security (RLS)** for access control.

### Core Tables

1.  **`users` (Extends Auth)**
    *   `id` (uuid, references `auth.users`)
    *   `email` (string)
    *   `role` (enum: `ADMIN`, `STAFF`, `CLIENT`) - *Defaults to `CLIENT` on signup.*
    *   `status` (enum: `ACTIVE`, `BANNED`, `REJECTED`)
    *   `created_at` (timestamp)
    *   `penalty_until` (timestamp, nullable) - *Tracks 1-week booking ban for late cancellations.*

2.  **`booking_types`**
    *   `id` (uuid, pk)
    *   `title` (string, e.g., "1-on-1 Personal Training", "Yoga Class")
    *   `duration_minutes` (integer)
    *   `price` (numeric)

3.  **`bookings`**
    *   `id` (uuid, pk)
    *   `client_id` (uuid, references `users`)
    *   `staff_id` (uuid, references `users` - nullable, if not assigned yet)
    *   `booking_type_id` (uuid, references `booking_types`)
    *   `start_datetime` (timestamp)
    *   `end_datetime` (timestamp)
    *   `status` (enum: `CONFIRMED`, `CANCELLED`, `COMPLETED`)
    *   `cancel_reason` (text, nullable)
    *   `cancel_datetime` (timestamp, nullable)

4.  **`login_history`**
    *   `id` (uuid, pk)
    *   `user_id` (uuid, references `users`)
    *   `login_datetime` (timestamp)
    *   `ip_address` (string)

5.  **`payment_history`** *(Prep for Stripe integration later)*
    *   `id` (uuid, pk)
    *   `user_id` (uuid, references `users`)
    *   `amount` (numeric)
    *   `description` (string)
    *   `status` (enum: `SUCCESS`, `PENDING`, `FAILED`)
    *   `date` (timestamp)

6.  **`staff_availability`**
    *   `id` (uuid, pk)
    *   `staff_id` (uuid, references `users`)
    *   `date` (date)
    *   `start_time` (time)
    *   `end_time` (time)
    *   `is_available` (boolean)

7.  **`time_off_requests`**
    *   `id` (uuid, pk)
    *   `staff_id` (uuid, references `users`)
    *   `start_date` (date)
    *   `end_date` (date)
    *   `status` (enum: `PENDING`, `APPROVED`, `REJECTED`)
    *   `reason` (text, nullable)

---

## 3. Route Architecture & Roles

Authentication handles will be triggered by modifying the existing **"Join Now"** icon to point to a `/login` or `/signup` flow. Upon successful authentication, a middleware will route users to their respective directories based on their database `role`.

### Admin Routes (`/dashboard/admin/*`)
*   `/dashboard/admin`: High-level metrics, revenue estimates, recent signups, and upcoming sessions at a glance.
*   `/dashboard/admin/sessions`: Full CRUD over all bookings. Filtering by date, trainer, and client. Ability to manually cancel and log reasons.
*   `/dashboard/admin/clients`: User management table. Change roles (Client ↔ Staff), ban/reject users, view detailed login & payment history per user. Allows demoting Staff back to Client status if necessary.
*   `/dashboard/admin/availability`: Master calendar & approvals. View/modify schedule blocks for any staff member and approve/reject staff time-off requests.
*   `/dashboard/admin/reporting`: Historical data of bookings and user growth.
*   `/dashboard/admin/settings`: Manage `booking_types` (prices, names, durations).

### Staff Routes (`/dashboard/staff/*`)
*   `/dashboard/staff`: Today's itinerary, upcoming sessions, and quick stats.
*   `/dashboard/staff/sessions`: View their assigned upcoming bookings and historical completed bookings. Can input cancellation reasons if a client calls. 
*   `/dashboard/staff/clients`: View roster of clients they interact with. Ability to view client payment/booking history for context.
*   `/dashboard/staff/availability`: Interface to view their schedule and submit time-off requests. Time-off requests remain `PENDING` until approved by an Admin, after which the availability calendar is automatically updated.

### Client Routes (`/dashboard/client/*`)
*   `/dashboard/client`: Overview of next upcoming session and quick-links to book new sessions.
*   `/dashboard/client/bookings`: Interface to browse calendar, see available staff slots, and create bookings. View past booking history.
*   `/dashboard/client/payments`: View historical payment records/receipts.
*   `/dashboard/client/profile`: *(Suggested addition)* Update personal fitness goals, physical metrics, and account details.

### Business Rules (Enforced via Backend)
*   **Late Cancellation Penalty:** Clients can cancel a booking freely up until **24 hours** before the scheduled session. If a cancellation occurs within the 24-hour window, the system updates their `penalty_until` timestamp, preventing them from booking another session for 1 week.

---

## 4. Step-by-Step Execution Plan

### Phase 1: Supabase Setup & Auth Integration
1. Configure Supabase project variables in `.env`.
2. Connect Supabase Auth to Next.js App Router using `@supabase/ssr`.
3. Wire the "Join Now" icon to a newly created Auth UI (Login/Signup).
4. Implement a Supabase trigger to automatically insert a new row in the `users` table default as `CLIENT` upon signup.

### Phase 2: Database Schema & Logic
1. Run SQL migrations to generate the tables defined in Section 2.
2. Setup Row Level Security (RLS) policies ensuring Staff only see relevant data, Clients only see their own, and Admins can see/edit all.

### Phase 3: Dashboard Layouts & Middleware
1. Build `app/dashboard/layout.tsx` - a shared shell featuring a sidebar and top navigation.
2. Implement Next.js Middleware to protect `/dashboard/admin`, `/dashboard/staff`, and `/dashboard/client` routes, redirecting unauthorized users.

### Phase 4: Client Dashboard Module
1. Build Client Profile and Dashboard overviews.
2. Implement a Calendar UI for the booking system where Clients can select open slots from `staff_availability` and create a `booking`.
3. Display read-only tables for payment and booking history.

### Phase 5: Staff Dashboard Module
1. Build the availability view and the "Time-Off Request" submission form for Staff.
2. Build the Staff session management view to see who they are training and when.

### Phase 6: Admin Overview & Controls
1. Build the global booking management console.
2. Build the User Management table allowing role escalation, bans, and history viewing.
3. Setup the Reporting overview utilizing Supabase charts/aggregations for total bookings and payments.
