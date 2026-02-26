'use client'

export function AnimatedBackgroundOrb() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <style>{`
        @keyframes float-around {
          0% {
            transform: translate(10%, 20%);
          }
          25% {
            transform: translate(80%, 10%);
          }
          50% {
            transform: translate(70%, 80%);
          }
          75% {
            transform: translate(20%, 70%);
          }
          100% {
            transform: translate(10%, 20%);
          }
        }

        .orb-float {
          animation: float-around 30s ease-in-out infinite;
        }
      `}</style>
      
      {/* Animated red orb */}
      <div className="orb-float absolute w-96 h-96 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 blur-3xl" />
    </div>
  )
}
