'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';
import ModelCardEnhanced from '@/components/ModelCardEnhanced';
import { ModelIcons } from '@/components/ModelCard';
import AnimatedBackground from '@/components/AnimatedBackground';
import { OpenAILogo, AnthropicLogo, GoogleLogo, MetaLogo, MistralLogo } from '@/components/ModelLogos';
import HeroModelStack from '@/components/HeroModelStack';

type ModelProvider = 'openai' | 'anthropic' | 'google' | 'meta' | 'mistral' | 'huggingface' | 'aws' | 'xgboost' | 'pytorch' | 'tensorflow';

interface ModelSolution {
  title: string;
  description: string;
  inputLabel: string;
  inputIcon: React.ReactNode;
  outputLabel: string;
  outputIcon: React.ReactNode;
  models: ModelProvider[];
  metric: string;
  metricValue: string;
}

interface Category {
  id: string;
  name: string;
  tagline: string;
  icon: React.ReactNode;
  solutions: ModelSolution[];
}

const categories: Category[] = [
  {
    id: 'finance',
    name: 'Finance',
    tagline: 'Secure. Compliant. Intelligent.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    solutions: [
      {
        title: 'Fraud Detection',
        description: 'Real-time transaction monitoring using ensemble ML models to detect anomalies, suspicious patterns, and potential fraud before it impacts your business.',
        inputLabel: 'Transactions',
        inputIcon: ModelIcons.transaction,
        outputLabel: 'Alerts',
        outputIcon: ModelIcons.shield,
        models: ['xgboost', 'openai'],
        metric: 'Detection Accuracy',
        metricValue: '99.2%',
      },
      {
        title: 'Credit Risk Assessment',
        description: 'Predictive models that analyze creditworthiness using alternative data sources, improving lending decisions while significantly reducing default rates.',
        inputLabel: 'Applications',
        inputIcon: ModelIcons.document,
        outputLabel: 'Risk Score',
        outputIcon: ModelIcons.score,
        models: ['xgboost', 'anthropic'],
        metric: 'Default Reduction',
        metricValue: '35%',
      },
      {
        title: 'Algorithmic Trading',
        description: 'ML-powered trading strategies that analyze market patterns, sentiment, and macroeconomic indicators to optimize portfolio performance.',
        inputLabel: 'Market Data',
        inputIcon: ModelIcons.chart,
        outputLabel: 'Signals',
        outputIcon: ModelIcons.trending,
        models: ['pytorch', 'openai'],
        metric: 'Return Improvement',
        metricValue: '+23%',
      },
      {
        title: 'AML/KYC Compliance',
        description: 'Automated compliance monitoring with intelligent document processing for KYC verification and real-time transaction screening for AML requirements.',
        inputLabel: 'Documents',
        inputIcon: ModelIcons.document,
        outputLabel: 'Verified',
        outputIcon: ModelIcons.check,
        models: ['anthropic', 'google'],
        metric: 'Processing Speed',
        metricValue: '70%↑',
      },
    ],
  },
  {
    id: 'logistics',
    name: 'Logistics',
    tagline: 'Optimize. Automate. Deliver.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    solutions: [
      {
        title: 'Route Optimization',
        description: 'Dynamic routing algorithms that consider real-time traffic, weather, and delivery constraints to minimize costs and maximize fleet efficiency.',
        inputLabel: 'Locations',
        inputIcon: ModelIcons.location,
        outputLabel: 'Routes',
        outputIcon: ModelIcons.route,
        models: ['google', 'pytorch'],
        metric: 'Fuel Savings',
        metricValue: '18%',
      },
      {
        title: 'Demand Forecasting',
        description: 'Predictive models that analyze historical sales, seasonality, and market trends to accurately forecast inventory requirements.',
        inputLabel: 'Sales Data',
        inputIcon: ModelIcons.chart,
        outputLabel: 'Forecast',
        outputIcon: ModelIcons.prediction,
        models: ['pytorch', 'openai'],
        metric: 'Forecast Accuracy',
        metricValue: '30%↑',
      },
      {
        title: 'Warehouse Automation',
        description: 'Intelligent picking, packing, and inventory management systems that optimize warehouse operations and eliminate manual errors.',
        inputLabel: 'Inventory',
        inputIcon: ModelIcons.inventory,
        outputLabel: 'Actions',
        outputIcon: ModelIcons.check,
        models: ['tensorflow', 'anthropic'],
        metric: 'Fulfillment Speed',
        metricValue: '40%↑',
      },
      {
        title: 'Fleet Management',
        description: 'Predictive maintenance and utilization optimization for vehicle fleets, reducing downtime and extending asset lifespan.',
        inputLabel: 'Telemetry',
        inputIcon: ModelIcons.truck,
        outputLabel: 'Maintenance',
        outputIcon: ModelIcons.alert,
        models: ['xgboost', 'openai'],
        metric: 'Downtime Reduction',
        metricValue: '25%',
      },
    ],
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'Predict. Engage. Grow.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    solutions: [
      {
        title: 'Churn Prediction',
        description: 'ML models that identify at-risk customers before they leave, enabling proactive retention strategies and personalized engagement campaigns.',
        inputLabel: 'User Data',
        inputIcon: ModelIcons.user,
        outputLabel: 'Risk Score',
        outputIcon: ModelIcons.alert,
        models: ['xgboost', 'anthropic'],
        metric: 'Churn Reduction',
        metricValue: '45%',
      },
      {
        title: 'Sales Forecasting',
        description: 'Accurate revenue predictions using historical data, market signals, and pipeline analysis to improve planning and resource allocation.',
        inputLabel: 'Pipeline',
        inputIcon: ModelIcons.chart,
        outputLabel: 'Forecast',
        outputIcon: ModelIcons.prediction,
        models: ['pytorch', 'openai'],
        metric: 'Forecast Accuracy',
        metricValue: '92%',
      },
      {
        title: 'Process Automation',
        description: 'Intelligent automation combining RPA with Gen AI to handle complex business processes requiring judgment and decision-making.',
        inputLabel: 'Workflows',
        inputIcon: ModelIcons.document,
        outputLabel: 'Automated',
        outputIcon: ModelIcons.check,
        models: ['anthropic', 'openai'],
        metric: 'Cost Reduction',
        metricValue: '60%',
      },
      {
        title: 'Customer Segmentation',
        description: 'Advanced clustering and classification models that identify high-value customer segments for targeted marketing and personalization.',
        inputLabel: 'Behavior',
        inputIcon: ModelIcons.database,
        outputLabel: 'Segments',
        outputIcon: ModelIcons.insight,
        models: ['xgboost', 'google'],
        metric: 'Conversion Lift',
        metricValue: '35%↑',
      },
    ],
  },
  {
    id: 'management',
    name: 'Management',
    tagline: 'Plan. Optimize. Lead.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    solutions: [
      {
        title: 'Workforce Planning',
        description: 'Predictive models for talent acquisition, capacity planning, and skills gap analysis to optimize human resource allocation.',
        inputLabel: 'HR Data',
        inputIcon: ModelIcons.user,
        outputLabel: 'Plans',
        outputIcon: ModelIcons.report,
        models: ['xgboost', 'anthropic'],
        metric: 'Retention Improvement',
        metricValue: '28%',
      },
      {
        title: 'Performance Analytics',
        description: 'ML-powered performance measurement systems that identify top performers, predict outcomes, and recommend development paths.',
        inputLabel: 'Metrics',
        inputIcon: ModelIcons.chart,
        outputLabel: 'Insights',
        outputIcon: ModelIcons.insight,
        models: ['openai', 'pytorch'],
        metric: 'Productivity Gain',
        metricValue: '40%',
      },
      {
        title: 'Resource Allocation',
        description: 'Optimization algorithms that balance workloads, project assignments, and budget allocation across teams and initiatives.',
        inputLabel: 'Projects',
        inputIcon: ModelIcons.inventory,
        outputLabel: 'Optimal Mix',
        outputIcon: ModelIcons.check,
        models: ['google', 'xgboost'],
        metric: 'Efficiency Increase',
        metricValue: '25%',
      },
      {
        title: 'Risk Management',
        description: 'Enterprise risk assessment models that identify, quantify, and prioritize operational, financial, and strategic risks.',
        inputLabel: 'Indicators',
        inputIcon: ModelIcons.database,
        outputLabel: 'Risk Map',
        outputIcon: ModelIcons.shield,
        models: ['anthropic', 'openai'],
        metric: 'Response Time',
        metricValue: '50%↓',
      },
    ],
  },
  {
    id: 'consulting',
    name: 'Consulting',
    tagline: 'Analyze. Advise. Accelerate.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    solutions: [
      {
        title: 'Market Intelligence',
        description: 'Automated market research and competitive analysis using NLP to process vast amounts of unstructured data from multiple sources.',
        inputLabel: 'Sources',
        inputIcon: ModelIcons.globe,
        outputLabel: 'Insights',
        outputIcon: ModelIcons.insight,
        models: ['anthropic', 'openai'],
        metric: 'Insight Speed',
        metricValue: '80%↑',
      },
      {
        title: 'Due Diligence',
        description: 'ML-powered document analysis for M&A due diligence, contract review, and compliance verification at unprecedented speed.',
        inputLabel: 'Documents',
        inputIcon: ModelIcons.document,
        outputLabel: 'Report',
        outputIcon: ModelIcons.report,
        models: ['anthropic', 'google'],
        metric: 'Time Savings',
        metricValue: '65%',
      },
      {
        title: 'Strategy Analysis',
        description: 'Data-driven strategic recommendations powered by ML models that analyze industry trends, benchmarks, and success patterns.',
        inputLabel: 'Data',
        inputIcon: ModelIcons.database,
        outputLabel: 'Strategy',
        outputIcon: ModelIcons.trending,
        models: ['openai', 'anthropic'],
        metric: 'Delivery Speed',
        metricValue: '3x',
      },
      {
        title: 'Client Analytics',
        description: 'Predictive models for client health scoring, opportunity identification, and relationship management optimization.',
        inputLabel: 'Interactions',
        inputIcon: ModelIcons.user,
        outputLabel: 'Scores',
        outputIcon: ModelIcons.score,
        models: ['xgboost', 'openai'],
        metric: 'Revenue Growth',
        metricValue: '42%',
      },
    ],
  },
  {
    id: 'data-governance',
    name: 'Data Governance',
    tagline: 'Secure. Compliant. Trusted.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    solutions: [
      {
        title: 'Data Quality',
        description: 'ML models that automatically detect data anomalies, inconsistencies, and quality issues across enterprise data assets in real-time.',
        inputLabel: 'Raw Data',
        inputIcon: ModelIcons.database,
        outputLabel: 'Clean Data',
        outputIcon: ModelIcons.check,
        models: ['xgboost', 'anthropic'],
        metric: 'Data Accuracy',
        metricValue: '95%',
      },
      {
        title: 'Privacy Compliance',
        description: 'Automated PII detection, data classification, and compliance monitoring for GDPR, CCPA, and industry-specific regulations.',
        inputLabel: 'Records',
        inputIcon: ModelIcons.document,
        outputLabel: 'Compliant',
        outputIcon: ModelIcons.shield,
        models: ['anthropic', 'google'],
        metric: 'Compliance Rate',
        metricValue: '100%',
      },
      {
        title: 'Master Data Mgmt',
        description: 'Intelligent entity resolution and data matching algorithms that create unified, trusted views of critical business entities.',
        inputLabel: 'Entities',
        inputIcon: ModelIcons.database,
        outputLabel: 'Unified',
        outputIcon: ModelIcons.check,
        models: ['xgboost', 'openai'],
        metric: 'Deduplication',
        metricValue: '60%',
      },
      {
        title: 'Data Lineage',
        description: 'Automated metadata discovery and lineage tracking that maps data flows and dependencies across the enterprise.',
        inputLabel: 'Metadata',
        inputIcon: ModelIcons.chart,
        outputLabel: 'Lineage Map',
        outputIcon: ModelIcons.route,
        models: ['openai', 'anthropic'],
        metric: 'Audit Speed',
        metricValue: '70%↑',
      },
    ],
  },
];

