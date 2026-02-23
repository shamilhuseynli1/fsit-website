'use client';

import { useEffect, useRef, useState } from 'react';

interface BranchingListProps {
  items: { title: string; desc?: string }[];
  animated?: boolean;
}

export default function BranchingList({ items, animated = true }: BranchingListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* List Items - no dots */}
      <div className="relative" style={{ zIndex: 1 }}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`branch-item relative py-6 border-b transition-all duration-700 ${
              isVisible && animated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{
              borderColor: 'var(--gray-100)',
              transitionDelay: `${index * 0.12}s`,
            }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: 'var(--black)' }}>
              {item.title}
            </h3>
            {item.desc && (
              <p className="text-base" style={{ color: 'var(--gray-500)' }}>
                {item.desc}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
