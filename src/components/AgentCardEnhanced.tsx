'use client';

import { ReactNode } from 'react';

type ModelProvider = 'openai' | 'anthropic' | 'google' | 'meta' | 'mistral' | 'huggingface';

interface AgentCardEnhancedProps {
  title: string;
  description: string;
  triggerLabel: string;
  triggerIcon: ReactNode;
  actionLabel: string;
  actionIcon: ReactNode;
  models: ModelProvider[];
  capabilities: string[];
  metric: string;
  metricValue: string;
}

const ModelLogo = ({ provider, className = "w-6 h-6" }: { provider: ModelProvider; className?: string }) => {
  switch (provider) {
    case 'openai':
      return (
        <div className={`${className} flex items-center justify-center rounded-md bg-black`}>
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z"/>
          </svg>
        </div>
      );
    case 'anthropic':
      return (
        <div className={`${className} flex items-center justify-center rounded-md bg-[#D4A27F]`}>
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.514h6.468l1.344 3.514h3.78l-6.696-16.918h-3.324zm-.072 10.676l2.16-5.639 2.16 5.639h-4.32z"/>
          </svg>
        </div>
      );
    case 'google':
      return (
        <div className={`${className} flex items-center justify-center rounded-md overflow-hidden`}>
          <img src="/logos/google-gemini-icon.webp" alt="Gemini" className="w-full h-full object-contain" />
        </div>
      );
    case 'meta':
      return (
        <div className={`${className} flex items-center justify-center rounded-md overflow-hidden`}>
          <img src="/logos/Meta-ai-logo.webp" alt="Meta AI" className="w-full h-full object-cover" />
        </div>
      );
    case 'mistral':
      return (
        <div className={`${className} flex items-center justify-center rounded-md bg-black p-0.5 overflow-hidden`}>
          <img src="/logos/Mistral_AI_logo_(2025–).svg.png" alt="Mistral" className="w-full h-full object-contain" />
        </div>
      );
    case 'huggingface':
      return (
        <div className={`${className} flex items-center justify-center rounded-md overflow-hidden`}>
          <img src="/logos/hf-logo.png" alt="Hugging Face" className="w-full h-full object-cover" />
        </div>
      );
    default:
      return null;
  }
};

const getProviderName = (provider: ModelProvider): string => {
  const names: Record<ModelProvider, string> = {
    openai: 'GPT-4',
    anthropic: 'Claude',
    google: 'Gemini',
    meta: 'Llama',
    mistral: 'Mistral',
    huggingface: 'HF Models',
  };
  return names[provider];
};

export default function AgentCardEnhanced({
  title,
  description,
  triggerLabel,
  triggerIcon,
  actionLabel,
  actionIcon,
  models,
  capabilities,
  metric,
  metricValue,
}: AgentCardEnhancedProps) {
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

        {/* Agent Flow Diagram */}
        <div className="relative bg-cream-50 rounded-xl p-5 mb-6 overflow-hidden border border-neutral-100">
          {/* Flow content */}
          <div className="relative flex items-center justify-between gap-3">
            {/* Trigger */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-14 h-14 rounded-xl bg-white border border-neutral-200
                              flex items-center justify-center text-primary-500
                              group-hover:border-primary-500/50 group-hover:shadow-md
                              transition-all duration-300">
                {triggerIcon}
              </div>
              <span className="text-xs text-dark-500 text-center font-medium">
                {triggerLabel}
              </span>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0 flex items-center gap-1">
              <div className="w-6 h-[2px] bg-neutral-300 group-hover:bg-primary-500/50 transition-all duration-500" />
              <svg className="w-3 h-3 text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all duration-300"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Agent Core - Center piece */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="relative">
                <div className="relative w-16 h-16 rounded-2xl bg-primary-500/10
                                border border-primary-500/30 flex items-center justify-center gap-1
                                group-hover:border-primary-500/60 group-hover:bg-primary-500/15
                                transition-all duration-500">
                  {models.slice(0, 2).map((model, i) => (
                    <ModelLogo key={i} provider={model} className="w-6 h-6" />
                  ))}
                </div>
              </div>
              <div className="flex gap-1 flex-wrap justify-center">
                {models.map((model, i) => (
                  <span key={i} className="text-[10px] text-primary-600 bg-primary-500/10 px-1.5 py-0.5 rounded font-medium
                                           group-hover:bg-primary-500/20 transition-colors duration-300">
                    {getProviderName(model)}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0 flex items-center gap-1">
              <div className="w-6 h-[2px] bg-neutral-300 group-hover:bg-primary-500/50 transition-all duration-500" />
              <svg className="w-3 h-3 text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all duration-300"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Action Output */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-14 h-14 rounded-xl bg-white border border-neutral-200
                              flex items-center justify-center text-primary-500
                              group-hover:border-primary-500/50 group-hover:shadow-md
                              transition-all duration-300">
                {actionIcon}
              </div>
              <span className="text-xs text-dark-500 text-center font-medium">
                {actionLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {capabilities.map((cap, i) => (
            <span key={i} className="text-[11px] text-dark-500 bg-neutral-100 px-2 py-1 rounded-md border border-neutral-200
                                     group-hover:border-primary-500/30 group-hover:text-dark-700 transition-all duration-300">
              {cap}
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
