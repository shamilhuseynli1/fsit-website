'use client';

import { ReactNode } from 'react';

interface OperationsCardEnhancedProps {
  title: string;
  description: string;
  inputLabel: string;
  inputIcon: ReactNode;
  outputLabel: string;
  outputIcon: ReactNode;
  platforms: string[];
  features: string[];
  metric: string;
  metricValue: string;
}

export default function OperationsCardEnhanced({
  title,
  description,
  inputLabel,
  inputIcon,
  outputLabel,
  outputIcon,
  platforms,
  features,
  metric,
  metricValue,
}: OperationsCardEnhancedProps) {
  return (
    <div className="group relative">
      {/* Card */}
      <div className="relative bg-white border border-neutral-200 rounded-2xl p-6
                      hover:border-primary-500/50 transition-all duration-500
                      hover:shadow-xl
                      hover:translate-y-[-2px]">

        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary-500/0 group-hover:border-primary-500/50 rounded-tl-2xl transition-all duration-500" />
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary-500/0 group-hover:border-primary-500/50 rounded-tr-2xl transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary-500/0 group-hover:border-primary-500/50 rounded-bl-2xl transition-all duration-500" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary-500/0 group-hover:border-primary-500/50 rounded-br-2xl transition-all duration-500" />

        {/* Floating decorations */}
        <div className="absolute -top-2 -right-2 w-4 h-4 border border-primary-500/30 rotate-45
                        opacity-0 group-hover:opacity-100 group-hover:scale-110
                        transition-all duration-500 delay-100" />
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary-500/30 rotate-45
                        opacity-0 group-hover:opacity-100 group-hover:scale-110
                        transition-all duration-500 delay-200" />

        {/* Title */}
        <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-primary-500 transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-dark-500 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Operations Flow Diagram */}
        <div className="relative bg-cream-50 rounded-xl p-5 mb-6 overflow-hidden border border-neutral-100">
          {/* Flow content */}
          <div className="relative flex items-center justify-between gap-3">
            {/* Input */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-14 h-14 rounded-xl bg-white border border-neutral-200
                              flex items-center justify-center text-primary-500
                              group-hover:border-primary-500/50 group-hover:shadow-md
                              transition-all duration-300">
                {inputIcon}
              </div>
              <span className="text-xs text-dark-500 text-center font-medium">
                {inputLabel}
              </span>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0 flex items-center gap-1">
              <div className="w-6 h-[2px] bg-neutral-300 group-hover:bg-primary-500/50 transition-all duration-500" />
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   className="text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all duration-300"
                   style={{ maxWidth: '12px', maxHeight: '12px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Operations Core - Center piece */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="relative">
                <div className="relative w-16 h-16 rounded-2xl bg-primary-500/10
                                border border-primary-500/30 flex items-center justify-center
                                group-hover:border-primary-500/60 group-hover:bg-primary-500/15
                                transition-all duration-500">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       className="text-primary-500" style={{ maxWidth: '32px', maxHeight: '32px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex gap-1 flex-wrap justify-center">
                {platforms.slice(0, 3).map((platform, i) => (
                  <span key={i} className="text-[10px] text-primary-600 bg-primary-500/10 px-1.5 py-0.5 rounded font-medium
                                           group-hover:bg-primary-500/20 transition-colors duration-300">
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0 flex items-center gap-1">
              <div className="w-6 h-[2px] bg-neutral-300 group-hover:bg-primary-500/50 transition-all duration-500" />
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   className="text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all duration-300"
                   style={{ maxWidth: '12px', maxHeight: '12px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Output */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-14 h-14 rounded-xl bg-white border border-neutral-200
                              flex items-center justify-center text-primary-500
                              group-hover:border-primary-500/50 group-hover:shadow-md
                              transition-all duration-300">
                {outputIcon}
              </div>
              <span className="text-xs text-dark-500 text-center font-medium">
                {outputLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, i) => (
            <span key={i} className="text-[11px] text-dark-500 bg-neutral-100 px-2 py-1 rounded-md border border-neutral-200
                                     group-hover:border-primary-500/30 group-hover:text-dark-700 transition-all duration-300">
              {feature}
            </span>
          ))}
        </div>

        {/* Metric */}
        <div className="relative pt-4 border-t border-neutral-200 group-hover:border-primary-500/30 transition-colors">
          <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary-500 to-primary-400
                          group-hover:w-full transition-all duration-700" />

          <div className="flex items-center justify-between">
            <span className="text-sm text-dark-500 font-medium">{metric}</span>
            <span className="text-2xl font-bold text-primary-500">
              {metricValue}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
