'use client';

export default function HeroVettingVisual() {
  return (
    <div className="relative w-full h-[500px]">
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes scaleBreath {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @keyframes funnelFlow {
          0% { transform: translateY(-10px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }
        .float-slow {
          animation: floatSlow 5s ease-in-out infinite;
        }
        .float-delay-1 {
          animation-delay: 0.5s;
        }
        .float-delay-2 {
          animation-delay: 1s;
        }
        .float-delay-3 {
          animation-delay: 1.5s;
        }
        .pulse-animation {
          animation: pulse 3s ease-in-out infinite;
        }
        .fade-animation {
          animation: fadeInOut 4s ease-in-out infinite;
        }
        .breathe {
          animation: scaleBreath 4s ease-in-out infinite;
        }
        .funnel-flow {
          animation: funnelFlow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Main SVG Illustration - Vetting Funnel */}
      <svg
        viewBox="0 0 400 450"
        className="w-full h-full float-animation"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background grid */}
        <defs>
          <pattern id="vetGrid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#22c55e" strokeWidth="0.3" opacity="0.15" />
          </pattern>
          <linearGradient id="funnelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect width="400" height="450" fill="url(#vetGrid)" opacity="0.3" />

        {/* Top label */}
        <g className="breathe" style={{ transformOrigin: '200px 30px' }}>
          <rect x="100" y="15" width="200" height="36" rx="4" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          <text x="200" y="39" textAnchor="middle" fill="#22c55e" fontSize="11" fontFamily="monospace" fontWeight="500">
            5-STEP VETTING
          </text>
        </g>

        {/* Funnel shape */}
        <g className="breathe" style={{ transformOrigin: '200px 250px' }}>
          {/* Funnel outline */}
          <path
            d="M70 80 L330 80 L280 200 L250 350 L150 350 L120 200 Z"
            fill="url(#funnelGrad)"
            stroke="#22c55e"
            strokeWidth="2"
          />

          {/* Funnel segments */}
          <line x1="85" y1="120" x2="315" y2="120" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
          <line x1="100" y1="160" x2="300" y2="160" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
          <line x1="115" y1="200" x2="285" y2="200" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
          <line x1="130" y1="250" x2="270" y2="250" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
          <line x1="145" y1="300" x2="255" y2="300" stroke="#ec4899" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
        </g>

        {/* Stage labels - Left side */}
        <g className="float-slow">
          <rect x="15" y="85" width="50" height="25" rx="4" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="40" y="102" textAnchor="middle" fill="#3b82f6" fontSize="9" fontFamily="monospace">100%</text>
          <text x="40" y="75" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">Applicants</text>
        </g>

        <g className="float-slow float-delay-1">
          <rect x="15" y="135" width="50" height="25" rx="4" fill="#1e293b" stroke="#22c55e" strokeWidth="1.5" />
          <text x="40" y="152" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="monospace">40%</text>
          <text x="40" y="125" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">Screen</text>
        </g>

        <g className="float-slow float-delay-2">
          <rect x="15" y="185" width="50" height="25" rx="4" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="40" y="202" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontFamily="monospace">15%</text>
          <text x="40" y="175" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">Evaluate</text>
        </g>

        <g className="float-slow float-delay-3">
          <rect x="15" y="235" width="50" height="25" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="40" y="252" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="monospace">5%</text>
          <text x="40" y="225" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">Test</text>
        </g>

        <g className="float-slow">
          <rect x="15" y="285" width="50" height="25" rx="4" fill="#1e293b" stroke="#ec4899" strokeWidth="1.5" />
          <text x="40" y="302" textAnchor="middle" fill="#ec4899" fontSize="9" fontFamily="monospace">1%</text>
          <text x="40" y="275" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">Select</text>
        </g>

        {/* Stage labels - Right side */}
        <g className="float-slow float-delay-1">
          <rect x="335" y="85" width="55" height="25" rx="4" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="362" y="102" textAnchor="middle" fill="#3b82f6" fontSize="7" fontFamily="monospace">Technical</text>
        </g>

        <g className="float-slow float-delay-2">
          <rect x="335" y="135" width="55" height="25" rx="4" fill="#1e293b" stroke="#22c55e" strokeWidth="1.5" />
          <text x="362" y="152" textAnchor="middle" fill="#22c55e" fontSize="7" fontFamily="monospace">Delivery</text>
        </g>

        <g className="float-slow float-delay-3">
          <rect x="335" y="185" width="55" height="25" rx="4" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="362" y="202" textAnchor="middle" fill="#8b5cf6" fontSize="7" fontFamily="monospace">Culture</text>
        </g>

        <g className="float-slow">
          <rect x="335" y="235" width="55" height="25" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="362" y="252" textAnchor="middle" fill="#f59e0b" fontSize="7" fontFamily="monospace">Practical</text>
        </g>

        <g className="float-slow float-delay-1">
          <rect x="335" y="285" width="55" height="25" rx="4" fill="#1e293b" stroke="#ec4899" strokeWidth="1.5" />
          <text x="362" y="302" textAnchor="middle" fill="#ec4899" fontSize="7" fontFamily="monospace">Monitor</text>
        </g>

        {/* Flowing particles inside funnel */}
        <circle cx="200" cy="100" r="4" fill="#3b82f6" className="funnel-flow" />
        <circle cx="180" cy="150" r="3" fill="#22c55e" className="funnel-flow" style={{ animationDelay: '0.3s' }} />
        <circle cx="220" cy="200" r="3" fill="#8b5cf6" className="funnel-flow" style={{ animationDelay: '0.6s' }} />
        <circle cx="200" cy="270" r="3" fill="#f59e0b" className="funnel-flow" style={{ animationDelay: '0.9s' }} />

        {/* Output - Elite talent */}
        <g className="breathe" style={{ transformOrigin: '200px 390px' }}>
          <rect x="140" y="360" width="120" height="50" rx="8" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="2" />
          <text x="200" y="382" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="600">ELITE</text>
          <text x="200" y="398" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="600">AI TALENT</text>

          {/* Star decoration */}
          <circle cx="155" cy="390" r="6" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1" className="pulse-animation" />
          <circle cx="245" cy="390" r="6" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1" className="pulse-animation" style={{ animationDelay: '0.5s' }} />
        </g>

        {/* Bottom bar */}
        <g className="float-slow float-delay-2">
          <rect x="100" y="420" width="200" height="25" rx="4" fill="#1e293b" stroke="#22c55e" strokeWidth="1" opacity="0.8" />
          <text x="200" y="437" textAnchor="middle" fill="#22c55e" fontSize="8" fontFamily="monospace">
            99% FILTERED • TOP 1% SELECTED
          </text>
        </g>

        {/* Floating decorations */}
        <rect x="80" y="60" width="8" height="8" fill="none" stroke="#3b82f6" strokeWidth="1.5" transform="rotate(45 84 64)" className="pulse-animation" />
        <rect x="312" y="60" width="6" height="6" fill="#22c55e" transform="rotate(45 315 63)" className="fade-animation" />
        <rect x="75" y="340" width="6" height="6" fill="#f59e0b" transform="rotate(45 78 343)" className="fade-animation" style={{ animationDelay: '0.5s' }} />
        <rect x="318" y="340" width="8" height="8" fill="none" stroke="#ec4899" strokeWidth="1" transform="rotate(45 322 344)" className="pulse-animation" style={{ animationDelay: '1s' }} />
      </svg>

      {/* Floating metric labels */}
      <div className="absolute left-0 top-[12%] px-3 py-1.5 bg-dark-800/80 border border-primary-500/40 rounded-md backdrop-blur-sm transition-all hover:border-primary-500 hover:scale-105 float-slow">
        <span className="text-xs text-primary-400 font-mono">5 Steps</span>
      </div>
      <div className="absolute right-0 top-[25%] px-3 py-1.5 bg-dark-800/80 border border-primary-500/40 rounded-md backdrop-blur-sm transition-all hover:border-primary-500 hover:scale-105 float-slow float-delay-1">
        <span className="text-xs text-primary-400 font-mono">Rigorous</span>
      </div>
      <div className="absolute left-[5%] bottom-[30%] px-3 py-1.5 bg-dark-800/80 border border-primary-600/40 rounded-md backdrop-blur-sm transition-all hover:border-primary-600 hover:scale-105 float-slow float-delay-2">
        <span className="text-xs text-primary-500 font-mono">99% Filter</span>
      </div>
    </div>
  );
}
