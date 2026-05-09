# Antigravity Login Elements Manifest

This document tracks all login-related elements that were removed from the codebase. This manifest enables easy reintroduction of login features later using the "antigravity" method.

## Removal Date
- **Branch**: `remove-login-elements`
- **Removed Elements Summary**: Desktop login button with dropdown, mobile login button, and entire login modal

---

## 1. Desktop Login Button with Dropdown
**File**: `components/layout/site-header.tsx`
**Location**: Lines 218-254 (before removal)
**Description**: User profile icon button that triggers a dropdown menu with "Log In" and "Create Account" options

### Code Backup
```tsx
{/* Login Button with Dropdown */}
<div className="relative" ref={loginDropdownRef}>
  <button
    onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
    className="flex items-center justify-center rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50"
    aria-label="Account menu"
    aria-expanded={loginDropdownOpen}
  >
    <UserIcon className="h-6 w-6" />
  </button>

  {/* Dropdown Menu */}
  <div
    className={cn(
      "absolute right-0 top-full mt-2 w-48 rounded-lg border border-border bg-card shadow-lg transition-all duration-200",
      loginDropdownOpen
        ? "pointer-events-auto opacity-100 translate-y-0"
        : "pointer-events-none opacity-0 -translate-y-2"
    )}
  >
    <div className="py-2">
      <button
        onClick={openLoginModal}
        className="w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted/50 transition-colors"
      >
        Log In
      </button>
      <Link
        href="/pricing"
        onClick={() => setLoginDropdownOpen(false)}
        className="block w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted/50 transition-colors"
      >
        Create Account
      </Link>
    </div>
  </div>
</div>
```

### Placement
- Inserted after the "Join Now" button in the desktop nav (`.hidden.items-center.md:flex`)
- Part of the right-side controls section

---

## 2. Mobile Login Button
**File**: `components/layout/site-header.tsx`
**Location**: Lines 324-351 (before removal)
**Description**: Login button with user icon shown in mobile menu below the "Join Now" button

### Code Backup
```tsx
{/* Login/Account Options */}
<div 
  className={cn(
    "mt-4 flex items-center gap-4 transition-all",
    mobileOpen
      ? "translate-y-0 opacity-100 brightness-110"
      : "translate-y-4 opacity-0"
  )}
  style={{
    transitionDelay: mobileOpen ? `${NAV_LINKS.length * 75 + 100}ms` : "0ms",
    transitionDuration: "500ms",
  }}
>
  <button
    onClick={openLoginModal}
    className="flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
  >
    <UserIcon className="h-5 w-5" />
    Log In
  </button>
  <Link
    href="/pricing"
    onClick={() => setMobileOpen(false)}
    className="text-sm font-medium text-primary brightness-110 hover:underline"
  >
    Create Account
  </Link>
</div>
```

### Placement
- Inserted in the mobile overlay nav section
- Positioned after the "Join Now" button and before the Heart Rate Monitor
- Included staggered animation delay

---

## 3. Login Modal
**File**: `components/layout/site-header.tsx`
**Location**: Lines 414-485 (before removal)
**Description**: Full-screen modal with login form and password reset functionality

### Code Backup
```tsx
{/* Login Modal */}
<div
  className={cn(
    "fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300",
    loginModalOpen
      ? "pointer-events-auto opacity-100"
      : "pointer-events-none opacity-0"
  )}
  onClick={closeLoginModal}
>
  <div
    className={cn(
      "relative w-full max-w-md mx-4 rounded-xl border border-border bg-card p-6 shadow-2xl transition-all duration-300",
      loginModalOpen
        ? "translate-y-0 opacity-100 scale-100"
        : "translate-y-4 opacity-0 scale-95"
    )}
    onClick={(e) => e.stopPropagation()}
  >
    {/* Close button */}
    <button
      onClick={closeLoginModal}
      className="absolute right-4 top-4 p-1 text-muted-foreground hover:text-foreground transition-colors"
      aria-label="Close login modal"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>

    {!showForgotPassword ? (
      <>
        {/* Login Form */}
        <div className="text-center mb-6">
          <UserIcon className="h-12 w-12 mx-auto text-primary mb-3" />
          <h2 className="text-2xl font-bold text-foreground">Welcome Back</h2>
          <p className="text-sm text-muted-foreground mt-1">Sign in to your account</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1.5">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-2.5 font-semibold text-primary-foreground transition-colors hover:bg-[#BE123C] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            Log In
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => setShowForgotPassword(true)}
            className="text-sm text-primary hover:underline transition-colors"
          >
            Forgot your password?
          </button>
        </div>

        <div className="mt-6 pt-4 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {"Don't have an account? "}
            <Link
              href="/pricing"
              onClick={closeLoginModal}
              className="text-primary font-medium hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </>
    ) : (
      <>
        {/* Forgot Password Form */}
        <div className="text-center mb-6">
          <div className="h-12 w-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-primary">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Reset Password</h2>
          <p className="text-sm text-muted-foreground mt-1">Enter your email to receive a reset link</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label htmlFor="reset-email" className="block text-sm font-medium text-foreground mb-1.5">
              Email
            </label>
            <input
              type="email"
              id="reset-email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-2.5 font-semibold text-primary-foreground transition-colors hover:bg-[#BE123C] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => setShowForgotPassword(false)}
            className="text-sm text-primary hover:underline transition-colors"
          >
            Back to login
          </button>
        </div>
      </>
    )}
  </div>
</div>
```

