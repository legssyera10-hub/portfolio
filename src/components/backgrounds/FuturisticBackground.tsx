import React from 'react'

type Props = {
  className?: string
  density?: number // number of nodes (approx)
}

// Futuristic dark background: subtle network lines, constellation dots, smooth gradients.
export default function FuturisticBackground({ className, density = 14 }: Props) {
  // Predefined points to avoid randomness server/client; spread across viewBox 1000x600
  const points = [
    [60, 80], [180, 120], [320, 60], [480, 110], [640, 70], [820, 130], [940, 90],
    [120, 240], [300, 210], [520, 220], [720, 240], [900, 200],
    [80, 380], [260, 340], [430, 380], [610, 360], [800, 390], [950, 360],
    [160, 500], [360, 520], [560, 510], [740, 520], [900, 500]
  ].slice(0, Math.max(8, Math.min(density, 22)))

  const edges: Array<[number, number]> = []
  for (let i = 0; i < points.length - 1; i++) edges.push([i, i + 1])
  for (let i = 0; i < points.length - 3; i += 3) edges.push([i, i + 3])

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className ?? ''}`} aria-hidden>
      {/* Gradient lighting */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[120%] rounded-full blur-3xl bg-gradient-to-r from-primary/15 via-transparent to-accent/15" />
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[420px] w-[120%] rounded-full blur-3xl bg-gradient-to-r from-accent/15 via-transparent to-primary/15" />

      {/* SVG network layer */}
      <svg viewBox="0 0 1000 600" className="absolute inset-0 h-full w-full opacity-30">
        <defs>
          <linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(99,102,241,0.7)" />
            <stop offset="100%" stopColor="rgba(56,189,248,0.7)" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {edges.map(([a, b], i) => (
          <line key={i}
            x1={points[a][0]} y1={points[a][1]} x2={points[b][0]} y2={points[b][1]}
            stroke="url(#fg)" strokeWidth="1" filter="url(#glow)" />
        ))}

        {points.map(([x, y], i) => (
          <circle key={`n-${i}`} cx={x} cy={y} r={2.6} fill="url(#fg)" filter="url(#glow)" className="twinkle" />
        ))}
      </svg>

      {/* Extra faint grid for depth */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: '26px 26px',
      }} />

      {/* Local styles for twinkle */}
      <style>{`
        .twinkle { animation: twinkle 3.6s ease-in-out infinite; }
        @keyframes twinkle { 0%, 100% { opacity: .35 } 50% { opacity: .9 } }
      `}</style>
    </div>
  )
}

