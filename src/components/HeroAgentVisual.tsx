'use client';

export default function HeroAgentVisual() {
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
          0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
        }
        @keyframes orbitReverse {
          0% { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(60px) rotate(360deg); }
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes dataFlow {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
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
          animation: orbit 15s linear infinite;
        }
        .orbit-reverse {
          animation: orbitReverse 12s linear infinite;
        }
        .fade-animation {
          animation: fadeInOut 4s ease-in-out infinite;
        }
        .breathe {
          animation: scaleBreath 4s ease-in-out infinite;
        }
        .data-flow {
          animation: dataFlow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Main SVG Illustration - Agent Network */}
      <svg
        viewBox="0 0 400 450"
        className="w-full h-full float-animation"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central Agent Hub */}
        <g className="breathe" style={{ transformOrigin: '200px 200px' }}>
          {/* Outer ring */}
          <circle cx="200" cy="200" r="90" stroke="#22c55e" strokeWidth="1" strokeDasharray="8 4" opacity="0.3" />
          <circle cx="200" cy="200" r="70" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />

          {/* Inner hexagon */}
          <polygon
            points="200,140 252,170 252,230 200,260 148,230 148,170"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
            opacity="0.6"
          />

          {/* Core circle */}
          <circle cx="200" cy="200" r="35" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="2" />

          {/* AI Brain icon in center */}
          <text x="200" y="195" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="600">
            AI
          </text>
          <text x="200" y="210" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="600">
            AGENT
          </text>
        </g>

        {/* Orbiting nodes */}
        <g className="orbit-animation" style={{ transformOrigin: '200px 200px' }}>
          <circle cx="280" cy="200" r="12" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="280" y="204" textAnchor="middle" fill="#3b82f6" fontSize="8" fontFamily="monospace">API</text>
        </g>

        <g className="orbit-reverse" style={{ transformOrigin: '200px 200px' }}>
          <circle cx="260" cy="200" r="10" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1.5" />
          <text x="260" y="204" textAnchor="middle" fill="#22c55e" fontSize="7" fontFamily="monospace">DB</text>
        </g>

        {/* Input nodes - Left side */}
        <g className="float-slow">
          {/* Task Input */}
          <rect x="30" y="120" width="70" height="40" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="65" y="138" textAnchor="middle" fill="#3b82f6" fontSize="9" fontFamily="monospace">Task</text>
          <text x="65" y="150" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">Input</text>

          {/* Connection line */}
          <path d="M100 140 Q130 140 148 170" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
          <circle cx="148" cy="170" r="3" fill="#3b82f6" className="pulse-animation" />
        </g>

        <g className="float-slow float-delay-1">
          {/* Data Input */}
          <rect x="30" y="200" width="70" height="40" rx="8" fill="#1e293b" stroke="#22c55e" strokeWidth="1.5" />
          <text x="65" y="218" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="monospace">Data</text>
          <text x="65" y="230" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">Stream</text>

          {/* Connection line */}
          <path d="M100 220 Q120 220 130 200" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
          <circle cx="130" cy="200" r="3" fill="#22c55e" className="pulse-animation" style={{ animationDelay: '0.5s' }} />
        </g>

        <g className="float-slow float-delay-2">
          {/* Context Input */}
          <rect x="30" y="280" width="70" height="40" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="65" y="298" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontFamily="monospace">Context</text>
          <text x="65" y="310" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">Memory</text>

          {/* Connection line */}
          <path d="M100 300 Q130 300 148 230" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
          <circle cx="148" cy="230" r="3" fill="#8b5cf6" className="pulse-animation" style={{ animationDelay: '1s' }} />
        </g>

        {/* Output nodes - Right side */}
        <g className="float-slow float-delay-1">
          {/* Action Output */}
          <rect x="300" y="120" width="70" height="40" rx="8" fill="#1e293b" stroke="#22c55e" strokeWidth="1.5" />
          <text x="335" y="138" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="monospace">Action</text>
          <text x="335" y="150" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">Execute</text>

          {/* Connection line */}
          <path d="M252 170 Q280 140 300 140" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
          <circle cx="252" cy="170" r="3" fill="#22c55e" className="pulse-animation" />
        </g>

        <g className="float-slow float-delay-2">
          {/* Decision Output */}
          <rect x="300" y="200" width="70" height="40" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="335" y="218" textAnchor="middle" fill="#3b82f6" fontSize="9" fontFamily="monospace">Decision</text>
          <text x="335" y="230" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">Output</text>

          {/* Connection line */}
          <path d="M270 200 Q285 220 300 220" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
          <circle cx="270" cy="200" r="3" fill="#3b82f6" className="pulse-animation" style={{ animationDelay: '0.5s' }} />
        </g>

        <g className="float-slow float-delay-3">
          {/* Report Output */}
          <rect x="300" y="280" width="70" height="40" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="335" y="298" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="monospace">Report</text>
          <text x="335" y="310" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">Generate</text>

          {/* Connection line */}
          <path d="M252 230 Q280 280 300 300" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
          <circle cx="252" cy="230" r="3" fill="#f59e0b" className="pulse-animation" style={{ animationDelay: '1s' }} />
        </g>

        {/* Top label */}
        <g className="breathe" style={{ transformOrigin: '200px 50px' }}>
          <rect x="130" y="30" width="140" height="36" rx="4" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          <text x="200" y="54" textAnchor="middle" fill="#22c55e" fontSize="12" fontFamily="monospace" fontWeight="500">
            AGENT CORE
          </text>
        </g>

        {/* Bottom capabilities */}
        <g className="float-slow float-delay-2">
          <rect x="100" y="380" width="200" height="30" rx="4" fill="#1e293b" stroke="#22c55e" strokeWidth="1" opacity="0.8" />
          <text x="200" y="400" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace">
            REASON • PLAN • ACT • LEARN
          </text>
        </g>

        {/* Floating diamonds */}
        <rect x="50" y="80" width="10" height="10" fill="none" stroke="#22c55e" strokeWidth="1.5" transform="rotate(45 55 85)" className="pulse-animation" />
        <rect x="340" y="70" width="8" height="8" fill="#3b82f6" transform="rotate(45 344 74)" className="fade-animation" />
        <rect x="350" y="350" width="12" height="12" fill="none" stroke="#22c55e" strokeWidth="1.5" transform="rotate(45 356 356)" className="pulse-animation" style={{ animationDelay: '1.5s' }} />
        <rect x="40" y="360" width="10" height="10" fill="#8b5cf6" transform="rotate(45 45 365)" className="fade-animation" style={{ animationDelay: '0.5s' }} />
      </svg>

      {/* Floating metric labels */}
      <div className="absolute left-0 top-[15%] px-3 py-1.5 bg-dark-800/80 border border-primary-500/40 rounded-md backdrop-blur-sm transition-all hover:border-primary-500 hover:scale-105 float-slow">
        <span className="text-xs text-primary-400 font-mono">24/7 Active</span>
      </div>
      <div className="absolute right-0 top-[35%] px-3 py-1.5 bg-dark-800/80 border border-primary-500/40 rounded-md backdrop-blur-sm transition-all hover:border-primary-500 hover:scale-105 float-slow float-delay-1">
        <span className="text-xs text-primary-400 font-mono">98% Accuracy</span>
      </div>
      <div className="absolute left-[5%] bottom-[25%] px-3 py-1.5 bg-dark-800/80 border border-primary-600/40 rounded-md backdrop-blur-sm transition-all hover:border-primary-600 hover:scale-105 float-slow float-delay-2">
        <span className="text-xs text-primary-500 font-mono">Multi-step</span>
      </div>

      {/* Floating AI brand logos */}
      <div className="absolute left-[12%] top-[8%] w-11 h-11 rounded-full bg-black flex items-center justify-center shadow-lg shadow-black/30 float-animation transition-transform hover:scale-110">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z"/>
        </svg>
      </div>

      <div className="absolute right-[8%] top-[55%] w-11 h-11 rounded-full bg-[#D4A27F] flex items-center justify-center shadow-lg shadow-[#D4A27F]/30 float-animation float-delay-2 transition-transform hover:scale-110">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.514h6.468l1.344 3.514h3.78l-6.696-16.918h-3.324zm-.072 10.676l2.16-5.639 2.16 5.639h-4.32z"/>
        </svg>
      </div>

      <div className="absolute right-[15%] top-[12%] w-11 h-11 rounded-full overflow-hidden shadow-lg float-animation float-delay-1 transition-transform hover:scale-110 bg-white p-1">
        <img src="/logos/google-gemini-icon.webp" alt="Google Gemini" className="w-full h-full object-contain" />
      </div>

      <div className="absolute left-[8%] bottom-[15%] w-11 h-11 rounded-full overflow-hidden shadow-lg shadow-[#FFD21E]/30 float-animation float-delay-3 transition-transform hover:scale-110">
        <img src="/logos/hf-logo.png" alt="Hugging Face" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
