'use client';

export default function HeroOperationsVisual() {
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
        @keyframes dataFlow {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes scaleBreath {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pingPong {
          0%, 100% { cx: 60; }
          50% { cx: 340; }
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
        .data-flow {
          animation: dataFlow 2s linear infinite;
        }
        .fade-animation {
          animation: fadeInOut 4s ease-in-out infinite;
        }
        .breathe {
          animation: scaleBreath 4s ease-in-out infinite;
        }
        .rotate-slow {
          animation: rotate 20s linear infinite;
        }
        .ping-pong {
          animation: pingPong 4s ease-in-out infinite;
        }
      `}</style>

      {/* Main SVG Illustration - MLOps Pipeline */}
      <svg
        viewBox="0 0 400 450"
        className="w-full h-full float-animation"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background grid */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#22c55e" strokeWidth="0.3" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="400" height="450" fill="url(#grid)" opacity="0.3" />

        {/* Central Pipeline visualization */}
        {/* Data Pipeline - Top */}
        <g className="float-slow">
          <rect x="50" y="40" width="300" height="50" rx="8" fill="#F5F3F0" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="200" y="60" textAnchor="middle" fill="#3b82f6" fontSize="10" fontFamily="monospace" fontWeight="600">DATA PIPELINE</text>
          <text x="200" y="78" textAnchor="middle" fill="#1e293b" fontSize="8" fontFamily="monospace">ETL • Feature Store • Streaming</text>

          {/* Data flow dots */}
          <circle r="4" fill="#3b82f6" className="ping-pong">
            <animate attributeName="cy" values="65;65" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Connecting line */}
        <line x1="200" y1="90" x2="200" y2="120" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 2" className="data-flow" />

        {/* Model Training Box */}
        <g className="float-slow float-delay-1" style={{ transformOrigin: '200px 155px' }}>
          <rect x="80" y="120" width="240" height="70" rx="10" fill="#F5F3F0" stroke="#22c55e" strokeWidth="2" />

          {/* Inner boxes */}
          <rect x="95" y="135" width="60" height="40" rx="4" fill="#ffffff" stroke="#22c55e" strokeWidth="1" />
          <text x="125" y="158" textAnchor="middle" fill="#22c55e" fontSize="8" fontFamily="monospace">TRAIN</text>

          <rect x="170" y="135" width="60" height="40" rx="4" fill="#ffffff" stroke="#3b82f6" strokeWidth="1" />
          <text x="200" y="158" textAnchor="middle" fill="#3b82f6" fontSize="8" fontFamily="monospace">VALIDATE</text>

          <rect x="245" y="135" width="60" height="40" rx="4" fill="#ffffff" stroke="#8b5cf6" strokeWidth="1" />
          <text x="275" y="158" textAnchor="middle" fill="#8b5cf6" fontSize="8" fontFamily="monospace">OPTIMIZE</text>

          {/* Flow arrows */}
          <path d="M155 155 L165 155" stroke="#22c55e" strokeWidth="1" markerEnd="url(#arrow)" />
          <path d="M230 155 L240 155" stroke="#3b82f6" strokeWidth="1" markerEnd="url(#arrow)" />
        </g>

        {/* Connecting line */}
        <line x1="200" y1="190" x2="200" y2="220" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 2" className="data-flow" />

        {/* Deployment Box - Main */}
        <g className="breathe" style={{ transformOrigin: '200px 270px' }}>
          <rect x="60" y="220" width="280" height="100" rx="12" fill="#F5F3F0" stroke="#22c55e" strokeWidth="2" />
          <text x="200" y="245" textAnchor="middle" fill="#22c55e" fontSize="12" fontFamily="monospace" fontWeight="600">DEPLOYMENT</text>

          {/* Server icons */}
          <g transform="translate(85, 255)">
            <rect width="50" height="50" rx="6" fill="#ffffff" stroke="#22c55e" strokeWidth="1" />
            <rect x="8" y="10" width="34" height="6" rx="2" fill="#22c55e" fillOpacity="0.5" />
            <rect x="8" y="20" width="34" height="6" rx="2" fill="#22c55e" fillOpacity="0.3" />
            <rect x="8" y="30" width="34" height="6" rx="2" fill="#22c55e" fillOpacity="0.2" />
            <circle cx="42" cy="44" r="3" fill="#22c55e" className="pulse-animation" />
          </g>

          <g transform="translate(175, 255)">
            <rect width="50" height="50" rx="6" fill="#ffffff" stroke="#3b82f6" strokeWidth="1" />
            <rect x="8" y="10" width="34" height="6" rx="2" fill="#3b82f6" fillOpacity="0.5" />
            <rect x="8" y="20" width="34" height="6" rx="2" fill="#3b82f6" fillOpacity="0.3" />
            <rect x="8" y="30" width="34" height="6" rx="2" fill="#3b82f6" fillOpacity="0.2" />
            <circle cx="42" cy="44" r="3" fill="#3b82f6" className="pulse-animation" style={{ animationDelay: '0.5s' }} />
          </g>

          <g transform="translate(265, 255)">
            <rect width="50" height="50" rx="6" fill="#ffffff" stroke="#8b5cf6" strokeWidth="1" />
            <rect x="8" y="10" width="34" height="6" rx="2" fill="#8b5cf6" fillOpacity="0.5" />
            <rect x="8" y="20" width="34" height="6" rx="2" fill="#8b5cf6" fillOpacity="0.3" />
            <rect x="8" y="30" width="34" height="6" rx="2" fill="#8b5cf6" fillOpacity="0.2" />
            <circle cx="42" cy="44" r="3" fill="#8b5cf6" className="pulse-animation" style={{ animationDelay: '1s' }} />
          </g>
        </g>

        {/* Connecting line */}
        <line x1="200" y1="320" x2="200" y2="350" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 2" className="data-flow" />

        {/* Monitoring Box */}
        <g className="float-slow float-delay-2">
          <rect x="70" y="350" width="260" height="70" rx="10" fill="#F5F3F0" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="200" y="373" textAnchor="middle" fill="#f59e0b" fontSize="10" fontFamily="monospace" fontWeight="600">MONITORING</text>

          {/* Mini chart */}
          <polyline
            points="100,405 130,395 160,400 190,385 220,390 250,380 280,388 300,382"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
            className="pulse-animation"
          />
          <circle cx="300" cy="382" r="4" fill="#22c55e" className="pulse-animation" />
        </g>

        {/* Side Labels */}
        {/* Left side - Human in Loop */}
        <g className="float-slow float-delay-1">
          <rect x="10" y="170" width="40" height="80" rx="6" fill="#F5F3F0" stroke="#ec4899" strokeWidth="1" />
          <text x="30" y="195" textAnchor="middle" fill="#ec4899" fontSize="8" fontFamily="monospace">H</text>
          <text x="30" y="207" textAnchor="middle" fill="#ec4899" fontSize="8" fontFamily="monospace">U</text>
          <text x="30" y="219" textAnchor="middle" fill="#ec4899" fontSize="8" fontFamily="monospace">M</text>
          <text x="30" y="231" textAnchor="middle" fill="#ec4899" fontSize="8" fontFamily="monospace">A</text>
          <text x="30" y="243" textAnchor="middle" fill="#ec4899" fontSize="8" fontFamily="monospace">N</text>
          <line x1="50" y1="210" x2="60" y2="270" stroke="#ec4899" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
        </g>

        {/* Right side - APIs */}
        <g className="float-slow float-delay-3">
          <rect x="350" y="170" width="40" height="80" rx="6" fill="#F5F3F0" stroke="#06b6d4" strokeWidth="1" />
          <text x="370" y="200" textAnchor="middle" fill="#06b6d4" fontSize="8" fontFamily="monospace">A</text>
          <text x="370" y="212" textAnchor="middle" fill="#06b6d4" fontSize="8" fontFamily="monospace">P</text>
          <text x="370" y="224" textAnchor="middle" fill="#06b6d4" fontSize="8" fontFamily="monospace">I</text>
          <text x="370" y="236" textAnchor="middle" fill="#06b6d4" fontSize="8" fontFamily="monospace">s</text>
          <line x1="350" y1="210" x2="340" y2="270" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
        </g>

        {/* Floating decorations */}
        <rect x="25" y="60" width="10" height="10" fill="none" stroke="#22c55e" strokeWidth="1.5" transform="rotate(45 30 65)" className="pulse-animation" />
        <rect x="365" y="50" width="8" height="8" fill="#3b82f6" transform="rotate(45 369 54)" className="fade-animation" />
        <rect x="355" y="380" width="12" height="12" fill="none" stroke="#22c55e" strokeWidth="1.5" transform="rotate(45 361 386)" className="pulse-animation" style={{ animationDelay: '1.5s' }} />
        <rect x="25" y="390" width="10" height="10" fill="#f59e0b" transform="rotate(45 30 395)" className="fade-animation" style={{ animationDelay: '0.5s' }} />
      </svg>

      {/* Floating metric labels */}
      <div className="absolute left-0 top-[12%] px-3 py-1.5 bg-[#F5F3F0] border border-green-500/50 rounded-md backdrop-blur-sm transition-all hover:border-green-500 hover:scale-105 float-slow shadow-sm">
        <span className="text-xs text-gray-700 font-mono">99.9% Uptime</span>
      </div>
      <div className="absolute right-0 top-[32%] px-3 py-1.5 bg-[#F5F3F0] border border-green-500/50 rounded-md backdrop-blur-sm transition-all hover:border-green-500 hover:scale-105 float-slow float-delay-1 shadow-sm">
        <span className="text-xs text-gray-700 font-mono">Auto-scale</span>
      </div>
      <div className="absolute left-[5%] bottom-[22%] px-3 py-1.5 bg-[#F5F3F0] border border-orange-500/50 rounded-md backdrop-blur-sm transition-all hover:border-orange-500 hover:scale-105 float-slow float-delay-2 shadow-sm">
        <span className="text-xs text-gray-700 font-mono">Real-time</span>
      </div>

      {/* Platform logos */}
      <div className="absolute left-[10%] top-[5%] w-10 h-10 rounded-lg bg-[#FF9900] flex items-center justify-center shadow-lg shadow-[#FF9900]/30 float-animation transition-transform hover:scale-110">
        <span className="text-white font-bold text-xs">AWS</span>
      </div>

      <div className="absolute right-[12%] top-[8%] w-10 h-10 rounded-lg bg-[#0078D4] flex items-center justify-center shadow-lg shadow-[#0078D4]/30 float-animation float-delay-1 transition-transform hover:scale-110">
        <span className="text-white font-bold text-[10px]">Azure</span>
      </div>

      <div className="absolute right-[8%] bottom-[18%] w-10 h-10 rounded-lg bg-[#4285F4] flex items-center justify-center shadow-lg shadow-[#4285F4]/30 float-animation float-delay-2 transition-transform hover:scale-110">
        <span className="text-white font-bold text-xs">GCP</span>
      </div>

      <div className="absolute left-[8%] bottom-[35%] w-10 h-10 rounded-lg bg-[#E34F26] flex items-center justify-center shadow-lg shadow-[#E34F26]/30 float-animation float-delay-3 transition-transform hover:scale-110">
        <span className="text-white font-bold text-[9px]">K8s</span>
      </div>
    </div>
  );
}
