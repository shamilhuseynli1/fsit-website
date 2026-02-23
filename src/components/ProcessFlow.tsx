'use client';

import { useEffect, useRef, useState } from 'react';

interface ProcessStep {
  num?: string;
  title: string;
  desc: string;
}

interface ProcessFlowProps {
  steps: ProcessStep[];
}

export default function ProcessFlow({ steps }: ProcessFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Cycle through steps
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isVisible, steps.length]);

  return (
    <div ref={containerRef} className="relative">
      {/* Compact box-based steps in a row */}
      <div className="flex items-stretch gap-2">
        {steps.map((step, index) => {
          const isActive = index <= activeStep;
          const isCurrent = index === activeStep;

          return (
            <div
              key={index}
              className={`flex-1 relative transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Connector line between boxes */}
              {index < steps.length - 1 && (
                <div
                  className="absolute top-1/2 -right-1 w-2 h-0.5 z-0"
                  style={{
                    background: index < activeStep ? 'var(--green)' : 'var(--gray-200)',
                    transition: 'background 0.3s ease',
                  }}
                />
              )}

              {/* Box */}
              <div
                className="relative z-10 p-3 rounded-lg text-center transition-all duration-300"
                style={{
                  background: isActive ? 'var(--green)' : 'var(--white)',
                  border: `1px solid ${isActive ? 'var(--green)' : 'var(--gray-200)'}`,
                  boxShadow: isCurrent ? '0 4px 12px rgba(0, 166, 81, 0.3)' : 'none',
                  transform: isCurrent ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                {/* Title */}
                <p
                  className="text-sm font-semibold mb-0.5 transition-colors duration-300"
                  style={{ color: isActive ? 'white' : 'var(--black)' }}
                >
                  {step.title}
                </p>

                {/* Description */}
                <p
                  className="text-xs transition-colors duration-300"
                  style={{ color: isActive ? 'rgba(255,255,255,0.8)' : 'var(--gray-500)' }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
