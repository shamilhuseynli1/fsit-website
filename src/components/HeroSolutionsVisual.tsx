'use client';

export default function HeroSolutionsVisual() {
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
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes scaleBreath {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
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
        .orbit-animation {
          animation: orbit 20s linear infinite;
        }
        .fade-animation {
          animation: fadeInOut 4s ease-in-out infinite;
        }
        .breathe {
          animation: scaleBreath 4s ease-in-out infinite;
        }
      `}</style>

      {/* Main SVG Illustration - AI Solutions Hub */}
      <svg
        viewBox="0 0 400 450"
        className="w-full h-full float-animation"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background grid */}
        <defs>
          <pattern id="solutionsGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#22c55e" strokeWidth="0.3" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="400" height="450" fill="url(#solutionsGrid)" opacity="0.3" />

        {/* Central Hub */}
        <g className="breathe" style={{ transformOrigin: '200px 200px' }}>
          {/* Outer rings */}
          <circle cx="200" cy="200" r="120" stroke="#22c55e" strokeWidth="1" strokeDasharray="8 4" opacity="0.2" />
          <circle cx="200" cy="200" r="90" stroke="#3b82f6" strokeWidth="1" strokeDasharray="6 3" opacity="0.3" />
          <circle cx="200" cy="200" r="60" stroke="#22c55e" strokeWidth="1.5" opacity="0.5" />

          {/* Core hexagon */}
          <polygon
            points="200,150 243,175 243,225 200,250 157,225 157,175"
            fill="#22c55e"
            fillOpacity="0.1"
            stroke="#22c55e"
            strokeWidth="2"
          />

          {/* Inner core */}
          <circle cx="200" cy="200" r="30" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2" />
          <text x="200" y="195" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="600">AI</text>
          <text x="200" y="208" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="600">HUB</text>
        </g>

        {/* Service nodes orbiting */}
        <g className="orbit-animation" style={{ transformOrigin: '200px 200px' }}>
          <circle cx="300" cy="200" r="8" fill="#22c55e" fillOpacity="0.5" stroke="#22c55e" strokeWidth="1" />
        </g>

        {/* Service categories - around the hub */}
        {/* LLM Development */}
        <g className="float-slow">
          <rect x="20" y="60" width="100" height="50" rx="8" fill="#F5F3F0" stroke="#22c55e" strokeWidth="1.5" />
          <text x="70" y="82" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="monospace" fontWeight="600">LLM</text>
          <text x="70" y="95" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="monospace">Development</text>
          <path d="M120 85 Q140 100 157 175" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />
          <circle cx="157" cy="175" r="3" fill="#22c55e" className="pulse-animation" />
        </g>

        {/* AI Agents */}
        <g className="float-slow float-delay-1">
          <rect x="280" y="60" width="100" height="50" rx="8" fill="#F5F3F0" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="330" y="82" textAnchor="middle" fill="#3b82f6" fontSize="9" fontFamily="monospace" fontWeight="600">AI Agents</text>
          <text x="330" y="95" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="monospace">Automation</text>
          <path d="M280 85 Q260 100 243 175" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />
          <circle cx="243" cy="175" r="3" fill="#3b82f6" className="pulse-animation" style={{ animationDelay: '0.5s' }} />
        </g>

        {/* Data Platform */}
        <g className="float-slow float-delay-2">
          <rect x="20" y="300" width="100" height="50" rx="8" fill="#F5F3F0" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="70" y="322" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontFamily="monospace" fontWeight="600">Data</text>
          <text x="70" y="335" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="monospace">Platform</text>
          <path d="M120 325 Q140 300 157 225" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />
          <circle cx="157" cy="225" r="3" fill="#8b5cf6" className="pulse-animation" style={{ animationDelay: '1s' }} />
        </g>

        {/* MLOps */}
        <g className="float-slow float-delay-3">
          <rect x="280" y="300" width="100" height="50" rx="8" fill="#F5F3F0" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="330" y="322" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="monospace" fontWeight="600">MLOps</text>
          <text x="330" y="335" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="monospace">Operations</text>
          <path d="M280 325 Q260 300 243 225" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />
          <circle cx="243" cy="225" r="3" fill="#f59e0b" className="pulse-animation" style={{ animationDelay: '1.5s' }} />
        </g>

        {/* Top label */}
        <g className="breathe" style={{ transformOrigin: '200px 30px' }}>
          <rect x="120" y="15" width="160" height="32" rx="4" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          <text x="200" y="36" textAnchor="middle" fill="#22c55e" fontSize="11" fontFamily="monospace" fontWeight="500">
            AI SOLUTIONS
          </text>
        </g>

        {/* Bottom capabilities */}
        <g className="float-slow float-delay-2">
          <rect x="80" y="400" width="240" height="30" rx="4" fill="#F5F3F0" stroke="#22c55e" strokeWidth="1" opacity="0.8" />
          <text x="200" y="420" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="monospace">
            BUILD • DEPLOY • MONITOR • SCALE
          </text>
        </g>

        {/* Floating decorations */}
        <rect x="15" y="180" width="10" height="10" fill="none" stroke="#22c55e" strokeWidth="1.5" transform="rotate(45 20 185)" className="pulse-animation" />
        <rect x="375" y="180" width="8" height="8" fill="#3b82f6" transform="rotate(45 379 184)" className="fade-animation" />
        <rect x="180" y="380" width="8" height="8" fill="none" stroke="#f59e0b" strokeWidth="1" transform="rotate(45 184 384)" className="pulse-animation" style={{ animationDelay: '0.5s' }} />
      </svg>

      {/* Floating metric labels */}
      <div className="absolute left-0 top-[20%] px-3 py-1.5 bg-[#F5F3F0]/90 border border-green-500/50 rounded-md backdrop-blur-sm transition-all hover:border-green-500 hover:scale-105 float-slow">
        <span className="text-xs text-gray-700 font-mono">98% Success</span>
      </div>
      <div className="absolute right-0 top-[40%] px-3 py-1.5 bg-[#F5F3F0]/90 border border-green-500/50 rounded-md backdrop-blur-sm transition-all hover:border-green-500 hover:scale-105 float-slow float-delay-1">
        <span className="text-xs text-gray-700 font-mono">Production Ready</span>
      </div>
      <div className="absolute left-[5%] bottom-[20%] px-3 py-1.5 bg-[#F5F3F0]/90 border border-green-500/50 rounded-md backdrop-blur-sm transition-all hover:border-green-500 hover:scale-105 float-slow float-delay-2">
        <span className="text-xs text-gray-700 font-mono">Enterprise</span>
      </div>

      {/* Platform logos */}
      <div className="absolute left-[8%] top-[5%] w-10 h-10 rounded-lg bg-black flex items-center justify-center shadow-lg shadow-black/30 float-animation transition-transform hover:scale-110">
        <span className="text-white font-bold text-xs">GPT</span>
      </div>

      <div className="absolute right-[10%] top-[8%] w-10 h-10 rounded-lg bg-[#D4A27F] flex items-center justify-center shadow-lg shadow-[#D4A27F]/30 float-animation float-delay-1 transition-transform hover:scale-110">
        <span className="text-white font-bold text-xs">Claude</span>
      </div>

      <div className="absolute right-[5%] bottom-[25%] w-10 h-10 rounded-lg bg-[#4285F4] flex items-center justify-center shadow-lg shadow-[#4285F4]/30 float-animation float-delay-2 transition-transform hover:scale-110">
        <span className="text-white font-bold text-[9px]">Gemini</span>
      </div>
    </div>
  );
}
