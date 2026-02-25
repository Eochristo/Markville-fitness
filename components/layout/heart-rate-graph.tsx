"use client"

export function HeartRateGraph() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <svg
        className="w-full h-full animate-heartrate-pulse opacity-[0.08]"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E11D48" stopOpacity="0" />
            <stop offset="50%" stopColor="#E11D48" stopOpacity="1" />
            <stop offset="100%" stopColor="#E11D48" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Main heartbeat line */}
        <polyline
          points="0,50 50,50 60,40 70,50 80,50 85,45 90,55 95,50 100,50 150,50 160,30 170,50 180,50 185,48 190,52 195,50 200,50 250,50 300,50 350,50 400,50 450,50 500,50 550,50 600,50 650,50 700,50 750,50 800,50 850,50 900,50 950,50 1000,50 1050,50 1100,50 1150,50 1200,50"
          stroke="url(#heartGradient)"
          strokeWidth="2"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        
        {/* Secondary wave for depth */}
        <polyline
          points="0,45 50,45 60,35 70,45 80,45 85,40 90,50 95,45 100,45 150,45 160,25 170,45 180,45 185,43 190,47 195,45 200,45 250,45 300,45 350,45 400,45 450,45 500,45 550,45 600,45 650,45 700,45 750,45 800,45 850,45 900,45 950,45 1000,45 1050,45 1100,45 1150,45 1200,45"
          stroke="#E11D48"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}
