'use client';

export default function HeroStaffVisual() {
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
        @keyframes connectPulse {
          0%, 100% { stroke-dashoffset: 0; }
          50% { stroke-dashoffset: 20; }
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
        .connect-pulse {
          animation: connectPulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* Main SVG Illustration - Team Network */}
      <svg
        viewBox="0 0 400 450"
        className="w-full h-full float-animation"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background grid */}
        <defs>
          <pattern id="staffGrid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#22c55e" strokeWidth="0.3" opacity="0.15" />
          </pattern>
        </defs>
        <rect width="400" height="450" fill="url(#staffGrid)" opacity="0.3" />

        {/* Your Organization - Left */}
        <g className="float-slow">
          <rect x="20" y="150" width="100" height="100" rx="12" fill="#F5F3F0" stroke="#3b82f6" strokeWidth="2" />
          <text x="70" y="185" textAnchor="middle" fill="#1e293b" fontSize="10" fontFamily="monospace" fontWeight="600">YOUR</text>
          <text x="70" y="200" textAnchor="middle" fill="#1e293b" fontSize="10" fontFamily="monospace" fontWeight="600">TEAM</text>

          {/* Team icons */}
          <circle cx="45" cy="225" r="10" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1" />
          <circle cx="70" cy="225" r="10" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1" />
          <circle cx="95" cy="225" r="10" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1" />
        </g>

        {/* FSIT AI Team - Center */}
        <g className="breathe" style={{ transformOrigin: '200px 200px' }}>
          {/* Outer glow */}
          <circle cx="200" cy="200" r="70" fill="#22c55e" fillOpacity="0.05" stroke="#22c55e" strokeWidth="1" strokeDasharray="6 3" />

          {/* Main box */}
          <rect x="145" y="145" width="110" height="110" rx="16" fill="#F5F3F0" stroke="#22c55e" strokeWidth="2" />

          <text x="200" y="175" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="600">FSIT</text>
          <text x="200" y="190" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="600">AI TEAM</text>

          {/* Specialist icons */}
          <g transform="translate(160, 205)">
            <circle r="12" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="600">AI</text>
          </g>
          <g transform="translate(200, 205)">
            <circle r="12" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="600">ML</text>
          </g>
          <g transform="translate(240, 205)">
            <circle r="12" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="600">DS</text>
          </g>

          {/* Bottom row */}
          <g transform="translate(180, 235)">
            <circle r="10" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1" />
          </g>
          <g transform="translate(220, 235)">
            <circle r="10" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1" />
          </g>
        </g>

        {/* Production Systems - Right */}
        <g className="float-slow float-delay-1">
          <rect x="280" y="150" width="100" height="100" rx="12" fill="#F5F3F0" stroke="#8b5cf6" strokeWidth="2" />
          <text x="330" y="185" textAnchor="middle" fill="#1e293b" fontSize="10" fontFamily="monospace" fontWeight="600">PRODUCTION</text>
          <text x="330" y="200" textAnchor="middle" fill="#1e293b" fontSize="10" fontFamily="monospace" fontWeight="600">AI</text>

          {/* System icons */}
          <rect x="300" y="215" width="15" height="20" rx="2" fill="#8b5cf6" fillOpacity="0.3" stroke="#8b5cf6" strokeWidth="1" />
          <rect x="322" y="215" width="15" height="20" rx="2" fill="#8b5cf6" fillOpacity="0.3" stroke="#8b5cf6" strokeWidth="1" />
          <rect x="344" y="215" width="15" height="20" rx="2" fill="#8b5cf6" fillOpacity="0.3" stroke="#8b5cf6" strokeWidth="1" />
        </g>

        {/* Connection lines */}
        <g className="connect-pulse">
          {/* Left to center */}
          <path d="M120 200 L145 200" stroke="#22c55e" strokeWidth="2" strokeDasharray="6 4" />
          <circle cx="132" cy="200" r="4" fill="#22c55e" className="pulse-animation" />

          {/* Center to right */}
          <path d="M255 200 L280 200" stroke="#22c55e" strokeWidth="2" strokeDasharray="6 4" />
          <circle cx="267" cy="200" r="4" fill="#22c55e" className="pulse-animation" style={{ animationDelay: '0.5s' }} />
        </g>

        {/* Arrow indicators */}
        <polygon points="140,195 145,200 140,205" fill="#22c55e" />
        <polygon points="275,195 280,200 275,205" fill="#22c55e" />

        {/* Top label */}
        <g className="breathe" style={{ transformOrigin: '200px 50px' }}>
          <rect x="100" y="30" width="200" height="36" rx="4" fill="#F5F3F0" stroke="#22c55e" strokeWidth="1.5" />
          <text x="200" y="54" textAnchor="middle" fill="#22c55e" fontSize="11" fontFamily="monospace" fontWeight="600">
            STAFF AUGMENTATION
          </text>
        </g>

        {/* Role cards - top */}
        <g className="float-slow float-delay-2">
          <rect x="50" y="80" width="80" height="30" rx="4" fill="#F5F3F0" stroke="#22c55e" strokeWidth="1" />
          <text x="90" y="100" textAnchor="middle" fill="#1e293b" fontSize="9" fontFamily="monospace" fontWeight="500">AI Engineers</text>
        </g>
        <g className="float-slow float-delay-3">
          <rect x="270" y="80" width="80" height="30" rx="4" fill="#F5F3F0" stroke="#3b82f6" strokeWidth="1" />
          <text x="310" y="100" textAnchor="middle" fill="#1e293b" fontSize="9" fontFamily="monospace" fontWeight="500">ML Engineers</text>
        </g>

        {/* Role cards - bottom */}
        <g className="float-slow float-delay-1">
          <rect x="50" y="290" width="80" height="30" rx="4" fill="#F5F3F0" stroke="#8b5cf6" strokeWidth="1" />
          <text x="90" y="310" textAnchor="middle" fill="#1e293b" fontSize="9" fontFamily="monospace" fontWeight="500">Data Scientists</text>
        </g>
        <g className="float-slow">
          <rect x="270" y="290" width="80" height="30" rx="4" fill="#F5F3F0" stroke="#f59e0b" strokeWidth="1" />
          <text x="310" y="310" textAnchor="middle" fill="#1e293b" fontSize="9" fontFamily="monospace" fontWeight="500">MLOps</text>
        </g>

        {/* Bottom stats bar */}
        <g className="float-slow float-delay-2">
          <rect x="60" y="380" width="280" height="50" rx="8" fill="#1e293b" stroke="#22c55e" strokeWidth="1" opacity="0.95" />
          <text x="120" y="400" textAnchor="middle" fill="#22c55e" fontSize="18" fontFamily="monospace" fontWeight="700">80K+</text>
          <text x="120" y="418" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Specialists</text>
          <text x="200" y="400" textAnchor="middle" fill="#3b82f6" fontSize="18" fontFamily="monospace" fontWeight="700">98%</text>
          <text x="200" y="418" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Success</text>
          <text x="280" y="400" textAnchor="middle" fill="#8b5cf6" fontSize="18" fontFamily="monospace" fontWeight="700">3wk</text>
          <text x="280" y="418" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Deploy</text>
        </g>

        {/* Floating decorations */}
        <rect x="15" y="120" width="8" height="8" fill="none" stroke="#22c55e" strokeWidth="1.5" transform="rotate(45 19 124)" className="pulse-animation" />
        <rect x="377" y="120" width="6" height="6" fill="#3b82f6" transform="rotate(45 380 123)" className="fade-animation" />
        <rect x="15" y="280" width="6" height="6" fill="#8b5cf6" transform="rotate(45 18 283)" className="fade-animation" style={{ animationDelay: '0.5s' }} />
        <rect x="377" y="280" width="8" height="8" fill="none" stroke="#f59e0b" strokeWidth="1" transform="rotate(45 381 284)" className="pulse-animation" style={{ animationDelay: '1s' }} />
      </svg>

      {/* Floating metric labels */}
      <div className="absolute left-0 top-[15%] px-3 py-1.5 bg-[#F5F3F0] border border-green-500/50 rounded-md backdrop-blur-sm transition-all hover:border-green-500 hover:scale-105 float-slow shadow-sm">
        <span className="text-xs text-gray-700 font-mono">Vetted Talent</span>
      </div>
      <div className="absolute right-0 top-[30%] px-3 py-1.5 bg-[#F5F3F0] border border-green-500/50 rounded-md backdrop-blur-sm transition-all hover:border-green-500 hover:scale-105 float-slow float-delay-1 shadow-sm">
        <span className="text-xs text-gray-700 font-mono">Full Integration</span>
      </div>
      <div className="absolute left-[5%] bottom-[28%] px-3 py-1.5 bg-[#F5F3F0] border border-purple-500/50 rounded-md backdrop-blur-sm transition-all hover:border-purple-500 hover:scale-105 float-slow float-delay-2 shadow-sm">
        <span className="text-xs text-gray-700 font-mono">Dedicated</span>
      </div>
    </div>
  );
}
