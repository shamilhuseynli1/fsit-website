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
        <div className={`${className} flex items-center justify-center rounded-lg bg-black`}>
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z"/>
          </svg>
        </div>
      );
    case 'anthropic':
      return (
        <div className={`${className} flex items-center justify-center rounded-lg bg-[#D4A27F]`}>
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.304 3.541h-3.672l6.696 16.918h3.672l-6.696-16.918zm-10.608 0l-6.696 16.918h3.78l1.344-3.514h6.468l1.344 3.514h3.78l-6.696-16.918h-3.324zm-.072 10.676l2.16-5.639 2.16 5.639h-4.32z"/>
          </svg>
        </div>
      );
    case 'google':
      return (
        <div className={`${className} flex items-center justify-center rounded-lg overflow-hidden`}>
          <img src="/logos/google-gemini-icon.webp" alt="Gemini" className="w-full h-full object-contain" />
        </div>
      );
    case 'meta':
      return (
        <div className={`${className} flex items-center justify-center rounded-lg overflow-hidden`}>
          <img src="/logos/Meta-ai-logo.webp" alt="Meta AI" className="w-full h-full object-cover" />
        </div>
      );
    case 'mistral':
      return (
        <div className={`${className} flex items-center justify-center rounded-lg bg-black p-1 overflow-hidden`}>
          <img src="/logos/Mistral_AI_logo_(2025–).svg.png" alt="Mistral" className="w-full h-full object-contain" />
        </div>
      );
    case 'huggingface':
      return (
        <div className={`${className} flex items-center justify-center rounded-lg overflow-hidden`}>
          <img src="/logos/hf-logo.png" alt="Hugging Face" className="w-full h-full object-cover" />
        </div>
      );
    case 'xgboost':
      return (
        <div className={`${className} flex items-center justify-center font-bold text-sm bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-lg`}>
          XG
        </div>
      );
    case 'pytorch':
      return (
        <div className={`${className} flex items-center justify-center font-bold text-sm bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-lg`}>
          PT
        </div>
      );
    case 'tensorflow':
      return (
        <div className={`${className} flex items-center justify-center font-bold text-sm bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-lg`}>
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
      {/* Card */}
      <div className="relative bg-white rounded-2xl p-10
                      hover:bg-cream-50 transition-all duration-500
                      hover:shadow-xl
                      hover:translate-y-[-2px]">

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-4 group-hover:text-primary-500 transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-lg md:text-xl text-dark-500 mb-8 leading-relaxed">
          {description}
        </p>

        {/* Visual Flow Diagram */}
        <div className="relative bg-cream-50 rounded-xl p-4 md:p-6 mb-8">
          {/* Flow content */}
          <div className="relative flex items-center justify-center gap-2 md:gap-4">
            {/* Input */}
            <div className="flex flex-col items-center gap-2 min-w-0">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white border border-neutral-200
                              flex items-center justify-center text-primary-500 flex-shrink-0
                              group-hover:border-primary-500/50
                              transition-all duration-300 [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-7 md:[&>svg]:h-7">
                {inputIcon}
              </div>
              <span className="text-sm md:text-base text-dark-500 text-center font-semibold">
                {inputLabel}
              </span>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0 flex items-center gap-0.5">
              <div className="w-6 md:w-8 h-[2px] bg-neutral-300" />
              <svg className="w-3 h-3 text-primary-500"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Model/Process - Center piece */}
            <div className="flex flex-col items-center gap-2 min-w-0">
              <div className="relative">
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary-500/10
                                border border-primary-500/30 flex items-center justify-center gap-1 flex-shrink-0
                                transition-all duration-500">
                  {models.slice(0, 2).map((model, i) => (
                    <ModelLogo key={i} provider={model} className="w-7 h-7 md:w-8 md:h-8" />
                  ))}
                </div>
              </div>
              <div className="flex gap-1 flex-wrap justify-center">
                {models.map((model, i) => (
                  <span key={i} className="text-xs md:text-sm text-primary-500 bg-primary-500/10 px-2 py-1 rounded font-semibold">
                    {getProviderName(model)}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0 flex items-center gap-0.5">
              <div className="w-6 md:w-8 h-[2px] bg-neutral-300" />
              <svg className="w-3 h-3 text-primary-500"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Output */}
            <div className="flex flex-col items-center gap-2 min-w-0">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white border border-neutral-200
                              flex items-center justify-center text-primary-500 flex-shrink-0
                              group-hover:border-primary-500/50
                              transition-all duration-300 [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-7 md:[&>svg]:h-7">
                {outputIcon}
              </div>
              <span className="text-sm md:text-base text-dark-500 text-center font-semibold">
                {outputLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Metric */}
        <div className="relative pt-6 border-t-2 border-neutral-200">
          <div className="flex items-center justify-between">
            <span className="text-lg md:text-xl text-dark-500 font-semibold">{metric}</span>
            <span className="text-3xl md:text-4xl font-bold text-primary-500">
              {metricValue}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
