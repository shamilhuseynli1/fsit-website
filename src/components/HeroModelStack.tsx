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
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes rotateDiamond {
          0% { transform: rotate(45deg); }
          100% { transform: rotate(405deg); }
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
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
          stroke="#4ade80"
          strokeWidth="2"
          strokeDasharray="6 6"
          opacity="0.6"
        />

        {/* MODEL API Label at top */}
        <g className="breathe" style={{ transformOrigin: '200px 38px' }}>
          <rect x="130" y="20" width="140" height="36" rx="6" fill="rgba(34, 197, 94, 0.2)" stroke="#4ade80" strokeWidth="2" />
          <text x="200" y="44" textAnchor="middle" fill="#4ade80" fontSize="14" fontFamily="monospace" fontWeight="700">
            MODEL API
          </text>
        </g>

        {/* Top cylinder (Output) */}
        <g className="float-slow float-delay-1" style={{ transformOrigin: '200px 105px' }}>
          <ellipse cx="200" cy="95" rx="75" ry="20" fill="rgba(255,255,255,0.15)" stroke="#94a3b8" strokeWidth="2" />
          <path
            d="M125 95 L125 115 Q125 135 200 135 Q275 135 275 115 L275 95"
            fill="rgba(255,255,255,0.1)"
            stroke="#94a3b8"
            strokeWidth="2"
          />
          <ellipse cx="200" cy="115" rx="75" ry="20" fill="rgba(255,255,255,0.2)" stroke="#cbd5e1" strokeWidth="2" />
        </g>

        {/* Second cylinder */}
        <g className="float-slow float-delay-2" style={{ transformOrigin: '200px 178px' }}>
          <ellipse cx="200" cy="165" rx="85" ry="22" fill="rgba(255,255,255,0.15)" stroke="#94a3b8" strokeWidth="2" />
          <path
            d="M115 165 L115 190 Q115 212 200 212 Q285 212 285 190 L285 165"
            fill="rgba(255,255,255,0.1)"
            stroke="#94a3b8"
            strokeWidth="2"
          />
          <ellipse cx="200" cy="190" rx="85" ry="22" fill="rgba(255,255,255,0.2)" stroke="#cbd5e1" strokeWidth="2" />
        </g>

        {/* Third cylinder (accent ring) */}
        <g className="float-slow float-delay-3" style={{ transformOrigin: '200px 250px' }}>
          <ellipse cx="200" cy="240" rx="80" ry="20" fill="rgba(74, 222, 128, 0.3)" stroke="#4ade80" strokeWidth="2" />
          <path
            d="M120 240 L120 260 Q120 280 200 280 Q280 280 280 260 L280 240"
            fill="rgba(74, 222, 128, 0.25)"
            stroke="#4ade80"
            strokeWidth="2"
          />
          <ellipse cx="200" cy="260" rx="80" ry="20" fill="rgba(74, 222, 128, 0.4)" stroke="#22c55e" strokeWidth="2.5" />
        </g>

        {/* Fourth cylinder */}
        <g className="float-slow float-delay-1" style={{ transformOrigin: '200px 315px' }}>
          <ellipse cx="200" cy="305" rx="75" ry="18" fill="rgba(255,255,255,0.15)" stroke="#94a3b8" strokeWidth="2" />
          <path
            d="M125 305 L125 325 Q125 343 200 343 Q275 343 275 325 L275 305"
            fill="rgba(255,255,255,0.1)"
            stroke="#94a3b8"
            strokeWidth="2"
          />
          <ellipse cx="200" cy="325" rx="75" ry="18" fill="rgba(255,255,255,0.2)" stroke="#cbd5e1" strokeWidth="2" />
        </g>

        {/* Bottom cylinder (base) */}
        <g className="float-slow float-delay-2" style={{ transformOrigin: '200px 375px' }}>
          <ellipse cx="200" cy="365" rx="70" ry="16" fill="rgba(255,255,255,0.15)" stroke="#94a3b8" strokeWidth="2" />
          <path
            d="M130 365 L130 385 Q130 401 200 401 Q270 401 270 385 L270 365"
            fill="rgba(255,255,255,0.1)"
            stroke="#94a3b8"
            strokeWidth="2"
          />
          <ellipse cx="200" cy="385" rx="70" ry="16" fill="rgba(255,255,255,0.2)" stroke="#cbd5e1" strokeWidth="2" />
        </g>

        {/* Ascending staircase on the left */}
        <g transform="translate(20, 280)">
          <rect x="0" y="60" width="18" height="18" fill="#22c55e" transform="rotate(45 9 69)" className="fade-animation" style={{ animationDelay: '0s' }} />
          <rect x="20" y="45" width="18" height="18" fill="#22c55e" transform="rotate(45 29 54)" className="fade-animation" style={{ animationDelay: '0.2s' }} />
          <rect x="40" y="30" width="18" height="18" fill="#4ade80" transform="rotate(45 49 39)" className="fade-animation" style={{ animationDelay: '0.4s' }} />
          <rect x="60" y="15" width="18" height="18" fill="#86efac" transform="rotate(45 69 24)" className="fade-animation" style={{ animationDelay: '0.6s' }} />
          <rect x="80" y="0" width="18" height="18" fill="#bbf7d0" transform="rotate(45 89 9)" className="fade-animation" style={{ animationDelay: '0.8s' }} />
          <line x1="9" y1="82" x2="98" y2="0" stroke="#4ade80" strokeWidth="2" strokeDasharray="4 4" opacity="0.7" />
          <circle cx="9" cy="82" r="5" fill="#4ade80" className="pulse-animation" />
        </g>

        {/* Floating diamonds with animations */}
        <rect x="70" y="60" width="14" height="14" fill="none" stroke="#4ade80" strokeWidth="2" transform="rotate(45 77 67)" className="pulse-animation" />
        <rect x="320" y="40" width="12" height="12" fill="none" stroke="#4ade80" strokeWidth="2" transform="rotate(45 326 46)" className="pulse-animation" style={{ animationDelay: '1s' }} />
        <rect x="340" y="150" width="16" height="16" fill="#22c55e" transform="rotate(45 348 158)" className="fade-animation" />
        <rect x="50" y="180" width="12" height="12" fill="#f472b6" transform="rotate(45 56 186)" className="fade-animation" style={{ animationDelay: '0.5s' }} />
        <rect x="350" y="280" width="14" height="14" fill="none" stroke="#4ade80" strokeWidth="2" transform="rotate(45 357 287)" className="pulse-animation" style={{ animationDelay: '1.5s' }} />
        <rect x="330" y="380" width="16" height="16" fill="#4ade80" transform="rotate(45 338 388)" opacity="0.5" className="fade-animation" style={{ animationDelay: '2s' }} />
        <rect x="60" y="400" width="12" height="12" fill="#f472b6" transform="rotate(45 66 406)" className="fade-animation" style={{ animationDelay: '1s' }} />
      </svg>

      {/* Floating metric labels with hover effects */}
      <div className="absolute left-0 top-[18%] px-4 py-2 bg-black/80 border border-green-400/50 rounded-lg transition-all hover:scale-105 float-slow shadow-lg shadow-green-500/20">
        <span className="text-sm text-green-400 font-mono font-semibold">200 TPS</span>
      </div>
      <div className="absolute right-0 top-[38%] px-4 py-2 bg-black/80 border border-green-400/50 rounded-lg transition-all hover:scale-105 float-slow float-delay-1 shadow-lg shadow-green-500/20">
        <span className="text-sm text-green-400 font-mono font-semibold">12MS TTFT</span>
      </div>
      <div className="absolute left-[5%] top-[55%] px-4 py-2 bg-black/80 border border-green-400/50 rounded-lg transition-all hover:scale-105 float-slow float-delay-2 shadow-lg shadow-green-500/20">
        <span className="text-sm text-green-400 font-mono font-semibold">110 REQ/M</span>
      </div>

      {/* Floating AI brand logos - OpenAI */}
      <div className="absolute left-[15%] top-[12%] w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-xl shadow-black/50 float-animation transition-transform hover:scale-110 border-2 border-white/20">
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
        </svg>
      </div>

      {/* Anthropic Claude */}
      <div className="absolute right-[10%] top-[50%] w-14 h-14 rounded-full bg-[#D4A27F] flex items-center justify-center shadow-xl shadow-[#D4A27F]/50 float-animation float-delay-2 transition-transform hover:scale-110 border-2 border-white/20">
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.514h6.468l1.344 3.514h3.78l-6.696-16.918h-3.324zm-.072 10.676l2.16-5.639 2.16 5.639h-4.32z"/>
        </svg>
      </div>

      {/* Hugging Face */}
      <div className="absolute left-[8%] bottom-[18%] w-14 h-14 rounded-full overflow-hidden shadow-xl shadow-[#FFD21E]/50 float-animation float-delay-1 transition-transform hover:scale-110 border-2 border-white/20">
        <img src="/logos/hf-logo.png" alt="Hugging Face" className="w-full h-full object-cover" />
      </div>

      {/* Google Gemini */}
      <div className="absolute right-[5%] bottom-[30%] w-14 h-14 rounded-full overflow-hidden shadow-xl float-animation float-delay-3 transition-transform hover:scale-110 bg-white p-1 border-2 border-white/20">
        <img src="/logos/google-gemini-icon.webp" alt="Google Gemini" className="w-full h-full object-contain" />
      </div>

      {/* Meta AI */}
      <div className="absolute right-[18%] top-[15%] w-14 h-14 rounded-full overflow-hidden shadow-xl shadow-primary-500/50 float-animation float-delay-2 transition-transform hover:scale-110 border-2 border-white/20">
        <img src="/logos/Meta-ai-logo.webp" alt="Meta AI" className="w-full h-full object-cover" />
      </div>

      {/* Mistral AI */}
      <div className="absolute left-[5%] top-[35%] w-14 h-14 rounded-full overflow-hidden shadow-xl shadow-orange-500/50 float-animation float-delay-3 transition-transform hover:scale-110 bg-black p-2 border-2 border-white/20">
        <img src="/logos/Mistral_AI_logo_(2025–).svg.png" alt="Mistral AI" className="w-full h-full object-contain" />
      </div>
    </div>
  );
}
