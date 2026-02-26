"use client"

export function LiveHeartRateMonitor() {
  return (
    <div className="h-1 w-full overflow-hidden bg-background">
      <svg
        className="h-full w-full"
        viewBox="0 0 1000 40"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="fullHeaderHeartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E11D48" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#E11D48" stopOpacity="1" />
            <stop offset="100%" stopColor="#E11D48" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Full-width EKG with lub-dub pattern (repeated 5 times for seamless loop) */}
        <polyline
          points="0,20 20,20 25,20 30,22 35,18 40,20 45,20 50,20 55,12 60,2 65,20 70,22 75,20 80,20 85,19 90,21 95,20 100,20 120,20 140,20 160,20 180,20 200,20 220,20 230,20 235,20 240,22 245,18 250,20 255,20 260,20 265,12 270,2 275,20 280,22 285,20 290,20 295,19 300,21 305,20 310,20 330,20 350,20 370,20 390,20 410,20 420,20 425,20 430,22 435,18 440,20 445,20 450,20 455,12 460,2 465,20 470,22 475,20 480,20 485,19 490,21 495,20 500,20 520,20 540,20 560,20 580,20 600,20 610,20 615,20 620,22 625,18 630,20 635,20 640,20 645,12 650,2 655,20 660,22 665,20 670,20 675,19 680,21 685,20 690,20 710,20 730,20 750,20 770,20 790,20 800,20 805,20 810,22 815,18 820,20 825,20 830,20 835,12 840,2 845,20 850,22 855,20 860,20 865,19 870,21 875,20 880,20 900,20 920,20 940,20 960,20 980,20 1000,20"
          stroke="url(#fullHeaderHeartGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            animation: "heartbeat-fullwidth 1s linear infinite",
          }}
        />
      </svg>

      <style>{`
        @keyframes heartbeat-fullwidth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-500px);
          }
        }
      `}</style>
    </div>
  )
}
