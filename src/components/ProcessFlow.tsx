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
      {/* Scrollable on mobile, flex row on desktop */}
      <div className="flex items-stretch gap-3 md:gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide md:overflow-visible">
        {steps.map((step, index) => {
          const isActive = index <= activeStep;
          const isCurrent = index === activeStep;

          return (
            <div
              key={index}
              className={`flex-shrink-0 md:flex-1 relative transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`,
                minWidth: '140px',
              }}
            >
              {/* Connector line between boxes - hidden on mobile */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 z-0"
                  style={{
                    background: index < activeStep ? 'var(--green)' : 'var(--gray-200)',
                    transition: 'background 0.3s ease',
                  }}
                />
              )}

              {/* Box */}
              <div
                className="relative z-10 p-5 md:p-6 rounded-xl text-center transition-all duration-300 h-full"
                style={{
                  background: isActive ? 'var(--green)' : 'var(--white)',
                  border: `2px solid ${isActive ? 'var(--green)' : 'var(--gray-200)'}`,
                  boxShadow: isCurrent ? '0 8px 24px rgba(0, 166, 81, 0.3)' : 'none',
                  transform: isCurrent ? 'scale(1.03)' : 'scale(1)',
                }}
              >
                {/* Title */}
                <p
                  className="text-lg md:text-xl font-bold mb-1 transition-colors duration-300"
                  style={{ color: isActive ? 'white' : 'var(--black)' }}
                >
                  {step.title}
                </p>

                {/* Description */}
                <p
                  className="text-sm md:text-base transition-colors duration-300"
                  style={{ color: isActive ? 'rgba(255,255,255,0.9)' : 'var(--gray-500)' }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* Mobile scroll indicator */}
      <div className="md:hidden flex justify-center mt-2 gap-1">
        {steps.map((_, index) => (
          <div
            key={index}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{
              background: index <= activeStep ? 'var(--green)' : 'var(--gray-300)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
