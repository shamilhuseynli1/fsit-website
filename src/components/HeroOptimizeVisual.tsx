'use client';

export default function HeroOptimizeVisual() {
  return (
    <div className="relative w-full h-[550px]">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.6)); }
          50% { filter: drop-shadow(0 0 16px rgba(34, 197, 94, 0.9)); }
        }
        @keyframes grow {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.1); }
        }
        @keyframes sweep {
          0% { transform: rotate(-30deg); }
          50% { transform: rotate(30deg); }
          100% { transform: rotate(-30deg); }
        }
        .float-animation { animation: float 4s ease-in-out infinite; }
        .float-delay-1 { animation-delay: 0.5s; }
        .float-delay-2 { animation-delay: 1s; }
        .pulse-animation { animation: pulse 2s ease-in-out infinite; }
        .glow-animation { animation: glow 2s ease-in-out infinite; }
        .grow-animation { animation: grow 2s ease-in-out infinite; }
        .sweep-animation { animation: sweep 3s ease-in-out infinite; }
      `}</style>

      <svg viewBox="0 0 450 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="optimizeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.9" />
          </linearGradient>
          <filter id="greenGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="blueGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Central gauge/meter */}
        <g className="float-animation glow-animation" style={{ transformOrigin: '225px 220px' }}>
          <circle cx="225" cy="220" r="95" fill="#0f172a" stroke="#22c55e" strokeWidth="4" />
          <circle cx="225" cy="220" r="78" fill="none" stroke="#22c55e" strokeWidth="12" strokeDasharray="360" strokeDashoffset="90" opacity="0.5" />
          <circle cx="225" cy="220" r="78" fill="none" stroke="#4ade80" strokeWidth="12" strokeDasharray="270" strokeDashoffset="0" filter="url(#greenGlow)" />

          {/* Gauge needle */}
          <g className="sweep-animation" style={{ transformOrigin: '225px 220px' }}>
            <line x1="225" y1="220" x2="225" y2="155" stroke="#fbbf24" strokeWidth="5" strokeLinecap="round" />
            <circle cx="225" cy="220" r="12" fill="#fbbf24" />
          </g>

          <text x="225" y="265" textAnchor="middle" fill="#4ade80" fontSize="32" fontFamily="monospace" fontWeight="bold">99%</text>
          <text x="225" y="290" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontFamily="monospace" fontWeight="600">OPTIMIZED</text>
        </g>

        {/* Performance bars */}
        <g className="float-animation float-delay-1">
          <rect x="50" y="350" width="60" height="100" rx="6" fill="#0f172a" stroke="#4ade80" strokeWidth="2" />
          <rect x="55" y="380" width="50" height="65" rx="4" fill="url(#optimizeGrad)" className="grow-animation" style={{ transformOrigin: '80px 445px' }} />
          <text x="80" y="470" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontFamily="monospace" fontWeight="600">Accuracy</text>
        </g>

        <g className="float-animation float-delay-2">
          <rect x="130" y="350" width="60" height="100" rx="6" fill="#0f172a" stroke="#4ade80" strokeWidth="2" />
          <rect x="135" y="370" width="50" height="75" rx="4" fill="url(#optimizeGrad)" className="grow-animation" style={{ transformOrigin: '160px 445px', animationDelay: '0.3s' }} />
          <text x="160" y="470" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontFamily="monospace" fontWeight="600">Speed</text>
        </g>

        <g className="float-animation">
          <rect x="210" y="350" width="60" height="100" rx="6" fill="#0f172a" stroke="#4ade80" strokeWidth="2" />
          <rect x="215" y="385" width="50" height="60" rx="4" fill="url(#optimizeGrad)" className="grow-animation" style={{ transformOrigin: '240px 445px', animationDelay: '0.6s' }} />
          <text x="240" y="470" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontFamily="monospace" fontWeight="600">Uptime</text>
        </g>

        <g className="float-animation float-delay-1">
          <rect x="290" y="350" width="60" height="100" rx="6" fill="#0f172a" stroke="#4ade80" strokeWidth="2" />
          <rect x="295" y="395" width="50" height="50" rx="4" fill="url(#optimizeGrad)" className="grow-animation" style={{ transformOrigin: '320px 445px', animationDelay: '0.9s' }} />
          <text x="320" y="470" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontFamily="monospace" fontWeight="600">Cost</text>
        </g>

        {/* Metric cards */}
        <g className="float-animation">
          <rect x="40" y="80" width="110" height="55" rx="10" fill="#0f172a" stroke="#4ade80" strokeWidth="3" filter="url(#greenGlow)" />
          <text x="95" y="108" textAnchor="middle" fill="#4ade80" fontSize="20" fontFamily="monospace" fontWeight="bold">99.9%</text>
          <text x="95" y="125" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontFamily="monospace" fontWeight="600">Uptime</text>
        </g>

        <g className="float-animation float-delay-2">
          <rect x="300" y="80" width="110" height="55" rx="10" fill="#0f172a" stroke="#60a5fa" strokeWidth="3" filter="url(#blueGlow)" />
          <text x="355" y="108" textAnchor="middle" fill="#60a5fa" fontSize="20" fontFamily="monospace" fontWeight="bold">85ms</text>
          <text x="355" y="125" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontFamily="monospace" fontWeight="600">Latency</text>
        </g>

        {/* Decorative elements */}
        <circle cx="50" cy="250" r="8" fill="#4ade80" className="pulse-animation" filter="url(#greenGlow)" />
        <circle cx="400" cy="250" r="8" fill="#60a5fa" className="pulse-animation" style={{ animationDelay: '1s' }} filter="url(#blueGlow)" />

        <rect x="368" y="198" width="12" height="12" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" transform="rotate(45 374 204)" className="pulse-animation" />
      </svg>
    </div>
  );
}
