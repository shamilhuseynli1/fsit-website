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
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
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
        .pulse-animation { animation: pulse 3s ease-in-out infinite; }
        .grow-animation { animation: grow 2s ease-in-out infinite; }
        .sweep-animation { animation: sweep 3s ease-in-out infinite; }
      `}</style>

      <svg viewBox="0 0 450 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="optimizeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Central gauge/meter */}
        <g className="float-animation" style={{ transformOrigin: '225px 220px' }}>
          <circle cx="225" cy="220" r="90" fill="#1e293b" stroke="#22c55e" strokeWidth="3" />
          <circle cx="225" cy="220" r="75" fill="none" stroke="#22c55e" strokeWidth="8" strokeDasharray="360" strokeDashoffset="90" opacity="0.3" />
          <circle cx="225" cy="220" r="75" fill="none" stroke="#22c55e" strokeWidth="8" strokeDasharray="270" strokeDashoffset="0" />

          {/* Gauge needle */}
          <g className="sweep-animation" style={{ transformOrigin: '225px 220px' }}>
            <line x1="225" y1="220" x2="225" y2="160" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
            <circle cx="225" cy="220" r="8" fill="#f59e0b" />
          </g>

          <text x="225" y="260" textAnchor="middle" fill="#22c55e" fontSize="24" fontFamily="monospace" fontWeight="bold">99%</text>
          <text x="225" y="280" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">OPTIMIZED</text>
        </g>

        {/* Performance bars */}
        <g className="float-animation float-delay-1">
          <rect x="50" y="350" width="60" height="100" rx="4" fill="#1e293b" stroke="#374151" strokeWidth="1" />
          <rect x="55" y="380" width="50" height="65" rx="2" fill="url(#optimizeGrad)" className="grow-animation" style={{ transformOrigin: '80px 445px' }} />
          <text x="80" y="470" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">Accuracy</text>
        </g>

        <g className="float-animation float-delay-2">
          <rect x="130" y="350" width="60" height="100" rx="4" fill="#1e293b" stroke="#374151" strokeWidth="1" />
          <rect x="135" y="370" width="50" height="75" rx="2" fill="url(#optimizeGrad)" className="grow-animation" style={{ transformOrigin: '160px 445px', animationDelay: '0.3s' }} />
          <text x="160" y="470" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">Speed</text>
        </g>

        <g className="float-animation">
          <rect x="210" y="350" width="60" height="100" rx="4" fill="#1e293b" stroke="#374151" strokeWidth="1" />
          <rect x="215" y="385" width="50" height="60" rx="2" fill="url(#optimizeGrad)" className="grow-animation" style={{ transformOrigin: '240px 445px', animationDelay: '0.6s' }} />
          <text x="240" y="470" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">Uptime</text>
        </g>

        <g className="float-animation float-delay-1">
          <rect x="290" y="350" width="60" height="100" rx="4" fill="#1e293b" stroke="#374151" strokeWidth="1" />
          <rect x="295" y="395" width="50" height="50" rx="2" fill="url(#optimizeGrad)" className="grow-animation" style={{ transformOrigin: '320px 445px', animationDelay: '0.9s' }} />
          <text x="320" y="470" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">Cost</text>
        </g>

        {/* Metric cards */}
        <g className="float-animation">
          <rect x="40" y="80" width="100" height="50" rx="8" fill="#1e293b" stroke="#22c55e" strokeWidth="1.5" />
          <text x="90" y="105" textAnchor="middle" fill="#22c55e" fontSize="14" fontFamily="monospace" fontWeight="bold">99.9%</text>
          <text x="90" y="120" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Uptime</text>
        </g>

        <g className="float-animation float-delay-2">
          <rect x="310" y="80" width="100" height="50" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="360" y="105" textAnchor="middle" fill="#3b82f6" fontSize="14" fontFamily="monospace" fontWeight="bold">85ms</text>
          <text x="360" y="120" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Latency</text>
        </g>

        {/* Decorative elements */}
        <circle cx="50" cy="250" r="5" fill="#22c55e" className="pulse-animation" />
        <circle cx="400" cy="250" r="5" fill="#3b82f6" className="pulse-animation" style={{ animationDelay: '1s' }} />

        <rect x="370" y="200" width="8" height="8" fill="none" stroke="#f59e0b" strokeWidth="1" transform="rotate(45 374 204)" className="pulse-animation" />
      </svg>
    </div>
  );
}
