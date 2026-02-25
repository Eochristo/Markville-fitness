"use client"

export function FixedBackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Red glow at bottom right */}
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary blur-3xl opacity-20" />
      {/* Secondary glow accent */}
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary blur-2xl opacity-10" />
    </div>
  )
}
