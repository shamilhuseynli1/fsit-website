'use client';

export default function HeroLeverageVisual() {
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
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        @keyframes flow {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        .float-animation { animation: float 4s ease-in-out infinite; }
        .float-delay-1 { animation-delay: 0.5s; }
        .float-delay-2 { animation-delay: 1s; }
        .pulse-animation { animation: pulse 3s ease-in-out infinite; }
        .orbit-animation { animation: orbit 15s linear infinite; }
        .flow-animation { animation: flow 2s linear infinite; }
      `}</style>

      <svg viewBox="0 0 450 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="leverageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Central AI brain */}
        <g className="float-animation" style={{ transformOrigin: '225px 230px' }}>
          <circle cx="225" cy="230" r="70" fill="url(#leverageGrad)" stroke="#22c55e" strokeWidth="3" />
          <circle cx="225" cy="230" r="55" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.5" />

          {/* Brain/AI symbol */}
          <text x="225" y="220" textAnchor="middle" fill="#22c55e" fontSize="30">AI</text>
          <text x="225" y="250" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">LEVERAGE</text>
        </g>

        {/* Orbiting service nodes */}
        <circle cx="225" cy="230" r="130" fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="8 4" opacity="0.2" />

        <g className="orbit-animation" style={{ transformOrigin: '225px 230px' }}>
          <circle cx="325" cy="230" r="20" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="325" y="234" textAnchor="middle" fill="#3b82f6" fontSize="8" fontFamily="monospace">DEV</text>
        </g>

        <g className="orbit-animation" style={{ transformOrigin: '225px 230px', animationDelay: '-5s' }}>
          <circle cx="325" cy="230" r="20" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="325" y="234" textAnchor="middle" fill="#8b5cf6" fontSize="8" fontFamily="monospace">OPS</text>
        </g>

        <g className="orbit-animation" style={{ transformOrigin: '225px 230px', animationDelay: '-10s' }}>
          <circle cx="325" cy="230" r="20" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="325" y="234" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">INT</text>
        </g>

        {/* Service boxes */}
        <g className="float-animation">
          <rect x="30" y="80" width="100" height="55" rx="8" fill="#1e293b" stroke="#22c55e" strokeWidth="1.5" />
          <text x="80" y="103" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace">Consulting</text>
          <text x="80" y="120" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Strategy</text>
        </g>

        <g className="float-animation float-delay-1">
          <rect x="320" y="80" width="100" height="55" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="370" y="103" textAnchor="middle" fill="#3b82f6" fontSize="10" fontFamily="monospace">Development</text>
          <text x="370" y="120" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Custom AI</text>
        </g>

        <g className="float-animation float-delay-2">
          <rect x="30" y="360" width="100" height="55" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="80" y="383" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontFamily="monospace">Integration</text>
          <text x="80" y="400" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Systems</text>
        </g>

        <g className="float-animation">
          <rect x="320" y="360" width="100" height="55" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="370" y="383" textAnchor="middle" fill="#f59e0b" fontSize="10" fontFamily="monospace">Operations</text>
          <text x="370" y="400" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Support</text>
        </g>

        {/* Connection lines */}
        <path d="M130 107 L160 180" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 2" opacity="0.4" className="flow-animation" />
        <path d="M320 107 L290 180" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2" opacity="0.4" className="flow-animation" />
        <path d="M130 387 L160 310" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 2" opacity="0.4" className="flow-animation" />
        <path d="M320 387 L290 310" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 2" opacity="0.4" className="flow-animation" />

        {/* Bottom status */}
        <g className="float-animation float-delay-1">
          <rect x="140" y="450" width="170" height="35" rx="8" fill="#1e293b" stroke="#22c55e" strokeWidth="1" />
          <text x="225" y="472" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace">98% SUCCESS RATE</text>
        </g>

        {/* Decorative dots */}
        <circle cx="180" cy="160" r="4" fill="#22c55e" className="pulse-animation" />
        <circle cx="270" cy="160" r="4" fill="#3b82f6" className="pulse-animation" style={{ animationDelay: '0.5s' }} />
        <circle cx="180" cy="300" r="4" fill="#8b5cf6" className="pulse-animation" style={{ animationDelay: '1s' }} />
        <circle cx="270" cy="300" r="4" fill="#f59e0b" className="pulse-animation" style={{ animationDelay: '1.5s' }} />
      </svg>
    </div>
  );
}
