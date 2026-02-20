'use client';

export default function HeroBuildVisual() {
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
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        .float-animation { animation: float 4s ease-in-out infinite; }
        .float-delay-1 { animation-delay: 0.5s; }
        .float-delay-2 { animation-delay: 1s; }
        .float-delay-3 { animation-delay: 1.5s; }
        .pulse-animation { animation: pulse 3s ease-in-out infinite; }
        .rotate-animation { animation: rotate 20s linear infinite; }
        .dash-animation { animation: dash 1s linear infinite; }
      `}</style>

      <svg viewBox="0 0 450 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="buildGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Central code/build icon */}
        <g className="float-animation" style={{ transformOrigin: '225px 250px' }}>
          <rect x="150" y="175" width="150" height="150" rx="20" fill="url(#buildGrad)" stroke="#22c55e" strokeWidth="2" />
          <text x="225" y="235" textAnchor="middle" fill="#22c55e" fontSize="40" fontFamily="monospace">{'</>'}</text>
          <text x="225" y="270" textAnchor="middle" fill="#22c55e" fontSize="12" fontFamily="monospace">BUILD</text>
          <text x="225" y="290" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">AI Systems</text>
        </g>

        {/* Orbiting elements */}
        <g className="rotate-animation" style={{ transformOrigin: '225px 250px' }}>
          <circle cx="225" cy="100" r="25" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="225" y="105" textAnchor="middle" fill="#3b82f6" fontSize="10" fontFamily="monospace">LLM</text>
        </g>

        <g className="rotate-animation" style={{ transformOrigin: '225px 250px', animationDirection: 'reverse', animationDuration: '25s' }}>
          <circle cx="350" cy="250" r="25" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="350" y="255" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontFamily="monospace">ML</text>
        </g>

        {/* Connection lines */}
        <circle cx="225" cy="250" r="120" fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="5 5" opacity="0.3" className="dash-animation" />
        <circle cx="225" cy="250" r="170" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5 5" opacity="0.2" />

        {/* Phase boxes */}
        <g className="float-animation float-delay-1">
          <rect x="30" y="120" width="80" height="45" rx="8" fill="#1e293b" stroke="#22c55e" strokeWidth="1.5" />
          <text x="70" y="140" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="monospace">01</text>
          <text x="70" y="155" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Discovery</text>
        </g>

        <g className="float-animation float-delay-2">
          <rect x="340" y="120" width="80" height="45" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="380" y="140" textAnchor="middle" fill="#3b82f6" fontSize="9" fontFamily="monospace">02</text>
          <text x="380" y="155" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Design</text>
        </g>

        <g className="float-animation float-delay-3">
          <rect x="30" y="340" width="80" height="45" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="70" y="360" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontFamily="monospace">03</text>
          <text x="70" y="375" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Build</text>
        </g>

        <g className="float-animation">
          <rect x="340" y="340" width="80" height="45" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="380" y="360" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="monospace">04</text>
          <text x="380" y="375" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Deploy</text>
        </g>

        {/* Bottom status */}
        <g className="float-animation float-delay-2">
          <rect x="130" y="440" width="190" height="35" rx="8" fill="#1e293b" stroke="#22c55e" strokeWidth="1" />
          <text x="225" y="462" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace">
            PRODUCTION READY
          </text>
        </g>

        {/* Decorative dots */}
        <circle cx="120" cy="200" r="4" fill="#22c55e" className="pulse-animation" />
        <circle cx="330" cy="200" r="4" fill="#3b82f6" className="pulse-animation" style={{ animationDelay: '0.5s' }} />
        <circle cx="120" cy="300" r="4" fill="#8b5cf6" className="pulse-animation" style={{ animationDelay: '1s' }} />
        <circle cx="330" cy="300" r="4" fill="#f59e0b" className="pulse-animation" style={{ animationDelay: '1.5s' }} />
      </svg>
    </div>
  );
}
