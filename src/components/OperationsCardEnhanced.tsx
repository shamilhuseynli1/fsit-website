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
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500 to-primary-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />

      {/* Card */}
      <div className="relative bg-dark-800/80 backdrop-blur-sm border border-dark-700 rounded-2xl p-6
                      hover:border-gold-500/50 transition-all duration-500
                      hover:shadow-2xl hover:shadow-gold-500/10
                      hover:translate-y-[-2px]">

        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-gold-500/0 group-hover:border-gold-500/50 rounded-tl-2xl transition-all duration-500" />
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gold-500/0 group-hover:border-gold-500/50 rounded-tr-2xl transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gold-500/0 group-hover:border-gold-500/50 rounded-bl-2xl transition-all duration-500" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-gold-500/0 group-hover:border-gold-500/50 rounded-br-2xl transition-all duration-500" />

        {/* Floating decorations */}
        <div className="absolute -top-2 -right-2 w-4 h-4 border border-gold-500/30 rotate-45
                        opacity-0 group-hover:opacity-100 group-hover:scale-110
                        transition-all duration-500 delay-100" />
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary-500/30 rotate-45
                        opacity-0 group-hover:opacity-100 group-hover:scale-110
                        transition-all duration-500 delay-200" />

        {/* Title with gradient on hover */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gold-400 transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-400 mb-6 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
          {description}
        </p>

        {/* Operations Flow Diagram */}
        <div className="relative bg-dark-900/70 rounded-xl p-5 mb-6 overflow-hidden">
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold-500/0 via-gold-500/10 to-gold-500/0
                          group-hover:from-gold-500/10 group-hover:via-gold-500/20 group-hover:to-gold-500/10
                          transition-all duration-700" />

          {/* Flow content */}
          <div className="relative flex items-center justify-between gap-3">
            {/* Input */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-14 h-14 rounded-xl bg-dark-700/80 border border-dark-600
                              flex items-center justify-center text-gold-400
                              group-hover:border-gold-500/50 group-hover:shadow-lg group-hover:shadow-gold-500/20
                              transition-all duration-300">
                {inputIcon}
              </div>
              <span className="text-xs text-neutral-500 text-center font-medium group-hover:text-neutral-400 transition-colors">
                {inputLabel}
              </span>
            </div>

            {/* Arrow with pulse animation */}
            <div className="flex-shrink-0 flex items-center gap-1">
              <div className="w-6 h-[2px] bg-gradient-to-r from-dark-600 to-gold-500/50
                              group-hover:to-gold-500 transition-all duration-500" />
              <svg className="w-3 h-3 text-gold-500/50 group-hover:text-gold-500 group-hover:translate-x-0.5 transition-all duration-300"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Operations Core - Center piece with glow */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-primary-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-all duration-500" />

                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/20 to-primary-600/10
                                border border-gold-500/30 flex items-center justify-center
                                group-hover:border-gold-500/60 group-hover:from-gold-500/30 group-hover:to-primary-600/20
                                transition-all duration-500">
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex gap-1 flex-wrap justify-center">
                {platforms.slice(0, 3).map((platform, i) => (
                  <span key={i} className="text-[10px] text-gold-400 bg-gold-500/10 px-1.5 py-0.5 rounded font-medium
                                           group-hover:bg-gold-500/20 transition-colors duration-300">
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0 flex items-center gap-1">
              <div className="w-6 h-[2px] bg-gradient-to-r from-gold-500/50 to-dark-600
                              group-hover:from-gold-500 transition-all duration-500" />
              <svg className="w-3 h-3 text-primary-500/50 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all duration-300"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Output */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-14 h-14 rounded-xl bg-dark-700/80 border border-dark-600
                              flex items-center justify-center text-primary-400
                              group-hover:border-primary-500/50 group-hover:shadow-lg group-hover:shadow-primary-500/20
                              transition-all duration-300">
                {outputIcon}
              </div>
              <span className="text-xs text-neutral-500 text-center font-medium group-hover:text-neutral-400 transition-colors">
                {outputLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, i) => (
            <span key={i} className="text-[11px] text-neutral-400 bg-dark-700/50 px-2 py-1 rounded-md border border-dark-600
                                     group-hover:border-dark-500 group-hover:text-neutral-300 transition-all duration-300">
              {feature}
            </span>
          ))}
        </div>

        {/* Metric with animated underline */}
        <div className="relative pt-4 border-t border-dark-700 group-hover:border-dark-600 transition-colors">
          <div className="absolute top-0 left-0 w-0 h-[1px] bg-gradient-to-r from-gold-500 to-primary-500
                          group-hover:w-full transition-all duration-700" />

          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-400 font-medium">{metric}</span>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-primary-400
                             group-hover:from-gold-300 group-hover:to-primary-300 transition-all duration-300">
              {metricValue}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