### State & Function Requirements
```tsx
// State variables needed (add to SiteHeader component)
const [loginDropdownOpen, setLoginDropdownOpen] = useState(false)
const [loginModalOpen, setLoginModalOpen] = useState(false)
const [showForgotPassword, setShowForgotPassword] = useState(false)
const loginDropdownRef = useRef<HTMLDivElement>(null)

// Functions needed
const openLoginModal = () => {
  setLoginDropdownOpen(false)
  setMobileOpen(false)
  setShowForgotPassword(false)
  setLoginModalOpen(true)
}

const closeLoginModal = () => {
  setLoginModalOpen(false)
  setShowForgotPassword(false)
}

// useEffect hooks needed
useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target as Node)) {
      setLoginDropdownOpen(false)
    }
  }
  document.addEventListener("mousedown", handleClickOutside)
  return () => document.removeEventListener("mousedown", handleClickOutside)
}, [])

useEffect(() => {
  if (loginModalOpen) {
    document.body.style.overflow = "hidden"
  } else if (!mobileOpen) {
    document.body.style.overflow = ""
  }
}, [loginModalOpen, mobileOpen])
```

### Placement
- Appended to the end of the `<header>` element, before the closing `</header>` tag
- Uses `z-[60]` to layer above other content

---

## 4. UserIcon Component
**File**: `components/layout/site-header.tsx`
**Location**: Lines 8-23 (before removal)
**Description**: SVG icon component used in login button and modal

### Code Backup
```tsx
function UserIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
```

---

## 5. Auth Modal "Log In" Link
**File**: `components/pricing/auth-modal.tsx`
**Location**: Lines 87-92 (before removal)
**Description**: Primary call-to-action link in the auth modal that redirects to `/login`

### Code Backup
```tsx
<a
  href="/login"
  className="flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#BE123C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
>
  Log In
</a>
```

### Placement
- Inside the `<div className="flex flex-col gap-3">` actions container
- Positioned as the first (primary) action button before "Create Account"

---

## Pages Still Available (NOT Removed)
These pages still exist and can be accessed directly via URL if needed:
- `/login` - Login page
- `/dashboard` - Dashboard page (requires auth)
- `/admin` - Admin page (requires auth)

---

## Reintroduction Steps

To reintroduce login elements using the antigravity method:

1. **Add UserIcon component** back to `site-header.tsx` (use code from Section 4)
2. **Add state variables** back to SiteHeader (see state & function requirements in Section 3)
3. **Add useEffect hooks** for click-outside detection and body scroll locking (see Section 3)
4. **Add modal handler functions** `openLoginModal` and `closeLoginModal` (see Section 3)
5. **Insert desktop login button** after the "Join Now" button (see Section 1)
6. **Insert mobile login button** in the mobile overlay nav (see Section 2)
7. **Insert login modal** at the end of header before closing tag (see Section 3)
8. **Insert "Log In" link** back into auth-modal.tsx (see Section 5)

## Layout Impact
- No structural changes were made to the layout
- The absence of login button does not affect spacing or component arrangement
- Mobile menu still maintains proper staggered animations
- All transitions and animations remain smooth

## Notes for Future Reference
- All removed components use the `cn()` utility for conditional CSS classes
- Modal animations use a custom `modalIn` keyframe
- Mobile menu items include staggered animation delays based on `NAV_LINKS.length`
- Login functionality requires integration with authentication backend (not included in this removal)
