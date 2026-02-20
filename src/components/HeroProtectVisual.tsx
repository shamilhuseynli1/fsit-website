'use client';

export default function HeroProtectVisual() {
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
        @keyframes shield {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes scan {
          0% { transform: translateY(-50px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(50px); opacity: 0; }
        }
        .float-animation { animation: float 4s ease-in-out infinite; }
        .float-delay-1 { animation-delay: 0.5s; }
        .float-delay-2 { animation-delay: 1s; }
        .pulse-animation { animation: pulse 3s ease-in-out infinite; }
        .shield-animation { animation: shield 3s ease-in-out infinite; }
        .scan-animation { animation: scan 2s ease-in-out infinite; }
      `}</style>

      <svg viewBox="0 0 450 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Central shield */}
        <g className="shield-animation" style={{ transformOrigin: '225px 220px' }}>
          <path
            d="M225 80 L320 120 L320 220 C320 300 225 360 225 360 C225 360 130 300 130 220 L130 120 Z"
            fill="url(#shieldGrad)"
            stroke="#22c55e"
            strokeWidth="3"
          />
          <path
            d="M225 110 L295 140 L295 215 C295 275 225 320 225 320 C225 320 155 275 155 215 L155 140 Z"
            fill="none"
            stroke="#22c55e"
            strokeWidth="1"
            opacity="0.5"
          />

          {/* Checkmark inside shield */}
          <path d="M190 210 L215 235 L270 180" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />

          <text x="225" y="290" textAnchor="middle" fill="#22c55e" fontSize="12" fontFamily="monospace" fontWeight="bold">PROTECTED</text>
        </g>

        {/* Security layers */}
        <g className="float-animation">
          <rect x="40" y="100" width="70" height="40" rx="6" fill="#1e293b" stroke="#22c55e" strokeWidth="1.5" />
          <text x="75" y="118" textAnchor="middle" fill="#22c55e" fontSize="8" fontFamily="monospace">DATA</text>
          <text x="75" y="130" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">Encrypted</text>
        </g>

        <g className="float-animation float-delay-1">
          <rect x="340" y="100" width="70" height="40" rx="6" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="375" y="118" textAnchor="middle" fill="#3b82f6" fontSize="8" fontFamily="monospace">MODEL</text>
          <text x="375" y="130" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">Secured</text>
        </g>

        <g className="float-animation float-delay-2">
          <rect x="40" y="280" width="70" height="40" rx="6" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="75" y="298" textAnchor="middle" fill="#8b5cf6" fontSize="8" fontFamily="monospace">APP</text>
          <text x="75" y="310" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">Protected</text>
        </g>

        <g className="float-animation">
          <rect x="340" y="280" width="70" height="40" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="375" y="298" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">INFRA</text>
          <text x="375" y="310" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">Hardened</text>
        </g>

        {/* Compliance badges */}
        <g className="float-animation float-delay-1">
          <rect x="100" y="400" width="70" height="35" rx="6" fill="#1e293b" stroke="#22c55e" strokeWidth="1" />
          <text x="135" y="422" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="monospace">SOC 2</text>
        </g>

        <g className="float-animation float-delay-2">
          <rect x="190" y="400" width="70" height="35" rx="6" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
          <text x="225" y="422" textAnchor="middle" fill="#3b82f6" fontSize="9" fontFamily="monospace">ISO</text>
        </g>

        <g className="float-animation">
          <rect x="280" y="400" width="70" height="35" rx="6" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1" />
          <text x="315" y="422" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontFamily="monospace">GDPR</text>
        </g>

        {/* Scanning line */}
        <line x1="130" y1="220" x2="320" y2="220" stroke="#22c55e" strokeWidth="2" opacity="0.5" className="scan-animation" />

        {/* Connection lines */}
        <line x1="110" y1="120" x2="130" y2="150" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 2" opacity="0.3" />
        <line x1="340" y1="120" x2="320" y2="150" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2" opacity="0.3" />
        <line x1="110" y1="300" x2="130" y2="280" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 2" opacity="0.3" />
        <line x1="340" y1="300" x2="320" y2="280" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 2" opacity="0.3" />

        {/* Decorative elements */}
        <circle cx="60" cy="200" r="4" fill="#22c55e" className="pulse-animation" />
        <circle cx="390" cy="200" r="4" fill="#3b82f6" className="pulse-animation" style={{ animationDelay: '1s' }} />

        {/* Stats bar */}
        <g className="float-animation float-delay-2">
          <rect x="140" y="455" width="170" height="30" rx="6" fill="#1e293b" stroke="#22c55e" strokeWidth="1" />
          <text x="225" y="475" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="monospace">99.99% UPTIME</text>
        </g>
      </svg>
    </div>
  );
}
