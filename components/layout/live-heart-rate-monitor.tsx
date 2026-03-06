"use client"

export function LiveHeartRateMonitor() {
  // One full heartbeat cycle (lub-dub + flat): ~200 units wide
  // We need enough repetitions to fill 2x the viewport for seamless scrolling
  const beat =
    "0,30 15,30 20,30 25,32 30,28 35,30 40,30 50,30 55,20 58,10 62,38 66,30 70,32 75,30 80,30 85,29 90,31 95,30 100,30 115,30 120,30 125,32 130,28 135,30 140,30 150,30 155,20 158,10 162,38 166,30 170,32 175,30 180,30 185,29 190,31 195,30 200,30"

  // Repeat the pattern 10 times across a 2000-unit wide SVG
  const points = Array.from({ length: 10 }, (_, i) =>
    beat
      .split(" ")
      .map((p) => {
        const [x, y] = p.split(",")
        return `${Number(x) + i * 200},${y}`
      })
      .join(" ")
  ).join(" ")

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        className="absolute top-0 left-0 h-full opacity-[0.15]"
        style={{ width: "200%", animation: "heartrate-header 4s linear infinite" }}
        viewBox="0 0 2000 60"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="headerHeartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E11D48" stopOpacity="0.6" />
            <stop offset="25%" stopColor="#E11D48" stopOpacity="1" />
            <stop offset="50%" stopColor="#E11D48" stopOpacity="0.6" />
            <stop offset="75%" stopColor="#E11D48" stopOpacity="1" />
            <stop offset="100%" stopColor="#E11D48" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <polyline
          points={points}
          stroke="url(#headerHeartGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <style>{`
        @keyframes heartrate-header {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .absolute { animation: none !important; }
        }
      `}</style>
    </div>
  )
}
