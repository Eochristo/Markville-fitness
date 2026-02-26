"use client"

export function LiveHeartRateMonitor() {
  return (
    <div className="relative h-12 w-40 overflow-hidden rounded-lg border border-primary/30 bg-black/40 backdrop-blur-sm">
      <svg
        className="h-full w-full"
        viewBox="0 0 300 50"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="headerHeartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E11D48" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#E11D48" stopOpacity="1" />
            <stop offset="100%" stopColor="#E11D48" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Animated EKG line with heartbeat spikes */}
        <polyline
          points="0,25 10,25 15,25 20,27 25,23 30,25 35,25 40,25 45,18 50,8 55,25 60,27 65,25 70,25 75,24 80,26 85,25 90,25 100,25 110,25 115,25 120,27 125,23 130,25 135,25 140,25 145,18 150,8 155,25 160,27 165,25 170,25 175,24 180,26 185,25 190,25 200,25 210,25 215,25 220,27 225,23 230,25 235,25 240,25 245,18 250,8 255,25 260,27 265,25 270,25 275,24 280,26 285,25 290,25 300,25"
          stroke="url(#headerHeartGradient)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            animation: "heartrate-monitor 3s linear infinite",
          }}
        />
      </svg>

      {/* BPM display */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/60 via-transparent to-black/60">
        <span className="text-xs font-semibold text-primary">72 BPM</span>
      </div>

      <style>{`
        @keyframes heartrate-monitor {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}
