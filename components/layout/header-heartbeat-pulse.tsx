export function HeaderHeartbeatPulse() {
  return (
    <div className="pointer-events-none fixed inset-0 top-0 z-0">
      <style>{`
        @keyframes header-lub-dub {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(225, 29, 72, 0.1);
          }
          20% {
            transform: scale(1.02);
            box-shadow: 0 0 30px rgba(225, 29, 72, 0.15);
          }
          40% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(225, 29, 72, 0.1);
          }
          60% {
            transform: scale(1.02);
            box-shadow: 0 0 30px rgba(225, 29, 72, 0.15);
          }
        }
        .header-heartbeat {
          animation: header-lub-dub 1.5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .header-heartbeat {
            animation: none;
          }
        }
      `}</style>
      <div className="header-heartbeat h-full w-full bg-gradient-to-b from-primary/5 to-transparent opacity-50" />
    </div>
  )
}
