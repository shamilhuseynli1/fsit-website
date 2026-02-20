'use client';

import { ReactNode } from 'react';
import { OpenAILogo, AnthropicLogo, GoogleLogo, MetaLogo, MistralLogo, HuggingFaceLogo, AWSLogo } from './ModelLogos';

type ModelProvider = 'openai' | 'anthropic' | 'google' | 'meta' | 'mistral' | 'huggingface' | 'aws' | 'xgboost' | 'pytorch' | 'tensorflow';

interface ModelCardProps {
  title: string;
  description: string;
  inputLabel: string;
  inputIcon: ReactNode;
  outputLabel: string;
  outputIcon: ReactNode;
  models: ModelProvider[];
  metric: string;
  metricValue: string;
  accentColor?: string;
}

const ModelLogo = ({ provider, className = "w-6 h-6" }: { provider: ModelProvider; className?: string }) => {
  switch (provider) {
    case 'openai':
      return <OpenAILogo className={className} />;
    case 'anthropic':
      return <AnthropicLogo className={className} />;
    case 'google':
      return <GoogleLogo className={className} />;
    case 'meta':
      return <MetaLogo className={className} />;
    case 'mistral':
      return <MistralLogo className={className} />;
    case 'huggingface':
      return <HuggingFaceLogo className={className} />;
    case 'aws':
      return <AWSLogo className={className} />;
    case 'xgboost':
      return (
        <div className={`${className} flex items-center justify-center font-bold text-xs bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded`}>
          XG
        </div>
      );
    case 'pytorch':
      return (
        <div className={`${className} flex items-center justify-center font-bold text-xs bg-gradient-to-br from-orange-500 to-red-500 text-white rounded`}>
          PT
        </div>
      );
    case 'tensorflow':
      return (
        <div className={`${className} flex items-center justify-center font-bold text-xs bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded`}>
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
    huggingface: 'HF Models',
    aws: 'Bedrock',
    xgboost: 'XGBoost',
    pytorch: 'PyTorch',
    tensorflow: 'TensorFlow',
  };
  return names[provider];
};

export default function ModelCard({
  title,
  description,
  inputLabel,
  inputIcon,
  outputLabel,
  outputIcon,
  models,
  metric,
  metricValue,
  accentColor = 'primary',
}: ModelCardProps) {
  return (
    <div className="group relative bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-6 hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
      {/* Floating decorative elements */}
      <div className="absolute -top-2 -right-2 w-4 h-4 border border-primary-500/30 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary-500/20 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-neutral-400 mb-6 leading-relaxed">{description}</p>

      {/* Visual Flow Diagram */}
      <div className="flex items-center justify-between gap-2 mb-6 bg-dark-900/50 rounded-xl p-4">
        {/* Input */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-14 h-14 rounded-xl bg-dark-700 border border-dark-600 flex items-center justify-center text-primary-400 group-hover:border-primary-500/50 transition-colors">
            {inputIcon}
          </div>
          <span className="text-xs text-dark-400 text-center font-medium">{inputLabel}</span>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 flex items-center">
          <div className="w-6 h-px bg-dark-600" />
          <div className="w-6 h-px bg-gradient-to-r from-dark-600 to-primary-500/70" />
          <svg className="w-3 h-3 text-primary-500/70 -ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Model/Process */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 border border-primary-500/30 flex items-center justify-center gap-1 group-hover:border-primary-500/50 transition-colors">
              {models.slice(0, 2).map((model, i) => (
                <ModelLogo key={i} provider={model} className="w-6 h-6 text-white" />
              ))}
            </div>
          </div>
          <div className="flex gap-1 flex-wrap justify-center">
            {models.map((model, i) => (
              <span key={i} className="text-[10px] text-primary-400 bg-primary-500/10 px-1.5 py-0.5 rounded font-medium">
                {getProviderName(model)}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 flex items-center">
          <div className="w-6 h-px bg-gradient-to-r from-primary-500/70 to-dark-600" />
          <div className="w-6 h-px bg-dark-600" />
          <svg className="w-3 h-3 text-primary-500/70 -ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Output */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-14 h-14 rounded-xl bg-dark-700 border border-dark-600 flex items-center justify-center text-green-400 group-hover:border-green-500/50 transition-colors">
            {outputIcon}
          </div>
          <span className="text-xs text-dark-400 text-center font-medium">{outputLabel}</span>
        </div>
      </div>

      {/* Metric */}
      <div className="flex items-center justify-between pt-4 border-t border-dark-700">
        <span className="text-sm text-neutral-400 font-medium">{metric}</span>
        <span className="text-2xl font-bold text-primary-400">{metricValue}</span>
      </div>
    </div>
  );
}

// Preset input/output icons for different use cases
export const ModelIcons = {
  // Input icons
  transaction: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  document: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  user: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  chart: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  database: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  ),
  truck: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  location: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  inventory: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  globe: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  // Output icons
  shield: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  score: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  trending: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  check: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  alert: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  route: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  report: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  insight: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  prediction: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  ),
};
