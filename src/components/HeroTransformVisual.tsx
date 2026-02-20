'use client';

export default function HeroTransformVisual() {
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
        @keyframes morph {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.05) rotate(5deg); }
        }
        @keyframes progress {
          0% { stroke-dashoffset: 283; }
          100% { stroke-dashoffset: 28; }
        }
        .float-animation { animation: float 4s ease-in-out infinite; }
        .float-delay-1 { animation-delay: 0.5s; }
        .float-delay-2 { animation-delay: 1s; }
        .pulse-animation { animation: pulse 3s ease-in-out infinite; }
        .morph-animation { animation: morph 4s ease-in-out infinite; }
        .progress-animation { animation: progress 3s ease-in-out infinite; }
      `}</style>

      <svg viewBox="0 0 450 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="transformGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Central transformation circle */}
        <g className="morph-animation" style={{ transformOrigin: '225px 220px' }}>
          <circle cx="225" cy="220" r="80" fill="url(#transformGrad)" stroke="#22c55e" strokeWidth="3" />

          {/* Progress ring */}
          <circle
            cx="225" cy="220" r="90"
            fill="none"
            stroke="#1e293b"
            strokeWidth="8"
          />
          <circle
            cx="225" cy="220" r="90"
            fill="none"
            stroke="#22c55e"
            strokeWidth="8"
            strokeDasharray="283"
            strokeLinecap="round"
            className="progress-animation"
            transform="rotate(-90 225 220)"
          />

          <text x="225" y="205" textAnchor="middle" fill="#22c55e" fontSize="14" fontFamily="monospace" fontWeight="bold">90%</text>
          <text x="225" y="225" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">AI Adoption</text>
          <text x="225" y="245" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">by 2026</text>
        </g>

        {/* Transformation phases */}
        <g className="float-animation">
          <rect x="40" y="100" width="80" height="45" rx="8" fill="#1e293b" stroke="#22c55e" strokeWidth="1.5" />
          <text x="80" y="120" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="monospace">ASSESS</text>
          <text x="80" y="135" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Phase 1</text>
        </g>

        <g className="float-animation float-delay-1">
          <rect x="330" y="100" width="80" height="45" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="370" y="120" textAnchor="middle" fill="#3b82f6" fontSize="9" fontFamily="monospace">PILOT</text>
          <text x="370" y="135" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Phase 2</text>
        </g>

        <g className="float-animation float-delay-2">
          <rect x="40" y="320" width="80" height="45" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="80" y="340" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontFamily="monospace">SCALE</text>
          <text x="80" y="355" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Phase 3</text>
        </g>

        <g className="float-animation">
          <rect x="330" y="320" width="80" height="45" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="370" y="340" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="monospace">TRANSFORM</text>
          <text x="370" y="355" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Phase 4</text>
        </g>

        {/* Connection arrows */}
        <path d="M120 122 L145 170" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5" />
        <path d="M330 122 L305 170" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5" />
        <path d="M120 342 L145 290" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5" />
        <path d="M330 342 L305 290" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.5" />

        {/* Market stats */}
        <g className="float-animation float-delay-1">
          <rect x="70" y="410" width="130" height="50" rx="8" fill="#1e293b" stroke="#22c55e" strokeWidth="1" />
          <text x="135" y="432" textAnchor="middle" fill="#22c55e" fontSize="14" fontFamily="monospace" fontWeight="bold">$15.7T</text>
          <text x="135" y="450" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">AI Economy 2030</text>
        </g>

        <g className="float-animation float-delay-2">
          <rect x="250" y="410" width="130" height="50" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
          <text x="315" y="432" textAnchor="middle" fill="#3b82f6" fontSize="14" fontFamily="monospace" fontWeight="bold">40%</text>
          <text x="315" y="450" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Productivity Gain</text>
        </g>

        {/* Decorative elements */}
        <circle cx="175" cy="160" r="5" fill="#22c55e" className="pulse-animation" />
        <circle cx="275" cy="160" r="5" fill="#3b82f6" className="pulse-animation" style={{ animationDelay: '0.5s' }} />
        <circle cx="175" cy="280" r="5" fill="#8b5cf6" className="pulse-animation" style={{ animationDelay: '1s' }} />
        <circle cx="275" cy="280" r="5" fill="#f59e0b" className="pulse-animation" style={{ animationDelay: '1.5s' }} />

        {/* Top label */}
        <g className="float-animation">
          <rect x="160" y="40" width="130" height="30" rx="6" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="1" />
          <text x="225" y="60" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace">AI TRANSFORMATION</text>
        </g>
      </svg>
    </div>
  );
}
