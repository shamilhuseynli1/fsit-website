'use client';

import { ReactNode } from 'react';

type ModelProvider = 'openai' | 'anthropic' | 'google' | 'meta' | 'mistral' | 'huggingface' | 'aws' | 'xgboost' | 'pytorch' | 'tensorflow';

interface ModelCardEnhancedProps {
  title: string;
  description: string;
  inputLabel: string;
  inputIcon: ReactNode;
  outputLabel: string;
  outputIcon: ReactNode;
  models: ModelProvider[];
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
    case 'xgboost':
      return (
        <div className={`${className} flex items-center justify-center font-bold text-[10px] bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-md`}>
          XG
        </div>
      );
    case 'pytorch':
      return (
        <div className={`${className} flex items-center justify-center font-bold text-[10px] bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-md`}>
          PT
        </div>
      );
    case 'tensorflow':
      return (
        <div className={`${className} flex items-center justify-center font-bold text-[10px] bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-md`}>
          TF
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
    huggingface: 'HF',
    aws: 'Bedrock',
    xgboost: 'XGBoost',
    pytorch: 'PyTorch',
    tensorflow: 'TensorFlow',
  };
  return names[provider];
};

export default function ModelCardEnhanced({
  title,
  description,
  inputLabel,
  inputIcon,
  outputLabel,
  outputIcon,
  models,
  metric,
  metricValue,
}: ModelCardEnhancedProps) {
  return (
    <div className="group relative">
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-green-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />

      {/* Card */}
      <div className="relative bg-dark-800/80 backdrop-blur-sm border border-dark-700 rounded-2xl p-6
                      hover:border-primary-500/50 transition-all duration-500
                      hover:shadow-2xl hover:shadow-primary-500/10
                      hover:translate-y-[-2px]">

        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary-500/0 group-hover:border-primary-500/50 rounded-tl-2xl transition-all duration-500" />
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary-500/0 group-hover:border-primary-500/50 rounded-tr-2xl transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary-500/0 group-hover:border-primary-500/50 rounded-bl-2xl transition-all duration-500" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary-500/0 group-hover:border-primary-500/50 rounded-br-2xl transition-all duration-500" />

        {/* Floating diamond decoration */}
        <div className="absolute -top-2 -right-2 w-4 h-4 border border-primary-500/30 rotate-45
                        opacity-0 group-hover:opacity-100 group-hover:scale-110
                        transition-all duration-500 delay-100" />
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary-500/30 rotate-45
                        opacity-0 group-hover:opacity-100 group-hover:scale-110
                        transition-all duration-500 delay-200" />

        {/* Title with gradient on hover */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary-400 transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-400 mb-6 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
          {description}
        </p>

        {/* Visual Flow Diagram */}
        <div className="relative bg-dark-900/70 rounded-xl p-5 mb-6 overflow-hidden">
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0
                          group-hover:from-primary-500/10 group-hover:via-primary-500/20 group-hover:to-primary-500/10
                          transition-all duration-700" />

          {/* Flow content */}
          <div className="relative flex items-center justify-between gap-3">
            {/* Input */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-14 h-14 rounded-xl bg-dark-700/80 border border-dark-600
                              flex items-center justify-center text-primary-400
                              group-hover:border-primary-500/50 group-hover:shadow-lg group-hover:shadow-primary-500/20
                              transition-all duration-300">
                {inputIcon}
              </div>
              <span className="text-xs text-neutral-500 text-center font-medium group-hover:text-neutral-400 transition-colors">
                {inputLabel}
              </span>
            </div>

            {/* Animated Arrow */}
            <div className="flex-shrink-0 flex items-center gap-1">
              <div className="w-8 h-[2px] bg-gradient-to-r from-dark-600 to-primary-500/50
                              group-hover:to-primary-500 transition-all duration-500" />
              <svg className="w-3 h-3 text-primary-500/50 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all duration-300"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Model/Process - Center piece with glow */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-green-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-all duration-500" />

                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-600/10
                                border border-primary-500/30 flex items-center justify-center gap-1
                                group-hover:border-primary-500/60 group-hover:from-primary-500/30 group-hover:to-primary-600/20
                                transition-all duration-500">
                  {models.slice(0, 2).map((model, i) => (
                    <ModelLogo key={i} provider={model} className="w-6 h-6" />
                  ))}
                </div>
              </div>
              <div className="flex gap-1 flex-wrap justify-center">
                {models.map((model, i) => (
                  <span key={i} className="text-[10px] text-primary-400 bg-primary-500/10 px-1.5 py-0.5 rounded font-medium
                                           group-hover:bg-primary-500/20 transition-colors duration-300">
                    {getProviderName(model)}
                  </span>
                ))}
              </div>
            </div>

            {/* Animated Arrow */}
            <div className="flex-shrink-0 flex items-center gap-1">
              <div className="w-8 h-[2px] bg-gradient-to-r from-primary-500/50 to-dark-600
                              group-hover:from-primary-500 transition-all duration-500" />
              <svg className="w-3 h-3 text-primary-500/50 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all duration-300"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Output */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-14 h-14 rounded-xl bg-dark-700/80 border border-dark-600
                              flex items-center justify-center text-green-400
                              group-hover:border-green-500/50 group-hover:shadow-lg group-hover:shadow-green-500/20
                              transition-all duration-300">
                {outputIcon}
              </div>
              <span className="text-xs text-neutral-500 text-center font-medium group-hover:text-neutral-400 transition-colors">
                {outputLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Metric with animated underline */}
        <div className="relative pt-4 border-t border-dark-700 group-hover:border-dark-600 transition-colors">
          <div className="absolute top-0 left-0 w-0 h-[1px] bg-gradient-to-r from-primary-500 to-green-500
                          group-hover:w-full transition-all duration-700" />

          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-400 font-medium">{metric}</span>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-green-400
                             group-hover:from-primary-300 group-hover:to-green-300 transition-all duration-300">
              {metricValue}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
