'use client';

export default function HeroProcessVisual() {
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
        @keyframes flowRight {
          0% { stroke-dashoffset: 30; }
          100% { stroke-dashoffset: 0; }
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
        .flow-animation {
          animation: flowRight 2s linear infinite;
        }
      `}</style>

      {/* Main SVG Illustration - Process Flow */}
      <svg
        viewBox="0 0 400 450"
        className="w-full h-full float-animation"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background grid */}
        <defs>
          <pattern id="processGrid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#00A651" strokeWidth="0.3" opacity="0.15" />
          </pattern>
        </defs>
        <rect width="400" height="450" fill="url(#processGrid)" opacity="0.3" />

        {/* Top label */}
        <g className="breathe" style={{ transformOrigin: '200px 40px' }}>
          <rect x="110" y="20" width="180" height="36" rx="4" fill="none" stroke="#00A651" strokeWidth="1.5" />
          <text x="200" y="44" textAnchor="middle" fill="#00A651" fontSize="11" fontFamily="monospace" fontWeight="500">
            HOW WE WORK
          </text>
        </g>

        {/* Step 1: Define */}
        <g className="float-slow">
          <rect x="30" y="80" width="80" height="60" rx="8" fill="#F5F3F0" stroke="#00A651" strokeWidth="2" />
          <text x="70" y="105" textAnchor="middle" fill="#00A651" fontSize="11" fontFamily="monospace" fontWeight="600">DEFINE</text>
          <text x="70" y="122" textAnchor="middle" fill="#525252" fontSize="8" fontFamily="monospace">Outcomes</text>
          <circle cx="70" cy="85" r="3" fill="#00A651" className="pulse-animation" />
        </g>

        {/* Step 2: Embed */}
        <g className="float-slow float-delay-1">
          <rect x="160" y="80" width="80" height="60" rx="8" fill="#F5F3F0" stroke="#00A651" strokeWidth="2" />
          <text x="200" y="105" textAnchor="middle" fill="#00A651" fontSize="11" fontFamily="monospace" fontWeight="600">EMBED</text>
          <text x="200" y="122" textAnchor="middle" fill="#525252" fontSize="8" fontFamily="monospace">AI Teams</text>
          <circle cx="200" cy="85" r="3" fill="#00A651" className="pulse-animation" style={{ animationDelay: '0.5s' }} />
        </g>

        {/* Step 3: Build */}
        <g className="float-slow float-delay-2">
          <rect x="290" y="80" width="80" height="60" rx="8" fill="#F5F3F0" stroke="#00A651" strokeWidth="2" />
          <text x="330" y="105" textAnchor="middle" fill="#00A651" fontSize="11" fontFamily="monospace" fontWeight="600">BUILD</text>
          <text x="330" y="122" textAnchor="middle" fill="#525252" fontSize="8" fontFamily="monospace">Systems</text>
          <circle cx="330" cy="85" r="3" fill="#00A651" className="pulse-animation" style={{ animationDelay: '1s' }} />
        </g>

        {/* Connection arrows row 1 */}
        <path d="M110 110 L160 110" stroke="#00A651" strokeWidth="1.5" strokeDasharray="6 3" className="flow-animation" />
        <polygon points="155,106 160,110 155,114" fill="#00A651" />
        <path d="M240 110 L290 110" stroke="#00A651" strokeWidth="1.5" strokeDasharray="6 3" className="flow-animation" style={{ animationDelay: '0.3s' }} />
        <polygon points="285,106 290,110 285,114" fill="#00A651" />

        {/* Central visualization - Production Flow */}
        <g className="breathe" style={{ transformOrigin: '200px 230px' }}>
          {/* Outer ring */}
          <circle cx="200" cy="230" r="80" stroke="#00A651" strokeWidth="1" strokeDasharray="8 4" opacity="0.3" />

          {/* Main hexagon */}
          <polygon
            points="200,160 258,195 258,265 200,300 142,265 142,195"
            fill="#00A651"
            fillOpacity="0.05"
            stroke="#00A651"
            strokeWidth="2"
          />

          {/* Inner core */}
          <circle cx="200" cy="230" r="35" fill="#00A651" fillOpacity="0.15" stroke="#00A651" strokeWidth="2" />
          <text x="200" y="225" textAnchor="middle" fill="#00A651" fontSize="10" fontFamily="monospace" fontWeight="600">FSIT</text>
          <text x="200" y="240" textAnchor="middle" fill="#00A651" fontSize="10" fontFamily="monospace" fontWeight="600">DELIVERY</text>

          {/* Orbiting elements - all green */}
          <circle cx="142" cy="195" r="8" fill="#00A651" fillOpacity="0.3" stroke="#00A651" strokeWidth="1" className="pulse-animation" />
          <circle cx="258" cy="195" r="8" fill="#00A651" fillOpacity="0.3" stroke="#00A651" strokeWidth="1" className="pulse-animation" style={{ animationDelay: '0.5s' }} />
          <circle cx="142" cy="265" r="8" fill="#00A651" fillOpacity="0.3" stroke="#00A651" strokeWidth="1" className="pulse-animation" style={{ animationDelay: '1s' }} />
          <circle cx="258" cy="265" r="8" fill="#00A651" fillOpacity="0.3" stroke="#00A651" strokeWidth="1" className="pulse-animation" style={{ animationDelay: '1.5s' }} />
        </g>

        {/* Step 4: Operate */}
        <g className="float-slow float-delay-3">
          <rect x="30" y="340" width="80" height="60" rx="8" fill="#F5F3F0" stroke="#00A651" strokeWidth="2" />
          <text x="70" y="365" textAnchor="middle" fill="#00A651" fontSize="11" fontFamily="monospace" fontWeight="600">OPERATE</text>
          <text x="70" y="382" textAnchor="middle" fill="#525252" fontSize="8" fontFamily="monospace">Reliability</text>
          <circle cx="70" cy="345" r="3" fill="#00A651" className="pulse-animation" style={{ animationDelay: '1.5s' }} />
        </g>

        {/* Step 5: Scale */}
        <g className="float-slow">
          <rect x="290" y="340" width="80" height="60" rx="8" fill="#F5F3F0" stroke="#00A651" strokeWidth="2" />
          <text x="330" y="365" textAnchor="middle" fill="#00A651" fontSize="11" fontFamily="monospace" fontWeight="600">SCALE</text>
          <text x="330" y="382" textAnchor="middle" fill="#525252" fontSize="8" fontFamily="monospace">Governance</text>
          <circle cx="330" cy="345" r="3" fill="#00A651" className="pulse-animation" style={{ animationDelay: '2s' }} />
        </g>

        {/* Connection lines to bottom steps */}
        <path d="M142 265 Q90 300 70 340" stroke="#00A651" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
        <path d="M258 265 Q310 300 330 340" stroke="#00A651" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />

        {/* Bottom connection */}
        <path d="M110 370 L290 370" stroke="#00A651" strokeWidth="1" strokeDasharray="6 3" opacity="0.3" />

        {/* Bottom stats */}
        <g className="float-slow float-delay-2">
          <rect x="140" y="410" width="120" height="30" rx="4" fill="#F5F3F0" stroke="#00A651" strokeWidth="1" />
          <text x="200" y="430" textAnchor="middle" fill="#00A651" fontSize="9" fontFamily="monospace">
            PRODUCTION FOCUSED
          </text>
        </g>

        {/* Floating decorations - all green */}
        <rect x="15" y="170" width="8" height="8" fill="none" stroke="#00A651" strokeWidth="1.5" transform="rotate(45 19 174)" className="pulse-animation" />
        <rect x="377" y="170" width="6" height="6" fill="#00A651" transform="rotate(45 380 173)" className="fade-animation" />
        <rect x="15" y="290" width="6" height="6" fill="#00A651" transform="rotate(45 18 293)" className="fade-animation" style={{ animationDelay: '0.5s' }} />
        <rect x="377" y="290" width="8" height="8" fill="none" stroke="#00A651" strokeWidth="1" transform="rotate(45 381 294)" className="pulse-animation" style={{ animationDelay: '1s' }} />
      </svg>

      {/* Floating metric labels */}
      <div className="absolute left-0 top-[20%] px-3 py-1.5 bg-[#F5F3F0] border border-green-500/40 rounded-md backdrop-blur-sm transition-all hover:border-green-500 hover:scale-105 float-slow shadow-sm">
        <span className="text-xs text-gray-700 font-mono">Strategy</span>
      </div>
      <div className="absolute right-0 top-[35%] px-3 py-1.5 bg-[#F5F3F0] border border-green-500/40 rounded-md backdrop-blur-sm transition-all hover:border-green-500 hover:scale-105 float-slow float-delay-1 shadow-sm">
        <span className="text-xs text-gray-700 font-mono">Execution</span>
      </div>
      <div className="absolute left-[5%] bottom-[22%] px-3 py-1.5 bg-[#F5F3F0] border border-green-500/40 rounded-md backdrop-blur-sm transition-all hover:border-green-500 hover:scale-105 float-slow float-delay-2 shadow-sm">
        <span className="text-xs text-gray-700 font-mono">Operations</span>
      </div>
    </div>
  );
}
