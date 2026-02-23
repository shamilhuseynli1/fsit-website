'use client';

export default function HeroModelStack() {
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
        @keyframes rotateDiamond {
          0% { transform: rotate(45deg); }
          100% { transform: rotate(405deg); }
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
        .rotate-slow {
          animation: rotateDiamond 20s linear infinite;
        }
        .fade-animation {
          animation: fadeInOut 4s ease-in-out infinite;
        }
        .breathe {
          animation: scaleBreath 4s ease-in-out infinite;
        }
      `}</style>

      {/* Main SVG Illustration */}
      <svg
        viewBox="0 0 400 450"
        className="w-full h-full float-animation"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dashed vertical line */}
        <line
          x1="200"
          y1="30"
          x2="200"
          y2="420"
          stroke="#94a3b8"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.4"
        />

        {/* MODEL API Label at top */}
        <g className="breathe" style={{ transformOrigin: '200px 38px' }}>
          <rect x="130" y="20" width="140" height="36" rx="4" fill="none" stroke="#19AB5D" strokeWidth="1.5" />
          <text x="200" y="44" textAnchor="middle" fill="#19AB5D" fontSize="12" fontFamily="monospace" fontWeight="500">
            MODEL API
          </text>
        </g>

        {/* Top cylinder (Output) */}
        <g className="float-slow float-delay-1" style={{ transformOrigin: '200px 105px' }}>
          <ellipse cx="200" cy="95" rx="75" ry="20" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
          <path
            d="M125 95 L125 115 Q125 135 200 135 Q275 135 275 115 L275 95"
            fill="#f1f5f9"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
          <ellipse cx="200" cy="115" rx="75" ry="20" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" />
        </g>

        {/* Second cylinder */}
        <g className="float-slow float-delay-2" style={{ transformOrigin: '200px 178px' }}>
          <ellipse cx="200" cy="165" rx="85" ry="22" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
          <path
            d="M115 165 L115 190 Q115 212 200 212 Q285 212 285 190 L285 165"
            fill="#f1f5f9"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
          <ellipse cx="200" cy="190" rx="85" ry="22" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" />
        </g>

        {/* Third cylinder (accent ring) */}
        <g className="float-slow float-delay-3" style={{ transformOrigin: '200px 250px' }}>
          <ellipse cx="200" cy="240" rx="80" ry="20" fill="#dcfce7" stroke="#86efac" strokeWidth="1.5" />
          <path
            d="M120 240 L120 260 Q120 280 200 280 Q280 280 280 260 L280 240"
            fill="#dcfce7"
            stroke="#86efac"
            strokeWidth="1.5"
          />
          <ellipse cx="200" cy="260" rx="80" ry="20" fill="#bbf7d0" stroke="#19AB5D" strokeWidth="1.5" />
        </g>

        {/* Fourth cylinder */}
        <g className="float-slow float-delay-1" style={{ transformOrigin: '200px 315px' }}>
          <ellipse cx="200" cy="305" rx="75" ry="18" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
          <path
            d="M125 305 L125 325 Q125 343 200 343 Q275 343 275 325 L275 305"
            fill="#f1f5f9"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
          <ellipse cx="200" cy="325" rx="75" ry="18" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" />
        </g>

        {/* Bottom cylinder (base) */}
        <g className="float-slow float-delay-2" style={{ transformOrigin: '200px 375px' }}>
          <ellipse cx="200" cy="365" rx="70" ry="16" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
          <path
            d="M130 365 L130 385 Q130 401 200 401 Q270 401 270 385 L270 365"
            fill="#f1f5f9"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
          <ellipse cx="200" cy="385" rx="70" ry="16" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
        </g>

        {/* Ascending staircase on the left */}
        <g transform="translate(20, 280)">
          <rect x="0" y="60" width="16" height="16" fill="#19AB5D" transform="rotate(45 8 68)" className="fade-animation" style={{ animationDelay: '0s' }} />
          <rect x="18" y="45" width="16" height="16" fill="#19AB5D" transform="rotate(45 26 53)" className="fade-animation" style={{ animationDelay: '0.2s' }} />
          <rect x="36" y="30" width="16" height="16" fill="#4ade80" transform="rotate(45 44 38)" className="fade-animation" style={{ animationDelay: '0.4s' }} />
          <rect x="54" y="15" width="16" height="16" fill="#86efac" transform="rotate(45 62 23)" className="fade-animation" style={{ animationDelay: '0.6s' }} />
          <rect x="72" y="0" width="16" height="16" fill="#bbf7d0" transform="rotate(45 80 8)" className="fade-animation" style={{ animationDelay: '0.8s' }} />
          <line x1="8" y1="80" x2="88" y2="0" stroke="#19AB5D" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
          <circle cx="8" cy="80" r="3" fill="#19AB5D" className="pulse-animation" />
        </g>

        {/* Floating diamonds with animations */}
        <rect x="70" y="60" width="12" height="12" fill="none" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(45 76 66)" className="pulse-animation" />
        <rect x="320" y="40" width="10" height="10" fill="none" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(45 325 45)" className="pulse-animation" style={{ animationDelay: '1s' }} />
        <rect x="340" y="150" width="14" height="14" fill="#19AB5D" transform="rotate(45 347 157)" className="fade-animation" />
        <rect x="50" y="180" width="10" height="10" fill="#ec4899" transform="rotate(45 55 185)" className="fade-animation" style={{ animationDelay: '0.5s' }} />
        <rect x="350" y="280" width="12" height="12" fill="none" stroke="#94a3b8" strokeWidth="1.5" transform="rotate(45 356 286)" className="pulse-animation" style={{ animationDelay: '1.5s' }} />
        <rect x="330" y="380" width="14" height="14" fill="#94a3b8" transform="rotate(45 337 387)" opacity="0.25" className="fade-animation" style={{ animationDelay: '2s' }} />
        <rect x="60" y="400" width="10" height="10" fill="#ec4899" transform="rotate(45 65 405)" className="fade-animation" style={{ animationDelay: '1s' }} />
      </svg>

      {/* Floating metric labels with hover effects */}
      <div className="absolute left-0 top-[18%] px-3 py-1.5 bg-dark-900 rounded-md transition-all hover:scale-105 float-slow">
        <span className="text-xs text-white font-mono">200 TPS</span>
      </div>
      <div className="absolute right-0 top-[38%] px-3 py-1.5 bg-dark-900 rounded-md transition-all hover:scale-105 float-slow float-delay-1">
        <span className="text-xs text-white font-mono">12MS TTFT</span>
      </div>
      <div className="absolute left-[5%] top-[55%] px-3 py-1.5 bg-dark-900 rounded-md transition-all hover:scale-105 float-slow float-delay-2">
        <span className="text-xs text-white font-mono">110 REQ/M</span>
      </div>

      {/* Floating AI brand logos - OpenAI */}
      <div className="absolute left-[15%] top-[12%] w-11 h-11 rounded-full bg-black flex items-center justify-center shadow-lg shadow-black/30 float-animation transition-transform hover:scale-110">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
        </svg>
      </div>

      {/* Anthropic Claude */}
      <div className="absolute right-[10%] top-[50%] w-11 h-11 rounded-full bg-[#D4A27F] flex items-center justify-center shadow-lg shadow-[#D4A27F]/30 float-animation float-delay-2 transition-transform hover:scale-110">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.514h6.468l1.344 3.514h3.78l-6.696-16.918h-3.324zm-.072 10.676l2.16-5.639 2.16 5.639h-4.32z"/>
        </svg>
      </div>

      {/* Hugging Face */}
      <div className="absolute left-[8%] bottom-[18%] w-11 h-11 rounded-full overflow-hidden shadow-lg shadow-[#FFD21E]/30 float-animation float-delay-1 transition-transform hover:scale-110">
        <img src="/logos/hf-logo.png" alt="Hugging Face" className="w-full h-full object-cover" />
      </div>

      {/* Google Gemini */}
      <div className="absolute right-[5%] bottom-[30%] w-11 h-11 rounded-full overflow-hidden shadow-lg float-animation float-delay-3 transition-transform hover:scale-110 bg-white p-1">
        <img src="/logos/google-gemini-icon.webp" alt="Google Gemini" className="w-full h-full object-contain" />
      </div>

      {/* Meta AI */}
      <div className="absolute right-[18%] top-[15%] w-11 h-11 rounded-full overflow-hidden shadow-lg shadow-primary-500/30 float-animation float-delay-2 transition-transform hover:scale-110">
        <img src="/logos/Meta-ai-logo.webp" alt="Meta AI" className="w-full h-full object-cover" />
      </div>

      {/* Mistral AI */}
      <div className="absolute left-[5%] top-[35%] w-11 h-11 rounded-full overflow-hidden shadow-lg shadow-orange-500/30 float-animation float-delay-3 transition-transform hover:scale-110 bg-black p-1.5">
        <img src="/logos/Mistral_AI_logo_(2025–).svg.png" alt="Mistral AI" className="w-full h-full object-contain" />
      </div>
    </div>
  );
}