export default function MLModelsPage() {
  const [activeCategory, setActiveCategory] = useState('finance');
  const activeData = categories.find((c) => c.id === activeCategory);

  // Add custom styles
  const customStyles = `
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes float-up-down {
      0%, 100% { transform: translateY(0px) rotate(45deg); }
      50% { transform: translateY(-20px) rotate(45deg); }
    }
    @keyframes glow-pulse {
      0%, 100% { opacity: 0.3; box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
      50% { opacity: 0.6; box-shadow: 0 0 40px rgba(34, 197, 94, 0.6); }
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 3s ease infinite;
    }
    .animate-float-up-down {
      animation: float-up-down 4s ease-in-out infinite;
    }
    .animate-glow-pulse {
      animation: glow-pulse 3s ease-in-out infinite;
    }
    .animate-shimmer {
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
      background-size: 200% 100%;
      animation: shimmer 2s infinite;
    }
  `;

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && categories.find((c) => c.id === hash)) {
        setActiveCategory(hash);
        setTimeout(() => {
          document.getElementById('models-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <main className="min-h-screen bg-dark-900">
      {/* Custom animations */}
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-solutions.jpg)' }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-dark-900/80" />

        {/* Network pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="networkPatternML" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="#22c55e" opacity="0.5" />
                <line x1="50" y1="50" x2="100" y2="0" stroke="#22c55e" strokeWidth="0.5" opacity="0.2" />
                <line x1="50" y1="50" x2="0" y2="100" stroke="#22c55e" strokeWidth="0.5" opacity="0.2" />
                <line x1="50" y1="50" x2="100" y2="100" stroke="#22c55e" strokeWidth="0.5" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#networkPatternML)" />
          </svg>
        </div>

        <NetworkBackground nodeCount={60} />

        <div className="relative z-10 max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Text Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">ML Model Library</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI Models That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                  Deliver Results
                </span>
              </h1>
              <p className="text-xl text-neutral-400 leading-relaxed mb-12">
                Production-ready ML solutions powered by leading AI platforms.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-400">6</div>
                  <div className="text-neutral-400 text-sm">Industry Verticals</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-400">24+</div>
                  <div className="text-neutral-400 text-sm">ML Solutions</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-400">99%</div>
                  <div className="text-neutral-400 text-sm">Accuracy</div>
                </div>
              </div>
            </div>

            {/* Right - 3D Isometric Stack Visual */}
            <div className="hidden lg:block">
              <HeroModelStack />
            </div>
          </div>
        </div>
      </section>

      {/* Category Selector */}
      <section id="models-section" className="bg-dark-800/90 backdrop-blur-md border-y border-dark-700 sticky top-16 z-20">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-3 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-green-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-dark-700/50 text-neutral-400 hover:bg-dark-700 hover:text-white border border-dark-600 hover:border-primary-500/30'
                }`}
              >
                {/* Glow effect for active */}
                {activeCategory === category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-green-500 rounded-full blur-md opacity-40" />
                )}
                <span className={`relative ${activeCategory === category.id ? 'text-white' : 'text-neutral-500 group-hover:text-primary-400'} transition-colors`}>
                  {category.icon}
                </span>
                <span className="relative">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Category Models */}
      {activeData && (
        <section className="py-20 relative overflow-hidden">
          {/* Animated particle background */}
          <AnimatedBackground />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-transparent to-dark-900 pointer-events-none" />
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary-500/5 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-500/5 to-transparent pointer-events-none" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]"
               style={{
                 backgroundImage: `linear-gradient(to right, #22c55e 1px, transparent 1px),
                                   linear-gradient(to bottom, #22c55e 1px, transparent 1px)`,
                 backgroundSize: '60px 60px'
               }} />

          {/* Floating decorative elements with animations */}
          <div className="absolute left-[5%] top-20 w-5 h-5 border-2 border-primary-500/40 rotate-45 animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute right-[8%] top-32 w-4 h-4 bg-primary-500/30 rotate-45 animate-pulse" />
          <div className="absolute left-[3%] top-1/3 w-6 h-6 border border-primary-500/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute right-[5%] top-1/2 w-3 h-3 bg-primary-500/30 rotate-45 animate-ping" style={{ animationDuration: '2s' }} />
          <div className="absolute left-[6%] bottom-1/3 w-4 h-4 bg-primary-500/20 rotate-45 animate-pulse" />
          <div className="absolute right-[4%] bottom-40 w-5 h-5 border-2 border-primary-500/30 rotate-45 animate-bounce" style={{ animationDuration: '4s' }} />
          <div className="absolute left-[4%] bottom-20 w-3 h-3 bg-primary-500/20 rotate-45 animate-pulse" />
          <div className="absolute right-[7%] bottom-24 w-4 h-4 border border-primary-500/25 rotate-45 animate-spin" style={{ animationDuration: '15s' }} />

          {/* Large floating orbs */}
          <div className="absolute -left-20 top-1/4 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute -right-20 top-2/3 w-60 h-60 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute left-1/3 -bottom-10 w-48 h-48 bg-primary-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />

          <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Category Header */}
            <div className="text-center mb-16 relative">
              {/* Glowing icon container */}
              <div className="relative inline-block mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-green-500 rounded-3xl opacity-20 blur-xl animate-pulse" />
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 text-primary-400 border border-primary-500/30 flex items-center justify-center">
                  <div className="w-10 h-10 flex items-center justify-center">
                    {activeData.icon}
                  </div>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {activeData.name}
              </h2>
              <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-green-400 font-semibold">
                {activeData.tagline}
              </p>

              {/* Decorative line */}
              <div className="mt-8 flex items-center justify-center gap-2">
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary-500/50" />
                <div className="w-2 h-2 bg-primary-500 rotate-45" />
                <div className="w-24 h-[2px] bg-primary-500/50" />
                <div className="w-2 h-2 bg-primary-500 rotate-45" />
                <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary-500/50" />
              </div>
            </div>

            {/* Model Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {activeData.solutions.map((solution, index) => (
                <div
                  key={index}
                  className="transform transition-all duration-500"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <ModelCardEnhanced
                    title={solution.title}
                    description={solution.description}
                    inputLabel={solution.inputLabel}
                    inputIcon={solution.inputIcon}
                    outputLabel={solution.outputLabel}
                    outputIcon={solution.outputIcon}
                    models={solution.models}
                    metric={solution.metric}
                    metricValue={solution.metricValue}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Categories Overview */}
      <section className="py-20 bg-dark-800/50 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-transparent pointer-events-none" />
        <div className="absolute -left-40 top-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />

        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore All Categories
            </h2>
            <p className="text-lg text-neutral-400">
              ML solutions across every business domain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  document.getElementById('models-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group relative text-left p-6 rounded-2xl border transition-all duration-500 ${
                  activeCategory === category.id
                    ? 'border-primary-500 bg-primary-500/10'
                    : 'border-dark-700 bg-dark-800/50 hover:border-primary-500/50 hover:bg-dark-800'
                } hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1`}
              >
                {/* Hover glow */}
                <div className="absolute -inset-px bg-gradient-to-r from-primary-500 to-green-500 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500" />

                <div className="relative">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-br from-primary-500 to-green-500 text-white shadow-lg shadow-primary-500/30'
                        : 'bg-dark-700 text-neutral-400 group-hover:text-primary-400 group-hover:bg-dark-600'
                    }`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-neutral-500 text-sm">{category.tagline}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Powered By Section */}
      <section className="py-16 border-t border-dark-700 relative overflow-hidden">
        {/* Subtle animated gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent animate-shimmer" />

        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-neutral-500 text-sm mb-10 uppercase tracking-wider">Powered by leading AI platforms</p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="group flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <OpenAILogo className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">OpenAI</span>
            </div>
            <div className="group flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-[#D4A27F] flex items-center justify-center group-hover:scale-110 transition-transform">
                <AnthropicLogo className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">Anthropic</span>
            </div>
            <div className="group flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                <img src="/logos/google-gemini-icon.webp" alt="Gemini" className="w-7 h-7 object-contain" />
              </div>
              <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">Google AI</span>
            </div>
            <div className="group flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 rounded-lg overflow-hidden group-hover:scale-110 transition-transform">
                <img src="/logos/Meta-ai-logo.webp" alt="Meta AI" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">Meta AI</span>
            </div>
            <div className="group flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-black p-1 overflow-hidden group-hover:scale-110 transition-transform">
                <img src="/logos/Mistral_AI_logo_(2025–).svg.png" alt="Mistral" className="w-full h-full object-contain" />
              </div>
              <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">Mistral</span>
            </div>
            <div className="group flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 rounded-lg overflow-hidden group-hover:scale-110 transition-transform">
                <img src="/logos/hf-logo.png" alt="Hugging Face" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">Hugging Face</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-green-500/10 to-primary-600/20 animate-gradient-x" />

        {/* Floating orbs */}
        <div className="absolute -left-20 top-1/2 w-60 h-60 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -right-20 top-1/2 w-60 h-60 bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{
               backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                                 linear-gradient(to bottom, #fff 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }} />

        {/* Floating diamonds */}
        <div className="absolute left-[10%] top-[20%] w-4 h-4 border border-white/20 rotate-45 animate-float-up-down" />
        <div className="absolute right-[15%] top-[30%] w-3 h-3 bg-white/10 rotate-45 animate-float-up-down" style={{ animationDelay: '1s' }} />
        <div className="absolute left-[20%] bottom-[25%] w-5 h-5 border border-white/10 rotate-45 animate-float-up-down" style={{ animationDelay: '2s' }} />
        <div className="absolute right-[10%] bottom-[20%] w-4 h-4 bg-white/5 rotate-45 animate-float-up-down" style={{ animationDelay: '0.5s' }} />

        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Deploy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-green-400">
              ML Solutions
            </span>
            ?
          </h2>
          <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
            Our team delivers production-ready models tailored to your business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-green-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">Schedule Consultation</span>
            </Link>
            <Link
              href="/case-studies"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              View Case Studies
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
