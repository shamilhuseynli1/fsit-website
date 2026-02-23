'use client';

import { useEffect, useRef, useState } from 'react';

interface BranchingItem {
  title: string;
  desc: string;
}

interface BranchingFromTitleProps {
  items: BranchingItem[];
}

export default function BranchingFromTitle({ items }: BranchingFromTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* SVG with branching lines */}
      <div className="relative h-44">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 180"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Animated gradient for flowing effect */}
            <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00A651" stopOpacity="0">
                <animate attributeName="offset" values="-0.5;1" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="30%" stopColor="#00A651" stopOpacity="1">
                <animate attributeName="offset" values="-0.2;1.3" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="60%" stopColor="#00A651" stopOpacity="0">
                <animate attributeName="offset" values="0.1;1.6" dur="2s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>

          {/* Center node */}
          <circle cx="500" cy="12" r="8" fill="#00A651" />
          <circle cx="500" cy="12" r="14" fill="none" stroke="#00A651" strokeWidth="1.5" opacity="0.3" />

          {/* Dynamic lines based on items count */}
          {items.length === 5 ? (
            <>
              {/* Line 1 - leftmost */}
              <path d="M500,20 Q500,90 100,170" stroke="#d1d5db" strokeWidth="2" fill="none" />
              <path d="M500,20 Q500,90 100,170" stroke="#00A651" strokeWidth="2" fill="none"
                strokeDasharray="50 400"
                style={{ animation: 'flowLine1 2.5s ease-in-out infinite' }}
              />

              {/* Line 2 */}
              <path d="M500,20 Q500,90 300,170" stroke="#d1d5db" strokeWidth="2" fill="none" />
              <path d="M500,20 Q500,90 300,170" stroke="#00A651" strokeWidth="2" fill="none"
                strokeDasharray="40 300"
                style={{ animation: 'flowLine2 2s ease-in-out infinite', animationDelay: '0.2s' }}
              />

              {/* Line 3 - center */}
              <path d="M500,20 L500,170" stroke="#d1d5db" strokeWidth="2" fill="none" />
              <path d="M500,20 L500,170" stroke="#00A651" strokeWidth="2" fill="none"
                strokeDasharray="30 200"
                style={{ animation: 'flowLine3 1.8s ease-in-out infinite', animationDelay: '0.4s' }}
              />

              {/* Line 4 */}
              <path d="M500,20 Q500,90 700,170" stroke="#d1d5db" strokeWidth="2" fill="none" />
              <path d="M500,20 Q500,90 700,170" stroke="#00A651" strokeWidth="2" fill="none"
                strokeDasharray="40 300"
                style={{ animation: 'flowLine4 2s ease-in-out infinite', animationDelay: '0.6s' }}
              />

              {/* Line 5 - rightmost */}
              <path d="M500,20 Q500,90 900,170" stroke="#d1d5db" strokeWidth="2" fill="none" />
              <path d="M500,20 Q500,90 900,170" stroke="#00A651" strokeWidth="2" fill="none"
                strokeDasharray="50 400"
                style={{ animation: 'flowLine5 2.5s ease-in-out infinite', animationDelay: '0.8s' }}
              />
            </>
          ) : (
            <>
              {/* Line 1 - leftmost */}
              <path d="M500,20 Q500,90 125,170" stroke="#d1d5db" strokeWidth="2" fill="none" />
              <path d="M500,20 Q500,90 125,170" stroke="#00A651" strokeWidth="2" fill="none"
                strokeDasharray="50 400"
                style={{ animation: 'flowLine1 2.5s ease-in-out infinite' }}
              />

              {/* Line 2 */}
              <path d="M500,20 Q500,90 375,170" stroke="#d1d5db" strokeWidth="2" fill="none" />
              <path d="M500,20 Q500,90 375,170" stroke="#00A651" strokeWidth="2" fill="none"
                strokeDasharray="40 300"
                style={{ animation: 'flowLine2 2s ease-in-out infinite', animationDelay: '0.3s' }}
              />

              {/* Line 3 */}
              <path d="M500,20 Q500,90 625,170" stroke="#d1d5db" strokeWidth="2" fill="none" />
              <path d="M500,20 Q500,90 625,170" stroke="#00A651" strokeWidth="2" fill="none"
                strokeDasharray="40 300"
                style={{ animation: 'flowLine3 2s ease-in-out infinite', animationDelay: '0.6s' }}
              />

              {/* Line 4 - rightmost */}
              <path d="M500,20 Q500,90 875,170" stroke="#d1d5db" strokeWidth="2" fill="none" />
              <path d="M500,20 Q500,90 875,170" stroke="#00A651" strokeWidth="2" fill="none"
                strokeDasharray="50 400"
                style={{ animation: 'flowLine4 2.5s ease-in-out infinite', animationDelay: '0.9s' }}
              />
            </>
          )}
        </svg>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes flowLine1 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -450; }
        }
        @keyframes flowLine2 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -340; }
        }
        @keyframes flowLine3 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -340; }
        }
        @keyframes flowLine4 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -450; }
        }
        @keyframes flowLine5 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -450; }
        }
      `}</style>

      {/* Cards grid */}
      <div className={`grid gap-4 -mt-2 ${items.length === 5 ? 'grid-cols-5' : 'grid-cols-4'}`}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`text-center px-4 py-8 rounded-t-[2rem] rounded-b-xl transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              background: '#F5F3F0',
              border: '1px solid rgba(0, 166, 81, 0.2)',
              transitionDelay: `${index * 0.1 + 0.3}s`,
            }}
          >
            <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--black)' }}>
              {item.title}
            </h3>
            <p className="text-sm mb-6" style={{ color: 'var(--gray-500)' }}>
              {item.desc}
            </p>
            {/* Green underline */}
            <div className="w-20 h-1.5 mx-auto rounded-full" style={{ background: 'var(--green)' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
